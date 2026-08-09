"use client";

import { Revelar } from "@/components/ui/Revelar";
import { MapPin, Clock, Phone, ArrowUpRight } from "lucide-react";
import {
  negocio,
  enderecoLinhaUnica,
  horarioLegivel,
} from "@/data/negocio";

/**
 * NÃO ESTÁ EM USO. Ficou fora da home porque duplicava o rodapé; mantida
 * caso a informação volte a ter uma seção própria.
 *
 * Endereço + horários em texto visível.
 *
 * Não é decoração: NAP e horário em HTML (não só dentro do JSON-LD) é um dos
 * sinais que o Google usa para casar o site com o perfil do Google Business
 * Profile. Precisa bater caractere a caractere com o GBP e o Booksy.
 */
export function LocalizacaoSection() {

  return (
    <section
      id="localizacao"
      className="secao-adiada relative w-full bg-[#050505] py-24 md:py-32 border-t border-white/5 z-20"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <Revelar
            className="lg:w-1/2 flex flex-col"
          >
            <p className="text-xs font-bold text-zinc-400 tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
              <span className="w-12 h-px bg-zinc-700" /> Onde nos encontrar
            </p>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white uppercase leading-[1.1] mb-8">
              Boa Vista, <br />
              <span className="text-zinc-500">Curitiba.</span>
            </h2>

            <p className="text-zinc-400 font-light leading-relaxed mb-10 max-w-md">
              Estamos na {negocio.endereco.rua}, na Boa Vista — a poucos minutos
              do Bacacheri, Cabral, Ahú e Juvevê. Agende pelo Booksy ou passe
              por aqui.
            </p>

            <address className="not-italic flex flex-col gap-6">
              <a
                href={negocio.links.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <MapPin
                  size={20}
                  className="text-zinc-400 mt-1 group-hover:text-white transition-colors flex-shrink-0"
                />
                <span className="text-zinc-300 group-hover:text-white transition-colors font-light leading-relaxed">
                  {enderecoLinhaUnica}
                  <span className="flex items-center gap-1 text-xs uppercase tracking-widest text-zinc-400 mt-2">
                    Ver no Google Maps <ArrowUpRight className="w-3 h-3" />
                  </span>
                </span>
              </a>

              <a
                href={negocio.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <Phone
                  size={20}
                  className="text-zinc-400 group-hover:text-white transition-colors flex-shrink-0"
                />
                <span className="text-zinc-300 group-hover:text-white transition-colors font-light">
                  {negocio.telefone}
                </span>
              </a>
            </address>

            <a
              href={negocio.links.booksy}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 self-start px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-zinc-200 transition-colors"
            >
              Agendar no Booksy
            </a>
          </Revelar>

          <Revelar
            atraso={0.15}
            className="lg:w-1/2 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-8">
              <Clock size={18} className="text-zinc-400" />
              <h3 className="text-xs font-bold text-zinc-400 tracking-[0.3em] uppercase">
                Horário de funcionamento
              </h3>
            </div>

            <dl className="flex flex-col">
              {negocio.horarios.map((h) => (
                <div
                  key={h.dia}
                  className="flex items-center justify-between border-t border-white/5 py-4 text-zinc-400"
                >
                  <dt className="font-light">{h.rotulo}</dt>
                  <dd
                    className={`text-sm tracking-wide ${
                      h.abre ? "font-medium text-zinc-200" : "text-zinc-400"
                    }`}
                  >
                    {horarioLegivel(h)}
                  </dd>
                </div>
              ))}
              <div className="border-t border-white/5" />
            </dl>

            <p className="mt-8 text-xs text-zinc-400 font-light leading-relaxed">
              Horários sujeitos a alteração em feriados. A agenda em tempo real
              está sempre no Booksy.
            </p>
          </Revelar>
        </div>
      </div>
    </section>
  );
}
