import Link from "next/link";
import type { Ferramenta } from "@/content/tipos";
import { getCategoria } from "@/lib/dados";
import { urlFerramenta } from "@/lib/urls";
import { Chapeu } from "./Chapeu";

/** Lista "mais usadas": sempre numerada. */
export function ListaNumerada({ ferramentas }: { ferramentas: Ferramenta[] }) {
  return (
    <ol className="lista-numerada">
      {ferramentas.map((f) => (
        <li key={f.slug}>
          <div>
            <Chapeu>{getCategoria(f.categoria)?.nome}</Chapeu>
            <Link href={urlFerramenta(f)} className="lista-numerada__titulo">
              {f.nome}
            </Link>
          </div>
        </li>
      ))}
    </ol>
  );
}
