import { urlAbsoluta } from "@/lib/urls";

/** Links de compartilhamento. WhatsApp sempre primeiro. Sem JavaScript nem scripts de terceiros. */
export function Compartilhar({ titulo, caminho }: { titulo: string; caminho: string }) {
  const url = urlAbsoluta(caminho);
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(titulo);

  const redes = [
    { nome: "WhatsApp", href: `https://wa.me/?text=${encodeURIComponent(`${titulo} ${url}`)}`, classe: "compartilhar__whatsapp" },
    { nome: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${u}` },
    { nome: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
    { nome: "X", href: `https://x.com/intent/post?text=${t}&url=${u}` },
    { nome: "E-mail", href: `mailto:?subject=${t}&body=${u}` },
  ];

  return (
    <div className="compartilhar">
      <span className="compartilhar__rotulo">Compartilhar:</span>
      <ul>
        {redes.map((r) => (
          <li key={r.nome}>
            <a href={r.href} className={r.classe} target="_blank" rel="noopener noreferrer">
              {r.nome}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
