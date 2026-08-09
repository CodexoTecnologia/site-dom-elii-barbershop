# Plano editorial do blog — Dom Elii Barbershop

Base: AnswerThePublic e People Also Ask para "barbearia em curitiba" (09/08/2026).
Cada artigo é um arquivo em `src/data/artigos/`, registrado em
`src/data/artigos/index.ts`. A URL, a metadata e o schema `BlogPosting` são
gerados a partir dele.

---

## Filtro aplicado nas palavras-chave

Nem todo volume é cliente. O que foi **descartado** e por quê:

| Termo | Volume | Por que não |
|---|---|---|
| curso de barbearia em curitiba | 320 | Quem quer ser barbeiro, não cortar cabelo |
| barbearia goldman / mão santa / os comparsas | 210 / 140 / 70 | Busca por concorrente específico |
| qual o salário de um barbeiro CLT | — | Intenção profissional |
| quantos cortes um barbeiro faz por dia | — | Intenção profissional |
| barbearia a venda em curitiba | 10 | Quem quer comprar um negócio |
| onde cortar o cabelo de graça em curitiba | — | Nunca vai agendar um serviço pago |
| barbearia que abre domingo em curitiba | — | **A Dom Elii fecha domingo.** Ranquear aqui traz visita frustrada e sinal ruim para o Google |
| o que a Bíblia diz sobre barbeiro | — | Sem relação comercial |

O que **sobrou como alvo real**, por prioridade:

| Termo | Volume | Onde é atacado |
|---|---|---|
| barbearia em curitiba | 4.400 | Home (H1) + `/barbearia-curitiba` |
| barbearia premium curitiba | 140 | Home + página geo |
| barbearia em curitiba pr | 50 | Página geo |
| produtos para barbearia em curitiba | 20 | Seção de produtos + pauta 5 |
| barbearia em curitiba centro | 10 | Não perseguir: bairro errado, seria enganoso |
| barbearia aberta hoje em curitiba | 10 | Horários visíveis em HTML no rodapé |
| barbearia com visagismo em curitiba | baixo | Artigo já publicado + pauta 4 |
| quanto um barbeiro cobra | PAA | FAQ + pauta 1 |
| como saber se o cabeleireiro é bom | PAA | FAQ + pauta 2 |

**Leitura honesta do cenário:** "barbearia em curitiba" tem 4.400 buscas/mês,
mas o topo é dominado por agregadores e redes com anos de domínio. O caminho
que dá retorno em meses, e não em anos, é a soma de bairro + serviço + preço,
que tem volume menor e intenção de agendar muito mais alta. O tráfego de
4.400/mês é meta de longo prazo; o dinheiro entra pelas caudas longas.

---

## Publicados (11 artigos)

| Artigo | Alvo | Categoria |
|---|---|---|
| Quanto custa cortar o cabelo em Curitiba | "quanto um barbeiro cobra" (PAA) | Preços |
| Como saber se o barbeiro é bom | "como saber se o cabeleireiro é bom" (PAA) | Barbearia |
| Degradê masculino: tipos de fade | degradê / fade masculino | Cortes |
| Pomada, cera ou pó: qual usar | "produtos para barbearia em curitiba" | Produtos |
| De quanto em quanto tempo voltar à barbearia | recorrência, cauda longa | Rotina |
| Como cuidar do cabelo em casa | caspa, oleosidade, rotina masculina | Cuidados |
| Barba falhada: o que dá para resolver | barba falhada / preencher falhas | Barba |
| Sobrancelha masculina: o que esperar | sobrancelha masculina design | Cuidados |
| Visagismo masculino: corte por formato de rosto | visagismo masculino | Visagismo |
| Tendências de barba no inverno | barba curitiba, sazonal | Barba |
| Platinado masculino: manutenção | platinado masculino curitiba | Química |

## Pautas para a próxima leva

Ideias que ficaram de fora desta rodada, em ordem de prioridade:

1. **Primeira vez em barbearia: como pedir o corte** — cauda longa com alta
   intenção, e resolve a insegurança de quem nunca foi.
2. **Corte infantil: a partir de que idade e como preparar a criança** — a
   barbearia atende a partir dos 3 anos e o assunto não está coberto.
3. **Cabelo cacheado e crespo masculino: cortes que funcionam** — hoje só há
   menções dentro de outros textos.
4. **Barba no verão de Curitiba** — par sazonal do artigo de inverno, para
   publicar em novembro ou dezembro.
5. **Quanto tempo leva cada serviço** — útil para quem precisa encaixar a
   visita no intervalo do trabalho.

## Padrão das fotos de capa

Para o blog ficar coeso conforme cresce:

- **Proporção:** 16:9 (o card do blog e o Open Graph usam essa forma)
- **Resolução:** 1600px de largura é suficiente — o site recomprime
- **Formato:** JPEG (o script `npm run otimizar-imagens` converte e comprime)
- **Luz:** a mesma da barbearia, sem flash direto
- **Enquadramento:** deixar respiro à esquerda ou à direita; o título aparece
  sobre a imagem em algumas telas
- **Sem texto na imagem:** o título já é texto real, e texto dentro de foto
  não é lido pelo Google nem por leitor de tela
- **Nome do arquivo:** descreva o conteúdo em minúsculas com hífen
  (`degrade-mid-fade-curitiba.jpeg`), não `IMG_2043.jpeg`

## Como publicar

1. Colocar a foto em `public/`
2. Rodar `npm run otimizar-imagens`
3. Criar `src/data/artigos/<slug>.ts` (copie qualquer artigo existente como
   modelo) e registrar em `src/data/artigos/index.ts`
4. Pronto: a URL, o `<title>`, a descrição, o schema `BlogPosting` e a entrada
   no sitemap saem daí. A ordem no blog é por data, automática.
