/**
 * Rola um carrossel na medida de UM item.
 *
 * Rolar pela largura visível do trilho pula vários cards de uma vez e o
 * usuário perde a referência de onde estava. Aqui a distância é medida no
 * primeiro item real, mais o espaçamento entre eles — então funciona em
 * qualquer largura de tela, sem número fixo no código.
 */
export function rolarUmItem(
  trilho: HTMLElement | null,
  direcao: 1 | -1
): void {
  if (!trilho) return;

  const item = trilho.firstElementChild as HTMLElement | null;
  if (!item) return;

  const estilo = window.getComputedStyle(trilho);
  const espaco = parseFloat(estilo.columnGap || estilo.gap || "0") || 0;

  trilho.scrollBy({
    left: direcao * (item.offsetWidth + espaco),
    behavior: "smooth",
  });
}
