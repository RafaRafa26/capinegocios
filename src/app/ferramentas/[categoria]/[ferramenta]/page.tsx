import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FerramentaTemplate } from "@/components/FerramentaTemplate";
import { getFerramenta, getFerramentas } from "@/lib/dados";
import { urlFerramenta } from "@/lib/urls";

type Props = { params: Promise<{ categoria: string; ferramenta: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getFerramentas().map((f) => ({ categoria: f.categoria, ferramenta: f.slug }));
}

async function buscar(params: Props["params"]) {
  const { categoria, ferramenta: slug } = await params;
  const ferramenta = getFerramenta(slug);
  return ferramenta?.categoria === categoria ? ferramenta : undefined;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ferramenta = await buscar(params);
  if (!ferramenta) return {};
  return {
    title: ferramenta.nome,
    description: ferramenta.resumo,
    alternates: { canonical: urlFerramenta(ferramenta) },
  };
}

export default async function FerramentaPage({ params }: Props) {
  const ferramenta = await buscar(params);
  if (!ferramenta) notFound();
  return <FerramentaTemplate ferramenta={ferramenta} />;
}
