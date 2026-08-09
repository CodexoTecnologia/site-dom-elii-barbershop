/**
 * EDITORIAL / BLOG — registro dos artigos.
 *
 * Cada artigo vive em seu próprio arquivo nesta pasta. Aqui eles são apenas
 * registrados e ordenados por data. Um arquivo por artigo porque o conteúdo
 * é longo: com dez textos completos, um array único passaria de mil linhas.
 *
 * PARA PUBLICAR UM ARTIGO NOVO:
 *   1. crie `src/data/artigos/<slug>.ts` exportando `artigo` (copie qualquer
 *      um dos existentes como modelo)
 *   2. importe e acrescente na lista abaixo
 *
 * A URL, o <title>, a descrição, o schema BlogPosting e a entrada no sitemap
 * são gerados a partir daí — não há mais nenhuma lista para atualizar.
 */

import type { Artigo } from "./tipos";

import { artigo as quantoCusta } from "./quanto-custa-cortar-cabelo-em-curitiba";
import { artigo as barbeiroBom } from "./como-saber-se-o-barbeiro-e-bom";
import { artigo as degrade } from "./degrade-masculino-tipos-de-fade";
import { artigo as finalizadores } from "./pomada-cera-ou-po-qual-usar";
import { artigo as frequencia } from "./com-que-frequencia-voltar-a-barbearia";
import { artigo as cuidadosCasa } from "./como-cuidar-do-cabelo-em-casa";
import { artigo as barbaFalhada } from "./barba-falhada-o-que-fazer";
import { artigo as sobrancelha } from "./sobrancelha-masculina-o-que-esperar";
import { artigo as visagismo } from "./visagismo-masculino-corte-ideal-formato-de-rosto";
import { artigo as barbaInverno } from "./tendencias-de-barba-em-curitiba-para-o-inverno";
import { artigo as platinado } from "./platinado-masculino-como-manter-cabelo-saudavel";

const registro: Artigo[] = [
  quantoCusta,
  barbeiroBom,
  degrade,
  finalizadores,
  frequencia,
  cuidadosCasa,
  barbaFalhada,
  sobrancelha,
  visagismo,
  barbaInverno,
  platinado,
];

/** Mais recentes primeiro. A ordem do array acima não importa. */
export const artigosBlog: Artigo[] = [...registro].sort((a, b) =>
  b.publicadoEm.localeCompare(a.publicadoEm)
);

export function encontrarArtigo(slug: string): Artigo | undefined {
  return artigosBlog.find((a) => a.slug === slug);
}

const MESES = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

/**
 * Ex.: "2026-05-10" -> "10 de maio de 2026".
 *
 * Sem `toLocaleDateString`: o resultado dele depende dos dados de locale
 * instalados, que podem diferir entre o Node do servidor e o navegador do
 * cliente — e qualquer diferença aqui quebra a hidratação do React.
 */
export function dataLegivel(iso: string): string {
  const [ano, mes, dia] = iso.split("-").map(Number);
  return `${String(dia).padStart(2, "0")} de ${MESES[mes - 1]} de ${ano}`;
}

export type { Artigo, BlocoConteudo } from "./tipos";
