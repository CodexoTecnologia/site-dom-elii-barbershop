/**
 * Recomprime as imagens de /public no lugar.
 *
 * Uso: node scripts/otimizar-imagens.mjs
 *
 * O next/image já converte para AVIF/WebP na entrega, mas o arquivo-fonte
 * pesado continua custando tempo de build, banda de deploy e tamanho de repo.
 * Este script corta o peso da origem sem mudar dimensão visível.
 *
 * Os originais estão versionados no git — para reverter: git checkout -- public/
 */
import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import { join, extname } from "node:path";
import sharp from "sharp";

const DIR = "public";
const LARGURA_MAXIMA = 1600;
const LARGURA_MAXIMA_LOGO = 512;
const QUALIDADE_JPEG = 78;

const kb = (bytes) => `${(bytes / 1024).toFixed(0)} KB`;

const arquivos = await readdir(DIR);
let antes = 0;
let depois = 0;

for (const nome of arquivos) {
  const ext = extname(nome).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;

  const caminho = join(DIR, nome);
  const tamanhoOriginal = (await stat(caminho)).size;

  const ehLogo = nome.includes("logo");
  const largura = ehLogo ? LARGURA_MAXIMA_LOGO : LARGURA_MAXIMA;

  // Lê para a memória antes de processar: no Windows, deixar o sharp com o
  // arquivo aberto impede a escrita no mesmo caminho.
  const original = await readFile(caminho);

  let pipeline = sharp(original).rotate().resize({
    width: largura,
    withoutEnlargement: true,
  });

  // PNG só é mantido onde a transparência importa (logo).
  pipeline =
    ext === ".png"
      ? pipeline.png({ compressionLevel: 9, palette: true, quality: 82 })
      : pipeline.jpeg({ quality: QUALIDADE_JPEG, mozjpeg: true });

  const buffer = await pipeline.toBuffer();

  if (buffer.length >= tamanhoOriginal) {
    console.log(`= ${nome} (já otimizado, mantido em ${kb(tamanhoOriginal)})`);
    antes += tamanhoOriginal;
    depois += tamanhoOriginal;
    continue;
  }

  await writeFile(caminho, buffer);
  antes += tamanhoOriginal;
  depois += buffer.length;

  const reducao = (1 - buffer.length / tamanhoOriginal) * 100;
  console.log(
    `✓ ${nome}: ${kb(tamanhoOriginal)} -> ${kb(buffer.length)} (-${reducao.toFixed(0)}%)`
  );
}

console.log(
  `\nTotal: ${kb(antes)} -> ${kb(depois)} (-${((1 - depois / antes) * 100).toFixed(0)}%)`
);
