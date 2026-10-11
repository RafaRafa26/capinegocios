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
- `src/config/`: dados do site e tabelas legais por ano (`tabelas/2026.ts`)
- `src/styles/tokens.css`: cores, tipografia e medidas centralizadas
