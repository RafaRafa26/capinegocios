# Capi Negócios

Portal de ferramentas e guias para pequenos empreendedores. Visão do produto em [PROJETO.MD](PROJETO.MD).

## Rodando

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção (todas as páginas são estáticas)
```

## Estrutura

- `src/app/`: rotas (App Router)
  - `/` home
  - `/ferramentas`, `/ferramentas/[categoria]`, `/ferramentas/[categoria]/[ferramenta]`
  - `/guias`, `/guias/[slug]`, `/artigos`, `/artigos/[slug]`
  - `/tudo-sobre`, `/tudo-sobre/[tema]`
- `src/components/`: layout e templates (`HubTemplate`, `ArtigoTemplate`, `FerramentaTemplate`)
- `src/content/`: dados de exemplo (ferramentas, guias/artigos, temas, curadoria da home)
- `src/lib/`: acesso aos dados, URLs e datas
- `src/config/`: dados do site, tabelas legais por ano (`tabelas/2026.ts`) e indicadores do header (`indicadores.ts`)
- `src/styles/tokens.css`: cores (azul claro + branco), tipografia e medidas centralizadas
- `src/content/home.ts`: curadoria da home (manchete, destaque visual, lista lateral, ferramentas em destaque e layout/fundo de cada bloco de categoria)
