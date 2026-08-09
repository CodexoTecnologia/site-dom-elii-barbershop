"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Revelar } from "@/components/ui/Revelar";
import {
  secaoAtiva,
  parceirosAtivos,
  type Parceiro,
  type FotoParceiro,
} from "@/data/parceiros";

/**
 * Carrossel de fotos de um parceiro.
 *
 * O scroll é nativo com snap (nada de biblioteca); os botões só empurram o
 * `scrollLeft`. Ficam sempre visíveis, e não apenas no hover, porque no
 * celular não existe hover — sem eles nada indica que há mais fotos ao lado.
 */
function CarrosselFotos({
  fotos,
  nome,
}: {
  fotos: FotoParceiro[];
  nome: string;
}) {
  const trilhoRef = useRef<HTMLUListElement>(null);

  const rolar = (direcao: 1 | -1) => {
    const trilho = trilhoRef.current;
    if (!trilho) return;
    // Rola ~80% da largura visível: sobra uma foto de referência na tela.
    trilho.scrollBy({
      left: direcao * trilho.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  const temMaisDeUma = fotos.length > 1;

  return (
    <div className="relative mb-6">
      <ul
        ref={trilhoRef}
        className="carrossel flex gap-3 overflow-x-auto snap-x snap-mandatory"
      >
        {fotos.map((foto) => (
          <li
            key={foto.src}
            className="relative h-44 w-32 sm:h-52 sm:w-40 flex-shrink-0 snap-start overflow-hidden rounded-md border border-white/15 bg-zinc-900"
          >
            <Image
              src={foto.src}
              alt={foto.alt}
              fill
              quality={65}
              sizes="(max-width: 640px) 128px, 160px"
              className="object-cover"
            />
          </li>
        ))}
      </ul>

      {temMaisDeUma && (
        <>
          <button
            type="button"
            onClick={() => rolar(-1)}
            aria-label={`Ver foto anterior de ${nome}`}
            className="absolute left-1 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/70 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => rolar(1)}
            aria-label={`Ver próxima foto de ${nome}`}
            className="absolute right-1 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/70 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </>
      )}
    </div>
  );
}

/**
 * Card de um parceiro.
 *
 * O card é uma <article>, não um <a> gigante: com o carrossel dentro, um link
 * envolvendo tudo tornaria os botões de navegação HTML inválido (controle
 * dentro de link) e o arraste das fotos poderia disparar a navegação. O link
 * externo vive no título.
 */
function CardParceiro({ parceiro }: { parceiro: Parceiro }) {
  return (
    <article className="group flex h-full flex-col border border-white/10 rounded-sm p-6 sm:p-8 transition-colors hover:border-white/25">
      {parceiro.fotos && parceiro.fotos.length > 0 && (
        <CarrosselFotos fotos={parceiro.fotos} nome={parceiro.nome} />
      )}

      <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-3">
        {parceiro.categoria}
      </span>

      <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-4">
        {parceiro.url ? (
          <a
            href={parceiro.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-zinc-300 transition-colors"
          >
            {parceiro.nome}
            <ArrowUpRight className="w-4 h-4 text-zinc-400" />
          </a>
        ) : (
          parceiro.nome
        )}
      </h3>

      <p className="text-zinc-400 font-light text-sm leading-relaxed">
        {parceiro.descricao}
      </p>
    </article>
  );
}

/**
 * Produtos e marcas vendidos dentro da barbearia.
 *
 * Cada card traz as fotos do próprio parceiro: desligar a parceria em
 * src/data/parceiros.ts leva as fotos junto, sem deixar imagem órfã.
 *
 * Fica no fim da página de propósito — é conteúdo de apoio, não de conversão.
 * As fotos não têm `priority` e a seção usa `content-visibility`, então nada
 * daqui é baixado ou sequer calculado antes de o usuário rolar até aqui.
 */
export function ParceirosSection() {
  if (!secaoAtiva || parceirosAtivos.length === 0) return null;

  return (
    <section
      id="produtos"
      className="secao-adiada relative w-full bg-[#050505] py-24 md:py-32 border-t border-white/5 z-20"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col mb-14 max-w-2xl">
          <p className="text-xs font-bold text-zinc-400 tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
            <span className="w-12 h-px bg-zinc-700" /> Na loja
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white uppercase leading-[1.1] mb-6">
            Mais do que <br className="hidden md:block" />
            <span className="text-zinc-500">uma barbearia.</span>
          </h2>

          <p className="text-zinc-400 font-light leading-relaxed">
            Pomada, cera e roupa à venda na loja, e geladeira com bebida gelada
            para acompanhar o corte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {parceirosAtivos.map((parceiro, index) => (
            <Revelar
              key={parceiro.slug}
              atraso={(index % 2) * 0.1}
              className="h-full"
            >
              <CardParceiro parceiro={parceiro} />
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  );
}
