/**
 * VITRINE DO INSTAGRAM — publicações escolhidas à mão.
 *
 * PARA DESLIGAR A SEÇÃO: `vitrineAtiva = false`.
 * PARA TROCAR: mexa só na lista abaixo. Nada mais muda.
 *
 * POR QUE NÃO PUXA DO INSTAGRAM SOZINHO:
 * a API que servia para isso (Instagram Basic Display) foi encerrada pela
 * Meta no fim de 2024. O que sobrou exige app aprovado e um token que vence a
 * cada 60 dias — quando ninguém renova, a seção morre calada, e ninguém olha
 * o fim da home para perceber. Widget pronto resolveria o token, mas injeta
 * script de terceiro: peso no carregamento e rastreamento do visitante, que
 * ainda puxaria exigência de consentimento.
 *
 * Publicação escolhida a dedo não vence, não quebra e mostra o melhor
 * trabalho — não o último.
 *
 * COMO ADICIONAR UMA PUBLICAÇÃO:
 *   1. baixe a capa e salve em /public/instagram
 *   2. nomeie com o código do post no fim: `instagram-2-XXXXXXXXX.png`
 *      (o código é o trecho depois de /p/ no endereço da publicação)
 *   3. rode `npm run converte-instagram` — vira .webp e o original é
 *      arquivado fora de public
 *   4. acrescente o item aqui, com `url` apontando para o post
 *
 * O código no nome do arquivo não é enfeite: é o que permite conferir, de
 * relance, se a foto na tela leva à publicação certa. Se o `url` e o nome do
 * arquivo discordarem, o clique vai para o post errado — e não existe erro
 * mais silencioso que esse.
 *
 * SOBRE AS IMAGENS:
 *   - a capa é exibida em 3:4, com corte a partir do centro. Reel é 9:16 e
 *     não cabe inteiro numa faixa: 3:4 é o mesmo recorte que o Instagram faz
 *     na grade do perfil, então a pessoa vê o que já viu por lá
 *   - suba a capa ORIGINAL do post (1080px), não recorte de tela: em telas
 *     retina a diferença aparece na hora
 *   - `video: true` mostra o símbolo de play, como no próprio Instagram
 *   - `alt` descreve o que aparece: é o que o leitor de tela anuncia
 *   - seis fecha a faixa no desktop sem sobra
 */

export const vitrineAtiva = true;

export type PublicacaoInstagram = {
  src: string;
  alt: string;
  /** Endereço da publicação. O clique na capa leva para cá. */
  url: string;
  /** Reel ou post em vídeo: exibe o símbolo de play sobre a capa. */
  video?: boolean;
};

export const publicacoesInstagram: PublicacaoInstagram[] = [
  {
    src: "/instagram/instagram-1-C-WKj4qAbVS.webp",
    alt: "Barbeiro finalizando um degradê com escova e máquina na Dom Elii Barbershop, em Curitiba",
    url: "https://www.instagram.com/p/C-WKj4qAbVS/",
    video: true,
  },
  {
    src: "/instagram/instagram-2-C_06Cv0RFkn.webp",
    alt: "Barbeiro da Dom Elii Barbershop com máquina e tesoura na mão, cabelo cacheado com degradê nas laterais",
    url: "https://www.instagram.com/p/C_06Cv0RFkn/",
    video: true,
  },
  {
    src: "/instagram/instagram-3-DSgIqJRCScA.webp",
    alt: "Corte masculino na tesoura com acabamento em degradê na Dom Elii Barbershop",
    url: "https://www.instagram.com/p/DSgIqJRCScA/",
    video: true,
  },
  {
    src: "/instagram/instagram-4-DXZ0_MECdTE.webp",
    alt: "Corte de cabelo infantil feito na máquina na Dom Elii Barbershop, no Boa Vista",
    url: "https://www.instagram.com/p/DXZ0_MECdTE/",
    video: true,
  },
  {
    src: "/instagram/instagram-5-DVrnrj7iRnC.webp",
    alt: "Acabamento de barba na Dom Elii Barbershop, com as roupas da Rawa Surf Wear ao fundo",
    url: "https://www.instagram.com/p/DVrnrj7iRnC/",
    video: true,
  },
  {
    src: "/instagram/instagram-6-DXH_49uiWnr.webp",
    alt: "Dois barbeiros atendendo ao mesmo tempo no salão da Dom Elii Barbershop, em Curitiba",
    url: "https://www.instagram.com/p/DXH_49uiWnr/",
    video: true,
  },
];
