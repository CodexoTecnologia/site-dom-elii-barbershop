import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  /** Escurecimento sobre a foto, 0 a 100. Mais alto = texto mais legível. */
  escurecer?: number;
};

/*
 * Sobre a borda inferior: nada de `border-b` aqui nem na seção que usa este
 * componente. Uma borda de 1px sobre um degradê que termina exatamente na cor
 * de fundo vira um risco claro visível no celular, por arredondamento de
 * subpixel. O fechamento é feito só pelo degradê.
 */

/**
 * Foto de fundo das heros internas, escurecida e com um zoom bem lento.
 *
 * O zoom é `transform: scale` em CSS puro (ver `.zoom-lento` em globals.css):
 * roda na GPU, não dispara layout e não custa JavaScript. `prefers-reduced-
 * motion` congela a animação junto com as demais.
 *
 * A imagem é `priority` porque está acima da dobra e é o elemento LCP da
 * página. `quality={65}` porque ela vive atrás de um overlay escuro.
 */
export function FundoHero({ src, alt, escurecer = 84 }: Props) {
  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        quality={65}
        sizes="100vw"
        className="zoom-lento object-cover"
      />
      <div
        className="absolute inset-0 bg-[#0A0A0A]"
        style={{ opacity: escurecer / 100 }}
      />
      {/*
        O degradê termina em preto sólido nos últimos 25% da altura, para a
        emenda com a próxima seção não ter transição visível.
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-transparent to-[#0A0A0A] to-75%" />
      {/* Faixa sólida no pé, cobrindo qualquer sobra de arredondamento. */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-[#0A0A0A]" />
    </div>
  );
}
