"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Scissors } from "lucide-react";

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll();

  // Suaviza a animação do círculo para não ficar "dura" quando o usuário para de rolar
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transforma o progresso de 0 a 1 em uma porcentagem para a borda do SVG (strokeDashoffset)
  const pathLength = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex items-center justify-center">
      
      {/* Botão interativo que engloba tudo */}
      <a 
        href="https://booksy.com/pt-br/311640_dom-elii-barbershop_barbearias_583853_curitiba#site" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-black/40 backdrop-blur-md border border-white/5 shadow-2xl hover:bg-white transition-colors duration-500"
        aria-label="Agendar Horário"
      >
        {/* SVG do Anel de Progresso */}
        <svg 
          className="absolute inset-0 w-full h-full transform -rotate-90 pointer-events-none" 
          viewBox="0 0 100 100"
        >
          {/* Círculo de fundo escuro */}
          <circle 
            cx="50" cy="50" r="46" 
            className="stroke-zinc-800/50" 
            strokeWidth="2" 
            fill="none" 
          />
          {/* Círculo de progresso animado pelo Framer Motion */}
          <motion.circle 
            cx="50" cy="50" r="46" 
            className="stroke-white group-hover:stroke-black transition-colors duration-500" 
            strokeWidth="4" 
            fill="none" 
            strokeLinecap="round"
            style={{ pathLength }} // A mágica acontece aqui
          />
        </svg>

        {/* Ícone no centro que muda de cor no Hover */}
        <Scissors 
          className="text-white group-hover:text-black transition-colors duration-500 z-10" 
          size={20} 
        />
        
        {/* Tooltip elegante que aparece ao passar o mouse */}
        <span className="absolute right-full mr-4 px-3 py-1.5 bg-white text-black text-xs font-bold tracking-widest uppercase rounded-sm opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
          Reservar Cadeira
        </span>
      </a>

    </div>
  );
}