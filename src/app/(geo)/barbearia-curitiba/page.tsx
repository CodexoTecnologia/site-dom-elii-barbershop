"use client";

import { motion } from "framer-motion";
import { PenLine } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0A0A0A] relative overflow-hidden">
      
      {/* BACKGROUND MESH */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 via-[#0A0A0A] to-[#0A0A0A]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-2 text-zinc-600 mb-4 uppercase tracking-[0.4em] text-[10px] font-black">
            <PenLine size={14} />
            <span>Engenharia Visual</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase mb-4">
            Em <span className="text-zinc-700">Construção.</span>
          </h1>

          <p className="text-zinc-500 text-sm font-light tracking-widest uppercase">
            Refinando o ritual. Voltamos em breve.
          </p>
        </motion.div>
      </div>

    </main>
  );
}