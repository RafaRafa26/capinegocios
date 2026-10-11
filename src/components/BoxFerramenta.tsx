import Link from "next/link";
import type { Ferramenta } from "@/content/tipos";
import { urlFerramenta } from "@/lib/urls";

/** Box de ferramenta no meio do texto (artigo → ferramenta). */
export function BoxFerramenta({ ferramenta, chamada }: { ferramenta: Ferramenta; chamada: string }) {
  return (
    <aside className="box-ferramenta" aria-label="Ferramenta relacionada">
      <p className="box-ferramenta__chamada">{chamada}</p>
      <p className="box-ferramenta__resumo">{ferramenta.resumo}</p>
      <Link href={urlFerramenta(ferramenta)} className="botao">
        Abrir {ferramenta.nome.toLowerCase()}
      </Link>
    </aside>
  );
}
