import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { JsonLd } from "@/components/JsonLd";
import { schemaNegocio, schemaWebSite } from "@/lib/schema";
import { negocio, SITE_URL } from "@/data/negocio";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    // Páginas internas viram "Serviços | Dom Elii Barbershop"
    template: `%s | ${negocio.nome}`,
    default: `Barbearia em Curitiba | ${negocio.nome} — Boa Vista`,
  },
  description: `Barbearia em Curitiba, no bairro Boa Vista. Corte, barba, sobrancelha e química masculina. Atendemos toda a cidade. Agende o seu horário. ${negocio.telefone}.`,
  applicationName: negocio.nome,
  authors: [{ name: negocio.nome }],
  creator: negocio.nome,
  publisher: negocio.nome,
  category: "Barbearia",
  /*
   * Duas versões do favicon. Ele aparece sobre o fundo da ABA do navegador,
   * não sobre o site: em tema claro a aba é branca e a logo branca sumiria;
   * em tema escuro acontece o inverso com a preta.
   *
   * Declarado aqui, e não pelos arquivos `icon.png`/`apple-icon.png` em
   * app/, porque a convenção de arquivo não permite `media`.
   *
   * Os arquivos saem de `node scripts/gera-icones.mjs`.
   */
  icons: {
    icon: [
      /*
       * O PRIMEIRO não tem `media` de propósito: é o que o Google lê para
       * montar o ícone ao lado do resultado de busca. Ele ignora media
       * queries e, se todos os ícones tiverem uma, mostra o globo genérico.
       *
       * É a logo preta porque o Google desenha o favicon sobre um círculo
       * branco — a versão branca sumiria ali. Serve também para abas de
       * navegador em tema claro.
       *
       * 192px porque o Google só aceita quadrados com lado múltiplo de 48.
       */
      { url: "/icon-claro.png", type: "image/png", sizes: "192x192" },
      {
        url: "/icon-escuro.png",
        type: "image/png",
        sizes: "192x192",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/apple-icon.png",
  },
  formatDetection: { telephone: true, address: true },
  openGraph: {
    type: "website",
    siteName: negocio.nome,
    locale: "pt_BR",
    url: SITE_URL,
  },
  /*
     * `max-image-preview: large` é o que libera a miniatura grande no
     * resultado de busca — importante para negócio visual. Declarado no
     * `robots` geral, e não só no googleBot, para valer também no Bing.
     */
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} bg-[#0A0A0A] text-white antialiased selection:bg-zinc-800 selection:text-white`}
      >
        {/* Entidade do negócio + site. Presente em todas as páginas. */}
        <JsonLd data={[schemaNegocio(), schemaWebSite()]} />

        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:rounded-sm"
        >
          Pular para o conteúdo
        </a>

        <Navbar />
        <ScrollIndicator />
        <div id="conteudo" className="min-h-screen flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
