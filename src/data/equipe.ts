/**
 * EQUIPE — fonte única da verdade.
 *
 * Nomes conferidos com o perfil do Booksy (Membros da Equipe).
 * Alimenta a seção de equipe e o JSON-LD (`employee` do LocalBusiness),
 * que é o principal sinal de E-E-A-T do site.
 *
 * PARA ADICIONAR BARBEIRO: acrescente um item aqui. Nada mais muda.
 *
 * `imagem`: retrato em /public, exibido em 4:5. Se o campo faltar, a UI cai
 * num placeholder com as iniciais em vez de quebrar.
 *
 * Nome de arquivo sempre em minúsculas: o Windows ignora maiúsculas, o
 * servidor de produção (Linux) não — divergência só aparece depois do deploy.
 */

export type MembroEquipe = {
  id: number;
  nome: string;
  cargo: string;
  descricao: string;
  instagram?: string;
  imagem?: string;
};

export const equipeData: MembroEquipe[] = [
  {
    id: 1,
    nome: "Elias Filho",
    cargo: "Fundador",
    descricao:
      "Fundador da Dom Elii. Começa todo atendimento pelo formato do rosto e pelo tipo de fio, antes de encostar a máquina.",
    imagem: "/barbeiro-elias-filho.jpeg",
  },
  {
    id: 2,
    nome: "Lucas Eduardo",
    cargo: "Degradê e textura",
    descricao:
      "Referência da casa em degradê, navalhado e trabalho de textura em cabelo crespo e ondulado.",
    imagem: "/barbeiro-lucas-eduardo.jpeg",
  },
  {
    id: 3,
    nome: "Henrique Vilares",
    cargo: "Química e coloração",
    descricao:
      "Responsável pelos platinados, luzes e pigmentações. Avalia o fio antes de qualquer descoloração e recusa o serviço quando o cabelo não aguenta.",
    imagem: "/barbeiro-henrique-vilares.jpeg",
  },
];
