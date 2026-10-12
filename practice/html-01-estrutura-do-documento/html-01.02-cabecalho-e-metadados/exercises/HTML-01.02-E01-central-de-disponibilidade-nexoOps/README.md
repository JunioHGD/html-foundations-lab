# HTML-01.02-E01 — Central de disponibilidade NexoOps

**HTML Foundations Lab · Módulo 01 — Estrutura do Documento · Tópico 02 — Cabeçalho e Metadados**

## Sobre o exercício

A **NexoOps** é uma aplicação web de consulta à disponibilidade de serviços internos. A interface reúne informações sobre o estado dos serviços, permite filtrá-los e apresenta os detalhes de um serviço selecionado, sem necessidade de recarregar a página.

A atividade propõe construir o documento HTML, a apresentação em CSS e o comportamento em JavaScript a partir de uma especificação e de uma fonte de dados fornecida. O foco curricular está na **configuração do `<head>` e na integração correta dos recursos externos**.

> **Contexto:** projeto prático de estudo. Os dados vêm de um arquivo JavaScript local; a aplicação não realiza monitoramento em tempo real nem consulta uma API.

## Objetivo

Construir uma interface funcional e adaptável a diferentes tamanhos de tela, aplicando os fundamentos de cabeçalho e metadados HTML em conjunto com a separação das responsabilidades de estrutura, apresentação, dados e comportamento.

## Funcionalidades implementadas

- **Resumo dos serviços:** apresenta total, operacionais, degradados e indisponíveis com valores derivados da coleção de dados.
- **Filtros por estado:** permite visualizar todos os serviços ou apenas os classificados como operacionais, degradados ou indisponíveis.
- **Cartões de serviços:** exibe nome, estado, disponibilidade e latência, com uma ação para consultar informações adicionais.
- **Painel de detalhes:** ao selecionar um cartão, apresenta também a última atualização e a descrição do serviço.
- **Atualização dinâmica:** utiliza JavaScript para construir os cartões e atualizar os resultados sem recarregar o documento.
- **Layout responsivo:** utiliza CSS Grid e media queries para reorganizar os cartões e o resumo conforme a largura disponível.

## Fundamentos praticados

### HTML — Cabeçalho e metadados

- Declaração `<!DOCTYPE html>` e idioma `pt-BR`.
- Definição de codificação com `<meta charset="UTF-8">`.
- Configuração de viewport para dispositivos móveis.
- Uso de `<title>` e de descrição documental com `<meta name="description">`.
- Associação de favicon e folha de estilos externos por meio de `<link>`.
- Inclusão de scripts externos e entendimento do momento de execução com `defer`.

### Integração e implementação

- Organização da interface em elementos HTML.
- Estilização com CSS, Grid, media queries e diferenciação visual dos estados.
- Leitura de dados disponíveis em `window.servicesData`.
- Criação de elementos e atualização do DOM com JavaScript.
- Tratamento de eventos de clique, filtros e seleção de serviços.

## Organização dos arquivos

```text
HTML-01.02-E02-central-de-disponibilidade-nexoops/
├── README.md
├── index.html
├── styles.css
├── script.js
└── assets/
    ├── nexoops-icon.svg
    └── services-data.js
```

| Arquivo | Responsabilidade |
| --- | --- |
| `index.html` | Estrutura da página, metadados e referências aos recursos externos. |
| `styles.css` | Estilos, cartões, estados visuais e adaptações responsivas. |
| `script.js` | Renderização, filtros, contagem e exibição dos detalhes. |
| `assets/services-data.js` | Coleção de dados utilizada pela interface. |
| `assets/nexoops-icon.svg` | Ícone utilizado como favicon e na identificação visual do painel. |

## Execução local

1. Mantenha os arquivos na estrutura apresentada acima, incluindo a pasta `assets`.
2. Abra `index.html` em um navegador moderno.
3. Utilize os filtros e selecione **Ver detalhes** nos cartões para explorar a interface.

A aplicação utiliza apenas **HTML, CSS e JavaScript**, sem frameworks, bibliotecas, backend ou dependências de rede.

## Visualização online

[Acessar o exercício no GitHub Pages](https://juniohgd.github.io/html-foundations-lab/practice/html-01-estrutura-do-documento/html-01.02-cabecalho-e-metadados/exercises/HTML-01.02-E01-central-de-disponibilidade-nexoOps/)

## Aprendizado principal

O exercício reforça que o `<head>` não é apenas uma parte inicial do HTML: ele estabelece informações essenciais sobre o documento e suas dependências. A configuração correta dos recursos, aliada à organização do DOM, permite integrar apresentação e comportamento em uma aplicação web.
