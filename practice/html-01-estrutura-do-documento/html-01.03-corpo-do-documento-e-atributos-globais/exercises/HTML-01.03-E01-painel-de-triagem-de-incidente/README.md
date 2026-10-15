# HTML-01.03-E01 — Painel de triagem de incidentes

**HTML Foundations Lab · Módulo 01 — Estrutura do Documento · Tópico 03 — Corpo do documento e atributos globais**

## Sobre o exercício

Desenvolvimento de um **painel de triagem de incidentes** para consultar registros de serviços e filtrá-los por status ou prioridade. A interface apresenta a quantidade de ocorrências visíveis e atualiza os resultados sem recarregar a página.

> **Contexto:** exercício prático com 20 registros de exemplo definidos no HTML, sem backend ou integração com APIs.

## Objetivo

Praticar a organização do `<body>` e o uso de **`id`, `class` e `data-*`** como base para a estilização com CSS e a manipulação do DOM com JavaScript.

## Funcionalidades implementadas

- **Listagem de incidentes:** código, serviço, status e prioridade.
- **Filtros interativos:** Todos, Abertos, Em investigação, Resolvidos e Críticos.
- **Contagem dinâmica:** atualização da quantidade exibida e indicação do filtro ativo.
- **Interface responsiva:** tabela em telas maiores e registros reorganizados em cartões no mobile.

## Fundamentos praticados

- Estruturação do conteúdo com elementos HTML e organização do código.
- Uso de `id`, `class` e atributos `data-*` para identificar, categorizar e consultar registros.
- Integração entre HTML, CSS e JavaScript por meio de seletores e do DOM.
- Eventos de clique, filtragem de elementos e atualização da interface.
- Uso de `lang`, `title`, `aria-pressed` e `aria-live` em seus respectivos contextos.

## Estrutura dos arquivos

```text
HTML-01.03-E01-painel-de-triagem-de-incidentes/
├── README.md
├── index.html
├── styles.css
└── script.js
```

- `index.html` — estrutura do painel e dados dos incidentes.
- `styles.css` — apresentação visual e adaptação responsiva.
- `script.js` — filtros, estados dos botões e atualização da contagem.

## Como executar

1. Mantenha os três arquivos da aplicação na mesma pasta e abra `index.html` no navegador.
2. Utilize os filtros para consultar os incidentes e acompanhar a contagem.

Não são necessárias instalações ou dependências externas.

## Visualização online

<a href="https://juniohgd.github.io/html-foundations-lab/practice/html-01-estrutura-do-documento/html-01.03-corpo-do-documento-e-atributos-globais/exercises/HTML-01.03-E01-painel-de-triagem-de-incidentes/" target="_blank" rel="noopener noreferrer">Acessar o exercício no GitHub Pages →</a>

## Aprendizado principal

O exercício reforçou como **atributos HTML bem definidos permitem que o CSS e o JavaScript trabalhem sobre a estrutura do documento** sem depender do texto apresentado ao usuário.

## Decisões da solução

- **`id`:** referencia elementos específicos, como a listagem e os indicadores.
- **`class`:** agrupa registros e aplica estilos e estados reutilizáveis.
- **`data-*`:** fornece status e prioridade para os filtros, independentemente do texto visível.
- **Integração com o DOM:** os botões informam o filtro selecionado e o JavaScript atualiza a listagem e a contagem.
