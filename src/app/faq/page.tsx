import type { Metadata } from "next";
import { FaqClient } from "./FaqClient";
import { JsonLd } from "@/components/JsonLd";
import { schemaBreadcrumb, schemaFaq } from "@/lib/schema";
import { criarMetadata } from "@/lib/seo";
import { faqData } from "@/data/faq";

export const metadata: Metadata = criarMetadata({
  titulo: "Perguntas Frequentes",
  descricao:
    "Endereço, horário de funcionamento, preços, formas de pagamento e agendamento da Dom Elii Barbershop, no Boa Vista, em Curitiba.",
  caminho: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={[
          schemaFaq(faqData),
          schemaBreadcrumb([
            { nome: "Início", caminho: "/" },
            { nome: "Perguntas Frequentes", caminho: "/faq" },
          ]),
        ]}
      />
      <FaqClient />
    </>
  );
}
