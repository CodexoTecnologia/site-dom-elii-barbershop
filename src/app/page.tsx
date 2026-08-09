import type { Metadata } from "next";
import { HomeClient } from "./HomeClient";
import { criarMetadata } from "@/lib/seo";
import { negocio } from "@/data/negocio";

export const metadata: Metadata = {
  ...criarMetadata({
    titulo: `${negocio.nome} | Barbearia Premium na Boa Vista, Curitiba`,
    descricao:
      "Barbearia premium na Boa Vista, em Curitiba. Visagismo, degradê, barboterapia e platinado, a minutos do Bacacheri. Agende seu horário pelo Booksy.",
    caminho: "/",
  }),
  // Home usa o título completo, sem o template "%s | Dom Elii Barbershop".
  title: {
    absolute: `${negocio.nome} | Barbearia Premium na Boa Vista, Curitiba`,
  },
};

export default function Home() {
  return <HomeClient />;
}
