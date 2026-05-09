"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efeito para detectar o scroll e adicionar o fundo translúcido
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        // A MÁGICA: Se rolou a tela OU se o menu está aberto, a barra fica preta
        (isScrolled || isMobileMenuOpen) 
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-white/10 py-4 md:py-5" 
          : "bg-transparent py-6 md:py-8"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo / Brand Premium */}
        <Link 
          href="/" 
          className={cn(
            "relative z-50 flex items-center transition-all duration-500",
            // A logo também encolhe se o menu abrir
            (isScrolled || isMobileMenuOpen) ? "w-12 md:w-16 h-12 md:h-16" : "w-16 md:w-32 h-10"
          )}
        >
          <div 
            className={cn(
              "absolute left-0 transition-all duration-500 ease-in-out group-hover:scale-105",
              (isScrolled || isMobileMenuOpen)
                ? "top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16" 
                : "-top-1 md:-top-4 w-24 h-24 md:w-44 md:h-44 origin-top-left drop-shadow-2xl" 
            )}
          >
            <Image 
              src="/logo-dom-elii-transparent.png" 
              alt="Logo Dom Elii Barbershop Curitiba" 
              fill 
              priority 
              className="object-contain" 
            />
          </div>
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/servicos" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
            A Experiência
          </Link>
          <Link href="/barbearia-curitiba" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
            O Espaço
          </Link>
          <Link href="/blog" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
            Editorial
          </Link>
        </nav>

        {/* CTA Desktop */}
        <div className="hidden md:flex">
          <a 
            href="https://booksy.com/pt-br/311640_dom-elii-barbershop_barbearias_583853_curitiba#site" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-200 transition-colors"
          >
            Reservar Cadeira
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile Premium (Animação Suave + Cores Unificadas) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }} // Começa invisível e um pouco mais para cima
            animate={{ opacity: 1, y: 0 }}   // Desce suavemente e aparece
            exit={{ opacity: 0, y: -10 }}    // Quando fecha, sobe e some
            transition={{ duration: 0.4, ease: "easeInOut" }} // Duração ajustada para ficar mais "lento e luxuoso"
            // Cores ajustadas: Mesmo bg-[#0A0A0A]/95 e backdrop-blur-md da barra principal para fundir perfeitamente
            className="md:hidden absolute top-full left-0 right-0 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5 px-6 py-8 flex flex-col gap-6 shadow-2xl"
          >
            <Link 
              href="/servicos" 
              className="text-lg font-medium text-zinc-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)} // Fecha o menu ao clicar
            >
              A Experiência
            </Link>
            <Link 
              href="/barbearia-curitiba" 
              className="text-lg font-medium text-zinc-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              O Espaço
            </Link>
            <Link 
              href="/blog" 
              className="text-lg font-medium text-zinc-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Editorial
            </Link>
            
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://booksy.com/pt-br/311640_dom-elii-barbershop_barbearias_583853_curitiba#site" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 px-6 py-4 bg-white text-black text-center text-sm tracking-widest uppercase font-bold rounded-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reservar Cadeira
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}