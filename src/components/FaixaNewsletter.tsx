import { site } from "@/config/site";
import { Icone } from "./Icone";

/** Faixa horizontal de newsletter e canal do WhatsApp. */
export function FaixaNewsletter() {
  return (
    <section className="faixa-newsletter" aria-labelledby="newsletter-titulo">
      <div className="container faixa-newsletter__interno">
        <div className="faixa-newsletter__texto">
          <h2 id="newsletter-titulo">Receba as contas do mês prontas</h2>
          <p>Uma mensagem por semana com o que mudou nas regras e a ferramenta certa para resolver. Grátis.</p>
        </div>

        {/* Inscrição apenas visual nesta etapa: ainda não envia nada. */}
        <form className="faixa-newsletter__form" action="#">
          <label htmlFor="newsletter-email" className="sr-only">
            Seu e-mail
          </label>
          <input id="newsletter-email" type="email" name="email" placeholder="Seu melhor e-mail" autoComplete="email" />
          <button type="button" className="botao botao--claro">
            <Icone nome="email" tamanho={18} />
            Quero receber
          </button>
        </form>

        <a href={site.whatsapp} className="botao botao--whatsapp" target="_blank" rel="noopener noreferrer">
          <Icone nome="whatsapp" tamanho={20} />
          Seguir no WhatsApp
        </a>
      </div>
    </section>
  );
}
