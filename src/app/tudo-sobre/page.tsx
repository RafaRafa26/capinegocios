import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Chapeu } from "@/components/Chapeu";
import { getTemas } from "@/lib/dados";
import { urlTema } from "@/lib/urls";

export const metadata: Metadata = {
  title: "Tudo sobre",
  description: "Páginas que reúnem guias e ferramentas de cada assunto do pequeno negócio.",
  alternates: { canonical: "/tudo-sobre" },
};

export default function TudoSobrePage() {
  return (
    <div className="container">
      <Breadcrumb itens={[{ nome: "Tudo sobre", href: "/tudo-sobre" }]} />
      <header className="cabecalho-pagina">
        <Chapeu>Temas</Chapeu>
        <h1>Tudo sobre</h1>
        <p className="linha-fina">Guias e ferramentas reunidos por assunto.</p>
      </header>
      <div className="lista">
        {getTemas().map((t) => (
          <article key={t.slug} className="card card--lista">
            <Chapeu>{t.chapeu}</Chapeu>
            <h2 className="card__titulo">
              <Link href={urlTema(t.slug)}>{t.titulo}</Link>
            </h2>
            <p className="card__resumo">{t.descricao}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
