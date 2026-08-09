import type { Metadata } from "next";
import { ServicosClient } from "./ServicosClient";
import { JsonLd } from "@/components/JsonLd";
import { schemaBreadcrumb } from "@/lib/schema";
import { criarMetadata } from "@/lib/seo";
import { precoEmReais, precoMinimo } from "@/data/servicos";

export const metadata: Metadata = criarMetadata({
  titulo: "Preços de Barbearia em Curitiba",
  descricao: `Tabela de preços da Dom Elii Barbershop, em Curitiba: corte de cabelo a partir de ${precoEmReais(
    49.9
  )}, barba, platinado, luzes, sobrancelha e limpeza de pele desde ${precoEmReais(
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
