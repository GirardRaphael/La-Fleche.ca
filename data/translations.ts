/**
 * Central UI translation dictionary for La Flèche AI.
 *
 * Structure: dictionary.fr / dictionary.en hold the same shape.
 * Edit text here to change UI copy. Page CONTENT (services, projects,
 * pricing, blog, solutions) lives in the other files in /data.
 */

export const dictionary = {
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      solutions: "Solutions",
      projects: "Projets",
      pricing: "Tarifs",
      blog: "Blogue",
      about: "À propos",
      contact: "Contact",
      bookDemo: "Réserver une démo",
    },
    common: {
      bookDemo: "Réserver une démo",
      contactUs: "Nous contacter",
      viewSolutions: "Voir les solutions",
      viewProject: "Voir le projet",
      viewAll: "Tout voir",
      learnMore: "En savoir plus",
      getStarted: "Commencer",
      readArticle: "Lire l'article",
      mostPopular: "Le plus populaire",
      startingAt: "À partir de",
      perMonth: "/mois",
      setupFrom: "installation à partir de",
      customQuote: "Sur devis",
      readTime: "min de lecture",
      problem: "Problème résolu",
      features: "Fonctionnalités clés",
      value: "Valeur d'affaires",
      sendMessage: "Envoyer le message",
      requestDemo: "Demander une démo",
    },
    hero: {
      eyebrow: "Opérations propulsées par l'IA",
      headline1: "Automatiser aujourd'hui.",
      headline2: "Accélérer demain.",
      sub: "La Flèche AI aide les entreprises à automatiser leurs opérations, leurs communications et leurs décisions grâce à des agents IA, des tableaux de bord intelligents et des solutions sur mesure.",
      badges: ["Agents IA", "Automatisation", "Power BI", "Logistique", "Logiciels sur mesure"],
    },
    problem: {
      eyebrow: "Le constat",
      title: "Vos équipes perdent du temps sur le travail répétitif",
      subtitle:
        "Chaque jour, des heures précieuses disparaissent dans des tâches manuelles que l'IA peut exécuter en quelques secondes.",
      items: [
        "Trop de courriels manuels",
        "Coordination de répartition trop lente",
        "Suivis oubliés",
        "Tâches administratives répétitives",
        "Documents désorganisés",
        "Faible visibilité sur les KPIs",
        "Rapports manuels",
        "Réponses clients trop lentes",
      ],
    },
    solution: {
      eyebrow: "La solution",
      title: "Votre centre de commande des opérations IA",
      subtitle:
        "La Flèche AI devient la couche opérationnelle intelligente de votre entreprise — elle relie vos outils et exécute le travail à votre place.",
      nodes: [
        { title: "Boîte de réception", desc: "Tri et réponses automatisés" },
        { title: "Appels", desc: "Assistant vocal intelligent" },
        { title: "Documents", desc: "Extraction et routage" },
        { title: "Planification", desc: "Rendez-vous et répartition" },
        { title: "Tableaux de bord", desc: "KPIs en temps réel" },
        { title: "Escalades", desc: "Priorisation automatique" },
        { title: "Applications", desc: "Outils sur mesure" },
      ],
      center: "Centre IA",
    },
    pillars: {
      eyebrow: "Ce que nous construisons",
      title: "Quatre piliers, une exécution sans friction",
      subtitle:
        "Des briques modulaires qui s'assemblent autour de vos opérations réelles.",
    },
    featured: {
      eyebrow: "Projets",
      title: "Des solutions concrètes, pas de la théorie",
      subtitle:
        "Un aperçu des systèmes que La Flèche AI conçoit pour les opérations modernes.",
    },
    results: {
      eyebrow: "Résultats potentiels",
      title: "L'impact que l'automatisation peut générer",
      subtitle:
        "Résultats potentiels selon le contexte — chaque déploiement est mesuré et optimisé.",
      stats: [
        { value: 80, suffix: "%", label: "de réduction potentielle du travail manuel" },
        { value: 24, suffix: "/7", label: "disponibilité de l'IA" },
        { value: 10, suffix: "x", label: "triage des demandes plus rapide" },
        { value: 100, suffix: "%", label: "historique des flux traçable" },
      ],
    },
    process: {
      eyebrow: "Notre méthode",
      title: "De l'audit au lancement en 5 étapes",
      subtitle: "Une démarche claire, mesurable et collaborative.",
      steps: [
        { title: "Audit", desc: "Nous cartographions vos tâches répétitives et vos points de friction." },
        { title: "Cartographie des flux", desc: "Nous concevons les flux de travail à automatiser en priorité." },
        { title: "Prototype", desc: "Nous validons rapidement un premier système fonctionnel." },
        { title: "Construction", desc: "Nous bâtissons l'automatisation complète et l'intégrons à vos outils." },
        { title: "Lancement & amélioration", desc: "Nous déployons, mesurons et optimisons en continu." },
      ],
    },
    finalCta: {
      title: "Prêt à bâtir votre avantage opérationnel par l'IA ?",
      subtitle:
        "Réservez une démo gratuite et découvrez ce que La Flèche AI peut automatiser dès cette semaine.",
    },
    footer: {
      tagline: "Automatiser aujourd'hui. Accélérer demain.",
      description:
        "Entreprise d'automatisation IA bilingue qui aide les organisations à automatiser leurs opérations, flux, tableaux de bord et communications.",
      pages: "Pages",
      offers: "Offres",
      contact: "Contact",
      location: "Québec, Canada",
      rights: "Tous droits réservés.",
      builtWith: "Conçu avec précision au Québec.",
    },
    servicesPage: {
      eyebrow: "Services",
      title: "Tout ce qu'il faut pour automatiser vos opérations",
      subtitle:
        "Des agents IA aux logiciels sur mesure — un partenaire unique pour transformer votre travail manuel en systèmes intelligents.",
      examplesLabel: "Exemples",
    },
    solutionsPage: {
      eyebrow: "Solutions par industrie",
      title: "Conçues pour votre réalité opérationnelle",
      subtitle:
        "Chaque secteur a ses goulots d'étranglement. Voici comment La Flèche AI les élimine.",
      painLabel: "Points de friction",
      solutionLabel: "Solution IA",
      exampleLabel: "Exemple d'automatisation",
      valueLabel: "Valeur attendue",
    },
    projectsPage: {
      eyebrow: "Portfolio",
      title: "Projets La Flèche AI",
      subtitle:
        "Des systèmes pensés pour la logistique, l'entreposage, l'industrie et les PME.",
    },
    pricingPage: {
      eyebrow: "Tarifs",
      title: "Une tarification claire, adaptée à votre échelle",
      subtitle:
        "Le prix final dépend de la complexité, des intégrations, du volume d'usage et du niveau de support.",
      oneTimeTitle: "Services ponctuels",
      oneTimeSubtitle: "Des mandats à portée définie, sans engagement mensuel.",
      note: "Tous les prix sont en CAD et servent de point de départ. Réservez une démo pour un devis précis.",
      includes: "Inclus",
    },
    blogPage: {
      eyebrow: "Blogue",
      title: "Idées sur l'IA appliquée aux opérations",
      subtitle:
        "Des articles pratiques sur l'automatisation, les agents IA et la business intelligence.",
      sampleNote: "Articles d'exemple — contenu à venir.",
    },
    aboutPage: {
      eyebrow: "À propos",
      title: "L'IA pratique, pas le battage médiatique",
      story1:
        "La Flèche AI a été créée pour aider les entreprises à aller plus vite en transformant les tâches répétitives en systèmes intelligents.",
      story2:
        "L'entreprise mise sur l'IA pratique, pas sur le battage médiatique. Chaque solution est conçue autour d'opérations réelles, de résultats mesurables et d'une exécution propre.",
      valuesTitle: "Ce qui nous guide",
      values: [
        { title: "Ambition", desc: "Penser grand, livrer vite, viser l'impact réel." },
        { title: "Précision", desc: "Du code propre et des systèmes fiables, sans raccourcis." },
        { title: "Pragmatisme", desc: "Des solutions ancrées dans vos vraies opérations." },
        { title: "Transparence", desc: "Des résultats mesurables et un historique traçable." },
      ],
      ctaTitle: "Construisons quelque chose qui avance vite.",
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Parlons de vos opérations",
      subtitle:
        "Une question, un projet ou simplement de la curiosité ? Écrivez-nous — on répond vite.",
      form: {
        name: "Nom",
        email: "Courriel",
        company: "Entreprise",
        projectType: "Type de projet",
        budget: "Budget approximatif",
        message: "Message",
        namePh: "Votre nom",
        emailPh: "vous@entreprise.com",
        companyPh: "Nom de l'entreprise",
        messagePh: "Décrivez votre besoin en quelques lignes...",
        select: "Sélectionnez...",
        success: "Merci ! Votre message a été préparé. Nous vous répondrons rapidement.",
      },
      cardsTitle: "Autres façons de nous joindre",
      emailCard: "Écrivez-nous directement",
      githubCard: "Voir nos projets",
      demoCard: "Planifier une démonstration",
    },
    demoPage: {
      eyebrow: "Réserver une démo",
      title: "Voyez La Flèche AI en action",
      subtitle:
        "Réservez une démo de 30 minutes. Nous analyserons vos opérations et vous montrerons exactement ce qui peut être automatisé.",
      form: {
        name: "Nom",
        email: "Courriel",
        company: "Entreprise",
        industry: "Industrie",
        automate: "Que voulez-vous automatiser ?",
        tools: "Outils actuellement utilisés",
        contactMethod: "Méthode de contact préférée",
        message: "Message",
        namePh: "Votre nom",
        emailPh: "vous@entreprise.com",
        companyPh: "Nom de l'entreprise",
        automatePh: "Ex. : tri des courriels, répartition, rapports...",
        toolsPh: "Ex. : Gmail, Outlook, Teams, Excel, CRM...",
        messagePh: "Quelque chose à ajouter ?",
        select: "Sélectionnez...",
        success: "Merci ! Votre demande de démo a été préparée. Nous vous contacterons sous peu.",
      },
      whatToExpect: "À quoi s'attendre",
      expectations: [
        "Une analyse rapide de vos opérations actuelles",
        "Des exemples concrets d'automatisation pour votre secteur",
        "Une estimation de l'impact et des prochaines étapes",
        "Aucune pression, aucun engagement",
      ],
    },
    projectDetail: {
      back: "Tous les projets",
      problem: "Problème résolu",
      features: "Fonctionnalités clés",
      value: "Valeur d'affaires",
      cta: "Intéressé par un système similaire ?",
    },
  },

  en: {
    nav: {
      home: "Home",
      services: "Services",
      solutions: "Solutions",
      projects: "Projects",
      pricing: "Pricing",
      blog: "Blog",
      about: "About",
      contact: "Contact",
      bookDemo: "Book a Demo",
    },
    common: {
      bookDemo: "Book a Demo",
      contactUs: "Contact Us",
      viewSolutions: "View Solutions",
      viewProject: "View Project",
      viewAll: "View all",
      learnMore: "Learn more",
      getStarted: "Get started",
      readArticle: "Read article",
      mostPopular: "Most popular",
      startingAt: "Starting at",
      perMonth: "/month",
      setupFrom: "setup from",
      customQuote: "Custom quote",
      readTime: "min read",
      problem: "Problem solved",
      features: "Key features",
      value: "Business value",
      sendMessage: "Send message",
      requestDemo: "Request Demo",
    },
    hero: {
      eyebrow: "AI-powered operations",
      headline1: "Automate today.",
      headline2: "Accelerate tomorrow.",
      sub: "La Flèche AI helps businesses automate operations, communication, and decision-making with AI agents, intelligent dashboards, and custom software solutions.",
      badges: ["AI Agents", "Automation", "Power BI", "Logistics", "Custom Software"],
    },
    problem: {
      eyebrow: "The reality",
      title: "Your teams lose hours to repetitive work",
      subtitle:
        "Every day, valuable hours vanish into manual tasks that AI can execute in seconds.",
      items: [
        "Too many manual emails",
        "Slow dispatch coordination",
        "Missed follow-ups",
        "Repetitive admin tasks",
        "Messy documents",
        "Poor visibility into KPIs",
        "Manual reporting",
        "Slow customer response times",
      ],
    },
    solution: {
      eyebrow: "The solution",
      title: "Your AI operations command center",
      subtitle:
        "La Flèche AI becomes the intelligent operational layer of your business — connecting your tools and doing the work for you.",
      nodes: [
        { title: "Inbox", desc: "Automated triage & replies" },
        { title: "Calls", desc: "Intelligent voice assistant" },
        { title: "Documents", desc: "Extraction & routing" },
        { title: "Scheduling", desc: "Appointments & dispatch" },
        { title: "Dashboards", desc: "Real-time KPIs" },
        { title: "Escalations", desc: "Automatic prioritization" },
        { title: "Apps", desc: "Custom-built tools" },
      ],
      center: "AI Core",
    },
    pillars: {
      eyebrow: "What we build",
      title: "Four pillars, one frictionless execution",
      subtitle:
        "Modular building blocks that assemble around your real operations.",
    },
    featured: {
      eyebrow: "Projects",
      title: "Real systems, not theory",
      subtitle:
        "A look at the systems La Flèche AI builds for modern operations.",
    },
    results: {
      eyebrow: "Potential results",
      title: "The impact automation can create",
      subtitle:
        "Potential results depending on context — every deployment is measured and optimized.",
      stats: [
        { value: 80, suffix: "%", label: "potential manual work reduction" },
        { value: 24, suffix: "/7", label: "AI availability" },
        { value: 10, suffix: "x", label: "faster request triage" },
        { value: 100, suffix: "%", label: "traceable workflow history" },
      ],
    },
    process: {
      eyebrow: "Our method",
      title: "From audit to launch in 5 steps",
      subtitle: "A clear, measurable and collaborative approach.",
      steps: [
        { title: "Audit", desc: "We map your repetitive tasks and friction points." },
        { title: "Workflow Mapping", desc: "We design the workflows worth automating first." },
        { title: "Prototype", desc: "We quickly validate a first working system." },
        { title: "Automation Build", desc: "We build the full automation and integrate your tools." },
        { title: "Launch & Improve", desc: "We deploy, measure and optimize continuously." },
      ],
    },
    finalCta: {
      title: "Ready to build your AI operations advantage?",
      subtitle:
        "Book a free demo and see what La Flèche AI can automate as early as this week.",
    },
    footer: {
      tagline: "Automate today. Accelerate tomorrow.",
      description:
        "Bilingual AI automation company helping organizations automate operations, workflows, dashboards, and communication.",
      pages: "Pages",
      offers: "Offers",
      contact: "Contact",
      location: "Québec, Canada",
      rights: "All rights reserved.",
      builtWith: "Built with precision in Québec.",
    },
    servicesPage: {
      eyebrow: "Services",
      title: "Everything you need to automate your operations",
      subtitle:
        "From AI agents to custom software — one partner to turn your manual work into intelligent systems.",
      examplesLabel: "Examples",
    },
    solutionsPage: {
      eyebrow: "Solutions by industry",
      title: "Built for your operational reality",
      subtitle:
        "Every sector has its bottlenecks. Here's how La Flèche AI removes them.",
      painLabel: "Pain points",
      solutionLabel: "AI solution",
      exampleLabel: "Example automation",
      valueLabel: "Expected value",
    },
    projectsPage: {
      eyebrow: "Portfolio",
      title: "La Flèche AI projects",
      subtitle:
        "Systems designed for logistics, warehousing, industry and SMBs.",
    },
    pricingPage: {
      eyebrow: "Pricing",
      title: "Clear pricing that scales with you",
      subtitle:
        "Final pricing depends on complexity, integrations, usage volume, and support level.",
      oneTimeTitle: "One-time services",
      oneTimeSubtitle: "Scoped engagements with no monthly commitment.",
      note: "All prices are in CAD and serve as a starting point. Book a demo for an accurate quote.",
      includes: "Includes",
    },
    blogPage: {
      eyebrow: "Blog",
      title: "Ideas on AI applied to operations",
      subtitle:
        "Practical articles on automation, AI agents and business intelligence.",
      sampleNote: "Sample articles — content coming soon.",
    },
    aboutPage: {
      eyebrow: "About",
      title: "Practical AI, not hype",
      story1:
        "La Flèche AI was created to help businesses move faster by turning repetitive tasks into intelligent systems.",
      story2:
        "The company focuses on practical AI, not hype. Every solution is designed around real operations, measurable results, and clean execution.",
      valuesTitle: "What guides us",
      values: [
        { title: "Ambition", desc: "Think big, ship fast, aim for real impact." },
        { title: "Precision", desc: "Clean code and reliable systems, no shortcuts." },
        { title: "Pragmatism", desc: "Solutions grounded in your real operations." },
        { title: "Transparency", desc: "Measurable results and a traceable history." },
      ],
      ctaTitle: "Let's build something that moves fast.",
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Let's talk about your operations",
      subtitle:
        "A question, a project, or just curious? Write to us — we reply fast.",
      form: {
        name: "Name",
        email: "Email",
        company: "Company",
        projectType: "Project type",
        budget: "Budget range",
        message: "Message",
        namePh: "Your name",
        emailPh: "you@company.com",
        companyPh: "Company name",
        messagePh: "Describe your needs in a few lines...",
        select: "Select...",
        success: "Thanks! Your message has been prepared. We'll get back to you shortly.",
      },
      cardsTitle: "Other ways to reach us",
      emailCard: "Email us directly",
      githubCard: "See our projects",
      demoCard: "Schedule a demo",
    },
    demoPage: {
      eyebrow: "Book a Demo",
      title: "See La Flèche AI in action",
      subtitle:
        "Book a 30-minute demo. We'll analyze your operations and show you exactly what can be automated.",
      form: {
        name: "Name",
        email: "Email",
        company: "Company",
        industry: "Industry",
        automate: "What do you want to automate?",
        tools: "Current tools used",
        contactMethod: "Preferred contact method",
        message: "Message",
        namePh: "Your name",
        emailPh: "you@company.com",
        companyPh: "Company name",
        automatePh: "e.g. email triage, dispatch, reporting...",
        toolsPh: "e.g. Gmail, Outlook, Teams, Excel, CRM...",
        messagePh: "Anything to add?",
        select: "Select...",
        success: "Thanks! Your demo request has been prepared. We'll contact you soon.",
      },
      whatToExpect: "What to expect",
      expectations: [
        "A quick analysis of your current operations",
        "Concrete automation examples for your sector",
        "An impact estimate and next steps",
        "No pressure, no commitment",
      ],
    },
    projectDetail: {
      back: "All projects",
      problem: "Problem solved",
      features: "Key features",
      value: "Business value",
      cta: "Interested in a similar system?",
    },
  },
};

export type Dictionary = (typeof dictionary)["fr"];
