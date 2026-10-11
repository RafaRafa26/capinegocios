// Curadoria da home. A ordem define a hierarquia: um destaque grande, poucos médios.

export interface Destaque {
  /** Slug de um guia ou artigo. */
  conteudo: string;
  /** Link relacionado logo abaixo do destaque, geralmente a ferramenta do tema. */
  satelite?: string;
}

export const destaquePrincipal: Destaque = {
  conteudo: "salario-minimo-2026-o-que-muda",
  satelite: "calculadora-de-custo-do-funcionario",
};

export const destaquesSecundarios: Destaque[] = [
  { conteudo: "como-calcular-ferias", satelite: "calculadora-de-ferias" },
  { conteudo: "juros-em-alta-capital-de-giro", satelite: "calculadora-de-juros" },
  { conteudo: "como-calcular-margem-de-lucro", satelite: "calculadora-de-margem" },
];

/** Ferramentas mais usadas, em ordem. Sem analytics ainda: lista editorial. */
export const maisUsadas: string[] = [
  "calculadora-de-salario-liquido",
  "calculadora-de-ferias",
  "gerador-de-recibo",
  "calculadora-de-decimo-terceiro",
  "calculadora-de-margem",
];
