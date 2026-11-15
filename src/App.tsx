import { useEffect, useRef, useState } from 'react';
import {
  Mail, Phone, MapPin, Menu, X,
  Clock, Code2, Users, Zap, GraduationCap, Award, Heart, ArrowUp, Send, ExternalLink
} from 'lucide-react';
import './index.css';

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  );
}

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

// ─── DATA ──────────────────────────────────────────────────
const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

const EXPERIENCE = [
  {
    company: 'DAZN',
    companyFull: 'DAZN (Global Sports OTT & Streaming Platform)',
    role: 'Senior Software Engineer',
    duration: '09/2023 – Present',
    location: 'Hyderabad, Telangana',
    description:
      'Orchestrated end-to-end distributed system design, API architectural reviews, and production scalability across high-throughput microservices serving millions of concurrent live sports viewers globally.',
    achievements: [
      'System Design & Architecture Ownership: Orchestrated end-to-end distributed system design, API architectural reviews, and production scalability across high-throughput microservices serving millions of concurrent live sports viewers - utilizing Node.js, TypeScript, NestJS, GraphQL, React.js, and AWS (ECS, Lambda, RDS, DynamoDB, CloudFront, S3, SQS, SNS, ALB, Route 53).',
      'Event-Driven Data Pipelines: Offloaded high-frequency user telemetry to data engineering teams via Amazon SQS queues, securely decoupling core user-facing scoring logic from analytics pipelines.',
      'Sports Domain Expertise: Deep hands-on knowledge of the sports data lifecycle — from fixture creation and broadcast scheduling through live event metadata propagation to frontend delivery; worked directly with sports data feeds, competition/team/event taxonomies, and live-stream capture workflows across multiple global sports properties.',
    ],
    technologies: [
      'Node.js',
      'TypeScript',
      'NestJS',
      'GraphQL',
      'React.js',
      'AWS ECS',
      'Lambda',
      'RDS PostgreSQL',
      'DynamoDB',
      'CloudFront',
      'S3',
      'SQS',
      'SNS',
      'ALB',
      'Route 53',
    ],
  },
  {
    company: 'Ivy Comptech',
    companyFull: 'Ivy Comptech (Entain India)',
    role: 'Software Engineer',
    duration: '11/2021 – 09/2023',
    location: 'Hyderabad, Telangana',
    description:
      'Engineered dynamic frontend feature variants, A/B test experiments, and scalable backend REST APIs for high-traffic sports betting web applications.',
    achievements: [
      'A/B Testing & Dynamic Feature Delivery: Engineered dynamic frontend feature variants and A/B test experiments (multi-variant splits: 50/50, 33/33/33, 25/25/25/25) for high-traffic sports betting web applications using TypeScript, JavaScript (ES6+), HTML5, and CSS3.',
      'Backend API Development: Built scalable REST APIs and microservice utilities using Node.js, TypeScript, and Express.js, ensuring low-latency integration between dynamic client-side experiments and core backend services.',
    ],
    technologies: ['TypeScript', 'JavaScript (ES6+)', 'Node.js', 'Express.js', 'REST APIs', 'HTML5', 'CSS3'],
  },
];

const SKILLS = [
  {
    title: 'Architecture & System Design',
    skills: [
      { name: 'Distributed & High-Availability Systems', level: 95 },
      { name: 'Edge Caching & CDN Optimization', level: 92 },
      { name: 'Microservices & Event-Driven Architecture', level: 94 },
      { name: 'Data Structures & Algorithms (DSA)', level: 88 },
      { name: 'Object-Oriented Design (OOD)', level: 90 },
      { name: 'Predictive Auto-Scaling Strategies', level: 92 },
    ],
  },
  {
    title: 'Cloud & DevOps (AWS)',
    skills: [
      { name: 'AWS (ECS, Lambda, RDS Aurora, DynamoDB)', level: 94 },
      { name: 'AWS (SQS, SNS, CloudFront, ALB, API Gateway, SSM)', level: 92 },
      { name: 'Docker & Containerization', level: 90 },
      { name: 'Terraform (Infrastructure as Code)', level: 84 },
      { name: 'GitHub Actions & CI/CD Automation', level: 88 },
    ],
  },
  {
    title: 'Backend, AI & RAG Solutions',
    skills: [
      { name: 'Node.js (v20 / v22 LTS) & NestJS', level: 96 },
      { name: 'Express.js & REST APIs', level: 94 },
      { name: 'GraphQL & Microservices', level: 90 },
      { name: 'LLM, RAG & Document Chunking Pipelines', level: 88 },
      { name: 'Vector Search & Similarity (Qdrant)', level: 86 },
      { name: 'Server-Sent Events (SSE) Streaming', level: 90 },
    ],
  },
  {
    title: 'Databases & Caching',
    skills: [
      { name: 'PostgreSQL & RDS Aurora', level: 92 },
      { name: 'DynamoDB (NoSQL & High Concurrency)', level: 94 },
      { name: 'Redis In-Memory Caching', level: 88 },
      { name: 'Qdrant (Vector Database)', level: 86 },
      { name: 'TypeORM & Prisma ORM', level: 88 },
    ],
  },
  {
    title: 'Frontend & Languages',
    skills: [
      { name: 'TypeScript', level: 95 },
      { name: 'JavaScript (ES6+), HTML5 & CSS3', level: 94 },
      { name: 'React.js (v18) & Next.js', level: 90 },
      { name: 'Redux & Context API', level: 88 },
      { name: 'Python', level: 50 },
    ],
  },
  {
    title: 'Media Processing & AI Dev Tools',
    skills: [
      { name: 'FFmpeg (Multi-bitrate Transcoding)', level: 90 },
      { name: 'Bento4 (DASH/HLS Packaging & MP4 Segmentation)', level: 88 },
      { name: 'Adaptive Bitrate Streaming (ABR)', level: 88 },
      { name: 'AI Tools: Cursor, Antigravity, GitHub Copilot', level: 92 },
      { name: 'Testing & Workflows: Git, Jest, Jira (Agile/Scrum)', level: 90 },
    ],
  },
];

const PROJECTS = [
  {
    title: 'Real-Time Personalization Engine',
    company: 'DAZN',
    duration: '2025 – Present',
    description:
      'Engineered a real-time content scoring engine serving millions of active users based on sport, competition, team, and regional preferences, increasing overall user engagement on personalized content by 70%.',
    achievements: [
      'Engineered a real-time content scoring engine serving millions of active users based on sport, competition, team, and regional preferences, increasing overall user engagement on personalized content by 70%.',
      'Reduced ALB 5xx errors by 90% during live sports traffic spikes by implementing request-rate-per-target ECS auto-scaling alongside predictive pre-warming ahead of scheduled live events.',
      'Solved severe DynamoDB read throttling across 1000+ concurrent ECS tasks by designing a CloudFront CDN edge-caching layer backed by an automated AWS Lambda polling system—reducing database throttling by 90%.',
    ],
    technologies: ['Node.js', 'NestJS', 'TypeScript', 'AWS ECS (1000+ tasks)', 'Lambda', 'CloudFront', 'API Gateway', 'DynamoDB', 'SQS', 'ALB'],
    image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Metadata Validation & Alerting Dashboard',
    company: 'DAZN',
    duration: '2023 – 2024',
    description:
      'Built an end-to-end real-time anomaly detection system tracking sports broadcast data from fixture planning through to frontend client rendering.',
    achievements: [
      'Built an end-to-end real-time anomaly detection system tracking sports broadcast data from fixture planning to frontend client rendering.',
      'Centralized broadcast data streams into AWS RDS PostgreSQL (Aurora) and integrated AWS SQS and SES to trigger real-time validation failure alerts via email and an interactive React/GraphQL dashboard.',
      'Solved validation queue backups during peak update by configuring SQS-based ECS auto-scaling, reducing alert processing latency by 80%.',
    ],
    technologies: ['NestJS', 'GraphQL', 'Node.js', 'AWS Lambda', 'API Gateway', 'RDS PostgreSQL (Aurora)', 'ECS Fargate', 'SQS', 'AWS SES', 'ALB', 'Terraform'],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Adaptive Video Transcoding & On-Demand Clip Delivery Pipeline',
    company: 'DAZN',
    duration: '2025',
    description:
      'Designed an end-to-end video pipeline that ingests raw match clip MP4s from S3, transcodes them into 9 adaptive bitrate profiles via FFmpeg, and packages segments using Bento4 for HLS/DASH streaming.',
    achievements: [
      'Designed an end-to-end video pipeline that ingests raw match clip MP4s from S3, transcodes them into 9 adaptive bitrate profiles (480p @ 288kbps → 1080p @ 8000kbps) via FFmpeg, and packages segments using Bento4 for HLS/DASH streaming.',
      'Drove an 85% infrastructure cost reduction by migrating heavy FFmpeg compute workloads from ECS containers to EC2 Spot Instances while maintaining full pipeline throughput.',
    ],
    technologies: ['Node.js', 'TypeScript', 'NestJS', 'Python (Lambda)', 'AWS ECS', 'EC2 Spot', 'SQS', 'S3', 'EFS', 'DynamoDB', 'CloudFront', 'FFmpeg', 'Bento4', 'Docker'],
    image: 'https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'AI Legal Research Assistant',
    company: 'Independent / Full-Stack Project',
    duration: '2026',
    github: 'https://github.com/AkhilMarthi/Legal-research-assistant',
    description:
      'Architected a legal document intelligence platform supporting PDF/MD/TXT uploads, 512-token overlapping semantic chunking, 768D vector embeddings, and Qdrant cosine similarity search to retrieve context and generate grounded answers via llama3.2.',
    achievements: [
      'Architected a legal document intelligence platform supporting PDF/MD/TXT uploads, 512-token overlapping semantic chunking, 768D vector embeddings, and Qdrant cosine similarity search to retrieve context and generate grounded answers via llama3.2.',
      'Streamed LLM responses token-by-token to the React frontend using Server-Sent Events (SSE) via NestJS Observable for a ChatGPT-style streaming UX.',
      'Built session-based conversation memory, structured citations, SHA-256 embedding caching, and PromptGuardService injection protection utilizing XML envelope boundaries.',
    ],
    technologies: ['NestJS', 'TypeScript', 'React.js', 'Ollama (llama3.2 + nomic-embed-text)', 'Qdrant Vector DB', 'Docker Compose', 'Server-Sent Events (SSE)'],
    image: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

// ─── SMOOTH SCROLL ─────────────────────────────────────────
function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ─── NAVBAR ────────────────────────────────────────────────
function Navbar({ dark, setDark }: { dark: boolean; setDark: (v: boolean) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">Akhil Reddy</div>
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => setDark(!dark)}
              className="theme-btn"
              aria-label="Toggle theme"
            >
              {dark ? '☀️' : '🌙'}
            </button>
          </div>
          <button className="md:hidden text-gray-700" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => { scrollTo(l.href); setMobileOpen(false); }}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
              >
                {l.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

// ─── HERO ──────────────────────────────────────────────────
function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span style={{ fontSize: '6rem', lineHeight: 1 }}>👨‍💻</span>
              </div>
              <div className="absolute bottom-4 right-4 bg-green-500 w-12 h-12 rounded-full border-4 border-white flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Akhil Reddy Marthi
              </span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-600 mb-6 font-light">
              Senior Full-Stack Engineer | Distributed Systems & Architecture
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl">
              Senior Software Engineer with 5 years of experience in Distributed Systems Architecture,
              microservices and edge-caching for a global Sports OTT platform (DAZN). Specialized in designing
              highly scalable and high-availability media pipelines, predictive auto-scaling strategies, and
              event-driven telemetry serving millions of active users globally.
            </p>
            <div className="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-gray-600">
                <Phone size={18} className="text-blue-600" />
                <span>+91 7416871153</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail size={18} className="text-blue-600" />
                <span>akhilmarthi3322@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={18} className="text-blue-600" />
                <span>Hyderabad, Telangana</span>
              </div>
            </div>
            <div className="flex gap-4 justify-center lg:justify-start mb-8">
              <a
                href="https://www.linkedin.com/in/akhil-reddy-marthi-7b55251b2"
                target="_blank" rel="noreferrer"
                className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 hover:scale-110 transform"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="https://github.com/AkhilMarthi"
                target="_blank" rel="noreferrer"
                className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors duration-200 hover:scale-110 transform"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="mailto:akhilmarthi3322@gmail.com"
                className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center transition-colors duration-200 hover:scale-110 transform"
                style={{ '--hover-bg': '#dc2626' } as React.CSSProperties}
              >
                <Mail size={20} />
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollTo('#contact')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium hover:scale-105 transform"
              >
                Get In Touch
              </button>
              <button
                onClick={() => scrollTo('#projects')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 font-medium hover:scale-105 transform"
              >
                View Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT ────────────────────────────────────────────────
function About() {
  const cards = [
    { icon: <Clock className="w-8 h-8 text-blue-600" />, title: '5 Years Experience', description: 'Deep experience in distributed systems, cloud infrastructure, and full-stack development at scale' },
    { icon: <Code2 className="w-8 h-8 text-green-600" />, title: 'System Design Expert', description: 'Architected solutions serving millions of sports fans with high availability and low latency' },
    { icon: <Users className="w-8 h-8 text-purple-600" />, title: 'Sports OTT Domain', description: 'Deep knowledge of sports data lifecycle: fixtures, metadata, live streaming, and content delivery' },
    { icon: <Zap className="w-8 h-8 text-yellow-600" />, title: 'AI & Media Engineering', description: 'From AI-powered RAG pipelines to adaptive video transcoding and edge-caching architectures' },
  ];
  return (
    <section id="about" className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate engineer solving complex infrastructure challenges at global scale
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Senior Software Engineer with 5 years of experience in Distributed Systems Architecture, microservices and edge-caching for a global Sports OTT platform (DAZN). Specialized in designing highly scalable and high-availability media pipelines, predictive auto-scaling strategies, and event-driven telemetry serving millions of active users globally.
              </p>
              <p>
                Proficient in Node.js, TypeScript, NestJS, React.js, GraphQL, and enterprise AWS cloud infrastructure (Lambda, SQS, ECS, RDS Aurora, DynamoDB, CloudFront). At DAZN, I’ve orchestrated end-to-end distributed system design and solved complex production challenges: eliminating severe DynamoDB read throttling across 1000+ concurrent ECS tasks by 90% via CloudFront edge-caching, slashing ALB 5xx errors by 90% via predictive pre-warming and request-rate auto-scaling, and driving an 85% infrastructure cost reduction by migrating FFmpeg transcoding workloads to EC2 Spot Instances.
              </p>
              <p>
                Beyond streaming systems, I bring strong domain expertise in building real-time content scoring, AI-powered document intelligence solutions (RAG with Ollama, Qdrant, and token-streaming SSE), and automated content generation workflows.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((c, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">{c.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{c.title}</h4>
                <p className="text-gray-600 text-sm">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── EXPERIENCE ────────────────────────────────────────────
function Experience() {
  return (
    <section id="experience" className="py-10 md:py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">A journey through distributed systems and high-scale engineering</p>
        </div>
        <div className="max-w-4xl mx-auto">
          {EXPERIENCE.map((job, idx) => (
            <div key={job.company} className="relative mb-12 last:mb-0">
              {idx !== EXPERIENCE.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-full bg-blue-200 hidden md:block" />
              )}
              <div className="bg-white rounded-xl shadow-lg p-8 ml-0 md:ml-16 relative">
                <div className="absolute -left-4 top-8 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block" />
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.companyFull}</h3>
                    <h4 className="text-xl text-blue-600 font-semibold mb-2">{job.role}</h4>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-gray-600 mb-1 md:justify-end">
                      <Clock size={16} className="mr-2" />
                      <span className="font-medium">{job.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600 md:justify-end">
                      <MapPin size={16} className="mr-2" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">{job.description}</p>
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-3">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {job.achievements.map((a, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-3">Technologies:</h5>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((t) => (
                      <span key={t} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SKILLS ────────────────────────────────────────────────
function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section id="skills" className="py-10 md:py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Technical skills built across distributed systems, cloud, media, and AI</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {SKILLS.map((group, gi) => (
            <div key={gi} className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{group.title}</h3>
              <div className="space-y-4">
                {group.skills.map((s, si) => (
                  <div key={si}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">{s.name}</span>
                      <span className="text-sm text-gray-600">{s.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full skill-bar-fill"
                        style={{ width: visible ? `${s.level}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PROJECTS ─────────────────────────────────────────────
function Projects() {
  return (
    <section id="projects" className="py-10 md:py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Impactful systems built for scale, reliability, and cost-efficiency</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {PROJECTS.map((p, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4 gap-2">
                  <h3 className="text-2xl font-bold text-gray-900">{p.title}</h3>
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 text-white hover:bg-gray-800 rounded-lg text-xs font-semibold transition-all hover:scale-105 transform flex-shrink-0 shadow-sm"
                      title="View GitHub Repository"
                    >
                      <GithubIcon size={14} />
                      <span>Source Code</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 relative">
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{p.company}</span>
                  </div>
                  <div className="flex items-center gap-1 absolute right-0">
                    <Clock size={16} />
                    <span>{p.duration}</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">{p.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {p.achievements.map((a, ai) => (
                      <li key={ai} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {p.technologies.map((t) => (
                      <span key={t} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">{t}</span>
                    ))}
                  </div>
                </div>
                {p.github && (
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-medium">Open Source Repository</span>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <GithubIcon size={16} />
                      <span>View on GitHub</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── EDUCATION ────────────────────────────────────────────
function Education() {
  return (
    <section id="education" className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Academic foundation in Computer Science & Engineering</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-12">
            <div className="flex items-start gap-6">
              <div className="graduation-cap w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Bachelor of Technology (B.Tech)</h3>
                <h4 className="text-xl text-blue-600 font-semibold mb-4">Computer Science & Engineering</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <GraduationCap size={16} className="mr-2" />
                    <span>TKR College of Engineering & Technology</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={16} className="mr-2" />
                    <span>Hyderabad, Telangana</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock size={16} className="mr-2" />
                    <span>07/2017 – 07/2021</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Award size={16} className="mr-2" />
                    <span>Computer Science & Engineering</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ──────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [loading, setLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const subj = encodeURIComponent(`Portfolio Contact: ${form.subject}`);
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\n\nMessage:\n${form.message}`);
      window.location.href = `mailto:akhilmarthi3322@gmail.com?subject=${subj}&body=${body}`;
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const contacts = [
    { icon: <Mail className="w-6 h-6" />, title: 'Email', value: 'akhilmarthi3322@gmail.com', link: 'mailto:akhilmarthi3322@gmail.com' },
    { icon: <Phone className="w-6 h-6" />, title: 'Phone', value: '+91 7416871153', link: 'tel:+917416871153' },
    { icon: <MapPin className="w-6 h-6" />, title: 'Location', value: 'Hyderabad, Telangana', link: '#' },
  ];

  return (
    <section id="contact" className="py-10 md:py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Open to Senior Full-Stack Engineer | Distributed Systems & Architecture roles — let's connect!</p>
        </div>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Let's Connect</h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, distributed systems and architecture challenges, high-throughput media pipelines, or AI solutions. Feel free to reach out!
            </p>
            <div className="space-y-6 mb-8">
              {contacts.map((c, i) => (
                <a key={i} href={c.link} className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">{c.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{c.title}</h4>
                    <p className="text-gray-600">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="text-center lg:text-left">
              <h4 className="font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex gap-4 justify-center lg:justify-start">
                <a href="https://www.linkedin.com/in/akhil-reddy-marthi-7b55251b2" target="_blank" rel="noreferrer" className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"><LinkedinIcon size={20} /></a>
                <a href="https://github.com/AkhilMarthi" target="_blank" rel="noreferrer" className="w-12 h-12 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-gray-900 transition-colors duration-200"><GithubIcon size={20} /></a>
                <a href="mailto:akhilmarthi3322@gmail.com" className="w-12 h-12 bg-red-500 text-white rounded-lg flex items-center justify-center transition-colors duration-200"><Mail size={20} /></a>
              </div>
            </div>
          </div>
          {/* Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            {status === 'success' && <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">Thanks! Your email client should open now.</div>}
            {status === 'error' && <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">Something went wrong. Please email directly.</div>}
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input type="text" id="name" name="name" value={form.name} onChange={onChange} required disabled={loading} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 disabled:opacity-50" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input type="email" id="email" name="email" value={form.email} onChange={onChange} required disabled={loading} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 disabled:opacity-50" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                <input type="text" id="subject" name="subject" value={form.subject} onChange={onChange} required disabled={loading} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 disabled:opacity-50" placeholder="What's this about?" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea id="message" name="message" value={form.message} onChange={onChange} required disabled={loading} rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none disabled:opacity-50" placeholder="Tell me about your opportunity or project..." />
              </div>
              <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed">
                <Send size={18} />
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Akhil Reddy Marthi</h3>
            <p className="text-gray-400">Senior Full-Stack Engineer | Distributed Systems & Architecture</p>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-gray-400 flex items-center gap-2">
              Made with <Heart size={16} className="text-red-500" /> using React + Vite
            </p>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Akhil Reddy Marthi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// ─── APP ──────────────────────────────────────────────────
export default function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
