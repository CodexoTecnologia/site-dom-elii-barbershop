/**
 * Gera o id de uma seção a partir do texto do título.
 *
 * Usado nas duas pontas: no índice do artigo (para montar o link) e no próprio
 * heading (para virar o alvo). Precisa ser determinístico — se as duas gerarem
 * strings diferentes, o link não leva a lugar nenhum.
 */
export function slugify(texto: string): string {
  return (
    texto
      .normalize("NFD")
      // remove os acentos que a normalização separou em caracteres próprios
      .replace(/[̀-ͯ]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .slice(0, 60)
  );
}
