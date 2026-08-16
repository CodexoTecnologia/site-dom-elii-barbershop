/**
 * Converte as capas do Instagram para WebP, mantendo o nome do arquivo.
 *
 * Uso: node scripts/converte-fotos-instagram.mjs
 *
 * POR QUE NÃO BASTA O otimizar-imagens:
 * aquele recomprime dentro do mesmo formato. PNG é formato errado para
 * fotografia — guarda pixel a pixel sem perda, o que faz sentido para logo e
 * print de tela, não para foto. Aqui a troca é de FORMATO, e por isso o
 * arquivo muda de extensão.
 *
 * O NOME BASE É PRESERVADO de propósito: ele carrega o código do post
 * (`instagram-1-C-WKj4qAbVS`), que é como se confere se a foto na tela aponta
 * para a publicação certa em src/data/instagram.ts.
 *
 * Os originais vão para midia-arquivo/originais-instagram/, fora de public,
 * então não entram no build nem no deploy. Nada é apagado.
 */
import { readdir, readFile, writeFile, rename, mkdir } from "node:fs/promises";
import { join, extname, basename } from "node:path";
import sharp from "sharp";

const PASTA = "public/instagram";
const ARQUIVO = "midia-arquivo/originais-instagram";
const QUALIDADE = 74;

/**
 * Menor lado aceitável. A grade mostra a foto em cerca de 200 px, mas tela
 * retina pede o dobro — e o Instagram entrega 1080 px, então não há motivo
 * para subir menos que isso.
 */
const LADO_MINIMO = 800;

/**
 * Teto de largura. O Instagram entrega capa em 1080 px e a grade mostra a
 * imagem em cerca de 200 px — guardar mais que isso engorda repositório e
 * deploy sem mudar um pixel do que o visitante vê.
 */
const LARGURA_MAXIMA = 1080;

const kb = (b) => `${(b / 1024).toFixed(0)} KB`;

await mkdir(ARQUIVO, { recursive: true });

const arquivos = (await readdir(PASTA)).filter((n) =>
  [".png", ".jpg", ".jpeg"].includes(extname(n).toLowerCase())
);

if (arquivos.length === 0) {
  console.log("nada para converter em " + PASTA);
  process.exit(0);
}

let antes = 0;
let depois = 0;
const pequenas = [];

for (const nome of arquivos) {
  const caminho = join(PASTA, nome);
  const bruto = await readFile(caminho);

  const { width, height } = await sharp(bruto).metadata();
  if (Math.min(width, height) < LADO_MINIMO) {
    pequenas.push(`${nome} (${width}x${height})`);
  }

  const saida = `${basename(nome, extname(nome))}.webp`;
  const buffer = await sharp(bruto)
    // remove o canal alfa: capa de post não tem transparência de verdade, e
    // o canal extra só engorda o arquivo
    .flatten({ background: "#0A0A0A" })
    .resize({ width: LARGURA_MAXIMA, withoutEnlargement: true })
    .webp({ quality: QUALIDADE })
    .toBuffer();

  await writeFile(join(PASTA, saida), buffer);
  await rename(caminho, join(ARQUIVO, nome));

  antes += bruto.length;
  depois += buffer.length;
  console.log(`✓ ${nome} -> ${saida}: ${kb(bruto.length)} -> ${kb(buffer.length)}`);
}

console.log(
  `\nTotal: ${kb(antes)} -> ${kb(depois)} (-${((1 - depois / antes) * 100).toFixed(0)}%)`
);

if (pequenas.length > 0) {
  console.log(
    `\n! resolução baixa (menos de ${LADO_MINIMO}px de menor lado):\n  ` +
      pequenas.join("\n  ") +
      "\n  Em tela retina a foto sai borrada. Baixe a capa original do post" +
      "\n  em vez de recortar da tela.\n"
  );
}
