import Link from "next/link";
import { site } from "@/config/site";
import { getCategorias } from "@/lib/dados";
import { urlCategoria } from "@/lib/urls";

export function SiteHeader() {
  return (
    <header className="cabecalho">
      <div className="container cabecalho__interno">
        <Link href="/" className="logo">
          {site.nome}
        </Link>

        <nav aria-label="Categorias" className="menu">
          <ul>
            <li>
              <Link href="/ferramentas" className="menu__destaque">
                Ferramentas
              </Link>
            </li>
            {getCategorias().map((c) => (
              <li key={c.slug}>
                <Link href={urlCategoria(c.slug)}>{c.nome}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Busca apenas visual nesta etapa: ainda não pesquisa nada. */}
        <form role="search" className="busca" action="#">
          <label htmlFor="busca" className="sr-only">
            Buscar ferramentas e guias
          </label>
          <input id="busca" type="search" name="q" placeholder="Buscar ferramentas e guias" autoComplete="off" />
          <button type="button">Buscar</button>
        </form>
      </div>
    </header>
  );
}
