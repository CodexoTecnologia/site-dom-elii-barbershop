/**
 * FONTE ÚNICA DA VERDADE (SSOT) do negócio.
 *
 * Tudo que aparece no site (footer, schema JSON-LD, metadata, CTAs, contato)
 * lê daqui. Para atualizar telefone, endereço, horário ou links, edite SOMENTE
 * este arquivo — nenhuma página precisa ser tocada.
 */

export const SITE_URL = "https://domelii.com.br";

export const negocio = {
  nome: "Dom Elii Barbershop",
  nomeLegal: "Dom Elii Barbershop",
  slogan: "Corte e barba que mudam como você se vê",
  descricaoCurta:
    "Barbearia na Boa Vista, em Curitiba. Corte, barba, sobrancelha e química masculina, com agendamento pelo Booksy.",
  descricaoLonga:
    "Barbearia em Curitiba, no bairro Boa Vista, atendendo clientes de toda a cidade. Corte de cabelo, degradê, barba com toalha no vapor, platinado, luzes, sobrancelha na navalha e freestyle. Agendamento pelo Booksy, com atendimento também por ordem de chegada quando há horário livre.",

  endereco: {
    rua: "Rua Lodovico Geronazzo",
    numero: "539",
    bairro: "Boa Vista",
    cidade: "Curitiba",
    estado: "PR",
    estadoNome: "Paraná",
    cep: "82560-040",
    pais: "BR",
  },

  /**
   * Coordenadas do ponto, lidas no Google Maps sobre a Rua Lodovico Geronazzo.
   * Alimentam o campo `geo` do schema LocalBusiness.
   */
  geo: { latitude: -25.38925, longitude: -49.242515 } as {
    latitude: number;
    longitude: number;
  } | null,

  telefone: "(41) 99538-4975",
  telefoneE164: "+5541995384975",
  whatsapp: "5541995384975",

  /** Bairros de captação para SEO local. Ordem = prioridade. */
  areasAtendidas: [
    "Boa Vista",
    "Bacacheri",
    "Cabral",
    "Ahú",
    "Juvevê",
    "Santa Cândida",
  ],

  /** 5.0 com 83 avaliações no Booksy (ver AVISO em src/lib/schema.ts). */
  avaliacoes: {
    nota: 5.0,
    quantidade: 83,
    fonte: "Booksy",
  },

  /** Faixa de preço derivada do catálogo (ver src/data/servicos.ts). */
  faixaPreco: "R$$",
  moeda: "BRL",
  formasPagamento: ["Dinheiro", "Pix", "Cartão de Crédito", "Cartão de Débito"],

  links: {
    booksy:
      "https://booksy.com/pt-br/311640_dom-elii-barbershop_barbearias_583853_curitiba",
    booksyApp:
      "https://booksy.com/pt-br/dl/show-business/311640?utm_medium=c2c_referral",
    googleMaps: "https://share.google/ugawhcTt28ZvybTMO",
    /**
     * Abre o Google Maps já traçando a rota da localização atual do usuário
     * até a barbearia. Formato oficial da Maps URLs API (`dir/?api=1`), que
     * funciona em navegador, Android e iOS — diferente do link copiado da
     * barra de endereço, que carrega estado de sessão e pode quebrar.
     */
    rota:
      "https://www.google.com/maps/dir/?api=1&destination=" +
      encodeURIComponent(
        "Dom Elii Barbershop Barbearia, Rua Lodovico Geronazzo, 539 - Boa Vista, Curitiba - PR, 82560-040"
      ),
    instagram: "https://instagram.com/dom_elii_barbershop",
    whatsapp: "https://wa.me/5541995384975",
  },

  instagramHandle: "@dom_elii_barbershop",

  /** Ano de fundação. Alimenta o texto da página e o schema do negócio. */
  fundadaEm: 2022,

  /** URL do mapa incorporado (iframe). Gerada em "Compartilhar > Incorporar". */
  mapaIncorporado:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57685.879767093036!2d-49.26431504969383!3d-25.358997504586874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce753e44b37b9%3A0x3ebb4bd569270b41!2sDom%20Elii%20Barbershop%20Barbearia!5e0!3m2!1spt-BR!2sbr!4v1786308439478!5m2!1spt-BR!2sbr",

  /**
   * Horários. `null` = fechado.
   * `dia` usa o padrão schema.org (inglês) exigido pelo JSON-LD.
   */
  horarios: [
    { dia: "Monday", rotulo: "Segunda-feira", abre: "13:00", fecha: "20:00" },
    { dia: "Tuesday", rotulo: "Terça-feira", abre: "09:00", fecha: "20:00" },
    { dia: "Wednesday", rotulo: "Quarta-feira", abre: "09:00", fecha: "20:00" },
    { dia: "Thursday", rotulo: "Quinta-feira", abre: "09:00", fecha: "20:00" },
    { dia: "Friday", rotulo: "Sexta-feira", abre: "09:00", fecha: "20:00" },
    { dia: "Saturday", rotulo: "Sábado", abre: "09:00", fecha: "19:00" },
    { dia: "Sunday", rotulo: "Domingo", abre: null, fecha: null },
  ] as const,
} as const;

export const enderecoLinhaUnica = `${negocio.endereco.rua}, ${negocio.endereco.numero} - ${negocio.endereco.bairro}, ${negocio.endereco.cidade} - ${negocio.endereco.estado}, ${negocio.endereco.cep}`;

/** Ex.: "Segunda-feira: 13:00 às 20:00" | "Domingo: Fechado" */
export function horarioLegivel(h: (typeof negocio.horarios)[number]): string {
  return h.abre && h.fecha
    ? `${h.abre} às ${h.fecha}`
    : "Fechado";
}
