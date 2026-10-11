import Link from "next/link";
import type { Ferramenta } from "@/content/tipos";
import { tiposFerramenta } from "@/lib/ferramentas";
import { urlFerramenta } from "@/lib/urls";

/** Lista "mais usadas": sempre numerada. */
export function ListaNumerada({ ferramentas }: { ferramentas: Ferramenta[] }) {
  return (
    <ol className="lista-numerada">
      {ferramentas.map((f) => (
        <li key={f.slug}>
          <div>
            <span className="selo">{tiposFerramenta[f.tipo].selo}</span>
            <Link href={urlFerramenta(f)} className="lista-numerada__titulo">
              {f.nome}
            </Link>
          </div>
        </li>
      ))}
    </ol>
  );
}
