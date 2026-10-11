import { categorias } from "@/content/categorias";
import { conteudos } from "@/content/conteudos";
import { ferramentas } from "@/content/ferramentas";
import { temas } from "@/content/temas";
import type { CategoriaSlug, Conteudo, Ferramenta } from "@/content/tipos";

// Acesso aos dados locais. As páginas usam apenas estas funções, para facilitar a troca por um CMS.

export const getCategorias = () => categorias;
export const getCategoria = (slug: string) => categorias.find((c) => c.slug === slug);

export const getFerramentas = () => ferramentas;
export const getFerramenta = (slug: string) => ferramentas.find((f) => f.slug === slug);
export const getFerramentasDaCategoria = (categoria: CategoriaSlug) =>
  ferramentas.filter((f) => f.categoria === categoria);

export const getConteudos = (tipo?: Conteudo["tipo"]) =>
  [...conteudos]
    .filter((c) => !tipo || c.tipo === tipo)
    .sort((a, b) => b.publicadoEm.localeCompare(a.publicadoEm));
export const getConteudo = (slug: string) => conteudos.find((c) => c.slug === slug);
export const getConteudosDaCategoria = (categoria: CategoriaSlug) =>
  getConteudos().filter((c) => c.categoria === categoria);

export const getTemas = () => temas;
export const getTema = (slug: string) => temas.find((t) => t.slug === slug);

/** Resolve uma lista de slugs, ignorando os que não existem. */
export function resolver<T>(slugs: string[], buscar: (slug: string) => T | undefined): T[] {
  return slugs.map(buscar).filter((item): item is T => item !== undefined);
}

export type ItemNovidade =
  | { tipo: "conteudo"; data: string; item: Conteudo }
  | { tipo: "ferramenta"; data: string; item: Ferramenta };

/** Feed misto de artigos e ferramentas novas, do mais recente ao mais antigo. */
export function getNovidades(limite: number): ItemNovidade[] {
  const itens: ItemNovidade[] = [
    ...conteudos.map((item) => ({ tipo: "conteudo" as const, data: item.publicadoEm, item })),
    ...ferramentas.map((item) => ({ tipo: "ferramenta" as const, data: item.lancadaEm, item })),
  ];
  return itens.sort((a, b) => b.data.localeCompare(a.data)).slice(0, limite);
}
