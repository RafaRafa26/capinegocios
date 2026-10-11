// Curadoria da home. A ordem define a hierarquia: uma manchete, um destaque com visual, o resto em lista.

import type { CategoriaSlug } from "./tipos";

/** Link relacionado logo abaixo da manchete: uma ferramenta ou outro guia/artigo. */
export type Satelite = { tipo: "ferramenta"; slug: string } | { tipo: "conteudo"; slug: string };

export interface Destaque {
  /** Slug de um guia ou artigo. */
  conteudo: string;
  satelites?: Satelite[];
}

/** Peso 1: manchete grande com satélites. */
export const manchete: Destaque = {
  conteudo: "salario-minimo-2026-o-que-muda",
  satelites: [
    { tipo: "ferramenta", slug: "calculadora-de-custo-do-funcionario" },
    { tipo: "ferramenta", slug: "calculadora-de-salario-liquido" },
    { tipo: "conteudo", slug: "o-que-entra-no-custo-de-um-funcionario" },
  ],
};

/** Peso 2: destaque com visual (ilustração da categoria). */
export const destaqueVisual: Destaque = {
  conteudo: "juros-em-alta-capital-de-giro",
  satelites: [{ tipo: "ferramenta", slug: "calculadora-de-juros" }],
};

/** Peso 3: lista lateral com miniaturas. */
export const listaLateral: string[] = [
  "como-calcular-ferias",
  "nota-promissoria-ainda-vale",
  "ponto-de-equilibrio-o-que-e",
  "como-calcular-margem-de-lucro",
];

/** Faixa de ferramentas em destaque logo após o hero. */
export const ferramentasDestaque: string[] = [
  "calculadora-de-salario-liquido",
  "gerador-de-recibo",
  "calculadora-de-margem",
  "sorteio-online",
];

/** Ferramentas mais usadas, em ordem. Sem analytics ainda: lista editorial. */
export const maisUsadas: string[] = [
  "calculadora-de-salario-liquido",
  "calculadora-de-ferias",
  "gerador-de-recibo",
  "calculadora-de-decimo-terceiro",
  "calculadora-de-margem",
];

/**
 * Blocos de categoria, na ordem da página. Cada um escolhe layout e fundo para a home
 * não repetir o mesmo formato seção após seção.
 */
export interface BlocoCategoria {
  categoria: CategoriaSlug;
  layout: "abertura" | "grade" | "colunas" | "compacto";
  fundo: "branco" | "azul" | "suave";
}

export const blocosCategoria: BlocoCategoria[] = [
  { categoria: "trabalhistas", layout: "abertura", fundo: "branco" },
  { categoria: "documentos", layout: "grade", fundo: "azul" },
  { categoria: "financeiras", layout: "colunas", fundo: "branco" },
  { categoria: "utilitarios", layout: "compacto", fundo: "suave" },
];

/** Depois de quantos blocos de categoria entra a faixa de newsletter/WhatsApp. */
export const newsletterApos = 2;
