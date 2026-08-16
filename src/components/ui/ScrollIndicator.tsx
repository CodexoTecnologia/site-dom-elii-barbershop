"use client";

import { useEffect, useRef } from "react";
import { Scissors } from "lucide-react";
import { negocio } from "@/data/negocio";

/** A partir de quanto da página rolada o botão mostra o texto. */
const LIMIAR_TEXTO = 0.45;

/**
 * Anel de progresso de leitura no canto, com atalho para agendar.
 *
 * Antes usava useScroll + useSpring do framer-motion. Agora o progresso é
 * escrito direto no atributo do SVG dentro de um requestAnimationFrame — o
 * React não re-renderiza nenhuma vez durante o scroll, e a biblioteca de
 * animação sai do bundle de todas as páginas (este componente está no layout,
 * então ele sozinho puxaria a lib para o site inteiro).
 *
 * DOIS COMPORTAMENTOS DE SCROLL, os dois sem estado de React:
 *
 *   1. Passada a metade da página, o botão deixa de ser só um ícone e mostra
 *      "Agendar agora". No começo da visita ninguém decidiu nada ainda; no
 *      meio, quem continua rolando já está avaliando.
 *
 *   2. Ao chegar nos créditos do rodapé, o botão sai de cena. Ele é fixo no
 *      canto e cobria a assinatura da Codexo — e ali embaixo já existe o
 *      "Agendar horário" do próprio rodapé, então nada se perde.
 *
 * Os dois escrevem em `data-*` no DOM, e o CSS reage. Trocar isso por
 * `useState` faria o React re-renderizar durante o scroll, que é exatamente o
 * que este componente foi reescrito para evitar.
 */
export function ScrollIndicator() {
  const caixaRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const circuloRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const circulo = circuloRef.current;
    const link = linkRef.current;
    const caixa = caixaRef.current;
    if (!circulo || !link || !caixa) return;

    const perimetro = 2 * Math.PI * 46;
    circulo.style.strokeDasharray = String(perimetro);
    circulo.style.strokeDashoffset = String(perimetro);

    let pendente = false;
    let expandido = false;

    const atualizar = () => {
      pendente = false;
      const rolavel =
        document.documentElement.scrollHeight - window.innerHeight;
      const progresso = rolavel > 0 ? window.scrollY / rolavel : 0;
      circulo.style.strokeDashoffset = String(
        perimetro * (1 - Math.min(Math.max(progresso, 0), 1))
      );

      // Só escreve no DOM quando o estado VIRA. Sem esta guarda seria uma
      // escrita de atributo a cada quadro de scroll.
      const passou = progresso >= LIMIAR_TEXTO;
      if (passou !== expandido) {
        expandido = passou;
        link.dataset.expandido = String(passou);
      }
    };

    const aoRolar = () => {
      if (pendente) return;
      pendente = true;
      requestAnimationFrame(atualizar);
    };

    atualizar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    window.addEventListener("resize", aoRolar, { passive: true });

    /*
     * Sair da frente dos créditos do rodapé.
     *
     * IntersectionObserver e não cálculo de posição no scroll: o navegador
     * avisa quando o elemento entra na tela, sem que nada precise medir
     * geometria a cada quadro. `rootMargin` inferior antecipa a saída, para o
     * botão já ter sumido quando a assinatura aparece de fato.
     */
    const creditos = document.getElementById("rodape-creditos");
    let observador: IntersectionObserver | undefined;

    if (creditos) {
      observador = new IntersectionObserver(
        ([entrada]) => {
          caixa.dataset.oculto = String(entrada.isIntersecting);
        },
        { rootMargin: "0px 0px 40px 0px" }
      );
      observador.observe(creditos);
    }

    return () => {
      window.removeEventListener("scroll", aoRolar);
      window.removeEventListener("resize", aoRolar);
      observador?.disconnect();
    };
  }, []);

  return (
    <div
      ref={caixaRef}
      data-oculto="false"
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex items-center justify-center transition-[opacity,transform] duration-300 data-[oculto=true]:pointer-events-none data-[oculto=true]:translate-y-4 data-[oculto=true]:opacity-0"
    >
      <a
        ref={linkRef}
        data-expandido="false"
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

        {/*
          A etiqueta aparece por hover OU por `data-expandido`. As duas
          condições escrevem as mesmas propriedades, então basta uma valer.
        */}
        <span className="absolute right-full mr-4 px-3 py-1.5 bg-white text-black text-xs font-bold tracking-widest uppercase rounded-sm whitespace-nowrap pointer-events-none opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-data-[expandido=true]:opacity-100 group-data-[expandido=true]:translate-x-0">
          Agendar agora
        </span>
      </a>
    </div>
  );
}
