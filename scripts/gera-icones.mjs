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
 * O `favicon.ico` volta a existir, mas só como REDE DE SEGURANÇA: rastreadores
 * antigos e agregadores que ignoram o <link rel="icon"> tentam /favicon.ico
 * direto na raiz. Sem o arquivo, a rota caía no 404 do Next — 68 KB de HTML
 * devolvidos com content-type text/html para quem pediu uma imagem.
 *
 * Fica em public/, e não em app/favicon.ico, de propósito: a convenção de
 * arquivo injetaria um <link rel="icon" href="/favicon.ico" sizes="any"> no
 * <head>, competindo com os dois PNGs declarados em layout.tsx. Em public/ ele
 * é servido na raiz sem aparecer no HTML — atende quem procura às cegas e
 * deixa o markup declarado como fonte primária.
 *
 * Leva a logo preta, a mesma escolha do ícone padrão: quem lê .ico costuma
 * desenhar sobre fundo claro.
 *
 * Saídas:
 *   public/icon-claro.png    192  logo preta, padrão e abas de tema claro
 *   public/icon-escuro.png   192  logo branca, para abas de tema escuro
 *   public/favicon.ico    48/96/192  fallback de raiz, logo preta
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

/**
 * Empacota PNGs num container .ico.
 *
 * O formato aceita PNG embutido desde o Windows Vista, então não há conversão
 * de bitmap aqui: cada tamanho entra como o PNG que o sharp já produziu.
 *
 * Layout: cabeçalho de 6 bytes, uma entrada de 16 bytes por imagem, depois os
 * payloads em sequência. No campo de lado, 0 significaria 256 — todos os
 * nossos tamanhos são menores que isso, então vão literais.
 */
function empacotarIco(imagens) {
  const CABECALHO = 6;
  const ENTRADA = 16;
  const inicio = CABECALHO + ENTRADA * imagens.length;

  const dir = Buffer.alloc(inicio);
  dir.writeUInt16LE(0, 0); // reservado
  dir.writeUInt16LE(1, 2); // 1 = ícone
  dir.writeUInt16LE(imagens.length, 4);

  let deslocamento = inicio;
  imagens.forEach(({ lado, buffer }, i) => {
    const p = CABECALHO + ENTRADA * i;
    dir.writeUInt8(lado, p);
    dir.writeUInt8(lado, p + 1);
    dir.writeUInt8(0, p + 2); // paleta: 0 = sem tabela de cores
    dir.writeUInt8(0, p + 3); // reservado
    dir.writeUInt16LE(1, p + 4); // planos
    dir.writeUInt16LE(32, p + 6); // bits por pixel
    dir.writeUInt32LE(buffer.length, p + 8);
    dir.writeUInt32LE(deslocamento, p + 12);
    deslocamento += buffer.length;
  });

  return Buffer.concat([dir, ...imagens.map((i) => i.buffer)]);
}

const kb = (b) => `${(b.length / 1024).toFixed(1)} KB`;

const ico = empacotarIco(
  await Promise.all(
    [48, 96, 192].map(async (lado) => ({
      lado,
      buffer: await montar(logoPreta, lado, TRANSPARENTE),
    }))
  )
);

const saidas = [
  ["public/icon-claro.png", await montar(logoPreta, 192, TRANSPARENTE), "logo preta: padrão e abas claras"],
  ["public/favicon.ico", ico, "fallback de raiz, 48/96/192"],
  ["public/icon-escuro.png", await montar(logoBranca, 192, TRANSPARENTE), "logo branca: abas escuras"],
  ["public/apple-icon.png", await montar(logoBranca, 180, PRETO), "iOS, sobre preto"],
  ["public/icon-192.png", await montar(logoBranca, 192, PRETO), "manifest"],
  ["public/icon-512.png", await montar(logoBranca, 512, PRETO), "manifest"],
];

for (const [caminho, buffer, nota] of saidas) {
  await writeFile(caminho, buffer);
  console.log(`✓ ${caminho.padEnd(26)} ${kb(buffer).padStart(8)}  ${nota}`);
}
