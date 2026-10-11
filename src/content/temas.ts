import type { Tema } from "./tipos";

// Hubs "Tudo sobre": reúnem guias e ferramentas de um assunto.
export const temas: Tema[] = [
  {
    slug: "folha-de-pagamento",
    titulo: "Tudo sobre folha de pagamento",
    chapeu: "Trabalhistas",
    descricao: "Salário, férias, 13º, horas extras e o custo real de um funcionário, com calculadoras e guias passo a passo.",
    ferramentas: [
      "calculadora-de-salario-liquido",
      "calculadora-de-ferias",
      "calculadora-de-decimo-terceiro",
      "calculadora-de-horas-extras",
      "calculadora-de-custo-do-funcionario",
    ],
    conteudos: ["como-calcular-ferias", "o-que-entra-no-custo-de-um-funcionario", "como-calcular-decimo-terceiro", "salario-minimo-2026-o-que-muda"],
    relacionados: ["precificacao"],
  },
  {
    slug: "precificacao",
    titulo: "Tudo sobre precificação",
    chapeu: "Financeiras",
    descricao: "Como definir preço, calcular margem e saber quanto vender para o negócio se pagar.",
    ferramentas: ["calculadora-de-margem", "calculadora-de-ponto-de-equilibrio", "calculadora-de-juros", "gerador-de-orcamento"],
    conteudos: ["como-calcular-margem-de-lucro", "ponto-de-equilibrio-o-que-e", "juros-em-alta-capital-de-giro"],
    relacionados: ["folha-de-pagamento", "documentos-do-negocio"],
  },
  {
    slug: "documentos-do-negocio",
    titulo: "Tudo sobre documentos do negócio",
    chapeu: "Documentos",
    descricao: "Recibos, orçamentos e notas promissórias: o que cada um comprova e como gerar o seu em PDF.",
    ferramentas: ["gerador-de-recibo", "gerador-de-orcamento", "gerador-de-nota-promissoria"],
    conteudos: ["como-fazer-um-recibo", "nota-promissoria-ainda-vale"],
    relacionados: ["precificacao"],
  },
];
