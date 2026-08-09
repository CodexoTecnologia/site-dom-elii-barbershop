/**
 * Converte as fotos da loja de PNG para WebP e dá nomes descritivos.
 *
 * PNG é formato errado para fotografia: guarda pixel a pixel sem perda, o que
 * faz sentido para logo e print de tela, não para foto. WebP com qualidade 74
 * é visualmente idêntico aqui e pesa uma fração.
 *
 * Os PNGs originais vão para midia-arquivo/originais-loja/ (fora de public,
 * então não vão para o build) em vez de serem apagados.
 */
import { readFile, writeFile, rename, mkdir } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const mapa = [
  ["geladeira1.png", "geladeira-bebidas-geladas.webp"],
  ["geladeira2.png", "geladeira-interior-abastecida.webp"],
  ["rawasurfwear1.png", "loja-rawa-surf-wear-araras.webp"],
  ["rawasurfwear2.png", "loja-rawa-surf-wear-vitrine.webp"],
  ["classea1.png", "produto-classe-a-pomada-1.webp"],
  ["classea2.png", "produto-classe-a-pomada-2.webp"],
  ["classea3.png", "produto-classe-a-pomada-3.webp"],
  ["classea4.png", "produto-classe-a-pomada-4.webp"],
  ["tocton1.png", "produto-tocton-cera-1.webp"],
  ["tocton2.png", "produto-tocton-cera-2.webp"],
  ["tocton3.png", "produto-tocton-cera-3.webp"],
];

const destinoArquivo = "midia-arquivo/originais-loja";
await mkdir(destinoArquivo, { recursive: true });

const kb = (b) => `${(b / 1024).toFixed(0)} KB`;
let antes = 0;
let depois = 0;

for (const [origem, saida] of mapa) {
  const caminho = join("public", origem);
  const bruto = await readFile(caminho);

  const buffer = await sharp(bruto)
    .flatten({ background: "#0A0A0A" }) // remove o canal alfa não usado
    .webp({ quality: 74 })
    .toBuffer();

  await writeFile(join("public", saida), buffer);
  await rename(caminho, join(destinoArquivo, origem));

  antes += bruto.length;
  depois += buffer.length;
  console.log(
    `✓ ${origem} -> ${saida}: ${kb(bruto.length)} -> ${kb(buffer.length)}`
  );
}

console.log(
  `\nTotal: ${kb(antes)} -> ${kb(depois)} (-${((1 - depois / antes) * 100).toFixed(0)}%)`
);
