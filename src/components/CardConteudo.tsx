import Link from "next/link";
import type { Conteudo } from "@/content/tipos";
import { getCategoria } from "@/lib/dados";
import { urlConteudo } from "@/lib/urls";
import { Chapeu } from "./Chapeu";
import { IlustracaoCategoria } from "./IlustracaoCategoria";

interface Props {
  conteudo: Conteudo;
  tamanho?: "grande" | "medio" | "lista";
  /** Ilustração da categoria: `topo` acima do texto, `lado` em miniatura ao lado. */
  visual?: "topo" | "lado";
  /** Desligar dentro da seção da própria categoria, onde o chapéu seria redundante. */
  chapeu?: boolean;
  /** Links relacionados logo abaixo do card (satélites). */
  satelites?: React.ReactNode;
  /** Nível do título, para manter a hierarquia correta em cada página. */
  nivel?: "h2" | "h3";
}

export function CardConteudo({ conteudo, tamanho = "lista", visual, chapeu = true, satelites, nivel: Titulo = "h3" }: Props) {
  const classes = ["card", `card--${tamanho}`, visual && `card--visual-${visual}`].filter(Boolean).join(" ");
  return (
    <article className={classes}>
      {visual && (
        <IlustracaoCategoria categoria={conteudo.categoria} tamanho={visual === "lado" ? "mini" : "media"} />
      )}
      <div className="card__texto">
        {chapeu ? (
          <Chapeu>{getCategoria(conteudo.categoria)?.nome}</Chapeu>
        ) : (
          <span className="card__tipo">{conteudo.tipo === "guia" ? "Guia" : "Artigo"}</span>
        )}
        <Titulo className="card__titulo">
          <Link href={urlConteudo(conteudo)}>{conteudo.titulo}</Link>
        </Titulo>
        {tamanho !== "lista" || !visual ? <p className="card__resumo">{conteudo.resumo}</p> : null}
        {satelites}
      </div>
    </article>
  );
}
