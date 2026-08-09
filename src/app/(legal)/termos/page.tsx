import type { Metadata } from "next";
import { negocio, enderecoLinhaUnica } from "@/data/negocio";
import { criarMetadata } from "@/lib/seo";

/**
 * Página legal. `naoIndexar` mantém a página acessível ao usuário, mas fora
 * do índice — conteúdo jurídico não traz tráfego e dilui a relevância do site.
 */
export const metadata: Metadata = criarMetadata({
  titulo: "Termos de Uso e Política de Privacidade",
  descricao:
    "Termos de uso do site e política de privacidade da Dom Elii Barbershop, em Curitiba.",
  caminho: "/termos",
  naoIndexar: true,
});

const atualizadoEm = "8 de agosto de 2026";

export default function TermosPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0A0A0A]">
      <section className="w-full pt-36 md:pt-44 pb-24">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white uppercase leading-[1.1] mb-4">
            Termos de Uso e <span className="text-zinc-500">Privacidade.</span>
          </h1>

          <p className="text-zinc-400 text-sm font-light mb-14">
            Última atualização: {atualizadoEm}
          </p>

          <div className="flex flex-col gap-10 text-zinc-300 font-light leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white uppercase tracking-tight mb-4">
                1. Quem somos
              </h2>
              <p>
                Este site é mantido pela {negocio.nomeLegal}, barbearia com
                endereço em {enderecoLinhaUnica}. Contato: {negocio.telefone}.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white uppercase tracking-tight mb-4">
                2. Uso do site
              </h2>
              <p>
                O conteúdo aqui é informativo. Preços, horários e serviços podem
                mudar sem aviso: vale sempre o que estiver no Booksy no momento
                da reserva.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white uppercase tracking-tight mb-4">
                3. Agendamentos e pagamentos
              </h2>
              <p>
                Os agendamentos são processados pela plataforma Booksy, que
                possui termos e política de privacidade próprios. A{" "}
                {negocio.nomeLegal} não armazena dados de cartão de crédito em
                seus sistemas. Cancelamentos e remarcações devem ser feitos pelo
                próprio Booksy ou pelo WhatsApp da barbearia.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white uppercase tracking-tight mb-4">
                4. Dados pessoais (LGPD)
              </h2>
              <p>
                Este site não possui formulários de cadastro e não coleta dados
                pessoais diretamente. Ao clicar em links de agendamento,
                WhatsApp ou redes sociais, você é direcionado a serviços de
                terceiros, que passam a tratar seus dados conforme as próprias
                políticas.
              </p>
              <p className="mt-4">
                Nos termos da Lei nº 13.709/2018 (LGPD), você pode solicitar
                informações sobre o tratamento dos seus dados pela barbearia
                pelo telefone {negocio.telefone}.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white uppercase tracking-tight mb-4">
                5. Serviços de estética e química
              </h2>
              <p>
                Procedimentos químicos como platinado, luzes, alisamento e
                pigmentação dependem de avaliação prévia do cabelo. A barbearia
                pode recusar a execução quando houver risco à integridade do fio
                ou do couro cabeludo. Resultados variam conforme o histórico
                químico de cada cliente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white uppercase tracking-tight mb-4">
                6. Propriedade intelectual
              </h2>
              <p>
                Textos, fotografias, vídeos, marca e identidade visual
                apresentados neste site pertencem à {negocio.nomeLegal} e não
                podem ser reproduzidos sem autorização por escrito.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white uppercase tracking-tight mb-4">
                7. Contato
              </h2>
              <p>
                Dúvidas sobre estes termos podem ser enviadas pelo WhatsApp{" "}
                <a
                  href={negocio.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white border-b border-zinc-700 hover:border-white transition-colors"
                >
                  {negocio.telefone}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
