import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import {
  artigosBlog,
  encontrarArtigo,
  dataLegivel,
  type BlocoConteudo,
} from "@/data/artigos";
import { negocio } from "@/data/negocio";
import { JsonLd } from "@/components/JsonLd";
import { schemaArtigo, schemaBreadcrumb } from "@/lib/schema";
import { criarMetadata } from "@/lib/seo";
import { slugify } from "@/lib/slug";
import { IndiceArtigo } from "@/components/ui/IndiceArtigo";
import { montarIndice } from "@/lib/indice";

type Props = { params: Promise<{ slug: string }> };

/** Pré-renderiza todos os artigos no build — HTML pronto para o crawler. */
export function generateStaticParams() {
  return artigosBlog.map((artigo) => ({ slug: artigo.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const artigo = encontrarArtigo(slug);

  if (!artigo) return { title: "Artigo não encontrado" };

  return criarMetadata({
    titulo: artigo.tituloSeo ?? artigo.titulo,
    descricao: artigo.resumo,
    caminho: `/blog/${artigo.slug}`,
    imagem: artigo.imagem,
    imagemAlt: artigo.imagemAlt,
    tipo: "article",
    publicadoEm: artigo.publicadoEm,
    autor: artigo.autor,
  });
}

function Bloco({ bloco }: { bloco: BlocoConteudo }) {
  switch (bloco.tipo) {
    case "h2":
      return (
        // scroll-mt compensa a navbar fixa quando se chega pelo índice
        <h2
          id={slugify(bloco.texto)}
          className="scroll-mt-28 text-2xl md:text-3xl font-bold text-white uppercase tracking-tight mt-14 mb-5"
        >
          {bloco.texto}
        </h2>
      );
    case "h3":
      return (
        <h3
          id={slugify(bloco.texto)}
          className="scroll-mt-28 text-xl font-bold text-zinc-200 tracking-tight mt-10 mb-4"
        >
          {bloco.texto}
        </h3>
      );
    case "ul":
      return (
        <ul className="flex flex-col gap-3 mb-6 pl-1">
          {bloco.itens.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-zinc-300 font-light leading-relaxed"
            >
              <span aria-hidden="true" className="text-zinc-400 mt-1">
                —
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "imagem":
      return (
        <figure className="my-10 -mx-6 md:mx-0">
          <div className="relative aspect-[4/3] md:aspect-[16/9] overflow-hidden md:rounded-sm border-y md:border border-white/10 bg-zinc-900">
            <Image
              src={bloco.src}
              alt={bloco.alt}
              fill
              quality={65}
              // Sem `priority`: imagem no meio do texto só carrega ao chegar nela.
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
          {bloco.legenda && (
            <figcaption className="mt-3 px-6 md:px-0 text-xs text-zinc-400 font-light">
              {bloco.legenda}
            </figcaption>
          )}
        </figure>
      );
    case "destaque":
      return (
        <aside className="my-10 border border-white/10 bg-zinc-900/40 rounded-sm p-6 md:p-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-100/80 mb-3">
            {bloco.titulo}
          </p>
          <p className="text-zinc-300 font-light leading-relaxed">
            {bloco.texto}
          </p>
        </aside>
      );
    case "citacao":
      return (
        <blockquote className="my-10 border-l-2 border-zinc-700 pl-6 py-2 text-xl text-zinc-200 font-medium italic leading-relaxed">
          {bloco.texto}
        </blockquote>
      );
    default:
      return (
        <p className="text-zinc-300 font-light leading-relaxed mb-6 text-base md:text-lg">
          {bloco.texto}
        </p>
      );
  }
}

export default async function ArtigoPage({ params }: Props) {
  const { slug } = await params;
  const artigo = encontrarArtigo(slug);

  if (!artigo) notFound();

  const relacionados = artigosBlog.filter((a) => a.slug !== artigo.slug).slice(0, 2);

  const indice = montarIndice(artigo.conteudo);

  return (
    <>
      <JsonLd
        data={[
          schemaArtigo(artigo),
          schemaBreadcrumb([
            { nome: "Início", caminho: "/" },
            { nome: "Editorial", caminho: "/blog" },
            { nome: artigo.titulo, caminho: `/blog/${artigo.slug}` },
          ]),
        ]}
      />

      <main className="flex min-h-screen flex-col bg-[#0A0A0A]">
        <article className="w-full pt-40 md:pt-48 pb-24">
          <div className="container mx-auto px-6 md:px-12">
            <header className="max-w-3xl mb-12">
              <p className="text-xs font-bold text-zinc-400 tracking-[0.3em] uppercase mb-6">
                {artigo.categoria}
              </p>

              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white leading-[1.1] mb-6">
                {artigo.titulo}
              </h1>

              <p className="text-zinc-400 text-lg font-light leading-relaxed mb-8">
                {artigo.resumo}
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-bold uppercase tracking-widest text-zinc-400 border-t border-white/10 pt-6">
                <span className="text-zinc-300">Por {artigo.autor}</span>
                <time dateTime={artigo.publicadoEm}>
                  {dataLegivel(artigo.publicadoEm)}
                </time>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {artigo.tempoLeitura} de leitura
                </span>
              </div>
            </header>

            <div className="relative w-full aspect-video max-w-4xl mb-14 overflow-hidden rounded-sm border border-white/5 bg-zinc-900">
              <Image
                src={artigo.imagem}
                alt={artigo.imagemAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
            </div>

            <div className="grid lg:grid-cols-[16rem_minmax(0,1fr)] gap-10 lg:gap-16">
              <aside className="lg:order-1">
                <IndiceArtigo itens={indice} />
              </aside>

              <div className="max-w-3xl lg:order-2">
                {artigo.conteudo.map((bloco, i) => (
                  <Bloco key={i} bloco={bloco} />
                ))}
              </div>
            </div>

            {/* CTA — todo artigo termina levando para o Booksy. */}
            <aside className="max-w-3xl mt-16 border border-white/10 bg-zinc-900/40 rounded-sm p-8 md:p-10">
              <p className="text-xs font-bold text-zinc-400 tracking-[0.3em] uppercase mb-4">
                Dom Elii Barbershop · Boa Vista, Curitiba
              </p>
              <p className="text-2xl md:text-3xl font-bold tracking-tighter text-white uppercase mb-4">
                Quer aplicar isso no seu visual?
              </p>
              <p className="text-zinc-400 font-light leading-relaxed mb-8">
                Agende com um dos nossos barbeiros e traga este artigo como
                ponto de partida da conversa.
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
                <Link
                  href="/servicos"
                  className="px-8 py-4 border border-white/20 text-white text-xs font-bold uppercase tracking-[0.2em] rounded-sm hover:border-white/50 transition-colors"
                >
                  Ver preços
                </Link>
              </div>
            </aside>
          </div>
        </article>

        {/* Links internos entre artigos — distribui autoridade dentro do blog. */}
        <section className="w-full border-t border-white/5 py-20">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex items-center justify-between mb-10 border-b border-white/10 pb-4">
              <h2 className="text-xl font-bold text-white uppercase tracking-tight">
                Continue lendo
              </h2>
              <Link
                href="/blog"
                className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Todos os artigos
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {relacionados.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="group flex flex-col"
                >
                  <div className="relative w-full aspect-video mb-5 overflow-hidden rounded-sm bg-zinc-900 border border-white/5">
                    <Image
                      src={rel.imagem}
                      alt={rel.imagemAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-2">
                    {rel.categoria}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-snug group-hover:text-zinc-400 transition-colors flex items-start gap-2">
                    {rel.titulo}
                    <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
