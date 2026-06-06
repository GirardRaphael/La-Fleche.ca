import type { Localized } from "@/lib/i18n";

export type PricingTier = {
  id: string;
  name: Localized;
  price: Localized;
  setup?: Localized;
  best: Localized;
  features: Localized<string[]>;
  highlighted?: boolean;
};

export const tiers: PricingTier[] = [
  {
    id: "starter",
    name: { fr: "Automatisation Starter", en: "Starter Automation" },
    price: { fr: "499 $/mois", en: "$499/mo" },
    setup: { fr: "installation à partir de 2 500 $", en: "setup from $2,500" },
    best: {
      fr: "Idéal pour les petites entreprises qui débutent avec un premier flux.",
      en: "Best for small businesses starting with one workflow.",
    },
    features: {
      fr: [
        "1 flux IA",
        "Automatisation courriel ou formulaire",
        "Tableau de bord de base",
        "Optimisation mensuelle",
        "Support de base",
      ],
      en: [
        "1 AI workflow",
        "Email or form automation",
        "Basic dashboard",
        "Monthly optimization",
        "Basic support",
      ],
    },
  },
  {
    id: "growth",
    name: { fr: "Système IA Growth", en: "Growth AI System" },
    price: { fr: "1 500 $/mois", en: "$1,500/mo" },
    setup: { fr: "installation à partir de 7 500 $", en: "setup from $7,500" },
    highlighted: true,
    best: {
      fr: "Pour les entreprises qui veulent plusieurs automatisations connectées.",
      en: "Best for businesses wanting multiple connected automations.",
    },
    features: {
      fr: [
        "3 à 5 flux IA",
        "Intégration Gmail/Outlook",
        "Connexion agenda ou CRM",
        "Flux d'approbation",
        "Tableau de bord de reporting",
        "Revue de performance mensuelle",
      ],
      en: [
        "3–5 AI workflows",
        "Gmail/Outlook integration",
        "Calendar or CRM connection",
        "Approval workflows",
        "Reporting dashboard",
        "Monthly performance review",
      ],
    },
  },
  {
    id: "operations",
    name: { fr: "Centre de commande", en: "Operations Command Center" },
    price: { fr: "3 500 $/mois", en: "$3,500/mo" },
    setup: { fr: "installation sur mesure", en: "custom setup" },
    best: {
      fr: "Pour la logistique, les entrepôts et les opérations à fort volume.",
      en: "Best for logistics, warehouses, and high-volume operations.",
    },
    features: {
      fr: [
        "Système IA multi-agents",
        "Automatisation répartition/planification",
        "Traitement de documents",
        "Système d'escalade",
        "Tableaux de bord Power BI",
        "Modules logiciels sur mesure",
        "Support prioritaire",
      ],
      en: [
        "Multi-agent AI system",
        "Dispatch/scheduling automation",
        "Document processing",
        "Escalation system",
        "Power BI dashboards",
        "Custom software modules",
        "Priority support",
      ],
    },
  },
  {
    id: "custom",
    name: { fr: "Build sur mesure", en: "Custom Build" },
    price: { fr: "Sur devis", en: "Custom quote" },
    best: {
      fr: "Pour les plateformes internes avancées.",
      en: "Best for advanced internal platforms.",
    },
    features: {
      fr: [
        "Application web sur mesure",
        "Intégrations API",
        "Base de données",
        "Agents IA",
        "Tableaux de bord",
        "Sécurité et déploiement",
      ],
      en: [
        "Custom web application",
        "API integrations",
        "Database",
        "AI agents",
        "Dashboards",
        "Security and deployment planning",
      ],
    },
  },
];

export type OneTimeService = {
  id: string;
  name: Localized;
  price: Localized;
  icon: string;
};

export const oneTimeServices: OneTimeService[] = [
  {
    id: "powerbi",
    icon: "BarChart3",
    name: { fr: "Tableau de bord Power BI", en: "Power BI Dashboard" },
    price: { fr: "à partir de 1 500 $", en: "starting at $1,500" },
  },
  {
    id: "audit",
    icon: "Search",
    name: { fr: "Audit de flux de travail", en: "Workflow Audit" },
    price: { fr: "à partir de 750 $", en: "starting at $750" },
  },
  {
    id: "prototype",
    icon: "Rocket",
    name: { fr: "Prototype d'automatisation IA", en: "AI Automation Prototype" },
    price: { fr: "à partir de 2 500 $", en: "starting at $2,500" },
  },
  {
    id: "tool",
    icon: "Wrench",
    name: { fr: "Outil interne sur mesure", en: "Custom Internal Tool" },
    price: { fr: "à partir de 5 000 $", en: "starting at $5,000" },
  },
];
