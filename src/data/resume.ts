export const personal = {
  name: "Akhil Reddy Marthi",
  title: "Senior Full-Stack Engineer",
  subtitle: "Distributed Systems & Architecture",
  email: "akhilmarthi3322@gmail.com",
  phone: "7416871153",
  location: "Hyderabad, Telangana",
  linkedin: "https://www.linkedin.com/in/akhil-reddy-marthi-7b55251b2",
  github: "https://github.com/AkhilMarthi",
};

export const summary = `Senior Software Engineer with 5 years of experience in Distributed Systems Architecture, microservices and edge-caching for a global Sports OTT platform (DAZN). Specialized in designing highly scalable and high-availability media pipelines, predictive auto-scaling strategies, and event-driven telemetry serving millions of active users globally. Proficient in Node.js, TypeScript, NestJS, React.js, GraphQL and enterprise AWS cloud infrastructure (Lambda, SQS, ECS, RDS, DynamoDB, CloudFront). Strong domain knowledge in building real-time content scoring, AI-powered document intelligence solutions (RAG) and automated content generation workflows.`;

export const experience = [
  {
    role: "Senior Software Engineer",
    company: "DAZN",
    companyFull: "DAZN (Global Sports OTT & Streaming Platform)",
    period: "09/2023 – Present",
    location: "Hyderabad",
    bullets: [
      {
        title: "System Design & Architecture Ownership",
        text: "Orchestrated end-to-end distributed system design, API architectural reviews, and production scalability across high-throughput microservices serving millions of concurrent live sports viewers - utilizing Node.js, TypeScript, NestJS, GraphQL, React.js, and AWS (ECS, Lambda, RDS, DynamoDB, CloudFront, S3, SQS, SNS, ALB, Route 53).",
      },
      {
        title: "Event-Driven Data Pipelines",
        text: "Offloaded high-frequency user telemetry to data engineering teams via Amazon SQS queues, securely decoupling core user-facing scoring logic from analytics pipelines.",
      },
      {
        title: "Sports Domain Expertise",
        text: "Deep hands-on knowledge of the sports data lifecycle — from fixture creation and broadcast scheduling through live event metadata propagation to frontend delivery; worked directly with sports data feeds, competition/team/event taxonomies, and live-stream capture workflows across multiple global sports properties.",
      },
    ],
  },
  {
    role: "Software Engineer",
    company: "Ivy Comptech",
    companyFull: "Ivy Comptech (Entain India)",
    period: "11/2021 – 09/2023",
    location: "Hyderabad",
    bullets: [
      {
        title: "A/B Testing & Dynamic Feature Delivery",
        text: "Engineered dynamic frontend feature variants and A/B test experiments (multi-variant splits: 50/50, 33/33/33, 25/25/25/25) for high-traffic sports betting web applications using TypeScript, JavaScript (ES6+), HTML5, and CSS3.",
      },
      {
        title: "Backend API Development",
        text: "Built scalable REST APIs and microservice utilities using Node.js, TypeScript, and Express.js, ensuring low-latency integration between dynamic client-side experiments and core backend services.",
      },
    ],
  },
];

export const projects = [
  {
    title: "Real-Time Personalization Engine",
    company: "DAZN",
    tags: ["Node.js", "NestJS", "TypeScript", "AWS ECS (1000+ tasks)", "Lambda", "CloudFront", "API Gateway", "DynamoDB", "SQS", "ALB"],
    bullets: [
      "Engineered a real-time content scoring engine serving millions of active users based on sport, competition, team, and regional preferences, increasing overall user engagement on personalized content by 70%.",
      "Reduced ALB 5xx errors by 90% during live sports traffic spikes by implementing request-rate-per-target ECS auto-scaling alongside predictive pre-warming ahead of scheduled live events.",
      "Solved severe DynamoDB read throttling across 1000+ concurrent ECS tasks by designing a CloudFront CDN edge-caching layer backed by an automated AWS Lambda polling system—reducing database throttling by 90%.",
    ],
  },
  {
    title: "Metadata Validation & Alerting Dashboard",
    company: "DAZN",
    tags: ["NestJS", "GraphQL", "Node.js", "AWS Lambda", "API Gateway", "RDS PostgreSQL (Aurora)", "ECS Fargate", "SQS", "AWS SES", "ALB", "Terraform"],
    bullets: [
      "Built an end-to-end real-time anomaly detection system tracking sports broadcast data from fixture planning to frontend client rendering.",
      "Centralized broadcast data streams into AWS RDS PostgreSQL (Aurora) and integrated AWS SQS and SES to trigger real-time validation failure alerts via email and an interactive React/GraphQL dashboard.",
      "Solved validation queue backups during peak update by configuring SQS-based ECS auto-scaling, reducing alert processing latency by 80%.",
    ],
  },
  {
    title: "Adaptive Video Transcoding & On-Demand Clip Delivery Pipeline",
    company: "DAZN",
    tags: ["Node.js", "TypeScript", "NestJS", "Python (Lambda)", "AWS ECS", "EC2 Spot", "SQS", "S3", "EFS", "DynamoDB", "CloudFront", "FFmpeg", "Bento4", "Docker"],
    bullets: [
      "Designed an end-to-end video pipeline that ingests raw match clip MP4s from S3, transcodes them into 9 adaptive bitrate profiles (480p @ 288kbps → 1080p @ 8000kbps) via FFmpeg, and packages segments using Bento4 for HLS/DASH streaming.",
      "Drove an 85% infrastructure cost reduction by migrating heavy FFmpeg compute workloads from ECS containers to EC2 Spot Instances while maintaining full pipeline throughput.",
    ],
  },
  {
    title: "AI Legal Research Assistant",
    company: "Independent / Full-Stack Project",
    github: "https://github.com/AkhilMarthi/Legal-research-assistant",
    tags: ["NestJS", "TypeScript", "React.js", "Ollama (llama3.2 + nomic-embed-text)", "Qdrant Vector DB", "Docker Compose", "Server-Sent Events (SSE)"],
    bullets: [
      "Architected a legal document intelligence platform supporting PDF/MD/TXT uploads, 512-token overlapping semantic chunking, 768D vector embeddings, and Qdrant cosine similarity search to retrieve context and generate grounded answers via llama3.2.",
      "Streamed LLM responses token-by-token to the React frontend using Server-Sent Events (SSE) via NestJS Observable for a ChatGPT-style streaming UX.",
      "Built session-based conversation memory, structured citations, SHA-256 embedding caching, and PromptGuardService injection protection utilizing XML envelope boundaries.",
    ],
  },
];

export const skills = [
  {
    category: "Architecture & Design",
    items: ["Distributed & High-Availability Systems", "Edge Caching", "Microservices", "Event-Driven Architecture", "Data Structures & Algorithms (DSA)", "Object-Oriented Design (OOD)"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (SQS, SNS, Lambda, API Gateway, ALB, ECS, RDS, DynamoDB, CloudFront, SSM)", "Docker", "Terraform", "GitHub Actions", "CI/CD"],
  },
  {
    category: "Databases & Caching",
    items: ["PostgreSQL", "DynamoDB (NoSQL)", "Redis", "Qdrant (Vector DB)", "TypeORM", "Prisma"],
  },
  {
    category: "Backend & AI",
    items: ["Node.js (v20 / v22 LTS)", "NestJS", "Express.js", "GraphQL", "REST APIs", "LLM", "RAG", "Vector Search", "Document Chunking Pipelines"],
  },
  {
    category: "Frontend",
    items: ["React.js (v18)", "Next.js", "Redux", "Context API", "REST & GraphQL Integrations"],
  },
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Python"],
  },
  {
    category: "Media Processing",
    items: ["FFmpeg (multi-bitrate transcoding)", "Bento4 (DASH/HLS packaging)", "Adaptive Bitrate Streaming", "MP4 Segmentation"],
  },
  {
    category: "AI Dev Tools & Workflow",
    items: ["GitHub Copilot", "Cursor", "Google Antigravity", "Tabnine", "Git", "Jest", "Jira (Agile/Scrum)"],
  },
];

export const education = {
  degree: "Bachelor of Technology (B.Tech)",
  field: "Computer Science & Engineering",
  institution: "TKR College of Engineering & Technology",
  period: "07/2017 – 07/2021",
  location: "Hyderabad",
};
