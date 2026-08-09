"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Revelar } from "@/components/ui/Revelar";
import { FundoHero } from "@/components/ui/FundoHero";
import { Search, Clock } from "lucide-react";
import { artigosBlog, dataLegivel } from "@/data/artigos";

export function BlogClient() {
  const [termoPesquisa, setTermoPesquisa] = useState("");

  const artigosFiltrados = artigosBlog.filter((artigo) => {
    const textoBusca = termoPesquisa.toLowerCase();
    return (
      artigo.titulo.toLowerCase().includes(textoBusca) ||
      artigo.resumo.toLowerCase().includes(textoBusca) ||
      artigo.categoria.toLowerCase().includes(textoBusca)
    );
  });

  const isSearchMode = termoPesquisa.length > 0;

  return (
    <main className="flex min-h-screen flex-col bg-[#0A0A0A] relative overflow-hidden">
      <FundoHero
        src="/corte-2.jpeg"
        alt="Degradê masculino feito na Dom Elii Barbershop"
      />

      <section
        className="relative w-full z-10 flex flex-col justify-between pb-4 transition-[padding] duration-500 ease-in-out"
        style={{ paddingTop: isSearchMode ? "120px" : "150px" }}
      >
        <div className="container mx-auto px-6 md:px-12 flex-grow">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Encolhe ao pesquisar. grid-template-rows anima de/para altura
                automática, coisa que height:auto não permite. */}
            <div
              className={`grid transition-all duration-400 ease-in-out ${
                isSearchMode
                  ? "grid-rows-[0fr] opacity-0"
                  : "grid-rows-[1fr] opacity-100"
              }`}
            >
              <div className="overflow-hidden flex flex-col items-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white uppercase mb-6 leading-[1.1]">
                O Diário da <br className="hidden md:block" />
                <span className="text-zinc-500">Precisão.</span>
              </h1>

              <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed mb-8 max-w-xl">
                Cortes, barba e química explicados por quem faz todo dia.
              </p>
              </div>
            </div>

            <div className="relative w-full max-w-xl group z-20">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-white text-zinc-400">
                <Search className="h-5 w-5" />
              </div>
              <label htmlFor="busca-artigos" className="sr-only">
                Pesquisar artigos
              </label>
              <input
                id="busca-artigos"
                type="search"
                value={termoPesquisa}
                onChange={(e) => setTermoPesquisa(e.target.value)}
                className="w-full bg-zinc-900/30 backdrop-blur-md border border-white/10 text-white rounded-sm py-4 pl-12 pr-4 focus:outline-none focus:border-zinc-400 focus:bg-zinc-900/80 transition-all placeholder:text-zinc-400 shadow-2xl"
                placeholder="Pesquisar por cortes, barba, dicas..."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-8 pb-24 z-10 relative border-t border-white/5 bg-[#0A0A0A] min-h-[50vh]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-4 gap-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-tight">
              {termoPesquisa
                ? `Resultados para "${termoPesquisa}"`
                : "Últimas publicações"}
            </h2>
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em]">
              {artigosFiltrados.length} ARTIGO
              {artigosFiltrados.length !== 1 ? "S" : ""}
            </span>
          </div>

          {artigosFiltrados.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {artigosFiltrados.map((artigo, index) => (
                <Revelar
                  as="article"
                  key={artigo.id}
                  atraso={index * 0.1}
                  className="group flex flex-col"
                >
                  <Link href={`/blog/${artigo.slug}`} className="flex flex-col h-full">
                    <div className="relative w-full aspect-video mb-6 overflow-hidden rounded-sm bg-zinc-900 border border-white/5">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <Image
                        src={artigo.imagem}
                        alt={artigo.imagemAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                      />

                      <div className="absolute top-4 left-4 z-20">
                        <span className="bg-black/80 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm border border-white/10">
                          {artigo.categoria}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col flex-grow">
                      <h3 className="text-lg md:text-xl font-bold text-white leading-snug mb-3 group-hover:text-zinc-400 transition-colors">
                        {artigo.titulo}
                      </h3>
                      <p className="text-zinc-400 font-light text-xs md:text-sm leading-relaxed mb-6 line-clamp-3">
                        {artigo.resumo}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                      <time
                        dateTime={artigo.publicadoEm}
                        className="text-zinc-400 text-[11px] font-bold uppercase tracking-widest"
                      >
                        {dataLegivel(artigo.publicadoEm)}
                      </time>
                      <span className="flex items-center gap-1.5 text-zinc-400 text-[11px] font-bold uppercase tracking-widest">
                        <Clock className="w-3.5 h-3.5" />
                        {artigo.tempoLeitura}
                      </span>
                    </div>
                  </Link>
                </Revelar>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Search className="w-12 h-12 text-zinc-400 mb-6" />
              <p className="text-2xl font-bold text-white mb-2">
                Nenhum artigo encontrado.
              </p>
              <p className="text-zinc-400">
                Não encontramos resultados para &ldquo;{termoPesquisa}&rdquo;.
                Tente outros termos.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
