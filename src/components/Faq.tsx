import type { Pergunta } from "@/content/tipos";
import { JsonLd } from "./JsonLd";

/** Perguntas frequentes com FAQPage. Usa <details>, sem JavaScript. */
export function Faq({ perguntas }: { perguntas: Pergunta[] }) {
  return (
    <>
      <div className="faq">
        {perguntas.map((p) => (
          <details key={p.pergunta}>
            <summary>{p.pergunta}</summary>
            <p>{p.resposta}</p>
          </details>
        ))}
      </div>
      <JsonLd
        dados={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: perguntas.map((p) => ({
            "@type": "Question",
            name: p.pergunta,
            acceptedAnswer: { "@type": "Answer", text: p.resposta },
          })),
        }}
      />
    </>
  );
}
