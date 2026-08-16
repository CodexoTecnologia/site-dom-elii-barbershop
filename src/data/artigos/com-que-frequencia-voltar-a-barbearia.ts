import type { Artigo } from "./tipos";

export const artigo: Artigo = {
  slug: "com-que-frequencia-voltar-a-barbearia",
  titulo: "De quanto em quanto tempo voltar à barbearia?",
  tituloSeo: "De quanto em quanto tempo cortar o cabelo masculino?",
  resumo:
    "O intervalo ideal muda conforme o corte, o tipo de fio e a barba. Um guia por estilo, e o que acontece quando passa do ponto.",
  categoria: "Rotina",
  publicadoEm: "2026-07-02",
  autor: "Lucas Eduardo",
  tempoLeitura: "5 min",
  imagem: "/clientes/corte-4.jpeg",
  imagemAlt:
    "Manutenção de corte masculino na Dom Elii Barbershop, em Curitiba",
  conteudo: [
    {
      tipo: "p",
      texto:
        "O cabelo cresce, em média, um centímetro por mês. Parece pouco, mas em um degradê alto meio centímetro já é suficiente para o desenho sumir. É por isso que a pergunta não tem resposta única: depende bem mais do corte que você escolheu do que do seu cabelo.",
    },
    { tipo: "h2", texto: "Por tipo de corte" },
    {
      tipo: "ul",
      itens: [
        "Skin fade ou degradê alto: de 10 a 15 dias. A área raspada é grande e qualquer crescimento aparece como sombra irregular.",
        "Degradê médio: de 2 a 3 semanas.",
        "Degradê baixo ou social: de 3 a 4 semanas — cresce disfarçando melhor.",
        "Corte médio, com mais comprimento: de 5 a 8 semanas, mais para manter a forma do que o comprimento.",
        "Só máquina, comprimento único: de 3 a 4 semanas.",
      ],
    },
    { tipo: "h2", texto: "Por tipo de barba" },
    {
      tipo: "ul",
      itens: [
        "Barba desenhada, curta: de 10 a 15 dias. O contorno é o primeiro a se perder.",
        "Barba cheia: de 15 a 20 dias, para nivelar o comprimento e refazer a linha do pescoço.",
        "Só o acabamento entre visitas: 7 a 10 dias, se você quer o contorno sempre limpo.",
      ],
    },
    {
      tipo: "p",
      texto:
        "Se você faz cabelo e barba, vale alinhar os dois no mesmo agendamento. Além de economizar uma viagem, o combo costuma sair mais barato que os serviços separados.",
    },
    {
      tipo: "imagem",
      src: "/clientes/corte-5.jpeg",
      alt: "Corte masculino recém-finalizado na Dom Elii Barbershop, em Curitiba",
      legenda: "Corte bem-feito não é o que fica bom no dia: é o que ainda está aceitável duas semanas depois.",
    },
    { tipo: "h2", texto: "O que acontece quando passa do ponto" },
    {
      tipo: "p",
      texto:
        "Não é só questão estética. Cabelo que passou do ponto muda de comportamento: as laterais ganham volume e a cabeça parece mais larga, a nuca perde o contorno e começa a formar aquele \"rabinho\", e o topo fica pesado demais para o produto sustentar. O penteado que funcionava para de funcionar, e a impressão é de que o produto piorou — quando o problema é o comprimento.",
    },
    {
      tipo: "p",
      texto:
        "Na barba, o efeito é parecido: sem o contorno do pescoço, ela desce e a linha do maxilar se perde. É a diferença entre barba cheia e barba largada, e ela mora inteira no contorno.",
    },
    {
      tipo: "citacao",
      texto:
        "Corte bem-feito não é o que fica bom no dia. É o que ainda está aceitável duas semanas depois.",
    },
    { tipo: "h2", texto: "Como saber que chegou a hora" },
    {
      tipo: "ul",
      itens: [
        "O cabelo começa a encostar na orelha.",
        "Aparece um \"degrau\" onde antes a transição era lisa.",
        "Você precisa de mais produto que o normal para o mesmo resultado.",
        "A nuca já não está mais reta ao passar a mão.",
        "Você passa a usar boné com mais frequência sem pensar no assunto.",
      ],
    },
    {
      tipo: "destaque",
      titulo: "A manutenção curta",
      texto: "Pezinho e acabamento de barba levam 15 minutos, custam a partir de R$ 20,00 e compram mais duas semanas de visual em ordem.",
    },
    { tipo: "h2", texto: "Dá para esticar o intervalo?" },
    {
      tipo: "p",
      texto:
        "Dá, em parte, e a escolha começa na cadeira. Se você só consegue vir uma vez por mês, diga isso ao barbeiro: ele pode trabalhar um degradê mais baixo e deixar um pouco mais de comprimento nas laterais, o que faz o corte crescer de forma mais uniforme. Você troca um pouco de contraste imediato por um visual que aguenta mais tempo.",
    },
    {
      tipo: "p",
      texto:
        "A outra saída é a manutenção curta: um pezinho e um acabamento de barba, de 15 a 20 minutos e por um valor bem menor que o corte completo, resolvem o contorno e compram mais duas semanas.",
    },
    {
      tipo: "p",
      texto:
        "Na Dom Elii, pezinho e acabamento de barba levam 15 minutos e custam a partir de R$ 20,00. É o serviço que mais faz diferença para quem não consegue voltar toda semana.",
    },
  ],
};
