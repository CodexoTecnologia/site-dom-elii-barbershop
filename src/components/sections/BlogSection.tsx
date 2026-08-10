"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Revelar } from "@/components/ui/Revelar";
import { artigosBlog, dataLegivel } from "@/data/artigos";

/**
 * Últimos artigos na home.
 *
 * Existe por dois motivos. O primeiro é link interno: a home é a página com
 * mais autoridade do site, e daqui ela passa parte dela para os artigos, que
 * de outra forma só seriam alcançados pelo índice do blog. O segundo é
 * mostrar que existe conteúdo, o que sustenta a alegação de especialidade.
 */
export function BlogSection() {
  const ultimos = artigosBlog.slice(0, 3);
  if (ultimos.length === 0) return null;

  return (
    <section
      id="editorial"
      className="secao-adiada relative w-full bg-[#0A0A0A] py-24 md:py-32 border-t border-white/5 z-20"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs font-bold text-zinc-400 tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
              <span className="w-12 h-px bg-zinc-700" /> Editorial
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white uppercase leading-[1.1] mb-6">
              Dicas de corte <br className="hidden md:block" />
              <span className="text-zinc-500">e barba.</span>
            </h2>
            <p className="text-zinc-400 font-light leading-relaxed">
              O que a gente explica na cadeira todo dia, escrito para você ler
              antes de decidir o próximo corte.
            </p>
          </div>

          <Link
            href="/blog"
            className="group hidden md:flex items-center gap-3 text-xs font-bold text-white uppercase tracking-widest whitespace-nowrap hover:text-amber-100/80 transition-colors"
          >
            Ver todos os artigos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {ultimos.map((artigo, index) => (
            <Revelar
              as="article"
              key={artigo.slug}
              atraso={index * 0.1}
              className="group flex flex-col"
            >
              <Link href={`/blog/${artigo.slug}`} className="flex flex-col h-full">
                <div className="relative w-full aspect-video mb-5 overflow-hidden rounded-sm bg-zinc-900 border border-white/5">
                  <Image
                    src={artigo.imagem}
                    alt={artigo.imagemAlt}
                    fill
                    quality={65}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                  />
                  <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm border border-white/10">
                    {artigo.categoria}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white leading-snug mb-3 group-hover:text-zinc-400 transition-colors">
                  {artigo.titulo}
                </h3>

                <p className="text-zinc-400 font-light text-sm leading-relaxed mb-5 line-clamp-2">
                  {artigo.resumo}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto text-[11px] font-bold uppercase tracking-widest text-zinc-400">
                  <time dateTime={artigo.publicadoEm}>
                    {dataLegivel(artigo.publicadoEm)}
                  </time>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {artigo.tempoLeitura}
                  </span>
                </div>
              </Link>
            </Revelar>
          ))}
        </div>

        <div className="mt-12 flex md:hidden justify-center">
          <Link
            href="/blog"
            className="group flex items-center gap-3 text-xs font-bold text-white uppercase tracking-widest hover:text-amber-100/80 transition-colors"
          >
            Ver todos os artigos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
