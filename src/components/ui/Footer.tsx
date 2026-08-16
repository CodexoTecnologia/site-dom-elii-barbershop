// Server Component de propósito: não há estado nem evento aqui, então nada
// deste arquivo precisa virar JavaScript no navegador.
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
import { IconeInstagram } from "@/components/ui/IconeInstagram";
import {
  negocio,
  horarioLegivel,
  clientesEmTexto,
  listaEmTexto,
} from "@/data/negocio";

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
            {/*
              Curto de propósito: a lista de serviços e a forma de agendar
              ficam no texto do fim do rodapé. Repetir as duas coisas aqui
              deixava os dois blocos quase idênticos na mesma tela.

              Marcos que só crescem. Nota e contagem de avaliação ficam de
              fora: caem de uma semana para outra e transformariam o rodapé —
              que aparece em toda página — em texto falso sem ninguém notar.
            */}
            <p className="text-zinc-400 font-light leading-relaxed max-w-sm mb-8">
              Barbearia no {negocio.endereco.bairro}, em{" "}
              {negocio.endereco.cidade}, desde {negocio.fundadaEm}. Mais de{" "}
              {clientesEmTexto(negocio.clientesAtendidos)} clientes atendidos e
              uma das mais bem avaliadas do bairro.
            </p>
            <a
              href={negocio.links.booksy}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-b border-zinc-700 pb-1 text-sm font-bold uppercase tracking-widest text-zinc-300 hover:text-white hover:border-white transition-colors self-start"
            >
              Agendar horário
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
              Contato
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

        {/*
          Descrição do negócio, em texto corrido.

          Aparece em toda página, e é justamente por isso que precisa ser
          contida: rodapé repetido tem peso baixo na busca, e amontoar bairro e
          serviço aqui não engana ninguém — vira o que o Google trata como
          texto de preenchimento. O que de fato pesa é o endereço e o telefone
          idênticos aos do Google Meu Negócio, logo acima, e os links internos.

          Então isto aqui é o que um humano leria sem estranhar: onde fica, o
          que faz e como agendar. A fundação e os números ficam no bloco da
          marca, acima — dizer as duas coisas nos dois lugares deixava o
          rodapé com cara de texto colado duas vezes.

          Os bairros vêm de `areasAtendidas`, cortados nos SEIS PRIMEIROS: são
          os que fazem fronteira com o ponto e aparecem no mapa em volta dele.
          Citar bairro distante enfraquece a associação com os que importam, e
          a frase vira lista de palavra-chave.
        */}
        <div className="pt-8 border-t border-white/5 mb-8">
          <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-4xl">
            A {negocio.nome} fica na {negocio.endereco.rua},{" "}
            {negocio.endereco.numero}, no {negocio.endereco.bairro}, a poucos
            minutos de {listaEmTexto(negocio.areasAtendidas.slice(1, 7))}.
            Fazemos corte de cabelo, degradê, barba na navalha com toalha no
            vapor, sobrancelha, platinado, luzes e freestyle — com hora marcada
            pelo Booksy ou por ordem de chegada, quando há horário livre na
            agenda do dia.
          </p>
        </div>

        {/*
          `id` é o alvo que o botão flutuante de agendar observa para sair da
          frente (ver components/ui/ScrollIndicator.tsx). Renomear aqui sem
          renomear lá faz o botão voltar a cobrir a assinatura da Codexo.
        */}
        <div
          id="rodape-creditos"
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4"
        >
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
            className="group flex items-center gap-3 text-zinc-400 text-xs font-light hover:text-white transition-colors"
          >
            <span>Desenvolvido por</span>
            <Image
              src="/logo_codexo_nome_branco.svg"
              alt="Codexo"
              width={92}
              height={33}
              // SVG não passa pelo otimizador do Next; servido como está fica
              // mais leve e nítido em qualquer densidade de tela.
              unoptimized
              className="h-5 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
