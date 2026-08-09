import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF primeiro, WebP como fallback: o otimizador serve o formato mais
    // leve que o navegador aceitar, cortando o peso das fotos da galeria.
    formats: ["image/avif", "image/webp"],
  },
  // Remove o header "x-powered-by: Next.js".
  poweredByHeader: false,
  // Uma única URL canônica por página: /servicos, nunca /servicos/.
  trailingSlash: false,
};

export default nextConfig;
