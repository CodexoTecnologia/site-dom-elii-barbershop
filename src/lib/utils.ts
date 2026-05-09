//# Helpers de classes (clsx, tailwind-merge)

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Essa função permite mesclar classes dinâmicas do Tailwind com perfeição
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}