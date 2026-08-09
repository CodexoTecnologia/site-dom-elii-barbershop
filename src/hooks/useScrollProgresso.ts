"use client";

import { useEffect, type RefObject } from "react";

type Opcoes = {
  /**
   * "entrada"  → 0 quando o topo do elemento encosta no topo da viewport,
   *              1 quando o fundo dele passa pelo topo. Usado no parallax.
   * "travessia" → 0 quando o elemento começa a passar pela viewport,
   *              1 quando termina.
   * "sticky"   → 0 quando o topo encosta no topo da viewport, 1 quando o
   *              conteúdo grudado se solta. É o único que percorre 0..1
   *              inteiro enquanto algo `sticky` está preso — os outros modos
   *              param em ~0,75 numa seção de 300vh, o que fazia a galeria
   *              horizontal nunca chegar ao último item.
   */
  modo?: "entrada" | "travessia" | "sticky";
};

/**
 * Progresso de scroll de um elemento, escrito direto no DOM.
 *
 * Substitui `useScroll` + `useTransform` do framer-motion. A diferença que
 * importa é que aqui nada passa pelo React: o valor vai para uma CSS custom
 * property via `style.setProperty`, dentro de um requestAnimationFrame. Zero
 * re-render por frame de scroll, e a biblioteca inteira sai do bundle.
 *
 * O consumidor usa a variável no CSS, por exemplo:
 *   transform: translateY(calc(var(--progresso) * 20%));
 */
export function useScrollProgresso(
  ref: RefObject<HTMLElement | null>,
  variavel: string,
  { modo = "entrada" }: Opcoes = {}
) {
  useEffect(() => {
    const elemento = ref.current;
    if (!elemento) return;

    let pendente = false;

    const calcular = () => {
      pendente = false;
      const caixa = elemento.getBoundingClientRect();
      const alturaJanela = window.innerHeight;

      let bruto: number;
      if (modo === "entrada") {
        bruto = -caixa.top / Math.max(caixa.height, 1);
      } else if (modo === "sticky") {
        bruto = -caixa.top / Math.max(caixa.height - alturaJanela, 1);
      } else {
        bruto =
          (alturaJanela - caixa.top) /
          Math.max(caixa.height + alturaJanela, 1);
      }

      const progresso = Math.min(Math.max(bruto, 0), 1);
      elemento.style.setProperty(variavel, String(progresso));
    };

    const aoRolar = () => {
      if (pendente) return;
      pendente = true;
      requestAnimationFrame(calcular);
    };

    calcular();
    window.addEventListener("scroll", aoRolar, { passive: true });
    window.addEventListener("resize", aoRolar, { passive: true });

    return () => {
      window.removeEventListener("scroll", aoRolar);
      window.removeEventListener("resize", aoRolar);
    };
  }, [ref, variavel, modo]);
}
