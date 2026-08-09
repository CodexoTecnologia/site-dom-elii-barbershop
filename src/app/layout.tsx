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
    default: `${negocio.nome} | Barbearia Premium na Boa Vista, Curitiba`,
  },
  description: `Barbearia premium na Boa Vista, em Curitiba. Visagismo, degradê, barboterapia e estética masculina. Agende pelo Booksy. ${negocio.telefone}.`,
  applicationName: negocio.nome,
  authors: [{ name: negocio.nome, url: SITE_URL }],
  creator: negocio.nome,
  publisher: negocio.nome,
  keywords: [
    "barbearia curitiba",
    "barbearia boa vista curitiba",
    "barbearia bacacheri",
    "corte masculino curitiba",
    "degradê curitiba",
    "barboterapia curitiba",
    "visagismo masculino",
    "platinado masculino curitiba",
  ],
  category: "Barbearia",
  formatDetection: { telephone: true, address: true },
  openGraph: {
    type: "website",
    siteName: negocio.nome,
    locale: "pt_BR",
    url: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
