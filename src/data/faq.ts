/**
 * FAQ — fonte única da verdade.
 *
 * Alimenta a página /faq e o schema QAPage/FAQPage.
 * Escreva a resposta completa em uma frase autossuficiente: é assim que
 * mecanismos de IA (AI Overviews, ChatGPT, Perplexity) conseguem citar o
 * trecho isolado, sem depender do resto da página.
 *
 * PARA ADICIONAR PERGUNTA: acrescente um item aqui. A página e o schema
 * atualizam sozinhos.
 */

export type ItemFaq = { pergunta: string; resposta: string };

export const faqData: ItemFaq[] = [
  {
    pergunta: "Onde fica a Dom Elii Barbershop?",
    resposta:
      "A Dom Elii Barbershop fica na Rua Lodovico Geronazzo, 539, no bairro Boa Vista, em Curitiba (PR), CEP 82560-040. Estamos a poucos minutos do Bacacheri, Cabral, Ahú e Juvevê.",
  },
  {
    pergunta: "É necessário agendar horário?",
    resposta:
      "Recomendamos fortemente o agendamento pelo Booksy para garantir horário e barbeiro. Atendemos por ordem de chegada apenas quando há janela livre na agenda do dia.",
  },
  {
    pergunta: "Qual o horário de funcionamento?",
    resposta:
      "Abrimos de segunda a sexta e aos sábados: segunda das 13h às 20h, de terça a sexta das 9h às 20h e sábado das 9h às 19h. Domingo não abrimos.",
  },
  {
    pergunta: "Quanto custa um corte de cabelo?",
    resposta:
      "O corte de cabelo custa R$ 49,90 e leva cerca de 30 minutos. O combo cabelo e barba sai por R$ 90,00 e o ritual completo com cabelo, barba e sobrancelha por R$ 105,00. A tabela completa está na página de serviços.",
  },
  {
    pergunta: "Quais as formas de pagamento?",
    resposta:
      "Aceitamos Pix, dinheiro e cartões de crédito e débito. O pagamento também pode ser feito no momento do agendamento pelo Booksy.",
  },
  {
    pergunta: "A Dom Elii possui estacionamento?",
    resposta:
      "Há vagas na via em frente à barbearia, na Rua Lodovico Geronazzo. Como o movimento varia ao longo do dia, sugerimos chegar com alguns minutos de antecedência.",
  },
  {
    pergunta: "O que é o visagismo que vocês aplicam?",
    resposta:
      "Visagismo é o estudo das proporções do rosto aplicado ao corte. Antes de cortar, analisamos formato do rosto, linha de implantação do cabelo, densidade do fio e rotina do cliente para definir a altura do degradê, o comprimento do topo e o desenho da barba.",
  },
  {
    pergunta: "Posso escolher o barbeiro?",
    resposta:
      "Sim. Elias Filho, Lucas Eduardo e Henrique Vilares aparecem como opção no momento do agendamento pelo Booksy, e cada um tem uma especialidade dentro da casa.",
  },
  {
    pergunta: "Vocês atendem crianças?",
    resposta:
      "Sim, atendemos o público infantil a partir de 3 anos, com a experiência de barbearia clássica adaptada para os pequenos.",
  },
  {
    pergunta: "Quanto tempo demora um platinado?",
    resposta:
      "A sessão de platinado começa em 30 minutos, mas o tempo real depende do comprimento e do histórico químico do cabelo. O valor parte de R$ 100,00 e é confirmado na avaliação, antes de iniciar o procedimento.",
  },
];
