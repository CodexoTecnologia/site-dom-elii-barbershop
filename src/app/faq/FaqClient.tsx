"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { HelpCircle, ChevronDown, ArrowRight } from "lucide-react";
import { faqData } from "@/data/faq";
import { negocio } from "@/data/negocio";

const containerReveal: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export function FaqClient() {
  const [itemAberto, setItemAberto] = useState<number | null>(0);

  const toggleItem = (index: number) =>
    setItemAberto(itemAberto === index ? null : index);

  return (
    <main className="flex min-h-screen flex-col bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 via-[#0A0A0A] to-[#0A0A0A]" />
      </div>

      <section className="relative w-full pt-32 lg:pt-36 pb-32 z-10">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            variants={containerReveal}
            initial="hidden"
            animate="show"
            className="flex flex-col lg:flex-row gap-16 lg:gap-24"
          >
            <div className="lg:w-1/3 flex flex-col relative">
              <motion.div variants={itemReveal} className="lg:sticky lg:top-32">
                <div className="flex items-center gap-2 text-zinc-400 mb-6">
                  <HelpCircle className="w-4 h-4" />
                  <span className="text-xs font-bold tracking-[0.3em] uppercase">
                    Manual do Cliente · Boa Vista
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white uppercase mb-6 leading-[1.1]">
                  Suas <br className="hidden lg:block" />
                  <span className="text-zinc-500">Dúvidas.</span>
                </h1>

                <p className="text-zinc-400 font-light leading-relaxed mb-10 max-w-sm">
                  Respostas rápidas sobre endereço, horários, preços e
                  agendamento na Dom Elii Barbershop, em Curitiba.
                </p>

                <a
                  href={negocio.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-xs font-bold text-white uppercase tracking-widest hover:text-amber-100/80 transition-colors"
                >
                  Falar no WhatsApp
                  <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-amber-100/80 group-hover:text-black group-hover:border-transparent transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
              </motion.div>
            </div>

            <div className="lg:w-2/3 flex flex-col pt-4 lg:pt-0">
              {faqData.map((item, index) => {
                const isActive = itemAberto === index;
                const numeroFormatado = String(index + 1).padStart(2, "0");
                const idResposta = `faq-resposta-${index}`;

                return (
                  <motion.div
                    variants={itemReveal}
                    key={item.pergunta}
                    className="border-t border-white/10 group"
                  >
                    <h2>
                      <button
                        onClick={() => toggleItem(index)}
                        aria-expanded={isActive}
                        aria-controls={idResposta}
                        className="w-full flex items-center justify-between py-5 md:py-6 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
                      >
                        <span className="flex items-center gap-6 md:gap-8 pr-4">
                          <span
                            className={`text-xs md:text-sm font-bold tracking-[0.2em] transition-colors duration-500 ${
                              isActive ? "text-white" : "text-zinc-400"
                            }`}
                          >
                            /{numeroFormatado}
                          </span>

                          <span
                            className={`text-lg md:text-xl lg:text-2xl font-bold tracking-tight transition-colors duration-500 ${
                              isActive
                                ? "text-white"
                                : "text-zinc-400 group-hover:text-amber-100/80"
                            }`}
                          >
                            {item.pergunta}
                          </span>
                        </span>

                        <motion.span
                          animate={{ rotate: isActive ? 180 : 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className={`flex-shrink-0 p-2 rounded-full border transition-colors duration-500 ${
                            isActive
                              ? "border-white bg-white text-black"
                              : "border-white/10 text-zinc-400 group-hover:border-amber-100/50 group-hover:text-amber-100/80"
                          }`}
                        >
                          <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
                        </motion.span>
                      </button>
                    </h2>

                    {/*
                      A resposta fica SEMPRE montada no DOM (só a altura anima).
                      Se desmontasse, o texto sumiria do HTML e o Google
                      indexaria apenas a primeira resposta da lista.
                    */}
                    <motion.div
                      id={idResposta}
                      initial={false}
                      animate={{
                        height: isActive ? "auto" : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pl-[3.5rem] md:pl-[4.5rem] pr-4 md:pr-12 text-zinc-400 font-light text-sm md:text-base leading-relaxed">
                        {item.resposta}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}

              <div className="border-t border-white/10" />

              <a
                href={negocio.links.booksy}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 self-start px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-zinc-200 transition-colors"
              >
                Agendar no Booksy
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
