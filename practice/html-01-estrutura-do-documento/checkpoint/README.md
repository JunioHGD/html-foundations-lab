# HTML-01.CP — Janela de Publicação: Atlas 2.4.0

**HTML Foundations Lab · Módulo 01 — Estrutura do Documento · Checkpoint integrador**

## Sobre o projeto

Aplicação frontend que simula o acompanhamento dos critérios necessários para liberar a versão **2.4.0** do produto fictício **Atlas**. O painel permite consultar pendências, atualizar estados e realizar uma liberação simulada.

Neste checkpoint, desenvolvi a **estrutura HTML e a lógica em JavaScript** a partir dos requisitos do exercício, integrando os arquivos de HTML, CSS e JS. Não há backend, persistência ou publicação real de software.

## Objetivo

Consolidar os fundamentos de estrutura do documento, metadados e atributos HTML, aplicando a manipulação do DOM para representar estados, dependências e regras de liberação.

## Funcionalidades

- **Critérios de publicação:** 18 registros no HTML, classificados por área, prioridade e estado.
- **Indicadores:** totais de critérios concluídos, pendentes e críticos pendentes, calculados a partir do DOM.
- **Filtros:** consulta por estado ou prioridade, com atualização da quantidade visível.
- **Dependências:** verificação de pré-requisitos e reversão de critérios dependentes quando necessário.
- **Histórico:** registro de alterações recentes durante a simulação.
- **Liberação simulada:** disponível quando os cinco critérios críticos estão concluídos; bloqueia novas alterações após a liberação.
- **Reinício:** restaura o estado inicial ao recarregar a página.

O painel inicia com **9 critérios concluídos, 9 pendentes e 3 críticos pendentes**, mantendo a publicação bloqueada.

## Fundamentos praticados

- Estrutura HTML5, elementos do `<head>` e organização do `<body>`.
- Uso de `id`, `class` e atributos `data-*` para identificar elementos e representar seus estados.
- Eventos, seleção de elementos e atualização do DOM com JavaScript.
- Condições e regras de negócio para controlar dependências e liberação.
- Integração com CSS externo e adaptação da interface a diferentes telas.

## Estrutura dos arquivos

```text
checkpoint/
├── README.md
├── index.html
├── styles.css
└── script.js
```

## Como executar

1. Mantenha `index.html`, `styles.css` e `script.js` na mesma pasta.
2. Abra `index.html` no navegador.
3. Altere os critérios, acompanhe os indicadores e teste a liberação e o reinício.

Não são necessárias instalações ou dependências externas.

## Observações

A implementação ainda possui pontos de melhoria: os filtros de estado e prioridade não são combinados; tentativas recusadas por dependência podem entrar no histórico; e a liberação substitui os registros anteriores do histórico.

## Visualização online

_Adicionar o link do GitHub Pages após a publicação do checkpoint._

## Aprendizado principal

O exercício reforçou como a **estrutura HTML e os atributos `data-*`** podem servir de base para o controle de estados pelo JavaScript. A principal prática foi transformar requisitos em elementos e regras que mantêm a interface atualizada por meio do DOM.
