import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArtigoTemplate } from "@/components/ArtigoTemplate";
import { getConteudo, getConteudos } from "@/lib/dados";
import { urlConteudo } from "@/lib/urls";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getConteudos("guia").map((c) => ({ slug: c.slug }));
}

async function buscar(params: Props["params"]) {
  const conteudo = getConteudo((await params).slug);
  return conteudo?.tipo === "guia" ? conteudo : undefined;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const conteudo = await buscar(params);
  if (!conteudo) return {};
  return {
    title: conteudo.titulo,
    description: conteudo.linhaFina,
    alternates: { canonical: urlConteudo(conteudo) },
    openGraph: {
      type: "article",
      title: conteudo.titulo,
      description: conteudo.linhaFina,
      publishedTime: conteudo.publicadoEm,
      modifiedTime: conteudo.atualizadoEm,
    },
  };
}

export default async function GuiaPage({ params }: Props) {
  const conteudo = await buscar(params);
  if (!conteudo) notFound();
  return <ArtigoTemplate conteudo={conteudo} />;
}
