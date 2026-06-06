import type { Localized } from "@/lib/i18n";

export type Project = {
  slug: string;
  icon: string; // lucide-react icon name
  name: Localized;
  tagline: Localized;
  problem: Localized;
  features: Localized<string[]>;
  value: Localized;
  category: Localized;
  accent: "purple" | "blue" | "cyan";
};

export const projects: Project[] = [
  {
    slug: "ai-escalation-manager",
    icon: "AlertTriangle",
    accent: "purple",
    category: { fr: "Agents IA", en: "AI Agents" },
    name: { fr: "Gestionnaire d'escalade IA", en: "AI Escalation Manager" },
    tagline: {
      fr: "Priorise, détecte l'urgence et assigne la responsabilité.",
      en: "Prioritizes, detects urgency, and assigns responsibility.",
    },
    problem: {
      fr: "Les demandes urgentes se perdent dans le bruit et personne ne sait qui doit agir.",
      en: "Urgent requests get lost in the noise and no one knows who should act.",
    },
    features: {
      fr: [
        "Priorisation automatique des demandes",
        "Détection d'urgence par IA",
        "Attribution de responsabilité",
        "Suivi du cycle d'escalade",
      ],
      en: [
        "Automatic request prioritization",
        "AI urgency detection",
        "Responsibility assignment",
        "Escalation lifecycle tracking",
      ],
    },
    value: {
      fr: "Aucune demande critique ne tombe entre les mailles du filet.",
      en: "No critical request ever falls through the cracks.",
    },
  },
  {
    slug: "inbox-ai",
    icon: "Mail",
    accent: "blue",
    category: { fr: "Agents IA", en: "AI Agents" },
    name: { fr: "Inbox AI", en: "Inbox AI" },
    tagline: {
      fr: "Classification et réponse de courriels pour les entreprises.",
      en: "Email classification and response assistant for businesses.",
    },
    problem: {
      fr: "Des centaines de courriels par jour, triés et répondus à la main.",
      en: "Hundreds of emails a day, sorted and answered by hand.",
    },
    features: {
      fr: [
        "Classification automatique par intention",
        "Brouillons de réponse contextuels",
        "Routage vers le bon service",
        "Résumés de fils de discussion",
      ],
      en: [
        "Automatic intent classification",
        "Context-aware reply drafts",
        "Routing to the right team",
        "Thread summaries",
      ],
    },
    value: {
      fr: "Une boîte de réception qui se gère presque toute seule.",
      en: "An inbox that nearly manages itself.",
    },
  },
  {
    slug: "loading-planner-ai",
    icon: "PackageOpen",
    accent: "cyan",
    category: { fr: "Logistique", en: "Logistics" },
    name: { fr: "Loading Planner AI", en: "Loading Planner AI" },
    tagline: {
      fr: "Planification de chargement conteneurs, remorques et wagons.",
      en: "Container, trailer, and wagon loading planner.",
    },
    problem: {
      fr: "Optimiser l'espace, le poids et l'ordre FIFO à la main est lent et source d'erreurs.",
      en: "Optimizing space, weight, and FIFO order by hand is slow and error-prone.",
    },
    features: {
      fr: [
        "Optimisation de l'espace 3D",
        "Respect des limites de poids",
        "Gestion FIFO de l'inventaire",
        "Plans de chargement exportables",
      ],
      en: [
        "3D space optimization",
        "Weight-limit compliance",
        "FIFO inventory handling",
        "Exportable loading plans",
      ],
    },
    value: {
      fr: "Plus de volume transporté, moins d'erreurs de chargement.",
      en: "More volume shipped, fewer loading mistakes.",
    },
  },
  {
    slug: "dispatch-ai",
    icon: "Truck",
    accent: "purple",
    category: { fr: "Logistique", en: "Logistics" },
    name: { fr: "Dispatch AI", en: "Dispatch AI" },
    tagline: {
      fr: "Coordination des chauffeurs, rendez-vous et mises à jour.",
      en: "Driver coordination, appointments, and shipment updates.",
    },
    problem: {
      fr: "La coordination de la répartition repose sur des appels et des messages dispersés.",
      en: "Dispatch coordination relies on scattered calls and messages.",
    },
    features: {
      fr: [
        "Coordination des chauffeurs",
        "Gestion des rendez-vous",
        "Mises à jour d'expédition automatisées",
        "Communication opérationnelle centralisée",
      ],
      en: [
        "Driver coordination",
        "Appointment management",
        "Automated shipment updates",
        "Centralized operational communication",
      ],
    },
    value: {
      fr: "Une répartition plus fluide et des chauffeurs mieux informés.",
      en: "Smoother dispatch and better-informed drivers.",
    },
  },
  {
    slug: "ai-call-assistant",
    icon: "PhoneCall",
    accent: "blue",
    category: { fr: "Agents IA", en: "AI Agents" },
    name: { fr: "Assistant d'appels IA", en: "AI Call Assistant" },
    tagline: {
      fr: "Prise de rendez-vous, questions clients et routage d'appels.",
      en: "Appointment booking, customer questions, and call routing.",
    },
    problem: {
      fr: "Les appels manqués deviennent des occasions et des clients perdus.",
      en: "Missed calls turn into lost opportunities and customers.",
    },
    features: {
      fr: [
        "Prise de rendez-vous vocale",
        "Mise à jour de l'agenda",
        "Réponses aux questions clients",
        "Routage intelligent des appels",
      ],
      en: [
        "Voice appointment booking",
        "Agenda updates",
        "Customer question handling",
        "Intelligent call routing",
      ],
    },
    value: {
      fr: "Une disponibilité 24/7 sans agrandir l'équipe.",
      en: "24/7 availability without growing the team.",
    },
  },
  {
    slug: "power-bi-dashboards",
    icon: "LayoutDashboard",
    accent: "cyan",
    category: { fr: "Business Intelligence", en: "Business Intelligence" },
    name: { fr: "Tableaux de bord Power BI", en: "Power BI Dashboards" },
    tagline: {
      fr: "Tableaux de bord exécutifs pour la logistique et les ventes.",
      en: "Executive dashboards for logistics, sales, and operations.",
    },
    problem: {
      fr: "Les KPIs sont éparpillés dans des fichiers Excel sans vue d'ensemble.",
      en: "KPIs are scattered across spreadsheets with no big picture.",
    },
    features: {
      fr: [
        "KPIs logistique et entrepôt",
        "Suivi des ventes et de l'inventaire",
        "Analyse des revenus et des coûts",
        "Visibilité opérationnelle en temps réel",
      ],
      en: [
        "Logistics and warehouse KPIs",
        "Sales and inventory tracking",
        "Revenue and cost analysis",
        "Real-time operational visibility",
      ],
    },
    value: {
      fr: "Des décisions basées sur des données fiables, en un coup d'œil.",
      en: "Decisions based on reliable data, at a glance.",
    },
  },
  {
    slug: "pothole-navigation-app",
    icon: "Navigation",
    accent: "purple",
    category: { fr: "Logiciel sur mesure", en: "Custom Software" },
    name: { fr: "App de navigation Nid-de-poule", en: "Pothole Navigation App" },
    tagline: {
      fr: "Signalement routier intelligent et alertes d'itinéraire.",
      en: "Smart road-reporting and route-alert concept.",
    },
    problem: {
      fr: "Les conducteurs n'ont aucune alerte en temps réel sur l'état des routes.",
      en: "Drivers have no real-time alerts about road conditions.",
    },
    features: {
      fr: [
        "Signalement de nids-de-poule en temps réel",
        "Alertes d'itinéraire",
        "Cartographie communautaire",
        "Inspiré des flux de navigation réels",
      ],
      en: [
        "Real-time pothole reporting",
        "Route alerts",
        "Community-sourced mapping",
        "Inspired by real navigation workflows",
      ],
    },
    value: {
      fr: "Des trajets plus sûrs et un entretien routier mieux ciblé.",
      en: "Safer trips and better-targeted road maintenance.",
    },
  },
  {
    slug: "amq-delivery-app",
    icon: "ShoppingBag",
    accent: "blue",
    category: { fr: "Logiciel sur mesure", en: "Custom Software" },
    name: { fr: "App de livraison AMQ", en: "AMQ Delivery App" },
    tagline: {
      fr: "Commande et livraison avec visualisation et abonnements.",
      en: "Consumer ordering and delivery with subscriptions and analytics.",
    },
    problem: {
      fr: "Offrir une expérience de commande moderne sans plateforme adaptée.",
      en: "Delivering a modern ordering experience without a fitting platform.",
    },
    features: {
      fr: [
        "Visualisation des produits",
        "Abonnements récurrents",
        "Suivi des commandes",
        "Analytique intégrée",
      ],
      en: [
        "Product visualization",
        "Recurring subscriptions",
        "Order tracking",
        "Built-in analytics",
      ],
    },
    value: {
      fr: "Une expérience client fluide et des revenus récurrents.",
      en: "A smooth customer experience and recurring revenue.",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
