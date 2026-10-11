import Link from "next/link";

interface Props {
  titulo: string;
  id: string;
  children: React.ReactNode;
  verMais?: { texto: string; href: string };
  /** Texto curto ao lado do título. */
  descricao?: string;
  /**
   * Com `fundo`, a seção ocupa a largura toda da tela (faixa) e cria o próprio container.
   * Sem `fundo`, fica dentro do container da página.
   */
  fundo?: "branco" | "azul" | "suave";
}

/** Seção com título (barra vertical na cor da marca) e link opcional de "ver mais" no final. */
export function Secao({ titulo, id, children, verMais, descricao, fundo }: Props) {
  const conteudo = (
    <>
      <div className="secao__cabeca">
        <h2 id={id} className="secao__titulo">
          {titulo}
        </h2>
        {descricao && <p className="secao__descricao">{descricao}</p>}
      </div>
      {children}
      {verMais && (
        <p className="secao__ver-mais">
          <Link href={verMais.href}>{verMais.texto} →</Link>
        </p>
      )}
    </>
  );

  if (!fundo) {
    return (
      <section className="secao" aria-labelledby={id}>
        {conteudo}
      </section>
    );
  }

  return (
    <section className={`secao secao--faixa secao--${fundo}`} aria-labelledby={id}>
      <div className="container">{conteudo}</div>
    </section>
  );
}
