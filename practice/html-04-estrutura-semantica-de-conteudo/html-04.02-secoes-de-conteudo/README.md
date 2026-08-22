# HTML-04.02 — Seções de conteúdo (`<section>`, `<article>`, `<aside>`)

Organizar conteúdo em seções e artigos independentes de forma semântica.

## Fundamentos

- `<article>` para conteúdo independente e reutilizável (e.g. post, comentário, widget). Cada `<article>` deve ter seu próprio título interno.
- `<section>` para agrupar conteúdo temático genérico, com pelo menos um título interno. Usar quando não houver elemento mais específico.
- `<aside>` para conteúdo tangencial/complementar (e.g. barra lateral, citações), que pode ser removido sem afetar o fluxo principal.
- Aninhamento: `<article>`s podem estar dentro de `<section>` ou vice-versa conforme necessário, e `<aside>` fica em paralelo ao conteúdo.

## Competências

Ao concluir esta unidade, devo conseguir:

- Identificar se um pedaço de conteúdo deve ser `<article>` (auto-suficiente) ou `<section>` (parte de algo maior).
- Inserir `<aside>` para informações auxiliares (sobre o autor, links extras).
- Garantir que cada `<section>` ou `<article>` inclua um cabeçalho próprio (`<h*>`).

## Prática

Os exercícios desta unidade aplicam os fundamentos estudados por meio de implementação, análise, diagnóstico e justificativa quando pertinentes.

[Ver exercícios →](./exercises/)

## Web Integration

Exemplo: marcar um blog onde cada post é `<article>`, seções temáticas são `<section>`, e uma barra lateral de links relacionados dentro de `<aside>`, possibilitando estilizar layout de duas colunas.

[Ver Web Integration →](../../../web-integration/)

---

### Navegação

[← HTML-04.01 — Introdução e rodapé de página/seções](../html-04.01-introducao-e-rodape-de-pagina-secoes/) ·
[↑ HTML-04 — Estrutura Semântica de Conteúdo](../README.md) ·
[Checkpoint HTML-04 →](../checkpoint/)
