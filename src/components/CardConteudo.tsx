import Link from "next/link";
import type { Conteudo, Ferramenta } from "@/content/tipos";
import { getCategoria } from "@/lib/dados";
import { urlConteudo, urlFerramenta } from "@/lib/urls";
import { Chapeu } from "./Chapeu";

interface Props {
  conteudo: Conteudo;
  tamanho?: "grande" | "medio" | "lista";
  satelite?: Ferramenta;
  /** Nível do título, para manter a hierarquia correta em cada página. */
  nivel?: "h2" | "h3";
}

export function CardConteudo({ conteudo, tamanho = "lista", satelite, nivel: Titulo = "h3" }: Props) {
  return (
    <article className={`card card--${tamanho}`}>
      <Chapeu>{getCategoria(conteudo.categoria)?.nome}</Chapeu>
      <Titulo className="card__titulo">
        <Link href={urlConteudo(conteudo)}>{conteudo.titulo}</Link>
      </Titulo>
      <p className="card__resumo">{conteudo.resumo}</p>
      {satelite && (
        <p className="card__satelite">
          <Link href={urlFerramenta(satelite)}>{satelite.nome}</Link>
        </p>
      )}
    </article>
  );
}
