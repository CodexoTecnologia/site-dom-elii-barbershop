import type { Metadata } from "next";
import { HomeClient } from "./HomeClient";
import { criarMetadata } from "@/lib/seo";
import { negocio } from "@/data/negocio";

export const metadata: Metadata = {
  ...criarMetadata({
    titulo: `Barbearia em Curitiba | ${negocio.nome} — Boa Vista`,
    descricao:
      "Barbearia em Curitiba, no bairro Boa Vista, atendendo toda a cidade. Corte, barba, sobrancelha, platinado e luzes. Veja os preços e agende o seu horário.",
    caminho: "/",
  }),
  // Home usa o título completo, sem o template "%s | Dom Elii Barbershop".
  title: {
    absolute: `Barbearia em Curitiba | ${negocio.nome} — Boa Vista`,
  },
};

export default function Home() {
  return <HomeClient />;
}
