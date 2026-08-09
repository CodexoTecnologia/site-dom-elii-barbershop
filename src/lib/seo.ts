/**
 * Fábrica de metadata das páginas.
 *
 * Toda página deve exportar seu metadata a partir daqui — assim canonical,
 * Open Graph e Twitter Card ficam consistentes e impossíveis de esquecer.
 *
 * Lembrete do Next 16: `metadata` e `generateMetadata` só funcionam em Server
 * Components. Páginas com animação ficam divididas em `page.tsx` (server, com
 * o metadata) + `*Client.tsx` (com "use client").
 */

import type { Metadata } from "next";
import { negocio, SITE_URL } from "@/data/negocio";

type Entrada = {
  titulo: string;
  descricao: string;
  /** Caminho relativo iniciando com "/". Vira canonical + og:url. */
  caminho: string;
  /** Caminho de imagem em /public. Sem isso, usa o OG padrão do site. */
  imagem?: string;
  imagemAlt?: string;
  tipo?: "website" | "article";
  publicadoEm?: string;
  autor?: string;
  /** true em páginas que não devem ser indexadas (ex.: legais). */
  naoIndexar?: boolean;
};

export function criarMetadata({
  titulo,
  descricao,
  caminho,
  imagem,
  imagemAlt,
  tipo = "website",
  publicadoEm,
  autor,
  naoIndexar = false,
}: Entrada): Metadata {
  /**
   * Quando uma página declara `openGraph`, o objeto SUBSTITUI o do layout em
   * vez de mesclar — sem este fallback explícito as rotas internas saem sem
   * og:image e o link fica sem preview no WhatsApp. `/opengraph-image` é a
   * imagem gerada em src/app/opengraph-image.tsx.
   */
  const imagens = [
    {
      url: imagem ?? "/opengraph-image",
      width: 1200,
      height: 630,
      alt: imagemAlt ?? titulo,
    },
  ];

  return {
    title: titulo,
    description: descricao,
    alternates: { canonical: caminho },
    ...(naoIndexar ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      type: tipo,
      title: titulo,
      description: descricao,
      url: caminho,
      siteName: negocio.nome,
      locale: "pt_BR",
      images: imagens,
      ...(tipo === "article" && publicadoEm
        ? { publishedTime: publicadoEm, authors: autor ? [autor] : undefined }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: titulo,
      description: descricao,
      images: imagens.map((i) => i.url),
    },
  };
}

export const urlAbsoluta = (caminho: string) => `${SITE_URL}${caminho}`;
