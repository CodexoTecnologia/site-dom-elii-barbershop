/**
 * Gera os ícones do site a partir das duas versões da logo.
 *
 * Uso: node scripts/gera-icones.mjs
 *
 * POR QUE DOIS ÍCONES:
 * O favicon aparece sobre o fundo da aba do navegador, não sobre o site.
 * Em tema claro a aba é branca e a logo branca sumiria; em tema escuro
 * acontece o inverso com a preta. Então geramos os dois e deixamos o
 * navegador escolher por `prefers-color-scheme` (declarado em layout.tsx).
 *
 * Os dois são gerados com fundo TRANSPARENTE: na aba, a logo fica sobre a
 * cor do próprio navegador, sem um quadrado preto em volta.
 *
 * TAMANHO 192px NÃO É ARBITRÁRIO: o Google só considera favicons quadrados
 * cujo lado seja múltiplo de 48. Com 256px ele descarta o ícone e mostra o
 * globo genérico no resultado de busca.
 *
 * Não geramos mais `favicon.ico`: ele é um arquivo só, não muda com o tema e
 * precisaria de fundo sólido para ser legível nos dois. Todo navegador atual
 * lê favicon em PNG.
 *
 * Saídas:
 *   public/icon-claro.png    512  logo preta, para abas de tema claro
 *   public/icon-escuro.png   512  logo branca, para abas de tema escuro
 *   public/apple-icon.png    180  iOS ignora transparência: vai sobre preto
 *   public/icon-192.png      192  manifest (Android), sobre preto
 *   public/icon-512.png      512  manifest (Android), sobre preto
 */
import { readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

const PRETO = { r: 10, g: 10, b: 10, alpha: 1 }; // #0A0A0A
const TRANSPARENTE = { r: 0, g: 0, b: 0, alpha: 0 };

/**
 * Folga em volta do desenho, já DEPOIS de recortar o vazio do arquivo.
 *
 * As duas logos vêm com ~79px de margem transparente embutida: o desenho
 * ocupa só 69% do PNG. Sem recortar, essa margem se soma à folga e mais de
 * um terço do favicon vira espaço vazio — o ícone fica pequeno na aba.
 */
const FOLGA = 0.06;

const logoBranca = await readFile("public/logo-dom-elii-transparent.png");
const logoPreta = await readFile("public/logo-dom-elii-preta.png");

async function montar(logo, tamanho, fundo) {
  const desenho = Math.round(tamanho * (1 - FOLGA * 2));
  const margem = Math.round((tamanho - desenho) / 2);

  const marca = await sharp(logo)
    // corta a margem transparente do arquivo antes de escalar
    .trim({ background: TRANSPARENTE, threshold: 10 })
    .resize(desenho, desenho, { fit: "contain", background: TRANSPARENTE })
    .toBuffer();

  return sharp({
    create: { width: tamanho, height: tamanho, channels: 4, background: fundo },
  })
    .composite([{ input: marca, top: margem, left: margem }])
    // A logo é um desenho de duas cores: paleta indexada corta ~90% do peso
    // sem diferença visível. O favicon é baixado em toda visita.
    .png({ compressionLevel: 9, palette: true, quality: 90 })
    .toBuffer();
}

const kb = (b) => `${(b.length / 1024).toFixed(1)} KB`;

const saidas = [
  ["public/icon-claro.png", await montar(logoPreta, 192, TRANSPARENTE), "logo preta: padrão e abas claras"],
  ["public/icon-escuro.png", await montar(logoBranca, 192, TRANSPARENTE), "logo branca: abas escuras"],
  ["public/apple-icon.png", await montar(logoBranca, 180, PRETO), "iOS, sobre preto"],
  ["public/icon-192.png", await montar(logoBranca, 192, PRETO), "manifest"],
  ["public/icon-512.png", await montar(logoBranca, 512, PRETO), "manifest"],
];

for (const [caminho, buffer, nota] of saidas) {
  await writeFile(caminho, buffer);
  console.log(`✓ ${caminho.padEnd(26)} ${kb(buffer).padStart(8)}  ${nota}`);
}
