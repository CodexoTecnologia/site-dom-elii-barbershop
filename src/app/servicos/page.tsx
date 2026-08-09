import type { Metadata } from "next";
import { ServicosClient } from "./ServicosClient";
import { JsonLd } from "@/components/JsonLd";
import { schemaBreadcrumb } from "@/lib/schema";
import { criarMetadata } from "@/lib/seo";
import { precoMinimo } from "@/data/servicos";

const formatarBRL = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export const metadata: Metadata = criarMetadata({
  titulo: "Serviços e Preços",
  descricao: `Tabela de preços da Dom Elii Barbershop, em Curitiba: corte de cabelo a partir de ${formatarBRL(
    49.9
  )}, barba, platinado, luzes, sobrancelha e limpeza de pele desde ${formatarBRL(
    precoMinimo
  )}. Agende pelo Booksy.`,
  caminho: "/servicos",
});

export default function ServicosPage() {
  return (
    <>
      <JsonLd
        data={schemaBreadcrumb([
          { nome: "Início", caminho: "/" },
          { nome: "Serviços e Preços", caminho: "/servicos" },
        ])}
      />
      <ServicosClient />
    </>
  );
}
