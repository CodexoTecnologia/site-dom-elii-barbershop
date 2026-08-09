import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Star, ArrowUpRight } from "lucide-react";
import {
  negocio,
  enderecoLinhaUnica,
  horarioLegivel,
} from "@/data/negocio";
import { equipeData } from "@/data/equipe";
import { catalogoServicos, precoFormatado } from "@/data/servicos";
import { FundoHero } from "@/components/ui/FundoHero";
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
    "Barbearia na Boa Vista, em Curitiba, atendendo clientes de toda a cidade. Corte, barba, sobrancelha e química masculina. Veja endereço, horários e preços.",
  caminho: "/barbearia-curitiba",
});

const destaques = catalogoServicos
  .flatMap((c) => c.servicos)
  .filter((s) =>
    [
      "corte-de-cabelo",
      "cabelo-e-barba",
      "cabelo-barba-e-sobrancelha",
      "barba",
      "platinado",
      "sobrancelha",
    ].includes(s.slug)
  );

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
            src="/barbearia-estacao-trabalho.jpeg"
            alt="Interior da Dom Elii Barbershop, na Boa Vista, em Curitiba"
          />

          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase leading-[1.05] mb-8">
                  Barbearia em <br />
                  <span className="text-zinc-500">Curitiba.</span>
                </h1>

                <p className="text-zinc-300 text-lg font-light leading-relaxed mb-10">
                  A Dom Elii Barbershop fica na {negocio.endereco.rua},{" "}
                  {negocio.endereco.numero}, no bairro {negocio.endereco.bairro}.
                  Atendemos clientes de toda Curitiba, com três barbeiros para
                  você escolher. Agende pelo Booksy ou passe por aqui.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={negocio.links.booksy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-zinc-200 transition-colors"
                  >
                    Agendar no Booksy
                  </a>
                  <a
                    href={negocio.links.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 border border-white/20 text-white text-xs font-bold uppercase tracking-[0.2em] rounded-sm hover:border-white/50 transition-colors flex items-center gap-2"
                  >
                    Como chegar <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden border border-white/5 bg-zinc-900">
                  <Image
                    src="/fachada-dom-elii.png"
                    alt="Fachada da Dom Elii Barbershop na Rua Lodovico Geronazzo, Boa Vista, Curitiba"
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
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
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
                <Clock className="w-4 h-4" /> Horários
              </h2>
              <dl className="flex flex-col gap-2 text-sm">
                {negocio.horarios.map((h) => (
                  <div key={h.dia} className="flex justify-between gap-4">
                    <dt className="text-zinc-400 font-light">{h.rotulo}</dt>
                    <dd
                      className={
                        h.abre ? "text-zinc-200" : "text-zinc-400"
                      }
                    >
                      {horarioLegivel(h)}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h2 className="text-xs font-bold text-zinc-400 tracking-[0.3em] uppercase mb-6 flex items-center gap-3">
                <Star className="w-4 h-4" /> Reputação
              </h2>
              <p className="text-4xl font-bold text-white tracking-tighter mb-2">
                {negocio.avaliacoes.nota.toFixed(1).replace(".", ",")}
              </p>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">
                {negocio.avaliacoes.quantidade} avaliações de clientes no{" "}
                {negocio.avaliacoes.fonte}.
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

        {/* COMO CHEGAR POR BAIRRO */}
        <section className="w-full py-20 border-b border-white/5">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white uppercase mb-4">
              Como chegar
            </h2>
            <p className="text-zinc-400 font-light leading-relaxed max-w-2xl mb-12">
              Estamos na Rua Lodovico Geronazzo, 539, na Boa Vista, com vagas
              na via em frente. Veja o caminho a partir do seu bairro.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div className="border-t border-white/10 pt-6">
                <h3 className="text-white font-bold uppercase tracking-tight mb-3">
                  Quem vem do Bacacheri
                </h3>
                <p className="text-zinc-400 font-light text-sm leading-relaxed">
                  A Boa Vista faz divisa com o Bacacheri, então o trajeto leva
                  poucos minutos de carro. É a opção mais próxima para quem mora
                  perto do Parque Bacacheri.
                </p>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h3 className="text-white font-bold uppercase tracking-tight mb-3">
                  Quem vem do Cabral e do Juvevê
                </h3>
                <p className="text-zinc-400 font-light text-sm leading-relaxed">
                  Acesso pela Avenida Paraná, sentido norte. É o caminho de quem
                  sai do trabalho no centro e pega horário no fim da tarde.
                </p>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h3 className="text-white font-bold uppercase tracking-tight mb-3">
                  Quem vem do Ahú e do Alto da Glória
                </h3>
                <p className="text-zinc-400 font-light text-sm leading-relaxed">
                  São poucos quilômetros. O meio da tarde costuma ter o trânsito
                  mais tranquilo nesse trecho.
                </p>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h3 className="text-white font-bold uppercase tracking-tight mb-3">
                  Quem vem de Santa Cândida
                </h3>
                <p className="text-zinc-400 font-light text-sm leading-relaxed">
                  A Boa Vista fica no caminho de quem desce para o centro. Muita
                  gente da região agenda no início da manhã.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVIÇOS EM DESTAQUE */}
        <section className="w-full py-20 border-b border-white/5">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white uppercase mb-10">
              Serviços mais procurados
            </h2>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
              {destaques.map((servico) => (
                <li
                  key={servico.slug}
                  className="flex items-baseline justify-between gap-6 border-b border-white/5 py-4"
                >
                  <span className="text-zinc-200 font-light">
                    {servico.titulo}
                  </span>
                  <span className="text-white font-bold text-sm whitespace-nowrap">
                    {precoFormatado(servico)}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/servicos"
              className="inline-block mt-10 text-xs font-bold text-white uppercase tracking-widest border-b border-zinc-700 pb-1 hover:border-white transition-colors"
            >
              Ver tabela completa de preços
            </Link>
          </div>
        </section>

        {/* EQUIPE */}
        <section className="w-full py-20 border-b border-white/5">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white uppercase mb-10">
              Quem vai te atender
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {equipeData.map((membro) => (
                <div key={membro.id} className="border-t border-white/10 pt-6">
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-1">
                    {membro.nome}
                  </h3>
                  <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4">
                    {membro.cargo}
                  </p>
                  <p className="text-zinc-400 font-light text-sm leading-relaxed">
                    {membro.descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

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
              Agendar no Booksy
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
