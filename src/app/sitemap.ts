import type { MetadataRoute } from "next";
import { getCategorias, getConteudos, getFerramentas, getTemas } from "@/lib/dados";
import { urlAbsoluta, urlCategoria, urlConteudo, urlFerramenta, urlTema } from "@/lib/urls";

export default function sitemap(): MetadataRoute.Sitemap {
  const fixas = ["/", "/ferramentas", "/guias", "/artigos", "/tudo-sobre"];
  return [
    ...fixas.map((p) => ({ url: urlAbsoluta(p) })),
    ...getCategorias().map((c) => ({ url: urlAbsoluta(urlCategoria(c.slug)) })),
    ...getTemas().map((t) => ({ url: urlAbsoluta(urlTema(t.slug)) })),
    ...getFerramentas().map((f) => ({ url: urlAbsoluta(urlFerramenta(f)), lastModified: f.atualizadaEm })),
    ...getConteudos().map((c) => ({ url: urlAbsoluta(urlConteudo(c)), lastModified: c.atualizadoEm })),
  ];
}
