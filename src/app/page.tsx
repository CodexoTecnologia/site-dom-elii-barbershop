"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Scissors, Ruler } from "lucide-react";
import { useRef } from "react";
import { ServicesSection } from "@/components/sections/ServicesSection";

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
            className="flex flex-col items-center">
            
            {/* Único H1 para SEO Otimizado */}
            <h1 className="flex flex-col items-center">
              {/* Texto de SEO Oculto (Acessível para robôs e leitores de tela) */}
              <span className="sr-only">
                Dom Elii Barbershop - Barbearia no Bacacheri em Curitiba especializada em Visagismo
              </span>
              {/* Linha 1: "A Arte da" */}
              <div className="overflow-hidden pt-2"> {/* pt-2 evita cortes no topo */}
                <motion.span 
                  variants={itemReveal} 
                  className="block text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase text-white"
                >
                  A Arte da
                </motion.span>
              </div>

              {/* Linha 2: "Precisão." */}
              <div className="overflow-hidden pt-4 pb-2"> {/* pt-4 garante que o acento apareça 100% */}
                <motion.span 
                  variants={itemReveal} 
                  className="block text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase text-zinc-500"
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

      {/* DOBRA 2: O AMBIENTE - Editorial Premium (Padrão Codexo) */}
      <section className="relative w-full bg-[#0A0A0A] py-24 md:pt-32 pb-12 md:pb-16 z-20 border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          
          {/* Usando Flexbox em vez de Grid para controle absoluto da ordem no Mobile/Desktop */}
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            {/* Bloco 1: O Manifesto (Vem SEMPRE primeiro no mobile e no desktop) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-1/2 flex flex-col justify-center order-1"
            >
              <h3 className="text-xs font-bold text-zinc-500 tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
                <span className="w-12 h-px bg-zinc-700"></span> A Experiência
              </h3>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase text-white mb-8 leading-[1.1]">
                Santuário de <br className="hidden md:block" />
                <span className="text-zinc-500">Desconexão.</span> 
              </h2>
              
              <p className="text-zinc-400 text-lg font-light leading-relaxed mb-10 max-w-md">
                Mais do que uma barbearia, forjamos um refúgio no Bacacheri. Um ambiente projetado com precisão geométrica e linhas limpas, onde o visagismo encontra a estética clássica.
              </p>

              {/* Elemento de UI Memorable: Blockquote Editorial em vez de Botão de Serviço */}
              <div className="relative pl-6 py-2 border-l-2 border-zinc-800">
                <p className="text-xl text-zinc-300 font-medium italic tracking-wide">
                  "Não apenas cortamos cabelo.<br/>
                  Esculpimos confiança."
                </p>
              </div>
            </motion.div>

            {/* Bloco 2: A Imagem Real com UI Flutuante */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="w-full lg:w-1/2 order-2 relative"
            >
              {/* Contêiner da Foto: Cores vivas, mas com contraste de cinema */}
              <div className="relative w-full aspect-[4/5] md:aspect-square bg-zinc-900 rounded-sm overflow-hidden shadow-2xl group">
                
                {/* Overlay sutil de vinheta para focar o olhar no centro da foto */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/40 z-10 pointer-events-none"></div>
                
                <Image 
                  src="/barbearia-estacao-trabalho.jpeg" 
                  alt="Estação de trabalho da Dom Elii Barbershop" 
                  fill 
                  priority
                  // Sem grayscale. Apenas um leve ajuste de contraste e brilho para o dark mode
                  className="object-cover contrast-[1.1] brightness-[0.9] group-hover:scale-105 transition-transform duration-[2s] ease-out" 
                />

                {/* UI Element: Badge Glassmorphism flutuante - O detalhe que marca a memória */}
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-20 bg-black/40 backdrop-blur-md border border-white/10 px-6 py-4 rounded-sm transform translate-y-4 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <p className="text-white text-xs font-bold tracking-[0.2em] uppercase">Bacacheri, PR</p>
                  </div>
                  <p className="text-zinc-400 text-sm font-light">Padrão Ouro em Curitiba</p>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* DOBRA 3: RITUAIS (O componente já gerencia seu próprio espaço e cor) */}
      <ServicesSection />

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