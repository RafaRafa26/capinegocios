# Capi Negócios

**Domínio:** capinegocios.com
**Status:** fase de front-end (v1)

## O que é

Portal de conteúdo e ferramentas para **pequenos empreendedores** brasileiros (MEI, autônomos, pequenos negócios). Combina duas coisas:

1. **Ferramentas:** calculadoras, geradores de documentos e utilitários de uso recorrente no dia a dia de um negócio.
2. **Blog:** guias e artigos que tiram dúvidas práticas e explicam as regras por trás das ferramentas.

A estrutura visual é inspirada nos grandes portais de notícia (InfoMoney, CNN Brasil, Exame, g1). As ferramentas seguem o modelo de sites como iDinheiro e invertexto.

## Objetivo

Gerar **audiência recorrente**. O empreendedor deve voltar ao site porque sabe que lá encontra uma resposta, uma ideia ou uma ferramenta que resolve uma demanda em poucos minutos.

Monetização está **fora do escopo** desta fase. Não reservar espaços de anúncio.

## Público

Pequeno empreendedor, sem formação em finanças ou contabilidade, acessando principalmente **pelo celular** e chegando pelo Google ou por links compartilhados no WhatsApp. Linguagem simples e direta, sem jargão desnecessário.

## Escopo da v1: ferramentas

| Categoria | Ferramentas |
|---|---|
| **Trabalhistas** | Salário líquido, Férias, 13º salário, Horas extras, Custo do funcionário |
| **Documentos** | Recibo, Nota promissória, Orçamento |
| **Financeiras** | Juros, Margem, Ponto de equilíbrio |
| **Utilitários** | Sorteio, Geradores aleatórios |

Regras:

- Todas as ferramentas rodam **no navegador** (sem backend). Documentos são gerados em PDF no próprio navegador.
- As tabelas legais (INSS, IRRF, salário mínimo etc.) ficam **centralizadas em um único arquivo de configuração por ano**. Nenhuma calculadora pode ter esses valores fixos no próprio código.
- As calculadoras trabalhistas exibem a vigência das tabelas usadas ("Tabelas vigentes em 2026") e um aviso de que o resultado é uma estimativa informativa.

## Conteúdo

- **Guias:** conteúdo perene, como "como calcular férias" ou "o que entra no custo de um funcionário".
- **Artigos:** temas atuais sempre pelo ângulo de "o que isso muda para o pequeno negócio".
- Autor único. Não há colunistas nem equipe editorial.

## Princípio central: ferramenta e conteúdo ligados

O diferencial do site é a ligação de mão dupla entre ferramentas e conteúdo:

- **Artigo → ferramenta:** box no meio do texto ("Calcule suas férias agora").
- **Ferramenta → artigo:** explicação abaixo da ferramenta e link para o guia completo.
- **Hub por tema:** páginas "Tudo sobre" que reúnem guias e ferramentas de um assunto (ex.: Folha de pagamento = guias + as 5 calculadoras trabalhistas).

## Templates

O site inteiro é construído com 4 templates, mais o header comum e a página de listagem `/ferramentas`.

### Header (todas as páginas)

Header fixo na cor da marca: logo → menu com dois itens, **"Início"** e **"Ferramentas"** → busca.

- "Início" fica ativo na home; "Ferramentas" fica ativo em `/ferramentas` e em todas as páginas de ferramenta (`/ferramentas/...`).
- Categorias de ferramentas, Guias e Artigos **não** aparecem no header: o acesso a eles é pela home, pela página `/ferramentas` e pelo rodapé.
- Sem faixa de indicadores.

### 1. Home (blog)

A home é o **feed de guias e artigos**, majoritariamente em **banners**: card com o visual da categoria (ilustração, não foto), chapéu, título e linha fina. De cima para baixo:

1. Header
2. Banner principal grande. Pode ter "satélites" logo abaixo (links relacionados, geralmente a ferramenta do tema)
3. 2 a 4 banners médios
4. Bloco discreto de ferramentas: "Ferramentas mais usadas" (lista numerada) + link "Ver todas as ferramentas". Fica na lateral no desktop e em formato compacto, depois dos banners médios, no celular
5. Faixa horizontal de newsletter / canal do WhatsApp
6. O restante do feed em grade de banners menores, do mais recente ao mais antigo
7. Rodapé como mapa do site

Ferramentas têm peso menor na home: não há blocos por categoria de ferramenta. A curadoria (banner principal, médios, satélites e mais usadas) fica em `src/content/home.ts`.

### Página /ferramentas

Lista com **todas as ferramentas agrupadas por categoria** (Trabalhistas, Documentos, Financeiras, Utilitários), com atalhos para cada grupo no topo. Cada item tem ícone, nome, descrição curta, selo do tipo e botão de ação (Calcular, Gerar ou Sortear). Cada grupo termina com link para a página da categoria.

### 2. Categoria / Hub "Tudo sobre"

Título e descrição curta do tema → ferramentas do tema → guias e artigos em lista → links para temas relacionados.

### 3. Artigo

Na ordem: breadcrumb → chapéu (categoria) → título → linha fina (subtítulo) → autor + data de publicação e de atualização + tempo de leitura → compartilhar (WhatsApp primeiro) → corpo → "Leia também" (card com título e resumo) e box de ferramenta no meio do texto → tags → caixa do autor → relacionados.

Coluna de leitura com largura máxima de ~700px. Sidebar só no desktop.

### 4. Ferramenta

Na ordem: breadcrumb → título + 1 frase → **ferramenta acima da dobra** → resultado → bloco de confiança (data de atualização do cálculo, vigência das tabelas, aviso informativo) → como usar → explicação da regra → FAQ → ferramentas relacionadas.

**Variante leve** para utilitários (sorteio, geradores): ferramenta + um parágrafo "para que serve" + ferramentas relacionadas.

## Padrões visuais obrigatórios

- **Chapéu** (rótulo pequeno da categoria) acima do título em todo card e em toda página de conteúdo, exceto dentro de uma seção ou grupo da própria categoria, onde seria redundante.
- Hierarquia clara de destaques na home: um banner grande, 2 a 4 médios, o resto em grade.
- Listas "mais usadas" sempre numeradas.
- **Mobile-first.** Evitar carrosséis: no celular, o conteúdo fica em lista vertical.
- Visual limpo, sem a poluição dos portais. Poucas categorias, muito espaço em branco.

## Requisitos técnicos

- **Stack:** Next.js (App Router) com TypeScript.
- Páginas estáticas ou pré-renderizadas. O conteúdo precisa ser indexável pelo Google.
- Carregamento rápido no celular (Core Web Vitals como referência).
- URLs legíveis: `/ferramentas/trabalhistas/calculadora-de-ferias`, `/guias/como-calcular-ferias`, `/tudo-sobre/folha-de-pagamento`.
- Dados estruturados (schema.org): `Article` nos artigos, `FAQPage` nos FAQs, `BreadcrumbList` em todas as páginas.
- Acessibilidade básica: link "pular para o conteúdo", contraste adequado, formulários com labels.

## Fora do escopo (v1)

- Anúncios e monetização
- Login ou contas de usuário
- Comentários
- Ferramentas que dependem de API externa (consulta de CNPJ, CEP, cotação de moedas) e conversores de arquivo. Ficam para versões futuras.