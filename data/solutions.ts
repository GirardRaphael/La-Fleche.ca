import type { Localized } from "@/lib/i18n";

export type Solution = {
  id: string;
  icon: string;
  industry: Localized;
  pain: Localized;
  solution: Localized;
  example: Localized;
  value: Localized;
  accent: "purple" | "blue" | "cyan";
};

export const solutions: Solution[] = [
  {
    id: "logistics",
    icon: "Truck",
    accent: "purple",
    industry: { fr: "Logistique & Transport", en: "Logistics & Transportation" },
    pain: {
      fr: "Répartition lente, appels constants, suivis d'expédition manuels.",
      en: "Slow dispatch, constant calls, manual shipment follow-ups.",
    },
    solution: {
      fr: "Des agents IA qui coordonnent les chauffeurs, gèrent les rendez-vous et tiennent les clients informés.",
      en: "AI agents that coordinate drivers, manage appointments, and keep customers informed.",
    },
    example: {
      fr: "Dispatch AI envoie automatiquement les mises à jour d'expédition et confirme les rendez-vous.",
      en: "Dispatch AI automatically sends shipment updates and confirms appointments.",
    },
    value: {
      fr: "Moins d'appels, des trajets mieux planifiés, des clients satisfaits.",
      en: "Fewer calls, better-planned routes, happier customers.",
    },
  },
  {
    id: "warehousing",
    icon: "Warehouse",
    accent: "blue",
    industry: { fr: "Entreposage", en: "Warehousing" },
    pain: {
      fr: "Chargements sous-optimaux, inventaire flou, planification manuelle.",
      en: "Sub-optimal loads, fuzzy inventory, manual planning.",
    },
    solution: {
      fr: "Des outils de planification de chargement et des tableaux de bord d'inventaire en temps réel.",
      en: "Loading planning tools and real-time inventory dashboards.",
    },
    example: {
      fr: "Loading Planner AI optimise l'espace, le poids et l'ordre FIFO de chaque chargement.",
      en: "Loading Planner AI optimizes space, weight, and FIFO order for every load.",
    },
    value: {
      fr: "Plus de volume expédié et moins d'erreurs coûteuses.",
      en: "More volume shipped and fewer costly mistakes.",
    },
  },
  {
    id: "smb",
    icon: "Store",
    accent: "cyan",
    industry: { fr: "Petites entreprises", en: "Small Businesses" },
    pain: {
      fr: "Une petite équipe submergée par les courriels et l'administratif.",
      en: "A small team overwhelmed by email and admin work.",
    },
    solution: {
      fr: "Des automatisations simples qui prennent en charge le travail répétitif sans remplacer l'équipe.",
      en: "Simple automations that handle repetitive work without replacing the team.",
    },
    example: {
      fr: "Inbox AI trie les courriels entrants et prépare des réponses prêtes à envoyer.",
      en: "Inbox AI sorts incoming emails and prepares ready-to-send replies.",
    },
    value: {
      fr: "Plus de temps pour servir les clients et faire croître l'entreprise.",
      en: "More time to serve customers and grow the business.",
    },
  },
  {
    id: "industrial",
    icon: "Factory",
    accent: "purple",
    industry: { fr: "Opérations industrielles", en: "Industrial Operations" },
    pain: {
      fr: "Rapports manuels, faible visibilité sur la production et les coûts.",
      en: "Manual reporting, poor visibility into production and costs.",
    },
    solution: {
      fr: "Des tableaux de bord Power BI et des flux automatisés reliant vos systèmes de production.",
      en: "Power BI dashboards and automated workflows connecting your production systems.",
    },
    example: {
      fr: "Des KPIs de production et de coût mis à jour automatiquement chaque heure.",
      en: "Production and cost KPIs updated automatically every hour.",
    },
    value: {
      fr: "Des décisions plus rapides basées sur des données fiables.",
      en: "Faster decisions based on reliable data.",
    },
  },
  {
    id: "customer-service",
    icon: "Headphones",
    accent: "blue",
    industry: { fr: "Équipes de service client", en: "Customer Service Teams" },
    pain: {
      fr: "Temps de réponse lents et demandes urgentes noyées dans le volume.",
      en: "Slow response times and urgent requests lost in the volume.",
    },
    solution: {
      fr: "Des agents IA qui répondent, priorisent et escaladent les demandes au bon moment.",
      en: "AI agents that respond, prioritize, and escalate requests at the right time.",
    },
    example: {
      fr: "Le gestionnaire d'escalade IA détecte l'urgence et assigne automatiquement la demande.",
      en: "The AI Escalation Manager detects urgency and auto-assigns the request.",
    },
    value: {
      fr: "Des clients mieux servis et une équipe moins sous pression.",
      en: "Better-served customers and a less-pressured team.",
    },
  },
  {
    id: "admin",
    icon: "FileStack",
    accent: "cyan",
    industry: { fr: "Équipes administratives", en: "Administrative Teams" },
    pain: {
      fr: "Documents désorganisés, approbations lentes, ressaisies sans fin.",
      en: "Messy documents, slow approvals, endless re-typing.",
    },
    solution: {
      fr: "Du routage de documents, des flux d'approbation et de l'extraction de données automatisés.",
      en: "Automated document routing, approval workflows, and data extraction.",
    },
    example: {
      fr: "L'agent documentaire extrait les données des factures et les classe automatiquement.",
      en: "The Document Agent extracts invoice data and files it automatically.",
    },
    value: {
      fr: "Moins de paperasse, moins d'erreurs, plus de temps stratégique.",
      en: "Less paperwork, fewer errors, more strategic time.",
    },
  },
];
