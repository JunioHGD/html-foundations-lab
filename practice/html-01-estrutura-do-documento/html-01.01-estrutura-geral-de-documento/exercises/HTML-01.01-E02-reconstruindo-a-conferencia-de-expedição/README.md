# HTML-01.01-E02 — Reconstruindo a conferência de expedição

**HTML Foundations Lab** · Módulo 01 — Estrutura do documento · HTML-01.01 — Estrutura geral de documento

## Sobre o exercício

Atividade prática de **reconstrução e integração de HTML**, desenvolvida a partir de um cenário em que o documento de uma interface de conferência de expedição foi perdido durante a resolução de um conflito de merge.

O desafio consistiu em reconstruir o arquivo `index.html` com base nos requisitos da atividade e na estrutura esperada pelos arquivos `styles.css` e `script.js`, **sem modificar o estilo ou a lógica já fornecidos**.

## Objetivo

Criar um documento HTML válido, bem estruturado e capaz de integrar corretamente a apresentação e o comportamento existentes, permitindo que a equipe de expedição confira as etapas de um lote antes de liberá-lo para transporte.

## Interface e comportamento

O painel apresenta o lote **#EXP-248** e quatro etapas de conferência:

1. **Produtos conferidos** — verificação das quantidades e dos códigos dos produtos.
2. **Embalagem lacrada** — confirmação das condições da embalagem.
3. **Etiqueta de transporte** — conferência da etiqueta e do destino.
4. **Nota fiscal anexada** — verificação da documentação fiscal.

A interface permite marcar e reabrir etapas individualmente, atualiza o progresso textual e visual e mantém a liberação do lote indisponível enquanto houver pendências. Após a conclusão das quatro etapas, o lote pode ser liberado; nesse estado final, os controles de conferência ficam desabilitados.

> **Escopo da implementação:** essas interações são executadas pelo JavaScript fornecido. O trabalho realizado neste exercício foi construir a estrutura HTML necessária para que ele funcionasse corretamente.

## Fundamentos praticados

- Estrutura básica de um documento HTML moderno, incluindo `<!DOCTYPE html>`, `<html>`, `<head>` e `<body>`.
- Definição do idioma principal com `lang="pt-BR"`.
- Abertura, fechamento e aninhamento coerentes dos elementos.
- Uso correto de elementos *void* e de comentários HTML.
- Organização dos elementos de interface em uma hierarquia consistente.
- Integração de arquivos externos de CSS e JavaScript.
- Correspondência entre a estrutura do HTML e os seletores, classes e identificadores utilizados pela aplicação.
- Relação entre o código-fonte HTML e a árvore DOM interpretada pelo navegador.

## Estrutura dos arquivos

```text
├── index.html   # Documento HTML reconstruído na atividade
├── styles.css   # Estilos fornecidos, preservados
└── script.js    # Comportamento fornecido, preservado
```

A atividade foi concentrada no `index.html`. Os arquivos `styles.css` e `script.js` foram utilizados como referência para identificar a estrutura esperada e mantidos sem alterações.

## Como executar

1. Mantenha `index.html`, `styles.css` e `script.js` no mesmo diretório.
2. Abra `index.html` em um navegador.
3. Marque e reabra as etapas para acompanhar a atualização do progresso.
4. Conclua as quatro etapas e utilize o botão **Liberar lote**.

Não são necessárias dependências externas, instalação de pacotes ou servidor de desenvolvimento.

## Verificações

Algumas verificações da estrutura podem ser realizadas no console das ferramentas de desenvolvedor do navegador:

```javascript
document.compatMode;
// "CSS1Compat"

document.documentElement.lang;
// "pt-BR"

document.querySelectorAll('.check-list > .check-item').length;
// 4
```

Na verificação das interações, o progresso deve iniciar em **0 de 4 etapas concluídas**, acompanhar as mudanças individuais, habilitar a liberação somente ao atingir **4 de 4** e impedir novas alterações após a liberação do lote.

## Visualização online

_Adicione aqui o link direto para o exercício no GitHub Pages após a publicação._

## Aprendizado

Este exercício reforçou a importância de compreender **a estrutura que uma aplicação espera receber do HTML**. Mais do que fazer a página aparecer, foi necessário organizar o documento de forma que os estilos e os comportamentos existentes encontrassem os elementos e as relações corretas.
