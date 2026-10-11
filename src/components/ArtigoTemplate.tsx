import type { Conteudo } from "@/content/tipos";
import { autor } from "@/content/autor";
import { site } from "@/config/site";
import { getCategoria, getConteudo, getFerramenta, resolver } from "@/lib/dados";
import { formatarData } from "@/lib/datas";
import { urlAbsoluta, urlConteudo } from "@/lib/urls";
import { Breadcrumb } from "./Breadcrumb";
import { CardConteudo } from "./CardConteudo";
import { CardFerramenta } from "./CardFerramenta";
import { Chapeu } from "./Chapeu";
import { Compartilhar } from "./Compartilhar";
import { CorpoArtigo } from "./CorpoArtigo";
import { JsonLd } from "./JsonLd";

/** Template 3: Artigo (usado por guias e artigos). */
export function ArtigoTemplate({ conteudo }: { conteudo: Conteudo }) {
  const categoria = getCategoria(conteudo.categoria);
  const caminho = urlConteudo(conteudo);
  const secao = conteudo.tipo === "guia" ? { nome: "Guias", href: "/guias" } : { nome: "Artigos", href: "/artigos" };
  const relacionados = resolver(conteudo.relacionados, getConteudo);
  const ferramentas = resolver(conteudo.ferramentas, getFerramenta);
  const foiAtualizado = conteudo.atualizadoEm !== conteudo.publicadoEm;

  return (
    <div className="container">
      <Breadcrumb itens={[secao, { nome: conteudo.titulo, href: caminho }]} />

      <div className="layout-artigo">
        <article className="artigo">
          <header className="cabecalho-pagina">
            <Chapeu>{categoria?.nome}</Chapeu>
            <h1>{conteudo.titulo}</h1>
            <p className="linha-fina">{conteudo.linhaFina}</p>
            <p className="artigo__meta">
              Por <strong>{autor.nome}</strong>
              <span aria-hidden="true"> · </span>
              Publicado em <time dateTime={conteudo.publicadoEm}>{formatarData(conteudo.publicadoEm)}</time>
              {foiAtualizado && (
                <>
                  <span aria-hidden="true"> · </span>
                  Atualizado em <time dateTime={conteudo.atualizadoEm}>{formatarData(conteudo.atualizadoEm)}</time>
                </>
              )}
              <span aria-hidden="true"> · </span>
              {conteudo.tempoLeituraMin} min de leitura
            </p>
            <Compartilhar titulo={conteudo.titulo} caminho={caminho} />
          </header>

          <CorpoArtigo blocos={conteudo.corpo} />

          {conteudo.tags.length > 0 && (
            <ul className="tags" aria-label="Tags">
              {conteudo.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          )}

          <section className="caixa-autor" aria-label="Sobre o autor">
            <p className="caixa-autor__nome">{autor.nome}</p>
            <p>{autor.bio}</p>
          </section>
        </article>

        {ferramentas.length > 0 && (
          <aside className="sidebar" aria-labelledby="sidebar-titulo">
            <h2 id="sidebar-titulo" className="secao__titulo">
              Ferramentas do tema
            </h2>
            <div className="lista">
              {ferramentas.map((f) => (
                <CardFerramenta key={f.slug} ferramenta={f} />
              ))}
            </div>
          </aside>
        )}
      </div>

      {relacionados.length > 0 && (
        <section className="secao" aria-labelledby="relacionados">
          <h2 id="relacionados" className="secao__titulo">
            Relacionados
          </h2>
          <div className="grade">
            {relacionados.map((c) => (
              <CardConteudo key={c.slug} conteudo={c} tamanho="medio" />
            ))}
          </div>
        </section>
      )}

      <JsonLd
        dados={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: conteudo.titulo,
          description: conteudo.linhaFina,
          datePublished: conteudo.publicadoEm,
          dateModified: conteudo.atualizadoEm,
          articleSection: categoria?.nome,
          keywords: conteudo.tags.join(", "),
          mainEntityOfPage: urlAbsoluta(caminho),
          author: { "@type": "Person", name: autor.nome },
          publisher: { "@type": "Organization", name: site.nome, url: site.url },
        }}
      />
    </div>
  );
}
