import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Clock, Star, ArrowUpRight } from "lucide-react";
import {
  negocio,
  enderecoLinhaUnica,
  avaliacoesAproximadas,
} from "@/data/negocio";
import { FundoHero } from "@/components/ui/FundoHero";
import { EquipeSection } from "@/components/sections/EquipeSection";
import { AgendaSemana } from "@/components/ui/AgendaSemana";
import { JsonLd } from "@/components/JsonLd";
import { schemaBreadcrumb } from "@/lib/schema";
import { criarMetadata } from "@/lib/seo";

/**
 * Landing geográfica — alvo do termo "barbearia em Curitiba" e variações de
 * bairro. Server Component puro: sem JavaScript de animação, todo o conteúdo
 * já vem no HTML.
 */
export const metadata: Metadata = criarMetadata({
  titulo: "Barbearia em Curitiba — Boa Vista, Bacacheri e Região",
  descricao:
    "Barbearia no Boa Vista, em Curitiba, atendendo clientes de toda a cidade. Corte, barba, sobrancelha e química masculina. Veja endereço, horários e preços.",
  caminho: "/barbearia-curitiba",
});

export default function BarbeariaCuritibaPage() {
  return (
    <>
      <JsonLd
        data={schemaBreadcrumb([
          { nome: "Início", caminho: "/" },
          { nome: "Barbearia em Curitiba", caminho: "/barbearia-curitiba" },
        ])}
      />

      <main className="flex min-h-screen flex-col bg-[#0A0A0A]">
        {/* HERO */}
        <section className="relative w-full pt-36 md:pt-44 pb-20 overflow-hidden">
          <FundoHero
            src="/corte-1.jpeg"
            alt="Atendimento na Dom Elii Barbershop, em Curitiba"
          />

          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white uppercase leading-[1.05] mb-8">
                  Barbearia em <br />
                  <span className="text-zinc-500">Curitiba.</span>
                </h1>

                <p className="text-zinc-300 text-lg font-light leading-relaxed mb-10">
                  Estamos na {negocio.endereco.rua},{" "}
                  {negocio.endereco.numero}, no bairro {negocio.endereco.bairro},
                  e recebemos clientes de toda Curitiba. São três barbeiros,
                  cada um com a sua especialidade, para cuidar do seu visual do
                  jeito que ele merece. Agende o seu horário ou passe por aqui.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={negocio.links.booksy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-zinc-200 transition-colors"
                  >
                    Agendar horário
                  </a>
                  <a
                    href={negocio.links.rota}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 border border-white/20 text-white text-xs font-bold uppercase tracking-[0.2em] rounded-sm hover:border-white/50 transition-colors flex items-center gap-2"
                  >
                    Traçar rota <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden border border-white/5 bg-zinc-900">
                  <Image
                    src="/barbearia-estacao-trabalho.jpeg"
                    alt="Cadeiras e estações de trabalho da Dom Elii Barbershop, no Boa Vista, em Curitiba"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NAP + HORÁRIOS */}
        <section className="w-full py-20 border-b border-white/5">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xs font-bold text-zinc-400 tracking-[0.3em] uppercase mb-6 flex items-center gap-3">
                <MapPin className="w-4 h-4" /> Endereço
              </h2>
              <address className="not-italic text-zinc-300 font-light leading-relaxed">
                {enderecoLinhaUnica}
                <br />
                <a
                  href={negocio.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-white hover:text-zinc-400 transition-colors"
                >
                  {negocio.telefone}
                </a>
              </address>
            </div>

            <div>
              <h2 className="text-xs font-bold text-zinc-400 tracking-[0.3em] uppercase mb-6 flex items-center gap-3">
                <Star className="w-4 h-4" /> Reputação
              </h2>
              <p className="text-4xl font-bold text-white tracking-tighter mb-2">
                {avaliacoesAproximadas(negocio.avaliacoes.quantidade)}
              </p>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">
                avaliações de clientes no Google, além das recebidas no
                Booksy.
              </p>
              <a
                href={negocio.links.booksy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-4 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
              >
                Ver avaliações <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </section>

        {/* AGENDA DA SEMANA */}
        <section className="w-full py-20 border-b border-white/5">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-xs font-bold text-zinc-400 tracking-[0.3em] uppercase mb-8 flex items-center gap-3">
              <Clock className="w-4 h-4" /> Horário de funcionamento
            </h2>

            <div className="max-w-3xl">
              <AgendaSemana />
              <p className="mt-6 text-xs text-zinc-400 font-light leading-relaxed">
                Horários podem mudar em feriados. A agenda em tempo real, com os
                horários que ainda estão livres, aparece na hora de agendar.
              </p>
            </div>
          </div>
        </section>

        {/* COMO CHEGAR */}
        <section className="w-full py-20 border-b border-white/5">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white uppercase mb-4">
              Como chegar
            </h2>
            <p className="text-zinc-400 font-light leading-relaxed max-w-2xl mb-10">
              Estamos na Rua Lodovico Geronazzo, 539, no Boa Vista, com vagas na
              via em frente. Toque no mapa para abrir a rota a partir de onde
              você está.
            </p>

            {/*
              `loading="lazy"` é essencial aqui: o mapa do Google carrega
              bastante script de terceiro, e sem isso ele entraria no
              carregamento inicial da página inteira.
            */}
            <div className="relative w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden rounded-sm border border-white/10 bg-zinc-900">
              <iframe
                src={negocio.mapaIncorporado}
                title="Mapa com a localização da Dom Elii Barbershop, no Boa Vista, em Curitiba"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>

            <a
              href={negocio.links.rota}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest border-b border-zinc-700 pb-1 hover:border-white transition-colors"
            >
              Traçar rota no Google Maps <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* A HISTÓRIA */}
        <section className="w-full py-20 border-b border-white/5">
          <div className="container mx-auto px-6 md:px-12 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white uppercase mb-10">
              Como tudo começou
            </h2>

            <div className="flex flex-col gap-6 text-zinc-300 font-light leading-relaxed">
              <p>
                A Dom Elii nasceu em {negocio.fundadaEm}, das mãos de Elias
                Filho. Antes de abrir a própria barbearia em Curitiba, ele veio
                do Norte do país e passou anos atrás da cadeira em outras casas,
                aprendendo com cada cliente que passou por ali.
              </p>
              <p>
                Foi nesse caminho que a técnica foi sendo lapidada e que uma
                ideia foi ficando clara: existia um jeito de atender que ele
                queria oferecer e que não cabia no espaço de mais ninguém. Um
                lugar onde o tempo de cada serviço fosse respeitado e onde o
                cliente saísse melhor do que entrou — não só no cabelo.
              </p>
              <p>
                Da decisão de fundar o próprio espaço até hoje, o que mudou foi
                o tamanho da equipe. O que não mudou foi o motivo: cuidar da
                aparência de alguém é cuidar de como essa pessoa vai se
                apresentar para o mundo no dia seguinte.
              </p>
            </div>
          </div>
        </section>

        {/* EQUIPE — mesmo componente da home, com as fotos dos barbeiros */}
        <EquipeSection />

        {/* CTA */}
        <section className="w-full py-24 text-center">
          <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white uppercase mb-6">
              Seu horário está a <span className="text-zinc-500">um toque.</span>
            </h2>
            <p className="text-zinc-400 font-light mb-10 max-w-lg">
              Escolha o serviço, o barbeiro e o horário direto na agenda.
            </p>
            <a
              href={negocio.links.booksy}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-zinc-200 transition-colors"
            >
              Agendar horário
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
