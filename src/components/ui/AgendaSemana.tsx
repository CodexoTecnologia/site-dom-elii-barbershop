"use client";

import { useSyncExternalStore } from "react";
import { negocio, horarioLegivel } from "@/data/negocio";

/** Janela do gráfico, em horas. Precisa cobrir o dia que abre mais cedo e o que fecha mais tarde. */
const INICIO = 8;
const FIM = 21;
const JANELA = FIM - INICIO;

/** "13:00" -> 13 ; "09:30" -> 9.5 */
function paraHoras(valor: string) {
  const [h, m] = valor.split(":").map(Number);
  return h + m / 60;
}

const MARCACOES = [9, 12, 15, 18, 21];

/**
 * Dia da semana no formato do schema.org, lido só no cliente.
 *
 * `useSyncExternalStore` com snapshot de servidor `null` é a forma correta de
 * ler algo que só existe no navegador: o HTML do servidor sai sem destaque
 * nenhum e o React preenche depois da hidratação, sem mismatch e sem
 * `setState` dentro de efeito.
 */
function useDiaAtual() {
  return useSyncExternalStore(
    () => () => {},
    () =>
      [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ][new Date().getDay()],
    () => null
  );
}

/**
 * Agenda da semana em régua: cada dia vira uma barra posicionada e
 * dimensionada pelo horário real, então a diferença entre os dias é visível
 * antes de ler qualquer número.
 *
 * Os horários continuam em texto ao lado da barra — a barra é `aria-hidden`,
 * porque para quem usa leitor de tela o que importa é "Segunda-feira, das
 * 13:00 às 20:00".
 */
export function AgendaSemana() {
  const diaAtual = useDiaAtual();

  return (
    <div className="w-full">
      {/* Régua de horas: some no celular, onde não há largura para ela. */}
      <div
        aria-hidden="true"
        className="hidden sm:grid grid-cols-[7rem_1fr] gap-4 mb-3"
      >
        <span />
        <div className="relative h-4">
          {MARCACOES.map((hora) => (
            <span
              key={hora}
              className="absolute top-0 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest text-zinc-500"
              style={{ left: `${((hora - INICIO) / JANELA) * 100}%` }}
            >
              {hora}h
            </span>
          ))}
        </div>
      </div>

      <dl className="flex flex-col">
        {negocio.horarios.map((h) => {
          const ehHoje = h.dia === diaAtual;
          const aberto = Boolean(h.abre && h.fecha);
          const inicio = aberto ? paraHoras(h.abre!) : 0;
          const fim = aberto ? paraHoras(h.fecha!) : 0;

          return (
            <div
              key={h.dia}
              className={`grid grid-cols-[5.5rem_1fr] sm:grid-cols-[7rem_1fr_7rem] items-center gap-3 sm:gap-4 border-t border-white/5 py-3 transition-colors ${
                ehHoje ? "bg-white/[0.03]" : ""
              }`}
            >
              <dt
                className={`text-sm font-light ${
                  ehHoje ? "text-white" : "text-zinc-400"
                }`}
              >
                {h.rotulo}
                {ehHoje && (
                  <span className="ml-2 text-[9px] font-bold uppercase tracking-[0.2em] text-amber-100/80">
                    hoje
                  </span>
                )}
              </dt>

              {/* Trilho da barra */}
              <div
                aria-hidden="true"
                className="relative h-2 rounded-full bg-white/[0.06] overflow-hidden"
              >
                {aberto && (
                  <span
                    className={`absolute inset-y-0 rounded-full ${
                      ehHoje ? "bg-amber-100/80" : "bg-zinc-500"
                    }`}
                    style={{
                      left: `${((inicio - INICIO) / JANELA) * 100}%`,
                      width: `${((fim - inicio) / JANELA) * 100}%`,
                    }}
                  />
                )}
              </div>

              <dd
                className={`col-span-2 sm:col-span-1 text-sm sm:text-right tracking-wide ${
                  aberto
                    ? ehHoje
                      ? "text-white font-medium"
                      : "text-zinc-300"
                    : "text-zinc-500"
                }`}
              >
                {horarioLegivel(h)}
              </dd>
            </div>
          );
        })}
        <div className="border-t border-white/5" />
      </dl>
    </div>
  );
}
