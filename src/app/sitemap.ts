import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/negocio";
import { artigosBlog } from "@/data/artigos";

/**
 * Sitemap gerado a partir dos dados. Artigo novo em src/data/artigos.ts
 * entra aqui sozinho — não há lista manual para esquecer de atualizar.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const agora = new Date();

  const fixas: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: agora, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/servicos`, lastModified: agora, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/barbearia-curitiba`, lastModified: agora, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified: agora, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/faq`, lastModified: agora, changeFrequency: "monthly", priority: 0.6 },
    // /termos fica de fora de propósito: a página é noindex, e listar uma URL
    // noindex no sitemap gera aviso de cobertura no Search Console.
  ];

  const artigos: MetadataRoute.Sitemap = artigosBlog.map((artigo) => ({
    url: `${SITE_URL}/blog/${artigo.slug}`,
    lastModified: new Date(artigo.atualizadoEm ?? artigo.publicadoEm),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...fixas, ...artigos];
}
