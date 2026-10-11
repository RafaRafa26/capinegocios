import Link from "next/link";
import type { Ferramenta } from "@/content/tipos";
import { tiposFerramenta } from "@/lib/ferramentas";
import { urlFerramenta } from "@/lib/urls";
import { Icone } from "./Icone";

/** Box de ferramenta no meio do texto (artigo → ferramenta). */
export function BoxFerramenta({ ferramenta, chamada }: { ferramenta: Ferramenta; chamada: string }) {
  const tipo = tiposFerramenta[ferramenta.tipo];
  return (
    <aside className="box-ferramenta" aria-label="Ferramenta relacionada">
      <span className="ferramenta-card__icone">
        <Icone nome={tipo.icone} tamanho={28} />
      </span>
      <div>
        <span className="selo">{tipo.selo}</span>
        <p className="box-ferramenta__chamada">{chamada}</p>
        <p className="box-ferramenta__resumo">{ferramenta.resumo}</p>
        <Link href={urlFerramenta(ferramenta)} className="botao">
          {tipo.acao} agora
          <span className="sr-only">: {ferramenta.nome}</span>
        </Link>
      </div>
    </aside>
  );
}
