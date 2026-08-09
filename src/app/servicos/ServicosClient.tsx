"use client";

import Link from "next/link";
import { FundoHero } from "@/components/ui/FundoHero";
import { ArrowRight } from "lucide-react";
import { ServicesSection } from "@/components/sections/ServicesSection";
import {
  catalogoServicos,
  precoEmReais,
  precoMinimo,
  precoMaximo,
} from "@/data/servicos";
import { negocio } from "@/data/negocio";

export function ServicosClient() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0A0A0A]">
      {/* HERO */}
      <section className="relative w-full pt-36 md:pt-44 pb-16 overflow-hidden">
        <FundoHero
          src="/corte-3.jpeg"
          alt="Corte masculino executado na Dom Elii Barbershop"
        />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white uppercase leading-[1.05] mb-8">
              Preços <br />
              <span className="text-zinc-500">em Curitiba.</span>
            </h1>

            <p className="text-zinc-200 text-lg font-light leading-relaxed mb-8">
              Seu visual merece atenção aos detalhes. Cada serviço é executado
              no tempo que precisa, com produto profissional e acabamento
              cuidadoso — porque sair daqui bem muda o jeito como você se
              apresenta.
            </p>

            {/*
              O intervalo de preços fica numa linha secundária: quem chega
              nesta página quer saber quanto custa, mas o número não precisa
              ser a primeira coisa dita.
            */}
            <p className="text-zinc-400 font-light mb-8">
              São {catalogoServicos.reduce((t, c) => t + c.servicos.length, 0)}{" "}
              serviços, de {precoEmReais(precoMinimo)} a{" "}
              {precoEmReais(precoMaximo)}.
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
          </div>
        </div>
      </section>

      {/*
        A tabela em texto foi removida: os cards abaixo já trazem nome,
        subtítulo, duração e preço no HTML, então nada de conteúdo indexável
        se perdeu — só a duplicação visual.
      */}
      {/* CARDS COMPLETOS */}
      <ServicesSection />

      <div className="container mx-auto px-6 md:px-12 -mt-16 mb-8">
        <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-2xl">
          Serviços marcados com &ldquo;a partir de&rdquo; dependem do
          comprimento do cabelo, do histórico químico e da complexidade do
          desenho — avaliamos e combinamos o valor com você antes de começar.
          Os preços acompanham o Booksy, que é sempre a referência final.
        </p>
      </div>

      {/* CTA FINAL */}
      <section className="w-full py-24 border-t border-white/5 text-center">
        <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white uppercase mb-6">
            Pronto para <span className="text-zinc-500">agendar?</span>
          </h2>
          <p className="text-zinc-400 font-light mb-10 max-w-lg">
            Escolha o barbeiro e o horário que ficam melhores para você. A
            confirmação sai na hora.
          </p>
          <a
            href={negocio.links.booksy}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-zinc-200 transition-colors"
          >
            Agendar horário
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
