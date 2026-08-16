/**
 * FONTE ÚNICA DA VERDADE (SSOT) do negócio.
 *
 * Tudo que aparece no site (footer, schema JSON-LD, metadata, CTAs, contato)
 * lê daqui. Para atualizar telefone, endereço, horário ou links, edite SOMENTE
 * este arquivo — nenhuma página precisa ser tocada.
 */

export const SITE_URL = "https://domelii.com.br";

export const negocio = {
  nome: "Dom Elii Barbershop",
  nomeLegal: "Dom Elii Barbershop",
  slogan: "Corte e barba que mudam como você se vê",
  descricaoCurta:
    "Barbearia no Boa Vista, em Curitiba. Corte, barba, sobrancelha e química masculina, com hora marcada ou por ordem de chegada.",
  descricaoLonga:
    "Barbearia em Curitiba, no bairro Boa Vista, atendendo clientes de toda a cidade. Corte de cabelo, degradê, barba com toalha no vapor, platinado, luzes, sobrancelha na navalha e freestyle. Atende com hora marcada e também por ordem de chegada, quando há horário livre.",

  endereco: {
    rua: "Rua Lodovico Geronazzo",
    numero: "539",
    bairro: "Boa Vista",
    cidade: "Curitiba",
    estado: "PR",
    estadoNome: "Paraná",
    cep: "82560-040",
    pais: "BR",
  },

  /**
   * Coordenadas do ponto, lidas no Google Maps sobre a Rua Lodovico Geronazzo.
   * Alimentam o campo `geo` do schema LocalBusiness.
   */
  geo: { latitude: -25.38925, longitude: -49.242515 } as {
    latitude: number;
    longitude: number;
  } | null,

  telefone: "(41) 99538-4975",
  telefoneE164: "+5541995384975",
  whatsapp: "5541995384975",

  /**
   * Bairros de captação para SEO local.
   *
   * ORDEM = DISTÂNCIA, do mais perto para o mais longe. O primeiro é onde a
   * barbearia fica; os seguintes são a vizinhança que aparece no mapa em
   * volta do ponto. O rodapé cita só os primeiros da lista, então a ordem
   * decide o que é mostrado — não é ordenação decorativa.
   *
   * Só entra bairro de onde alguém realmente atravessaria para cortar
   * cabelo. Lista inchada com bairro distante não engana o Google e ainda
   * enfraquece a associação com os que importam.
   */
  areasAtendidas: [
    "Boa Vista",
    "Bacacheri",
    "Santa Cândida",
    "Barreirinha",
    "Atuba",
    "Bairro Alto",
    "Cabral",
    "Ahú",
    "Juvevê",
  ],

  /**
   * Reputação pública nas duas plataformas. Ver o AVISO em src/lib/schema.ts:
   * estes números aparecem na tela com link para a fonte, mas NÃO entram no
   * JSON-LD — marcar avaliação de terceiro como dado próprio rende ação
   * manual do Google.
   *
   * Atualize junto com os depoimentos, em src/data/depoimentos.ts.
   */
  avaliacoes: {
    nota: 4.9,
    quantidade: 77,
    fonte: "Google",
    booksy: { nota: 5.0, quantidade: 83 },
  },

  /** Faixa de preço derivada do catálogo (ver src/data/servicos.ts). */
  faixaPreco: "R$$",
  moeda: "BRL",
  formasPagamento: ["Dinheiro", "Pix", "Cartão de Crédito", "Cartão de Débito"],

  links: {
    booksy:
      "https://booksy.com/pt-br/311640_dom-elii-barbershop_barbearias_583853_curitiba",
    booksyApp:
      "https://booksy.com/pt-br/dl/show-business/311640?utm_medium=c2c_referral",
    googleMaps: "https://share.google/ugawhcTt28ZvybTMO",
    /**
     * Abre o Google Maps já traçando a rota da localização atual do usuário
     * até a barbearia. Formato oficial da Maps URLs API (`dir/?api=1`), que
     * funciona em navegador, Android e iOS — diferente do link copiado da
     * barra de endereço, que carrega estado de sessão e pode quebrar.
     */
    rota:
      "https://www.google.com/maps/dir/?api=1&destination=" +
      encodeURIComponent(
        "Dom Elii Barbershop Barbearia, Rua Lodovico Geronazzo, 539 - Boa Vista, Curitiba - PR, 82560-040"
      ),
    /**
     * Abre a lista completa de avaliações do Google, já no painel lateral.
     *
     * O `#lrd` é o que salta direto para as avaliações em vez de parar na
     * ficha do negócio; os dois hexadecimais identificam o local (o segundo é
     * o CID da Dom Elii) e as vírgulas finais são posições de filtro vazias,
     * exigidas pelo formato.
     *
     * A URL copiada da barra do Chrome vinha com `oq`, `gs_lcrp`, `sourceid`
     * e `ie` — estado da SESSÃO de quem copiou, não do negócio. Isso não foi
     * mantido: parâmetro de sessão alheia é ruído que pode mudar o resultado
     * para o visitante.
     */
    avaliacoesGoogle:
      "https://www.google.com/search?q=Dom+Elii+Barbershop+Barbearia" +
      "#lrd=0x94dce753e44b37b9:0x3ebb4bd569270b41,1,,,,",
    instagram: "https://instagram.com/dom_elii_barbershop",
    whatsapp: "https://wa.me/5541995384975",
  },

  instagramHandle: "@dom_elii_barbershop",

  /** Ano de fundação, usado nos textos. Data confirmada com o Elias. */
  fundadaEm: 2023,

  /** Data completa (ISO), usada no `foundingDate` do schema. */
  fundadaEmData: "2023-02-23",

  /**
   * Marcos que só crescem, nunca caem.
   *
   * Nota e contagem exata de avaliações não aparecem no site de propósito:
   * uma avaliação ruim derruba a nota e o texto vira mentira sem ninguém
   * perceber. Já "desde 2023" e "mais de mil clientes" continuam verdadeiros
   * para sempre — e ficam mais fortes com o tempo.
   *
   * CONFIRMAR COM O ELIAS: o número de clientes é uma estimativa conservadora
   * (3 barbeiros desde 2023). Se o Booksy tiver o total real, use o número
   * redondo imediatamente abaixo dele.
   */
  clientesAtendidos: 1000,

  /** URL do mapa incorporado (iframe). Gerada em "Compartilhar > Incorporar". */
  mapaIncorporado:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57685.879767093036!2d-49.26431504969383!3d-25.358997504586874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce753e44b37b9%3A0x3ebb4bd569270b41!2sDom%20Elii%20Barbershop%20Barbearia!5e0!3m2!1spt-BR!2sbr!4v1786308439478!5m2!1spt-BR!2sbr",

  /**
   * Horários. `null` = fechado.
   * `dia` usa o padrão schema.org (inglês) exigido pelo JSON-LD.
   */
  horarios: [
    { dia: "Monday", rotulo: "Segunda-feira", abre: "13:00", fecha: "20:00" },
    { dia: "Tuesday", rotulo: "Terça-feira", abre: "09:00", fecha: "20:00" },
    { dia: "Wednesday", rotulo: "Quarta-feira", abre: "09:00", fecha: "20:00" },
    { dia: "Thursday", rotulo: "Quinta-feira", abre: "09:00", fecha: "20:00" },
    { dia: "Friday", rotulo: "Sexta-feira", abre: "09:00", fecha: "20:00" },
    { dia: "Saturday", rotulo: "Sábado", abre: "09:00", fecha: "19:00" },
    { dia: "Sunday", rotulo: "Domingo", abre: null, fecha: null },
  ] as const,
} as const;

/**
 * Arredonda a contagem de avaliações para baixo, na dezena: 77 vira "+70".
 *
 * O número exato sobe quase toda semana e o site ficaria desatualizado a cada
 * cliente novo. A forma aproximada continua verdadeira por meses e é como as
 * páginas do setor exibem.
 */
export function clientesEmTexto(quantidade: number): string {
  const milhares = Math.floor(quantidade / 1000);
  return milhares <= 1 ? "mil" : `${milhares} mil`;
}

export function avaliacoesAproximadas(quantidade: number): string {
  return `+${Math.floor(quantidade / 10) * 10}`;
}

export const enderecoLinhaUnica = `${negocio.endereco.rua}, ${negocio.endereco.numero} - ${negocio.endereco.bairro}, ${negocio.endereco.cidade} - ${negocio.endereco.estado}, ${negocio.endereco.cep}`;

/**
 * Junta itens como se escreve à mão: "Bacacheri, Cabral e Ahú".
 *
 * Serve para citar bairros em texto corrido. Lista separada só por vírgula
 * lê como enumeração de palavra-chave — o oposto do que se quer num texto
 * que o Google avalia.
 */
export function listaEmTexto(itens: readonly string[]): string {
  if (itens.length <= 1) return itens[0] ?? "";
  return `${itens.slice(0, -1).join(", ")} e ${itens[itens.length - 1]}`;
}

/** Ex.: "Segunda-feira: 13:00 às 20:00" | "Domingo: Fechado" */
export function horarioLegivel(h: (typeof negocio.horarios)[number]): string {
  return h.abre && h.fecha
    ? `${h.abre} às ${h.fecha}`
    : "Fechado";
}
