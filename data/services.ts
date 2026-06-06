import type { Localized } from "@/lib/i18n";

export type ServicePillar = {
  id: string;
  icon: string; // lucide-react icon name
  title: Localized;
  description: Localized;
};

/** The 4 homepage service pillars. */
export const pillars: ServicePillar[] = [
  {
    id: "ai-agents",
    icon: "Bot",
    title: { fr: "Agents IA", en: "AI Agents" },
    description: {
      fr: "Des agents IA sur mesure qui classifient, répondent, escaladent, résument et coordonnent le travail.",
      en: "Custom AI agents that classify, respond, escalate, summarize, and coordinate business work.",
    },
  },
  {
    id: "workflow-automation",
    icon: "Workflow",
    title: { fr: "Automatisation des flux", en: "Workflow Automation" },
    description: {
      fr: "Des flux automatisés reliant Gmail, Outlook, Teams, agendas, CRM, tableurs, bases de données et outils d'affaires.",
      en: "Automated workflows connecting Gmail, Outlook, Teams, calendars, CRMs, spreadsheets, databases, and business tools.",
    },
  },
  {
    id: "business-intelligence",
    icon: "BarChart3",
    title: { fr: "Business Intelligence", en: "Business Intelligence" },
    description: {
      fr: "Des tableaux de bord Power BI qui transforment les données brutes en décisions exécutives.",
      en: "Power BI dashboards that transform raw data into executive decisions.",
    },
  },
  {
    id: "custom-software",
    icon: "Code2",
    title: { fr: "Logiciels sur mesure", en: "Custom Software" },
    description: {
      fr: "Des outils internes, portails, planificateurs et systèmes d'automatisation conçus autour de vos opérations réelles.",
      en: "Internal tools, portals, planners, and automation systems built around your real operations.",
    },
  },
];

export type ServiceCategory = {
  id: string;
  icon: string;
  title: Localized;
  description: Localized;
  examples: Localized<string[]>;
};

/** Detailed sections for the Services page. */
export const serviceCategories: ServiceCategory[] = [
  {
    id: "ai-agents",
    icon: "Bot",
    title: { fr: "Agents IA", en: "AI Agents" },
    description: {
      fr: "Des agents intelligents qui prennent en charge des tâches complètes — du tri du courrier à la coordination de la répartition.",
      en: "Intelligent agents that own complete tasks — from email triage to dispatch coordination.",
    },
    examples: {
      fr: [
        "Agent courriel",
        "Agent de répartition",
        "Agent de planification",
        "Agent documentaire",
        "Agent service client",
        "Agent d'escalade",
      ],
      en: [
        "Email Agent",
        "Dispatch Agent",
        "Scheduling Agent",
        "Document Agent",
        "Customer Support Agent",
        "Escalation Agent",
      ],
    },
  },
  {
    id: "automation",
    icon: "Workflow",
    title: { fr: "Automatisation", en: "Automation" },
    description: {
      fr: "Nous connectons vos outils existants et automatisons les flux qui vous font perdre du temps.",
      en: "We connect your existing tools and automate the workflows that drain your time.",
    },
    examples: {
      fr: [
        "Flux n8n",
        "Power Automate",
        "Automatisation Gmail / Outlook",
        "Automatisation des agendas",
        "Routage de documents",
        "Flux d'approbation",
      ],
      en: [
        "n8n workflows",
        "Power Automate",
        "Gmail / Outlook automation",
        "Calendar automation",
        "Document routing",
        "Approval workflows",
      ],
    },
  },
  {
    id: "business-intelligence",
    icon: "BarChart3",
    title: { fr: "Business Intelligence", en: "Business Intelligence" },
    description: {
      fr: "Des données opérationnelles transformées en décisions claires grâce à des tableaux de bord conçus pour vos KPIs.",
      en: "Operational data turned into clear decisions through dashboards designed around your KPIs.",
    },
    examples: {
      fr: [
        "Tableaux de bord Power BI",
        "Conception de KPIs",
        "Suivi des revenus et des coûts",
        "Rapports d'inventaire",
        "Visibilité opérationnelle",
      ],
      en: [
        "Power BI dashboards",
        "KPI design",
        "Revenue and cost tracking",
        "Inventory reporting",
        "Operational visibility",
      ],
    },
  },
  {
    id: "custom-software",
    icon: "Code2",
    title: { fr: "Logiciels sur mesure", en: "Custom Software" },
    description: {
      fr: "Quand les outils du marché ne suffisent pas, nous construisons exactement ce dont vous avez besoin.",
      en: "When off-the-shelf tools fall short, we build exactly what you need.",
    },
    examples: {
      fr: [
        "Tableaux de bord internes",
        "Portails clients",
        "Planificateurs de chargement",
        "Applications d'entrepôt",
        "Outils de route et de répartition",
      ],
      en: [
        "Internal dashboards",
        "Client portals",
        "Loading planners",
        "Warehouse apps",
        "Route and dispatch tools",
      ],
    },
  },
];
