"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import {
  catalogoServicos,
  precoFormatado,
  duracaoFormatada,
  type Servico,
} from "@/data/servicos";
import { negocio } from "@/data/negocio";

type Props = {
  /**
   * Quando definido, mostra apenas os N primeiros serviços em grade única
   * (uso na home) com link para /servicos. Sem o limite, renderiza o
   * catálogo inteiro agrupado por categoria (uso na página /servicos).
   */
  limite?: number;
};

function CardServico({ servico, index }: { servico: Servico; index: number }) {
  return (
    <motion.a
      id={servico.slug}
      href={negocio.links.booksy}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="relative block h-[300px] scroll-mt-32 rounded-sm overflow-hidden group cursor-pointer border border-white/5 hover:border-white/20 transition-colors bg-zinc-900/50"
    >
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {servico.imagem ? (
          <Image
            src={servico.imagem}
            alt={`${servico.titulo} na Dom Elii Barbershop, Curitiba`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-60 group-hover:opacity-40"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-zinc-800/20 to-zinc-900/80 transition-transform duration-700 group-hover:scale-105" />
        )}
      </div>

      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-colors duration-500 z-10" />

      <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
        <span className="text-zinc-400 text-xs font-bold tracking-widest uppercase mb-2">
          {servico.subtitulo}
        </span>

        <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-3 group-hover:-translate-y-1 transition-transform duration-500">
          {servico.titulo}
        </h3>

        {/* Preço e duração ficam SEMPRE visíveis: é o que o usuário procura
            e o que o Google lê como conteúdo real da página. */}
        <div className="flex items-baseline gap-3 mb-2">
          <span className="text-lg font-bold text-white">
            {precoFormatado(servico)}
          </span>
          <span className="text-xs text-zinc-400 uppercase tracking-widest">
            {duracaoFormatada(servico.duracaoMin)}
          </span>
        </div>

        <div className="overflow-hidden max-h-0 group-hover:max-h-40 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
          <p className="text-zinc-300 font-light text-sm leading-relaxed mb-4 pt-2">
            {servico.descricao}
          </p>

          <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest">
            Agendar no Booksy <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export function ServicesSection({ limite }: Props) {
  const resumido = typeof limite === "number";
  const destaques = resumido
    ? catalogoServicos.flatMap((c) => c.servicos).slice(0, limite)
    : [];

  return (
    <section
      id="servicos"
      className="secao-adiada w-full bg-[#0A0A0A] pt-24 pb-32 z-20 border-t border-white/5"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col mb-16 text-center md:text-left">
          <p className="text-xs font-bold text-zinc-400 tracking-[0.3em] uppercase mb-6 flex items-center justify-center md:justify-start gap-4">
            <span className="w-12 h-px bg-zinc-700" /> Catálogo e preços
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white uppercase leading-[1.1]">
            Nossos <br className="hidden md:block" />
            <span className="text-zinc-500">Serviços.</span>
          </h2>
          <p className="mt-6 text-zinc-400 font-light max-w-lg mx-auto md:mx-0">
            Da manutenção rápida à transformação completa, com preço aberto.
            Escolha o seu ritual e finalize o agendamento direto no Booksy.
          </p>
        </div>

        {resumido ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {destaques.map((servico, i) => (
                <CardServico key={servico.slug} servico={servico} index={i} />
              ))}
            </div>

            <div className="mt-14 flex justify-center">
              <Link
                href="/servicos"
                className="group flex items-center gap-4 text-xs font-bold text-white uppercase tracking-widest hover:text-amber-100/80 transition-colors"
              >
                Ver tabela completa de preços
                <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-amber-100/80 group-hover:text-black group-hover:border-transparent transition-all">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </>
        ) : (
          <div className="space-y-24">
            {catalogoServicos.map((bloco) => (
              <div key={bloco.slug} className="flex flex-col">
                <div className="border-b border-white/10 pb-4 mb-8">
                  <h3
                    id={bloco.slug}
                    className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight scroll-mt-32"
                  >
                    {bloco.categoria}
                  </h3>
                  <p className="text-zinc-400 font-light text-sm mt-2">
                    {bloco.resumo}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {bloco.servicos.map((servico, i) => (
                    <CardServico
                      key={servico.slug}
                      servico={servico}
                      index={i}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
