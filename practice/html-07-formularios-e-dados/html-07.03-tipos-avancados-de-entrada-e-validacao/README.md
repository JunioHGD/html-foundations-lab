# HTML-07.03 — Tipos avançados de entrada e validação

Explorar inputs específicos do HTML5 e usar validação básica embutida.

## Fundamentos

- Tipos de `<input>` do HTML5 (e.g. `email`, `url`, `tel`, `number`, `range`, `date`, `color`) que oferecem validação sem script.
- Atributos de validação: `required`, `min`, `max`, `pattern`, `maxlength`.
- `type="email"` verifica padrão de e-mail; `type="number"` limita valores numéricos.
- Atributo `autocomplete` para sugerir preenchimento.
- Indicar ao navegador a forma correta de validar e teclado adequado (em mobile).

## Competências

Ao concluir esta unidade, devo conseguir:

- Escolher o tipo de entrada apropriado para cada dado (e.g. e-mail vs texto).
- Aplicar `required` e outros atributos para validação instantânea pelo navegador.
- Explicar casos em que o navegador já impede envio inválido ou pede confirmação.

## Prática

Os exercícios desta unidade aplicam os fundamentos estudados por meio de implementação, análise, diagnóstico e justificativa quando pertinentes.

[Ver exercícios →](./exercises/)

## Web Integration

Exemplo: formulário de cadastro com `<input type="email" required>` e `<input type="number" min="1" max="10">`, estilizados e submetidos via JavaScript AJAX.

[Ver Web Integration →](../../../web-integration/)

---

### Navegação

[← HTML-07.02 — Controles, Labels e Associação](../html-07.02-controles-labels-e-associacao/) ·
[↑ HTML-07 — Formulários e Dados](../README.md) ·
[Checkpoint HTML-07 →](../checkpoint/)
