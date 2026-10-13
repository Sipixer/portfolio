export const profile = {
  name: "Sylvain Rougié",
  headline: "Développeur Full-Stack & Ingénieur Cloud",
  location: "Toulouse",
  locationFull: "Toulouse (31), France",
  email: "sylvainrougie@orange.fr",
  phone: "+33 6 72 06 98 50",
  site: "sylvainrougie.fr",
  github: "https://github.com/Sipixer",
  githubLabel: "github.com/Sipixer",
  driving: "Permis B",
  pitch: "Je construis des applications web, et l’infrastructure qui les fait tourner.",
  summary:
    "Développeur full-stack orienté cloud. Près de quatre ans chez Syloe Group (médias et divertissement), principal développeur de deux plateformes de streaming : interfaces web et mobile, paiements, encodage vidéo et infrastructure AWS / Cloudflare.",
};

export type Product = {
  name: string;
  period: string;
  url?: string;
  summary: string;
  points: string[];
};

export const job = {
  role: "Développeur Full-Stack & Cloud (alternance)",
  org: "Syloe Group",
  orgContext: "groupe médias et divertissement",
  note: "Équipe technique de deux développeurs, en lien direct avec la direction.",
  period: "janvier 2023 – octobre 2026",
};

export const products: Product[] = [
  {
    name: "TribuShare",
    period: "2025 – 2026",
    url: "https://tribushare.com",
    summary: "Plateforme où les cinéastes indépendants vendent et diffusent leurs films depuis leur propre boutique. En production sur tribushare.com.",
    points: [
      "Développeur principal : boutiques des cinéastes, éditeur de pages visuel, espace spectateur, interface multilingue.",
      "Paiements, abonnements et reversements mensuels aux cinéastes avec Stripe Connect, avec un suivi comptable de chaque transaction.",
      "Service d’encodage vidéo (streaming HLS multi-qualités, pistes audio, chiffrement) sur AWS Batch, qui a remplacé le service payant Gumlet.",
      "Hébergement sur AWS en Terraform, puis migration vers Cloudflare Workers ; assistant IA dans le tableau de bord.",
    ],
  },
  {
    name: "Tribiew / New Road",
    period: "2023 – 2025",
    summary: "Plateforme de streaming de webséries où le public participe : missions, classements, boutique, financement d’épisodes. Bêta publique de cinq mois, plus de 900 inscrits.",
    points: [
      "Développeur principal : site web React, application mobile React Native, back-office et API GraphQL temps réel.",
      "Missions, classements, boutique et cagnottes avec paiements Stripe ; modération automatique des images et des commentaires.",
      "Infrastructure AWS en Terraform (conteneurs ECS, CDN CloudFront, cache, CI/CD GitHub Actions).",
      "Intégration d’un mini-jeu Unity (C#) dans l’application web.",
    ],
  },
  {
    name: "Autres projets du groupe",
    period: "2025 – 2026",
    summary: "Prototypes et sites pour les autres marques de Syloe Group.",
    points: [
      "Lanterna : lecteur de films hors ligne pour des projections, protégé contre la copie (Rust, Tauri).",
      "Concept Compass : base technique de la plateforme (comptes, paiements Stripe, e-mails, déploiement Cloudflare).",
      "Mise en production de plusieurs sites du groupe sur Cloudflare (filmtomarket.com, unfairgrace.com, hyperseries.app).",
    ],
  },
];

export type Project = {
  name: string;
  origin: "Syloe Group" | "Projet d’école · Ynov";
  tagline: string;
  description: string;
  tags: string[];
  href?: string;
  linkLabel?: string;
  status?: string;
  visual: "tribushare" | "encoder" | "tribiew" | "lanterna" | "spire" | "frameforge" | "chat" | "observability";
};

export const projects: Project[] = [
  {
    name: "TribuShare",
    origin: "Syloe Group",
    tagline: "Vendre et diffuser ses films, sans intermédiaire",
    description:
      "Chaque cinéaste crée sa boutique, vend ou loue ses films et touche ses revenus chaque mois. Le spectateur regarde dans un lecteur pensé pour le cinéma.",
    tags: ["React", "TanStack Start", "PostgreSQL", "Cloudflare Workers", "Stripe Connect"],
    href: "https://tribushare.com",
    linkLabel: "tribushare.com",
    visual: "tribushare",
  },
  {
    name: "Encodeur vidéo",
    origin: "Syloe Group",
    tagline: "Du fichier brut au streaming adaptatif",
    description:
      "Transforme chaque film en flux HLS multi-qualités, avec pistes audio, chiffrement et vignettes de navigation. Tourne sur AWS Batch et publie sur Cloudflare R2.",
    tags: ["Bun", "FFmpeg", "AWS Batch", "Terraform", "Cloudflare R2"],
    status: "En production dans TribuShare",
    visual: "encoder",
  },
  {
    name: "Tribiew / New Road",
    origin: "Syloe Group",
    tagline: "Des webséries où le public joue",
    description:
      "Streaming de webséries avec missions, classements, boutique et financement participatif d’épisodes. Web, mobile et back-office.",
    tags: ["React", "React Native", "GraphQL", "MongoDB", "AWS"],
    status: "En pause depuis 2025",
    visual: "tribiew",
  },
  {
    name: "Lanterna",
    origin: "Syloe Group",
    tagline: "Projeter un film sans internet",
    description:
      "Lecteur pour projections sous licence dans des lieux sans connexion : le film reste chiffré et n’est déchiffré qu’en mémoire.",
    tags: ["Rust", "Tauri", "Chiffrement"],
    status: "Prototype",
    visual: "lanterna",
  },
  {
    name: "Zero-trust sur Kubernetes",
    origin: "Projet d’école · Ynov",
    tagline: "Chaque service prouve son identité",
    description:
      "Boutique en microservices sécurisée en zero-trust : chaque service a une identité et chiffre ses échanges (mTLS, SPIFFE), déploiement GitOps avec ArgoCD.",
    tags: ["Kubernetes", "SPIRE", "Go", "ArgoCD", "Terraform"],
    href: "https://github.com/Sipixer/SPIRE-DevSecOps",
    linkLabel: "Voir le code",
    visual: "spire",
  },
  {
    name: "FrameForge",
    origin: "Projet d’école · Ynov",
    tagline: "Encodage vidéo résilient sur Kubernetes",
    description:
      "Encodage vidéo par lots tolérant aux pannes, avec files de tâches et reprise automatique.",
    tags: ["Kubernetes", "FFmpeg", "Files de messages"],
    href: "https://github.com/Sipixer/frameforge-poc",
    linkLabel: "Voir le code",
    visual: "frameforge",
  },
  {
    name: "Chat distribué sur AWS",
    origin: "Projet d’école · Ynov",
    tagline: "Deux serveurs, une seule conversation",
    description:
      "Chat temps réel réparti sur plusieurs conteneurs ECS Fargate synchronisés par Redis, derrière un load balancer HTTPS, infrastructure en Terraform.",
    tags: ["AWS ECS", "Redis", "Socket.IO", "Terraform"],
    href: "https://github.com/Sipixer/chat-ecs-rncp",
    linkLabel: "Voir le code",
    visual: "chat",
  },
  {
    name: "Observabilité complète",
    origin: "Projet d’école · Ynov",
    tagline: "Métriques, logs et traces",
    description:
      "Suivi de bout en bout d’une application microservices, avec tableaux de bord et alertes (OpenTelemetry, Prometheus, Grafana).",
    tags: ["OpenTelemetry", "Prometheus", "Grafana", "Loki"],
    href: "https://github.com/Sipixer/observabilite-lab-final",
    linkLabel: "Voir le code",
    visual: "observability",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Développement", items: ["TypeScript", "React", "React Native", "TanStack Start", "Node.js", "Bun", "GraphQL", "HTML / CSS", "Tailwind CSS", "Rust", "Go", "Python"] },
  { group: "Données", items: ["PostgreSQL", "MongoDB", "Redis", "Drizzle ORM", "SQL"] },
  {
    group: "Cloud & DevOps",
    items: ["Docker", "Kubernetes", "Terraform", "Ansible", "ArgoCD", "Git", "GitHub Actions", "AWS", "Cloudflare Workers", "Serverless", "Linux"],
  },
  { group: "Sécurité", items: ["Zero-trust", "mTLS", "SPIFFE / SPIRE", "Pare-feu pfSense"] },
  { group: "Supervision & tests", items: ["Prometheus", "Grafana", "Loki", "OpenTelemetry", "Sentry", "Vitest"] },
  { group: "Vidéo, paiement & IA", items: ["FFmpeg", "HLS", "Stripe Connect", "Vercel AI SDK", "Outils de code IA"] },
];

export const education = [
  {
    title: "Mastère Expert en Cloud, Sécurité & Infrastructure",
    school: "Ynov Campus Toulouse",
    period: "2024 – 2026",
    detail: "Titre RNCP niveau 7 (bac+5), en alternance.",
  },
  {
    title: "Concepteur Développeur d’Applications",
    school: "O’Clock",
    period: "2023 – 2024",
    detail: "Titre professionnel RNCP 31678, niveau 6 (bac+3/4), en alternance.",
  },
  {
    title: "Licence Informatique, 1re année",
    school: "Université Toulouse III Paul Sabatier",
    period: "2021 – 2022",
  },
  {
    title: "Baccalauréat général, Maths & Physique",
    school: "Lycée Jean Lurçat, Saint-Céré",
    period: "2021",
  },
];

export const languages = [
  { name: "Français", level: "langue maternelle" },
  { name: "Anglais", level: "technique, utilisé au quotidien" },
];

export const strengths = [
  "Autonomie sur un produit complet",
  "Échanges avec des équipes non techniques",
  "Veille et outils IA",
];
