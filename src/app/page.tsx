import Link from "next/link";
import { Banner } from "@/components/Banner";
import { BlocoFerramentas } from "@/components/BlocoFerramentas";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FaixaNewsletter } from "@/components/FaixaNewsletter";
import { Icone, type NomeIcone } from "@/components/Icone";
import { Secao } from "@/components/Secao";
import { bannerPrincipal, bannersMedios, maisUsadas, type Satelite } from "@/content/home";
import { getConteudo, getConteudos, getFerramenta, resolver } from "@/lib/dados";
import { tiposFerramenta } from "@/lib/ferramentas";
import { urlConteudo, urlFerramenta } from "@/lib/urls";

/** Links relacionados abaixo do banner principal. Ferramentas ganham o ícone do tipo. */
function Satelites({ itens }: { itens: Satelite[] }) {
  const links = itens.flatMap((s): { href: string; texto: string; icone?: NomeIcone }[] => {
    if (s.tipo === "ferramenta") {
      const f = getFerramenta(s.slug);
      return f ? [{ href: urlFerramenta(f), texto: f.nome, icone: tiposFerramenta[f.tipo].icone }] : [];
    }
    const c = getConteudo(s.slug);
    return c ? [{ href: urlConteudo(c), texto: c.titulo }] : [];
  });
  if (links.length === 0) return null;
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

export default function Home() {
  const principal = getConteudo(bannerPrincipal.conteudo);
  const medios = resolver(bannersMedios, getConteudo).slice(0, 4);
  const emDestaque = new Set([bannerPrincipal.conteudo, ...medios.map((c) => c.slug)]);
  const restante = getConteudos().filter((c) => !emDestaque.has(c.slug));

  return (
    <>
      <Breadcrumb itens={[]} visivel={false} />
      <h1 className="sr-only">Capi Negócios: guias e ferramentas para pequenos negócios</h1>

      <div className="container feed-topo">
        <section className="feed-destaques" aria-label="Destaques">
          {principal && (
            <Banner
              conteudo={principal}
              tamanho="principal"
              nivel="h2"
              satelites={<Satelites itens={bannerPrincipal.satelites} />}
            />
          )}
          <div className="feed-medios">
            {medios.map((c) => (
              <Banner key={c.slug} conteudo={c} tamanho="medio" nivel="h2" />
            ))}
          </div>
        </section>

        <BlocoFerramentas ferramentas={resolver(maisUsadas, getFerramenta)} />
      </div>

      <FaixaNewsletter />

      {restante.length > 0 && (
        <div className="container">
          <Secao titulo="Mais guias e artigos" id="mais-conteudos">
            <div className="feed-grade">
              {restante.map((c) => (
                <Banner key={c.slug} conteudo={c} />
              ))}
            </div>
          </Secao>
        </div>
      )}
    </>
  );
}
