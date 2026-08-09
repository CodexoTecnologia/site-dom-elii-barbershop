/**
 * Geradores de JSON-LD (schema.org).
 *
 * Tudo é derivado de src/data/*. Não escreva dado fixo aqui.
 *
 * AVISO IMPORTANTE — aggregateRating:
 * A nota 5,0 / 83 avaliações vem do Booksy. As diretrizes do Google para
 * dados estruturados proíbem marcar avaliações agregadas coletadas em
 * plataformas de terceiros como se fossem do próprio site ("self-serving
 * reviews"). Fazer isso arrisca ação manual de spam de dados estruturados.
 * Por isso a nota aparece VISUALMENTE no site com link para o Booksy, mas
 * NÃO entra no JSON-LD. Só inclua `aggregateRating` se o site passar a
 * coletar avaliações próprias.
 */

import { negocio, enderecoLinhaUnica, SITE_URL } from "@/data/negocio";
import { equipeData } from "@/data/equipe";
import {
  catalogoServicos,
  duracaoISO,
  type Servico,
} from "@/data/servicos";
import { type Artigo } from "@/data/artigos";

const ID_NEGOCIO = `${SITE_URL}/#barbearia`;
const ID_SITE = `${SITE_URL}/#website`;

function enderecoPostal() {
  return {
    "@type": "PostalAddress",
    streetAddress: `${negocio.endereco.rua}, ${negocio.endereco.numero}`,
    addressLocality: negocio.endereco.cidade,
    addressRegion: negocio.endereco.estado,
    postalCode: negocio.endereco.cep,
    addressCountry: negocio.endereco.pais,
  };
}

function horariosSchema() {
  return negocio.horarios
    .filter((h) => h.abre && h.fecha)
    .map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${h.dia}`,
      opens: h.abre,
      closes: h.fecha,
    }));
}

function ofertaServico(servico: Servico) {
  return {
    "@type": "Offer",
    name: servico.titulo,
    description: servico.descricao,
    price: servico.preco.toFixed(2),
    priceCurrency: negocio.moeda,
    url: `${SITE_URL}/servicos#${servico.slug}`,
    availability: "https://schema.org/InStock",
    itemOffered: {
      "@type": "Service",
      name: servico.titulo,
      description: servico.descricao,
      serviceType: servico.subtitulo,
      provider: { "@id": ID_NEGOCIO },
      ...(servico.duracaoMin
        ? { estimatedDuration: duracaoISO(servico.duracaoMin) }
        : {}),
    },
  };
}

/** LocalBusiness (HairSalon) — o schema mais importante do site. */
export function schemaNegocio() {
  return {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "@id": ID_NEGOCIO,
    name: negocio.nome,
    alternateName: "Dom Elii",
    description: negocio.descricaoLonga,
    url: SITE_URL,
    telephone: negocio.telefoneE164,
    image: [`${SITE_URL}/barbearia-estacao-trabalho.jpeg`],
    logo: `${SITE_URL}/logo-dom-elii-transparent.png`,
    priceRange: negocio.faixaPreco,
    currenciesAccepted: negocio.moeda,
    paymentAccepted: negocio.formasPagamento.join(", "),
    address: enderecoPostal(),
    ...(negocio.geo
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: negocio.geo.latitude,
            longitude: negocio.geo.longitude,
          },
        }
      : {}),
    hasMap: negocio.links.googleMaps,
    foundingDate: String(negocio.fundadaEm),
    openingHoursSpecification: horariosSchema(),
    areaServed: negocio.areasAtendidas.map((bairro) => ({
      "@type": "Place",
      name: `${bairro}, ${negocio.endereco.cidade} - ${negocio.endereco.estado}`,
    })),
    sameAs: [
      negocio.links.instagram,
      negocio.links.booksy,
      negocio.links.googleMaps,
    ],
    employee: equipeData.map((m) => ({
      "@type": "Person",
      name: m.nome,
      jobTitle: m.cargo,
      description: m.descricao,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços da Dom Elii Barbershop",
      itemListElement: catalogoServicos.map((categoria) => ({
        "@type": "OfferCatalog",
        name: categoria.categoria,
        itemListElement: categoria.servicos.map(ofertaServico),
      })),
    },
    potentialAction: {
      "@type": "ReserveAction",
      name: "Agendar horário",
      target: {
        "@type": "EntryPoint",
        urlTemplate: negocio.links.booksy,
        inLanguage: "pt-BR",
        actionPlatform: [
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/IOSPlatform",
          "https://schema.org/AndroidPlatform",
        ],
      },
      result: {
        "@type": "Reservation",
        name: `Horário na ${negocio.nome}`,
      },
    },
  };
}

export function schemaWebSite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": ID_SITE,
    url: SITE_URL,
    name: negocio.nome,
    inLanguage: "pt-BR",
    publisher: { "@id": ID_NEGOCIO },
  };
}

export function schemaBreadcrumb(
  trilha: { nome: string; caminho: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trilha.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.nome,
      item: `${SITE_URL}${item.caminho}`,
    })),
  };
}

export function schemaArtigo(artigo: Artigo) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE_URL}/blog/${artigo.slug}#article`,
    headline: artigo.titulo,
    description: artigo.resumo,
    image: `${SITE_URL}${artigo.imagem}`,
    datePublished: artigo.publicadoEm,
    dateModified: artigo.atualizadoEm ?? artigo.publicadoEm,
    inLanguage: "pt-BR",
    articleSection: artigo.categoria,
    author: {
      "@type": "Person",
      name: artigo.autor,
      worksFor: { "@id": ID_NEGOCIO },
    },
    publisher: { "@id": ID_NEGOCIO },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${artigo.slug}`,
    },
  };
}

export function schemaBlog() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: `Editorial ${negocio.nome}`,
    description:
      "Artigos sobre cortes masculinos, barba, química e cuidados com o cabelo, escritos pelos barbeiros da Dom Elii, em Curitiba.",
    url: `${SITE_URL}/blog`,
    inLanguage: "pt-BR",
    publisher: { "@id": ID_NEGOCIO },
  };
}

/**
 * QAPage para o FAQ.
 * O Google aposentou os rich results de FAQ em 07/05/2026 — este schema NÃO
 * gera mais destaque no SERP. Mantido porque continua sendo um sinal de
 * entidade legível por buscadores e por mecanismos de IA.
 */
export function schemaFaq(
  perguntas: { pergunta: string; resposta: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/faq#faq`,
    inLanguage: "pt-BR",
    mainEntity: perguntas.map((p) => ({
      "@type": "Question",
      name: p.pergunta,
      acceptedAnswer: { "@type": "Answer", text: p.resposta },
    })),
  };
}

export const enderecoTexto = enderecoLinhaUnica;
