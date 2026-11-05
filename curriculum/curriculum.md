# HTML Foundations Lab — Currículo

## Propósito
Desenvolver os fundamentos essenciais de HTML para construir interfaces web semânticas, acessíveis e capazes de se integrar a CSS, JavaScript e aplicações backend.

## Método de estudo
1. Estudar os tópicos do módulo na ordem proposta e experimentar conceitos isolados quando necessário.
2. Aplicar as competências em **um exercício integrador por módulo**.
3. Revisar o resultado, justificar as escolhas e registrar o que foi aprendido.

**Critério de conclusão:** conseguir explicar os conceitos, utilizá-los sem seguir um tutorial passo a passo e identificar erros relevantes. Não é necessário dominar recursos complementares para avançar.

## Percurso

| Módulo | Conteúdo | Exercício integrador |
| --- | --- | --- |
| [HTML-01 — Estrutura do Documento](../modules/html-01-estrutura-do-documento/) | 3 tópicos | Janela de Publicação — Atlas 2.4.0 |
| [HTML-02 — Conteúdo e Hierarquia Textual](../modules/html-02-conteudo-e-hierarquia-textual/) | 3 tópicos | Documento técnico estruturado |
| [HTML-03 — Hipertexto e Navegação](../modules/html-03-hipertexto-e-navegacao/) | 2 tópicos | Central de navegação |
| [HTML-04 — Estrutura Semântica de Conteúdo](../modules/html-04-estrutura-semantica-de-conteudo/) | 2 tópicos | Portal de artigos |
| [HTML-05 — Conteúdo Multimídia e Visual](../modules/html-05-conteudo-multimidia-e-visual/) | 2 tópicos | Galeria editorial acessível |
| [HTML-06 — Dados Tabulares](../modules/html-06-dados-tabulares/) | 1 tópico | Painel de dados tabulares |
| [HTML-07 — Formulários e Dados](../modules/html-07-formularios-e-dados/) | 3 tópicos | Formulário de solicitação |

---

## HTML-01 — Estrutura do Documento

**Objetivo:** Construir documentos HTML válidos e compreender a relação entre código-fonte, interpretação pelo navegador e DOM.

### Tópicos

**HTML-01.01 — Estrutura geral**
`<!doctype html>`, `<html>`, `<head>`, `<body>`, sintaxe, aninhamento, comentários e elementos vazios; idioma do documento com `lang`.

**HTML-01.02 — Cabeçalho e recursos**
`<title>`, codificação UTF-8, `viewport`, descrição da página, folhas de estilo, scripts externos e `defer`.

**HTML-01.03 — Corpo e atributos globais**
Organização do conteúdo, atributos `id`, `class`, `data-*` e noções da relação HTML–CSS–DOM.

### Competências
- Criar um documento válido com idioma e metadados apropriados.
- Referenciar corretamente estilos e scripts externos.
- Distinguir `id`, `class` e `data-*` sem confundir estrutura, estilo e estado.

### Exercício integrador
**Janela de Publicação — Atlas 2.4.0.** Aplicar a estrutura documental e os atributos HTML em um painel interativo, com HTML, CSS e JavaScript.

[Abrir módulo](../modules/html-01-estrutura-do-documento/)

---

## HTML-02 — Conteúdo e Hierarquia Textual

**Objetivo:** Estruturar texto com hierarquia e significado, priorizando legibilidade e acessibilidade.

### Tópicos

**HTML-02.01 — Títulos e parágrafos**
Hierarquia `<h1>`–`<h6>`, parágrafos `<p>` e escolha do nível de título pelo significado, não pela aparência.

**HTML-02.02 — Listas**
Listas ordenadas `<ol>`, não ordenadas `<ul>` e descritivas `<dl>`; aninhamento quando necessário.

**HTML-02.03 — Semântica textual**
Ênfase e importância com `<em>`/`<strong>`, além de `<code>`, `<abbr>`, `<time>` e outros elementos conforme o conteúdo.

### Competências
- Organizar textos com níveis de título coerentes.
- Escolher a estrutura de lista adequada à informação.
- Aplicar marcação textual semântica sem substituir CSS por elementos de significado.

### Exercício integrador
**Documento técnico estruturado.** Criar uma página de documentação com seções, listas, exemplos de código e referências textuais acessíveis.

[Abrir módulo](../modules/html-02-conteudo-e-hierarquia-textual/)

---

## HTML-03 — Hipertexto e Navegação

**Objetivo:** Conectar documentos e seções por links claros, seguros e acessíveis.

### Tópicos

**HTML-03.01 — Links e URLs**
Elemento `<a>`, `href`, URLs relativas e absolutas, âncoras, `mailto:` e `tel:`; distinção entre link e botão.

**HTML-03.02 — Navegação**
`<nav>`, organização de menus, texto descritivo de links, identificação de regiões de navegação e uso criterioso de `target`/`rel`.

### Competências
- Criar navegação entre documentos e âncoras internas.
- Distinguir links de ações executadas por botões.
- Estruturar menus de navegação semânticos.

### Exercício integrador
**Central de navegação.** Criar duas ou mais páginas interligadas, com menu, links internos e navegação acessível.

[Abrir módulo](../modules/html-03-hipertexto-e-navegacao/)

---

## HTML-04 — Estrutura Semântica de Conteúdo

**Objetivo:** Escolher elementos estruturais de acordo com a função do conteúdo.

### Tópicos

**HTML-04.01 — Regiões da página**
`<header>`, `<main>` e `<footer>`; contexto de uso na página e em seções.

**HTML-04.02 — Seções e conteúdo independente**
`<section>`, `<article>`, `<aside>` e `<div>`; significado, hierarquia e rótulos quando necessários.

### Competências
- Distribuir conteúdo em regiões semanticamente coerentes.
- Distinguir seção temática de conteúdo independente.
- Preferir elementos nativos com significado a contêineres genéricos sem necessidade.

### Exercício integrador
**Portal de artigos.** Organizar uma página com cabeçalho, navegação, conteúdo principal, artigos, informações complementares e rodapé.

[Abrir módulo](../modules/html-04-estrutura-semantica-de-conteudo/)

---

## HTML-05 — Conteúdo Multimídia e Visual

**Objetivo:** Incorporar imagens e mídias sem comprometer contexto, acessibilidade e desempenho.

### Tópicos

**HTML-05.01 — Imagens e figuras**
`<img>`, `src`, texto alternativo informativo ou vazio para imagens decorativas, `<figure>`/`<figcaption>`, dimensões e noções de imagens responsivas.

**HTML-05.02 — Áudio e vídeo — complemento**
Uso básico de `<audio>`, `<video>`, `<source>` e `<track>`; controles, legendas e alternativas acessíveis. Praticar em profundidade quando o projeto exigir.

### Competências
- Usar imagens com finalidade e texto alternativo corretos.
- Escolher legenda, dimensões e comportamento responsivo adequados.
- Reconhecer os recursos nativos básicos para áudio, vídeo e legendas.

### Exercício integrador
**Galeria editorial acessível.** Apresentar imagens e legendas em uma página semântica e responsiva; incluir áudio ou vídeo somente se houver motivo funcional.

[Abrir módulo](../modules/html-05-conteudo-multimidia-e-visual/)

---

## HTML-06 — Dados Tabulares

**Objetivo:** Representar dados com relações explícitas entre cabeçalhos, linhas e colunas.

### Tópicos

**HTML-06.01 — Tabelas de dados**
`<table>`, `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<th>`, `<td>` e `scope`; tabelas para dados, não para layout.

### Competências
- Montar uma tabela semanticamente correta.
- Associar cabeçalhos às células e incluir contexto descritivo.
- Distinguir apresentação tabular de estruturas de layout.

### Exercício integrador
**Painel de dados tabulares.** Exibir um conjunto coerente de registros em tabela com cabeçalhos, legenda e organização semântica.

[Abrir módulo](../modules/html-06-dados-tabulares/)

---

## HTML-07 — Formulários e Dados

**Objetivo:** Capturar e enviar dados com controles nativos, associações acessíveis e compreensão de submissão HTTP.

### Tópicos

**HTML-07.01 — Estrutura e submissão**
`<form>`, `action`, `method`, `name`, `GET`/`POST`, codificação de dados e botões de submissão; diferença entre enviar dados e persisti-los.

**HTML-07.02 — Controles e rótulos**
`<label>`, `<input>`, `<textarea>`, `<select>`, `<option>`, `<button>`, `<fieldset>` e `<legend>`; tipos e associação `for`/`id`.

**HTML-07.03 — Validação nativa**
`required`, `min`, `max`, `pattern`, limites de texto e `autocomplete`; limites da validação no navegador e necessidade de validação no servidor.

### Competências
- Criar formulários com nomes, rótulos e tipos adequados.
- Explicar como a submissão produz uma requisição HTTP.
- Aplicar validação nativa e reconhecer que ela não substitui a validação backend.

### Exercício integrador
**Formulário de solicitação.** Implementar formulário acessível com campos relacionados, validação e comportamento de submissão observável no navegador.

[Abrir módulo](../modules/html-07-formularios-e-dados/)

---

**Referências:** [MDN — Learn Web Development](https://developer.mozilla.org/pt-BR/docs/Learn_web_development) · [HTML Living Standard](https://html.spec.whatwg.org/) · [WAI — Accessibility Fundamentals](https://www.w3.org/WAI/fundamentals/).
