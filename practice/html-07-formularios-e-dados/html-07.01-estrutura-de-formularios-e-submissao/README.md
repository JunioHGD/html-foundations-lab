# HTML-07.01 — Estrutura de formulários e submissão

Construir a estrutura básica de um formulário, compreendendo `action`, `method` e agrupamentos.

## Fundamentos

- `<form action="URL" method="get/post">` inicia o formulário. `action` indica onde enviar, `method` define o método HTTP.
- Comportamento de GET (parâmetros na URL) versus POST (dados no corpo).
- `name` em cada controle determina o *nome* do dado enviado. Form data é transmitido como pares nome=valor no pedido HTTP.
- `<fieldset>` e `<legend>` para agrupar controles relacionados (e.g. informações de pagamento) com legenda descritiva.
- `<button type="submit">` ou `<input type="submit">` para enviar formulário. `<button type="button">` é apenas controle cliente.
- Validação nativa: atributos como `required`, `pattern`, `min`/`max`.

## Competências

Ao concluir esta unidade, devo conseguir:

- Criar um `<form>` com `action` e `method` definidos.
- Agrupar campos em `<fieldset>` quando faz sentido, incluindo `<legend>`.
- Diferenciar botões de envio e reset.
- Identificar como os dados serão enviados (ex.: visualizando a query string em GET).

## Prática

Os exercícios desta unidade aplicam os fundamentos estudados por meio de implementação, análise, diagnóstico e justificativa quando pertinentes.

[Ver exercícios →](./exercises/)

## Web Integration

Exemplo: um formulário de contato (`<form method="post" action="/submit">`) com CSS para layout de campos e JavaScript para validação do lado cliente antes do envio.

[Ver Web Integration →](../../../web-integration/)

---

### Navegação

[↑ HTML-07 — Formulários e Dados](../README.md) ·
[HTML-07.02 — Controles, Labels e Associação →](../html-07.02-controles-labels-e-associacao/)
