"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PenLine, Timer } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0A0A0A] relative overflow-hidden">
      
      {/* BACKGROUND MESH PREMIUM */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/30 via-[#0A0A0A] to-[#0A0A0A]" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
          }}
        />
      </div>

      {/* CONTEÚDO CENTRALIZADO */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        
        {/* LOGO ANIMADA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <Image 
            src="/logo-dom-elii-transparent.png" 
            alt="Dom Elii Logo" 
            width={180} 
            height={180} 
            className="object-contain"
          />
        </motion.div>

        {/* MENSAGEM EDITORIAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-2 text-zinc-500 mb-6 uppercase tracking-[0.4em] text-[10px] font-black">
            <PenLine size={14} />
            <span>Esculpindo a Precisão</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase mb-6 leading-tight">
            Em <span className="text-zinc-600">Construção.</span>
          </h1>

          <p className="text-zinc-500 text-sm md:text-base font-light max-w-sm leading-relaxed mb-10">
            Estamos refinando cada detalhe da nossa nova experiência digital. O santuário do visagismo em Curitiba volta em breve.
          </p>

          {/* INDICADOR DE TEMPO/ESPERA */}
          <div className="flex items-center gap-3 px-6 py-3 border border-white/5 bg-zinc-900/30 rounded-full backdrop-blur-sm">
            <Timer size={16} className="text-zinc-600 animate-pulse" />
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Aguarde o Ritual</span>
          </div>
        </motion.div>
      </div>

      {/* RODAPÉ SUTIL */}
      <footer className="absolute bottom-10 z-10">
        <p className="text-[9px] text-zinc-700 uppercase tracking-[0.5em] font-bold">
          © 2026 Dom Elii Barbershop • Codexo Tecnologia
        </p>
      </footer>

    </main>
  );
}