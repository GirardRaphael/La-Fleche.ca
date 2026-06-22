export type SkillCategory = {
  title: string;
  description: string;
  image: string;
  skills: string[];
  examples?: string[];
  tools?: string[];
  databases?: string[];
  platforms?: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Building the user-facing application.",
    image: "/assets/skill-cards/frontend.svg",
    skills: [
      "HTML, CSS, JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Responsive design",
      "API integration",
      "Authentication systems",
    ],
    examples: [
      "AI chat interfaces",
      "Dashboards",
      "Data visualization",
      "Voice assistant interfaces",
    ],
  },
  {
    title: "Backend Development",
    description: "Creating the server and business logic.",
    image: "/assets/skill-cards/backend.svg",
    skills: [
      "Python",
      "Node.js",
      "FastAPI",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "Authentication with OAuth and JWT",
      "Database design",
    ],
    examples: [
      "AI agent backends",
      "Document processing systems",
      "Scheduling systems",
      "Customer service platforms",
    ],
  },
  {
    title: "AI & Machine Learning",
    description: "Building intelligent systems.",
    image: "/assets/skill-cards/ai-machine-learning.svg",
    skills: [
      "Machine learning fundamentals",
      "Deep learning",
      "Neural networks",
      "Prompt engineering",
      "Fine-tuning models",
      "RAG (Retrieval-Augmented Generation)",
      "Agentic AI systems",
      "Vector databases",
    ],
    tools: [
      "PyTorch",
      "TensorFlow",
      "LangChain",
      "LlamaIndex",
      "OpenAI APIs",
      "Anthropic APIs",
      "Hugging Face",
    ],
  },
  {
    title: "Data Engineering",
    description: "Preparing and managing data.",
    image: "/assets/skill-cards/data-engineering.svg",
    skills: [
      "SQL",
      "Data cleaning",
      "ETL pipelines",
      "Data warehousing",
      "Feature engineering",
    ],
    databases: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Pinecone",
      "ChromaDB",
      "Weaviate",
    ],
  },
  {
    title: "DevOps & Cloud",
    description: "Deploying and scaling AI applications.",
    image: "/assets/skill-cards/devops-cloud.svg",
    skills: [
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Linux",
      "Networking",
      "Security",
    ],
    platforms: [
      "Amazon Web Services (AWS)",
      "Microsoft Azure",
      "Google Cloud",
    ],
  },
  {
    title: "AI Automation",
    description: "Building autonomous workflows.",
    image: "/assets/skill-cards/ai-automation.svg",
    skills: [
      "Workflow automation",
      "AI agents",
      "Multi-agent systems",
      "API orchestration",
    ],
    tools: [
      "n8n",
      "Power Automate",
      "Zapier",
    ],
  },
  {
    title: "AI Product Development",
    description: "Turning ideas into businesses.",
    image: "/assets/skill-cards/product-development.svg",
    skills: [
      "User experience (UX)",
      "Market validation",
      "Monetization",
      "SaaS architecture",
      "MVP development",
    ],
  },
  {
    title: "Communication & Business",
    description: "Understanding real-world problems.",
    image: "/assets/skill-cards/communication-business.svg",
    skills: [
      "Requirements gathering",
      "Documentation",
      "Client meetings",
      "Technical presentations",
      "Project management",
    ],
  },
];
