import type { Ferramenta } from "@/content/tipos";

/**
 * Espaço reservado para a ferramenta e o resultado.
 * A lógica de cada ferramenta será implementada em uma etapa posterior.
 */
export function FerramentaPlaceholder({ ferramenta }: { ferramenta: Ferramenta }) {
  return (
    <>
      <section className="ferramenta-area" aria-label={ferramenta.nome}>
        <p className="ferramenta-area__rotulo">Ferramenta</p>
        <p>
          Aqui ficará a <strong>{ferramenta.nome.toLowerCase()}</strong>. Em construção.
        </p>
      </section>
      {ferramenta.variante === "completa" && (
        <section className="resultado-area" aria-label="Resultado">
          <p className="ferramenta-area__rotulo">Resultado</p>
          <p>O resultado do cálculo aparecerá aqui.</p>
        </section>
      )}
    </>
  );
}
