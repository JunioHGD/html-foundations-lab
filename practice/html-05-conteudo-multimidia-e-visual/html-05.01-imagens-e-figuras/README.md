# HTML-05.01 — Imagens e figuras

Inserir imagens no HTML com `<img>` e legendar usando `<figure>/<figcaption>`.

## Fundamentos

- `<img src="URL" alt="texto">` para incluir imagens; `alt` é obrigatório e descreve a imagem para acessibilidade. Texto alternativo permite a leitores de tela entender a imagem e aparece em caso de erro de carregamento.
- `<figure>` envolve uma imagem (ou conteúdo multimídia) e `<figcaption>` fornece uma legenda descritiva.
- Diferenciar `<img>` de background CSS – imagens de conteúdo devem estar em HTML, não via estilo.
- Definir dimensões (`width`/`height`) para evitar *layout shifts*.

## Competências

Ao concluir esta unidade, devo conseguir:

- Adicionar uma imagem relevante com alt descritivo, explicando por que o alt foi escrito assim.
- Envolver imagens significativas em `<figure>`/`<figcaption>` para legendas contextuais.
- Usar imagens decorativas com `alt=""` vazio (sem conteúdo informativo).

## Prática

Os exercícios desta unidade aplicam os fundamentos estudados por meio de implementação, análise, diagnóstico e justificativa quando pertinentes.

[Ver exercícios →](./exercises/)

## Web Integration

Exemplo: exibir uma foto ilustrativa usando `<figure>`, estilizar via CSS (responsivo) e, no JavaScript, acessá-la pelo DOM para funcionalidade (e.g. lightbox).

[Ver Web Integration →](../../../web-integration/)

---

### Navegação

[↑ HTML-05 — Conteúdo Multimídia e Visual](../README.md) ·
[HTML-05.02 — Áudio e Vídeo →](../html-05.02-audio-e-video/)
