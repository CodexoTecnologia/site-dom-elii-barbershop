// Server Component de propósito: não há estado nem evento aqui, então nada
// deste arquivo precisa virar JavaScript no navegador.
import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
import { negocio, horarioLegivel } from "@/data/negocio";

/** lucide-react v1 removeu os ícones de marca — SVG inline, zero dependência. */
function IconeInstagram({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

/**
 * NAP (nome, endereço, telefone) tem que bater EXATAMENTE com o Google
 * Business Profile, o Booksy e o Instagram. Tudo vem de src/data/negocio.ts —
 * nunca escreva endereço ou telefone direto aqui.
 */
export function Footer() {
  return (
    <footer className="secao-adiada relative w-full bg-[#050505] pt-24 pb-12 border-t border-white/5 z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-20">
          {/* Marca */}
          <div className="md:col-span-4 flex flex-col">
            <p className="text-2xl font-bold tracking-tighter uppercase text-white mb-6">
              Dom Elii<span className="text-zinc-500">.</span>
            </p>
            <p className="text-zinc-400 font-light leading-relaxed max-w-sm mb-8">
              Barbearia de visagismo e estética masculina na Boa Vista, em
              Curitiba. Atendemos também Bacacheri, Cabral, Ahú e Juvevê.
            </p>
            <a
              href={negocio.links.booksy}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-b border-zinc-700 pb-1 text-sm font-bold uppercase tracking-widest text-zinc-300 hover:text-white hover:border-white transition-colors self-start"
            >
              Agendar no Booksy
            </a>
          </div>

          {/* Navegação */}
          <nav className="md:col-span-2 flex flex-col" aria-label="Rodapé">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-400 mb-6">
              Explore
            </p>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/"
                  className="text-zinc-400 hover:text-white transition-colors text-sm font-light"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="text-zinc-400 hover:text-white transition-colors text-sm font-light"
                >
                  Serviços e preços
                </Link>
              </li>
              <li>
                <Link
                  href="/barbearia-curitiba"
                  className="text-zinc-400 hover:text-white transition-colors text-sm font-light"
                >
                  A barbearia
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-zinc-400 hover:text-white transition-colors text-sm font-light"
                >
                  Editorial
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-zinc-400 hover:text-white transition-colors text-sm font-light"
                >
                  Dúvidas frequentes
                </Link>
              </li>
            </ul>
          </nav>

          {/* Horários */}
          <div className="md:col-span-3 flex flex-col">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-400 mb-6 flex items-center gap-2">
              <Clock size={14} /> Horários
            </p>
            <dl className="flex flex-col gap-2 text-sm">
              {negocio.horarios.map((h) => (
                <div key={h.dia} className="flex justify-between gap-4">
                  <dt className="text-zinc-400 font-light">{h.rotulo}</dt>
                  <dd
                    className={
                      h.abre ? "text-zinc-300 font-light" : "text-zinc-400 font-light"
                    }
                  >
                    {horarioLegivel(h)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Contato */}
          <div className="md:col-span-3 flex flex-col">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-400 mb-6">
              Contato e localização
            </p>

            <address className="not-italic flex flex-col gap-5">
              <a
                href={negocio.links.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <MapPin
                  size={18}
                  className="text-zinc-400 mt-1 group-hover:text-white transition-colors flex-shrink-0"
                />
                <span className="text-zinc-400 group-hover:text-white transition-colors text-sm font-light leading-relaxed">
                  {negocio.endereco.rua}, {negocio.endereco.numero}
                  <br />
                  {negocio.endereco.bairro} — {negocio.endereco.cidade},{" "}
                  {negocio.endereco.estado}
                  <br />
                  CEP: {negocio.endereco.cep}
                </span>
              </a>

              <a
                href={negocio.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <Phone
                  size={18}
                  className="text-zinc-400 group-hover:text-white transition-colors"
                />
                <span className="text-zinc-400 group-hover:text-white transition-colors text-sm font-light">
                  {negocio.telefone}
                </span>
              </a>

              <a
                href={negocio.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <IconeInstagram className="text-zinc-400 group-hover:text-white transition-colors" />
                <span className="text-zinc-400 group-hover:text-white transition-colors text-sm font-light">
                  {negocio.instagramHandle}
                </span>
              </a>
            </address>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-zinc-400 text-xs font-light text-center md:text-left">
            &copy; {new Date().getFullYear()} {negocio.nomeLegal}. Todos os
            direitos reservados.{" "}
            <Link
              href="/termos"
              className="text-zinc-300 hover:text-white transition-colors underline underline-offset-4"
            >
              Termos e privacidade
            </Link>
          </p>
          <a
            href="https://codexo.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 text-xs font-light hover:text-white transition-colors flex items-center gap-2"
          >
            Desenvolvido por{" "}
            <strong className="font-bold tracking-widest text-zinc-400 hover:text-white transition-colors">
              CODEXO.
            </strong>
          </a>
        </div>
      </div>
    </footer>
  );
}
