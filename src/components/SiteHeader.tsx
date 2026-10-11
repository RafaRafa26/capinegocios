import Link from "next/link";
import { site } from "@/config/site";
import { getCategorias } from "@/lib/dados";
import { urlCategoria } from "@/lib/urls";
import { FaixaIndicadores } from "./FaixaIndicadores";
import { Icone } from "./Icone";

export function SiteHeader() {
  return (
    <>
      <header className="cabecalho">
        <div className="container cabecalho__interno">
          <Link href="/" className="logo" aria-label={`${site.nome}, página inicial`}>
            <span className="logo__marca" aria-hidden="true">
              C
            </span>
            <span className="logo__nome">
              Capi<span>Negócios</span>
            </span>
          </Link>

          {/* Busca apenas visual nesta etapa: ainda não pesquisa nada. */}
          <form role="search" className="busca" action="#">
            <label htmlFor="busca" className="sr-only">
              Buscar ferramentas e guias
            </label>
            <input id="busca" type="search" name="q" placeholder="Buscar ferramentas e guias" autoComplete="off" />
            <button type="button" aria-label="Buscar">
              <Icone nome="busca" tamanho={18} />
            </button>
          </form>
        </div>

        <nav aria-label="Categorias" className="menu">
          <div className="container">
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
              <li>
                <Link href="/guias">Guias</Link>
              </li>
              <li>
                <Link href="/artigos">Artigos</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <FaixaIndicadores />
    </>
  );
}
