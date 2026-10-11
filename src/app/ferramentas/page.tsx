import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CardFerramenta } from "@/components/CardFerramenta";
import { Chapeu } from "@/components/Chapeu";
import { Secao } from "@/components/Secao";
import { getCategorias, getFerramentasDaCategoria } from "@/lib/dados";
import { urlCategoria } from "@/lib/urls";

export const metadata: Metadata = {
  title: "Ferramentas",
  description: "Calculadoras trabalhistas e financeiras, geradores de documentos em PDF e utilitários grátis.",
  alternates: { canonical: "/ferramentas" },
};

export default function FerramentasPage() {
  return (
    <div className="container">
      <Breadcrumb itens={[{ nome: "Ferramentas", href: "/ferramentas" }]} />
      <header className="cabecalho-pagina">
        <Chapeu>Ferramentas</Chapeu>
        <h1>Todas as ferramentas</h1>
        <p className="linha-fina">Calculadoras, documentos e utilitários que rodam no seu navegador, sem cadastro.</p>
      </header>

      {getCategorias().map((c) => (
        <Secao
          key={c.slug}
          titulo={c.nome}
          id={`ferramentas-${c.slug}`}
          verMais={{ texto: `Ver mais em ${c.nome}`, href: urlCategoria(c.slug) }}
        >
          <div className="grade">
            {getFerramentasDaCategoria(c.slug).map((f) => (
              <CardFerramenta key={f.slug} ferramenta={f} chapeu={false} />
            ))}
          </div>
        </Secao>
      ))}
    </div>
  );
}
