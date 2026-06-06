import type { Localized } from "@/lib/i18n";

export type BlogPost = {
  slug: string;
  title: Localized;
  excerpt: Localized;
  category: Localized;
  readTime: number;
  accent: "purple" | "blue" | "cyan";
};

/** Sample article cards — replace with real content later. */
export const blogPosts: BlogPost[] = [
  {
    slug: "ai-agents-reduce-admin-work",
    accent: "purple",
    readTime: 6,
    category: { fr: "Agents IA", en: "AI Agents" },
    title: {
      fr: "Comment les agents IA peuvent réduire le travail administratif manuel",
      en: "How AI Agents Can Reduce Manual Admin Work",
    },
    excerpt: {
      fr: "Du tri du courrier à la saisie de données, découvrez les tâches que les agents IA prennent en charge dès aujourd'hui.",
      en: "From email triage to data entry, discover the tasks AI agents can take over today.",
    },
  },
  {
    slug: "logistics-email-automation",
    accent: "blue",
    readTime: 5,
    category: { fr: "Logistique", en: "Logistics" },
    title: {
      fr: "Pourquoi les entreprises de logistique ont besoin d'une meilleure automatisation du courriel",
      en: "Why Logistics Companies Need Better Email Automation",
    },
    excerpt: {
      fr: "La coordination par courriel ralentit la répartition. Voici comment l'automatiser intelligemment.",
      en: "Email coordination slows dispatch. Here's how to automate it intelligently.",
    },
  },
  {
    slug: "warehouse-power-bi-dashboards",
    accent: "cyan",
    readTime: 7,
    category: { fr: "Business Intelligence", en: "Business Intelligence" },
    title: {
      fr: "Les tableaux de bord Power BI que chaque entrepôt devrait avoir",
      en: "Power BI Dashboards Every Warehouse Should Have",
    },
    excerpt: {
      fr: "Inventaire, productivité, coûts : les KPIs essentiels pour piloter un entrepôt moderne.",
      en: "Inventory, productivity, costs: the essential KPIs to run a modern warehouse.",
    },
  },
  {
    slug: "what-is-ai-escalation-manager",
    accent: "purple",
    readTime: 4,
    category: { fr: "Agents IA", en: "AI Agents" },
    title: {
      fr: "Qu'est-ce qu'un gestionnaire d'escalade IA ?",
      en: "What Is an AI Escalation Manager?",
    },
    excerpt: {
      fr: "Un système qui détecte l'urgence, priorise et assigne la responsabilité automatiquement.",
      en: "A system that detects urgency, prioritizes, and assigns responsibility automatically.",
    },
  },
  {
    slug: "smb-start-automating",
    accent: "blue",
    readTime: 5,
    category: { fr: "PME", en: "Small Business" },
    title: {
      fr: "Comment les PME peuvent commencer à automatiser sans remplacer leur équipe",
      en: "How Small Businesses Can Start Automating Without Replacing Their Team",
    },
    excerpt: {
      fr: "L'automatisation n'est pas une menace pour les emplois — c'est un levier pour votre équipe.",
      en: "Automation isn't a threat to jobs — it's a force multiplier for your team.",
    },
  },
];
