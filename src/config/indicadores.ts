import { tabelasVigentes } from "./tabelas";

// Faixa de indicadores do header. Valores estáticos: atualizar à mão aqui (não há API nesta fase).
// Salário mínimo e teto do MEI vêm das tabelas legais do ano, para não duplicar valores.

export interface Indicador {
  rotulo: string;
  valor: string;
  /** Complemento curto exibido ao lado do valor (unidade ou período). */
  detalhe?: string;
  /** Link para a ferramenta ou guia que explica o número, quando houver. */
  href?: string;
}

const reais = (valor: number) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

/** Data de referência de Selic e dólar. */
export const indicadoresAtualizadosEm = "2026-10-09";

export const indicadores: Indicador[] = [
  {
    rotulo: "Salário mínimo",
    valor: reais(tabelasVigentes.salarioMinimo),
    detalhe: String(tabelasVigentes.ano),
    href: "/artigos/salario-minimo-2026-o-que-muda",
  },
  { rotulo: "Teto MEI", valor: reais(tabelasVigentes.tetoMei), detalhe: "por ano" },
  { rotulo: "Selic", valor: "15,00%", detalhe: "ao ano", href: "/artigos/juros-em-alta-capital-de-giro" },
  { rotulo: "Dólar", valor: "R$ 5,40", detalhe: "comercial" },
];
