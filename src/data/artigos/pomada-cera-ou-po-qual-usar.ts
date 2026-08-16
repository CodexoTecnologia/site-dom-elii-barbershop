import type { Artigo } from "./tipos";

export const artigo: Artigo = {
  slug: "pomada-cera-ou-po-qual-usar",
  titulo: "Pomada, cera ou pó: qual usar em cada tipo de cabelo",
  tituloSeo: "Pomada, cera ou pó: qual finalizador usar no seu cabelo",
  resumo:
    "Fixação, brilho e peso do fio: as três coisas que decidem qual produto funciona no seu cabelo — e por que o que serve para o seu amigo pode não servir para você.",
  categoria: "Produtos",
  publicadoEm: "2026-07-12",
  autor: "Henrique Vilares",
  tempoLeitura: "6 min",
  imagem: "/produtos/produto-tocton-cera-2.webp",
  imagemAlt:
    "Produtos de finalização à venda na Dom Elii Barbershop, em Curitiba",
  conteudo: [
    {
      tipo: "p",
      texto:
        "O corte sai perfeito da barbearia e no dia seguinte não fica igual. Quase sempre o problema não é o corte: é o produto errado, ou a quantidade errada do produto certo. Entender três variáveis resolve a maior parte dos casos.",
    },
    { tipo: "h2", texto: "As três variáveis que importam" },
    {
      tipo: "ul",
      itens: [
        "Fixação: o quanto o produto segura o cabelo no lugar. Fixação alta trava o penteado; baixa permite reposicionar durante o dia.",
        "Brilho: acabamento molhado, natural ou seco (matte). É o que muda mais a leitura do visual, e o que mais depende de gosto.",
        "Peso: o quanto o produto pesa no fio. Cabelo fino desaba com produto pesado; cabelo grosso precisa de peso para ser controlado.",
      ],
    },
    {
      tipo: "p",
      texto:
        "Quase todo erro de finalização vem de ignorar o peso. É a variável que ninguém olha no rótulo e a que mais estraga o resultado.",
    },
    { tipo: "h2", texto: "Pomada" },
    {
      tipo: "p",
      texto:
        "É o produto mais versátil e o mais usado em barbearia. As modernas, à base de água, dão fixação média a alta com brilho controlado e saem no banho sem esforço.",
    },
    {
      tipo: "ul",
      itens: [
        "Funciona bem em: cabelo liso e ondulado, de fino a médio.",
        "Melhor para: side part, topete, pompadour e qualquer penteado que precise de forma definida.",
        "Como usar: uma porção do tamanho de uma ervilha, emulsionada entre as mãos até ficar transparente, aplicada no cabelo levemente úmido.",
      ],
    },
    {
      tipo: "p",
      texto:
        "Atenção às pomadas à base de óleo: fixam muito e dão brilho intenso, mas exigem shampoo antirresíduo para sair de verdade. Se o seu cabelo tem ficado pesado e opaco com o tempo, pode ser acúmulo.",
    },
    { tipo: "h2", texto: "Cera" },
    {
      tipo: "p",
      texto:
        "Fixação parecida com a da pomada, porém com acabamento seco e sem brilho. É o produto de quem quer que pareça que não tem produto nenhum.",
    },
    {
      tipo: "ul",
      itens: [
        "Funciona bem em: cabelo médio a grosso, liso ou ondulado.",
        "Melhor para: cortes texturizados, com movimento e aspecto despenteado de propósito.",
        "Como usar: no cabelo seco, sempre. Em cabelo molhado a cera empelota.",
      ],
    },
    {
      tipo: "imagem",
      src: "/produtos/produto-tocton-cera-1.webp",
      alt: "Ceras modeladoras Tocton Style à venda na Dom Elii Barbershop",
      legenda: "Ceras de acabamento seco, para quem não quer brilho nenhum.",
    },
    { tipo: "h2", texto: "Pó modelador" },
    {
      tipo: "p",
      texto:
        "O menos conhecido e o que mais resolve um problema específico: falta de volume. Aplicado na raiz do cabelo seco, ele engrossa a aparência do fio e cria corpo onde não existia.",
    },
    {
      tipo: "ul",
      itens: [
        "Funciona bem em: cabelo fino e liso, que desaba com qualquer outra coisa.",
        "Melhor para: dar altura no topo sem peso.",
        "Como usar: pouquíssimo. Polvilhe na raiz e trabalhe com os dedos. Exagerar deixa aspecto ressecado.",
      ],
    },
    { tipo: "h2", texto: "E o gel?" },
    {
      tipo: "p",
      texto:
        "O gel tem lugar: fixação altíssima e brilho molhado, para penteados bem colados que precisam durar o dia inteiro. O problema é que ele endurece e quebra — quando você passa a mão, o penteado racha e não volta. Para uso diário, pomada ou cera dão mais controle.",
    },
    {
      tipo: "citacao",
      texto:
        "Na dúvida, use menos do que você acha necessário. Dá para acrescentar; tirar exige lavar a cabeça.",
    },
    { tipo: "h2", texto: "Guia rápido" },
    {
      tipo: "ul",
      itens: [
        "Cabelo fino e sem volume: pó na raiz e, se precisar de forma, um pouco de pomada leve nas pontas.",
        "Cabelo liso médio, penteado definido: pomada à base de água.",
        "Cabelo grosso ou ondulado, visual despojado: cera matte.",
        "Cabelo cacheado: creme de pentear ou leave-in, não pomada — o objetivo é definir o cacho, não fixar forma.",
        "Evento e foto: pomada com mais brilho, aplicada em cabelo úmido.",
      ],
    },
    {
      tipo: "destaque",
      titulo: "Teste antes de comprar",
      texto: "Peça ao seu barbeiro para finalizar com o produto que você está pensando em levar. Você vê o resultado no seu cabelo, no espelho, antes de gastar.",
    },
    { tipo: "h2", texto: "O erro mais comum" },
    {
      tipo: "p",
      texto:
        "Aplicar tudo no mesmo ponto, geralmente na frente. O produto precisa ser emulsionado entre as mãos até quase desaparecer e então distribuído da nuca para a frente, terminando na franja. Assim ele cobre o cabelo inteiro em vez de empelotar num lugar só.",
    },
    {
      tipo: "p",
      texto:
        "Na Dom Elii vendemos as mesmas pomadas e ceras que usamos para finalizar o seu corte. Se você gostou de como o cabelo ficou aqui, pergunte qual foi o produto — é o caminho mais curto para reproduzir em casa.",
    },
  ],
};
