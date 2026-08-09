"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { equipeData } from "@/data/equipe";
import { negocio } from "@/data/negocio";

function iniciais(nome: string) {
  return nome
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0])
    .join("");
}

/**
 * Quem executa o serviço. É o principal sinal de E-E-A-T de uma barbearia:
 * pessoas reais, com especialidade declarada. Também alimenta o campo
 * `employee` do JSON-LD via src/data/equipe.ts.
 */
export function EquipeSection() {
  return (
    <section
      id="equipe"
      className="relative w-full bg-[#0A0A0A] py-24 md:py-32 border-t border-white/5 z-20"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col mb-16 text-center md:text-left">
          <p className="text-xs font-bold text-zinc-400 tracking-[0.3em] uppercase mb-6 flex items-center justify-center md:justify-start gap-4">
            <span className="w-12 h-px bg-zinc-700" /> Quem executa
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white uppercase leading-[1.1]">
            A Mão por trás <br className="hidden md:block" />
            <span className="text-zinc-500">da Precisão.</span>
          </h2>
          <p className="mt-6 text-zinc-400 font-light max-w-lg mx-auto md:mx-0">
            Três profissionais, três especialidades. Você escolhe com quem quer
            sentar na hora do agendamento no Booksy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {equipeData.map((membro, index) => (
            <motion.article
              key={membro.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <div className="relative w-full aspect-[4/5] mb-6 overflow-hidden rounded-sm bg-zinc-900 border border-white/5">
                {membro.imagem ? (
                  <Image
                    src={membro.imagem}
                    alt={`${membro.nome}, ${membro.cargo} na Dom Elii Barbershop`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-950">
                    <span
                      aria-hidden="true"
                      className="text-6xl font-bold tracking-tighter text-zinc-400 uppercase"
                    >
                      {iniciais(membro.nome)}
                    </span>
                  </div>
                )}
              </div>

              <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-1">
                {membro.nome}
              </h3>
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4">
                {membro.cargo}
              </p>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">
                {membro.descricao}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 flex justify-center md:justify-start">
          <a
            href={negocio.links.booksy}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-white uppercase tracking-widest border-b border-zinc-700 pb-1 hover:border-white transition-colors"
          >
            Escolher barbeiro e agendar
          </a>
        </div>
      </div>
    </section>
  );
}
