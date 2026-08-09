"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  /** Imagem exibida antes do vídeo carregar. Some sozinha quando ele toca. */
  poster: string;
  className?: string;
  /**
   * Largura mínima de viewport para o vídeo ser baixado, em px.
   * Abaixo disso fica só o poster. Um fundo decorativo de mais de 1 MB não
   * se paga no celular, ainda mais coberto por overlay escuro.
   */
  larguraMinima?: number;
};

type ConexaoRede = { saveData?: boolean; effectiveType?: string };

/**
 * Vídeo decorativo de fundo que só baixa quando realmente precisa.
 *
 * `preload="none"` sozinho não segura nada: com `autoplay`, o navegador baixa
 * o arquivo inteiro junto com o resto da página. Dois vídeos de fundo custavam
 * 2,7 MB na carga inicial e empurravam o LCP para 5,2s.
 *
 * Aqui o elemento nasce sem `src`. Ele só é preenchido quando:
 *   1. o vídeo entra (ou está perto de entrar) na viewport, e
 *   2. a página já terminou de carregar o essencial.
 *
 * Não carrega nada quando o usuário pediu movimento reduzido, ativou economia
 * de dados ou está em conexão 2G. Nesses casos fica só o poster, que é o
 * comportamento correto — não uma degradação.
 */
export function VideoFundo({
  src,
  poster,
  className,
  larguraMinima = 0,
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [fonte, setFonte] = useState<string>();

  useEffect(() => {
    const elemento = ref.current;
    if (!elemento) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth < larguraMinima) return;

    const conexao = (navigator as Navigator & { connection?: ConexaoRede })
      .connection;
    if (conexao?.saveData) return;
    if (conexao?.effectiveType && /(^|-)2g$/.test(conexao.effectiveType)) return;

    const carregar = () => setFonte(src);

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return;
        observador.disconnect();

        if (document.readyState === "complete") carregar();
        else window.addEventListener("load", carregar, { once: true });
      },
      // Começa um pouco antes de aparecer, para não entrar picotado.
      { rootMargin: "300px" }
    );

    observador.observe(elemento);
    return () => {
      observador.disconnect();
      window.removeEventListener("load", carregar);
    };
  }, [src, larguraMinima]);

  useEffect(() => {
    if (!fonte) return;
    // play() rejeita se o navegador bloquear o autoplay; não é erro nosso.
    ref.current?.play().catch(() => {});
  }, [fonte]);

  return (
    <video
      ref={ref}
      src={fonte}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      className={className}
    />
  );
}
