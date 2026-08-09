"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Atraso da entrada em segundos, para escalonar itens de uma grade. */
  atraso?: number;
  /** Tag renderizada. Use `article`/`section` quando o conteúdo pedir. */
  as?: ElementType;
};

/**
 * Entrada suave quando o elemento aparece na tela.
 *
 * Substitui o `whileInView` do framer-motion. A animação em si é CSS (ver
 * `.revelar` em globals.css); aqui só existe um IntersectionObserver que
 * adiciona a classe uma vez e se desconecta.
 *
 * O estado inicial invisível está condicionado à classe `js` no <html>, que
 * um script inline coloca no layout. Sem JavaScript, o conteúdo aparece
 * normalmente em vez de ficar preso em opacity 0.
 */
export function Revelar({
  children,
  className = "",
  atraso = 0,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const elemento = ref.current;
    if (!elemento) return;

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return;
        elemento.classList.add("revelado");
        observador.disconnect();
      },
      { rootMargin: "0px 0px -50px 0px" }
    );

    observador.observe(elemento);
    return () => observador.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`revelar ${className}`}
      style={atraso ? { transitionDelay: `${atraso}s` } : undefined}
    >
      {children}
    </Tag>
  );
}
