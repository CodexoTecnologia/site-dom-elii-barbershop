import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF primeiro, WebP como fallback: o otimizador serve o formato mais
    // leve que o navegador aceitar, cortando o peso das fotos da galeria.
    formats: ["image/avif", "image/webp"],
    // Allowlist exigida pelo Next 16 para o parâmetro `quality`.
    qualities: [65, 75],
  },
  /**
   * Tira os RETRATOS DE FUNCIONÁRIO do índice de imagens do Google.
   *
   * Sem isso, o Google escolhe a foto de um barbeiro como miniatura do
   * resultado de busca. Quando alguém sai da barbearia, o rosto continua
   * ilustrando a página no Google por semanas, até o próximo rastreamento —
   * e não há como forçar. O risco é maior ainda se a pessoa virar concorrente.
   *
   * O DONO É EXCEÇÃO. Elias Filho é o fundador: o rosto dele é da marca, não
   * de um vínculo que pode acabar, então continua elegível.
   *
   * A regra é FECHADA POR PADRÃO de propósito. Bloqueia todo `barbeiro-*` e
   * depois reabre só o arquivo do fundador, em vez de listar quem bloquear.
   * Assim, contratação nova entra protegida sem ninguém precisar lembrar
   * desta configuração — e o esquecimento erra para o lado seguro.
   *
   * `noindex` no ARQUIVO, e não `noimageindex` na página: a página precisa
   * continuar elegível a miniatura, só que escolhida entre a foto do fundador,
   * os cortes e o ambiente. As fotos seguem visíveis para quem visita o site —
   * o que muda é só a elegibilidade a aparecer solta na busca.
   *
   * São dois pares de regras porque a mesma foto é servida por dois caminhos:
   * o arquivo em /public e a versão redimensionada pelo otimizador. Dentro de
   * cada par, a regra do fundador vem DEPOIS: quando duas regras casam o mesmo
   * caminho, a última sobrescreve o mesmo header.
   *
   * REGRA DE NOME: retrato de equipe começa com `barbeiro-` (ver
   * src/data/equipe.ts). A exceção do fundador aponta para o arquivo exato,
   * extensão inclusive — trocar o arquivo dele não abre brecha nenhuma, só faz
   * a foto voltar a ser protegida junto com as demais.
   */
  async headers() {
    const naoIndexar = [{ key: "X-Robots-Tag", value: "noindex" }];
    // `all` é a diretiva do Google para "sem restrição". Precisa ser
    // explícita: só a ausência de header não desfaz a regra anterior.
    const indexarNormalmente = [{ key: "X-Robots-Tag", value: "all" }];
    const FUNDADOR = "barbeiro-elias-filho";

    return [
      {
        source: "/:arquivo(barbeiro-.*)",
        headers: naoIndexar,
      },
      {
        source: `/${FUNDADOR}.jpeg`,
        headers: indexarNormalmente,
      },
      {
        source: "/_next/image",
        has: [{ type: "query", key: "url", value: ".*barbeiro-.*" }],
        headers: naoIndexar,
      },
      {
        source: "/_next/image",
        has: [{ type: "query", key: "url", value: `.*${FUNDADOR}.*` }],
        headers: indexarNormalmente,
      },
    ];
  },

  // Remove o header "x-powered-by: Next.js".
  poweredByHeader: false,
  // Uma única URL canônica por página: /servicos, nunca /servicos/.
  trailingSlash: false,
};

export default nextConfig;
