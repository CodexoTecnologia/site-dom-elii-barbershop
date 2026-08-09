/**
 * CATÁLOGO DE SERVIÇOS — fonte única da verdade.
 *
 * Preços e durações espelham o Booksy (última sincronização: 08/08/2026).
 * Alimenta ao mesmo tempo: página /servicos, seção da home, JSON-LD
 * (OfferCatalog + Offer) e o cálculo de faixa de preço.
 *
 * PARA ATUALIZAR PREÇO: mude só o campo `preco` aqui. Nada mais.
 *
 * - `preco`: valor em reais (number). Usado no schema.org.
 * - `apartirDe: true`: Booksy mostra "R$ X,00+" (preço varia por execução).
 * - `duracaoMin`: minutos. Convertido para ISO 8601 automaticamente.
 */

export type Servico = {
  slug: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  preco: number;
  apartirDe?: boolean;
  duracaoMin: number;
  imagem?: string;
};

export type CategoriaServico = {
  slug: string;
  categoria: string;
  resumo: string;
  servicos: Servico[];
};

export const catalogoServicos: CategoriaServico[] = [
  {
    slug: "rituais-e-combos",
    categoria: "Rituais & Combos",
    resumo:
      "Pacotes completos que unem corte, barba e design facial numa única sessão.",
    servicos: [
      {
        slug: "cabelo-barba-e-sobrancelha",
        titulo: "Cabelo, Barba & Sobrancelha",
        subtitulo: "O Ritual Completo",
        descricao:
          "A experiência máxima da Dom Elii: corte com visagismo, barboterapia completa e design de sobrancelha na navalha em uma única sessão.",
        preco: 105,
        duracaoMin: 75,
        imagem: "/corte-1.jpeg",
      },
      {
        slug: "cabelo-e-barba",
        titulo: "Cabelo e Barba",
        subtitulo: "O Clássico Indispensável",
        descricao:
          "Corte premium alinhado à barba desenhada, com opção de barboterapia com toalha no vapor para relaxamento total.",
        preco: 90,
        duracaoMin: 60,
        imagem: "/barba-1.jpeg",
      },
      {
        slug: "corte-e-sobrancelha",
        titulo: "Corte e Sobrancelha",
        subtitulo: "A Moldura do Rosto",
        descricao:
          "Corte de cabelo com visagismo somado ao design de sobrancelha feito na navalha, valorizando o peso do olhar.",
        preco: 64.9,
        duracaoMin: 45,
        imagem: "/corte-2.jpeg",
      },
      {
        slug: "corte-e-freestyle",
        titulo: "Corte & Freestyle",
        subtitulo: "Arte no Cabelo",
        descricao:
          "Corte alinhado ao desenvolvimento de desenhos exclusivos à navalha (freestyle), do traço simples ao projeto autoral.",
        preco: 64.9,
        apartirDe: true,
        duracaoMin: 45,
        imagem: "/corte-4.jpeg",
      },
    ],
  },
  {
    slug: "corte-e-barba",
    categoria: "Corte & Barba",
    resumo: "O núcleo da barbearia: técnica de corte e cuidado com a barba.",
    servicos: [
      {
        slug: "corte-de-cabelo",
        titulo: "Corte de Cabelo",
        subtitulo: "Degradê, Social ou Tesoura",
        descricao:
          "Execução impecável de acordo com o seu perfil, estrutura óssea e estilo. Degradê (fade), social clássico ou trabalho integral na tesoura.",
        preco: 49.9,
        duracaoMin: 30,
        imagem: "/corte-3.jpeg",
      },
      {
        slug: "barba",
        titulo: "Barba",
        subtitulo: "Barboterapia com toalha no vapor",
        descricao:
          "Alinhamento na navalha com hidratação, óleos essenciais e toalha quente. A barboterapia é opcional.",
        preco: 45,
        duracaoMin: 30,
        imagem: "/barba-1.jpeg",
      },
      {
        slug: "so-maquina",
        titulo: "Só Máquina",
        subtitulo: "Praticidade Premium",
        descricao:
          "Somente um pente no cabelo inteiro, mantendo acabamento de alto nível. Ideal para manutenção rápida.",
        preco: 40,
        duracaoMin: 20,
      },
      {
        slug: "freestyle",
        titulo: "Freestyle",
        subtitulo: "Apenas Desenho",
        descricao:
          "Criação de arte, linhas e padrões exclusivos feitos à navalha sobre o corte já existente.",
        preco: 15,
        apartirDe: true,
        duracaoMin: 15,
        imagem: "/corte-5.jpeg",
      },
    ],
  },
  {
    slug: "quimica-e-estetica",
    categoria: "Química & Estética",
    resumo:
      "Coloração, alisamento e cuidados de pele executados com produto profissional.",
    servicos: [
      {
        slug: "platinado",
        titulo: "Platinado",
        subtitulo: "Branco ou Cinza",
        descricao:
          "Descoloração avançada para o platinado perfeito, preservando ao máximo a saúde do fio. Valor varia conforme comprimento e histórico químico.",
        preco: 100,
        apartirDe: true,
        duracaoMin: 30,
      },
      {
        slug: "luzes",
        titulo: "Luzes",
        subtitulo: "Iluminação",
        descricao:
          "Técnica de mechas para criar contraste e movimento, com transição natural entre a base e as pontas.",
        preco: 100,
        apartirDe: true,
        duracaoMin: 45,
      },
      {
        slug: "alisamento-capilar",
        titulo: "Alisamento Capilar",
        subtitulo: "Rápido e Eficaz",
        descricao:
          "De 5 a 10 minutos de aplicação para um cabelo liso e alinhado. Não compatível com cabelos que já receberam amônia.",
        preco: 40,
        apartirDe: true,
        duracaoMin: 20,
      },
      {
        slug: "pigmentacao",
        titulo: "Pigmentação / Retoque na Cor",
        subtitulo: "Cabelo ou Barba",
        descricao:
          "Retoque de cor, cobertura de fios brancos ou realce de contornos escuros no cabelo e na barba.",
        preco: 40,
        duracaoMin: 30,
      },
      {
        slug: "limpeza-de-pele",
        titulo: "Limpeza de Pele",
        subtitulo: "Renovação Facial",
        descricao:
          "Remoção de impurezas, cravos e oleosidade para um rosto revitalizado. Ótimo complemento à barboterapia.",
        preco: 20,
        duracaoMin: 15,
      },
      {
        slug: "hidratacao-no-cabelo",
        titulo: "Hidratação no Cabelo",
        subtitulo: "Saúde dos Fios",
        descricao:
          "Reposição profunda de nutrientes para cabelos secos ou quimicamente tratados. Indicada após platinado e luzes.",
        preco: 20,
        duracaoMin: 15,
      },
    ],
  },
  {
    slug: "acabamentos",
    categoria: "Acabamentos Minuciosos",
    resumo: "Manutenção entre um corte e outro, sem perder o desenho.",
    servicos: [
      {
        slug: "sobrancelha",
        titulo: "Sobrancelha",
        subtitulo: "Design na navalha",
        descricao:
          "Limpeza e desenho geométrico da sobrancelha para valorizar o peso do seu olhar.",
        preco: 20,
        duracaoMin: 15,
      },
      {
        slug: "pezinho",
        titulo: "Pezinho",
        subtitulo: "Alinhamento de Nuca",
        descricao:
          "Acabamento do cabelo na maquininha ou navalha, com simetria perfeita na linha do pescoço e costeletas.",
        preco: 20,
        apartirDe: true,
        duracaoMin: 15,
      },
      {
        slug: "acabamento-da-barba",
        titulo: "Acabamento da Barba",
        subtitulo: "Contornos",
        descricao:
          "Desenho ou contorno da barba com máquina de acabamento, apenas o alinhamento das linhas externas.",
        preco: 25,
        duracaoMin: 15,
      },
    ],
  },
];

export const todosServicos: Servico[] = catalogoServicos.flatMap(
  (c) => c.servicos
);

/** Ex.: 49.9 -> "R$ 49,90" ; com apartirDe -> "A partir de R$ 15,00" */
export function precoFormatado(servico: Servico): string {
  const valor = servico.preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return servico.apartirDe ? `A partir de ${valor}` : valor;
}

/** Ex.: 75 -> "1h15" ; 30 -> "30min" */
export function duracaoFormatada(minutos: number): string {
  const h = Math.floor(minutos / 60);
  const m = minutos % 60;
  if (h === 0) return `${m}min`;
  return m === 0 ? `${h}h` : `${h}h${String(m).padStart(2, "0")}`;
}

/** ISO 8601 exigido pelo schema.org: 75 -> "PT1H15M" */
export function duracaoISO(minutos: number): string {
  const h = Math.floor(minutos / 60);
  const m = minutos % 60;
  return `PT${h ? `${h}H` : ""}${m ? `${m}M` : ""}` || "PT0M";
}

export const precoMinimo = Math.min(...todosServicos.map((s) => s.preco));
export const precoMaximo = Math.max(...todosServicos.map((s) => s.preco));
