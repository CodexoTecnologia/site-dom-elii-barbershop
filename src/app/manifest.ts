import type { MetadataRoute } from "next";
import { negocio } from "@/data/negocio";

/**
 * Manifesto do site. Define o ícone e as cores quando alguém adiciona a
 * página à tela inicial do celular — sem ele, o Android usa uma captura da
 * tela como ícone.
 *
 * Os PNGs saem de `node scripts/gera-icones.mjs`.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${negocio.nome} — Barbearia em Curitiba`,
    short_name: "Dom Elii",
    description: negocio.descricaoCurta,
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0A",
    theme_color: "#0A0A0A",
    lang: "pt-BR",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
