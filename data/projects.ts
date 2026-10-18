import type { Localized } from "@/lib/i18n";

const l = (fr: string, en: string): Localized => ({ fr, en });
export const categories = {
  ai: l("Applications IA", "AI applications"), data: l("Données et ML", "Data & ML"),
  vision: l("Vision par ordinateur", "Computer vision"), logistics: l("Logistique", "Logistics"),
  web: l("Applications web", "Web applications"), mobile: l("Mobile", "Mobile"), cloud: l("Cloud", "Cloud"),
};
export type Category = keyof typeof categories;
export type Project = {
  slug: string; repository: string; githubUrl: string; icon: string; name: Localized;
  tagline: Localized; features: Localized<string[]>; categoryId: Category; category: Localized;
  status: Localized; statusNote: Localized; stack: string[]; featured?: boolean;
  accent: "purple" | "blue" | "cyan";
};
type Entry = Omit<Project, "githubUrl" | "category">;
function project(entry: Entry): Project {
  return { ...entry, githubUrl: `https://github.com/GirardRaphael/${entry.repository}`, category: categories[entry.categoryId] };
}
const f = (fr: string[], en: string[]) => ({ fr, en });
const prototype = l("Prototype", "Prototype");
const research = l("Recherche", "Research");

// Reviewed against repository code and documentation in October 2026.
// Status describes the repository, not a claim of production deployment.
export const projects: Project[] = [
  project({
    slug: "forge-ai", repository: "UE_Car_Gen", icon: "Wrench", categoryId: "ai", accent: "purple", featured: true,
    name: l("Forge AI — Studio de véhicules", "Forge AI — Vehicle Studio"),
    tagline: l("Du dialogue à un modèle 3D : concevoir un véhicule avec Claude et Meshy.", "From conversation to a 3D model: design a vehicle with Claude and Meshy."),
    features: f(["Conversation en continu et appels d'outils", "Génération Meshy et suivi des tâches", "Historique PostgreSQL et vérification des fichiers", "Passerelle Python vers Unreal Editor"], ["Streaming conversations and tool calls", "Meshy generation and job progress", "PostgreSQL history and asset checksums", "Python bridge to Unreal Editor"]),
    status: prototype, statusNote: l("Les intégrations nécessitent leurs clés API et un environnement Unreal configuré.", "Integrations require provider API keys and a configured Unreal environment."),
    stack: ["Next.js", "React", "TypeScript", "Claude", "Meshy", "PostgreSQL", "Drizzle", "Vercel Blob"],
  }),
  project({
    slug: "traffic-observatory", repository: "lstm", icon: "BarChart3", categoryId: "data", accent: "cyan", featured: true,
    name: l("Observatoire de prévision du trafic", "Traffic Forecasting Observatory"),
    tagline: l("Comparer LSTM, XGBoost et références saisonnières avec des expériences reproductibles.", "Compare LSTM, XGBoost and seasonal baselines through reproducible experiments."),
    features: f(["Découpage chronologique et validation glissante", "Entraînement durable et modèles versionnés", "Comparaison prévisions et observations", "Mesures d'erreur et incertitude"], ["Chronological splits and rolling-origin evaluation", "Durable training jobs and versioned models", "Forecast-versus-actual review", "Error metrics and uncertainty estimates"]),
    status: research, statusNote: l("Outil local de recherche. La validation terrain et l'hébergement partagé restent à réaliser.", "Local research workbench. Field validation and shared-hosting readiness remain open."),
    stack: ["Python", "TensorFlow", "Keras", "XGBoost", "scikit-learn", "pandas", "Streamlit", "pytest"],
  }),
  project({
    slug: "quebec-plein-air", repository: "travel-qc-app", icon: "Navigation", categoryId: "web", accent: "blue", featured: true,
    name: l("Québec Plein Air", "Québec Plein Air"),
    tagline: l("Explorer le Québec avec des itinéraires, des distances routières et un budget détaillé.", "Explore Québec with itineraries, road distances and an itemized budget."),
    features: f(["Répertoire touristique et recherche géographique", "Itinéraires déterministes et routage OSRM", "Budget détaillé avec estimations identifiées", "Récits OpenAI facultatifs avec solution de repli"], ["Tourism directory and geographic search", "Deterministic itineraries and OSRM routing", "Itemized budgets with labeled estimates", "Optional OpenAI narratives with fallback"]),
    status: l("Projet éducatif", "Educational project"), statusNote: l("Les tarifs estimés et les distances de repli sont signalés dans l'application.", "Estimated prices and fallback distances are labeled in the application."),
    stack: ["Python", "FastAPI", "SQLite", "FTS5", "R*Tree", "JavaScript", "OpenAI", "Vercel"],
  }),
  project({
    slug: "ai-call-assistant", repository: "Call-Bot-Assistant", icon: "PhoneCall", categoryId: "ai", accent: "purple", featured: true,
    name: l("Assistant d'appels IA", "AI Call Assistant"),
    tagline: l("Une réceptionniste vocale francophone reliée à un agenda et à un tableau de bord.", "A French-speaking voice receptionist connected to a calendar and management dashboard."),
    features: f(["Conversations Twilio et Claude via Bedrock", "Création d'événements Google Calendar", "Gestion des entreprises, clients et services", "Tableau de bord React avec connexion Cognito"], ["Twilio conversations with Claude via Bedrock", "Google Calendar event creation", "Company, customer and service management", "React dashboard with Cognito sign-in"]),
    status: prototype, statusNote: l("La configuration des fournisseurs et le durcissement des webhooks sont nécessaires avant un usage en production.", "Provider setup and webhook hardening are needed before production use."),
    stack: ["Python", "React", "TypeScript", "Amazon Bedrock", "Twilio", "Lambda", "DynamoDB", "Cognito"],
  }),
  project({
    slug: "interntask-ai", repository: "TasK_Assigner_app", icon: "Workflow", categoryId: "mobile", accent: "blue", featured: true,
    name: l("InternTask AI Cloud", "InternTask AI Cloud"),
    tagline: l("Assigner et suivre des tâches de stage, avec des propositions IA révisées par l'instructeur.", "Assign and track internship tasks, with AI proposals reviewed by the instructor."),
    features: f(["Rôles administrateur, instructeur et stagiaire", "Génération de tâches avec Amazon Bedrock", "Commentaires, statuts et pièces jointes S3", "Infrastructure AWS définie avec Terraform"], ["Administrator, instructor and intern roles", "Task generation with Amazon Bedrock", "Comments, statuses and S3 attachments", "AWS infrastructure defined with Terraform"]),
    status: prototype, statusNote: l("Application Flutter et backend AWS ; l'accès nécessite une configuration Cognito.", "Flutter application and AWS backend; access requires Cognito configuration."),
    stack: ["Flutter", "Dart", "Node.js", "Amazon Bedrock", "DynamoDB", "S3", "SNS", "Terraform"],
  }),
  project({
    slug: "loading-planner-ai", repository: "Ai-Loading-Planner", icon: "PackageOpen", categoryId: "logistics", accent: "cyan", featured: true,
    name: l("Loading Planner", "Loading Planner"),
    tagline: l("Préparer des chargements selon l'inventaire, les dimensions, le poids et l'ordre FIFO.", "Plan loads around inventory, dimensions, weight and FIFO order."),
    features: f(["Pipeline inventaire, équipement et optimisation", "Allocation FIFO et contraintes dimensionnelles", "Équilibrage du poids et contrôles de validation", "Interface FastAPI et tests des règles"], ["Inventory, equipment and optimization pipeline", "FIFO allocation and dimensional constraints", "Weight balancing and validation checks", "FastAPI interface and rule tests"]),
    status: prototype, statusNote: l("Le moteur utilise des règles déterministes et des heuristiques, sans garantie d'optimalité globale.", "The engine uses deterministic rules and heuristics, without a global optimality guarantee."),
    stack: ["Python", "FastAPI", "Pydantic", "pandas", "SQLite", "JavaScript", "pytest"],
  }),
  project({
    slug: "traffic-cam", repository: "Traffic_Cam", icon: "Navigation", categoryId: "vision", accent: "purple",
    name: l("Traffic Cam", "Traffic Cam"),
    tagline: l("Détecter les usagers de la route et simuler une gestion adaptative des feux.", "Detect road users and simulate adaptive traffic-signal control."),
    features: f(["Détection YOLOv7 avec ONNX et OpenCV", "Estimation de la demande par approche", "Règles de phases et de traversées piétonnes", "Simulation en boucle fermée et visualisation Blender"], ["YOLOv7 detection with ONNX and OpenCV", "Per-approach demand estimation", "Phase and pedestrian crossing rules", "Closed-loop simulation and Blender visualization"]),
    status: research, statusNote: l("Les résultats proviennent du simulateur du projet, sans validation indépendante sur route.", "Results come from the project's own simulator, without independent road validation."),
    stack: ["Python", "YOLOv7", "ONNX Runtime", "OpenCV", "NumPy", "Flask", "Blender"],
  }),
  project({
    slug: "bodymotion", repository: "Bodymotion_kinect", icon: "Search", categoryId: "vision", accent: "cyan",
    name: l("Bodymotion", "Bodymotion"),
    tagline: l("Reconnaître des mouvements à partir d'une caméra et déclencher un retour sonore.", "Recognize movements from a camera and trigger audio feedback."),
    features: f(["Suivi de 33 points avec MediaPipe Pose", "Reconnaissance géométrique des mouvements", "Machines à états et hystérésis", "Retour audio et capture OpenNI2 facultative"], ["33-landmark tracking with MediaPipe Pose", "Geometric movement recognition", "State machines and hysteresis", "Audio feedback and optional OpenNI2 capture"]),
    status: prototype, statusNote: l("Projet de vision et d'interaction ; les estimations morphologiques ne sont pas des mesures cliniques.", "Vision and interaction project; morphology estimates are not clinical measurements."),
    stack: ["Python", "MediaPipe", "OpenCV", "NumPy", "pygame", "OpenNI2"],
  }),
  project({
    slug: "data-quality", repository: "EDA_agents_nettoyage_de_fichier_volumineux", icon: "FileStack", categoryId: "data", accent: "blue",
    name: l("Pipeline EDA et qualité des données", "EDA & Data Quality Pipeline"),
    tagline: l("Inspecter et nettoyer de gros fichiers avec une validation humaine des corrections.", "Inspect and clean large files with human review of proposed corrections."),
    features: f(["Conversion Excel en flux et traitement par blocs", "Doublons et rapprochement textuel RapidFuzz", "Propositions d'imputation révisables", "Interface Streamlit et piste d'audit"], ["Streaming Excel conversion and chunked processing", "Duplicates and RapidFuzz text matching", "Reviewable imputation proposals", "Streamlit interface and audit trail"]),
    status: l("Outil de données", "Data tool"), statusNote: l("Les règles métiers s'adaptent aux colonnes du fichier traité.", "Business rules are adapted to the columns of each input file."),
    stack: ["Python", "pandas", "openpyxl", "RapidFuzz", "Streamlit", "CSV"],
  }),
  project({
    slug: "running-man", repository: "Running_Man", icon: "Rocket", categoryId: "mobile", accent: "purple",
    name: l("Running Man", "Running Man"),
    tagline: l("Les fondations d'une application de course : enregistrement, synchronisation et accomplissements.", "Running-app foundations: recording, synchronization and achievements."),
    features: f(["Stockage local SQLite et file de synchronisation", "Métriques TypeScript partagées", "Moteur de critères pour les accomplissements", "Schéma Supabase/PostGIS et politiques d'accès"], ["Local SQLite storage and synchronization outbox", "Shared TypeScript metrics", "Criteria engine for achievements", "Supabase/PostGIS schema and access policies"]),
    status: l("En développement", "In development"), statusNote: l("Les composants métier sont implémentés ; le dépôt ne représente pas une application mobile finalisée.", "Domain components are implemented; the repository is not a finished mobile product."),
    stack: ["React Native", "Expo", "TypeScript", "SQLite", "Supabase", "PostGIS", "Deno", "Jest"],
  }),
  project({
    slug: "pothole-navigation-app", repository: "nid-de-poule", icon: "AlertTriangle", categoryId: "web", accent: "blue",
    name: l("Nid-de-poule", "Pothole Reporting"),
    tagline: l("Signaler, confirmer et suivre les défauts routiers jusqu'à leur réparation.", "Report, confirm and track road hazards through repair."),
    features: f(["Signalements et confirmations communautaires", "Alertes d'itinéraire et état des dangers", "Suivi des réparations et analytique routière", "Migrations Alembic et tests de parcours"], ["Community reports and confirmations", "Route alerts and hazard state", "Repair tracking and road analytics", "Alembic migrations and workflow tests"]),
    status: prototype, statusNote: l("Application locale avec base SQLite par défaut ; aucun déploiement municipal n'est revendiqué.", "Local application with SQLite by default; no municipal deployment is claimed."),
    stack: ["FastAPI", "Python", "SQLAlchemy", "Alembic", "SQLite", "JavaScript", "pytest"],
  }),
  project({
    slug: "inventory-management", repository: "inventory-management-app", icon: "Warehouse", categoryId: "logistics", accent: "cyan",
    name: l("Gestion d'inventaire", "Inventory Management"),
    tagline: l("Une interface simple pour ajouter, consulter et supprimer des produits.", "A simple interface to add, view and delete inventory products."),
    features: f(["Interface Streamlit", "API FastAPI et persistance SQLite", "Ajout, consultation et suppression", "Démarrage avec Docker Compose"], ["Streamlit interface", "FastAPI API and SQLite persistence", "Product creation, listing and deletion", "Docker Compose startup"]),
    status: l("Projet éducatif", "Educational project"), statusNote: l("Application d'inventaire ciblée, sans fonctions de livraison ni de répartition.", "Focused inventory application without delivery or dispatch features."),
    stack: ["Python", "FastAPI", "Streamlit", "SQLite", "Docker Compose"],
  }),
  project({
    slug: "terraform-localstack", repository: "terraform-localstack", icon: "Code2", categoryId: "cloud", accent: "purple",
    name: l("Laboratoire AWS avec Terraform", "Terraform AWS Lab"),
    tagline: l("Provisionner et explorer S3, DynamoDB et SQS dans un environnement local.", "Provision and explore S3, DynamoDB and SQS in a local environment."),
    features: f(["Ressources définies avec Terraform", "Émulation AWS via LocalStack", "Interface Streamlit et SDK boto3", "Stockage, base de données et file de messages"], ["Terraform-defined resources", "AWS emulation through LocalStack", "Streamlit interface and boto3 SDK", "Storage, database and message queue"]),
    status: l("Laboratoire local", "Local lab"), statusNote: l("Les services AWS sont simulés localement, sans compte AWS réel requis.", "AWS services are simulated locally; no real AWS account is required."),
    stack: ["Terraform", "LocalStack", "Docker", "Python", "boto3", "S3", "DynamoDB", "SQS"],
  }),
  project({
    slug: "la-fleche-website", repository: "La-Fleche.ca", icon: "Code2", categoryId: "web", accent: "blue",
    name: l("Site La Flèche AI", "La Flèche AI Website"),
    tagline: l("Un site bilingue pour présenter les services, les projets et les technologies.", "A bilingual website for services, projects and technology expertise."),
    features: f(["Contenu français et anglais", "Galerie de projets avec recherche et filtres", "Pages de détails et liens vers le code", "Formulaires et interface adaptative"], ["French and English content", "Searchable, filterable project gallery", "Project details and source-code links", "Forms and responsive interface"]),
    status: l("Site web", "Website"), statusNote: l("Le contenu est maintenu dans un catalogue bilingue versionné avec le site.", "Content is maintained in a bilingual catalog versioned with the website."),
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
  }),
  project({
    slug: "genesis", repository: "Genesis", icon: "Truck", categoryId: "logistics", accent: "cyan",
    name: l("Genesis — Observatoire logistique", "Genesis — Logistics Observatory"),
    tagline: l("Concevoir un observatoire pour les itinéraires, les agents et la qualité des résultats.", "Design an observatory for routes, agents and result quality."),
    features: f(["Architecture et exigences documentées", "Contrats de données et d'API", "Spécification d'interface et observabilité", "Plan de validation et lots de travail"], ["Documented architecture and requirements", "Data and API contracts", "UI specification and observability", "Validation plan and work packages"]),
    status: l("Conception", "Planning"), statusNote: l("Le dépôt contient un dossier de conception, pas une application implémentée.", "The repository contains a planning package, not an implemented application."),
    stack: ["System design", "API contracts", "Agent observability", "Logistics", "Technical documentation"],
  }),
];

export const supportingRepositories = [
  { repository: "Python-1", name: "Python foundations", description: l("Exercices Python et notebook d'apprentissage.", "Python exercises and learning notebook."), status: l("Apprentissage", "Learning") },
  { repository: "module-01-exercices", name: "Module 01", description: l("Dépôt d'exercices de formation.", "Course exercise repository."), status: l("Apprentissage", "Learning") },
  { repository: "inskillflow-docs-systeme-d-exploitation-linux-exercices", name: "Linux exercises", description: l("Exercices sur les systèmes d'exploitation Linux.", "Linux operating-system exercises."), status: l("Apprentissage", "Learning") },
  { repository: "mon-site-web", name: "Personal website", description: l("Site HTML/CSS/JavaScript et premier portfolio personnel.", "HTML/CSS/JavaScript website and earlier personal portfolio."), status: l("Projet antérieur", "Earlier work") },
  { repository: "Lafleche.co", name: "Lafleche.co", description: l("Premiers travaux de site web La Flèche.", "Earlier La Flèche website work."), status: l("Projet antérieur", "Earlier work") },
  { repository: "BuisnessAnalyticsApp", name: "Business Analytics App", description: l("Dépôt initialisé ; aucune implémentation publiée à ce jour.", "Initialized repository; no implementation published yet."), status: l("Dépôt vide", "Empty repository") },
  { repository: "my-project-webpage", name: "My Project Webpage", description: l("Dépôt initialisé ; aucune implémentation publiée à ce jour.", "Initialized repository; no implementation published yet."), status: l("Dépôt vide", "Empty repository") },
  { repository: "Examen-Mi-session", name: "Midterm exercises", description: l("Dépôt d'examen initialisé, sans contenu publié.", "Initialized exam repository without published content."), status: l("Dépôt vide", "Empty repository") },
];

export function getProject(slug: string) { return projects.find((entry) => entry.slug === slug); }
export function normalizeSearch(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}
export function matchesProject(entry: Project, query: string) {
  const searchable = normalizeSearch([entry.name.fr, entry.name.en, entry.tagline.fr, entry.tagline.en, entry.repository, ...entry.stack].join(" "));
  return normalizeSearch(query).split(/\s+/).every((word) => searchable.includes(word));
}
