/*window.servicesData = [
  { id: "auth-api", name: "API de autenticação", status: "operational", statusLabel: "Operacional", uptime: "99,99%", latency: "124 ms", lastUpdated: "21:12", description: "Responsável pela autenticação de usuários e emissão das sessões utilizadas pelos sistemas internos." },
  { id: "support-portal", name: "Portal de chamados", status: "operational", statusLabel: "Operacional", uptime: "99,97%", latency: "186 ms", lastUpdated: "21:10", description: "Portal utilizado pelas equipes para abertura, acompanhamento e atualização de solicitações de suporte." },
  { id: "inventory-sync", name: "Sincronização de estoque", status: "degraded", statusLabel: "Degradado", uptime: "98,72%", latency: "1,8 s", lastUpdated: "21:08", description: "Sincroniza alterações de estoque entre centros de distribuição. Há aumento de latência e processamento em fila." },
  { id: "reports", name: "Relatórios operacionais", status: "operational", statusLabel: "Operacional", uptime: "99,91%", latency: "410 ms", lastUpdated: "21:09", description: "Consolida dados operacionais para os relatórios utilizados pelas áreas de acompanhamento e planejamento." },
  { id: "payment-gateway", name: "Gateway de pagamentos corporativos", status: "degraded", statusLabel: "Degradado", uptime: "98,94%", latency: "2,3 s", lastUpdated: "21:11", description: "Processa autorizações financeiras internas. As operações seguem disponíveis, porém com resposta acima do padrão esperado." },
  { id: "notifications", name: "Serviço de notificações", status: "outage", statusLabel: "Indisponível", uptime: "96,30%", latency: "—", lastUpdated: "21:13", description: "Distribui notificações automáticas de eventos operacionais. O serviço está temporariamente indisponível e a equipe responsável foi acionada." },
  { id: "documents", name: "Central de documentos", status: "operational", statusLabel: "Operacional", uptime: "99,95%", latency: "238 ms", lastUpdated: "21:07", description: "Disponibiliza documentos e procedimentos utilizados pelas equipes durante a operação." }
];*/

window.servicesData = [
  {
    id: "auth-api",
    name: "API de autenticação",
    status: "operational",
    statusLabel: "Operacional",
    uptime: "99,99%",
    latency: "124 ms",
    lastUpdated: "21:12",
    description:
      "Responsável pela autenticação de usuários e emissão das sessões utilizadas pelos sistemas internos."
  },

  {
    id: "support-portal",
    name: "Portal de chamados",
    status: "operational",
    statusLabel: "Operacional",
    uptime: "99,97%",
    latency: "186 ms",
    lastUpdated: "21:10",
    description:
      "Portal utilizado pelas equipes para abertura, acompanhamento e atualização de solicitações de suporte."
  },

  {
    id: "inventory-sync",
    name: "Sincronização de estoque",
    status: "degraded",
    statusLabel: "Degradado",
    uptime: "98,72%",
    latency: "1,8 s",
    lastUpdated: "21:08",
    description:
      "Sincroniza alterações de estoque entre centros de distribuição. Há aumento de latência e processamento em fila."
  },

  {
    id: "reports",
    name: "Relatórios operacionais",
    status: "operational",
    statusLabel: "Operacional",
    uptime: "99,91%",
    latency: "410 ms",
    lastUpdated: "21:09",
    description:
      "Consolida dados operacionais para os relatórios utilizados pelas áreas de acompanhamento e planejamento."
  },

  {
    id: "payment-gateway",
    name: "Gateway de pagamentos corporativos",
    status: "degraded",
    statusLabel: "Degradado",
    uptime: "98,94%",
    latency: "2,3 s",
    lastUpdated: "21:11",
    description:
      "Processa autorizações financeiras internas. As operações seguem disponíveis, porém com resposta acima do padrão esperado."
  },

  {
    id: "notifications",
    name: "Serviço de notificações",
    status: "outage",
    statusLabel: "Indisponível",
    uptime: "96,30%",
    latency: "—",
    lastUpdated: "21:13",
    description:
      "Distribui notificações automáticas de eventos operacionais. O serviço está temporariamente indisponível e a equipe responsável foi acionada."
  },

  {
    id: "documents",
    name: "Central de documentos",
    status: "operational",
    statusLabel: "Operacional",
    uptime: "99,95%",
    latency: "238 ms",
    lastUpdated: "21:07",
    description:
      "Disponibiliza documentos e procedimentos utilizados pelas equipes durante a operação."
  },

  {
    id: "user-directory",
    name: "Diretório de usuários corporativos",
    status: "operational",
    statusLabel: "Operacional",
    uptime: "99,98%",
    latency: "142 ms",
    lastUpdated: "21:14",
    description:
      "Mantém os registros de usuários, equipes e permissões consultados pelas aplicações internas."
  },

  {
    id: "audit-log",
    name: "Registro de auditoria",
    status: "operational",
    statusLabel: "Operacional",
    uptime: "99,96%",
    latency: "205 ms",
    lastUpdated: "21:06",
    description:
      "Armazena eventos de auditoria relacionados a acessos, alterações administrativas e operações sensíveis."
  },

  {
    id: "file-storage",
    name: "Armazenamento de arquivos",
    status: "operational",
    statusLabel: "Operacional",
    uptime: "99,93%",
    latency: "318 ms",
    lastUpdated: "21:05",
    description:
      "Gerencia o armazenamento e a recuperação dos arquivos enviados e utilizados pelos sistemas da operação."
  },

  {
    id: "messaging-broker",
    name: "Mensageria interna",
    status: "operational",
    statusLabel: "Operacional",
    uptime: "99,90%",
    latency: "96 ms",
    lastUpdated: "21:15",
    description:
      "Coordena a troca assíncrona de mensagens entre diferentes serviços da plataforma."
  },

  {
    id: "backup-service",
    name: "Serviço de backup",
    status: "operational",
    statusLabel: "Operacional",
    uptime: "99,89%",
    latency: "520 ms",
    lastUpdated: "21:03",
    description:
      "Executa rotinas programadas de cópia de segurança dos dados críticos da plataforma."
  },

  {
    id: "analytics-engine",
    name: "Motor de análise operacional",
    status: "degraded",
    statusLabel: "Degradado",
    uptime: "98,51%",
    latency: "2,7 s",
    lastUpdated: "21:02",
    description:
      "Processa grandes volumes de dados para geração de indicadores. O processamento está ocorrendo acima do tempo esperado."
  },

  {
    id: "billing-export",
    name: "Exportação de faturamento",
    status: "degraded",
    statusLabel: "Degradado",
    uptime: "98,83%",
    latency: "3,1 s",
    lastUpdated: "21:04",
    description:
      "Gera arquivos de integração financeira. Algumas exportações podem levar mais tempo para serem concluídas."
  },

  {
    id: "search-index",
    name: "Índice de pesquisa",
    status: "degraded",
    statusLabel: "Degradado",
    uptime: "98,66%",
    latency: "1,5 s",
    lastUpdated: "21:01",
    description:
      "Mantém os índices utilizados nas pesquisas internas. Novos registros podem levar alguns minutos para aparecer nos resultados."
  },

  {
    id: "integration-hub",
    name: "Hub de integrações externas",
    status: "degraded",
    statusLabel: "Degradado",
    uptime: "98,40%",
    latency: "2,9 s",
    lastUpdated: "21:00",
    description:
      "Centraliza integrações com sistemas parceiros. Parte das requisições está apresentando aumento significativo no tempo de resposta."
  },

  {
    id: "legacy-connector",
    name: "Conector do sistema legado",
    status: "outage",
    statusLabel: "Indisponível",
    uptime: "94,72%",
    latency: "—",
    lastUpdated: "20:58",
    description:
      "Responsável pela comunicação com uma aplicação legada utilizada pela operação. O serviço não está aceitando novas requisições."
  },

  {
    id: "email-dispatch",
    name: "Disparo de e-mails transacionais",
    status: "outage",
    statusLabel: "Indisponível",
    uptime: "95,18%",
    latency: "—",
    lastUpdated: "20:57",
    description:
      "Realiza o envio automático de mensagens transacionais. Os eventos permanecem em fila até a restauração do serviço."
  },

  {
    id: "monitoring-core",
    name: "Central de monitoramento",
    status: "operational",
    statusLabel: "Operacional",
    uptime: "99,99%",
    latency: "88 ms",
    lastUpdated: "21:16",
    description:
      "Consolida métricas e sinais de disponibilidade dos principais serviços utilizados pela operação."
  },

  {
    id: "job-scheduler",
    name: "Agendador de tarefas",
    status: "operational",
    statusLabel: "Operacional",
    uptime: "99,94%",
    latency: "172 ms",
    lastUpdated: "21:06",
    description:
    "Coordena a execução programada de rotinas automáticas utilizadas por diferentes sistemas internos."
  },

  {
    id: "customer-import",
    name: "Importação de cadastros",
    status: "degraded",
    statusLabel: "Degradado",
    uptime: "98,61%",
    latency: "2,1 s",
    lastUpdated: "21:04",
    description:
    "Processa arquivos de importação de cadastros em lote. O serviço está disponível, mas algumas importações apresentam atraso."
  },

  {
    id: "webhook-dispatcher",
    name: "Distribuidor de webhooks",
    status: "outage",
    statusLabel: "Indisponível",
    uptime: "95,84%",
    latency: "—",
    lastUpdated: "21:02",
    description:
    "Entrega notificações de eventos para sistemas integrados. Novos envios estão temporariamente suspensos enquanto o incidente é investigado."
  } 
];
