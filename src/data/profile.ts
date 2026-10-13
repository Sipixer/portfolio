export type Lang = "fr" | "en";

export const langs: Lang[] = ["fr", "en"];

export const contact = {
  name: "Sylvain Rougié",
  email: "sylvainrougie@orange.fr",
  phone: "+33 6 72 06 98 50",
  site: "sylvainrougie.fr",
  siteUrl: "https://www.sylvainrougie.fr",
  github: "https://github.com/Sipixer",
  githubLabel: "github.com/Sipixer",
};

export type Visual = "tribushare" | "encoder" | "tribiew" | "lanterna" | "spire" | "frameforge" | "chat" | "observability";

type ProjectMeta = {
  visual: Visual;
  origin: "syloe" | "school";
  tags: string[];
  href?: string;
  linkLabel?: string;
};

const projectMeta: ProjectMeta[] = [
  {
    visual: "tribushare",
    origin: "syloe",
    tags: ["React 19", "TanStack Start", "Cloudflare Workers", "PostgreSQL", "Stripe Connect"],
    href: "https://tribushare.com",
    linkLabel: "tribushare.com",
  },
  { visual: "encoder", origin: "syloe", tags: ["Bun", "FFmpeg", "AWS Batch", "Terraform", "Cloudflare R2"] },
  { visual: "tribiew", origin: "syloe", tags: ["React", "React Native", "Node.js", "AWS"] },
  { visual: "lanterna", origin: "syloe", tags: ["Rust", "Tauri", "Claude Code", "Codex"] },
  { visual: "spire", origin: "school", tags: ["Kubernetes", "SPIRE", "Go", "ArgoCD"], href: "https://github.com/Sipixer/SPIRE-DevSecOps" },
  { visual: "frameforge", origin: "school", tags: ["Kubernetes", "FFmpeg", "Docker"], href: "https://github.com/Sipixer/frameforge-poc" },
  { visual: "chat", origin: "school", tags: ["AWS ECS", "Redis", "Terraform"], href: "https://github.com/Sipixer/chat-ecs-rncp" },
  {
    visual: "observability",
    origin: "school",
    tags: ["OpenTelemetry", "Prometheus", "Grafana"],
    href: "https://github.com/Sipixer/observabilite-lab-final",
  },
];

type ProjectText = { name: string; tagline: string; description: string; status?: string };

export type Product = { name: string; period: string; summary: string; points: string[] };

type Content = {
  htmlLang: string;
  headline: string;
  location: string;
  locationFull: string;
  driving: string;
  pitch: string;
  summary: string;
  job: { role: string; org: string; orgContext: string; period: string; note: string };
  products: Product[];
  projects: Record<Visual, ProjectText>;
  skills: { group: string; items: string[] }[];
  education: { title: string; school: string; period: string; detail?: string }[];
  languages: { name: string; level: string }[];
  strengths: string[];
  ui: {
    nav: { projects: string; career: string; skills: string; contact: string };
    switchLang: string;
    cvPdf: string;
    hello: string;
    helloLabel: string;
    avatarAlt: string;
    contactMe: string;
    seeProjects: string;
    projectsEyebrow: string;
    projectsTitle: string;
    careerEyebrow: string;
    careerTitle: string;
    careerMore: string;
    education: string;
    skillsEyebrow: string;
    skillsTitle: string;
    contactTitle: string;
    contactText: string;
    copy: string;
    copied: string;
    copiedStatus: string;
    copyFailed: string;
    downloadCv: string;
    textCv: string;
    seeCode: string;
    origin: { syloe: string; school: string };
    screenshotAlt: string;
    skipLink: string;
    cv: {
      title: string;
      contact: string;
      skills: string;
      languages: string;
      strengths: string;
      profile: string;
      experience: string;
      projects: string;
      education: string;
      schoolTag: string;
    };
    pdf: { designed: string; text: string };
  };
};

export const content: Record<Lang, Content> = {
  fr: {
    htmlLang: "fr",
    headline: "Développeur Full-Stack & Ingénieur Cloud",
    location: "Toulouse",
    locationFull: "Toulouse (31), France",
    driving: "Permis B",
    pitch: "Je construis des applications web, et l’infrastructure qui les fait tourner.",
    summary:
      "Développeur full-stack orienté cloud. Près de quatre ans chez Syloe Group, principal développeur de deux plateformes de streaming, de l’interface à l’infrastructure. Je travaille au quotidien avec des agents IA (Claude Code, Codex).",
    job: {
      role: "Développeur Full-Stack & Cloud (alternance)",
      org: "Syloe Group",
      orgContext: "groupe médias et divertissement",
      period: "janvier 2023 – octobre 2026",
      note: "Équipe technique de deux développeurs, en lien direct avec la direction.",
    },
    products: [
      {
        name: "TribuShare",
        period: "2025 – 2026",
        summary: "Plateforme où les cinéastes indépendants vendent et diffusent leurs films. En production.",
        points: [
          "Principal développeur : boutiques des cinéastes, éditeur de pages, espace spectateur, multilingue.",
          "Paiements et reversements mensuels aux cinéastes avec Stripe Connect.",
          "Encodeur vidéo HLS sur AWS Batch, qui a remplacé le service payant Gumlet.",
          "Migration d’AWS vers Cloudflare Workers, assistant IA intégré au tableau de bord.",
        ],
      },
      {
        name: "Tribiew / New Road",
        period: "2023 – 2025",
        summary: "Streaming de webséries où le public participe. Bêta publique de cinq mois, plus de 900 inscrits.",
        points: [
          "Principal développeur : site React, application React Native, back-office, mini-jeu Unity intégré.",
          "Missions, classements, boutique et paiements Stripe, modération automatique par IA.",
          "Infrastructure AWS en Terraform, déploiement continu avec GitHub Actions.",
        ],
      },
      {
        name: "Autres projets du groupe",
        period: "2025 – 2026",
        summary: "Prototypes et sites pour les autres marques du groupe.",
        points: [
          "Lanterna : lecteur de films hors ligne protégé contre la copie (Rust, Tauri), construit avec une équipe d’agents IA.",
          "Mise en production de plusieurs sites sur Cloudflare (filmtomarket.com, unfairgrace.com).",
        ],
      },
    ],
    projects: {
      tribushare: {
        name: "TribuShare",
        tagline: "Vendre et diffuser ses films, sans intermédiaire",
        description:
          "Chaque cinéaste crée sa boutique, vend ou loue ses films et touche ses revenus chaque mois. Le spectateur regarde dans un lecteur pensé pour le cinéma.",
      },
      encoder: {
        name: "Encodeur vidéo",
        tagline: "Du fichier brut au streaming adaptatif",
        description:
          "Transforme chaque film en flux HLS multi-qualités, avec pistes audio, chiffrement et vignettes. Tourne sur AWS Batch et publie sur Cloudflare R2.",
        status: "En production dans TribuShare",
      },
      tribiew: {
        name: "Tribiew / New Road",
        tagline: "Des webséries où le public joue",
        description: "Streaming de webséries avec missions, classements, boutique et financement d’épisodes. Plus de 900 inscrits à la bêta.",
        status: "En pause depuis 2025",
      },
      lanterna: {
        name: "Lanterna",
        tagline: "Projeter un film sans internet",
        description:
          "Lecteur pour des projections sous licence dans des lieux sans connexion : le film reste chiffré et n’est déchiffré qu’en mémoire. Construit avec une équipe d’agents IA.",
        status: "Prototype",
      },
      spire: {
        name: "Zero-trust sur Kubernetes",
        tagline: "Chaque service prouve son identité",
        description: "Microservices qui ne se font pas confiance par défaut : identité par service, échanges chiffrés en mTLS, déploiement GitOps.",
      },
      frameforge: {
        name: "FrameForge",
        tagline: "Encodage vidéo résilient",
        description: "Encodage vidéo par lots sur Kubernetes, tolérant aux pannes, avec files de tâches et reprise automatique.",
      },
      chat: {
        name: "Chat distribué sur AWS",
        tagline: "Deux serveurs, une seule conversation",
        description: "Chat temps réel sur plusieurs conteneurs ECS Fargate synchronisés par Redis, infrastructure en Terraform.",
      },
      observability: {
        name: "Observabilité complète",
        tagline: "Métriques, logs et traces",
        description: "Suivi de bout en bout d’une application microservices, avec tableaux de bord et alertes.",
      },
    },
    skills: [
      { group: "Front-end", items: ["TypeScript", "React", "TanStack Start", "React Native", "Tailwind CSS"] },
      { group: "Back-end & données", items: ["Node.js", "Bun", "oRPC", "PostgreSQL", "Drizzle ORM", "Redis", "Rust"] },
      { group: "Cloud & DevOps", items: ["Cloudflare Workers", "AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"] },
      { group: "IA", items: ["Claude Code", "Codex", "Orchestration multi-agents", "MCP", "Vercel AI SDK"] },
      { group: "Sécurité & supervision", items: ["Zero-trust", "Prometheus", "Grafana", "OpenTelemetry", "Sentry"] },
      { group: "Vidéo & paiement", items: ["FFmpeg", "HLS", "Stripe Connect"] },
    ],
    education: [
      {
        title: "Mastère Expert en Cloud, Sécurité & Infrastructure",
        school: "Ynov Campus Toulouse",
        period: "2024 – 2026",
        detail: "Titre RNCP niveau 7 (bac+5), en alternance",
      },
      {
        title: "Concepteur Développeur d’Applications",
        school: "O’Clock",
        period: "2023 – 2024",
        detail: "Titre RNCP niveau 6 (bac+3/4), en alternance",
      },
      { title: "Licence Informatique, 1re année", school: "Université Toulouse III Paul Sabatier", period: "2021 – 2022" },
      { title: "Baccalauréat général, Maths & Physique", school: "Lycée Jean Lurçat, Saint-Céré", period: "2021" },
    ],
    languages: [
      { name: "Français", level: "langue maternelle" },
      { name: "Anglais", level: "professionnel, technique" },
    ],
    strengths: ["Autonomie sur un produit complet", "Échanges avec des équipes non techniques", "Veille sur les outils IA"],
    ui: {
      nav: { projects: "Projets", career: "Parcours", skills: "Compétences", contact: "Contact" },
      switchLang: "English",
      cvPdf: "CV",
      hello: "Salut ! 👋",
      helloLabel: "Dire bonjour",
      avatarAlt: "Illustration de Sylvain",
      contactMe: "Me contacter",
      seeProjects: "Voir les projets",
      projectsEyebrow: "Projets",
      projectsTitle: "Du produit en ligne à l’infrastructure.",
      careerEyebrow: "Parcours",
      careerTitle: "Mon parcours.",
      careerMore: "Tout le détail dans le CV",
      education: "Formation",
      skillsEyebrow: "Compétences",
      skillsTitle: "Ma boîte à outils.",
      contactTitle: "Une mission ou une question ?",
      contactText: "Contactez-moi, je vous réponds rapidement.",
      copy: "Copier l’adresse",
      copied: "Copiée !",
      copiedStatus: "Adresse copiée dans le presse-papiers.",
      copyFailed: "Copie impossible, sélectionnez l’adresse à la main.",
      downloadCv: "Télécharger le CV",
      textCv: "CV format texte",
      seeCode: "Voir le code",
      origin: { syloe: "Syloe Group", school: "Projet d’école · Ynov" },
      screenshotAlt: "Page d’accueil de TribuShare",
      skipLink: "Aller au contenu",
      cv: {
        title: "CV",
        contact: "Contact",
        skills: "Compétences",
        languages: "Langues",
        strengths: "Atouts",
        profile: "Profil",
        experience: "Expérience professionnelle",
        projects: "Projets",
        education: "Formation",
        schoolTag: "Ynov",
      },
      pdf: { designed: "/cv-sylvain-rougie.pdf", text: "/cv-sylvain-rougie-ats.pdf" },
    },
  },
  en: {
    htmlLang: "en",
    headline: "Full-Stack Developer & Cloud Engineer",
    location: "Toulouse, France",
    locationFull: "Toulouse, France",
    driving: "Driving licence",
    pitch: "I build web apps, and the infrastructure that runs them.",
    summary:
      "Cloud-minded full-stack developer. Nearly four years at Syloe Group as the lead developer of two streaming platforms, from the interface to the infrastructure. I work daily with AI coding agents (Claude Code, Codex).",
    job: {
      role: "Full-Stack & Cloud Developer (work-study)",
      org: "Syloe Group",
      orgContext: "media and entertainment group",
      period: "January 2023 – October 2026",
      note: "Two-developer tech team, working directly with management.",
    },
    products: [
      {
        name: "TribuShare",
        period: "2025 – 2026",
        summary: "Platform where independent filmmakers sell and stream their films. Live in production.",
        points: [
          "Lead developer: filmmaker storefronts, page builder, viewer area, multilingual.",
          "Payments and monthly payouts to filmmakers with Stripe Connect.",
          "HLS video encoder on AWS Batch that replaced the paid Gumlet service.",
          "Migration from AWS to Cloudflare Workers, AI assistant built into the dashboard.",
        ],
      },
      {
        name: "Tribiew / New Road",
        period: "2023 – 2025",
        summary: "Interactive web-series streaming platform. Five-month public beta, 900+ sign-ups.",
        points: [
          "Lead developer: React website, React Native app, back office, embedded Unity mini-game.",
          "Missions, leaderboards, shop and Stripe payments, AI-based content moderation.",
          "AWS infrastructure in Terraform, continuous delivery with GitHub Actions.",
        ],
      },
      {
        name: "Other group projects",
        period: "2025 – 2026",
        summary: "Prototypes and websites for the group’s other brands.",
        points: [
          "Lanterna: copy-protected offline film player (Rust, Tauri), built with a team of AI agents.",
          "Shipped several websites to production on Cloudflare (filmtomarket.com, unfairgrace.com).",
        ],
      },
    ],
    projects: {
      tribushare: {
        name: "TribuShare",
        tagline: "Sell and stream films, no middleman",
        description:
          "Each filmmaker gets a storefront, sells or rents films and gets paid every month. Viewers watch in a player built for cinema.",
      },
      encoder: {
        name: "Video encoder",
        tagline: "From raw file to adaptive streaming",
        description:
          "Turns every film into a multi-quality HLS stream with audio tracks, encryption and thumbnails. Runs on AWS Batch and publishes to Cloudflare R2.",
        status: "In production at TribuShare",
      },
      tribiew: {
        name: "Tribiew / New Road",
        tagline: "Web series the audience plays along with",
        description: "Web-series streaming with missions, leaderboards, a shop and crowdfunded episodes. 900+ beta sign-ups.",
        status: "On hold since 2025",
      },
      lanterna: {
        name: "Lanterna",
        tagline: "Screen a film without internet",
        description:
          "Player for licensed screenings in places with no connection: the film stays encrypted and is only decrypted in memory. Built with a team of AI agents.",
        status: "Prototype",
      },
      spire: {
        name: "Zero-trust on Kubernetes",
        tagline: "Every service proves who it is",
        description: "Microservices that trust nothing by default: per-service identity, mTLS-encrypted traffic, GitOps deployment.",
      },
      frameforge: {
        name: "FrameForge",
        tagline: "Resilient video encoding",
        description: "Fault-tolerant batch video encoding on Kubernetes, with job queues and automatic retries.",
      },
      chat: {
        name: "Distributed chat on AWS",
        tagline: "Two servers, one conversation",
        description: "Real-time chat across several ECS Fargate containers kept in sync by Redis, infrastructure in Terraform.",
      },
      observability: {
        name: "Full observability",
        tagline: "Metrics, logs and traces",
        description: "End-to-end tracing of a microservices app, with dashboards and alerts.",
      },
    },
    skills: [
      { group: "Front-end", items: ["TypeScript", "React", "TanStack Start", "React Native", "Tailwind CSS"] },
      { group: "Back-end & data", items: ["Node.js", "Bun", "oRPC", "PostgreSQL", "Drizzle ORM", "Redis", "Rust"] },
      { group: "Cloud & DevOps", items: ["Cloudflare Workers", "AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"] },
      { group: "AI", items: ["Claude Code", "Codex", "Multi-agent orchestration", "MCP", "Vercel AI SDK"] },
      { group: "Security & monitoring", items: ["Zero-trust", "Prometheus", "Grafana", "OpenTelemetry", "Sentry"] },
      { group: "Video & payments", items: ["FFmpeg", "HLS", "Stripe Connect"] },
    ],
    education: [
      {
        title: "Master’s degree, Cloud, Security & Infrastructure",
        school: "Ynov Campus Toulouse",
        period: "2024 – 2026",
        detail: "French RNCP level 7 (Master’s level), work-study",
      },
      {
        title: "Application Designer & Developer",
        school: "O’Clock",
        period: "2023 – 2024",
        detail: "French RNCP level 6 (Bachelor’s level), work-study",
      },
      { title: "Computer Science, first year of Bachelor’s", school: "Université Toulouse III Paul Sabatier", period: "2021 – 2022" },
      { title: "French Baccalaureate, Maths & Physics", school: "Lycée Jean Lurçat, Saint-Céré", period: "2021" },
    ],
    languages: [
      { name: "French", level: "native" },
      { name: "English", level: "professional, technical" },
    ],
    strengths: ["Owns a product end to end", "Works well with non-technical teams", "Keeps up with AI tooling"],
    ui: {
      nav: { projects: "Projects", career: "Experience", skills: "Skills", contact: "Contact" },
      switchLang: "Français",
      cvPdf: "Resume",
      hello: "Hi there! 👋",
      helloLabel: "Say hi",
      avatarAlt: "Illustration of Sylvain",
      contactMe: "Get in touch",
      seeProjects: "See projects",
      projectsEyebrow: "Projects",
      projectsTitle: "From live products to infrastructure.",
      careerEyebrow: "Experience",
      careerTitle: "Where I’ve worked.",
      careerMore: "Full details in the resume",
      education: "Education",
      skillsEyebrow: "Skills",
      skillsTitle: "My toolbox.",
      contactTitle: "A project or a question?",
      contactText: "Get in touch, I’ll get back to you quickly.",
      copy: "Copy address",
      copied: "Copied!",
      copiedStatus: "Address copied to the clipboard.",
      copyFailed: "Couldn’t copy, please select the address manually.",
      downloadCv: "Download resume",
      textCv: "Plain-text resume",
      seeCode: "View code",
      origin: { syloe: "Syloe Group", school: "School project · Ynov" },
      screenshotAlt: "TribuShare home page",
      skipLink: "Skip to content",
      cv: {
        title: "Resume",
        contact: "Contact",
        skills: "Skills",
        languages: "Languages",
        strengths: "Strengths",
        profile: "Summary",
        experience: "Work experience",
        projects: "Projects",
        education: "Education",
        schoolTag: "Ynov",
      },
      pdf: { designed: "/en/cv-sylvain-rougie-en.pdf", text: "/en/cv-sylvain-rougie-en-ats.pdf" },
    },
  },
};

export const projectsFor = (lang: Lang) =>
  projectMeta.map((meta) => ({
    ...meta,
    ...content[lang].projects[meta.visual],
    linkLabel: meta.linkLabel ?? (meta.href ? content[lang].ui.seeCode : undefined),
    originLabel: content[lang].ui.origin[meta.origin],
  }));
