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
    cargo: "Barbeiro & Fundador",
    descricao:
      "O arquiteto por trás da Dom Elii. Especialista em visagismo e geometria facial, conduz cada atendimento partindo da estrutura óssea do cliente antes de encostar a máquina.",
    imagem: "/barbeiro-elias-filho.jpeg",
  },
  {
    id: 2,
    nome: "Lucas Eduardo",
    cargo: "Especialista em Degradê & Textura",
    descricao:
      "Mestre das transições limpas. Referência da casa em fade, navalhado e trabalho de textura em cabelos crespos e ondulados.",
    imagem: "/barbeiro-lucas-eduardo.jpeg",
  },
  {
    id: 3,
    nome: "Henrique Vilares",
    cargo: "Barbeiro & Especialista em Química",
    descricao:
      "Responsável pelos platinados, luzes e pigmentações da Dom Elii. Trabalha a descoloração priorizando a saúde do fio em cada sessão.",
    imagem: "/barbeiro-henrique-vilares.jpeg",
  },
];
