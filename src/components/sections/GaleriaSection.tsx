"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { VideoFundo } from "@/components/ui/VideoFundo";
import { Revelar } from "@/components/ui/Revelar";
import { rolarUmItem } from "@/lib/carrossel";

/**
 * GALERIA DE TRABALHOS — carrossel horizontal arrastável.
 *
 * Antes isto era scroll-jacking: a seção tinha 300vh, o conteúdo ficava
 * `sticky` e a rolagem vertical era convertida em `translateX` do trilho.
 * Custava duas telas e meia de scroll em que a PÁGINA NÃO ANDAVA, sem nada
 * na tela avisando que aquilo era intencional — cliente real relatou que
 * achou que o site tinha travado. No celular era pior: arrastar o dedo para
 * o lado não fazia nada, porque o trilho não rolava, só era transformado.
 *
 * Agora a página rola normalmente e a galeria rola no eixo dela, com scroll
 * nativo (`overflow-x-auto` + `scroll-snap`). Nativo importa: funciona com
 * dedo, trackpad, Shift+roda, teclado e leitor de tela sem nenhum JavaScript
 * no caminho do movimento. O JS daqui só observa a posição para desenhar as
 * pistas visuais; se ele falhar, o carrossel continua funcionando.
 *
 * As pistas são três, e nenhuma depende de `hover` — no celular hover não
 * existe, e é lá que o problema aconteceu:
 *   1. o próximo item fica sempre cortado na borda (a imagem cortada é a
 *      dica mais forte de "tem mais coisa aqui");
 *   2. barra de avanço abaixo do trilho, que diz onde se está e quanto falta;
 *   3. setas nas laterais do trilho, em qualquer tela, desabilitadas nas
 *      pontas.
 */

type Item = {
  tipo: "imagem" | "video";
  src: string;
  poster?: string;
  alt: string;
  /** Item largo: é o destaque da faixa, um por galeria. */
  destaque?: boolean;
  frase?: string;
};

const itens: Item[] = [
  {
    tipo: "imagem",
    src: "/clientes/corte-1.jpeg",
    alt: "Corte masculino feito na Dom Elii Barbershop, em Curitiba",
  },
  {
    tipo: "video",
    src: "/corte-1-17seg.mp4",
    poster: "/poster-ritual.webp",
    alt: "Barbeiro da Dom Elii finalizando um corte masculino",
    destaque: true,
    frase: "Mais que um corte.",
  },
  {
    tipo: "imagem",
    src: "/clientes/barba-1.jpeg",
    alt: "Barboterapia com toalha no vapor na Dom Elii Barbershop",
  },
  {
    tipo: "imagem",
    src: "/clientes/corte-2.jpeg",
    alt: "Degradê masculino executado na Dom Elii Barbershop, em Curitiba",
  },
];

export function GaleriaSection() {
  const trilhoRef = useRef<HTMLUListElement>(null);
  const marcadorRef = useRef<HTMLSpanElement>(null);

  // `useState` só para o que muda de raro em raro (começo/fim do trilho e o
  // sumiço da dica). A posição contínua vai direto para uma CSS custom
  // property, como no resto do site: zero re-render por frame de rolagem.
  const [noComeco, setNoComeco] = useState(true);
  const [noFim, setNoFim] = useState(false);

  const medir = useCallback(() => {
    const trilho = trilhoRef.current;
    const marcador = marcadorRef.current;
    if (!trilho) return;

    const percorrivel = trilho.scrollWidth - trilho.clientWidth;
    const avanco = Math.min(
      Math.max(percorrivel > 0 ? trilho.scrollLeft / percorrivel : 0, 0),
      1
    );

    if (marcador) {
      // Quanto do trilho cabe na tela vira a LARGURA do marcador, como numa
      // barra de rolagem de verdade: o tamanho dele já diz quanto conteúdo
      // existe, antes mesmo de a pessoa arrastar.
      const trecho =
        Math.min(trilho.clientWidth / Math.max(trilho.scrollWidth, 1), 1) * 100;

      // Largura e posição direto no elemento, em porcentagem, em vez de
      // custom properties lidas por um `calc` no CSS: é uma peça a menos
      // para quebrar, e o valor não depende de a folha de estilo ter
      // carregado a regra certa.
      marcador.style.width = `${trecho}%`;
      marcador.style.left = `${avanco * (100 - trecho)}%`;
    }

    // Tolerância de 2px: zoom do navegador e arredondamento de subpixel fazem
    // o scrollLeft parar em 0.4 ou em (max - 0.6) e as setas nunca desligavam.
    setNoComeco(trilho.scrollLeft <= 2);
    setNoFim(trilho.scrollLeft >= percorrivel - 2);
  }, []);

  useEffect(() => {
    const trilho = trilhoRef.current;
    if (!trilho) return;

    let pendente = false;
    const aoRolar = () => {
      if (pendente) return;
      pendente = true;
      requestAnimationFrame(() => {
        pendente = false;
        medir();
      });
    };

    medir();
    trilho.addEventListener("scroll", aoRolar, { passive: true });

    // O trilho muda de largura ao girar o aparelho e ao mudar o breakpoint;
    // sem remedir, a barra de avanço fica com a escala da tela anterior.
    const observador = new ResizeObserver(aoRolar);
    observador.observe(trilho);

    return () => {
      trilho.removeEventListener("scroll", aoRolar);
      observador.disconnect();
    };
  }, [medir]);

  const rolar = (direcao: 1 | -1) => {
    rolarUmItem(trilhoRef.current, direcao);
  };

  return (
    <section
      className="relative w-full bg-[#0A0A0A] py-24 md:py-32 border-t border-white/5 z-20"
      aria-labelledby="titulo-galeria"
    >
      <div className="container mx-auto px-6 md:px-12">
        <Revelar className="flex flex-col mb-10 md:mb-12 max-w-2xl">
          <p className="text-xs font-bold text-zinc-400 tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
            <span className="w-12 h-px bg-zinc-700" /> Galeria
          </p>

          <h2
            id="titulo-galeria"
            className="text-4xl md:text-5xl font-bold tracking-tighter text-white uppercase leading-[1.1] mb-6"
          >
            Feito aqui, <br className="hidden md:block" />
            <span className="text-zinc-500">na cadeira.</span>
          </h2>

          <p className="text-zinc-400 font-light leading-relaxed">
            Cortes, barba e acabamento de clientes da Dom Elii. Arraste para o
            lado para ver todos.
          </p>
        </Revelar>
      </div>

      {/*
        O trilho sangra para fora do container de propósito: a faixa de fotos
        é o elemento de impacto da página e precisa ser mais larga que o texto.
        O `scroll-px` repete o respiro lateral, senão o item que encaixa no
        snap cola na borda da tela.
      */}
      <div className="relative">
        <ul
          ref={trilhoRef}
          tabIndex={0}
          role="group"
          aria-label="Galeria de trabalhos da Dom Elii Barbershop. Role para o lado para ver os demais."
          className="carrossel trilho flex gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory scroll-px-6 md:scroll-px-12 px-6 md:px-12 pb-1"
        >
          {itens.map((item) => (
            <li
              key={item.src}
              className={`relative flex-shrink-0 snap-start overflow-hidden border border-white/10 bg-zinc-900 h-[62vh] max-h-[520px] md:h-[500px] md:max-h-none ${
                item.destaque
                  ? "w-[84vw] md:w-[620px]"
                  : "w-[72vw] md:w-[380px]"
              }`}
            >
              {item.tipo === "video" ? (
                <>
                  <div className="absolute inset-0 bg-black/40 z-10" />
                  <VideoFundo
                    src={item.src}
                    poster={item.poster!}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <p className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white pointer-events-none">
                    {item.frase}
                  </p>
                </>
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  draggable={false}
                  fill
                  quality={65}
                  sizes="(max-width: 768px) 84vw, 620px"
                  className="object-cover"
                />
              )}
            </li>
          ))}
        </ul>

        {/*
          Setas nas laterais do trilho, no mesmo padrão dos Depoimentos: o
          controle fica onde o movimento acontece, em vez de num rodapé
          separado que a pessoa precisa procurar. Ficam desabilitadas nas
          pontas, então a seta nunca promete um movimento que não existe.
        */}
        <button
          type="button"
          onClick={() => rolar(-1)}
          disabled={noComeco}
          aria-label="Ver trabalhos anteriores"
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/70 backdrop-blur-sm text-white transition-opacity hover:bg-white hover:text-black disabled:pointer-events-none disabled:opacity-0"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => rolar(1)}
          disabled={noFim}
          aria-label="Ver próximos trabalhos"
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/70 backdrop-blur-sm text-white transition-opacity hover:bg-white hover:text-black disabled:pointer-events-none disabled:opacity-0"
        >
          <ChevronRight className="h-4 w-4" />
        </button>

      </div>

      {/*
        Barra de avanço alinhada com o texto do cabeçalho. Fora das fotos, e
        não por cima delas: fica legível sobre qualquer imagem e não cobre o
        trabalho que a seção existe para mostrar.

        Altura de 6px e cantos arredondados, não 1px: com um fio de um pixel
        o marcador e o trilho ficavam indistinguíveis, e o controle lia como
        divisória decorativa em vez de barra de avanço.
      */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="mt-8 flex items-center gap-6">
          <div
            aria-hidden="true"
            className="relative h-1.5 flex-grow overflow-hidden rounded-full bg-white/10"
          >
            <span
              ref={marcadorRef}
              className="galeria-marcador absolute inset-y-0 left-0 rounded-full bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
