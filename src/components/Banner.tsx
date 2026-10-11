import Link from "next/link";
import type { Conteudo } from "@/content/tipos";
import { getCategoria } from "@/lib/dados";
import { urlConteudo } from "@/lib/urls";
import { Chapeu } from "./Chapeu";
import { IlustracaoCategoria } from "./IlustracaoCategoria";

interface Props {
  conteudo: Conteudo;
  /** `principal`: um por página, maior. `medio`: 2 a 4. `grade`: o restante do feed. */
  tamanho?: "principal" | "medio" | "grade";
  /** Links relacionados abaixo da linha fina (satélites). */
  satelites?: React.ReactNode;
  nivel?: "h2" | "h3";
}

/** Banner do feed: visual da categoria, chapéu, título e linha fina. */
export function Banner({ conteudo, tamanho = "grade", satelites, nivel: Titulo = "h3" }: Props) {
  return (
    <article className={`banner banner--${tamanho}`}>
      <IlustracaoCategoria categoria={conteudo.categoria} tamanho={tamanho === "principal" ? "grande" : "media"} />
      <div className="banner__texto">
        <Chapeu>{getCategoria(conteudo.categoria)?.nome}</Chapeu>
        <Titulo className="banner__titulo">
          <Link href={urlConteudo(conteudo)}>{conteudo.titulo}</Link>
        </Titulo>
        <p className="banner__linha-fina">{conteudo.linhaFina}</p>
        {satelites}
      </div>
    </article>
  );
}
