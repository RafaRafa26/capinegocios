import Link from "next/link";
import type { CategoriaSlug, Conteudo, Ferramenta } from "@/content/tipos";
import { Breadcrumb, type ItemTrilha } from "./Breadcrumb";
import { CardConteudo } from "./CardConteudo";
import { CardFerramenta } from "./CardFerramenta";
import { Chapeu } from "./Chapeu";
import { IlustracaoCategoria } from "./IlustracaoCategoria";
import { Secao } from "./Secao";

interface Props {
  trilha: ItemTrilha[];
  chapeu: string;
  titulo: string;
  descricao: string;
  ferramentas: Ferramenta[];
  conteudos: Conteudo[];
  relacionados: { nome: string; href: string }[];
  /** Página de uma categoria: os cards não repetem o chapéu da própria categoria. */
  categoria?: CategoriaSlug;
  /** Ilustração do topo. */
  ilustracao?: CategoriaSlug;
}

/** Template 2: Categoria / Hub "Tudo sobre". */
export function HubTemplate({ trilha, chapeu, titulo, descricao, ferramentas, conteudos, relacionados, categoria, ilustracao }: Props) {
  return (
    <div className="container">
      <Breadcrumb itens={trilha} />
      <header className={ilustracao ? "cabecalho-pagina cabecalho-pagina--hub" : "cabecalho-pagina"}>
        <div>
          <Chapeu>{chapeu}</Chapeu>
          <h1>{titulo}</h1>
          <p className="linha-fina">{descricao}</p>
        </div>
        {ilustracao && <IlustracaoCategoria categoria={ilustracao} tamanho="grande" />}
      </header>

      {ferramentas.length > 0 && (
        <Secao titulo="Ferramentas" id="ferramentas">
          <div className="grade">
            {ferramentas.map((f) => (
              <CardFerramenta key={f.slug} ferramenta={f} chapeu={f.categoria !== categoria} />
            ))}
          </div>
        </Secao>
      )}

      {conteudos.length > 0 && (
        <Secao titulo="Guias e artigos" id="conteudos">
          <div className="lista">
            {conteudos.map((c) => (
              <CardConteudo key={c.slug} conteudo={c} visual="lado" chapeu={c.categoria !== categoria} />
            ))}
          </div>
        </Secao>
      )}

      {relacionados.length > 0 && (
        <Secao titulo="Temas relacionados" id="relacionados">
          <ul className="links-relacionados">
            {relacionados.map((r) => (
              <li key={r.href}>
                <Link href={r.href}>{r.nome}</Link>
              </li>
            ))}
          </ul>
        </Secao>
      )}
    </div>
  );
}
