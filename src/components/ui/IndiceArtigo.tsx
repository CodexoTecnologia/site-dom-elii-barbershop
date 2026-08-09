"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export type ItemIndice = {
  id: string;
  texto: string;
  nivel: 2 | 3;
  /** "1", "2", "2.1"… calculado na montagem da lista. */
  numero: string;
};

/**
 * Índice do artigo, com destaque da seção que está sendo lida.
 *
 * O destaque usa IntersectionObserver com uma faixa estreita no topo da tela
 * (`rootMargin`), então a seção só acende quando realmente chega à área de
 * leitura — e não quando aparece no rodapé da viewport.
 */
function useSecaoAtiva(ids: string[]) {
  const [ativo, setAtivo] = useState<string | null>(null);
  const visiveis = useRef<Set<string>>(new Set());

  useEffect(() => {
    const alvos = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (alvos.length === 0) return;

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          const id = entrada.target.id;
          if (entrada.isIntersecting) visiveis.current.add(id);
          else visiveis.current.delete(id);
        }
        // Entre as seções visíveis, a que estiver mais acima manda.
        const primeira = ids.find((id) => visiveis.current.has(id));
        if (primeira) setAtivo(primeira);
      },
      { rootMargin: "-100px 0px -70% 0px" }
    );

    alvos.forEach((alvo) => observador.observe(alvo));
    return () => observador.disconnect();
  }, [ids]);

  return ativo;
}

function Lista({
  itens,
  ativo,
  aoNavegar,
}: {
  itens: ItemIndice[];
  ativo: string | null;
  aoNavegar?: () => void;
}) {
  return (
    <ol className="flex flex-col gap-1">
      {itens.map((item) => {
        const estaAtivo = item.id === ativo;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={aoNavegar}
              className={`flex gap-3 rounded-sm py-2 pr-2 text-sm leading-snug transition-colors ${
                item.nivel === 3 ? "pl-5" : "pl-2"
              } ${
                estaAtivo
                  ? "text-white bg-white/[0.06]"
                  : "text-zinc-400 hover:text-white"
              }`}
              aria-current={estaAtivo ? "true" : undefined}
            >
              <span
                className={`shrink-0 font-bold tabular-nums ${
                  estaAtivo ? "text-amber-100/80" : "text-zinc-500"
                }`}
              >
                {item.numero}
              </span>
              <span className={item.nivel === 3 ? "font-light" : "font-medium"}>
                {item.texto}
              </span>
            </a>
          </li>
        );
      })}
    </ol>
  );
}

export function IndiceArtigo({ itens }: { itens: ItemIndice[] }) {
  const [abertoNoMobile, setAbertoNoMobile] = useState(false);
  const ativo = useSecaoAtiva(itens.map((i) => i.id));

  if (itens.length < 3) return null;

  return (
    <>
      {/* Celular: recolhido, para não empurrar o texto para baixo. */}
      <div className="lg:hidden border border-white/10 rounded-sm mb-10">
        <button
          type="button"
          onClick={() => setAbertoNoMobile((v) => !v)}
          aria-expanded={abertoNoMobile}
          aria-controls="indice-mobile"
          className="w-full flex items-center justify-between px-5 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white"
        >
          Conteúdo do post
          <ChevronDown
            className={`w-4 h-4 text-zinc-400 transition-transform ${
              abertoNoMobile ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          id="indice-mobile"
          className={`grid transition-all duration-300 ease-in-out ${
            abertoNoMobile ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-3 pb-4">
              <Lista
                itens={itens}
                ativo={ativo}
                aoNavegar={() => setAbertoNoMobile(false)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: fixo na lateral enquanto o artigo rola. */}
      <nav
        aria-label="Conteúdo do post"
        className="hidden lg:block sticky top-32 max-h-[calc(100vh-10rem)] overflow-y-auto carrossel"
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-5 px-2">
          Conteúdo do post
        </p>
        <Lista itens={itens} ativo={ativo} />
      </nav>
    </>
  );
}
