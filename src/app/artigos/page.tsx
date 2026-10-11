import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CardConteudo } from "@/components/CardConteudo";
import { Chapeu } from "@/components/Chapeu";
import { getConteudos } from "@/lib/dados";

export const metadata: Metadata = {
  title: "Artigos",
  description: "Temas atuais explicados pelo ângulo do que muda para o pequeno negócio.",
  alternates: { canonical: "/artigos" },
};

export default function ArtigosPage() {
  return (
    <div className="container">
      <Breadcrumb itens={[{ nome: "Artigos", href: "/artigos" }]} />
      <header className="cabecalho-pagina">
        <Chapeu>Conteúdo</Chapeu>
        <h1>Artigos</h1>
        <p className="linha-fina">Temas atuais explicados pelo ângulo do que muda para o pequeno negócio.</p>
      </header>
      <div className="lista">
        {getConteudos("artigo").map((c) => (
          <CardConteudo key={c.slug} conteudo={c} nivel="h2" />
        ))}
      </div>
    </div>
  );
}
