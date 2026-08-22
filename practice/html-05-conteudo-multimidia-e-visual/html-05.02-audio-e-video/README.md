# HTML-05.02 — Áudio e Vídeo

Inserir elementos `<audio>` e `<video>` com suporte a múltiplas fontes e fallback.

## Fundamentos

- `<audio controls src="arquivo.mp3">` para som, e `<video controls>` para vídeo. Atributo `controls` ativa os controles padrão (play/pause/volume).
- Incluir múltiplas fontes com `<source src="..." type="...">` dentro de `<video>` ou `<audio>` para format compatibility.
- Conteúdo dentro das tags (`<p>` ou `<a>`) atua como fallback (ex.: link de download) caso o elemento não seja suportado.
- Legendas e transcrições: `<track kind="captions">` (via WebVTT) ou fornecer texto alternativo para acessibilidade. Vídeos devem ter legendas/transcrição para surdos e audiodescrição para cegos.

## Competências

Ao concluir esta unidade, devo conseguir:

- Incorporar um player de áudio e/ou vídeo simples com pelo menos duas fontes.
- Fornecer texto alternativo ou link como fallback (ex.: “seu navegador não suporta, faça download”).
- Opcional: adicionar `<track>` para legendas (comente a importância).

## Prática

Os exercícios desta unidade aplicam os fundamentos estudados por meio de implementação, análise, diagnóstico e justificativa quando pertinentes.

[Ver exercícios →](./exercises/)

## Web Integration

Exemplo: uma página de mídia com `<video>`. Em CSS, definir tamanho e posicionamento. Em JS, controlar eventos do player ou atualizar legendas dinamicamente.

[Ver Web Integration →](../../../web-integration/)

---

### Navegação

[← HTML-05.01 — Imagens e figuras](../html-05.01-imagens-e-figuras/) ·
[↑ HTML-05 — Conteúdo Multimídia e Visual](../README.md) ·
[Checkpoint HTML-05 →](../checkpoint/)
