import type { Ferramenta } from "@/content/tipos";
import { tabelasVigentes } from "@/config/tabelas";
import { formatarData } from "@/lib/datas";

/** Data de atualização do cálculo, vigência das tabelas e aviso informativo. */
export function BlocoConfianca({ ferramenta }: { ferramenta: Ferramenta }) {
  return (
    <section className="confianca" aria-label="Sobre este cálculo">
      <ul>
        <li>
          Cálculo atualizado em{" "}
          <time dateTime={ferramenta.atualizadaEm}>{formatarData(ferramenta.atualizadaEm)}</time>
        </li>
        {ferramenta.usaTabelasLegais && <li>Tabelas vigentes em {tabelasVigentes.ano}</li>}
      </ul>
      <p>O resultado é uma estimativa informativa e não substitui a orientação de um contador.</p>
    </section>
  );
}
