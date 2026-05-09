import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dom Elii Barbershop | Barbearia Premium no Bacacheri, Curitiba",
  description: "Precisão em cada milímetro. Estética contemporânea e uma experiência de grooming inesquecível no coração de Curitiba. Agende seu horário.",
  keywords: ["barbearia curitiba", "corte masculino", "barbearia bacacheri", "fade", "barbearia premium"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-[#0A0A0A] text-white antialiased selection:bg-zinc-800 selection:text-white`}>
        <Navbar />
        <ScrollIndicator /> {/* ELEMENTO CRIATIVO AQUI */}
        <div className="min-h-screen flex flex-col"> 
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}