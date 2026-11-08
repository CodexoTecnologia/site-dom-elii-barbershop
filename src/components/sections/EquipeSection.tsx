"use client";

import Image from "next/image";
import { Plus, ArrowUpRight } from "lucide-react";
import { Revelar } from "@/components/ui/Revelar";
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
      className="secao-adiada relative w-full bg-[#0A0A0A] py-24 md:py-32 border-t border-white/5 z-20"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col mb-16 text-center md:text-left">
          <p className="text-xs font-bold text-zinc-400 tracking-[0.3em] uppercase mb-6 flex items-center justify-center md:justify-start gap-4">
            <span className="w-12 h-px bg-zinc-700" /> A equipe
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white uppercase leading-[1.1]">
            Barbeiros em <br className="hidden md:block" />
            <span className="text-zinc-500">Curitiba.</span>
          </h2>
          <p className="mt-6 text-zinc-400 font-light max-w-lg mx-auto md:mx-0">
            Você escolhe com quem quer ser atendido na hora de agendar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {equipeData.map((membro, index) => (
            <Revelar
              as="article"
              key={membro.id}
              atraso={index * 0.1}
              className="flex flex-col"
            >
              <div className="relative w-full aspect-[4/5] mb-6 overflow-hidden rounded-sm bg-zinc-900 border border-white/5">
                {membro.imagem ? (
                  <Image
                    src={membro.imagem}
                    alt={`${membro.nome}, ${membro.cargo} na Dom Elii Barbershop`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
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
            </Revelar>
          ))}

          {/*
            CONVITE PARA BARBEIRO — terceiro card da fileira.

            Tem a mesma caixa, a mesma tipografia e as mesmas cores dos
            barbeiros: card apagado no fim de uma fileira lê como erro de
            carregamento. O que o mantém em segundo plano é não ter rosto —
            quem procura com quem se atender percorre retratos e passa reto.

            A caixa é a mesma dos retratos, `bg-zinc-900` chapado: nos cards
            de barbeiro a foto cobre a caixa inteira, então qualquer fundo
            mais elaborado aqui seria um tratamento que só este card tem.
            Dentro dela, o contorno tracejado de uma cadeira vaga — o convite
            dito em imagem: este lugar existe e está vazio.

            Sem schema `JobPosting`: esse markup pede vaga formal, com data
            de validade e tipo de contrato, e sem isso rende aviso no Search
            Console em vez de resultado melhor.
          */}
          <Revelar
            as="article"
            atraso={equipeData.length * 0.1}
            className="flex flex-col"
          >
            <a
              href={negocio.links.trabalheConosco}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <div className="relative w-full aspect-[4/5] mb-6 flex items-center justify-center overflow-hidden rounded-sm border border-white/5 bg-zinc-900">
                <span
                  aria-hidden="true"
                  className="flex h-20 w-20 items-center justify-center rounded-full border border-dashed border-white/25 text-white transition-all duration-500 group-hover:scale-105 group-hover:border-solid group-hover:border-white group-hover:bg-white group-hover:text-black"
                >
                  <Plus className="h-7 w-7" strokeWidth={1.5} />
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-1">
                Sua cadeira
              </h3>
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4">
                Faça parte da equipe
              </p>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">
                Tem cadeira livre na Dom Elii. Se você é barbeiro, trabalha com
                capricho e quer uma casa com movimento e clientela fiel, manda
                uma mensagem para a equipe — a conversa começa por aí.
              </p>

              <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white">
                <span className="border-b border-zinc-700 pb-1 transition-colors group-hover:border-white">
                  Mandar mensagem
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </Revelar>
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
