import Link from "next/link";
import type { Ferramenta } from "@/content/tipos";
import { getCategoria } from "@/lib/dados";
import { tiposFerramenta } from "@/lib/ferramentas";
import { urlFerramenta } from "@/lib/urls";
import { Chapeu } from "./Chapeu";
import { Icone } from "./Icone";

interface Props {
  ferramenta: Ferramenta;
  /** `padrao`: grades. `linha`: lista compacta. `item`: linha com descrição curta (página /ferramentas). */
  variante?: "padrao" | "linha" | "item";
  /** Desligar dentro da seção da própria categoria, onde o chapéu seria redundante. */
  chapeu?: boolean;
  nivel?: "h2" | "h3";
}

/**
 * Card de ferramenta: ícone, selo do tipo e botão de ação.
 * O card inteiro é clicável por um único link (o botão), sem links duplicados.
 */
export function CardFerramenta({ ferramenta, variante = "padrao", chapeu = true, nivel: Titulo = "h3" }: Props) {
  const tipo = tiposFerramenta[ferramenta.tipo];
  const href = urlFerramenta(ferramenta);

  if (variante === "linha" || variante === "item") {
    return (
      <article className={`ferramenta-card ferramenta-card--linha ferramenta-card--${variante} ferramenta-card--${ferramenta.tipo}`}>
        <span className="ferramenta-card__icone">
          <Icone nome={tipo.icone} tamanho={22} />
        </span>
        <div className="ferramenta-card__texto">
          <span className="selo">{tipo.selo}</span>
          <Titulo className="ferramenta-card__nome">{ferramenta.nome}</Titulo>
          {variante === "item" && <p className="ferramenta-card__resumo">{ferramenta.resumo}</p>}
        </div>
        <Link href={href} className="ferramenta-card__acao">
          {tipo.acao}
          <span className="sr-only">: {ferramenta.nome}</span>
          <Icone nome="seta" tamanho={16} />
        </Link>
      </article>
    );
  }

  return (
    <article className={`ferramenta-card ferramenta-card--${variante} ferramenta-card--${ferramenta.tipo}`}>
      <div className="ferramenta-card__topo">
        <span className="ferramenta-card__icone">
          <Icone nome={tipo.icone} tamanho={28} />
        </span>
        <span className="selo">{tipo.selo}</span>
      </div>
      {chapeu && <Chapeu>{getCategoria(ferramenta.categoria)?.nome}</Chapeu>}
      <Titulo className="ferramenta-card__nome">{ferramenta.nome}</Titulo>
      <p className="ferramenta-card__resumo">{ferramenta.resumo}</p>
      <Link href={href} className="ferramenta-card__acao">
        {tipo.acao}
        <span className="sr-only">: {ferramenta.nome}</span>
        <Icone nome="seta" tamanho={18} />
      </Link>
    </article>
  );
}
