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

export type LinkParceiro = { rotulo: string; url: string };

export type Parceiro = {
  slug: string;
  nome: string;
  categoria: string;
  descricao: string;
  ativo: boolean;
  /**
   * Endereço principal da marca — site oficial quando existe, senão a rede
   * social. Vira o link do título do card.
   *
   * OMITA quando a marca vender direto ao consumidor: o link mandaria o
   * cliente comprar na origem em vez de na barbearia. Só linke fornecedor que
   * atende apenas barbearia, sem varejo próprio.
   */
  url?: string;
  /**
   * Endereços adicionais, exibidos como atalhos abaixo da descrição.
   * Só faz sentido junto com `url`: sem um principal, o primeiro link
   * deveria estar em `url`.
   */
  outrosLinks?: LinkParceiro[];
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
    /*
     * Aponta para o mesmo lugar do título: a Rawa não tem site próprio, e o
     * atalho existe para o card ficar visualmente igual ao da Tocton — sem
     * botão, ele parecia inacabado ao lado do vizinho.
     *
     * Quando a marca tiver site, mova o endereço dele para `url` (o título) e
     * deixe o Instagram aqui embaixo, como está na Tocton.
     */
    outrosLinks: [
      { rotulo: "Instagram", url: "https://instagram.com/rawasurfwear" },
    ],
    ativo: true,
    fotos: [
      {
        src: "/produtos/loja-rawa-surf-wear-araras.webp",
        alt: "Araras com camisetas da Rawa Surf Wear na loja da Dom Elii Barbershop",
      },
      {
        src: "/produtos/loja-rawa-surf-wear-vitrine.webp",
        alt: "Peças da Rawa Surf Wear expostas na loja da barbearia, em Curitiba",
      },
    ],
  },
  {
    slug: "tocton",
    nome: "Tocton Style",
    categoria: "Ceras e finalizadores",
    descricao:
      "Ceras de fixação seca e efeito matte, para quem prefere acabamento sem brilho e mais controle ao longo do dia.",
    url: "https://toctonstyle.com.br",
    outrosLinks: [
      { rotulo: "Instagram", url: "https://instagram.com/toctonstyle" },
    ],
    ativo: true,
    fotos: [
      {
        src: "/produtos/produto-tocton-cera-1.webp",
        alt: "Ceras modeladoras Tocton Style à venda na Dom Elii Barbershop",
      },
      {
        src: "/produtos/produto-tocton-cera-2.webp",
        alt: "Produtos Tocton Style expostos no balcão da barbearia",
      },
      {
        src: "/produtos/produto-tocton-cera-3.webp",
        alt: "Linha Tocton Style disponível na Dom Elii Barbershop, em Curitiba",
      },
    ],
  },
  /*
   * PARCERIAS SEM LINK, de propósito.
   *
   * Estes dois fornecedores vendem direto ao consumidor. Linkar a marca aqui
   * entregaria o cliente na porta dela: ele compraria na origem em vez de
   * comprar na barbearia, e a loja perderia a venda que este card existe para
   * gerar.
   *
   * Rawa e Tocton são o caso oposto — atendem só barbearia, não vendem no
   * varejo. Linkar não tira venda de ninguém e ainda empresta a reputação da
   * marca, então lá o link fica.
   *
   * REGRA: só linke marca que NÃO concorra com o balcão da barbearia.
   *
   * FALTAM AS FOTOS dos dois. Quando o Elias mandar, preencha `fotos` no
   * mesmo formato dos demais e o carrossel aparece sozinho. Sem o campo, o
   * card mostra só o texto — não fica buraco no lugar das imagens.
   */
  {
    slug: "perfumes",
    nome: "Perfumes",
    categoria: "Perfumaria",
    descricao:
      "Perfumaria masculina à venda na loja, para levar junto com o corte. O que está disponível muda com frequência — pergunte no balcão.",
    ativo: true,
  },
  {
    slug: "objetos-3d",
    nome: "Objetos 3D",
    categoria: "Decoração e chaveiros",
    descricao:
      "Peças impressas em 3D, de chaveiro a objeto de decoração. Modelos novos aparecem toda hora, e dá para levar na hora.",
    ativo: true,
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
        src: "/produtos/geladeira-bebidas-geladas.webp",
        alt: "Geladeira com cervejas Budweiser geladas na Dom Elii Barbershop, em Curitiba",
      },
      {
        src: "/produtos/geladeira-interior-abastecida.webp",
        alt: "Interior da geladeira da barbearia com cervejas e long necks Beats gelados",
      },
    ],
  },
];

export const parceirosAtivos = parceiros.filter((p) => p.ativo);
