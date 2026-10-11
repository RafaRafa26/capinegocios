import Link from "next/link";
import type { Ferramenta } from "@/content/tipos";
import { tiposFerramenta } from "@/lib/ferramentas";
import { urlFerramenta } from "@/lib/urls";
import { Icone } from "./Icone";

/** Bloco discreto das ferramentas mais usadas: lateral no desktop, compacto no celular. */
export function BlocoFerramentas({ ferramentas }: { ferramentas: Ferramenta[] }) {
  return (
    <aside className="bloco-ferramentas" aria-labelledby="bloco-ferramentas-titulo">
      <h2 id="bloco-ferramentas-titulo" className="bloco-ferramentas__titulo">
        Ferramentas mais usadas
      </h2>
      <ol className="bloco-ferramentas__lista">
        {ferramentas.map((f) => (
          <li key={f.slug}>
            <Icone nome={tiposFerramenta[f.tipo].icone} tamanho={18} />
            <Link href={urlFerramenta(f)}>{f.nome}</Link>
          </li>
        ))}
      </ol>
      <p className="bloco-ferramentas__ver-todas">
        <Link href="/ferramentas">Ver todas as ferramentas →</Link>
      </p>
    </aside>
  );
}
