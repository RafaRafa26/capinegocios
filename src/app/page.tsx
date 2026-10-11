import { CardConteudo } from "@/components/CardConteudo";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CardFerramenta } from "@/components/CardFerramenta";
import { Chapeu } from "@/components/Chapeu";
import { ListaNumerada } from "@/components/ListaNumerada";
import { Secao } from "@/components/Secao";
import { destaquePrincipal, destaquesSecundarios, maisUsadas, type Destaque } from "@/content/home";
import {
  getCategorias,
  getConteudo,
  getConteudosDaCategoria,
  getFerramenta,
  getFerramentasDaCategoria,
  getNovidades,
  resolver,
} from "@/lib/dados";
import { formatarData } from "@/lib/datas";
import { urlCategoria, urlConteudo, urlFerramenta } from "@/lib/urls";
import Link from "next/link";

function CardDestaque({ destaque, tamanho }: { destaque: Destaque; tamanho: "grande" | "medio" }) {
  const conteudo = getConteudo(destaque.conteudo);
  if (!conteudo) return null;
  const satelite = destaque.satelite ? getFerramenta(destaque.satelite) : undefined;
  return <CardConteudo conteudo={conteudo} tamanho={tamanho} satelite={satelite} nivel={tamanho === "grande" ? "h2" : "h3"} />;
}

export default function Home() {
  const novidades = getNovidades(6);

  return (
    <div className="container">
      <Breadcrumb itens={[]} visivel={false} />
      <h1 className="sr-only">Capi Negócios: ferramentas e guias para pequenos negócios</h1>

      <section className="destaques" aria-label="Destaques">
        <div className="destaques__principal">
          <CardDestaque destaque={destaquePrincipal} tamanho="grande" />
        </div>
        <div className="destaques__secundarios">
          {destaquesSecundarios.map((d) => (
            <CardDestaque key={d.conteudo} destaque={d} tamanho="medio" />
          ))}
        </div>
      </section>

      <div className="home-colunas">
        <Secao titulo="Ferramentas mais usadas" id="mais-usadas" verMais={{ texto: "Ver todas as ferramentas", href: "/ferramentas" }}>
          <ListaNumerada ferramentas={resolver(maisUsadas, getFerramenta)} />
        </Secao>

        <Secao titulo="Novidades" id="novidades">
          <ul className="novidades">
            {novidades.map((n) => {
              const href = n.tipo === "ferramenta" ? urlFerramenta(n.item) : urlConteudo(n.item);
              const titulo = n.tipo === "ferramenta" ? n.item.nome : n.item.titulo;
              const rotulo = n.tipo === "ferramenta" ? "Nova ferramenta" : n.item.tipo === "guia" ? "Guia" : "Artigo";
              return (
                <li key={`${n.tipo}-${n.item.slug}`}>
                  <Chapeu>{rotulo}</Chapeu>
                  <Link href={href}>{titulo}</Link>
                  <time dateTime={n.data}>{formatarData(n.data)}</time>
                </li>
              );
            })}
          </ul>
        </Secao>
      </div>

      {getCategorias().map((categoria) => {
        const conteudos = getConteudosDaCategoria(categoria.slug).slice(0, 2);
        const ferramentas = getFerramentasDaCategoria(categoria.slug).slice(0, 3);
        return (
          <Secao
            key={categoria.slug}
            titulo={categoria.nome}
            id={`categoria-${categoria.slug}`}
            verMais={{ texto: `Ver mais em ${categoria.nome}`, href: urlCategoria(categoria.slug) }}
          >
            <div className="bloco-categoria">
              <div className="lista">
                {conteudos.map((c) => (
                  <CardConteudo key={c.slug} conteudo={c} />
                ))}
              </div>
              <div className="lista">
                {ferramentas.map((f) => (
                  <CardFerramenta key={f.slug} ferramenta={f} />
                ))}
              </div>
            </div>
          </Secao>
        );
      })}
    </div>
  );
}
