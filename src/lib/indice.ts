import type { BlocoConteudo } from "@/data/artigos";
import type { ItemIndice } from "@/components/ui/IndiceArtigo";
import { slugify } from "./slug";

/**
 * Monta o índice de um artigo a partir dos seus próprios títulos.
 *
 * Não existe lista separada para manter em dia: um `h2` novo no conteúdo
 * aparece no índice sozinho. A numeração segue 1, 2, 2.1, 2.2, 3…
 */
export function montarIndice(conteudo: BlocoConteudo[]): ItemIndice[] {
  const itens: ItemIndice[] = [];
  let h2 = 0;
  let h3 = 0;

  for (const bloco of conteudo) {
    if (bloco.tipo === "h2") {
      h2 += 1;
      h3 = 0;
      itens.push({
        id: slugify(bloco.texto),
        texto: bloco.texto,
        nivel: 2,
        numero: String(h2),
      });
    } else if (bloco.tipo === "h3") {
      h3 += 1;
      itens.push({
        id: slugify(bloco.texto),
        texto: bloco.texto,
        nivel: 3,
        numero: `${h2}.${h3}`,
      });
    }
  }

  return itens;
}
