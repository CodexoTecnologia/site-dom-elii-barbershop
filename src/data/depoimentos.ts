/**
 * DEPOIMENTOS DE CLIENTES.
 *
 * Todos copiados VERBATIM do perfil público do Google, sem correção de
 * ortografia nem "melhoria" de texto. Depoimento editado perde o que faz ele
 * funcionar: soar como pessoa real. Se todos estiverem bem escritos e no
 * mesmo tom, o leitor percebe e para de acreditar na página inteira.
 *
 * A seleção cobre de propósito: os três barbeiros pelo nome, os produtos da
 * loja, o ambiente e a expressão "melhor barbearia de Curitiba" — que é o
 * termo que as pessoas buscam, dito por um cliente e não por nós.
 *
 * Sem data: "2 meses atrás" vira mentira sozinho com o passar do tempo, e
 * teria de ser revisado a cada visita ao arquivo.
 *
 * Enquanto a lista estiver vazia, a seção não é renderizada.
 *
 * IMPORTANTE — por que isso não vira schema `Review`:
 * as diretrizes do Google proíbem marcar como dados estruturados avaliações
 * coletadas em plataformas de terceiros, apresentando-as como se fossem do
 * próprio site. Elas aparecem visualmente, com link para a fonte, e ficam
 * fora do JSON-LD. Mesmo motivo pelo qual não usamos `aggregateRating`.
 */

export type Depoimento = {
  nome: string;
  texto: string;
  /** "Google" ou "Booksy". Aparece junto ao nome. */
  fonte: string;
};

export const depoimentos: Depoimento[] = [
  {
    nome: "Amanda Silva",
    texto:
      "Já corto com Elias há quase um ano e sempre saio satisfeita! Profissional experiente, atencioso e entende exatamente o que eu quero. O ambiente é ótimo, o atendimento sempre impecável, e a qualidade do corte faz toda a diferença. Recomendo muito!",
    fonte: "Google",
  },
  {
    nome: "Gabriel Agapito de Almeida",
    texto:
      "A melhor barbearia de curitiba. Atendimento excelente, ambiente descontraído e profissionais qualificados. Recomendo pra todos cortar na Dom Eli, desde que fui pela primeira vez não corto em outro lugar.",
    fonte: "Google",
  },
  {
    nome: "Thiago Silva",
    texto:
      "O atendimento, foi diferenciado! O Henrique me atendeu super bem, recomendo e vou voltar mais vezes!!!",
    fonte: "Google",
  },
  {
    nome: "Leonardo Domingues",
    texto: "Experiência top! Muito bem atendido pelo Lucas",
    fonte: "Google",
  },
  {
    nome: "Denilson Lima",
    texto:
      "Eu sempre passei em frente e tinha curiosidade em conhecer. hj fui na barbearia dom elii barbershop e pude ver que e uma barbearia top em todos sentidos como o corte muito top e o diferencial e que tem várias mercadoria como perfume, refresco, roupas, boné, creme, pomada entre outras variedade em produto e o atendimento e diferenciado, excelente profissionais",
    fonte: "Google",
  },
  {
    nome: "Solange da Silva Rocha",
    texto:
      "Maravilhosa. Vou voltar e indico o lugar. Super atencioso e tem um mascotinho lindo o gatinho",
    fonte: "Google",
  },
  {
    nome: "Andrey Gustavo",
    texto:
      "Melhor barbearia da região, corto com o Elias tem dois anos e não tenho nada a reclamar, excelente profissional.",
    fonte: "Google",
  },
  {
    nome: "Rogerio Schmidt",
    texto:
      "Excelente Barbearia, serviço de excelência.. atendimento nota 1000",
    fonte: "Google",
  },
];
