"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServicesSection } from "@/components/sections/ServicesSection";
import {
  catalogoServicos,
  precoFormatado,
  duracaoFormatada,
  precoMinimo,
  precoMaximo,
} from "@/data/servicos";
import { negocio } from "@/data/negocio";

const formatarBRL = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export function ServicosClient() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0A0A0A]">
      {/* HERO */}
      <section className="relative w-full pt-36 md:pt-44 pb-16 border-b border-white/5">
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-[#0A0A0A] to-[#0A0A0A]" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="text-xs font-bold text-zinc-400 tracking-[0.3em] uppercase mb-6">
              Tabela de preços · Boa Vista, Curitiba
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white uppercase leading-[1.05] mb-8">
              Serviços e <br />
              <span className="text-zinc-500">Preços.</span>
            </h1>

            <p className="text-zinc-400 text-lg font-light leading-relaxed mb-8">
              Preços abertos, sem surpresa na hora de pagar. São{" "}
              {catalogoServicos.reduce((t, c) => t + c.servicos.length, 0)}{" "}
              serviços entre {formatarBRL(precoMinimo)} e{" "}
              {formatarBRL(precoMaximo)}, de corte e barba a platinado, luzes e
              limpeza de pele. Todos podem ser agendados pelo Booksy.
            </p>

            <div className="flex flex-wrap gap-3">
              {catalogoServicos.map((bloco) => (
                <a
                  key={bloco.slug}
                  href={`#${bloco.slug}`}
                  className="text-xs font-bold uppercase tracking-widest text-zinc-400 border border-white/10 px-4 py-2 rounded-sm hover:text-white hover:border-white/30 transition-colors"
                >
                  {bloco.categoria}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TABELA — versão em texto puro, indexável e escaneável */}
      <section className="w-full py-20 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-xs font-bold text-zinc-400 tracking-[0.3em] uppercase mb-10">
            Tabela completa
          </h2>

          <div className="flex flex-col gap-14">
            {catalogoServicos.map((bloco) => (
              <div key={bloco.slug}>
                <h3 className="text-lg font-bold text-white uppercase tracking-tight border-b border-white/10 pb-3 mb-2">
                  {bloco.categoria}
                </h3>
                <ul className="flex flex-col">
                  {bloco.servicos.map((servico) => (
                    <li
                      key={servico.slug}
                      className="flex items-baseline justify-between gap-6 border-b border-white/5 py-4"
                    >
                      <div className="flex flex-col">
                        <span className="text-white font-medium">
                          {servico.titulo}
                        </span>
                        <span className="text-zinc-400 font-light text-sm">
                          {servico.subtitulo} ·{" "}
                          {duracaoFormatada(servico.duracaoMin)}
                        </span>
                      </div>
                      <span className="text-zinc-200 font-bold whitespace-nowrap text-sm md:text-base">
                        {precoFormatado(servico)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-10 text-xs text-zinc-400 font-light leading-relaxed max-w-2xl">
            Valores marcados com &ldquo;a partir de&rdquo; variam conforme
            comprimento do cabelo, histórico químico e complexidade do desenho.
            A confirmação sai no orçamento antes de começar. Preços sincronizados
            com o Booksy — em caso de divergência, vale o valor exibido lá.
          </p>
        </div>
      </section>

      {/* CARDS COMPLETOS */}
      <ServicesSection />

      {/* CTA FINAL */}
      <section className="w-full py-24 border-t border-white/5 text-center">
        <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white uppercase mb-6">
            Pronto para <span className="text-zinc-500">sentar?</span>
          </h2>
          <p className="text-zinc-400 font-light mb-10 max-w-lg">
            Escolha o serviço, o barbeiro e o horário direto na nossa agenda.
            Confirmação na hora.
          </p>
          <a
            href={negocio.links.booksy}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-zinc-200 transition-colors"
          >
            Agendar no Booksy
          </a>
          <Link
            href="/faq"
            className="mt-8 group flex items-center gap-3 text-xs font-bold text-zinc-400 uppercase tracking-widest hover:text-white transition-colors"
          >
            Dúvidas sobre os serviços
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}
