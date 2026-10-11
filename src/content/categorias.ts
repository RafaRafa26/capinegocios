import type { Categoria } from "./tipos";

export const categorias: Categoria[] = [
  {
    slug: "trabalhistas",
    nome: "Trabalhistas",
    descricao: "Salário, férias, 13º, horas extras e o custo real de ter um funcionário.",
    temaRelacionado: "folha-de-pagamento",
  },
  {
    slug: "documentos",
    nome: "Documentos",
    descricao: "Recibos, notas promissórias e orçamentos prontos para imprimir ou enviar em PDF.",
    temaRelacionado: "documentos-do-negocio",
  },
  {
    slug: "financeiras",
    nome: "Financeiras",
    descricao: "Juros, margem e ponto de equilíbrio para decidir preço e saber se o negócio se paga.",
    temaRelacionado: "precificacao",
  },
  {
    slug: "utilitarios",
    nome: "Utilitários",
    descricao: "Sorteios e geradores para resolver tarefas rápidas do dia a dia.",
  },
];
