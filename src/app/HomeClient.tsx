"use client";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { useRef } from "react";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { EquipeSection } from "@/components/sections/EquipeSection";
import { LocalizacaoSection } from "@/components/sections/LocalizacaoSection";
import { negocio } from "@/data/negocio";

const containerReveal = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemReveal = {
  hidden: { y: "120%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function HomeClient() {
  const heroRef = useRef(null);
  const galleryRef = useRef(null);

  // Respeita "reduzir movimento" do sistema: sem parallax e sem galeria
  // que anda sozinha com o scroll.
  const reduzirMovimento = useReducedMotion();

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const { scrollYProgress: galleryScroll } = useScroll({
    target: galleryRef,
  });

  const yParallax = useTransform(heroScroll, [0, 1], [
    "0%",
    reduzirMovimento ? "0%" : "20%",
  ]);
  const xTranslate = useTransform(
    galleryScroll,
    [0, 1],
    reduzirMovimento ? ["0%", "0%"] : ["10%", "-60%"]
  );

  return (
    <main className="flex flex-col w-full bg-[#0A0A0A]">
      {/* DOBRA 1: HERO */}
      <section
        ref={heroRef}
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
      >
        <motion.div
          style={{
            y: yParallax,
            // Custom property não existe no tipo de style; o cast é só nela,
            // para não conflitar com o MotionValue do parallax.
            ...({
              "--poster": "url('/barbearia-estacao-trabalho.jpeg')",
            } as React.CSSProperties),
          }}
          className="fallback-video absolute inset-0 z-0 h-[120%] bg-[#0A0A0A]"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/80 to-[#0A0A0A] z-10" />

          {/*
            poster = LCP renderiza a imagem imediatamente;
            preload="none" = o vídeo só baixa depois, sem competir com o LCP.
          */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster="/barbearia-estacao-trabalho.jpeg"
            aria-hidden="true"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-60 grayscale-[20%]"
          >
            <source src="/video-geral-1-52seg.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center mt-20">
          <motion.div
            variants={containerReveal}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center"
          >
            <h1 className="flex flex-col items-center">
              <span className="sr-only">
                Dom Elii Barbershop — barbearia na Boa Vista, em Curitiba,
                especializada em visagismo, degradê e barboterapia
              </span>
              <div className="overflow-hidden pt-2">
                <motion.span
                  variants={itemReveal}
                  className="block text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase text-white"
                >
                  A Arte da
                </motion.span>
              </div>

              <div className="overflow-hidden pt-4 pb-2">
                <motion.span
                  variants={itemReveal}
                  className="block text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase text-zinc-400"
                >
                  Precisão.
                </motion.span>
              </div>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-8"
          >
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl font-light tracking-wide mb-6 leading-relaxed">
              Barbearia de <strong className="font-medium text-zinc-200">visagismo e estética masculina</strong> na
              Boa Vista, em Curitiba. A poucos minutos do Bacacheri, Cabral e Ahú.
            </p>
          </motion.div>

          {/* Prova social — nota do Booksy, com link para a fonte. */}
          <motion.a
            href={negocio.links.booksy}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors"
          >
            <span className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-200 text-amber-200" />
              ))}
            </span>
            <span className="font-bold">
              {negocio.avaliacoes.nota.toFixed(1).replace(".", ",")} ·{" "}
              {negocio.avaliacoes.quantidade} avaliações no{" "}
              {negocio.avaliacoes.fonte}
            </span>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href={negocio.links.booksy}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] overflow-hidden rounded-sm flex justify-center items-center"
            >
              <span className="relative z-10 flex items-center gap-3">
                Agendar no Booksy{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
              <div className="absolute inset-0 bg-zinc-200 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* DOBRA 2: O AMBIENTE */}
      <section className="relative w-full bg-[#0A0A0A] py-24 md:pt-32 pb-12 md:pb-16 z-20 border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-1/2 flex flex-col justify-center order-1"
            >
              <p className="text-xs font-bold text-zinc-400 tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
                <span className="w-12 h-px bg-zinc-700" /> A Experiência
              </p>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase text-white mb-8 leading-[1.1]">
                Santuário de <br className="hidden md:block" />
                <span className="text-zinc-500">Desconexão.</span>
              </h2>

              <p className="text-zinc-400 text-lg font-light leading-relaxed mb-10 max-w-md">
                Mais do que uma barbearia, forjamos um refúgio na Boa Vista. Um
                ambiente projetado com precisão geométrica e linhas limpas, onde
                o visagismo encontra a estética clássica.
              </p>

              <div className="relative pl-6 py-2 border-l-2 border-zinc-800">
                <blockquote className="text-xl text-zinc-300 font-medium italic tracking-wide">
                  &ldquo;Não apenas cortamos cabelo.
                  <br />
                  Esculpimos confiança.&rdquo;
                </blockquote>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="w-full lg:w-1/2 order-2 relative"
            >
              <div className="relative w-full aspect-[4/5] md:aspect-square bg-zinc-900 rounded-sm overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/40 z-10 pointer-events-none" />

                <Image
                  src="/barbearia-estacao-trabalho.jpeg"
                  alt="Estação de trabalho da Dom Elii Barbershop, na Boa Vista, em Curitiba"
                  fill
                  priority
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
                    Padrão ouro em estética masculina
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DOBRA 3: SERVIÇOS COM PREÇO */}
      <ServicesSection limite={6} />

      {/* DOBRA 4: GALERIA HORIZONTAL */}
      <section
        ref={galleryRef}
        className="relative h-[300vh] bg-[#0A0A0A]"
        aria-label="Galeria de trabalhos da Dom Elii Barbershop"
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x: xTranslate }} className="flex gap-12 px-20">
            <div className="relative h-[500px] w-[400px] flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 border border-white/10 group">
              <Image
                src="/corte-1.jpeg"
                fill
                sizes="400px"
                alt="Corte masculino com visagismo feito na Dom Elii Barbershop, Curitiba"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 p-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-bold uppercase tracking-widest text-sm">
                  Precisão
                </p>
              </div>
            </div>

            <div
              style={{ "--poster": "url('/corte-1.jpeg')" } as React.CSSProperties}
              className="fallback-video relative h-[500px] w-[600px] flex-shrink-0 border border-white/5 bg-zinc-900 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-transparent transition-colors duration-700" />
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                poster="/corte-1.jpeg"
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              >
                <source src="/corte-1-17seg.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <p className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white opacity-90">
                  O Ritual.
                </p>
              </div>
            </div>

            <div className="relative h-[500px] w-[400px] flex-shrink-0 border border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
              <Image
                src="/barba-1.jpeg"
                fill
                sizes="400px"
                alt="Barboterapia com toalha no vapor na Dom Elii Barbershop"
                className="object-cover"
              />
            </div>

            <div className="relative h-[500px] w-[400px] flex-shrink-0 border border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
              <Image
                src="/corte-2.jpeg"
                fill
                sizes="400px"
                alt="Degradê masculino executado na Dom Elii Barbershop, em Curitiba"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* DOBRA 5: EQUIPE (E-E-A-T) */}
      <EquipeSection />

      {/* DOBRA 6: LOCALIZAÇÃO E HORÁRIOS (SEO local) */}
      <LocalizacaoSection />

      {/* DOBRA 7: FAQ */}
      <section className="relative w-full bg-[#0A0A0A] py-24 md:py-32 border-t border-white/5 z-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl mx-auto flex flex-col items-center"
          >
            <p className="text-xs font-bold text-zinc-400 tracking-[0.3em] uppercase mb-4">
              Ainda com dúvidas?
            </p>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase text-white mb-6">
              Manual do <span className="text-zinc-500">Cliente.</span>
            </h2>

            <p className="text-zinc-400 font-light leading-relaxed mb-10 text-sm md:text-base">
              Transparência total sobre nossos rituais, formas de pagamento,
              estacionamento e tudo o que você precisa saber antes de sentar na
              nossa cadeira.
            </p>

            <Link
              href="/faq"
              className="group flex items-center gap-4 text-xs font-bold text-white uppercase tracking-widest hover:text-amber-100/80 transition-colors"
            >
              Acessar dúvidas frequentes
              <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-amber-100/80 group-hover:text-black group-hover:border-transparent transition-all">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
