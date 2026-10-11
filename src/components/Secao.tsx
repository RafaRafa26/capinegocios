import Link from "next/link";

interface Props {
  titulo: string;
  id: string;
  children: React.ReactNode;
  verMais?: { texto: string; href: string };
}

/** Seção com título e link opcional de "ver mais" no final. */
export function Secao({ titulo, id, children, verMais }: Props) {
  return (
    <section className="secao" aria-labelledby={id}>
      <h2 id={id} className="secao__titulo">
        {titulo}
      </h2>
      {children}
      {verMais && (
        <p className="secao__ver-mais">
          <Link href={verMais.href}>{verMais.texto} →</Link>
        </p>
      )}
    </section>
  );
}
