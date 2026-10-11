import type { CategoriaSlug } from "@/content/tipos";
import { Icone } from "./Icone";

/**
 * Ilustração da categoria, usada no lugar de fotos: tile com a cor da categoria e o ícone.
 * `mini` para listas, `media` para cards, `grande` para o destaque com visual.
 */
export function IlustracaoCategoria({
  categoria,
  tamanho = "media",
}: {
  categoria: CategoriaSlug;
  tamanho?: "mini" | "media" | "grande";
}) {
  const icone = { mini: 24, media: 40, grande: 72 }[tamanho];
  return (
    <div className={`ilustracao ilustracao--${tamanho} ilustracao--${categoria}`} aria-hidden="true">
      {tamanho !== "mini" && (
        <svg className="ilustracao__fundo" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice">
          <circle cx="170" cy="18" r="46" />
          <circle cx="22" cy="108" r="34" />
          <path d="M0 84 Q50 60 100 80 T200 70" fill="none" />
        </svg>
      )}
      <Icone nome={categoria} tamanho={icone} className="ilustracao__icone" />
    </div>
  );
}
