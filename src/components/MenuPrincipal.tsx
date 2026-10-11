"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const itens = [
  { nome: "Início", href: "/", ativo: (caminho: string) => caminho === "/" },
  { nome: "Ferramentas", href: "/ferramentas", ativo: (caminho: string) => caminho.startsWith("/ferramentas") },
];

/** Menu do header. O item da seção atual fica marcado (Início na home, Ferramentas em /ferramentas/*). */
export function MenuPrincipal() {
  const caminho = usePathname() ?? "/";
  return (
    <nav aria-label="Principal" className="menu">
      <ul>
        {itens.map((item) => {
          const ativo = item.ativo(caminho);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={ativo ? "menu__item menu__item--ativo" : "menu__item"}
                aria-current={ativo ? (caminho === item.href ? "page" : "true") : undefined}
              >
                {item.nome}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
