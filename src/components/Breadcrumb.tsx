import Link from "next/link";
import { urlAbsoluta } from "@/lib/urls";
import { JsonLd } from "./JsonLd";

export interface ItemTrilha {
  nome: string;
  href: string;
}

/**
 * Trilha de navegação com BreadcrumbList. "Início" é incluído automaticamente.
 * Com `visivel={false}` gera só os dados estruturados (usado na home).
 */
export function Breadcrumb({ itens, visivel = true }: { itens: ItemTrilha[]; visivel?: boolean }) {
  const trilha = [{ nome: "Início", href: "/" }, ...itens];

  return (
    <>
      {visivel && (
      <nav aria-label="Você está em" className="trilha">
        <ol>
          {trilha.map((item, i) => {
            const atual = i === trilha.length - 1;
            return (
              <li key={item.href}>
                {atual ? <span aria-current="page">{item.nome}</span> : <Link href={item.href}>{item.nome}</Link>}
              </li>
            );
          })}
        </ol>
      </nav>
      )}
      <JsonLd
        dados={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: trilha.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.nome,
            item: urlAbsoluta(item.href),
          })),
        }}
      />
    </>
  );
}
