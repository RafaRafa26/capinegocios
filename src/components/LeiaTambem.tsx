import Link from "next/link";
import type { Conteudo } from "@/content/tipos";
import { urlConteudo } from "@/lib/urls";

/** Card "Leia também" no meio do texto: título e resumo. */
export function LeiaTambem({ conteudo }: { conteudo: Conteudo }) {
  return (
    <aside className="leia-tambem" aria-label="Leia também">
      <span className="leia-tambem__rotulo">Leia também</span>
      <Link href={urlConteudo(conteudo)} className="leia-tambem__titulo">
        {conteudo.titulo}
      </Link>
      <p>{conteudo.resumo}</p>
    </aside>
  );
}
