import type { Artigo } from "./tipos";

export const artigo: Artigo = {
  slug: "como-cuidar-do-cabelo-em-casa",
  titulo: "Como cuidar do cabelo em casa entre um corte e outro",
  tituloSeo: "Como cuidar do cabelo masculino em casa: rotina simples",
  resumo:
    "Com que frequência lavar, qual água usar, como secar e o que fazer com o couro cabeludo oleoso ou com caspa. Uma rotina de cinco minutos.",
  categoria: "Cuidados",
  publicadoEm: "2026-06-24",
  autor: "Henrique Vilares",
  tempoLeitura: "6 min",
  imagem: "/corte-5.jpeg",
  imagemAlt:
    "Cabelo masculino finalizado na Dom Elii Barbershop, em Curitiba",
  conteudo: [
    {
      tipo: "p",
      texto:
        "Boa parte dos problemas que chegam à cadeira — cabelo sem volume, couro oleoso, caspa, pontas ressecadas — não vem do corte. Vem do que acontece nas três semanas entre uma visita e outra. E quase tudo se resolve com hábitos simples, não com prateleira cheia de produto.",
    },
    { tipo: "h2", texto: "Com que frequência lavar" },
    {
      tipo: "p",
      texto:
        "A resposta honesta é: depende da oleosidade do seu couro cabeludo, não de uma regra fixa. Mas há um padrão que funciona para a maioria:",
    },
    {
      tipo: "ul",
      itens: [
        "Couro oleoso: shampoo dia sim, dia não. Lavar todo dia pode aumentar a oleosidade, porque o couro compensa o que foi retirado.",
        "Couro normal: 3 a 4 vezes por semana.",
        "Couro seco ou cabelo com química: 2 a 3 vezes por semana, com shampoo sem sulfato.",
      ],
    },
    {
      tipo: "p",
      texto:
        "Nos dias sem shampoo, água corrente resolve. Se você treina, enxaguar depois do exercício é suficiente — não precisa de shampoo todas as vezes.",
    },
    { tipo: "h2", texto: "A temperatura da água importa mais do que parece" },
    {
      tipo: "p",
      texto:
        "Água quente no couro cabeludo estimula a produção de oleosidade e resseca o comprimento. Em Curitiba, no inverno, isso vira o problema número um: o banho quente é irresistível e o cabelo paga a conta. Lave a cabeça com água morna e, se der, termine com um jato mais frio — ajuda a fechar a cutícula e dá mais brilho.",
    },
    { tipo: "h2", texto: "Shampoo vai no couro, condicionador no comprimento" },
    {
      tipo: "p",
      texto:
        "Parece detalhe e não é. O shampoo limpa o couro cabeludo: massageie ali com a ponta dos dedos, nunca com a unha. O condicionador serve para o comprimento e as pontas — aplicado na raiz, ele pesa o cabelo e acelera a oleosidade. Em cabelo muito curto, condicionador é praticamente dispensável.",
    },
    { tipo: "h2", texto: "Como secar" },
    {
      tipo: "ul",
      itens: [
        "Não esfregue a toalha: pressione. Esfregar cria frizz e quebra o fio.",
        "Se usar secador, mantenha em temperatura média e a uns 15 cm da cabeça.",
        "Secar o cabelo direcionando com os dedos ou uma escova define a forma do penteado — é aí que o corte volta a ficar como saiu da barbearia.",
        "Dormir com o cabelo molhado é o caminho mais rápido para acordar com ele amassado e para irritar o couro.",
      ],
    },
    {
      tipo: "destaque",
      titulo: "O detalhe que muda o resultado",
      texto: "Shampoo anticaspa precisa agir de 3 a 5 minutos no couro antes de enxaguar. A maioria das pessoas enxágua na hora e conclui que o produto não funciona.",
    },
    { tipo: "h2", texto: "Caspa e coceira" },
    {
      tipo: "p",
      texto:
        "Descamação com coceira geralmente é dermatite seborreica, que é comum e tem tratamento. Shampoo específico (com cetoconazol, piritionato de zinco ou ácido salicílico) duas a três vezes por semana costuma controlar. O detalhe que muda o resultado: deixe agir de 3 a 5 minutos no couro antes de enxaguar — a maioria das pessoas enxágua na hora e não dá tempo do ativo funcionar.",
    },
    {
      tipo: "p",
      texto:
        "Se a descamação vier com vermelhidão forte, feridas ou não melhorar em algumas semanas, procure um dermatologista. Barbearia cuida do corte; couro cabeludo com inflamação é assunto médico.",
    },
    {
      tipo: "citacao",
      texto:
        "Cabelo bonito é 70% corte certo e rotina simples. O resto é produto.",
    },
    { tipo: "h2", texto: "Queda de cabelo: o que dá para fazer" },
    {
      tipo: "p",
      texto:
        "Perder de 50 a 100 fios por dia é normal. O que merece atenção é a mudança de padrão: entradas que avançam, coroa que rareia, cabelo visivelmente mais fino ao longo dos meses. Nenhum shampoo reverte calvície de padrão masculino — quem promete isso está vendendo esperança. O que existe de eficaz é tratamento médico, e ele funciona melhor quanto mais cedo começa.",
    },
    {
      tipo: "p",
      texto:
        "Do nosso lado, o que ajuda é escolher um corte que trabalhe a favor: menos comprimento no topo, mais textura e nada de puxar tudo para trás expondo a linha da testa.",
    },
    { tipo: "h2", texto: "A rotina mínima" },
    {
      tipo: "ul",
      itens: [
        "Shampoo no couro, 3 vezes por semana, com água morna.",
        "Condicionador só no comprimento, se o cabelo tiver comprimento.",
        "Toalha pressionando, nunca esfregando.",
        "Produto de finalização em pouca quantidade, emulsionado nas mãos antes de aplicar.",
        "Voltar à barbearia antes de o corte perder a forma.",
      ],
    },
    {
      tipo: "p",
      texto:
        "Se tiver dúvida sobre o seu caso, pergunte ao barbeiro no próximo atendimento. Quem corta o seu cabelo toda semana enxerga o couro cabeludo e a textura do fio de perto, e costuma perceber mudanças antes de você.",
    },
  ],
};
