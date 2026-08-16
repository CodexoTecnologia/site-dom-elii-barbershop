"use client";

import { useRef } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Revelar } from "@/components/ui/Revelar";
import { depoimentos } from "@/data/depoimentos";
import {
  negocio,
  avaliacoesAproximadas,
  clientesEmTexto,
} from "@/data/negocio";
import { rolarUmItem } from "@/lib/carrossel";

/**
 * O "G" do Google, desenhado em SVG com as cores oficiais.
 *
 * Reproduzido em vez de baixado para não carregar um PNG externo, e usado
 * apenas para atribuir a origem das avaliações — que é o uso previsto nas
 * diretrizes de marca do Google. Não alterar as cores.
 */
function IconeGoogle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
      />
    </svg>
  );
}

function Estrelas({ tamanho = "w-4 h-4" }: { tamanho?: string }) {
  return (
    <span className="flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${tamanho} fill-amber-200 text-amber-200`} />
      ))}
    </span>
  );
}

/**
 * Avaliações de clientes, copiadas do perfil público do Google.
 *
 * Some inteira enquanto `depoimentos` estiver vazio.
 *
 * Nada daqui entra no JSON-LD: marcar avaliação de plataforma de terceiro
 * como dado estruturado próprio é o que o Google chama de self-serving
 * review e rende ação manual.
 */
export function DepoimentosSection() {
  const trilhoRef = useRef<HTMLUListElement>(null);

  if (depoimentos.length === 0) return null;

  const rolar = (direcao: 1 | -1) => rolarUmItem(trilhoRef.current, direcao);

  return (
    <section
      id="depoimentos"
      className="secao-adiada relative w-full bg-[#0A0A0A] py-24 md:py-32 border-t border-white/5 z-20"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col mb-10 max-w-2xl">
          <p className="text-xs font-bold text-zinc-400 tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
            <span className="w-12 h-px bg-zinc-700" /> Depoimentos
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white uppercase leading-[1.1] mb-6">
            Opiniões dos <br className="hidden md:block" />
            <span className="text-zinc-500">nossos clientes.</span>
          </h2>

          <p className="text-zinc-400 font-light leading-relaxed">
            Atendemos no Boa Vista desde {negocio.fundadaEm} e já passaram
            mais de {clientesEmTexto(negocio.clientesAtendidos)} clientes por
            aqui. A Dom Elii é uma das barbearias mais bem avaliadas da região,
            no Google e no Booksy.
          </p>
        </div>

        {/* Selo com a nota, no lugar do bloco branco da referência */}
        <a
          href={negocio.links.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-wrap items-center gap-4 sm:gap-6 border border-white/10 hover:border-white/25 rounded-sm p-5 sm:p-6 mb-12 transition-colors"
        >
          <Image
            src="/icon-escuro.png"
            alt="Dom Elii Barbershop"
            width={48}
            height={48}
            className="h-12 w-12 shrink-0"
          />

          <div className="flex flex-col">
            <span className="text-sm font-bold text-white uppercase tracking-tight">
              {negocio.nome}
            </span>
            <span className="mt-1 flex items-center gap-2">
              <Estrelas tamanho="w-4 h-4" />
            </span>
          </div>

          <span className="flex items-center gap-2 sm:ml-auto text-sm text-zinc-300">
            <IconeGoogle className="w-5 h-5" />
            {avaliacoesAproximadas(negocio.avaliacoes.quantidade)} avaliações
            no Google
            <ArrowUpRight className="w-4 h-4 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </span>
        </a>

        <div className="relative">
          <ul
            ref={trilhoRef}
            className="carrossel flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 -mx-6 px-6 md:mx-0 md:px-0"
          >
            {depoimentos.map((d, index) => (
              <Revelar
                as="li"
                key={`${d.nome}-${index}`}
                atraso={(index % 3) * 0.08}
                className="w-[85vw] sm:w-[46%] lg:w-[31%] flex-shrink-0 snap-start"
              >
                {/*
                  O card inteiro é o link, e não só o nome: aumenta muito a
                  área de toque no celular, onde o carrossel é usado.

                  Envolver tudo num <a> é seguro AQUI porque não há nada
                  interativo dentro do card — ao contrário dos parceiros, que
                  têm carrossel próprio e por isso continuam sem link externo.
                */}
                <a
                  href={negocio.links.avaliacoesGoogle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/card flex h-full flex-col border border-white/10 hover:border-white/25 rounded-sm p-7 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <figure className="flex h-full flex-col">
                    <Estrelas />

                    <blockquote className="mt-5 text-zinc-300 font-light leading-relaxed flex-grow">
                      {d.texto}
                    </blockquote>

                    <figcaption className="mt-6 pt-4 border-t border-white/5 flex items-center gap-3">
                      <IconeGoogle className="w-4 h-4 shrink-0" />
                      <span className="text-sm font-bold text-white">
                        {d.nome}
                      </span>
                      {/*
                        Seta sempre visível, só mais forte no hover: em celular
                        não existe estado de hover, e sem ela nada indicaria
                        que o card abre alguma coisa.
                      */}
                      <ArrowUpRight
                        aria-hidden="true"
                        className="ml-auto w-4 h-4 shrink-0 text-zinc-500 group-hover/card:text-white transition-colors"
                      />
                      <span className="sr-only">— ver no Google</span>
                    </figcaption>
                  </figure>
                </a>
              </Revelar>
            ))}

            {/*
              Último item do trilho: sem ele o carrossel termina em parede.
              Quem chega ao fim já leu tudo e está no pico do interesse —
              é o pior momento para não haver para onde ir.

              Borda tracejada e sem <blockquote> de propósito: precisa ler
              como saída, não como mais um depoimento.
            */}
            <Revelar
              as="li"
              atraso={(depoimentos.length % 3) * 0.08}
              className="w-[85vw] sm:w-[46%] lg:w-[31%] flex-shrink-0 snap-start"
            >
              <a
                href={negocio.links.avaliacoesGoogle}
                target="_blank"
                rel="noopener noreferrer"
                className="group/fim flex h-full flex-col justify-center items-start gap-4 border border-dashed border-white/15 hover:border-white/35 rounded-sm p-7 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <IconeGoogle className="w-8 h-8" />

                <span className="text-xl font-bold text-white uppercase tracking-tight leading-tight">
                  Ver todas as <br />
                  avaliações
                </span>

                <span className="text-sm text-zinc-400 font-light leading-relaxed">
                  Estas são algumas das avaliações que recebemos. As demais
                  estão no perfil da Dom Elii no Google.
                </span>

                <span className="mt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white">
                  Abrir no Google
                  <ArrowUpRight className="w-4 h-4 group-hover/fim:translate-x-0.5 group-hover/fim:-translate-y-0.5 transition-transform" />
                </span>
              </a>
            </Revelar>
          </ul>

          {depoimentos.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => rolar(-1)}
                aria-label="Ver avaliações anteriores"
                className="absolute -left-1 md:-left-5 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/70 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => rolar(1)}
                aria-label="Ver próximas avaliações"
                className="absolute -right-1 md:-right-5 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/70 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
