// Tipos do conteúdo local. Quando houver CMS, ele deve devolver estes mesmos formatos.

export type CategoriaSlug = "trabalhistas" | "documentos" | "financeiras" | "utilitarios";

export interface Categoria {
  slug: CategoriaSlug;
  nome: string;
  descricao: string;
  /** Tema "Tudo sobre" mais próximo da categoria, quando existir. */
  temaRelacionado?: string;
}

export interface Pergunta {
  pergunta: string;
  resposta: string;
}

/** Define o selo, o ícone e o verbo do botão de cada ferramenta. */
export type TipoFerramenta = "calculadora" | "documento" | "sorteio" | "gerador";

export interface Ferramenta {
  slug: string;
  categoria: CategoriaSlug;
  tipo: TipoFerramenta;
  nome: string;
  /** Frase única exibida abaixo do título e nos cards. */
  resumo: string;
  /** "completa" segue o template inteiro; "leve" é a variante dos utilitários. */
  variante: "completa" | "leve";
  /** Usa as tabelas legais do ano (INSS, IRRF, salário mínimo...). */
  usaTabelasLegais: boolean;
  lancadaEm: string;
  atualizadaEm: string;
  comoUsar: string[];
  explicacao: string[];
  faq: Pergunta[];
  /** Guia completo ligado à ferramenta (ferramenta → artigo). */
  guia?: string;
  relacionadas: string[];
}

export type Bloco =
  | { tipo: "paragrafo"; texto: string }
  | { tipo: "subtitulo"; texto: string }
  | { tipo: "lista"; itens: string[] }
  | { tipo: "leiaTambem"; slug: string }
  | { tipo: "ferramenta"; slug: string; chamada: string };

export interface Conteudo {
  tipo: "guia" | "artigo";
  slug: string;
  categoria: CategoriaSlug;
  titulo: string;
  linhaFina: string;
  resumo: string;
  publicadoEm: string;
  atualizadoEm: string;
  tempoLeituraMin: number;
  corpo: Bloco[];
  tags: string[];
  relacionados: string[];
  /** Ferramentas exibidas na sidebar (desktop). */
  ferramentas: string[];
}

export interface Tema {
  slug: string;
  titulo: string;
  chapeu: string;
  descricao: string;
  ferramentas: string[];
  conteudos: string[];
  relacionados: string[];
}

export interface Autor {
  nome: string;
  bio: string;
}
