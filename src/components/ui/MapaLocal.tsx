import { negocio } from "@/data/negocio";

/**
 * Mapa incorporado do Google com a localização da barbearia.
 *
 * Está num componente só porque aparece em mais de uma página, e os detalhes
 * que importam são fáceis de esquecer ao copiar:
 *
 *   - `loading="lazy"` é o principal. O mapa do Google puxa bastante script de
 *     terceiro; sem isso, ele entra no carregamento inicial da página e
 *     atrasa tudo que o visitante realmente veio ver.
 *   - `title` é o que o leitor de tela anuncia ao chegar no quadro. Sem ele, o
 *     anúncio é "iframe", que não diz nada.
 *   - `referrerPolicy` evita mandar o endereço completo da página ao Google.
 *
 * O endereço do mapa vem de src/data/negocio.ts, gerado em
 * "Compartilhar > Incorporar" no Google Maps.
 */
export function MapaLocal({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-sm border border-white/10 bg-zinc-900 ${className}`}
    >
      <iframe
        src={negocio.mapaIncorporado}
        title={`Mapa com a localização da ${negocio.nome}, no ${negocio.endereco.bairro}, em ${negocio.endereco.cidade}`}
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
