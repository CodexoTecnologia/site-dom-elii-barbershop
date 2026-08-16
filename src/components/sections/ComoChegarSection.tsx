import { ArrowUpRight } from "lucide-react";
import { Revelar } from "@/components/ui/Revelar";
import { MapaLocal } from "@/components/ui/MapaLocal";
import { negocio, enderecoLinhaUnica } from "@/data/negocio";

/**
 * "Como chegar" da home.
 *
 * Fica no fim da página de propósito: é a última dúvida que sobra depois de
 * preço, equipe e avaliação — e a única que decide entre agendar e desistir
 * quando a pessoa não conhece o bairro.
 *
 * O endereço aparece em texto, e não só dentro do mapa. O que está dentro do
 * iframe pertence ao Google: não é lido como conteúdo desta página, não é
 * copiável e some se o mapa falhar. Repetir o endereço aqui, igual ao que
 * está no Google Meu Negócio, é o que reforça o sinal de negócio local.
 *
 * Componente de servidor: nada aqui vira JavaScript no navegador.
 */
export function ComoChegarSection() {
  return (
    <section
      id="como-chegar"
      className="secao-adiada w-full bg-[#0A0A0A] py-24 md:py-32 border-t border-white/5 z-20"
    >
      <div className="container mx-auto px-6 md:px-12">
        <Revelar className="flex flex-col mb-10 max-w-2xl">
          <p className="text-xs font-bold text-zinc-400 tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
            <span className="w-12 h-px bg-zinc-700" /> Onde estamos
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white uppercase leading-[1.1] mb-6">
            Como <br className="hidden md:block" />
            <span className="text-zinc-500">chegar.</span>
          </h2>

          <p className="text-zinc-400 font-light leading-relaxed">
            {enderecoLinhaUnica}, com vagas na via em frente. Toque no mapa para
            abrir a rota a partir de onde você está.
          </p>
        </Revelar>

        <Revelar atraso={0.1}>
          <MapaLocal className="aspect-[4/3] md:aspect-[21/9]" />
        </Revelar>

        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
          <a
            href={negocio.links.rota}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest border-b border-zinc-700 pb-1 hover:border-white transition-colors"
          >
            Traçar rota no Google Maps
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href={`tel:${negocio.telefoneE164}`}
            className="inline-flex items-center gap-2 text-xs font-bold text-zinc-300 uppercase tracking-widest border-b border-zinc-800 pb-1 hover:text-white hover:border-white transition-colors"
          >
            Ligar {negocio.telefone}
          </a>
        </div>
      </div>
    </section>
  );
}
