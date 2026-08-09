import { ImageResponse } from "next/og";
import { negocio, enderecoLinhaUnica } from "@/data/negocio";

/**
 * Preview de compartilhamento (WhatsApp, Instagram, Google, X).
 * Gerado no build — nenhuma imagem precisa ser mantida à mão.
 * Vale para todas as rotas que não definirem a sua própria.
 */
export const alt = `${negocio.nome} — barbearia em Curitiba, na Boa Vista`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0A",
          padding: "72px",
          color: "#FFFFFF",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: "#71717A",
              fontWeight: 700,
            }}
          >
            {negocio.endereco.bairro} · {negocio.endereco.cidade} —{" "}
            {negocio.endereco.estado}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 800,
              letterSpacing: -3,
              textTransform: "uppercase",
              lineHeight: 1,
            }}
          >
            Dom Elii
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 800,
              letterSpacing: -3,
              textTransform: "uppercase",
              lineHeight: 1,
              color: "#52525B",
            }}
          >
            Barbershop
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 32,
              color: "#A1A1AA",
            }}
          >
            {negocio.slogan}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid #27272A",
            paddingTop: 28,
            fontSize: 24,
            color: "#71717A",
          }}
        >
          <div style={{ display: "flex" }}>{enderecoLinhaUnica}</div>
          <div style={{ display: "flex", color: "#FFFFFF", fontWeight: 700 }}>
            domelii.com.br
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
