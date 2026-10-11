import type { TipoFerramenta } from "@/content/tipos";
import type { NomeIcone } from "@/components/Icone";

/** Selo, ícone e verbo do botão para cada tipo de ferramenta. */
export const tiposFerramenta: Record<TipoFerramenta, { selo: string; acao: string; icone: NomeIcone }> = {
  calculadora: { selo: "Calculadora", acao: "Calcular", icone: "calculadora" },
  documento: { selo: "Documento PDF", acao: "Gerar", icone: "documento" },
  sorteio: { selo: "Sorteio", acao: "Sortear", icone: "sorteio" },
  gerador: { selo: "Gerador", acao: "Gerar", icone: "numeros" },
};
