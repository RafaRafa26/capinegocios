import Link from "next/link";
import { Fragment } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CardConteudo } from "@/components/CardConteudo";
import { CardFerramenta } from "@/components/CardFerramenta";
import { Chapeu } from "@/components/Chapeu";
import { FaixaNewsletter } from "@/components/FaixaNewsletter";
import { Icone, type NomeIcone } from "@/components/Icone";
import { IlustracaoCategoria } from "@/components/IlustracaoCategoria";
import { ListaNumerada } from "@/components/ListaNumerada";
import { Secao } from "@/components/Secao";
import {
  blocosCategoria,
  destaqueVisual,
  ferramentasDestaque,
  listaLateral,
  manchete,
  maisUsadas,
  newsletterApos,
  type BlocoCategoria,
  type Satelite,
} from "@/content/home";
import {
  getCategoria,
  getConteudo,
  getConteudosDaCategoria,
  getFerramenta,
  getFerramentasDaCategoria,
  getNovidades,
  resolver,
} from "@/lib/dados";
import { formatarData } from "@/lib/datas";
import { tiposFerramenta } from "@/lib/ferramentas";
import { urlCategoria, urlConteudo, urlFerramenta } from "@/lib/urls";

/** Links relacionados abaixo de um destaque. Ferramentas ganham o ícone do tipo. */
function Satelites({ itens }: { itens?: Satelite[] }) {
  if (!itens?.length) return null;
  const links = itens.flatMap((s): { href: string; texto: string; icone?: NomeIcone }[] => {
    if (s.tipo === "ferramenta") {
      const f = getFerramenta(s.slug);
      return f ? [{ href: urlFerramenta(f), texto: f.nome, icone: tiposFerramenta[f.tipo].icone }] : [];
    }
    const c = getConteudo(s.slug);
    return c ? [{ href: urlConteudo(c), texto: c.titulo }] : [];
  });
  return (
    <ul className="satelites">
      {links.map((l) => (
        <li key={l.href} className={l.icone ? "satelite satelite--ferramenta" : "satelite"}>
          {l.icone && <Icone nome={l.icone} tamanho={18} />}
          <Link href={l.href}>{l.texto}</Link>
        </li>
      ))}
    </ul>
  );
}

function Hero() {
  const principal = getConteudo(manchete.conteudo);
  const visual = getConteudo(destaqueVisual.conteudo);
  const lista = resolver(listaLateral, getConteudo);

  return (
    <section className="hero container" aria-label="Destaques">
      {principal && (
        <article className="hero__manchete">
          <Chapeu>{getCategoria(principal.categoria)?.nome}</Chapeu>
          <h2 className="hero__titulo">
            <Link href={urlConteudo(principal)}>{principal.titulo}</Link>
          </h2>
          <p className="hero__linha-fina">{principal.linhaFina}</p>
          <Satelites itens={manchete.satelites} />
        </article>
      )}

      {visual && (
        <article className="hero__visual">
          <IlustracaoCategoria categoria={visual.categoria} tamanho="grande" />
          <div className="hero__visual-texto">
            <Chapeu>{getCategoria(visual.categoria)?.nome}</Chapeu>
            <h2 className="card__titulo">
              <Link href={urlConteudo(visual)}>{visual.titulo}</Link>
            </h2>
            <p className="card__resumo">{visual.resumo}</p>
            <Satelites itens={destaqueVisual.satelites} />
          </div>
        </article>
      )}

      <div className="hero__lista">
        {lista.map((c) => (
          <CardConteudo key={c.slug} conteudo={c} visual="lado" />
        ))}
      </div>
    </section>
  );
}

function Novidades() {
  return (
    <ul className="novidades">
      {getNovidades(5).map((n) => {
        const ferramenta = n.tipo === "ferramenta";
        const href = ferramenta ? urlFerramenta(n.item) : urlConteudo(n.item);
        const titulo = ferramenta ? n.item.nome : n.item.titulo;
        const rotulo = ferramenta ? "Nova ferramenta" : n.item.tipo === "guia" ? "Guia" : "Artigo";
        return (
          <li key={`${n.tipo}-${n.item.slug}`}>
            <time dateTime={n.data}>{formatarData(n.data).slice(0, 5)}</time>
            <div>
              <span className={ferramenta ? "selo" : "chapeu"}>{rotulo}</span>
              <Link href={href}>{titulo}</Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

/** Bloco de uma categoria. Sem chapéu nos cards: a seção já diz a categoria. */
function BlocoDaCategoria({ bloco }: { bloco: BlocoCategoria }) {
  const categoria = getCategoria(bloco.categoria);
  if (!categoria) return null;
  const conteudos = getConteudosDaCategoria(categoria.slug);
  const ferramentas = getFerramentasDaCategoria(categoria.slug);
  const id = `categoria-${categoria.slug}`;
  const verMais = { texto: `Ver mais em ${categoria.nome}`, href: urlCategoria(categoria.slug) };

  let corpo: React.ReactNode;
  switch (bloco.layout) {
    // Abertura: um card grande com ilustração + lista, ferramentas em linha ao lado.
    case "abertura": {
      const [abre, ...resto] = conteudos;
      corpo = (
        <div className="bloco bloco--abertura">
          <div className="bloco__principal">
            {abre && <CardConteudo conteudo={abre} tamanho="medio" visual="topo" chapeu={false} />}
            <div className="lista">
              {resto.slice(0, 3).map((c) => (
                <CardConteudo key={c.slug} conteudo={c} chapeu={false} />
              ))}
            </div>
          </div>
          <div className="bloco__lateral">
            <p className="bloco__rotulo">Ferramentas</p>
            <div className="lista-ferramentas">
              {ferramentas.map((f) => (
                <CardFerramenta key={f.slug} ferramenta={f} variante="linha" chapeu={false} />
              ))}
            </div>
          </div>
        </div>
      );
      break;
    }
    // Grade: ferramentas em cards e conteúdos com miniatura, tudo em grade.
    case "grade":
      corpo = (
        <div className="bloco bloco--grade">
          <div className="grade">
            {ferramentas.slice(0, 3).map((f) => (
              <CardFerramenta key={f.slug} ferramenta={f} chapeu={false} />
            ))}
          </div>
          <div className="grade grade--conteudos">
            {conteudos.slice(0, 2).map((c) => (
              <CardConteudo key={c.slug} conteudo={c} visual="lado" chapeu={false} />
            ))}
          </div>
        </div>
      );
      break;
    // Colunas: texto puro em duas colunas de leitura, ferramentas na terceira.
    case "colunas":
      corpo = (
        <div className="bloco bloco--colunas">
          {conteudos.slice(0, 2).map((c) => (
            <CardConteudo key={c.slug} conteudo={c} tamanho="medio" chapeu={false} />
          ))}
          <div className="bloco__lateral">
            <p className="bloco__rotulo">Ferramentas</p>
            <div className="lista-ferramentas">
              {ferramentas.map((f) => (
                <CardFerramenta key={f.slug} ferramenta={f} variante="linha" chapeu={false} />
              ))}
            </div>
          </div>
        </div>
      );
      break;
    // Compacto: descrição curta, ferramentas lado a lado e um guia.
    case "compacto":
      corpo = (
        <div className="bloco bloco--compacto">
          <div className="lista-ferramentas lista-ferramentas--lado">
            {ferramentas.map((f) => (
              <CardFerramenta key={f.slug} ferramenta={f} variante="linha" chapeu={false} />
            ))}
          </div>
          {conteudos[0] && <CardConteudo conteudo={conteudos[0]} visual="lado" chapeu={false} />}
        </div>
      );
      break;
  }

  return (
    <Secao titulo={categoria.nome} id={id} descricao={categoria.descricao} fundo={bloco.fundo} verMais={verMais}>
      {corpo}
    </Secao>
  );
}

export default function Home() {
  return (
    <>
      <Breadcrumb itens={[]} visivel={false} />
      <h1 className="sr-only">Capi Negócios: ferramentas e guias para pequenos negócios</h1>

      <Hero />

      <Secao
        titulo="Resolva agora"
        id="ferramentas-destaque"
        descricao="Ferramentas grátis que rodam no seu navegador, sem cadastro."
        fundo="azul"
        verMais={{ texto: "Ver todas as ferramentas", href: "/ferramentas" }}
      >
        <div className="faixa-ferramentas">
          {resolver(ferramentasDestaque, getFerramenta).map((f) => (
            <CardFerramenta key={f.slug} ferramenta={f} variante="destaque" />
          ))}
        </div>
      </Secao>

      <section className="secao secao--faixa secao--suave" aria-label="Mais usadas e novidades">
        <div className="container home-colunas">
          <Secao titulo="Mais usadas" id="mais-usadas">
            <ListaNumerada ferramentas={resolver(maisUsadas, getFerramenta)} />
          </Secao>
          <Secao titulo="Novidades" id="novidades">
            <Novidades />
          </Secao>
        </div>
      </section>

      {blocosCategoria.map((bloco, i) => (
        <Fragment key={bloco.categoria}>
          {i === newsletterApos && <FaixaNewsletter />}
          <BlocoDaCategoria bloco={bloco} />
        </Fragment>
      ))}
    </>
  );
}
