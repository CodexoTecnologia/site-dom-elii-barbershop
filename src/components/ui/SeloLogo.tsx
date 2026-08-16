import Image from "next/image";
import { negocio } from "@/data/negocio";

/**
 * Logo dentro de um anel de texto que gira devagar.
 *
 * Existe para ocupar o lado da história na página da barbearia sem gastar uma
 * foto: as do acervo já aparecem em outras seções, e repetir a mesma imagem
 * duas vezes na mesma página faz o site parecer menor do que é.
 *
 * Componente de servidor: nenhum JavaScript vai para o navegador. A volta é
 * uma animação de CSS puro (`.selo-anel`, em globals.css) — ver lá por que ela
 * praticamente não custa nada, e por que para sozinha para quem pediu menos
 * movimento no sistema.
 *
 * O anel é decorativo: fica escondido dos leitores de tela, que já encontram o
 * nome da barbearia no título da página e no texto ao lado.
 */
export function SeloLogo() {
  /*
   * Termina com espaços NÃO-QUEBRÁVEIS ( ), e não com espaço comum.
   *
   * O texto dá a volta e o fim encosta no começo. Espaço comum no fim da
   * linha é descartado na renderização, então a última bolinha grudava no "D"
   * de Dom. O não-quebrável não é descartado — e dois deles abrem a folga que
   * separa a emenda.
   */
  const volta = `${negocio.nome} • ${negocio.endereco.bairro} • ${negocio.endereco.cidade} •  `;

  /*
   * Raio do anel e a circunferência que ele descreve, nas unidades do
   * viewBox. O número entra em `textLength` logo abaixo.
   */
  const RAIO = 82;
  const CIRCUNFERENCIA = 2 * Math.PI * RAIO;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm">
      <svg
        viewBox="0 0 200 200"
        aria-hidden="true"
        className="selo-anel absolute inset-0 h-full w-full"
      >
        <defs>
          {/*
            Circunferência desenhada como dois semicírculos: é o jeito de ter
            um caminho fechado que o `textPath` percorre do começo ao fim.
          */}
          <path
            id="trilha-selo"
            fill="none"
            d={`M 100,100 m -${RAIO},0 a ${RAIO},${RAIO} 0 1,1 ${RAIO * 2},0 a ${RAIO},${RAIO} 0 1,1 -${RAIO * 2},0`}
          />
        </defs>

        {/*
          `textLength` com a circunferência exata é o que faz o texto fechar a
          volta certinho, em vez de sobrar pedaço de palavra no fim.

          Antes o texto ia repetido duas vezes, na esperança de cobrir o
          círculo: passava do fim do caminho e o navegador simplesmente cortava
          onde parasse — daí o "Boa" solto. Agora vai UMA vez, e
          `lengthAdjust="spacing"` distribui a diferença no espaço ENTRE as
          letras. Só o espaçamento muda; a forma dos glifos fica intacta, que é
          o que `spacing` garante e `spacingAndGlyphs` não.
        */}
        <text fill="currentColor" className="text-zinc-500" style={{ fontSize: "9px" }}>
          <textPath
            href="#trilha-selo"
            textLength={CIRCUNFERENCIA}
            lengthAdjust="spacing"
          >
            {volta}
          </textPath>
        </text>
      </svg>

      {/*
        O disco interno acompanha o anel de perto. Com folga grande a logo
        ficava perdida no meio do círculo, parecendo pequena demais para a
        moldura em volta dela.
      */}
      <div className="absolute inset-[11%] flex items-center justify-center rounded-full border border-white/10 bg-white/[0.02]">
        <Image
          src="/logo-dom-elii-transparent.png"
          /* Decorativa: o nome já está no texto ao lado e no título da página. */
          alt=""
          width={512}
          height={512}
          quality={75}
          sizes="(max-width: 1024px) 60vw, 22vw"
          className="h-auto w-[78%] opacity-90"
        />
      </div>
    </div>
  );
}
