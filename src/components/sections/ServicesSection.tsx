"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// Categorização dos serviços vindos do Booksy com Copys refinadas (Padrão Codexo)
const menuServicos = [
  {
    categoria: "Rituais & Combos",
    servicos: [
      { titulo: "O Ritual Completo", subtitulo: "Cabelo, Barba & Sobrancelha", descricao: "A experiência máxima. Alinhamento capilar, barboterapia completa e design facial.", imagem: "" },
      { titulo: "Cabelo & Barba", subtitulo: "O Clássico Indispensável", descricao: "Corte premium alinhado à barboterapia com toalha no vapor para relaxamento total.", imagem: "" },
      { titulo: "Corte & Sobrancelha", subtitulo: "A Moldura do Rosto", descricao: "Corte de cabelo com visagismo e design de sobrancelha na navalha.", imagem: "" },
      { titulo: "Corte & Freestyle", subtitulo: "Arte no Cabelo", descricao: "Corte alinhado ao desenvolvimento de desenhos exclusivos (freestyle).", imagem: "" },
    ]
  },
  {
    categoria: "Corte & Barba",
    servicos: [
      { titulo: "Corte de Cabelo", subtitulo: "Degradê, Social ou Tesoura", descricao: "Execução impecável de acordo com o seu perfil, estrutura óssea e estilo.", imagem: "" },
      { titulo: "Barboterapia", subtitulo: "Com toalha no vapor", descricao: "Hidratação, óleos essenciais e alinhamento na navalha com toalha quente.", imagem: "" },
      { titulo: "Só Máquina", subtitulo: "Praticidade Premium", descricao: "Corte executado integralmente na máquina, mantendo o acabamento de alto nível.", imagem: "" },
      { titulo: "Freestyle", subtitulo: "Apenas Desenho", descricao: "Criação de arte, linhas e padrões exclusivos feitos à navalha.", imagem: "" },
    ]
  },
  {
    categoria: "Química & Estética",
    servicos: [
      { titulo: "Platinado", subtitulo: "Branco ou Cinza", descricao: "Descoloração avançada para o platinado perfeito, preservando a saúde do fio.", imagem: "" },
      { titulo: "Luzes", subtitulo: "Iluminação", descricao: "Técnica de mechas para criar contraste e modernidade no seu visual.", imagem: "" },
      { titulo: "Alisamento Capilar", subtitulo: "Rápido e Eficaz", descricao: "Procedimento rápido (5 a 10 min) para um cabelo perfeitamente liso e alinhado.", imagem: "" },
      { titulo: "Pigmentação", subtitulo: "Cabelo ou Barba", descricao: "Retoque de cor, cobertura de fios brancos ou realce de contornos escuros.", imagem: "" },
      { titulo: "Limpeza de Pele", subtitulo: "Renovação Facial", descricao: "Remoção de impurezas, cravos e oleosidade para um rosto revitalizado.", imagem: "" },
      { titulo: "Hidratação Capilar", subtitulo: "Saúde dos Fios", descricao: "Reposição profunda de nutrientes para cabelos secos ou quimicamente tratados.", imagem: "" },
    ]
  },
  {
    categoria: "Acabamentos Minuciosos",
    servicos: [
      { titulo: "Sobrancelha", subtitulo: "Design na navalha", descricao: "Limpeza e desenho geométrico para valorizar o peso do seu olhar.", imagem: "" },
      { titulo: "Pezinho", subtitulo: "Alinhamento de Nuca", descricao: "Acabamento simétrico perfeito na linha do pescoço e costeletas.", imagem: "" },
      { titulo: "Acabamento da Barba", subtitulo: "Contornos", descricao: "Apenas o desenho limpo e o alinhamento das linhas externas da barba.", imagem: "" },
    ]
  }
];

export function ServicesSection() {
  return (
    <section id="servicos" className="w-full bg-[#0A0A0A] pt-24 pb-32 z-20 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Cabeçalho de SEO e UX */}
        <div className="flex flex-col mb-20 text-center md:text-left">
          <h3 className="text-xs font-bold text-zinc-500 tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
            <span className="w-12 h-px bg-zinc-700"></span> Catálogo
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white uppercase leading-[1.1]">
            Nossos <br className="hidden md:block" />
            <span className="text-zinc-600">Serviços.</span>
          </h2>
          <p className="mt-6 text-zinc-400 font-light max-w-lg mx-auto md:mx-0">
            Da manutenção rápida à transformação completa. Escolha o seu ritual e finalize o agendamento diretamente na nossa plataforma.
          </p>
        </div>

        {/* Iteração das Categorias */}
        <div className="space-y-24">
          {menuServicos.map((bloco, indexCategoria) => (
            <div key={indexCategoria} className="flex flex-col">
              
              {/* Título da Categoria */}
              <div className="border-b border-white/10 pb-4 mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight">
                  {bloco.categoria}
                </h3>
              </div>

              {/* Grid Interativa de Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {bloco.servicos.map((servico, indexServico) => (
                  <motion.a
                    href="https://booksy.com" // Link real do booksy depois
                    target="_blank"
                    rel="noopener noreferrer"
                    key={indexServico}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: indexServico * 0.1 }}
                    // O "group" é o segredo do hover animado no Tailwind
                    className="relative block h-[280px] rounded-sm overflow-hidden group cursor-pointer border border-white/5 hover:border-white/20 transition-colors bg-zinc-900/50"
                  >
                    
                    {/* Placeholder para a Foto (Zoom no hover) */}
                    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                      {servico.imagem ? (
                        <Image 
                          src={servico.imagem} 
                          alt={servico.titulo} 
                          fill 
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-60 group-hover:opacity-40"
                        />
                      ) : (
                        // Fallback: Gradiente elegante se não tiver foto
                        <div className="w-full h-full bg-gradient-to-br from-zinc-800/20 to-zinc-900/80 transition-transform duration-700 group-hover:scale-105" />
                      )}
                    </div>

                    {/* Fundo escurecendo no hover para ler o texto */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-colors duration-500 z-10" />

                    {/* Conteúdo do Card */}
                    <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                      
                      {/* Subtítulo (Sempre visível) */}
                      <span className="text-zinc-400 text-xs font-bold tracking-widest uppercase mb-2">
                        {servico.subtitulo}
                      </span>
                      
                      {/* Título Principal */}
                      <h4 className="text-2xl font-bold text-white uppercase tracking-tight mb-2 group-hover:-translate-y-2 transition-transform duration-500">
                        {servico.titulo}
                      </h4>
                      
                      {/* Descrição Oculta (Aparece deslizando no Hover) */}
                      <div className="overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                        <p className="text-zinc-300 font-light text-sm leading-relaxed mb-4">
                          {servico.descricao}
                        </p>
                        
                        {/* Botão Call to Action */}
                        <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest">
                          Agendar no Booksy <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                      
                    </div>
                  </motion.a>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}