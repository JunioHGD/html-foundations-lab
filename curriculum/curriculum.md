# HTML Foundations Lab — Currículo Canônico

## Escopo

Este laboratório forma o domínio dos **fundamentos estruturais e semânticos do HTML** para o desenvolvimento Web full stack. O HTML é o alicerce de toda página Web, definindo a estrutura de documento, hierarquia de conteúdo e pontos de interação com CSS, JavaScript e servidores. Espera-se que o desenvolvedor full stack entenda HTML o suficiente para criar páginas Web semanticamente corretas e acessíveis, além de saber como o navegador faz o parse desse HTML para montar o DOM e comunicar com as demais camadas (CSS, scripts e backend). O objetivo é transmitir não apenas a sintaxe dos elementos, mas principalmente *o significado* de cada marcação e como usá-la profissionalmente em situações reais. A ênfase está em estruturar documentos corretamente, usar semântica nativa e garantir acessibilidade básica (por exemplo, cabeçalhos, rótulos e texto alternativo), além de compreender como formulários enviam dados ao servidor.

## Mapa curricular

| ID | Bloco |
|:---:|---|
| `HTML-01` | [Estrutura do Documento](../practice/html-01-estrutura-do-documento/) |
| `HTML-02` | [Conteúdo e Hierarquia Textual](../practice/html-02-conteudo-e-hierarquia-textual/) |
| `HTML-03` | [Hipertexto e Navegação](../practice/html-03-hipertexto-e-navegacao/) |
| `HTML-04` | [Estrutura Semântica de Conteúdo](../practice/html-04-estrutura-semantica-de-conteudo/) |
| `HTML-05` | [Conteúdo Multimídia e Visual](../practice/html-05-conteudo-multimidia-e-visual/) |
| `HTML-06` | [Dados Tabulares](../practice/html-06-dados-tabulares/) |
| `HTML-07` | [Formulários e Dados](../practice/html-07-formularios-e-dados/) |

---

# HTML-01 — Estrutura do Documento

## Objetivo

Desenvolver a competência de criar a estrutura inicial de uma página HTML5 válida, incluindo declaração do tipo de documento e composição dos elementos primários de `<head>` e `<body>`.

## Unidades

### HTML-01.01 — Estrutura geral de documento

**Objetivo**

Saber iniciar um documento HTML5 válido com `<!DOCTYPE html>`, `<html>` e idiomas apropriados.

**Fundamentos**

- Declaração `<!DOCTYPE html>` (necessária para modo padrão de renderização).
- Elemento raiz `<html>` e atributos globais básicos (ex.: `lang`).
- Comentários HTML (`<!-- -->`).
- Regras de sintaxe: tags de abertura/fechamento, aninhamento correto, ou elementos vazios (void elements como `<br>`).

**Competências**

- Criar um arquivo HTML básico corretamente estruturado.
- Garantir que tags estejam bem formadas e aninhadas, evitando problemas de parse.
- Incluir atributos globais essenciais (e.g. `lang`).
- Diferenciar elementos normais de elementos void (que não exigem fechamento, ex.: `<meta>`, `<br>`, `<img>`).

**Dependências**

Nenhuma (inicial).

**Web Integration**

Exemplo: criar uma página “template” inicial conectando um arquivo CSS via `<link>` e um arquivo JS via `<script>` no `<head>`, prontos para aplicação de estilos e scripts.

### HTML-01.02 — Cabeçalho e Metadados

**Objetivo**

Estruturar o `<head>` de um documento HTML com metadados essenciais.

**Fundamentos**

- `<head>` como container de metadados invisíveis (título, links e scripts).
- `<title>` para título da página (usado em abas e bookmarks).
- `<meta charset="utf-8">` para codificação (UTF-8) e `<meta name="viewport">` para responsividade.
- Inclusão de folhas de estilo CSS com `<link rel="stylesheet" href="...">` e scripts com `<script src="..."></script>`.
- (Opcional) `<base>`, `<meta>` de SEO (descrição), e favicons.

**Competências**

- Implementar o `<head>` com título apropriado e codificação UTF-8.
- Referenciar arquivos CSS e JS externos corretamente.
- Compreender por que esses metadados são importantes para a página (render, SEO, usabilidade).

**Dependências**

HTML-01.01.

**Web Integration**

Exemplo: estruturar o `<head>` de um site com `<link>` de CSS e `<script>` de JS já integrados, preparando para estilização e interatividade.

### HTML-01.03 — Corpo do documento e atributos globais

**Objetivo**

Conhecer o papel do `<body>` e usar atributos globais em elementos HTML.

**Fundamentos**

- `<body>` como container do conteúdo visível da página.
- Importância de uma boa indentação e espaçamento (code style) para legibilidade; quebra de linha e espaçamentos são ignorados pelo render na maioria dos casos.
- Atributos globais comuns: `id` (identificador único, útil como alvo de links internos `href="#id"` ou de CSS/JS), `class` (listas de classes para estilo e script).
- Exemplo de uso: `<h1 class="heading">Meu Título</h1>` permite aplicar estilos via CSS a `.heading`.
- Atributos de acessibilidade global (e.g. `lang`, `title` de tooltip) e `data-*` (para armazenar dados customizados).

**Competências**

- Construir o `<body>` inicial com um título (por ex. `<h1>`) e um parágrafo de exemplo.
- Aplicar `id` e `class` para estruturar/categorização de conteúdo visando CSS/JS.
- Entender como elementos no `<body>` serão alvo de scripts via DOM.

**Dependências**

HTML-01.01, HTML-01.02.

**Web Integration**

Exemplo: criar um título com `id` único para servir como alvo de um link `href="#id"` e estilizar via CSS (classe), ilustrando a ponte HTML → CSS/JS.

## Checklist

Ao concluir este bloco, devo conseguir:

- [ ] Criar um arquivo HTML válido com `<!DOCTYPE html>` e elementos `<html>`, `<head>`, `<body>`.
- [ ] Inserir metadados no `<head>`: `<title>`, `<meta charset="UTF-8">`, links para CSS e scripts.
- [ ] Estruturar conteúdo básico no `<body>` usando `<h1>`, `<p>` e atribuir `id`/`class` corretamente.
- [ ] Garantir que o documento seja semanticamente correto e pronto para receber estilos JavaScript integrados.

## Validação

Construir um documento HTML inicial completo com título, meta e links, e um corpo contendo um cabeçalho (`<h1>`) e parágrafos. O documento deve ser válido e formatado corretamente, exibindo o título na aba e contendo referências ao CSS/JS externos.

# HTML-02 — Conteúdo e Hierarquia Textual

## Objetivo

Desenvolver a capacidade de estruturar semanticamente o conteúdo textual de uma página, usando cabeçalhos, parágrafos e listas de forma lógica e acessível.

## Unidades

### HTML-02.01 — Títulos e Parágrafos

**Objetivo**

Usar elementos de título (`<h1>`–`<h6>`) e `<p>` para organizar e estruturar o texto em níveis hierárquicos corretos.

**Fundamentos**

- Elementos de cabeçalho `<h1>` a `<h6>`, onde `<h1>` é o nível mais alto de seção, `<h2>` subtítulos, etc. Deve-se evitar pular níveis arbitrariamente.
- Apenas um `<h1>` idealmente por página (título principal), subsequentes definem subseções.
- `<p>` para parágrafos de texto corrido. Cada bloco de texto separado em um `<p>` independente.
- Acessibilidade: leitores de tela usam a hierarquia de títulos como guia de navegação.
- Não usar títulos apenas por estilo (fontes devem ser alteradas via CSS, não mudando nível de `<h>`).

**Competências**

- Criar uma estrutura de documento textual coerente (ex.: título e subtítulos aninhados logicamente).
- Inserir parágrafos com conteúdo relevante, garantindo que cada bloco de texto fique dentro de `<p>`.
- Explicar por que cada nível de cabeçalho foi escolhido (ex.: `<h2>` para capítulos, `<h3>` para seções).

**Dependências**

HTML-01.03.

**Web Integration**

Exemplo: montar o HTML de uma página de artigo com um `<h1>` principal e `<h2>`/`<h3>` subsequentes, que será estilizado posteriormente via CSS (e.g. tamanhos de fonte).

### HTML-02.02 — Listas

**Objetivo**

Marcar agrupamentos de itens usando listas HTML apropriadas.

**Fundamentos**

- `<ul>` para listas não ordenadas e `<ol>` para listas ordenadas, com cada item em `<li>`.
- Caso necessário, `<dl>` para listas de termos-definição (`<dt>` e `<dd>`).
- Uso semântico de listas: para itens enumeráveis ou coleções relacionadas, em vez de `<div>` com quebras.
- Navegação: muitas listas também são usadas em menus de navegação (ex.: `<nav><ul><li><a>...`).

**Competências**

- Transformar um grupo de itens em uma lista semântica `<ul>` ou `<ol>`.
- Aninhar listas dentro de listas quando necessário (listas multi-nível).
- Usar `<dl>` para pares termo/descrição quando fizer sentido.

**Dependências**

HTML-01.03.

**Web Integration**

Exemplo: criar uma lista de recursos (com `<ul>`) ou instruções passo a passo (`<ol>`), depois aplicar estilos ou scripts (e.g. toggle de visibilidade de subitens).

### HTML-02.03 — Formatação textual semântica

**Objetivo**

Aplicar marcações inline para enfatizar ou caracterizar texto sem alterar a estrutura.

**Fundamentos**

- `<strong>` para ênfase forte (implica importância) e `<em>` para ênfase sutil (tonal) – elementos semânticos de destaque.
- Outros elementos semânticos de nível de frase: `<mark>` (texto destacado), `<abbr>` (abreviações, com `title` expandido), `<cite>` (título de obra), `<code>` (trecho de código).
- Evitar uso de tags puramente apresentacionais (como `<b>`, `<i>`, `<font>`); priorizar semântica para estilo.
- Acessibilidade: esses elementos têm significado para leitores de tela e motores de busca.

**Competências**

- Usar `<strong>` e `<em>` em trechos de texto para enfatizar conteúdo de forma acessível.
- Identificar quando utilizar `<abbr>`, `<cite>`, `<code>` etc., explicando seu significado.

**Dependências**

HTML-02.01.

**Web Integration**

Exemplo: marcar termos importantes com `<strong>` e `<abbr title="">`, e estilizar com CSS (cores ou tipografia) para reforçar a semântica.

## Checklist

Ao concluir este bloco, devo conseguir:

- [ ] Estruturar documentos com uma hierarquia de títulos correta (um `<h1>` principal e subsequentes coerentes).
- [ ] Envolver cada parágrafo em `<p>` separadamente.
- [ ] Criar listas ordenadas `<ol>` e não ordenadas `<ul>` para conjuntos de itens.
- [ ] Utilizar marcações inline semânticas (e.g. `<strong>`, `<em>`) quando necessário, em vez de estilizar visualmente.

## Validação

Dada a descrição de um artigo (título, seções, itens), estruturar corretamente o conteúdo usando `<h1>`-`<h6>`, `<p>`, `<ul>/<ol>`. O resultado deve refletir a hierarquia de informações e ser acessível semânticamente.

# HTML-03 — Hipertexto e Navegação

## Objetivo

Aprender a criar hiperlinks e blocos de navegação semânticos, permitindo ao usuário transitar entre páginas ou seções.

## Unidades

### HTML-03.01 — Elemento de link (`<a>`)

**Objetivo**

Inserir e configurar hiperlinks usando `<a>` adequadamente.

**Fundamentos**

- Uso do elemento `<a href="URL">texto</a>` para criar link a outra página ou recurso.
- `href` pode ser URL absoluta, relativa (ou fragmento interno `#id`), ou protocolos especiais (`mailto:`, `tel:`).
- O conteúdo do `<a>` deve descrever o destino do link.
- A tecla Enter ou clique ativa o link.
- Acessibilidade: links exigem texto significativo (não “clique aqui”) para leitores de tela.

**Competências**

- Criar links entre páginas do mesmo site (navegação interna) e para sites externos.
- Incluir links de email (`href="mailto:..."`) e telefone (`href="tel:..."`).
- Implementar links que apontam para seções da própria página usando `id` no destino.

**Dependências**

HTML-02.01.

**Web Integration**

Exemplo: adicionar links em um parágrafo para um site externo (abrir em nova aba com `target="_blank"`) e um link interno `#ancora`.

### HTML-03.02 — Elemento de navegação (`<nav>`)

**Objetivo**

Usar `<nav>` para marcar áreas de navegação do documento.

**Fundamentos**

- `<nav>` denota uma seção de links de navegação (menus, índices).
- Não é necessário envolver todos os links em `<nav>`, apenas grupos significativos.
- Cada `<nav>` pode ser rotulado (ex.: via `aria-label`) para distinguir (menu principal, rodapé, seções).
- Geralmente, menus são implementados como `<nav><ul><li><a>...</a></li>...</ul></nav>`.

**Competências**

- Envolver blocos de links de menu dentro de `<nav>`.
- Explicar quando usar `<nav>` (e.g. menu principal, rodapé, sumário), evitando sobreuso.
- Inserir atributo ARIA de rótulo se houver múltiplos `<nav>`.

**Dependências**

HTML-02.01.

**Web Integration**

Exemplo: criar um menu de navegação horizontal usando `<nav><ul><li><a>...</a></li></ul></nav>` e posteriormente estilizar via CSS para barra de menu.

## Checklist

Ao concluir este bloco, devo conseguir:

- [ ] Implementar corretamente links `<a>` com `href` para páginas internas e externas.
- [ ] Criar links especiais (e-mail, telefone) e fragmentos internos com `#id`.
- [ ] Agrupar menus de navegação dentro de `<nav>`, justificando seu uso.
- [ ] Garantir texto de link descritivo para navegabilidade (sem “clique aqui”).

## Validação

Dada uma lista de páginas, montar um menu de navegação usando `<nav>` contendo links (`<a>`) para essas páginas. Garantir links absolutos e relativos funcionais, e que o menu seja marcado semanticamente.

# HTML-04 — Estrutura Semântica de Conteúdo

## Objetivo

Capacitar na organização semântica de grandes seções da página usando elementos estruturais HTML5 (landmarks).

## Unidades

### HTML-04.01 — Introdução e rodapé de página/seções

**Objetivo**

Usar `<header>`, `<footer>` e `<main>` para delimitar áreas de introdução, conteúdo principal e encerramento.

**Fundamentos**

- `<header>` representa conteúdo introdutório ou de navegação em uma seção ou na página. Pode conter logotipo, título do site, subtítulo, busca etc.
- `<footer>` representa o rodapé de sua seção ancestral (ou rodapé do site) com informação de autoria, direitos, links complementares.
- `<main>` denota o conteúdo principal único da página (apenas um `<main>` por documento, excluindo cabeçalhos/rodapés globais).
- Ao aninhar `<header>`/`<footer>` dentro de `<article>` ou `<section>`, eles referem-se àquele bloco, não ao site inteiro.

**Competências**

- Colocar `<header>` no topo da página para marcação de logo/título geral.
- Usar `<footer>` para informações de rodapé (copyright, contato).
- Envolver o conteúdo principal em `<main>`.
- Explicar a diferença entre `<header>` de página e `<header>` interno a artigo/seção.

**Dependências**

HTML-02.01.

**Web Integration**

Exemplo: estruturar um layout de página com `<header>` (logo/menu), `<main>` (principal conteúdo) e `<footer>`, deixando essa divisão clara para estilos CSS (cabeçalho fixo, rodapé adaptado).

### HTML-04.02 — Seções de conteúdo (`<section>`, `<article>`, `<aside>`)

**Objetivo**

Organizar conteúdo em seções e artigos independentes de forma semântica.

**Fundamentos**

- `<article>` para conteúdo independente e reutilizável (e.g. post, comentário, widget). Cada `<article>` deve ter seu próprio título interno.
- `<section>` para agrupar conteúdo temático genérico, com pelo menos um título interno. Usar quando não houver elemento mais específico.
- `<aside>` para conteúdo tangencial/complementar (e.g. barra lateral, citações), que pode ser removido sem afetar o fluxo principal.
- Aninhamento: `<article>`s podem estar dentro de `<section>` ou vice-versa conforme necessário, e `<aside>` fica em paralelo ao conteúdo.

**Competências**

- Identificar se um pedaço de conteúdo deve ser `<article>` (auto-suficiente) ou `<section>` (parte de algo maior).
- Inserir `<aside>` para informações auxiliares (sobre o autor, links extras).
- Garantir que cada `<section>` ou `<article>` inclua um cabeçalho próprio (`<h*>`).

**Dependências**

HTML-02.01, HTML-04.01.

**Web Integration**

Exemplo: marcar um blog onde cada post é `<article>`, seções temáticas são `<section>`, e uma barra lateral de links relacionados dentro de `<aside>`, possibilitando estilizar layout de duas colunas.

## Checklist

Ao concluir este bloco, devo conseguir:

- [ ] Utilizar `<header>`, `<footer>` e `<main>` para as regiões globais da página.
- [ ] Dividir o conteúdo em `<section>` com títulos apropriados quando for parte de uma página.
- [ ] Identificar conteúdos independentes como `<article>` (e.g. post, notícia).
- [ ] Inserir `<aside>` para material acessório, explicando seu contexto.

## Validação

Descrever a estrutura de uma página (e.g. site de notícias) usando `<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`. O HTML deve refletir corretamente a hierarquia semântica do conteúdo.

# HTML-05 — Conteúdo Multimídia e Visual

## Objetivo

Aprender a incorporar imagens e outros recursos multimídia corretamente, garantindo descrição e acessibilidade.

## Unidades

### HTML-05.01 — Imagens e figuras

**Objetivo**

Inserir imagens no HTML com `<img>` e legendar usando `<figure>/<figcaption>`.

**Fundamentos**

- `<img src="URL" alt="texto">` para incluir imagens; `alt` é obrigatório e descreve a imagem para acessibilidade. Texto alternativo permite a leitores de tela entender a imagem e aparece em caso de erro de carregamento.
- `<figure>` envolve uma imagem (ou conteúdo multimídia) e `<figcaption>` fornece uma legenda descritiva.
- Diferenciar `<img>` de background CSS – imagens de conteúdo devem estar em HTML, não via estilo.
- Definir dimensões (`width`/`height`) para evitar *layout shifts*.

**Competências**

- Adicionar uma imagem relevante com alt descritivo, explicando por que o alt foi escrito assim.
- Envolver imagens significativas em `<figure>`/`<figcaption>` para legendas contextuais.
- Usar imagens decorativas com `alt=""` vazio (sem conteúdo informativo).

**Dependências**

HTML-04.02.

**Web Integration**

Exemplo: exibir uma foto ilustrativa usando `<figure>`, estilizar via CSS (responsivo) e, no JavaScript, acessá-la pelo DOM para funcionalidade (e.g. lightbox).

### HTML-05.02 — Áudio e Vídeo

**Objetivo**

Inserir elementos `<audio>` e `<video>` com suporte a múltiplas fontes e fallback.

**Fundamentos**

- `<audio controls src="arquivo.mp3">` para som, e `<video controls>` para vídeo. Atributo `controls` ativa os controles padrão (play/pause/volume).
- Incluir múltiplas fontes com `<source src="..." type="...">` dentro de `<video>` ou `<audio>` para format compatibility.
- Conteúdo dentro das tags (`<p>` ou `<a>`) atua como fallback (ex.: link de download) caso o elemento não seja suportado.
- Legendas e transcrições: `<track kind="captions">` (via WebVTT) ou fornecer texto alternativo para acessibilidade. Vídeos devem ter legendas/transcrição para surdos e audiodescrição para cegos.

**Competências**

- Incorporar um player de áudio e/ou vídeo simples com pelo menos duas fontes.
- Fornecer texto alternativo ou link como fallback (ex.: “seu navegador não suporta, faça download”).
- Opcional: adicionar `<track>` para legendas (comente a importância).

**Dependências**

HTML-05.01.

**Web Integration**

Exemplo: uma página de mídia com `<video>`. Em CSS, definir tamanho e posicionamento. Em JS, controlar eventos do player ou atualizar legendas dinamicamente.

## Checklist

Ao concluir este bloco, devo conseguir:

- [ ] Incluir imagens com `<img>` usando `src` correto e texto alternativo significativo.
- [ ] Usar `<figure>` e `<figcaption>` para legendas sempre que fizer sentido.
- [ ] Embutir áudio/vídeo com `<audio>`/`<video>` e atributos `controls`, incluindo múltiplos `<source>` para cobertura de formatos.
- [ ] Fornecer conteúdo alternativo (legendas ou links) para mídias não suportadas.

## Validação

Criar um documento HTML que exiba pelo menos uma imagem (com alt) dentro de `<figure>` e um vídeo incorporado com dois formatos de fonte. Deve ter controles nativos e fallback (por ex., link de download ou legenda).

# HTML-06 — Dados Tabulares

## Objetivo

Habilitar a apresentação de informações estruturadas em formato tabular de forma semântica.

## Unidades

### HTML-06.01 — Tabelas

**Objetivo**

Usar elementos de tabela HTML para representar dados em linhas e colunas.

**Fundamentos**

- Estrutura de `<table>` contendo `<caption>` (descrição da tabela), `<thead>` (linha(s) de cabeçalho), `<tbody>` (corpo da tabela), `<tr>` (linhas), `<th>` (cabeçalhos) e `<td>` (células).
- Atributo `scope` nos `<th>` para definir se o cabeçalho é de linha ou coluna.
- Uso apropriado: tabela somente para dados tabulares, nunca para layout.
- `<caption>` opcional, mas importante para acessibilidade (nome da tabela).

**Competências**

- Criar uma tabela com dados fictícios incluindo `<caption>`, `<th>` e `<td>`.
- Indicar claramente cabeçalhos e áreas (e.g. primeira linha de `<th scope="col">`).
- Explicar decisões (por que usar `<table>` em vez de listas).

**Dependências**

HTML-02.02.

**Web Integration**

Exemplo: gerar uma tabela de dados estáticos e aplicar estilo CSS (ex.: zebra stripes) e possivelmente usar JS para ordenar ou filtrar as colunas.

## Checklist

Ao concluir este bloco, devo conseguir:

- [ ] Implementar uma tabela HTML completa com `<caption>`, `<thead>`, `<tbody>`, linhas e células.
- [ ] Identificar corretamente colunas usando `<th scope="col">` (ou scope apropriado) e `<td>` para dados.
- [ ] Usar tabela apenas para dados tabulares, e explicar sua estrutura.

## Validação

Dado um conjunto de dados (ex.: lista de produtos com preço e quantidade), montar uma tabela HTML clara e acessível que apresente essas informações com cabeçalhos e descrição.

# HTML-07 — Formulários e Dados

## Objetivo

Desenvolver competência para criar formulários HTML funcionais, entendendo a relação entre controles, labels e submissão de dados ao servidor.

## Unidades

### HTML-07.01 — Estrutura de formulários e submissão

**Objetivo**

Construir a estrutura básica de um formulário, compreendendo `action`, `method` e agrupamentos.

**Fundamentos**

- `<form action="URL" method="get/post">` inicia o formulário. `action` indica onde enviar, `method` define o método HTTP.
- Comportamento de GET (parâmetros na URL) versus POST (dados no corpo).
- `name` em cada controle determina o *nome* do dado enviado. Form data é transmitido como pares nome=valor no pedido HTTP.
- `<fieldset>` e `<legend>` para agrupar controles relacionados (e.g. informações de pagamento) com legenda descritiva.
- `<button type="submit">` ou `<input type="submit">` para enviar formulário. `<button type="button">` é apenas controle cliente.
- Validação nativa: atributos como `required`, `pattern`, `min`/`max`.

**Competências**

- Criar um `<form>` com `action` e `method` definidos.
- Agrupar campos em `<fieldset>` quando faz sentido, incluindo `<legend>`.
- Diferenciar botões de envio e reset.
- Identificar como os dados serão enviados (ex.: visualizando a query string em GET).

**Dependências**

HTML-01.01.

**Web Integration**

Exemplo: um formulário de contato (`<form method="post" action="/submit">`) com CSS para layout de campos e JavaScript para validação do lado cliente antes do envio.

### HTML-07.02 — Controles, Labels e Associação

**Objetivo**

Adicionar campos de entrada (`<input>`, `<textarea>`, `<select>`, `<button>`) com rótulos `<label>` adequados.

**Fundamentos**

- `<label for="id">Texto</label>` vincula texto a um controle `<input id="id">`, tornando clicável e fornecendo nome acessível.
- Vários tipos de `<input>` comuns: `text`, `number`, `email`, `password`, `checkbox`, `radio`, `date`, etc., cada um com funcionalidades padrão.
- `<textarea>` para texto longo, `<select>` com `<option>` para escolhas.
- Atributo `name` obrigatório em cada controle para incluir no envio; `id` conecta ao `<label>`.
- `<button>` pode ter `type="submit"` ou `type="button"`.
- Placeholder e valores iniciais (`value`), para melhorar experiência.

**Competências**

- Adicionar campos de entrada adequados (texto, email, número) a um formulário e amarrá-los a `<label>`s.
- Explicar a importância de `id` e `name`: `id` liga label-controle, `name` define chave no envio.
- Configurar botões de submit e reset no formulário.

**Dependências**

HTML-07.01.

**Web Integration**

Exemplo: um formulário de login estilizado com CSS, onde `name="username"` e `name="password"` definem os campos, e JavaScript valida (ex.: checa se não está vazio) antes do envio.

### HTML-07.03 — Tipos avançados de entrada e validação

**Objetivo**

Explorar inputs específicos do HTML5 e usar validação básica embutida.

**Fundamentos**

- Tipos de `<input>` do HTML5 (e.g. `email`, `url`, `tel`, `number`, `range`, `date`, `color`) que oferecem validação sem script.
- Atributos de validação: `required`, `min`, `max`, `pattern`, `maxlength`.
- `type="email"` verifica padrão de e-mail; `type="number"` limita valores numéricos.
- Atributo `autocomplete` para sugerir preenchimento.
- Indicar ao navegador a forma correta de validar e teclado adequado (em mobile).

**Competências**

- Escolher o tipo de entrada apropriado para cada dado (e.g. e-mail vs texto).
- Aplicar `required` e outros atributos para validação instantânea pelo navegador.
- Explicar casos em que o navegador já impede envio inválido ou pede confirmação.

**Dependências**

HTML-07.02.

**Web Integration**

Exemplo: formulário de cadastro com `<input type="email" required>` e `<input type="number" min="1" max="10">`, estilizados e submetidos via JavaScript AJAX.

## Checklist

Ao concluir este bloco, devo conseguir:

- [ ] Estruturar um `<form>` completo com `action` e `method` definidos.
- [ ] Agrupar controles em `<fieldset>`/`<legend>` quando aplicável.
- [ ] Criar campos de formulário (`<input>`, `<textarea>`, `<select>`) com `<label>` associados.
- [ ] Definir `name` nos campos para formar pares nome/valor enviados.
- [ ] Usar tipos HTML5 e atributos de validação (`required`, `pattern`, etc.) para controles.

## Validação

Exercício de checkpoint: criar um formulário de múltiplos campos (nome, e-mail, mensagem) que utilize `<form>`, labels associados, tipos de input adequados e um botão de envio. O estudante deverá explicar como os `name`-valores são submetidos e como o formulário controla dados inválidos.

---

### Navegação

[← Mapa curricular](./README.md) ·
[↑ HTML Foundations Lab](../README.md) ·
[HTML-01 — Estrutura do Documento →](../practice/html-01-estrutura-do-documento/)
