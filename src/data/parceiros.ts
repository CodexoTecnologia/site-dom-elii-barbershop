/**
 * PARCERIAS, PRODUTOS E SUAS FOTOS.
 *
 * As fotos ficam dentro do parceiro de propósito: tirar a parceria tira as
 * fotos junto, sem sobrar imagem órfã em outro canto do arquivo.
 *
 * PARA DESLIGAR A SEÇÃO INTEIRA: `secaoAtiva = false`.
 * PARA TIRAR UM PARCEIRO: `ativo: false` nele, ou apague o objeto.
 *
 * SOBRE AS FOTOS:
 *   - `fotos` é opcional; sem ela o card aparece só com o texto
 *   - coloque as imagens em /public e converta com
 *     `node scripts/converte-fotos-loja.mjs` (PNG de foto pesa 15x mais)
 *   - proporção ideal: vertical, perto de 3:4
 *   - carregam com lazy loading e a seção fica no fim da página, então nada é
 *     baixado antes de o usuário rolar até aqui
 *   - `alt` descreve o que aparece: é o que faz a foto ser achada no Google
 *     Imagens e o que o leitor de tela anuncia
 */

export const secaoAtiva = true;

export type FotoParceiro = { src: string; alt: string };

export type Parceiro = {
  slug: string;
  nome: string;
  categoria: string;
  descricao: string;
  ativo: boolean;
  /** Perfil oficial. Vira link externo; omita para não linkar. */
  url?: string;
  fotos?: FotoParceiro[];
};

export const parceiros: Parceiro[] = [
  {
    slug: "rawa-surf-wear",
    nome: "Rawa Surf Wear",
    categoria: "Vestuário",
    descricao:
      "Camisetas, bermudas e bonés da Rawa na loja dentro da barbearia. Dá para provar e levar na hora, sem esperar entrega.",
    url: "https://instagram.com/rawasurfwear",
    ativo: true,
    fotos: [
      {
        src: "/loja-rawa-surf-wear-araras.webp",
        alt: "Araras com camisetas da Rawa Surf Wear na loja da Dom Elii Barbershop",
      },
      {
        src: "/loja-rawa-surf-wear-vitrine.webp",
        alt: "Peças da Rawa Surf Wear expostas na loja da barbearia, em Curitiba",
      },
    ],
  },
  {
    slug: "classe-a",
    nome: "Classe A",
    categoria: "Pomadas e perfumaria",
    descricao:
      "As pastas modeladoras que usamos para finalizar o seu corte, mais a linha de perfumaria da marca.",
    ativo: true,
    fotos: [
      {
        src: "/produto-classe-a-pomada-1.webp",
        alt: "Pastas modeladoras Classe A de 60 g e 150 g à venda na Dom Elii Barbershop",
      },
      {
        src: "/produto-classe-a-pomada-2.webp",
        alt: "Produtos Classe A na prateleira da Dom Elii Barbershop",
      },
      {
        src: "/produto-classe-a-pomada-3.webp",
        alt: "Linha Classe A disponível na loja da Dom Elii Barbershop",
      },
      {
        src: "/produto-classe-a-pomada-4.webp",
        alt: "Produtos Classe A à venda na Dom Elii Barbershop, em Curitiba",
      },
    ],
  },
  {
    slug: "tocton",
    nome: "Tocton Style",
    categoria: "Ceras e finalizadores",
    descricao:
      "Ceras de fixação seca e efeito matte, para quem prefere acabamento sem brilho e mais controle ao longo do dia.",
    ativo: true,
    fotos: [
      {
        src: "/produto-tocton-cera-1.webp",
        alt: "Ceras modeladoras Tocton Style à venda na Dom Elii Barbershop",
      },
      {
        src: "/produto-tocton-cera-2.webp",
        alt: "Produtos Tocton Style expostos no balcão da barbearia",
      },
      {
        src: "/produto-tocton-cera-3.webp",
        alt: "Linha Tocton Style disponível na Dom Elii Barbershop, em Curitiba",
      },
    ],
  },
  {
    slug: "geladeira",
    nome: "Geladeira",
    categoria: "Bebidas",
    descricao:
      "Cerveja, refrigerante, suco e água gelados para consumir durante o atendimento. Itens à venda na barbearia.",
    ativo: true,
    fotos: [
      {
        src: "/geladeira-bebidas-geladas.webp",
        alt: "Geladeira com cervejas Budweiser geladas na Dom Elii Barbershop, em Curitiba",
      },
      {
        src: "/geladeira-interior-abastecida.webp",
        alt: "Interior da geladeira da barbearia com cervejas e long necks Beats gelados",
      },
    ],
  },
];

export const parceirosAtivos = parceiros.filter((p) => p.ativo);
