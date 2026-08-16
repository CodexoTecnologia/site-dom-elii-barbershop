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
    categoria: "Combos",
    resumo:
      "Mais de um serviço na mesma sessão, por menos do que sairiam separados.",
    servicos: [
      {
        slug: "cabelo-barba-e-sobrancelha",
        titulo: "Cabelo, Barba & Sobrancelha",
        subtitulo: "Pacote completo",
        descricao:
          "Cabelo, barba e sobrancelha no mesmo horário, em 1h15. Sai mais barato que os três separados.",
        preco: 105,
        duracaoMin: 75,
        imagem: "/clientes/cabelo-e-barba-2.jpeg",
      },
      {
        slug: "cabelo-e-barba",
        titulo: "Cabelo e Barba",
        subtitulo: "O combo mais pedido",
        descricao:
          "Corte de cabelo mais barba desenhada na navalha, com opção de toalha quente. Leva 1 hora e sai mais barato que os dois separados.",
        preco: 90,
        duracaoMin: 60,
        imagem: "/clientes/barba-1.jpeg",
      },
      {
        slug: "corte-e-sobrancelha",
        titulo: "Corte e Sobrancelha",
        subtitulo: "Sem barba, rosto alinhado",
        descricao:
          "Corte de cabelo mais o desenho da sobrancelha na navalha. Bom para quem não usa barba e quer o rosto alinhado.",
        preco: 64.9,
        duracaoMin: 45,
        imagem: "/clientes/corte-e-sobrancelha-1.jpeg",
      },
      {
        slug: "corte-e-freestyle",
        titulo: "Corte & Freestyle",
        subtitulo: "Corte com desenho",
        descricao:
          "Corte de cabelo com desenho feito à navalha, do traço simples ao projeto autoral. O valor varia conforme a complexidade do desenho.",
        preco: 64.9,
        apartirDe: true,
        duracaoMin: 45,
        imagem: "/clientes/corte-4.jpeg",
      },
    ],
  },
  {
    slug: "corte-e-barba",
    categoria: "Corte & Barba",
    resumo: "O básico bem feito: corte de cabelo e barba, separados.",
    servicos: [
      {
        slug: "corte-de-cabelo",
        titulo: "Corte de Cabelo",
        subtitulo: "Degradê, Social ou Tesoura",
        descricao:
          "Degradê, social ou tesoura, conforme o seu tipo de cabelo e a sua rotina. Leva 30 minutos.",
        preco: 49.9,
        duracaoMin: 30,
        imagem: "/clientes/corte-6.jpeg",
      },
      {
        slug: "barba",
        titulo: "Barba",
        subtitulo: "Barboterapia com toalha no vapor",
        descricao:
          "Contorno na navalha com toalha quente e óleo. A toalha no vapor é opcional, e não muda o preço.",
        preco: 45,
        duracaoMin: 30,
        imagem: "/clientes/barba-e-toalha-1.jpeg",
      },
      {
        slug: "so-maquina",
        titulo: "Só Máquina",
        subtitulo: "Manutenção rápida",
        descricao:
          "Um pente só no cabelo inteiro, com acabamento na navalha. Para quem quer manter o mesmo comprimento.",
        preco: 40,
        duracaoMin: 20,
      },
      {
        slug: "freestyle",
        titulo: "Freestyle",
        subtitulo: "Só o desenho",
        descricao:
          "Desenho à navalha sobre o corte que você já tem. O valor depende da complexidade do traço.",
        preco: 15,
        apartirDe: true,
        duracaoMin: 15,
        imagem: "/clientes/corte-5.jpeg",
      },
    ],
  },
  {
    slug: "quimica-e-estetica",
    categoria: "Química & Estética",
    resumo:
      "Cor, alisamento e pele. Serviços que pedem avaliação antes de começar.",
    servicos: [
      {
        slug: "platinado",
        titulo: "Platinado",
        subtitulo: "Branco ou Cinza",
        descricao:
          "Descoloração para chegar ao branco ou cinza. O valor e o tempo dependem do comprimento e do histórico químico do seu cabelo.",
        preco: 100,
        apartirDe: true,
        duracaoMin: 30,
        imagem: "/clientes/platinado-1.jpeg",
      },
      {
        slug: "luzes",
        titulo: "Luzes",
        subtitulo: "Mechas e contraste",
        descricao:
          "Mechas para criar contraste, com transição natural entre a raiz e as pontas.",
        preco: 100,
        apartirDe: true,
        duracaoMin: 45,
        imagem: "/clientes/luzes-1.jpeg",
      },
      {
        slug: "alisamento-capilar",
        titulo: "Alisamento Capilar",
        subtitulo: "De 5 a 10 minutos",
        descricao:
          "Aplicação de 5 a 10 minutos para alinhar o fio. Não compatível com cabelo que já recebeu amônia.",
        preco: 40,
        apartirDe: true,
        duracaoMin: 20,
      },
      {
        slug: "pigmentacao",
        titulo: "Pigmentação / Retoque na Cor",
        subtitulo: "Cabelo ou Barba",
        descricao:
          "Cobre fios brancos e reforça os contornos, no cabelo ou na barba.",
        preco: 40,
        duracaoMin: 30,
      },
      {
        slug: "limpeza-de-pele",
        titulo: "Limpeza de Pele",
        subtitulo: "Limpeza profunda",
        descricao:
          "Remove cravos, oleosidade e impurezas. Combina bem com a barba no mesmo horário.",
        preco: 20,
        duracaoMin: 15,
      },
      {
        slug: "hidratacao-no-cabelo",
        titulo: "Hidratação no Cabelo",
        subtitulo: "Depois da química",
        descricao:
          "Repõe o que a química tirou. Indicada depois de platinado e luzes, ou para cabelo ressecado.",
        preco: 20,
        duracaoMin: 15,
      },
    ],
  },
  {
    slug: "acabamentos",
    categoria: "Acabamentos",
    resumo: "Serviços de 15 minutos para segurar o visual entre um corte e outro.",
    servicos: [
      {
        slug: "sobrancelha",
        titulo: "Sobrancelha",
        subtitulo: "Design na navalha",
        descricao:
          "Limpeza e desenho da sobrancelha na navalha, sem tirar o traço natural.",
        preco: 20,
        duracaoMin: 15,
        imagem: "/clientes/sobrancelha-1.jpeg",
      },
      {
        slug: "pezinho",
        titulo: "Pezinho",
        subtitulo: "Nuca e costeletas",
        descricao:
          "Acerta a nuca e as costeletas entre um corte e outro. Leva 15 minutos.",
        preco: 20,
        apartirDe: true,
        duracaoMin: 15,
        imagem: "/clientes/corte-8.jpeg",
      },
      {
        slug: "acabamento-da-barba",
        titulo: "Acabamento da Barba",
        subtitulo: "Contornos",
        descricao:
          "Só o contorno da barba na máquina de acabamento, sem mexer no comprimento.",
        preco: 25,
        duracaoMin: 15,
        imagem: "/clientes/barba-2.jpeg",
      },
    ],
  },
];

export const todosServicos: Servico[] = catalogoServicos.flatMap(
  (c) => c.servicos
);

/**
 * Ex.: 49.9 -> "R$ 49,90".
 *
 * Formatação feita à mão em vez de `Intl.NumberFormat` de propósito: o Node
 * e o navegador podem usar caracteres de espaço diferentes entre "R$" e o
 * número (U+00A0 x U+202F, dependendo da versão do ICU). Como este texto é
 * renderizado no servidor e hidratado no cliente, essa diferença invisível
 * dispara erro de hidratação do React.
 */
export function precoEmReais(valor: number): string {
  return `R$ ${valor.toFixed(2).replace(".", ",")}`;
}

/** Ex.: com apartirDe -> "A partir de R$ 15,00" */
export function precoFormatado(servico: Servico): string {
  const valor = precoEmReais(servico.preco);
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
