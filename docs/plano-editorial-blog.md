# Plano editorial do blog — Dom Elii Barbershop

Base: AnswerThePublic e People Also Ask para "barbearia em curitiba" (09/08/2026).
Cada pauta virou uma entrada em `src/data/artigos.ts`, que gera a URL, a
metadata e o schema `BlogPosting` sozinha.

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

## Pauta priorizada

Ordem = ordem de publicação sugerida. As três primeiras cobrem intenção
comercial direta e devem sair antes das demais.

### 1. Quanto custa cortar o cabelo em Curitiba
- **Alvo:** "quanto um barbeiro cobra", "preço corte de cabelo curitiba"
- **Slug:** `quanto-custa-cortar-cabelo-em-curitiba`
- **Ângulo:** faixas reais de preço na cidade, o que faz o preço variar
  (tempo de cadeira, química, produto), e por que o mais barato costuma sair
  caro. Terminar com a tabela da Dom Elii.
- **Foto de capa:** cadeira com cliente de costas e espelho ao fundo,
  enquadramento horizontal 16:9, luz do ambiente.

### 2. Como saber se o barbeiro é bom: 6 sinais antes de sentar
- **Alvo:** "como saber se o cabeleireiro é bom", "barbearia bem avaliada curitiba"
- **Slug:** `como-saber-se-o-barbeiro-e-bom`
- **Ângulo:** checklist prático (pergunta sobre rotina, mostra o acabamento,
  higieniza a máquina na frente do cliente, tem avaliação recente e pública).
- **Foto:** detalhe das mãos com máquina/navalha em ação, 16:9.

### 3. Degradê masculino: qual fade combina com o seu cabelo
- **Alvo:** "degradê curitiba", "tipos de fade"
- **Slug:** `degrade-masculino-tipos-de-fade`
- **Ângulo:** low, mid, high e skin fade; o que cada um exige de manutenção;
  qual sustenta em cabelo fino, crespo e com entradas.
- **Foto:** três nucas lado a lado com alturas diferentes de degradê. Se der,
  padronizar fundo e distância para virar um comparativo visual.

### 4. Barbearia com visagismo em Curitiba: o que muda na prática
- **Alvo:** "barbearia com visagismo em curitiba"
- **Slug:** `barbearia-com-visagismo-em-curitiba`
- **Ângulo:** o que o barbeiro observa antes de cortar e como isso muda o
  resultado. Complementa o artigo de visagismo já publicado, sem repeti-lo:
  aqui o foco é o atendimento, lá é o formato de rosto.
- **Foto:** barbeiro conversando com o cliente antes do corte, os dois de
  frente para o espelho.

### 5. Pomada, cera ou pó: qual usar em cada tipo de cabelo
- **Alvo:** "produtos para barbearia em curitiba", "qual pomada usar"
- **Slug:** `pomada-cera-ou-po-qual-usar`
- **Ângulo:** fixação x brilho x peso do fio. Conecta com os produtos vendidos
  na loja (Classe A, Tocton) sem virar catálogo.
- **Foto:** produtos alinhados sobre a bancada, luz lateral, 16:9.

### 6. Com que frequência voltar à barbearia
- **Alvo:** cauda longa de manutenção; serve para trazer cliente de volta
- **Slug:** `com-que-frequencia-voltar-a-barbearia`
- **Ângulo:** intervalo por tipo de corte e de barba, e o que acontece quando
  passa do ponto. É a pauta com maior efeito sobre recorrência.
- **Foto:** calendário/agenda ao lado das ferramentas, ou antes/depois de
  manutenção de 20 dias.

---

## Já publicados

| Artigo | Alvo |
|---|---|
| Visagismo masculino: qual o corte ideal para o seu formato de rosto | visagismo masculino |
| Tendências de barba em Curitiba para o inverno | barba curitiba, sazonal |
| Platinado masculino: como manter o cabelo saudável pós-química | platinado masculino curitiba |

---

## Padrão das fotos de capa

Para o blog ficar coeso quando tiver 10 artigos:

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
3. Adicionar o objeto em `src/data/artigos.ts` (o arquivo tem o formato
   comentado no topo)
4. Pronto: a URL, o `<title>`, a descrição, o schema `BlogPosting` e a entrada
   no sitemap são gerados a partir dessa entrada
