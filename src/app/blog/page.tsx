import type { Metadata } from "next";
import { BlogClient } from "./BlogClient";
import { JsonLd } from "@/components/JsonLd";
import { schemaBlog, schemaBreadcrumb } from "@/lib/schema";
import { criarMetadata } from "@/lib/seo";

export const metadata: Metadata = criarMetadata({
  titulo: "Editorial",
  descricao:
    "Artigos sobre visagismo masculino, cortes, barba e cuidados pós-química, escritos pelos barbeiros da Dom Elii Barbershop, em Curitiba.",
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
