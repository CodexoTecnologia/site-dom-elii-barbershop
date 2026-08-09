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
      "Não é obrigatório, mas recomendamos: agendando pelo Booksy você garante o horário e escolhe o barbeiro. Se chegar sem agendar, atendemos sempre que houver janela livre na agenda do dia.",
  },
  {
    pergunta: "Qual o horário de funcionamento?",
    resposta:
      "Abrimos de segunda a sexta e aos sábados: segunda das 13h às 20h, de terça a sexta das 9h às 20h e sábado das 9h às 19h. Domingo não abrimos.",
  },
  {
    pergunta: "Quanto custa um corte de cabelo?",
    resposta:
      "O corte de cabelo custa R$ 49,90 e leva cerca de 30 minutos. O combo cabelo e barba sai por R$ 90,00, e o pacote com cabelo, barba e sobrancelha por R$ 105,00. A tabela completa está na página de preços.",
  },
  {
    pergunta: "Quanto um barbeiro cobra em Curitiba?",
    resposta:
      "Na Dom Elii Barbershop, em Curitiba, o corte de cabelo custa R$ 49,90, a barba R$ 45,00 e o combo cabelo e barba R$ 90,00. Serviços rápidos como pezinho e sobrancelha saem por R$ 20,00. A tabela completa dos 17 serviços está na página de preços.",
  },
  {
    pergunta: "Como saber se o barbeiro é bom?",
    resposta:
      "Três sinais confiáveis: ele pergunta sobre a sua rotina antes de cortar, em vez de só perguntar o número da máquina; mostra o acabamento com espelho no final; e mantém avaliações públicas e recentes. A Dom Elii tem nota 5,0 no Booksy com mais de 80 avaliações de clientes.",
  },
  {
    pergunta: "A barbearia abre no domingo?",
    resposta:
      "Não. Abrimos de segunda a sábado: segunda das 13h às 20h, de terça a sexta das 9h às 20h e sábado das 9h às 19h. Aos domingos permanecemos fechados.",
  },
  {
    pergunta: "Vocês vendem produtos para cabelo?",
    resposta:
      "Sim. Vendemos as pomadas Classe A e as ceras Tocton Style que usamos na finalização do corte, além de roupas da Rawa Surf Wear, tudo na loja dentro da barbearia.",
  },
  {
    pergunta: "Precisa pagar antecipado para agendar?",
    resposta:
      "Não é necessário. O agendamento pelo Booksy reserva o horário sem cobrança antecipada, e o pagamento é feito na barbearia em Pix, dinheiro ou cartão.",
  },
  {
    pergunta: "Quais as formas de pagamento?",
    resposta:
      "Aceitamos Pix, dinheiro e cartões de crédito e débito. O pagamento também pode ser feito no momento do agendamento pelo Booksy.",
  },
  {
    pergunta: "Qual é a melhor barbearia em Curitiba?",
    resposta:
      "Não existe uma resposta única: a melhor barbearia é a que atende bem o seu tipo de cabelo e cabe na sua rotina. Vale avaliar três coisas antes de escolher — se o profissional pergunta sobre o seu dia a dia antes de cortar, se a higienização das ferramentas acontece na sua frente e se as avaliações são recentes e descrevem o serviço. A Dom Elii tem nota 5,0 no Booksy com mais de 80 avaliações e fica na Boa Vista, em Curitiba.",
  },
  {
    pergunta: "Quanto tempo demora cada serviço?",
    resposta:
      "Corte de cabelo leva 30 minutos. Barba, 30 minutos. Cabelo e barba juntos, 1 hora. O combo com cabelo, barba e sobrancelha leva 1h15. Serviços rápidos como pezinho, sobrancelha e acabamento de barba levam 15 minutos. Química, como platinado e luzes, começa em 30 a 45 minutos e varia conforme o comprimento do cabelo.",
  },
  {
    pergunta: "Como remarcar ou cancelar um horário?",
    resposta:
      "Pelo próprio Booksy, no mesmo lugar onde o agendamento foi feito, ou pelo WhatsApp (41) 99538-4975. Avisar com antecedência libera o horário para outro cliente e garante que a sua próxima reserva seja tratada da mesma forma.",
  },
  {
    pergunta: "Posso levar uma foto do corte que eu quero?",
    resposta:
      "Sim, e ajuda bastante. Só vale lembrar que o mesmo corte em tipos de cabelo diferentes dá resultados diferentes: se possível, leve a foto de alguém com textura e densidade parecidas com as suas. O barbeiro vai dizer o que é possível reproduzir no seu cabelo antes de começar.",
  },
  {
    pergunta: "E se eu não gostar do corte?",
    resposta:
      "Fale ainda durante o atendimento. Quase todo ajuste é possível enquanto você está na barbearia, e nenhum é possível depois que você foi embora. Se perceber algo depois, chame no WhatsApp no mesmo dia ou no dia seguinte que a gente resolve.",
  },
  {
    pergunta: "A Dom Elii possui estacionamento?",
    resposta:
      "Há vagas na via em frente à barbearia, na Rua Lodovico Geronazzo. Como o movimento varia ao longo do dia, sugerimos chegar com alguns minutos de antecedência.",
  },
  {
    pergunta: "Vocês ajudam a escolher o corte?",
    resposta:
      "Sim. Antes de começar, o barbeiro considera o formato do seu rosto, a linha de implantação do cabelo, a densidade do fio e a sua rotina para sugerir a altura do degradê, o comprimento do topo e o desenho da barba. A decisão final é sempre sua.",
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
