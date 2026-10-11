import Link from "next/link";
import { indicadores, indicadoresAtualizadosEm } from "@/config/indicadores";
import { formatarData } from "@/lib/datas";

/** Faixa de indicadores do header. Valores estáticos vindos de config/indicadores.ts. */
export function FaixaIndicadores() {
  return (
    <div className="indicadores">
      <div className="container indicadores__interno">
        <dl className="indicadores__lista">
          {indicadores.map((ind) => (
            <div key={ind.rotulo} className="indicador">
              <dt>{ind.rotulo}</dt>
              <dd>
                {ind.href ? <Link href={ind.href}>{ind.valor}</Link> : ind.valor}
                {ind.detalhe && <span className="indicador__detalhe"> {ind.detalhe}</span>}
              </dd>
            </div>
          ))}
        </dl>
        <p className="indicadores__data">
          Ref.: <time dateTime={indicadoresAtualizadosEm}>{formatarData(indicadoresAtualizadosEm)}</time>
        </p>
      </div>
    </div>
  );
}
