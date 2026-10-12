# Reparando a fila de suporte

**HTML Foundations Lab · Módulo 01 · Exercício 01 (`HTML-01.01-E01`)**

## Sobre o exercício

Atividade de diagnóstico e reparo da estrutura HTML de uma interface de acompanhamento de chamados de suporte. O desafio é identificar inconsistências na marcação e restabelecer uma hierarquia coerente de elementos, preservando a apresentação visual e as interações já fornecidas pela aplicação.

O foco é a **estrutura geral de um documento HTML** e sua relação com a árvore de elementos construída pelo navegador.

## Objetivo

Revisar e corrigir o `index.html` sem modificar os arquivos `styles.css` e `script.js`, garantindo que os quatro chamados permaneçam estruturalmente independentes e que a interface possa continuar utilizando seus filtros, contador e controles de detalhes.

## Fundamentos praticados

- Estrutura de um documento HTML5: `<!DOCTYPE html>`, `<html>`, `<head>` e `<body>`.
- Declaração do idioma principal com `lang="pt-BR"`.
- Abertura, fechamento e aninhamento correto de elementos.
- Diferença entre elementos convencionais e *void elements*.
- Escrita de comentários HTML válidos.
- Relação entre código-fonte, interpretação do navegador (*parsing*) e estrutura do DOM.

## Interface e comportamento esperado

A interface apresenta quatro chamados organizados em cards, com filtros por status (**Todos**, **Abertos**, **Em análise** e **Resolvidos**).

Após a correção da marcação, a estrutura deve permitir que:

- Cada chamado seja um filho direto independente do contêiner `.ticket-list`.
- Os filtros exibam somente os chamados correspondentes ao status selecionado.
- O contador acompanhe a quantidade de chamados visíveis.
- Cada botão **Detalhes** exiba ou oculte somente as informações do próprio chamado.

> **Escopo:** o CSS e o JavaScript foram fornecidos como parte funcional da aplicação. O trabalho do exercício concentra-se na análise e correção do HTML, sem reimplementar o layout ou as interações.

## Estrutura de arquivos

```text
.
├── index.html
├── styles.css
└── script.js
```

## Como executar

1. Mantenha os três arquivos na mesma pasta.
2. Abra `index.html` no navegador.
3. Utilize os filtros e os botões de detalhes para observar o comportamento da interface.
4. Inspecione a estrutura no painel **Elements** das ferramentas de desenvolvedor.

Para conferir alguns requisitos estruturais, execute no console do navegador:

```js
document.compatMode; // "CSS1Compat"
document.documentElement.lang; // "pt-BR"
document.querySelectorAll('.ticket-list > .ticket').length; // 4
```

## Visualização online

[Acessar o exercício no GitHub Pages](https://juniohgd.github.io/html-foundations-lab/practice/html-01-estrutura-do-documento/html-01.01-estrutura-geral-de-documento/exercises/HTML-01.01-E01-reparando-a-fila-de-suporte/)

## Aprendizado principal

Uma página pode ser exibida mesmo quando o navegador precisa recuperar erros de marcação. Por isso, **uma estrutura HTML correta é essencial para que a árvore do documento corresponda ao que a aplicação espera**, contribuindo para a previsibilidade do layout e das interações.
