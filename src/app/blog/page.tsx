"use client";

import { useState } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Search, PenLine } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { artigosBlog } from "@/data/artigos";

const containerReveal: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function BlogPage() {
  const [termoPesquisa, setTermoPesquisa] = useState("");

  const artigosFiltrados = artigosBlog.filter((artigo) => {
    const textoBusca = termoPesquisa.toLowerCase();
    return (
      artigo.titulo.toLowerCase().includes(textoBusca) ||
      artigo.resumo.toLowerCase().includes(textoBusca) ||
      artigo.categoria.toLowerCase().includes(textoBusca)
    );
  });

  // Variável booleana para saber se estamos no "Modo Busca"
  const isSearchMode = termoPesquisa.length > 0;

  return (
    <main className="flex min-h-screen flex-col bg-[#0A0A0A] relative overflow-hidden">
      
      {/* BACKGROUND ANIMADO */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-[#0A0A0A] to-[#0A0A0A]" />
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

      {/* HERO DO BLOG DINÂMICA */}
      {/* Se estiver no modo busca, diminuímos o padding top violentamente para subir o layout */}
      <motion.section 
        layout 
        className="relative w-full z-10 flex flex-col justify-between"
        animate={{ paddingTop: isSearchMode ? "120px" : "140px", paddingBottom: "16px" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="container mx-auto px-6 md:px-12 flex-grow">
          <motion.div layout className="flex flex-col items-center text-center max-w-3xl mx-auto">
            
            {/* Bloco de Texto (Some quando digita) */}
            <motion.div 
              animate={{ 
                height: isSearchMode ? 0 : "auto", 
                opacity: isSearchMode ? 0 : 1,
                scale: isSearchMode ? 0.9 : 1
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden flex flex-col items-center"
            >
              <div className="flex items-center gap-2 text-zinc-500 mb-6 mt-4">
                <PenLine className="w-4 h-4" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase">
                  Editorial Dom Elii Barbershop • Bacacheri, Curitiba
                </span>
              </div>

              {/* H1 Semântico para os Robôs do Google (Invisível na tela) */}
            <h1 className="sr-only">
              Blog Dom Elii Barbershop - Dicas de Barbearia, Visagismo e Estética Masculina no Bacacheri, Curitiba
            </h1>

            {/* Título Visual Artístico (Ignorado pelos leitores de tela para evitar duplicidade) */}
            <motion.div 
              aria-hidden="true" 
              variants={itemReveal} 
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white uppercase mb-6 leading-[1.1]"
            >
              O Diário da <br className="hidden md:block" />
              <span className="text-zinc-600">Precisão.</span>
            </motion.div>
              
              <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed mb-8 max-w-xl">
                Artigos, dicas de visagismo e tendências de estética masculina, com a assinatura de excelência em Curitiba.
              </p>
            </motion.div>

            {/* Barra de Pesquisa (Permanece) */}
            <motion.div layout className="relative w-full max-w-xl group z-20">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-white text-zinc-500">
                <Search className="h-5 w-5" />
              </div>
              <input
                type="text"
                value={termoPesquisa}
                onChange={(e) => setTermoPesquisa(e.target.value)}
                className="w-full bg-zinc-900/30 backdrop-blur-md border border-white/10 text-white rounded-sm py-4 pl-12 pr-4 focus:outline-none focus:border-zinc-400 focus:bg-zinc-900/80 transition-all placeholder:text-zinc-600 shadow-2xl"
                placeholder="Pesquisar por cortes, barba, dicas..."
              />
            </motion.div>

            {/* Scroll Indicator (Some quando digita) */}
            <motion.div 
              animate={{ 
                height: isSearchMode ? 0 : "auto", 
                opacity: isSearchMode ? 0 : 1,
                marginTop: isSearchMode ? 0 : 32
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden flex flex-col items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-3">
                Explore Abaixo
              </span>
              <div className="w-[1px] h-8 bg-white/10 relative overflow-hidden">
                <motion.div
                  className="w-full h-1/2 bg-zinc-400"
                  animate={{ y: ["-100%", "200%"] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                />
              </div>
            </motion.div>

          </motion.div>
        </div>
      </motion.section>

      {/* GRID DE RESULTADOS (Sobe acompanhando a barra) */}
      <motion.section layout className="pt-4 pb-24 z-10 relative border-t border-white/5 bg-[#0A0A0A] min-h-[50vh]">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-4 gap-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-tight">
              {termoPesquisa ? `Resultados para "${termoPesquisa}"` : "Últimas Publicações"}
            </h2>
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em]">
              {artigosFiltrados.length} ARTIGO{artigosFiltrados.length !== 1 ? 'S' : ''}
            </span>
          </div>

          {artigosFiltrados.length > 0 ? (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {artigosFiltrados.map((artigo, index) => (
                <motion.article
                  layout
                  key={artigo.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer flex flex-col"
                >
                  {/* AJUSTE 1: mb-6 para garantir respiro sólido entre a imagem e o título */}
                  <div className="relative w-full aspect-video mb-6 overflow-hidden rounded-sm bg-zinc-900 border border-white/5">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    
                    {artigo.imagem ? (
                      <img 
                        src={artigo.imagem} 
                        alt={artigo.titulo}
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out grayscale group-hover:grayscale-0"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-950" />
                    )}

                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-black/80 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm border border-white/10">
                        {artigo.categoria}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col flex-grow">
                    {/* AJUSTE 2: Título restaurado para text-lg/xl para hierarquia correta */}
                    <h2 className="text-lg md:text-xl font-bold text-white leading-snug mb-3 group-hover:text-zinc-400 transition-colors line-clamp-2">
                      {artigo.titulo}
                    </h2>
                    {/* AJUSTE 3: Resumo rebaixado visualmente (text-sm, fonte leve) */}
                    <p className="text-zinc-400 font-light text-xs md:text-sm leading-relaxed mb-6 line-clamp-2">
                      {artigo.resumo}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                    <span className="text-zinc-500 text-[11px] font-bold uppercase tracking-widest">
                      {artigo.data}
                    </span>
                    <div className="flex items-center gap-1.5 text-zinc-500">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      <span className="text-zinc-500 text-[11px] font-bold uppercase tracking-widest">{artigo.tempoLeitura}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <Search className="w-12 h-12 text-zinc-700 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-2">Nenhum artigo encontrado.</h3>
              <p className="text-zinc-500">Não encontramos resultados para "{termoPesquisa}". Tente outros termos.</p>
            </motion.div>
          )}
        </div>
      </motion.section>
    </main>
  );
}