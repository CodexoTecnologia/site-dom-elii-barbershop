/**
 * EQUIPE — fonte única da verdade.
 *
 * Nomes conferidos com o perfil do Booksy (Membros da Equipe).
 * Alimenta a seção de equipe e o JSON-LD (`employee` do LocalBusiness),
 * que é o principal sinal de E-E-A-T do site.
 *
 * PARA ADICIONAR BARBEIRO: acrescente um item aqui. Nada mais muda.
 *
 * TEXTO PROVISÓRIO — VALIDAR COM O ELIAS.
 * As descrições abaixo são genéricas de propósito: os três atendem cabelo,
 * barba e química, e não há uma divisão real de especialidade entre eles.
 * A versão anterior inventava títulos ("Especialista em Degradê & Textura",
 * "Química e coloração") que não correspondiam à realidade. Quando o Elias
 * confirmar o que diferencia cada um, é só trocar o `cargo` e a `descricao`.
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
    cargo: "Barbeiro e fundador",
    descricao:
      "Fundou a Dom Elii em 2022 e continua atendendo todos os dias. É quem define o padrão de acabamento que a casa segue.",
    imagem: "/barbeiro-elias-filho.jpeg",
  },
  {
    id: 2,
    nome: "Lucas Eduardo",
    cargo: "Barbeiro",
    descricao:
      "Atende cabelo, barba e química no dia a dia da barbearia, do degradê clássico ao corte na tesoura.",
    imagem: "/barbeiro-lucas-eduardo.jpeg",
  },
  {
    id: 3,
    nome: "Henrique Vilares",
    cargo: "Barbeiro",
    descricao:
      "Atende cabelo, barba e química, com atenção ao contorno e ao alinhamento — do pezinho ao desenho da barba.",
    imagem: "/barbeiro-henrique-vilares.jpeg",
  },
];
