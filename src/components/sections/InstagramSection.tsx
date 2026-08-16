import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import { IconeInstagram } from "@/components/ui/IconeInstagram";
import { Revelar } from "@/components/ui/Revelar";
import { vitrineAtiva, publicacoesInstagram } from "@/data/instagram";
import { negocio } from "@/data/negocio";

/**
 * Vitrine do Instagram.
 *
 * Componente de servidor: não tem estado nem evento, então não precisa ir
 * como JavaScript para o navegador. As publicações são escolhidas em
 * src/data/instagram.ts — ver lá o motivo de não puxar direto da Meta.
 *
 * Fica perto do fim da página de propósito. O destino do site é o
 * agendamento; o Instagram é saída, e saída boa é a que acontece depois de a
 * pessoa já ter visto preço, equipe e avaliação.
 */
export function InstagramSection() {
  if (!vitrineAtiva || publicacoesInstagram.length === 0) return null;

  return (
    <section
      id="instagram"
      className="secao-adiada w-full bg-[#0A0A0A] py-24 md:py-32 border-t border-white/5 z-20"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col mb-12 max-w-2xl">
          <p className="text-xs font-bold text-zinc-400 tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
            <span className="w-12 h-px bg-zinc-700" /> Instagram
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white uppercase leading-[1.1] mb-6">
            O trabalho <br className="hidden md:block" />
            <span className="text-zinc-500">de perto.</span>
          </h2>

          <p className="text-zinc-400 font-light leading-relaxed">
            Cortes, barba e o dia a dia da barbearia, direto do nosso
            Instagram. Toque para abrir a publicação.
          </p>
        </div>

        {/*
          Faixa de seis no desktop; duas colunas no celular, para a capa não
          virar selo ilegível. Cada item leva à SUA publicação — por isso o
          endereço vem do item, e não do perfil.
        */}
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {publicacoesInstagram.map((post, index) => (
            <Revelar as="li" key={post.src} atraso={(index % 3) * 0.08}>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                /*
                  3:4 e não o 9:16 original: seis reels inteiros deixariam a
                  faixa alta demais. É o mesmo recorte da grade do perfil no
                  Instagram, então a capa aparece como a pessoa já conhece.
                */
                className="group relative block aspect-[3/4] overflow-hidden rounded-sm border border-white/10 bg-zinc-900 transition-colors hover:border-white/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  quality={65}
                  /*
                    Sem `priority`: a seção fica no fim da página e nada aqui
                    pode competir com o carregamento da primeira tela.
                    O `sizes` evita que o celular baixe a versão de desktop.
                  */
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/*
                  Play sempre visível em vídeo, como no próprio Instagram: no
                  celular não existe hover, e é ele que diz que ali tem
                  movimento, não foto parada.
                */}
                {post.video && (
                  <span className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm">
                    <Play
                      aria-hidden="true"
                      className="h-3 w-3 fill-white text-white"
                    />
                  </span>
                )}

                {/*
                  O mesmo ícone central nos dois casos. No toque ele fica
                  sempre visível, porque hover não existe ali e nada mais
                  diria que a capa abre a publicação; com mouse, volta a
                  aparecer só ao passar por cima.

                  O critério é `pointer-fine` (mouse ou caneta), e não largura
                  de tela: notebook pequeno tem cursor, tablet grande não tem.
                  Visível é o padrão — se o navegador não souber responder à
                  consulta, mostrar a pista é o erro mais barato.

                  A sombra existe porque o ícone é branco e, sem o
                  escurecimento do hover, ele sumiria sobre capa clara.
                */}
                <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/50 transition-colors">
                  <IconeInstagram className="w-7 h-7 text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] opacity-100 transition-opacity pointer-fine:opacity-0 pointer-fine:group-hover:opacity-100" />
                </span>
              </a>
            </Revelar>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <a
            href={negocio.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 border border-white/20 hover:border-white/40 rounded-sm px-7 py-4 text-xs font-bold text-white uppercase tracking-widest transition-colors"
          >
            <IconeInstagram className="w-4 h-4" />
            Seguir {negocio.instagramHandle}
            <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </div>
      </div>
    </section>
  );
}
