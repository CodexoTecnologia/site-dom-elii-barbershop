"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { negocio } from "@/data/negocio";

/** Navegação principal. Rótulo = o que o usuário procura, não metáfora. */
const navegacao = [
  { href: "/servicos", rotulo: "Serviços e Preços" },
  { href: "/barbearia-curitiba", rotulo: "A Barbearia" },
  { href: "/blog", rotulo: "Editorial" },
  { href: "/faq", rotulo: "FAQ" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // O menu mobile fecha no onClick de cada link — nada de setState em efeito.
  const compacto = isScrolled || isMobileMenuOpen;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        compacto
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-white/10 py-4 md:py-5"
          : "bg-transparent py-6 md:py-8"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link
          href="/"
          aria-label="Dom Elii Barbershop — página inicial"
          className={cn(
            "relative z-50 flex items-center transition-all duration-500",
            compacto ? "w-12 md:w-16 h-12 md:h-16" : "w-16 md:w-32 h-10"
          )}
        >
          <div
            className={cn(
              "absolute left-0 transition-all duration-500 ease-in-out",
              compacto
                ? "top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16"
                : "-top-1 md:-top-4 w-24 h-24 md:w-44 md:h-44 origin-top-left drop-shadow-2xl"
            )}
          >
            <Image
              src="/logo-dom-elii-transparent.png"
              alt="Logo da Dom Elii Barbershop, barbearia em Curitiba"
              fill
              priority
              sizes="(max-width: 768px) 96px, 176px"
              className="object-contain"
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Principal">
          {navegacao.map((item) => {
            const ativo = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={ativo ? "page" : undefined}
                className={cn(
                  "text-sm font-medium transition-colors",
                  ativo ? "text-white" : "text-zinc-300 hover:text-white"
                )}
              >
                {item.rotulo}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex">
          <a
            href={negocio.links.booksy}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-200 transition-colors"
          >
            Agendar
          </a>
        </div>

        <button
          type="button"
          className="md:hidden text-white"
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5 px-6 py-8 flex flex-col gap-6 shadow-2xl"
          >
            {navegacao.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className="text-lg font-medium text-zinc-300 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.rotulo}
              </Link>
            ))}

            <a
              href={negocio.links.booksy}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-4 bg-white text-black text-center text-sm tracking-widest uppercase font-bold rounded-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Agendar no Booksy
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
