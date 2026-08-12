# HTML Lab

## Identificação

**Lab:** HTML Lab

**Sigla:** HTML

**Finalidade:** Construir uma base capaz de permitir ao estudante **estruturar documentos e interfaces Web semanticamente corretos, acessíveis e tecnicamente consistentes**, compreendendo os mecanismos do HTML o suficiente para selecionar novos elementos e atributos posteriormente sem precisar reconstruir seus fundamentos.

**Visão geral:** O **HTML Lab** organiza os fundamentos da linguagem a partir de seus modelos centrais: documento e árvore, sintaxe e processamento, significado semântico, hipertexto, arquitetura da informação, conteúdo não textual, dados tabulares, formulários, acessibilidade nativa e integração com CSS e JavaScript. Essa abordagem acompanha a própria natureza do HTML definida pelo WHATWG: documentos são constituídos por elementos com significados predefinidos, organizados em uma árvore representada pelo DOM, e não por uma coleção independente de tags.

**Escopo:** O Lab cobre o núcleo necessário à formação inicial profissional em HTML. Recursos especializados, APIs da plataforma, ARIA avançado, mídia avançada, otimizações específicas e técnicas que podem ser aprendidas posteriormente sem comprometer o modelo mental central ficam fora do caminho fundamental.

# Estrutura curricular

## HTML-01 — Linguagem, documento e processamento

### Objetivo

Construir o modelo mental de HTML como linguagem de marcação semântica cujo código-fonte é processado pelo navegador e transformado em uma estrutura documental. O HTML Standard distingue a sintaxe escrita pelo autor da representação em memória no DOM e estabelece regras de significado, aninhamento e modelos de conteúdo.

### Unidades

#### HTML-01.01 — Estrutura da linguagem

**Objetivo:** compreender como elementos, atributos e relações estruturais representam um documento HTML.

**Conceitos fundamentais:**

1. HTML como linguagem de estrutura, conteúdo, relações e significado;
2. elementos, tags e conteúdo;
3. tags de abertura e fechamento;
4. elementos vazios;
5. atributos e valores;
6. atributos booleanos;
7. aninhamento e contenção;
8. relações pai, filho, ancestral, descendente e irmão;
9. árvore de elementos;
10. significado semântico de elementos e atributos;
11. modelos e categorias de conteúdo no nível necessário para compreender combinações válidas.

**Chats derivados:**

- `HTML-01.01 — Estudo — Estrutura da linguagem`
- `HTML-01.01 — Prática — Estrutura da linguagem`

#### HTML-01.02 — Documento HTML e metadados essenciais

**Objetivo:** compreender e construir a estrutura mínima funcional de um documento HTML moderno.

**Conceitos fundamentais:**

1. declaração `<!doctype html>`;
2. elemento raiz `html`;
3. separação entre `head` e `body`;
4. idioma do documento com `lang`;
5. codificação de caracteres com `charset`;
6. título documental com `title`;
7. viewport em documentos destinados a diferentes dimensões de tela;
8. diferença entre metadados e conteúdo apresentado ao usuário;
9. relação do `head` com recursos externos essenciais.

**Chats derivados:**

- `HTML-01.02 — Estudo — Documento HTML e metadados essenciais`
- `HTML-01.02 — Prática — Documento HTML e metadados essenciais`

#### HTML-01.03 — Parsing, DOM e conformidade

**Objetivo:** compreender por que o código escrito e o documento efetivamente produzido pelo navegador não são necessariamente idênticos.

**Conceitos fundamentais:**

1. código-fonte HTML;
2. parser HTML;
3. tokenização e construção conceitual da árvore;
4. DOM como representação do documento em memória;
5. tolerância do HTML a determinados erros;
6. correções e estruturas implícitas produzidas pelo parser;
7. diferença entre aparência renderizada e estrutura correta;
8. erros de sintaxe e restrições de modelos de conteúdo;
9. conformidade da marcação;
10. validadores e verificadores de conformidade como ferramentas de diagnóstico.

**Chats derivados:**

- `HTML-01.03 — Estudo — Parsing, DOM e conformidade`
- `HTML-01.03 — Prática — Parsing, DOM e conformidade`

### Resultado esperado

Compreender HTML como uma linguagem processada e estruturada em árvore, e não apenas como texto contendo tags. Ser capaz de montar e avaliar a base estrutural de um documento completo.

### Checkpoint derivado

`HTML-01 — Checkpoint — Linguagem, documento e processamento`

---

## HTML-02 — Conteúdo semântico e hipertexto

### Objetivo

Aprender a representar conteúdo segundo seu significado e suas relações, construindo simultaneamente hierarquia documental e hipertexto.

### Unidades

#### HTML-02.01 — Estrutura e hierarquia do conteúdo

**Objetivo:** representar corretamente a organização lógica e o significado básico do conteúdo textual.

**Conceitos fundamentais:**

1. semântica versus aparência padrão;
2. títulos `h1`–`h6` como representação hierárquica;
3. progressão lógica dos níveis de título;
4. parágrafos;
5. listas conforme a relação entre seus itens;
6. ênfase e importância semânticas;
7. agrupamento coerente de conteúdo;
8. escolha de elementos pela função do conteúdo;
9. diferença entre significado estrutural e estilização visual.

**Chats derivados:**

- `HTML-02.01 — Estudo — Estrutura e hierarquia do conteúdo`
- `HTML-02.01 — Prática — Estrutura e hierarquia do conteúdo`

#### HTML-02.02 — Hipertexto e navegação

**Objetivo:** compreender links como relações entre recursos, não apenas como uso da tag `a`.

**Conceitos fundamentais:**

1. recursos e destinos;
2. URLs;
3. caminhos absolutos e relativos;
4. hiperlinks e `href`;
5. navegação entre documentos;
6. fragmentos e navegação dentro de um documento;
7. conteúdo e finalidade de um link;
8. texto de link significativo;
9. conjuntos de links de navegação;
10. distinção entre **navegação por link** e **ação por controle**, especialmente `a` versus `button`.

**Chats derivados:**

- `HTML-02.02 — Estudo — Hipertexto e navegação`
- `HTML-02.02 — Prática — Hipertexto e navegação`

### Resultado esperado

Ser capaz de transformar conteúdo em uma estrutura semanticamente organizada e conectá-lo corretamente a outros recursos e partes do documento.

### Checkpoint derivado

`HTML-02 — Checkpoint — Conteúdo semântico e hipertexto`

---

## HTML-03 — Arquitetura semântica e acessibilidade nativa

### Objetivo

Construir páginas cuja estrutura possua significado programaticamente perceptível e aproveite a acessibilidade fornecida pelo próprio HTML antes de recorrer a abstrações adicionais.

### Unidades

#### HTML-03.01 — Arquitetura semântica da página

**Objetivo:** organizar grandes regiões e conjuntos de conteúdo segundo sua função documental.

**Conceitos fundamentais:**

1. arquitetura semântica versus organização puramente visual;
2. conteúdo principal com `main`;
3. regiões de navegação com `nav`;
4. contexto introdutório e complementar com `header` e `footer`;
5. conteúdo independente com `article`;
6. seções temáticas com `section`;
7. conteúdo complementar com `aside`;
8. relação entre seções e hierarquia de títulos;
9. landmarks e regiões identificáveis;
10. `div` e `span` como contêineres genéricos quando não existe semântica mais adequada;
11. ordem lógica do conteúdo no documento.

**Chats derivados:**

- `HTML-03.01 — Estudo — Arquitetura semântica da página`
- `HTML-03.01 — Prática — Arquitetura semântica da página`

#### HTML-03.02 — Semântica nativa, acessibilidade e limites de ARIA

**Objetivo:** compreender HTML nativo como primeira camada de acessibilidade e reconhecer quando ARIA é apenas um complemento.

**Conceitos fundamentais:**

1. semântica nativa dos elementos;
2. significado disponibilizado programaticamente;
3. papéis implícitos;
4. nomes acessíveis no nível fundamental;
5. comportamento nativo de controles interativos;
6. importância da ordem documental;
7. HTML nativo antes de componentes reconstruídos;
8. redundância de `role` quando a semântica já é implícita;
9. uso contextual de `aria-label` e `aria-labelledby`;
10. ARIA como extensão da semântica, não substituta geral do HTML;
11. ARIA não cria automaticamente comportamento de teclado ou lógica de interação.

**Chats derivados:**

- `HTML-03.02 — Estudo — Semântica nativa, acessibilidade e limites de ARIA`
- `HTML-03.02 — Prática — Semântica nativa, acessibilidade e limites de ARIA`

### Resultado esperado

Ser capaz de definir a arquitetura de uma página pela função do conteúdo e escolher elementos nativos antes de recorrer a estruturas genéricas, ARIA ou JavaScript.

### Checkpoint derivado

`HTML-03 — Checkpoint — Arquitetura semântica e acessibilidade nativa`

---

## HTML-04 — Conteúdo visual e dados estruturados

### Objetivo

Dominar dois mecanismos com modelos semânticos próprios: incorporação acessível de imagens e representação de dados tabulares.

### Unidades

#### HTML-04.01 — Imagens, finalidade e alternativa textual

**Objetivo:** incorporar imagens segundo sua função comunicativa e seu contexto.

**Conceitos fundamentais:**

1. imagem como recurso incorporado;
2. origem do recurso com `src`;
3. finalidade da imagem no contexto;
4. texto alternativo com `alt`;
5. imagens informativas;
6. imagens decorativas;
7. imagens funcionais;
8. alternativa vazia para conteúdo puramente decorativo quando apropriado;
9. dimensões da imagem no nível estrutural;
10. relação entre imagem, figura e legenda;
11. `figure` e `figcaption` quando existe uma unidade de conteúdo legendada.

**Chats derivados:**

- `HTML-04.01 — Estudo — Imagens, finalidade e alternativa textual`
- `HTML-04.01 — Prática — Imagens, finalidade e alternativa textual`

#### HTML-04.02 — Modelo de dados tabulares

**Objetivo:** representar relações genuinamente tabulares de maneira compreensível visual e programaticamente.

**Conceitos fundamentais:**

1. tabela como representação de dados, não como mecanismo de layout;
2. linhas, colunas e células;
3. células de dados;
4. células de cabeçalho;
5. relações entre dados e cabeçalhos;
6. cabeçalhos de linha e de coluna;
7. `scope` em estruturas simples;
8. legenda da tabela com `caption`;
9. estrutura semântica necessária à compreensão por tecnologias assistivas.

**Chats derivados:**

- `HTML-04.02 — Estudo — Modelo de dados tabulares`
- `HTML-04.02 — Prática — Modelo de dados tabulares`

### Resultado esperado

Ser capaz de decidir como imagens devem ser representadas conforme sua função e construir tabelas semanticamente corretas para dados realmente tabulares.

### Checkpoint derivado

`HTML-04 — Checkpoint — Conteúdo visual e dados estruturados`

---

## HTML-05 — Formulários e controles nativos

### Objetivo

Construir o modelo completo de formulários como mecanismo para coletar, identificar, organizar, restringir e submeter dados, sem confundir HTML com seu processamento no servidor.

### Unidades

#### HTML-05.01 — Controles, nomes, valores e rotulagem

**Objetivo:** compreender como os controles representam campos de dados utilizáveis e acessíveis.

**Conceitos fundamentais:**

1. formulário como conjunto estruturado de controles;
2. controles nativos e suas funções;
3. `input`, `select`, `textarea` e `button` segundo a necessidade de interação;
4. tipos de entrada relevantes segundo a natureza do dado;
5. nome de um controle;
6. valor de um controle;
7. rótulos visíveis com `label`;
8. associação explícita entre `label`, `for` e `id`;
9. opções e seleção;
10. agrupamento lógico de controles;
11. `fieldset` e `legend`;
12. escolha de controles nativos apropriados em vez de simulações genéricas.

**Chats derivados:**

- `HTML-05.01 — Estudo — Controles, nomes, valores e rotulagem`
- `HTML-05.01 — Prática — Controles, nomes, valores e rotulagem`

#### HTML-05.02 — Submissão e fronteira com o servidor

**Objetivo:** compreender o ciclo de submissão de dados até o limite da responsabilidade do HTML.

**Conceitos fundamentais:**

1. `form` como contexto de submissão;
2. destino com `action`;
3. método de submissão;
4. `GET` e `POST` no nível pertinente ao formulário HTML;
5. pares nome–valor dos controles;
6. controles participantes da submissão;
7. botões de submissão;
8. diferença entre estrutura e coleta em HTML e processamento no servidor;
9. ausência de garantia de segurança apenas pela marcação ou validação do navegador.

**Chats derivados:**

- `HTML-05.02 — Estudo — Submissão e fronteira com o servidor`
- `HTML-05.02 — Prática — Submissão e fronteira com o servidor`

#### HTML-05.03 — Assistência ao preenchimento e validação declarativa

**Objetivo:** utilizar recursos nativos do HTML para ajudar o usuário a fornecer dados adequados.

**Conceitos fundamentais:**

1. escolha do tipo de entrada conforme o dado esperado;
2. campos obrigatórios;
3. restrições declarativas de comprimento, intervalo e formato quando pertinentes;
4. `autocomplete`;
5. instruções associadas aos campos;
6. Constraint Validation do navegador;
7. estados de validade;
8. mensagens de erro compreensíveis;
9. diferença entre validação para experiência do usuário e validação para segurança;
10. necessidade de validação independente no servidor.

**Chats derivados:**

- `HTML-05.03 — Estudo — Assistência ao preenchimento e validação declarativa`
- `HTML-05.03 — Prática — Assistência ao preenchimento e validação declarativa`

### Resultado esperado

Ser capaz de criar formulários comuns semanticamente estruturados, rotulados, agrupados e preparados para submissão, mantendo clara a fronteira entre HTML, experiência do usuário e processamento seguro de dados.

### Checkpoint derivado

`HTML-05 — Checkpoint — Formulários e controles nativos`

---

## HTML-06 — Integração e qualidade da marcação

### Objetivo

Relacionar HTML às demais camadas da plataforma Web e consolidar critérios para avaliar marcação profissional sem transformar o Lab em estudo de CSS ou JavaScript.

### Unidades

#### HTML-06.01 — Integração com CSS e JavaScript

**Objetivo:** compreender como o documento HTML expõe estrutura para apresentação e comportamento.

**Conceitos fundamentais:**

1. separação entre estrutura, apresentação e comportamento;
2. folha de estilos externa com `link`;
3. `class` como mecanismo de classificação e hook para outras camadas;
4. `id` como identificador único no documento;
5. nomes de classes orientados à função em vez de aparência específica;
6. inclusão de scripts com `script`;
7. scripts externos com `src`;
8. scripts clássicos e módulos no nível conceitual;
9. relação básica entre carregamento de scripts e parsing;
10. `defer` e `async` no nível necessário para compreender essa relação;
11. DOM como estrutura posteriormente acessível ao JavaScript.

**Chats derivados:**

- `HTML-06.01 — Estudo — Integração com CSS e JavaScript`
- `HTML-06.01 — Prática — Integração com CSS e JavaScript`

#### HTML-06.02 — Conformidade, semântica e evolução da linguagem

**Objetivo:** desenvolver critérios para avaliar a qualidade da marcação e continuar aprendendo HTML de forma independente.

**Conceitos fundamentais:**

1. validade sintática;
2. conformidade estrutural;
3. adequação semântica;
4. acessibilidade como critério distinto da mera validade;
5. uso de verificadores de conformidade;
6. reconhecimento de elementos e atributos obsoletos;
7. rejeição de marcação puramente apresentacional quando a responsabilidade pertence ao CSS;
8. rejeição de tabelas para layout;
9. diferença entre compatibilidade do navegador e prática recomendada;
10. consulta ao HTML Living Standard e documentação técnica;
11. aprendizagem de novos elementos a partir de significado, modelo de conteúdo e contexto de uso.

**Chats derivados:**

- `HTML-06.02 — Estudo — Conformidade, semântica e evolução da linguagem`
- `HTML-06.02 — Prática — Conformidade, semântica e evolução da linguagem`

### Resultado esperado

Ser capaz de integrar corretamente a estrutura HTML às camadas de apresentação e comportamento e avaliar documentos segundo sintaxe, estrutura, semântica e acessibilidade, em vez de apenas pela renderização.

### Checkpoint derivado

`HTML-06 — Checkpoint — Integração e qualidade da marcação`

# Mapa operacional dos chats

```text
HTML-01 — Linguagem, documento e processamento

HTML-01.01 — Estudo — Estrutura da linguagem
HTML-01.01 — Prática — Estrutura da linguagem

HTML-01.02 — Estudo — Documento HTML e metadados essenciais
HTML-01.02 — Prática — Documento HTML e metadados essenciais

HTML-01.03 — Estudo — Parsing, DOM e conformidade
HTML-01.03 — Prática — Parsing, DOM e conformidade

HTML-01 — Checkpoint — Linguagem, documento e processamento

HTML-02 — Conteúdo semântico e hipertexto

HTML-02.01 — Estudo — Estrutura e hierarquia do conteúdo
HTML-02.01 — Prática — Estrutura e hierarquia do conteúdo

HTML-02.02 — Estudo — Hipertexto e navegação
HTML-02.02 — Prática — Hipertexto e navegação

HTML-02 — Checkpoint — Conteúdo semântico e hipertexto

HTML-03 — Arquitetura semântica e acessibilidade nativa

HTML-03.01 — Estudo — Arquitetura semântica da página
HTML-03.01 — Prática — Arquitetura semântica da página

HTML-03.02 — Estudo — Semântica nativa, acessibilidade e limites de ARIA
HTML-03.02 — Prática — Semântica nativa, acessibilidade e limites de ARIA

HTML-03 — Checkpoint — Arquitetura semântica e acessibilidade nativa

HTML-04 — Conteúdo visual e dados estruturados

HTML-04.01 — Estudo — Imagens, finalidade e alternativa textual
HTML-04.01 — Prática — Imagens, finalidade e alternativa textual

HTML-04.02 — Estudo — Modelo de dados tabulares
HTML-04.02 — Prática — Modelo de dados tabulares

HTML-04 — Checkpoint — Conteúdo visual e dados estruturados

HTML-05 — Formulários e controles nativos

HTML-05.01 — Estudo — Controles, nomes, valores e rotulagem
HTML-05.01 — Prática — Controles, nomes, valores e rotulagem

HTML-05.02 — Estudo — Submissão e fronteira com o servidor
HTML-05.02 — Prática — Submissão e fronteira com o servidor

HTML-05.03 — Estudo — Assistência ao preenchimento e validação declarativa
HTML-05.03 — Prática — Assistência ao preenchimento e validação declarativa

HTML-05 — Checkpoint — Formulários e controles nativos

HTML-06 — Integração e qualidade da marcação

HTML-06.01 — Estudo — Integração com CSS e JavaScript
HTML-06.01 — Prática — Integração com CSS e JavaScript

HTML-06.02 — Estudo — Conformidade, semântica e evolução da linguagem
HTML-06.02 — Prática — Conformidade, semântica e evolução da linguagem

HTML-06 — Checkpoint — Integração e qualidade da marcação

HTML — Checkpoint Final
```

# Competências ao concluir o Lab

1. **Compreender** HTML como uma linguagem semântica estruturada em árvore e processada pelo navegador.
2. **Construir** documentos completos com estrutura global e metadados fundamentais adequados.
3. **Selecionar** elementos segundo o significado e a relação do conteúdo, sem depender de aparência ou memorização de tags.
4. **Estruturar** hierarquia, hipertexto, navegação e regiões de página de maneira coerente.
5. **Aplicar** acessibilidade nativa por meio de semântica, headings, landmarks, alternativas textuais, controles e rótulos adequados.
6. **Representar** corretamente imagens e dados tabulares segundo seus respectivos modelos semânticos.
7. **Construir** formulários comuns compreendendo controles, nomes, valores, agrupamento, submissão e validação nativa.
8. **Distinguir** responsabilidades de HTML, CSS, JavaScript e processamento no servidor.
9. **Relacionar** código-fonte, parsing e DOM para diagnosticar estruturas inadequadas.
10. **Avaliar e evoluir** marcação utilizando especificações e documentação técnica, aprendendo novos recursos sem reconstruir a base conceitual.

# Aprofundamentos posteriores

- **Semântica especializada:** citações, abreviações, código, datas e demais elementos textuais de uso contextual.
- **Imagens responsivas e desempenho:** `picture`, `source`, `srcset`, `sizes`, estratégias de carregamento e seleção de recursos.
- **Mídia e conteúdo incorporado:** áudio, vídeo, legendas, `iframe`, SVG, MathML e outros conteúdos incorporados.
- **Tabelas complexas:** múltiplos níveis de cabeçalhos, associações irregulares e estruturas tabulares avançadas.
- **Formulários avançados:** conjunto completo de tipos e atributos, uploads, codificação de dados, validação personalizada e controles especializados.
- **Interação nativa especializada:** `details`, `dialog`, popovers e outros mecanismos de interação além do núcleo.
- **ARIA e componentes personalizados:** estados, propriedades, widgets compostos, padrões de teclado e ARIA Authoring Practices.
- **Metadados e descoberta:** SEO técnico, metadados sociais, dados estruturados e mecanismos especializados de descoberta.
- **Internacionalização:** direção de texto, conteúdo bidirecional e cenários multilíngues avançados.
- **Carregamento e segurança de recursos:** preload, prioridades, políticas de segurança, integridade e mecanismos relacionados.
- **Extensibilidade da plataforma:** `template`, slots, Custom Elements e Web Components.
- **HTML legado:** reconhecimento e manutenção de elementos, atributos e práticas obsoletas quando encontrados em sistemas existentes.
