// Curadoria da home (feed do blog). A ordem define a hierarquia:
// um banner principal, 2 a 4 médios e o restante em grade, do mais recente ao mais antigo.

/** Link relacionado logo abaixo do banner principal: uma ferramenta ou outro guia/artigo. */
export type Satelite = { tipo: "ferramenta"; slug: string } | { tipo: "conteudo"; slug: string };

/** Banner principal (slug de um guia ou artigo). */
export const bannerPrincipal = {
  conteudo: "salario-minimo-2026-o-que-muda",
  satelites: [
    { tipo: "ferramenta", slug: "calculadora-de-custo-do-funcionario" },
    { tipo: "conteudo", slug: "o-que-entra-no-custo-de-um-funcionario" },
  ] as Satelite[],
};

/** Banners médios (2 a 4). */
export const bannersMedios: string[] = [
  "juros-em-alta-capital-de-giro",
  "nota-promissoria-ainda-vale",
  "ponto-de-equilibrio-o-que-e",
];

/** Ferramentas mais usadas, em ordem. Sem analytics ainda: lista editorial. */
export const maisUsadas: string[] = [
  "calculadora-de-salario-liquido",
  "calculadora-de-ferias",
  "gerador-de-recibo",
  "calculadora-de-decimo-terceiro",
  "calculadora-de-margem",
];
