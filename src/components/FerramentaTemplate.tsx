import Link from "next/link";
import type { Ferramenta } from "@/content/tipos";
import { getCategoria, getConteudo, getFerramenta, resolver } from "@/lib/dados";
import { urlCategoria, urlConteudo, urlFerramenta } from "@/lib/urls";
import { BlocoConfianca } from "./BlocoConfianca";
import { Breadcrumb } from "./Breadcrumb";
import { CardFerramenta } from "./CardFerramenta";
import { Chapeu } from "./Chapeu";
import { Faq } from "./Faq";
import { FerramentaPlaceholder } from "./FerramentaPlaceholder";
import { Secao } from "./Secao";

/** Template 4: Ferramenta, com a variante leve para utilitários. */
export function FerramentaTemplate({ ferramenta }: { ferramenta: Ferramenta }) {
  const categoria = getCategoria(ferramenta.categoria);
  const relacionadas = resolver(ferramenta.relacionadas, getFerramenta);
  const guia = ferramenta.guia ? getConteudo(ferramenta.guia) : undefined;
  const completa = ferramenta.variante === "completa";

  return (
    <div className="container container--estreito">
      <Breadcrumb
        itens={[
          { nome: "Ferramentas", href: "/ferramentas" },
          ...(categoria ? [{ nome: categoria.nome, href: urlCategoria(categoria.slug) }] : []),
          { nome: ferramenta.nome, href: urlFerramenta(ferramenta) },
        ]}
      />

      <header className="cabecalho-pagina cabecalho-pagina--compacto">
        <Chapeu>{categoria?.nome}</Chapeu>
        <h1>{ferramenta.nome}</h1>
        <p className="linha-fina">{ferramenta.resumo}</p>
      </header>

      <FerramentaPlaceholder ferramenta={ferramenta} />

      {completa ? (
        <>
          <BlocoConfianca ferramenta={ferramenta} />

          {ferramenta.comoUsar.length > 0 && (
            <Secao titulo="Como usar" id="como-usar">
              <ol className="passos">
                {ferramenta.comoUsar.map((passo) => (
                  <li key={passo}>{passo}</li>
                ))}
              </ol>
            </Secao>
          )}

          <Secao titulo="Como funciona o cálculo" id="explicacao">
            <div className="corpo">
              {ferramenta.explicacao.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            {guia && (
              <p className="secao__ver-mais">
                <Link href={urlConteudo(guia)}>Leia o guia completo: {guia.titulo} →</Link>
              </p>
            )}
          </Secao>

          {ferramenta.faq.length > 0 && (
            <Secao titulo="Perguntas frequentes" id="faq">
              <Faq perguntas={ferramenta.faq} />
            </Secao>
          )}
        </>
      ) : (
        <Secao titulo="Para que serve" id="para-que-serve">
          <div className="corpo">
            {ferramenta.explicacao.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Secao>
      )}

      {relacionadas.length > 0 && (
        <Secao titulo="Ferramentas relacionadas" id="relacionadas">
          <div className="grade">
            {relacionadas.map((f) => (
              <CardFerramenta key={f.slug} ferramenta={f} />
            ))}
          </div>
        </Secao>
      )}
    </div>
  );
}
