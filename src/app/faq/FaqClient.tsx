"use client";

import { useState } from "react";
import { Revelar } from "@/components/ui/Revelar";
import { FundoHero } from "@/components/ui/FundoHero";
import { ChevronDown, ArrowRight } from "lucide-react";
import { faqData } from "@/data/faq";
import { negocio } from "@/data/negocio";

export function FaqClient() {
  const [itemAberto, setItemAberto] = useState<number | null>(0);

  const toggleItem = (index: number) =>
    setItemAberto(itemAberto === index ? null : index);

  return (
    <main className="flex min-h-screen flex-col bg-[#0A0A0A] relative overflow-hidden">
      <FundoHero
        src="/barba-1.jpeg"
        alt="Barboterapia na Dom Elii Barbershop"
      />

      <section className="relative w-full pt-32 lg:pt-36 pb-32 z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* mt no desktop: a logo grande da navbar invade esta coluna */}
            <div className="lg:w-1/3 flex flex-col relative lg:mt-16">
              <Revelar className="lg:sticky lg:top-32">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white uppercase mb-6 leading-[1.1]">
                  Suas <br className="hidden lg:block" />
                  <span className="text-zinc-500">Dúvidas.</span>
                </h1>

                <p className="text-zinc-400 font-light leading-relaxed mb-10 max-w-sm">
                  Endereço, horários, preços e agendamento. Se a sua dúvida não
                  estiver aqui, chame no WhatsApp.
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
              </Revelar>
            </div>

            <div className="lg:w-2/3 flex flex-col pt-4 lg:pt-0">
              {faqData.map((item, index) => {
                const isActive = itemAberto === index;
                const numeroFormatado = String(index + 1).padStart(2, "0");
                const idResposta = `faq-resposta-${index}`;

                return (
                  <Revelar
                    key={item.pergunta}
                    atraso={index * 0.04}
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

                        <span
                          className={`flex-shrink-0 p-2 rounded-full border transition-all duration-500 ${
                            isActive ? "rotate-180 " : ""
                          }${
                            isActive
                              ? "border-white bg-white text-black"
                              : "border-white/10 text-zinc-400 group-hover:border-amber-100/50 group-hover:text-amber-100/80"
                          }`}
                        >
                          <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
                        </span>
                      </button>
                    </h2>

                    {/*
                      A resposta fica SEMPRE montada no DOM (só a altura anima).
                      Se desmontasse, o texto sumiria do HTML e o Google
                      indexaria apenas a primeira resposta da lista.
                    */}
                    <div
                      id={idResposta}
                      className={`grid transition-all duration-400 ease-in-out ${
                        isActive
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                      <p className="pb-6 pl-[3.5rem] md:pl-[4.5rem] pr-4 md:pr-12 text-zinc-400 font-light text-sm md:text-base leading-relaxed">
                        {item.resposta}
                      </p>
                      </div>
                    </div>
                  </Revelar>
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
          </div>
        </div>
      </section>
    </main>
  );
}
