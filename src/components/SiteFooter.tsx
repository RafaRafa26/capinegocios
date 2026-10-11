import Link from "next/link";
import { site } from "@/config/site";
import { getCategorias, getFerramentasDaCategoria, getTemas } from "@/lib/dados";
import { urlCategoria, urlFerramenta, urlTema } from "@/lib/urls";

/** Rodapé como mapa do site. */
export function SiteFooter() {
  return (
    <footer className="rodape">
      <div className="container">
        <div className="rodape__mapa">
          {getCategorias().map((c) => (
            <section key={c.slug} aria-labelledby={`rodape-${c.slug}`}>
              <h2 id={`rodape-${c.slug}`}>
                <Link href={urlCategoria(c.slug)}>{c.nome}</Link>
              </h2>
              <ul>
                {getFerramentasDaCategoria(c.slug).map((f) => (
                  <li key={f.slug}>
                    <Link href={urlFerramenta(f)}>{f.nome}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
          <section aria-labelledby="rodape-conteudo">
            <h2 id="rodape-conteudo">Conteúdo</h2>
            <ul>
              <li>
                <Link href="/guias">Guias</Link>
              </li>
              <li>
                <Link href="/artigos">Artigos</Link>
              </li>
              {getTemas().map((t) => (
                <li key={t.slug}>
                  <Link href={urlTema(t.slug)}>{t.titulo}</Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <p className="rodape__legal">
          © {new Date().getFullYear()} {site.nome}. Os resultados das ferramentas são estimativas informativas.
        </p>
      </div>
    </footer>
  );
}
