import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container container--estreito">
      <header className="cabecalho-pagina">
        <h1>Página não encontrada</h1>
        <p className="linha-fina">O endereço pode ter mudado ou a página ainda não existe.</p>
      </header>
      <p>
        <Link href="/" className="botao">
          Voltar para o início
        </Link>
      </p>
    </div>
  );
}
