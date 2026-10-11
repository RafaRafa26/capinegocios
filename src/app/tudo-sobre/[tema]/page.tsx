import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HubTemplate } from "@/components/HubTemplate";
import { getConteudo, getFerramenta, getTema, getTemas, resolver } from "@/lib/dados";
import { urlTema } from "@/lib/urls";

type Props = { params: Promise<{ tema: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getTemas().map((t) => ({ tema: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tema = getTema((await params).tema);
  if (!tema) return {};
  return { title: tema.titulo, description: tema.descricao, alternates: { canonical: urlTema(tema.slug) } };
}

export default async function TemaPage({ params }: Props) {
  const tema = getTema((await params).tema);
  if (!tema) notFound();

  return (
    <HubTemplate
      trilha={[
        { nome: "Tudo sobre", href: "/tudo-sobre" },
        { nome: tema.titulo, href: urlTema(tema.slug) },
      ]}
      chapeu={tema.chapeu}
      titulo={tema.titulo}
      descricao={tema.descricao}
      ferramentas={resolver(tema.ferramentas, getFerramenta)}
      conteudos={resolver(tema.conteudos, getConteudo)}
      relacionados={resolver(tema.relacionados, getTema).map((t) => ({ nome: t.titulo, href: urlTema(t.slug) }))}
    />
  );
}
