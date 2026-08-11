"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { VideoFundo } from "@/components/ui/VideoFundo";
import { Revelar } from "@/components/ui/Revelar";
import { useScrollProgresso } from "@/hooks/useScrollProgresso";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { EquipeSection } from "@/components/sections/EquipeSection";
import { ParceirosSection } from "@/components/sections/ParceirosSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { DepoimentosSection } from "@/components/sections/DepoimentosSection";
import { negocio } from "@/data/negocio";

export function HomeClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const galeriaRef = useRef<HTMLDivElement>(null);

  // Escrevem --progresso (0..1) no próprio elemento; o transform mora no CSS.
  useScrollProgresso(heroRef, "--progresso");
  useScrollProgresso(galeriaRef, "--progresso", { modo: "sticky" });

  return (
    <main className="flex flex-col w-full bg-[#0A0A0A]">
      {/* DOBRA 1: HERO */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
        <div
          style={
            { "--poster": "url('/poster-hero.webp')" } as React.CSSProperties
          }
          ref={heroRef}
          className="parallax-hero fallback-video absolute inset-0 z-0 h-[120%] bg-[#0A0A0A]"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/80 to-[#0A0A0A] z-10" />

          <VideoFundo
            src="/video-geral-1-52seg.mp4"
            poster="/poster-hero.webp"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center mt-20">
          {/*
            Entrada animada por CSS (ver globals.css). Não use framer-motion
            aqui: conteúdo acima da dobra não pode depender de hidratação
            para ficar visível — foi o que jogou o LCP para 5,2s.
          */}
          {/*
            Hero enxuto de propósito: um título, um parágrafo, um botão.
            Cada linha a mais aqui empurra o CTA para fora da primeira tela
            no celular, que é onde a decisão acontece.
          */}
          {/*
            Sem texto extra escondido aqui dentro: ele encostava no texto
            visível e o Google lia as palavras coladas. O nome da barbearia e
            o bairro já estão no <title>, na descrição e no JSON-LD.
            O {" "} entre as linhas evita que "barbearia" e "em" se juntem.
          */}
          <h1 className="flex flex-col items-center">
            <span className="block overflow-hidden pt-2">
              <span className="anima-linha block text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase text-white">
                Procurando barbearia
              </span>
            </span>{" "}
            <span className="block overflow-hidden pt-3 pb-2">
              <span className="anima-linha atraso-1 block text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase text-zinc-400">
                em Curitiba?
              </span>
            </span>
          </h1>

          <p className="anima-suave atraso-2 mt-6 mb-10 text-zinc-200 text-base md:text-lg max-w-xl font-light leading-relaxed">
            Com um time experiente e agenda sempre aberta, nossa missão é
            transformar visuais e elevar a autoestima de cada cliente.
            A Dom Elii é referência para quem busca uma{" "}
            <strong className="font-semibold text-white">
              barbearia em Curitiba
            </strong>
            .
          </p>

          <a
            href={negocio.links.booksy}
            target="_blank"
            rel="noopener noreferrer"
            className="anima-suave atraso-3 group relative px-10 py-5 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] overflow-hidden rounded-sm flex justify-center items-center"
          >
            <span className="relative z-10 flex items-center gap-3">
              Agendar horário{" "}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
            <span className="absolute inset-0 bg-zinc-200 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
          </a>
        </div>
      </section>

      {/* DOBRA 2: O AMBIENTE */}
      <section className="secao-adiada relative w-full bg-[#0A0A0A] py-24 md:pt-32 pb-12 md:pb-16 z-20 border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <Revelar
              className="w-full lg:w-1/2 flex flex-col justify-center order-1"
            >
              <p className="text-xs font-bold text-zinc-400 tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
                <span className="w-12 h-px bg-zinc-700" /> Como funciona
              </p>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase text-white mb-8 leading-[1.1]">
                Como funciona <br className="hidden md:block" />
                <span className="text-zinc-500">o atendimento.</span>
              </h2>

              <p className="text-zinc-400 text-lg font-light leading-relaxed mb-8 max-w-md">
                Ficamos no Boa Vista, em CWB, e atendemos clientes de toda a
                cidade. Agendando você garante o horário e escolhe o barbeiro.
                Chegando sem agendar, atendemos se houver janela livre na
                agenda do dia.
              </p>

              <ul className="flex flex-col gap-4 max-w-md">
                {[
                  "Antes de começar, entendemos seu tipo de cabelo, sua rotina e o que você quer transmitir. A máquina vem depois disso.",
                  "Preço fechado antes de começar. Serviço de valor variável é orçado na avaliação, nunca no fim.",
                  "Loja dentro da barbearia com pomada, cera e roupa, e geladeira com bebida gelada para acompanhar o corte.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-zinc-300 font-light leading-relaxed"
                  >
                    <span aria-hidden="true" className="text-zinc-500 mt-1">
                      —
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Revelar>

            <Revelar
              atraso={0.15}
              className="w-full lg:w-1/2 order-2 relative"
            >
              <div className="relative w-full aspect-[4/5] md:aspect-square bg-zinc-900 rounded-sm overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/40 z-10 pointer-events-none" />

                <Image
                  src="/barbearia-estacao-trabalho.jpeg"
                  alt="Estação de trabalho da Dom Elii Barbershop, no Boa Vista, em Curitiba"
                  fill
                  quality={65}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover contrast-[1.1] brightness-[0.9] group-hover:scale-105 transition-transform duration-[2s] ease-out"
                />

                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-20 bg-black/40 backdrop-blur-md border border-white/10 px-6 py-4 rounded-sm transform translate-y-4 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-white text-xs font-bold tracking-[0.2em] uppercase">
                      Boa Vista, Curitiba
                    </p>
                  </div>
                  <p className="text-zinc-400 text-sm font-light">
                    Rua Lodovico Geronazzo, 539
                  </p>
                </div>
              </div>
            </Revelar>
          </div>
        </div>
      </section>

      {/* DOBRA 3: SERVIÇOS COM PREÇO */}
      <ServicesSection limite={6} />

      {/* DOBRA 4: GALERIA HORIZONTAL */}
      <section
        ref={galeriaRef}
        className="relative h-[300vh] bg-[#0A0A0A]"
        aria-label="Galeria de trabalhos da Dom Elii Barbershop"
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="galeria-trilho flex gap-6 md:gap-12 px-6 md:px-20">
            <div className="relative h-[65vh] w-[72vw] md:h-[500px] md:w-[400px] flex-shrink-0 border border-white/10 group">
              <Image
                src="/corte-1.jpeg"
                fill
                sizes="(max-width: 768px) 72vw, 400px"
                quality={65}
                alt="Corte masculino feito na Dom Elii Barbershop, em Curitiba"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 p-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-bold uppercase tracking-widest text-sm">
                  Precisão
                </p>
              </div>
            </div>

            <div
              style={{ "--poster": "url('/poster-ritual.webp')" } as React.CSSProperties}
              className="fallback-video relative h-[65vh] w-[85vw] md:h-[500px] md:w-[600px] flex-shrink-0 border border-white/5 bg-zinc-900 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-transparent transition-colors duration-700" />
              <VideoFundo
                src="/corte-1-17seg.mp4"
                poster="/poster-ritual.webp"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <p className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white opacity-90">
                  Mais que um corte.
                </p>
              </div>
            </div>

            <div className="relative h-[65vh] w-[72vw] md:h-[500px] md:w-[400px] flex-shrink-0 border border-white/10">
              <Image
                src="/barba-1.jpeg"
                fill
                sizes="(max-width: 768px) 72vw, 400px"
                quality={65}
                alt="Barboterapia com toalha no vapor na Dom Elii Barbershop"
                className="object-cover"
              />
            </div>

            <div className="relative h-[65vh] w-[72vw] md:h-[500px] md:w-[400px] flex-shrink-0 border border-white/10">
              <Image
                src="/corte-2.jpeg"
                fill
                sizes="(max-width: 768px) 72vw, 400px"
                quality={65}
                alt="Degradê masculino executado na Dom Elii Barbershop, em Curitiba"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DOBRA 5: EQUIPE (E-E-A-T) */}
      <EquipeSection />

      {/* DEPOIMENTOS (aparece quando src/data/depoimentos.ts for preenchido) */}
      <DepoimentosSection />

      {/* PRODUTOS E PARCERIAS (desligavel em src/data/parceiros.ts) */}
      <ParceirosSection />

      {/* ÚLTIMOS ARTIGOS — link interno da home para o blog */}
      <BlogSection />

      {/* FAQ */}
      <section className="secao-adiada relative w-full bg-[#0A0A0A] py-24 md:py-32 border-t border-white/5 z-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <Revelar
              className="max-w-2xl mx-auto flex flex-col items-center"
          >
            <p className="text-xs font-bold text-zinc-400 tracking-[0.3em] uppercase mb-4">
              Antes de agendar
            </p>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase text-white mb-6">
              Perguntas <span className="text-zinc-500">frequentes.</span>
            </h2>

            <p className="text-zinc-400 font-light leading-relaxed mb-10 text-sm md:text-base">
              Quanto custa cada serviço, qual o horário, se atende sem
              agendamento, como é o estacionamento e se atende criança.
            </p>

            <Link
              href="/faq"
              className="group flex items-center gap-4 text-xs font-bold text-white uppercase tracking-widest hover:text-amber-100/80 transition-colors"
            >
              Ver perguntas frequentes
              <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-amber-100/80 group-hover:text-black group-hover:border-transparent transition-all">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </Revelar>
        </div>
      </section>
    </main>
  );
}
