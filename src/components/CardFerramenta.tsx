import Link from "next/link";
import type { Ferramenta } from "@/content/tipos";
import { getCategoria } from "@/lib/dados";
import { urlFerramenta } from "@/lib/urls";
import { Chapeu } from "./Chapeu";

export function CardFerramenta({ ferramenta, nivel: Titulo = "h3" }: { ferramenta: Ferramenta; nivel?: "h2" | "h3" }) {
  return (
    <article className="card card--ferramenta">
      <Chapeu>{getCategoria(ferramenta.categoria)?.nome}</Chapeu>
      <Titulo className="card__titulo">
        <Link href={urlFerramenta(ferramenta)}>{ferramenta.nome}</Link>
      </Titulo>
      <p className="card__resumo">{ferramenta.resumo}</p>
    </article>
  );
}
