"use client";

import { useState } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { HelpCircle, ChevronDown, ArrowRight } from "lucide-react";
import { faqData } from "@/data/faq";

const containerReveal: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function FAQPage() {
  const [itemAberto, setItemAberto] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setItemAberto(itemAberto === index ? null : index);
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#0A0A0A] relative overflow-hidden">
      
      {/* BACKGROUND MESH */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 via-[#0A0A0A] to-[#0A0A0A]" />
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 0.15 }} 
          transition={{ duration: 2 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
            maskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)'
          }}
        />
      </div>

      <Navbar />

      {/* AJUSTE 1: Reduzi o pt geral para a lista da direita subir colada na Navbar */}
      <section className="relative w-full pt-32 lg:pt-28 pb-32 z-10">
        <div className="container mx-auto px-6 md:px-12">
          
          <motion.div 
            variants={containerReveal}
            initial="hidden"
            animate="show"
            className="flex flex-col lg:flex-row gap-16 lg:gap-24"
          >
            {/* LADO ESQUERDO: Título Sticky */}
            {/* AJUSTE 2: Adicionei lg:mt-20 aqui. Isso empurra SÓ o título para baixo, fugindo da logo */}
            <div className="lg:w-1/3 flex flex-col relative lg:mt-20">
              <motion.div variants={itemReveal} className="lg:sticky lg:top-32">
                
                <div className="flex items-center gap-2 text-zinc-500 mb-6">
                  <HelpCircle className="w-4 h-4" />
                  <span className="text-xs font-bold tracking-[0.3em] uppercase">
                    Manual do Cliente • Bacacheri
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white uppercase mb-6 leading-[1.1]">
                  Suas <br className="hidden lg:block" />
                  <span className="text-zinc-600">Dúvidas.</span>
                </h1>
                
                <p className="text-zinc-400 font-light leading-relaxed mb-10 max-w-sm">
                  Transparência é o pilar da nossa engenharia visual. Encontre respostas rápidas sobre nossos rituais, agendamentos e estrutura em Curitiba.
                </p>

                <a 
                  href="https://wa.me/seunumero" 
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 text-xs font-bold text-white uppercase tracking-widest hover:text-amber-100/80 transition-colors"
                >
                  Falar no WhatsApp 
                  <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-amber-100/80 group-hover:text-black group-hover:border-transparent transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
              </motion.div>
            </div>

            {/* LADO DIREITO: Accordion Mais Alto na Tela */}
            <div className="lg:w-2/3 flex flex-col pt-4 lg:pt-0">
              {faqData.map((item, index) => {
                const isActive = itemAberto === index;
                const numeroFormatado = String(index + 1).padStart(2, '0');

                return (
                  <motion.div 
                    variants={itemReveal}
                    key={index} 
                    className="border-t border-white/10 group"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full flex items-center justify-between py-5 md:py-6 text-left focus:outline-none"
                    >
                      <div className="flex items-center gap-6 md:gap-8 pr-4">
                        <span className={`text-xs md:text-sm font-bold tracking-[0.2em] transition-colors duration-500 ${isActive ? 'text-white' : 'text-zinc-600'}`}>
                          /{numeroFormatado}
                        </span>
                        
                        <span className={`text-lg md:text-xl lg:text-2xl font-bold tracking-tight transition-colors duration-500 ${isActive ? 'text-white' : 'text-zinc-400 group-hover:text-amber-100/80'}`}>
                          {item.pergunta}
                        </span>
                      </div>

                      <motion.div 
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className={`flex-shrink-0 p-2 rounded-full border transition-colors duration-500 ${isActive ? 'border-white bg-white text-black' : 'border-white/10 text-zinc-500 group-hover:border-amber-100/50 group-hover:text-amber-100/80'}`}
                      >
                        <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pb-6 pl-[3.5rem] md:pl-[4.5rem] pr-4 md:pr-12 text-zinc-400 font-light text-sm md:text-base leading-relaxed">
                            {item.resposta}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
              
              <div className="border-t border-white/10" />
            </div>

          </motion.div>
        </div>
      </section>
    </main>
  );
}