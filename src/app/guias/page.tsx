import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CardConteudo } from "@/components/CardConteudo";
import { Chapeu } from "@/components/Chapeu";
import { getConteudos } from "@/lib/dados";

export const metadata: Metadata = {
  title: "Guias",
  description: "Guias práticos e perenes para resolver as dúvidas do dia a dia do pequeno negócio.",
  alternates: { canonical: "/guias" },
};

export default function GuiasPage() {
  return (
    <div className="container">
      <Breadcrumb itens={[{ nome: "Guias", href: "/guias" }]} />
      <header className="cabecalho-pagina">
        <Chapeu>Conteúdo</Chapeu>
        <h1>Guias</h1>
        <p className="linha-fina">Guias práticos e perenes para resolver as dúvidas do dia a dia do pequeno negócio.</p>
      </header>
      <div className="lista">
        {getConteudos("guia").map((c) => (
          <CardConteudo key={c.slug} conteudo={c} nivel="h2" />
        ))}
      </div>
    </div>
  );
}
