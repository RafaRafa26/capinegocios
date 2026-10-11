import Link from "next/link";
import { site } from "@/config/site";
import { Icone } from "./Icone";
import { MenuPrincipal } from "./MenuPrincipal";

export function SiteHeader() {
  return (
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

        <MenuPrincipal />

        {/* Busca apenas visual nesta etapa: ainda não pesquisa nada. */}
        <form role="search" className="busca" action="#">
          <label htmlFor="busca" className="sr-only">
            Buscar guias e ferramentas
          </label>
          <input id="busca" type="search" name="q" placeholder="Buscar" autoComplete="off" />
          <button type="button" aria-label="Buscar">
            <Icone nome="busca" tamanho={18} />
          </button>
        </form>
      </div>
    </header>
  );
}
