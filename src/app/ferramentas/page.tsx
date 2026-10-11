import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CardFerramenta } from "@/components/CardFerramenta";
import { Chapeu } from "@/components/Chapeu";
import { Icone } from "@/components/Icone";
import { getCategorias, getFerramentasDaCategoria } from "@/lib/dados";
import { urlCategoria } from "@/lib/urls";

export const metadata: Metadata = {
  title: "Ferramentas",
  description: "Calculadoras trabalhistas e financeiras, geradores de documentos em PDF e utilitários grátis.",
  alternates: { canonical: "/ferramentas" },
};

/** Todas as ferramentas, agrupadas por categoria. Sem chapéu nos itens: o grupo já diz a categoria. */
export default function FerramentasPage() {
  const categorias = getCategorias();

  return (
    <div className="container container--medio">
      <Breadcrumb itens={[{ nome: "Ferramentas", href: "/ferramentas" }]} />
      <header className="cabecalho-pagina">
        <Chapeu>Ferramentas</Chapeu>
        <h1>Todas as ferramentas</h1>
        <p className="linha-fina">Calculadoras, documentos e utilitários que rodam no seu navegador, sem cadastro.</p>
      </header>

      <nav aria-label="Categorias de ferramentas" className="atalhos">
        <ul>
          {categorias.map((c) => (
            <li key={c.slug}>
              <a href={`#ferramentas-${c.slug}`}>
                <Icone nome={c.slug} tamanho={16} />
                {c.nome}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {categorias.map((c) => (
        <section key={c.slug} className="grupo-ferramentas" aria-labelledby={`ferramentas-${c.slug}`}>
          <div className="grupo-ferramentas__cabeca">
            <span className={`grupo-ferramentas__icone ilustracao--${c.slug}`} aria-hidden="true">
              <Icone nome={c.slug} tamanho={22} />
            </span>
            <div>
              <h2 id={`ferramentas-${c.slug}`}>{c.nome}</h2>
              <p>{c.descricao}</p>
            </div>
          </div>
          <div className="lista-ferramentas">
            {getFerramentasDaCategoria(c.slug).map((f) => (
              <CardFerramenta key={f.slug} ferramenta={f} variante="item" chapeu={false} />
            ))}
          </div>
          <p className="grupo-ferramentas__ver-mais">
            <Link href={urlCategoria(c.slug)}>Guias e ferramentas de {c.nome} →</Link>
          </p>
        </section>
      ))}
    </div>
  );
}
