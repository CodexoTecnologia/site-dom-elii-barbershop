"use client";

import { useEffect, useRef } from "react";
import { Scissors } from "lucide-react";
import { negocio } from "@/data/negocio";

/**
 * Anel de progresso de leitura no canto, com atalho para agendar.
 *
 * Antes usava useScroll + useSpring do framer-motion. Agora o progresso é
 * escrito direto no atributo do SVG dentro de um requestAnimationFrame — o
 * React não re-renderiza nenhuma vez durante o scroll, e a biblioteca de
 * animação sai do bundle de todas as páginas (este componente está no layout,
 * então ele sozinho puxaria a lib para o site inteiro).
 */
export function ScrollIndicator() {
  const circuloRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const circulo = circuloRef.current;
    if (!circulo) return;

    const perimetro = 2 * Math.PI * 46;
    circulo.style.strokeDasharray = String(perimetro);
    circulo.style.strokeDashoffset = String(perimetro);

    let pendente = false;

    const atualizar = () => {
      pendente = false;
      const rolavel =
        document.documentElement.scrollHeight - window.innerHeight;
      const progresso = rolavel > 0 ? window.scrollY / rolavel : 0;
      circulo.style.strokeDashoffset = String(
        perimetro * (1 - Math.min(Math.max(progresso, 0), 1))
      );
    };

    const aoRolar = () => {
      if (pendente) return;
      pendente = true;
      requestAnimationFrame(atualizar);
    };

    atualizar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    window.addEventListener("resize", aoRolar, { passive: true });

    return () => {
      window.removeEventListener("scroll", aoRolar);
      window.removeEventListener("resize", aoRolar);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex items-center justify-center">
      <a
        href={negocio.links.booksy}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-black/40 backdrop-blur-md border border-white/5 shadow-2xl hover:bg-white transition-colors duration-500"
        aria-label="Agendar horário"
      >
        <svg
          className="absolute inset-0 w-full h-full transform -rotate-90 pointer-events-none"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <circle
            cx="50"
            cy="50"
            r="46"
            className="stroke-zinc-800/50"
            strokeWidth="2"
            fill="none"
          />
          <circle
            ref={circuloRef}
            cx="50"
            cy="50"
            r="46"
            className="stroke-white group-hover:stroke-black transition-colors duration-500"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        <Scissors
          className="text-white group-hover:text-black transition-colors duration-500 z-10"
          size={20}
        />

        <span className="absolute right-full mr-4 px-3 py-1.5 bg-white text-black text-xs font-bold tracking-widest uppercase rounded-sm opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
          Agendar horário
        </span>
      </a>
    </div>
  );
}
