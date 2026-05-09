"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Scissors, Ruler } from "lucide-react";
import { useRef } from "react";

// Variáveis de animação corrigidas
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

export default function Home() {
  const heroRef = useRef(null);
  const galleryRef = useRef(null);

  // Scroll Progress para o Hero Parallax
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Scroll Progress para a Galeria Horizontal
  const { scrollYProgress: galleryScroll } = useScroll({
    target: galleryRef,
  });

  const yParallax = useTransform(heroScroll, [0, 1], ["0%", "20%"]);
  const xTranslate = useTransform(galleryScroll, [0, 1], ["10%", "-60%"]);

  return (
    <main className="flex flex-col w-full bg-[#0A0A0A]">
      
      {/* DOBRA 1: HERO */}
      <section ref={heroRef} className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
        
        {/* Background com Vídeo Parallax */}
        <motion.div style={{ y: yParallax }} className="absolute inset-0 z-0 h-[120%] bg-[#0A0A0A]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/80 to-[#0A0A0A] z-10" />
          
          {/* TAG DE VÍDEO HTML5 OTIMIZADA */}
          <video
            autoPlay
            loop
            muted
            playsInline // Crucial para o vídeo rodar sozinho no iPhone sem abrir em tela cheia
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
            <div className="overflow-hidden pb-2">
              <motion.h1 variants={itemReveal} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase text-white">
                A Arte da
              </motion.h1>
            </div>
            <div className="overflow-hidden pb-4">
              <motion.h1 variants={itemReveal} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase text-zinc-500">
                Precisão.
              </motion.h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-8"
          >
            <h2 className="text-zinc-400 text-lg md:text-xl max-w-2xl font-light tracking-wide mb-10 leading-relaxed">
              Santuário de <strong>visagismo e estética masculina</strong> no Bacacheri. O mais alto padrão de Curitiba.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="https://booksy.com" className="group relative px-10 py-5 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] overflow-hidden rounded-sm flex justify-center items-center">
              <span className="relative z-10 flex items-center gap-3">
                Agendar Ritual <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-zinc-200 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* DOBRA 2: A EXPERIÊNCIA */}
      <section className="relative w-full bg-[#0A0A0A] py-32 z-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xs font-bold text-zinc-500 tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
                <span className="w-12 h-px bg-zinc-700"></span> O Padrão Dom Elii
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase text-white mb-8">
                Engenharia <span className="text-zinc-600">Visual.</span>
              </h2>
              <p className="text-zinc-400 text-lg font-light leading-relaxed mb-6">
                Aplicamos fundamentos do visagismo para esculpir sua melhor versão no coração do Bacacheri.
              </p>
            </motion.div>
            <div className="relative aspect-[4/5] bg-zinc-900 border border-white/10 rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
               <Image src="/barbearia-estacao-trabalho.jpeg" alt="Espaço" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* DOBRA 3: SERVIÇOS */}
      <section className="relative w-full bg-zinc-950 py-32 z-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase text-white">A Curadoria</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto font-sans">
             <div className="p-8 border border-white/5 bg-[#0A0A0A] hover:border-zinc-500 transition-colors">
                <Scissors className="text-zinc-600 mb-4" />
                <h3 className="text-xl font-bold uppercase text-white mb-2">Corte & Visagismo</h3>
                <p className="text-zinc-400 text-sm">A partir de R$ XX,00</p>
             </div>
             <div className="p-8 border border-white/5 bg-[#0A0A0A] hover:border-zinc-500 transition-colors">
                <Ruler className="text-zinc-600 mb-4" />
                <h3 className="text-xl font-bold uppercase text-white mb-2">Barboterapia</h3>
                <p className="text-zinc-400 text-sm">A partir de R$ XX,00</p>
             </div>
          </div>
        </div>
      </section>

      {/* DOBRA 4: GALERIA HORIZONTAL (AQUI É ONDE ENTRA O EFEITO QUE VOCÊ QUERIA) */}
      <section ref={galleryRef} className="relative h-[300vh] bg-[#0A0A0A]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x: xTranslate }} className="flex gap-12 px-20">
            
            {/* Slide 1: Corte */}
            <div className="relative h-[500px] w-[400px] flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 border border-white/10 group">
              <Image src="/corte-1.jpeg" fill alt="Corte e Visagismo" className="object-cover" />
              <div className="absolute bottom-0 left-0 p-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-bold uppercase tracking-widest text-sm">Precisão</p>
              </div>
            </div>

            {/* Slide 2: Ambiente/Vídeo Curto (Podemos usar um vídeo menor aqui!) */}
            <div className="relative h-[500px] w-[600px] flex-shrink-0 border border-white/5 bg-zinc-900 group overflow-hidden">
               <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-transparent transition-colors duration-700" />
               <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700">
                 <source src="/corte-1-17seg.mp4" type="video/mp4" />
               </video>
               <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                 <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white opacity-90">O Ritual.</h3>
               </div>
            </div>

            {/* Slide 3: Barba */}
            <div className="relative h-[500px] w-[400px] flex-shrink-0 border border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
              <Image src="/barba-1.jpeg" fill alt="Barboterapia Dom Elii" className="object-cover" />
            </div>

            {/* Slide 4: Outro Corte */}
            <div className="relative h-[500px] w-[400px] flex-shrink-0 border border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
              <Image src="/corte-2.jpeg" fill alt="Corte Moderno" className="object-cover" />
            </div>

          </motion.div>
        </div>
      </section>

    </main>
  );
}