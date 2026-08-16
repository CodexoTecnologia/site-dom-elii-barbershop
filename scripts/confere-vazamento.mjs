/**
 * Confere que nada de uso interno chegou ao navegador.
 *
 * Roda sozinho depois de `npm run build` (script `postbuild`) e derruba o
 * build se achar algo. Não roda no navegador nem no servidor: é só uma
 * leitura de arquivos já gerados, então o site não paga nada por isso.
 *
 * POR QUE EXISTE:
 * comentário de código (`//`, `/* *\/`, `{/* *\/}`) some na minificação, e é
 * por isso que hoje nada vaza. Mas três coisas quebram essa garantia sem
 * ninguém perceber:
 *   - comentário HTML de verdade (`<!-- -->`) escrito dentro do JSX, que é
 *     impresso literal na página;
 *   - anotação interna escrita numa STRING em vez de num comentário;
 *   - source map de produção ligado, que publica o código-fonte inteiro,
 *     comentários e tudo.
 *
 * O script cobre os três.
 *
 * Uso avulso: node scripts/confere-vazamento.mjs
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, extname } from "node:path";

/**
 * Marcas que jamais devem sair daqui.
 *
 * São anotações de trabalho interno — pendência, aviso para a equipe, nome de
 * quem precisa confirmar. Não confundir com o vocabulário do site: termos que
 * aparecem em texto de verdade (preço, horário, nome de serviço) não entram
 * nesta lista, senão o script viraria fonte de alarme falso e seria ignorado.
 */
const SENTINELAS = [
  "TODO",
  "FIXME",
  "HACK:",
  "XXX",
  "CONFIRMAR COM",
  "VALIDAR COM",
  "PROVISÓRIO",
  "NÃO COMMITAR",
  "FALTAM AS FOTOS",
  "PARA DESLIGAR",
  "PARA TIRAR",
];

const TODO_COMENTARIO_HTML = /<!--[\s\S]*?-->/g;

/**
 * Comentários que o próprio React emite e que precisam existir.
 *
 * `<!--$`, `<!--/$`, `<!--$?` e `<!--$!` delimitam fronteiras de Suspense no
 * HTML transmitido. `<!-- -->` separa dois nós de texto vizinhos — sem ele o
 * navegador juntaria os dois num nó só e a hidratação não bateria com a
 * árvore do servidor.
 *
 * Nada disso carrega informação nossa, então não é vazamento.
 */
function ehDoReact(comentario) {
  return (
    comentario === "<!-- -->" ||
    comentario.startsWith("<!--$") ||
    comentario.startsWith("<!--/$")
  );
}

const alvos = [
  { dir: ".next/static", rotulo: "bundle do navegador" },
  { dir: ".next/server/app", rotulo: "HTML pré-renderizado" },
];

const EXTENSOES = new Set([".js", ".css", ".html", ".txt", ".rsc"]);

function listar(dir) {
  const encontrados = [];
  let entradas;
  try {
    entradas = readdirSync(dir, { withFileTypes: true });
  } catch {
    return encontrados; // diretório pode não existir em build parcial
  }
  for (const e of entradas) {
    const caminho = join(dir, e.name);
    if (e.isDirectory()) encontrados.push(...listar(caminho));
    else encontrados.push(caminho);
  }
  return encontrados;
}

const problemas = [];
let arquivosLidos = 0;
let bytesLidos = 0;

for (const { dir, rotulo } of alvos) {
  for (const caminho of listar(dir)) {
    const ext = extname(caminho).toLowerCase();

    // Source map em static publica o fonte original, comentários inclusive.
    if (ext === ".map" && dir === ".next/static") {
      problemas.push(`${caminho}: source map exposto ao navegador`);
      continue;
    }

    if (!EXTENSOES.has(ext)) continue;

    const conteudo = readFileSync(caminho, "utf8");
    arquivosLidos++;
    bytesLidos += statSync(caminho).size;

    for (const marca of SENTINELAS) {
      if (conteudo.includes(marca)) {
        problemas.push(`${caminho}: contém "${marca}" (${rotulo})`);
      }
    }

    if (ext === ".html") {
      const nossos = (conteudo.match(TODO_COMENTARIO_HTML) ?? []).filter(
        (c) => !ehDoReact(c)
      );
      for (const c of new Set(nossos)) {
        const trecho = c.length > 70 ? `${c.slice(0, 70)}…` : c;
        problemas.push(`${caminho}: comentário HTML na página — ${trecho}`);
      }
    }
  }
}

const mb = (bytesLidos / 1024 / 1024).toFixed(1);

if (problemas.length > 0) {
  console.error(`\n✗ vazamento para o navegador (${problemas.length}):\n`);
  for (const p of problemas) console.error(`  ${p}`);
  console.error(
    "\nTire o texto do arquivo entregue ou reescreva como comentário de código.\n"
  );
  process.exit(1);
}

console.log(
  `✓ nada interno no navegador (${arquivosLidos} arquivos, ${mb} MB conferidos)`
);
