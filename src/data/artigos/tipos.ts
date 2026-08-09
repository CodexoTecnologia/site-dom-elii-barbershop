/**
 * Tipos do editorial. Cada artigo mora em seu próprio arquivo nesta pasta e
 * é registrado em `index.ts`.
 */

export type BlocoConteudo =
  | { tipo: "p"; texto: string }
  | { tipo: "h2"; texto: string }
  | { tipo: "h3"; texto: string }
  | { tipo: "ul"; itens: string[] }
  | { tipo: "citacao"; texto: string }
  /**
   * Imagem no meio do texto. Carrega com lazy loading, então não pesa no
   * carregamento inicial por mais que o artigo tenha.
   *
   * Use SEMPRE foto própria da barbearia ou de banco com licença livre.
   * Imagem tirada de busca do Google tem direito autoral e expõe o negócio.
   */
  | { tipo: "imagem"; src: string; alt: string; legenda?: string }
  /** Caixa de destaque para um aviso ou dica prática. */
  | { tipo: "destaque"; titulo: string; texto: string };

export type Artigo = {
  /** Vira a URL em /blog/[slug]. Só minúsculas, sem acento, com hífen. */
  slug: string;
  titulo: string;
  /** Usado no <title>. Se ausente, cai no `titulo`. Ideal: até 60 caracteres. */
  tituloSeo?: string;
  /** Aparece no card e na busca do Google. Até ~160 caracteres. */
  resumo: string;
  categoria: string;
  /** ISO 8601 (YYYY-MM-DD). É o que o Google lê como data de publicação. */
  publicadoEm: string;
  atualizadoEm?: string;
  autor: string;
  tempoLeitura: string;
  imagem: string;
  imagemAlt: string;
  conteudo: BlocoConteudo[];
};
