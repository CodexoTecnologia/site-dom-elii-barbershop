"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative w-full bg-[#050505] pt-24 pb-12 border-t border-white/5 z-20">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-20">
          
          {/* Coluna 1: Brand & Manifesto (Ocupa 5 colunas no Desktop) */}
          <div className="md:col-span-5 flex flex-col">
            <h3 className="text-2xl font-bold tracking-tighter uppercase text-white mb-6">
              Dom Elii<span className="text-zinc-600">.</span>
            </h3>
            <p className="text-zinc-500 font-light leading-relaxed max-w-sm mb-8">
              Elevando a estética masculina no Bacacheri, Curitiba. Mais que uma barbearia, um santuário de visagismo, precisão e estilo.
            </p>
            <a 
              href="https://booksy.com/pt-br/311640_dom-elii-barbershop_barbearias_583853_curitiba#site" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block border-b border-zinc-700 pb-1 text-sm font-bold uppercase tracking-widest text-zinc-300 hover:text-white hover:border-white transition-colors self-start"
            >
              Agendar Horário
            </a>
          </div>

          {/* Coluna 2: Navegação Rápida (Ocupa 3 colunas) */}
          <div className="md:col-span-3 flex flex-col">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-600 mb-6">Explore</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white transition-colors text-sm font-light">A Experiência</Link>
              </li>
              <li>
                <Link href="/espaco" className="text-zinc-400 hover:text-white transition-colors text-sm font-light">O Espaço</Link>
              </li>
              <li>
                <Link href="/servicos" className="text-zinc-400 hover:text-white transition-colors text-sm font-light">Curadoria de Serviços</Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contato & GEO SEO (Ocupa 4 colunas) */}
          <div className="md:col-span-4 flex flex-col">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-600 mb-6">Contato & Localização</h4>
            
            {/* Tag Address Semântica para SEO Local */}
            <address className="not-italic flex flex-col gap-5">
              <a href="https://maps.google.com/..." target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                <MapPin size={18} className="text-zinc-600 mt-1 group-hover:text-white transition-colors flex-shrink-0" />
                <span className="text-zinc-400 group-hover:text-white transition-colors text-sm font-light leading-relaxed">
                  Rua Exemplo do Endereço, 123<br />
                  Bacacheri - Curitiba, PR<br />
                  CEP: 80000-000
                </span>
              </a>

              <a href="https://wa.me/5541999999999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <Phone size={18} className="text-zinc-600 group-hover:text-white transition-colors" />
                <span className="text-zinc-400 group-hover:text-white transition-colors text-sm font-light">(41) 99999-9999</span>
              </a>

              {/* Bloco do Instagram com SVG Nativo (Zero Dependências) */}
              <a href="https://instagram.com/domelii" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group mt-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-zinc-600 group-hover:text-white transition-colors"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                <span className="text-zinc-400 group-hover:text-white transition-colors text-sm font-light">@domelii.barbershop</span>
              </a>
            </address>
          </div>

        </div>

        {/* Linha Inferior: Copyright & Assinatura Codexo */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-zinc-600 text-xs font-light">
            &copy; {new Date().getFullYear()} Dom Elii Barbershop. Todos os direitos reservados.
          </p>
          <a href="https://codexo.com.br" target="_blank" rel="noopener noreferrer" className="text-zinc-600 text-xs font-light hover:text-white transition-colors flex items-center gap-2">
            Desenvolvido por <strong className="font-bold tracking-widest text-zinc-500 hover:text-white transition-colors">CODEXO.</strong>
          </a>
        </div>

      </div>
    </footer>
  );
}