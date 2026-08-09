import type { Metadata } from "next";
import { BlogClient } from "./BlogClient";
import { JsonLd } from "@/components/JsonLd";
import { schemaBlog, schemaBreadcrumb } from "@/lib/schema";
import { criarMetadata } from "@/lib/seo";

export const metadata: Metadata = criarMetadata({
  titulo: "Dicas de Corte, Barba e Cuidados Masculinos",
  descricao:
    "Quanto custa cortar cabelo em Curitiba, como escolher o corte para o seu rosto, cuidados com barba e química. Escrito pelos barbeiros da Dom Elii.",
  caminho: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={[
          schemaBlog(),
          schemaBreadcrumb([
            { nome: "Início", caminho: "/" },
            { nome: "Editorial", caminho: "/blog" },
          ]),
        ]}
      />
      <BlogClient />
    </>
  );
}
