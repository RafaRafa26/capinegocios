import type { Bloco } from "@/content/tipos";
import { getConteudo, getFerramenta } from "@/lib/dados";
import { BoxFerramenta } from "./BoxFerramenta";
import { LeiaTambem } from "./LeiaTambem";

export function CorpoArtigo({ blocos }: { blocos: Bloco[] }) {
  return (
    <div className="corpo">
      {blocos.map((bloco, i) => {
        switch (bloco.tipo) {
          case "paragrafo":
            return <p key={i}>{bloco.texto}</p>;
          case "subtitulo":
            return <h2 key={i}>{bloco.texto}</h2>;
          case "lista":
            return (
              <ul key={i}>
                {bloco.itens.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "leiaTambem": {
            const conteudo = getConteudo(bloco.slug);
            return conteudo ? <LeiaTambem key={i} conteudo={conteudo} /> : null;
          }
          case "ferramenta": {
            const ferramenta = getFerramenta(bloco.slug);
            return ferramenta ? <BoxFerramenta key={i} ferramenta={ferramenta} chamada={bloco.chamada} /> : null;
          }
        }
      })}
    </div>
  );
}
