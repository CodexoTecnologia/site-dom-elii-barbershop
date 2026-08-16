import type { Artigo } from "./tipos";

export const artigo: Artigo = {
  slug: "barba-falhada-o-que-fazer",
  titulo: "Barba falhada: o que dá para resolver e o que não dá",
  tituloSeo: "Barba falhada: o que fazer (e o que não adianta tentar)",
  resumo:
    "Falha nas laterais ou no queixo tem causa genética, mas o desenho, o comprimento e a pigmentação mudam muito o resultado. O que funciona de verdade.",
  categoria: "Barba",
  publicadoEm: "2026-06-14",
  autor: "Elias Filho",
  tempoLeitura: "5 min",
  imagem: "/clientes/barba-1.jpeg",
  imagemAlt:
    "Barba sendo desenhada na navalha na Dom Elii Barbershop, em Curitiba",
  conteudo: [
    {
      tipo: "p",
      texto:
        "É uma das perguntas mais frequentes na cadeira, e quase sempre vem com um pouco de constrangimento junto. Vamos direto ao ponto: a densidade da sua barba é definida pela genética e pela quantidade de folículos que você tem no rosto. Nenhum produto cria folículo novo. Mas isso está longe de significar que não há o que fazer.",
    },
    { tipo: "h2", texto: "Primeiro: talvez não seja falha" },
    {
      tipo: "p",
      texto:
        "A barba não cresce toda no mesmo ritmo. As laterais costumam ser mais lentas que o queixo e o bigode, e muita gente desiste na terceira semana achando que tem falha, quando na verdade ainda não deu tempo. Antes de qualquer conclusão, deixe crescer por 4 a 6 semanas sem aparar. É desconfortável no meio do caminho, mas é o único jeito de saber com o que você está lidando.",
    },
    { tipo: "h2", texto: "O que realmente funciona" },
    { tipo: "h3", texto: "Ajustar o comprimento" },
    {
      tipo: "p",
      texto:
        "Contraintuitivo, mas verdadeiro: barba mais longa disfarça falha melhor que barba curta, porque os fios das áreas densas caem sobre as áreas vazias. Se a sua falha é nas bochechas, deixar crescer costuma resolver mais que qualquer produto.",
    },
    { tipo: "h3", texto: "Mudar o desenho" },
    {
      tipo: "p",
      texto:
        "Se a falha está na parte de cima da bochecha, abaixar a linha do contorno transforma o que parecia falha em desenho intencional. O mesmo vale para o pescoço. É o ajuste mais rápido e o que mais muda a percepção — e é exatamente o tipo de decisão que o barbeiro toma olhando o seu rosto, não seguindo uma regra.",
    },
    { tipo: "h3", texto: "Escolher outro estilo" },
    {
      tipo: "p",
      texto:
        "Nem toda barba precisa ser cheia. Cavanhaque, bigode com cavanhaque ou barba curta bem contornada podem ficar melhores do que insistir em algo que o seu rosto não sustenta. Não é desistir: é jogar com as cartas que você tem.",
    },
    { tipo: "h3", texto: "Pigmentação" },
    {
      tipo: "p",
      texto:
        "Preenche visualmente as áreas mais ralas escurecendo a pele e os fios finos que já existem ali. Não cria pelo, mas reduz muito o contraste entre a área cheia e a vazia. Dura algumas semanas e é o recurso mais eficaz para quem quer resultado imediato.",
    },
    {
      tipo: "citacao",
      texto:
        "Quase toda barba considerada falhada é, na verdade, uma barba com o desenho errado para aquele rosto.",
    },
    {
      tipo: "imagem",
      src: "/clientes/barba-1.jpeg",
      alt: "Barba sendo contornada na navalha na Dom Elii Barbershop",
      legenda: "O contorno é o que separa barba cheia de barba largada — e o que mais disfarça falha.",
    },
    { tipo: "h2", texto: "O que não funciona" },
    {
      tipo: "ul",
      itens: [
        "Raspar para \"nascer mais forte\": mito antigo. Raspar não altera folículo nenhum; o que muda é a sensação, porque o fio cortado na horizontal parece mais grosso ao toque.",
        "Óleo de barba para preencher falha: óleo hidrata a pele e amacia o fio existente, o que é ótimo — mas não faz nascer pelo onde não há folículo.",
        "Suplementos genéricos: se não houver deficiência nutricional diagnosticada, não mudam nada.",
        "Minoxidil sem acompanhamento: existem estudos sobre uso facial, mas há efeitos colaterais reais e o resultado desaparece quando se interrompe. Isso é conversa para dermatologista, não para barbearia.",
      ],
    },
    { tipo: "h2", texto: "O que ajuda no dia a dia" },
    {
      tipo: "ul",
      itens: [
        "Pentear no sentido do crescimento distribui os fios e cobre melhor as áreas ralas.",
        "Manter a pele hidratada evita descamação, que chama atenção justamente para onde tem menos pelo.",
        "Manutenção a cada 15 dias segura o contorno, que é o que faz a barba parecer intencional.",
        "Dormir bem e controlar o estresse não criam folículo, mas influenciam o ciclo de crescimento.",
      ],
    },
    {
      tipo: "destaque",
      titulo: "Antes de decidir qualquer coisa",
      texto: "Deixe crescer de 4 a 6 semanas sem aparar. Muita gente desiste na terceira semana achando que tem falha, quando as laterais só crescem mais devagar.",
    },
    { tipo: "h2", texto: "Quando vale conversar com um médico" },
    {
      tipo: "p",
      texto:
        "Falha que apareceu de repente em uma área antes cheia, em formato de círculo bem definido, pode ser alopecia areata e merece avaliação dermatológica. Falha que sempre existiu e cresce devagar é, quase sempre, só genética.",
    },
    {
      tipo: "p",
      texto:
        "Se você quer entender o que dá para fazer no seu caso, agende uma barba na Dom Elii e converse antes de começar. Em cinco minutos olhando o seu rosto dá para dizer se o caminho é desenho, comprimento, pigmentação ou trocar de estilo.",
    },
  ],
};
