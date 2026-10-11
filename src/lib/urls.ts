import { site } from "@/config/site";
import type { CategoriaSlug, Conteudo, Ferramenta } from "@/content/tipos";

export const urlCategoria = (categoria: CategoriaSlug) => `/ferramentas/${categoria}`;
export const urlFerramenta = (f: Pick<Ferramenta, "categoria" | "slug">) => `/ferramentas/${f.categoria}/${f.slug}`;
export const urlConteudo = (c: Pick<Conteudo, "tipo" | "slug">) => `/${c.tipo === "guia" ? "guias" : "artigos"}/${c.slug}`;
export const urlTema = (slug: string) => `/tudo-sobre/${slug}`;

export const urlAbsoluta = (caminho: string) => new URL(caminho, site.url).toString();
