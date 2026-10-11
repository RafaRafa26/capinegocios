import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HubTemplate } from "@/components/HubTemplate";
import { getCategoria, getCategorias, getConteudosDaCategoria, getFerramentasDaCategoria, getTema } from "@/lib/dados";
import { urlCategoria, urlTema } from "@/lib/urls";

type Props = { params: Promise<{ categoria: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getCategorias().map((c) => ({ categoria: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const categoria = getCategoria((await params).categoria);
  if (!categoria) return {};
  return {
    title: `Ferramentas ${categoria.nome.toLowerCase()}`,
    description: categoria.descricao,
    alternates: { canonical: urlCategoria(categoria.slug) },
  };
}

export default async function CategoriaPage({ params }: Props) {
  const categoria = getCategoria((await params).categoria);
  if (!categoria) notFound();

  const tema = categoria.temaRelacionado ? getTema(categoria.temaRelacionado) : undefined;
  const relacionados = [
    ...(tema ? [{ nome: tema.titulo, href: urlTema(tema.slug) }] : []),
    ...getCategorias()
      .filter((c) => c.slug !== categoria.slug)
      .map((c) => ({ nome: c.nome, href: urlCategoria(c.slug) })),
  ];

  return (
    <HubTemplate
      trilha={[
        { nome: "Ferramentas", href: "/ferramentas" },
        { nome: categoria.nome, href: urlCategoria(categoria.slug) },
      ]}
      chapeu="Categoria"
      titulo={categoria.nome}
      descricao={categoria.descricao}
      ferramentas={getFerramentasDaCategoria(categoria.slug)}
      conteudos={getConteudosDaCategoria(categoria.slug)}
      relacionados={relacionados}
      categoria={categoria.slug}
      ilustracao={categoria.slug}
    />
  );
}
