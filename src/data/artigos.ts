/**
 * EDITORIAL / BLOG — fonte única da verdade.
 *
 * Cada artigo vira uma URL indexável em /blog/[slug] com metadata e schema
 * `Article` próprios. Sem entrada aqui, não existe página.
 *
 * PARA PUBLICAR: adicione um objeto no topo do array. O sitemap, o índice do
 * blog e a rota estática são gerados automaticamente a partir daqui.
 *
 * - `slug`: vira a URL. Só minúsculas, sem acento, separado por hífen.
 * - `publicadoEm`: ISO 8601 (YYYY-MM-DD). É o que o Google lê como data.
 * - `conteudo`: blocos tipados, renderizados sem dependência de markdown.
 */

export type BlocoConteudo =
  | { tipo: "p"; texto: string }
  | { tipo: "h2"; texto: string }
  | { tipo: "h3"; texto: string }
  | { tipo: "ul"; itens: string[] }
  | { tipo: "citacao"; texto: string };

export type Artigo = {
  id: number;
  slug: string;
  titulo: string;
  /** Usado em <title>. Se vazio, cai no `titulo`. Ideal: até 60 caracteres. */
  tituloSeo?: string;
  resumo: string;
  categoria: string;
  publicadoEm: string;
  atualizadoEm?: string;
  autor: string;
  tempoLeitura: string;
  imagem: string;
  imagemAlt: string;
  conteudo: BlocoConteudo[];
};

export const artigosBlog: Artigo[] = [
  {
    id: 1,
    slug: "visagismo-masculino-corte-ideal-formato-de-rosto",
    titulo:
      "Visagismo Masculino: qual o corte ideal para o seu formato de rosto?",
    tituloSeo: "Visagismo Masculino: o corte ideal para cada formato de rosto",
    resumo:
      "Como usamos a geometria facial para escolher o corte que equilibra as proporções do seu rosto — e por que o mesmo degradê fica ótimo em um cliente e estranho em outro.",
    categoria: "Visagismo",
    publicadoEm: "2026-05-10",
    autor: "Elias Filho",
    tempoLeitura: "6 min",
    imagem: "/corte-1.jpeg",
    imagemAlt:
      "Barbeiro executando corte com visagismo na Dom Elii Barbershop, em Curitiba",
    conteudo: [
      {
        tipo: "p",
        texto:
          "Visagismo não é tendência de rede social: é o estudo das proporções do rosto aplicado ao corte de cabelo e ao desenho da barba. O objetivo é simples de dizer e difícil de executar — aproximar o seu rosto de um formato oval, considerado o mais equilibrado, usando volume, altura e contorno.",
      },
      {
        tipo: "p",
        texto:
          "É por isso que o mesmo degradê que ficou impecável no seu amigo pode não funcionar em você. Não é questão de qualidade do barbeiro: é questão de estrutura óssea. Abaixo está o raciocínio que usamos na cadeira da Dom Elii antes de encostar a máquina no seu cabelo.",
      },
      { tipo: "h2", texto: "Primeiro passo: identificar o seu formato de rosto" },
      {
        tipo: "p",
        texto:
          "Puxe o cabelo para trás, fique de frente para o espelho e observe três medidas: a largura da testa, a largura das maçãs do rosto e a largura da mandíbula. Depois compare o comprimento total do rosto com a maior dessas larguras.",
      },
      {
        tipo: "ul",
        itens: [
          "Oval: comprimento maior que a largura, sem ângulos marcados. É o formato de referência.",
          "Quadrado: testa e mandíbula com larguras parecidas e ângulo forte no maxilar.",
          "Redondo: comprimento e largura parecidos, com poucas linhas retas.",
          "Retangular ou alongado: rosto claramente mais comprido do que largo.",
          "Triangular invertido: testa larga afunilando para um queixo estreito.",
          "Diamante: maçãs do rosto largas, com testa e queixo mais estreitos.",
        ],
      },
      { tipo: "h2", texto: "O que fazer em cada formato" },
      { tipo: "h3", texto: "Rosto quadrado" },
      {
        tipo: "p",
        texto:
          "Você já tem o ângulo de mandíbula que muita gente busca — a tarefa é não somar peso a ele. Degradê médio ou alto nas laterais, volume moderado no topo e barba curta bem contornada preservam a força da linha do maxilar sem deixar o rosto pesado. Evite laterais cheias com franja reta: isso transforma o rosto em um bloco.",
      },
      { tipo: "h3", texto: "Rosto redondo" },
      {
        tipo: "p",
        texto:
          "O objetivo é criar altura e reduzir largura. Isso significa laterais curtas (degradê baixo a médio funciona bem), topo mais alto e penteado com movimento vertical — pompadour, quiff ou topete texturizado. Barba com contorno mais retangular no queixo ajuda a alongar. Franja caída e laterais volumosas fazem o oposto do que você precisa.",
      },
      { tipo: "h3", texto: "Rosto alongado ou retangular" },
      {
        tipo: "p",
        texto:
          "Aqui a lógica inverte: pouco volume no topo e um pouco mais de peso nas laterais. Cortes médios com franja lateral quebram o comprimento. A barba pode ser um pouco mais cheia nas laterais para ampliar a largura visual. Fuja do degradê skin com topete alto — ele estica ainda mais o rosto.",
      },
      { tipo: "h3", texto: "Rosto triangular invertido" },
      {
        tipo: "p",
        texto:
          "A testa larga pede que o volume desça. Cortes com franja, laterais não muito raspadas e barba mais densa na região do queixo criam equilíbrio de baixo para cima.",
      },
      { tipo: "h3", texto: "Rosto diamante" },
      {
        tipo: "p",
        texto:
          "O ponto largo está no meio do rosto. Volume no topo e barba levemente cheia no queixo compensam as maçãs proeminentes. Laterais muito raspadas tendem a exagerar o contraste.",
      },
      { tipo: "h2", texto: "O que quase ninguém considera: cabelo e rotina" },
      {
        tipo: "p",
        texto:
          "Formato de rosto define a direção. Mas dois fatores decidem se o corte vai funcionar no dia a dia: o tipo de fio e quanto tempo você está disposto a gastar de manhã.",
      },
      {
        tipo: "ul",
        itens: [
          "Cabelo fino e liso não sustenta topete alto sem pomada e secador — se você não vai fazer isso todo dia, escolha outro corte.",
          "Cabelo crespo ou muito ondulado ganha volume natural: cortes que dependem de volume extra costumam ficar pesados.",
          "Entradas pronunciadas pedem franja texturizada em vez de cabelo puxado para trás.",
          "Quem usa capacete, boné ou touca com frequência precisa de um corte que volte à forma sozinho.",
        ],
      },
      {
        tipo: "citacao",
        texto:
          "Um corte tecnicamente perfeito que você não consegue reproduzir em casa é um corte que falhou.",
      },
      { tipo: "h2", texto: "Como isso funciona na prática, na cadeira" },
      {
        tipo: "p",
        texto:
          "Na Dom Elii, a conversa antes do corte não é formalidade. Analisamos o formato do rosto, a linha de implantação do cabelo, a densidade dos fios, a assimetria natural (praticamente todo rosto tem uma) e a sua rotina. Só então definimos altura de degradê, comprimento do topo e desenho da barba.",
      },
      {
        tipo: "p",
        texto:
          "Se você quiser testar antes de mudar radicalmente, comece pelo contorno: um ajuste de sobrancelha na navalha e um redesenho da linha da barba já mudam a leitura do rosto sem mexer no comprimento do cabelo.",
      },
      {
        tipo: "p",
        texto:
          "Atendemos na Boa Vista, em Curitiba, com fácil acesso para quem vem do Bacacheri, Cabral, Ahú e Juvevê. O agendamento é feito pelo Booksy, com horário garantido.",
      },
    ],
  },
  {
    id: 2,
    slug: "tendencias-de-barba-em-curitiba-para-o-inverno",
    titulo: "Tendências de barba em Curitiba para o inverno",
    tituloSeo: "Barba no inverno de Curitiba: estilos e cuidados com a pele",
    resumo:
      "O frio e a umidade de Curitiba castigam a pele sob a barba. Veja os estilos em alta na estação e como a barboterapia resolve descamação e coceira.",
    categoria: "Barba",
    publicadoEm: "2026-05-05",
    autor: "Elias Filho",
    tempoLeitura: "5 min",
    imagem: "/barba-1.jpeg",
    imagemAlt:
      "Barboterapia com toalha no vapor sendo aplicada na Dom Elii Barbershop, Curitiba",
    conteudo: [
      {
        tipo: "p",
        texto:
          "Curitiba tem uma combinação específica que poucas capitais brasileiras têm: frio persistente, umidade alta e vento. Para quem usa barba, isso significa três problemas recorrentes entre maio e agosto — pele ressecada sob os fios, descamação visível (a famosa caspa da barba) e coceira constante.",
      },
      {
        tipo: "p",
        texto:
          "A boa notícia é que o inverno também é a melhor estação para deixar a barba crescer. Abaixo, o que estamos executando com mais frequência na Dom Elii nesta época e o cuidado que faz a diferença.",
      },
      { tipo: "h2", texto: "Os estilos que mais saem no inverno" },
      { tipo: "h3", texto: "Barba cheia com contorno definido" },
      {
        tipo: "p",
        texto:
          "O volume é natural, mas as linhas não podem ser. O que separa uma barba cheia bem-feita de uma barba largada é o contorno: linha do pescoço marcada logo acima do pomo de adão, bochecha alinhada e comprimento nivelado na navalha. É o estilo mais pedido da estação e o que mais depende de manutenção quinzenal.",
      },
      { tipo: "h3", texto: "Barba curta degradê" },
      {
        tipo: "p",
        texto:
          "Transição suave entre o costeleta e o corte de cabelo, com o comprimento crescendo em direção ao queixo. Funciona muito bem em quem tem falhas nas laterais, porque a graduação disfarça a diferença de densidade.",
      },
      { tipo: "h3", texto: "Barba por fazer desenhada" },
      {
        tipo: "p",
        texto:
          "Para quem não quer volume mas também não quer o rosto liso. Comprimento uniforme na máquina de acabamento com contorno feito na navalha. Rápido de manter e discreto o suficiente para ambiente corporativo.",
      },
      { tipo: "h3", texto: "Barba com pigmentação" },
      {
        tipo: "p",
        texto:
          "Cresceu muito nos últimos anos. A pigmentação preenche visualmente falhas e uniformiza fios brancos ou avermelhados. O resultado dura algumas semanas e não muda a textura do fio.",
      },
      { tipo: "h2", texto: "Por que a pele descama justamente no frio" },
      {
        tipo: "p",
        texto:
          "A barba funciona como uma barreira: ela retém o calor, mas também absorve a oleosidade natural que deveria hidratar a pele embaixo. Some a isso o banho muito quente — reflexo natural no inverno curitibano — e o resultado é uma pele desidratada, coçando e soltando escamas que ficam visíveis entre os fios.",
      },
      {
        tipo: "ul",
        itens: [
          "Banho morno em vez de quente, principalmente no rosto.",
          "Lavar a barba com shampoo próprio 2 a 3 vezes por semana, não com sabonete em barra.",
          "Óleo ou balm de barba aplicado na pele, não só nos fios — é ali que está o problema.",
          "Pentear no sentido do crescimento para distribuir a oleosidade natural.",
          "Manutenção profissional a cada 15 a 20 dias para tirar as pontas ressecadas.",
        ],
      },
      { tipo: "h2", texto: "O papel da barboterapia" },
      {
        tipo: "p",
        texto:
          "A barboterapia com toalha no vapor não é só a parte confortável do atendimento. O calor úmido abre os poros e amolece o fio, o que permite um alinhamento na navalha muito mais rente e com menos irritação. Em seguida, a aplicação de óleos essenciais devolve à pele exatamente o que o inverno tirou.",
      },
      {
        tipo: "p",
        texto:
          "Na prática, quem faz barboterapia com regularidade no inverno relata bem menos coceira e quase nenhuma descamação — que é o motivo número um pelo qual as pessoas desistem da barba em julho.",
      },
      {
        tipo: "citacao",
        texto:
          "Barba grande não é barba largada. A diferença está no contorno e na pele por baixo dela.",
      },
      { tipo: "h2", texto: "Com que frequência voltar à barbearia" },
      {
        tipo: "p",
        texto:
          "Para barba cheia, o intervalo ideal é de 15 a 20 dias — tempo suficiente para o contorno se perder, mas não para o formato se desfazer. Para barba curta ou desenhada, de 10 a 15 dias. Se você faz cabelo e barba juntos, alinhar os dois no mesmo agendamento economiza uma visita.",
      },
      {
        tipo: "p",
        texto:
          "A Dom Elii fica na Boa Vista, em Curitiba, atendendo também Bacacheri, Cabral e Ahú. Barba e barboterapia podem ser agendadas separadamente ou dentro dos combos com corte, direto pelo Booksy.",
      },
    ],
  },
  {
    id: 3,
    slug: "platinado-masculino-como-manter-cabelo-saudavel",
    titulo: "Platinado masculino: como manter o cabelo saudável pós-química",
    tituloSeo: "Platinado masculino: cuidados para manter o fio saudável",
    resumo:
      "Descoloriu para o platinado? O trabalho começa depois. Guia de manutenção para segurar o tom, evitar o amarelado e não perder o fio.",
    categoria: "Cuidados",
    publicadoEm: "2026-04-28",
    autor: "Henrique Vilares",
    tempoLeitura: "6 min",
    imagem: "/corte-3.jpeg",
    imagemAlt:
      "Resultado de platinado masculino executado na Dom Elii Barbershop, em Curitiba",
    conteudo: [
      {
        tipo: "p",
        texto:
          "O platinado é o procedimento que mais transforma um visual masculino — e também o que mais castiga o fio. Descolorir significa abrir a cutícula do cabelo e remover pigmento. Feito com técnica, o resultado é impecável. Feito sem manutenção depois, o fio fica poroso, elástico quando molhado e quebra na altura do meio.",
      },
      {
        tipo: "p",
        texto:
          "Este guia é o que orientamos para todo cliente que sai da cadeira platinado na Dom Elii.",
      },
      { tipo: "h2", texto: "As 72 horas seguintes" },
      {
        tipo: "p",
        texto:
          "A cutícula continua sensível logo após a descoloração. Nesse período:",
      },
      {
        tipo: "ul",
        itens: [
          "Evite lavar nas primeiras 48 horas, se possível.",
          "Nada de água muito quente — ela abre ainda mais a cutícula.",
          "Sem prancha, secador em temperatura alta ou boné apertado.",
          "Evite piscina: o cloro reage com o resíduo de descoloração e puxa o tom para o esverdeado.",
        ],
      },
      { tipo: "h2", texto: "O amarelado: por que aparece e como segurar" },
      {
        tipo: "p",
        texto:
          "O cabelo humano tem pigmento amarelo residual mesmo depois de descolorido. O tom platinado só existe porque um matizador roxo neutraliza esse amarelo. Com as lavagens, o matizador vai embora e o subtom volta a aparecer — normalmente entre a segunda e a terceira semana.",
      },
      {
        tipo: "p",
        texto:
          "A solução é o shampoo matizador (roxo), usado uma a duas vezes por semana. Mais do que isso resseca e pode deixar um tom acinzentado excessivo. Deixe agir de 3 a 5 minutos e enxágue bem. Nas outras lavagens, use shampoo sem sulfato.",
      },
      { tipo: "h2", texto: "Hidratação, nutrição e reconstrução" },
      {
        tipo: "p",
        texto:
          "Essas três palavras não são sinônimos e a confusão entre elas é a causa mais comum de fio quebradiço depois do platinado.",
      },
      {
        tipo: "ul",
        itens: [
          "Hidratação repõe água. É a mais frequente — pode ser semanal.",
          "Nutrição repõe lipídios (óleos). A cada 15 dias, em média.",
          "Reconstrução repõe massa capilar com queratina ou aminoácidos. Só quando necessário: usar demais deixa o fio rígido e ele quebra igual.",
        ],
      },
      {
        tipo: "p",
        texto:
          "O erro clássico é fazer reconstrução toda semana achando que está fortalecendo. Na prática, isso satura o fio de proteína e o deixa quebradiço. Se o cabelo está esticando muito quando molhado, ele precisa de proteína. Se está áspero e sem brilho, precisa de água e óleo.",
      },
      {
        tipo: "citacao",
        texto:
          "Platinado não é um procedimento. É uma rotina que começa no dia seguinte à descoloração.",
      },
      { tipo: "h2", texto: "Retoque de raiz: quando voltar" },
      {
        tipo: "p",
        texto:
          "O cabelo cresce cerca de um centímetro por mês. O retoque costuma ser necessário entre 4 e 6 semanas. Importante: o retoque deve pegar apenas a raiz. Reaplicar descoloração no comprimento que já foi descolorido é o caminho mais rápido para a quebra — e é exatamente o que acontece em serviços feitos às pressas.",
      },
      { tipo: "h2", texto: "Quem não deveria platinar agora" },
      {
        tipo: "ul",
        itens: [
          "Quem fez alisamento com amônia recentemente — as químicas não são compatíveis.",
          "Quem já tem o fio elástico ou com quebra visível: primeiro reconstrução, depois química.",
          "Quem tem couro cabeludo com feridas, psoríase ativa ou dermatite em crise.",
        ],
      },
      {
        tipo: "p",
        texto:
          "Na Dom Elii, avaliamos o histórico químico e a resistência do fio antes de aplicar qualquer descoloração — inclusive recusando o procedimento quando o cabelo não está em condição de recebê-lo. Platinado, luzes e hidratação podem ser agendados pelo Booksy; se estiver em dúvida sobre a condição do seu cabelo, chame no WhatsApp e mande uma foto antes.",
      },
    ],
  },
];

export function encontrarArtigo(slug: string): Artigo | undefined {
  return artigosBlog.find((a) => a.slug === slug);
}

/** Ex.: "2026-05-10" -> "10 de maio de 2026" */
export function dataLegivel(iso: string): string {
  return new Date(`${iso}T12:00:00-03:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
