export interface Project {
  slug: string;
  title: string;
  category: string;
  company: string;
  period: string;
  role: string;
  status?: string;
  technologies: string[];
  summary: string;
  problemStatement?: string;
  keyFeatures?: string[];
  whatIWorkedOn: string[];
  integrations?: string[];
  contributionNote?: string;
  publicationNote?: string;
  liveUrl?: string;
  githubRestricted?: boolean;
  themeColor: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export interface ExperienceItem {
  period: string;
  role: string;
  companyOrContext: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface PrincipleItem {
  number: string;
  title: string;
  description: string;
}

export interface EducationItem {
  qualification: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
}

export const PERSONAL_DETAILS = {
  name: "Arjun Santhosh",
  title: "Software Developer",
  eyebrow: "SOFTWARE DEVELOPER · WEB & MOBILE APPLICATIONS",
  headline: "I build digital products from ideas to reality.",
  introParagraph1:
    "I’m Arjun, a software developer working across web applications, mobile apps, and backend systems.",
  introParagraph2:
    "I build digital products from initial idea through architecture, development, and deployment, using modern AI workflows to develop faster and more reliably.",
  focus:
    "Web development, mobile application development, backend development, product development, DevOps and AI integrations",
  techLine:
    "Web Development · Mobile Applications · Backend Systems · AI Integrations",
  positioning:
    "Software developer working across web applications, mobile apps and backend systems. Experienced with end-to-end delivery from concept to production, as well as focused engineering within collaborative teams.",
  email: "developerarjun91@gmail.com",
  github: "https://github.com/ArjunSanthoshVS",
  githubDisplay: "github.com/ArjunSanthoshVS",
  linkedin: "https://www.linkedin.com/in/arjun-santhosh-94a663220/",
  linkedinDisplay: "linkedin.com/in/arjun-santhosh-94a663220",
  resumePath: "/resume.pdf",
  resumeDisplay: "resume.pdf",
  location: "Bengaluru, India",
  currentWork: "Collaborating with Brandsly on digital products and services",
  availability: "Open to independent client projects and freelance collaborations",
  responseExpectation: "The best way to reach me is by email.",
  year: "2026",
};

export const PROJECTS: Project[] = [
  {
    slug: "dingdong-digital",
    title: "DingDong Digital",
    category: "AI Agency OS & Digital Transformation",
    company: "Scintillate Alliance Private Limited",
    period: "November 2024 – May 2026",
    role: "Sole Developer — End-to-End Development",
    status: "Beta",
    technologies: [
      "Next.js 14",
      "React 18",
      "React Native",
      "Expo 54",
      "TypeScript",
      "Node.js",
      "Express 4",
      "MongoDB",
      "Cloudflare R2",
      "Tailwind CSS",
      "GSAP",
    ],
    summary:
      "An AI-powered agency operating system and digital transformation platform for small-to-medium businesses (SMBs). Automates the complete digital business presence—from audio discovery brief transcription and brand identity generation to multi-page website building, domain registration, custom email setup, and VPS e-commerce store deployment, all managed through dedicated mobile apps and PWAs.",
    problemStatement:
      "Building a complete digital presence traditionally requires hiring separate designers, developers, sysadmins, and copywriters across weeks or months using fragmented tooling. Ding Dong Digital eliminates this operational bottleneck and high cost by automating brand asset creation, website development, domain/DNS orchestration, and infrastructure provisioning into a single, cohesive workflow.",
    keyFeatures: [
      "AI Discovery & Brand Generation: Audio discovery brief recording with AI transcription, business profile synthesis, AI logo generation with SVG vectorization, and brand kit design.",
      "Automated Website Generation & Editing: Multi-page website generation with automated royalty-free stock imagery, interactive live iframe preview, and in-place AI chat editing.",
      "Infrastructure & Domain Automation: Automated domain availability search and registration, Cloudflare DNS configuration, automated SSL certificates, and one-click Cloudflare Pages deployment.",
      "Custom Email Hosting: Automated business mailbox setup via Migadu with custom domain DNS records, plus an in-app IMAP/SMTP email client.",
      "Automated E-Commerce Deployment: Automated provisioning of WordPress + WooCommerce stores on dedicated VPS servers via SSH2, with full mobile store management.",
      "Client Mobile App & PWA: Native Expo/React Native mobile app and offline-ready PWA featuring OTP authentication, website form submission tracking with direct email reply, and appointment scheduling.",
      "Financial Ledger & Billing: Credit balance system with pay-per-action deduction, Razorpay payment links, and per-token AI cost and expense tracking.",
    ],
    whatIWorkedOn: [
      "Engineered the entire end-to-end platform across web client (Next.js 14), mobile app/PWA (Expo 54 / React Native), and backend server (Node.js/Express).",
      "Built automated multi-page website generation with Cloudflare Pages deployment and in-place AI chat editing.",
      "Developed audio brief ingestion with multimodal Gemini transcription, AI logo generation, and vectorization pipelines.",
      "Orchestrated infrastructure automation: automated domain registration (Namecheap API), Cloudflare DNS and SSL provisioning, and Migadu custom mailbox setup.",
      "Implemented automated WordPress/WooCommerce VPS provisioning via SSH2 remote shell execution.",
      "Created client mobile apps and PWA with real-time form inquiry management, appointment scheduling, and credit billing ledgers.",
    ],
    integrations: [
      "Google Gemini AI (@google/genai)",
      "Cloudflare Pages & DNS",
      "Cloudflare R2 (S3 SDK)",
      "Namecheap XML API",
      "Migadu Mail API",
      "Recraft AI (Vectorization)",
      "Razorpay",
      "Twilio Verify (SMS OTP)",
      "Pexels & Pixabay APIs",
      "Linux VPS via SSH2",
      "OpenStreetMap / Photon",
      "Puppeteer-Core / PDF",
    ],
    liveUrl: "https://www.dingdongdigital.com/",
    githubRestricted: true,
    themeColor: {
      primary: "#2F7C66",
      secondary: "#EAF4F1",
      accent: "#4A9F88",
    },
  },
  {
    slug: "theratalk",
    title: "TheraTalk",
    category: "Tele-Counseling & Mental Health Platform",
    company: "3M Media Works",
    period: "June 2026 – September 2026",
    role: "Technical Lead / End-to-End Developer",
    status: "Available in Market",
    technologies: [
      "React Native 0.86",
      "React 19",
      "Next.js 16",
      "Node.js (>=22)",
      "Express.js (v4)",
      "TypeScript (v5)",
      "MongoDB",
      "Redis",
      "BullMQ",
      "Agora RTC",
      "Agora Chat",
      "Tailwind CSS v4",
    ],
    summary:
      "A multi-platform tele-counseling and mental health consultation ecosystem connecting users with licensed counselors ('Buddies'). Delivers immediate on-demand matching and scheduled appointments across real-time text chat, audio calls, and video calls, with dual mobile apps, practice management web portals, and automated clinical session intelligence.",
    problemStatement:
      "Accessing timely, affordable, and stigma-free mental health support often involves long wait times, rigid scheduling, and high upfront commitments. TheraTalk eliminates these friction points by providing immediate, flexible consultation modes (chat, audio, video) with transparent minute-based pricing and wallet top-ups, while automating administrative tasks like scheduling, reminders, and clinical session transcription for counselors.",
    keyFeatures: [
      "Multi-Modal Real-Time Consultations: In-app text chat, voice calls, and video sessions powered by Agora RTC and Agora Chat protocols.",
      "On-Demand Matching & Scheduled Appointments: Instant counselor request dispatching via WebSocket matching, alongside calendar-based appointment booking with automated reminder and no-show workers.",
      "Dual Mobile Applications: Dedicated cross-platform client and counselor ('TheraTalk Buddy') apps with incoming call overlays, status toggles, and notification routing.",
      "Administrative & Counselor Web Portals: Next.js portals enabling counselor management, session tracking, financial rollups, moderation, and dispute resolution.",
      "Session Intelligence & Recording: Secure cloud recording storage with asynchronous OpenAI-driven transcription and clinical session summaries.",
      "Flexible Billing & Monetization: Wallet top-ups and minute packages managed through Razorpay and Apple In-App Purchases (IAP), with gift card redemption support.",
      "Compliance & Trust: OTP mobile authentication, granular user consent tracking, content moderation, and configurable data retention lifecycles.",
    ],
    whatIWorkedOn: [
      "Led full-stack technical development across Android/iOS client and counselor mobile apps, counselor web portal, and admin portal.",
      "Integrated Agora RTC, Agora Chat, and Cloud Recording for low-latency multi-modal consultations and encrypted recording pipelines.",
      "Architected real-time dispatch matching engine using Socket.IO with Redis adapter and BullMQ worker queues.",
      "Built clinical session intelligence pipelines with asynchronous speech-to-text transcription and automated consultation summaries via OpenAI.",
      "Integrated payment processing for user wallet top-ups and minute packages via Razorpay and Apple StoreKit In-App Purchases.",
      "Handled Docker configurations, cloud deployment, and app store release cycles across Google Play and Apple App Store.",
    ],
    integrations: [
      "Agora (RTC Audio/Video & Chat)",
      "Agora Cloud Recording",
      "Cloudflare R2 / AWS S3",
      "Razorpay",
      "Apple StoreKit (IAP)",
      "OpenAI API",
      "Twilio Verify",
      "Firebase Cloud Messaging (FCM)",
      "Apple APNs",
      "Zoho Desk",
      "Cloudinary",
    ],
    liveUrl: "https://www.theratalk.in/",
    githubRestricted: true,
    themeColor: {
      primary: "#2563EB",
      secondary: "#EFF6FF",
      accent: "#60A5FA",
    },
  },
  {
    slug: "learnese",
    title: "Learnese",
    category: "AI Japanese Language Learning Platform",
    company: "Scintillate Alliance Private Limited",
    period: "November 2024 – May 2026",
    role: "Sole Developer — End-to-End Development",
    technologies: [
      "React Native (Expo SDK 52)",
      "React 18",
      "TypeScript",
      "Vite",
      "Node.js",
      "Express.js",
      "Socket.io",
      "MongoDB",
      "Redis",
      "MediaMTX",
      "FFmpeg",
      "NativeWind",
      "Material UI",
    ],
    summary:
      "An AI-powered Japanese language learning platform designed to guide learners from foundational basics to advanced proficiency through structured JLPT-aligned curricula (N5–N1) and Business Japanese. Features an interactive conversational AI tutor ('Tanaka-sensei'), live interactive classrooms, multi-skill drills with Text-to-Speech, and dynamic multilingual localization.",
    problemStatement:
      "Learning Japanese is notoriously challenging for non-native speakers due to complex multi-script writing systems (Hiragana, Katakana, and Kanji), nuanced grammar patterns, and strict politeness levels (Keigo). Conventional learning tools often lack interactive conversational practice, real-time pronunciation guidance, and localized instruction tailored to native languages. Learnese addresses this by providing a unified mobile ecosystem featuring structured lesson tracks, dynamic multilingual support, real-time Text-to-Speech (TTS) exercises, AI-guided conversational practice, and live virtual classes.",
    keyFeatures: [
      "Structured JLPT & Business Curricula: Step-by-step modular courses spanning JLPT N5 through N1, alongside specialized Business Japanese modules.",
      "AI Tutor ('Tanaka-sensei'): Conversational AI assistant powered by OpenAI delivering dynamic feedback, dialogue practice, and context-aware motivation.",
      "Multi-Skill Practice Engine: Interactive quizzes, reading, writing, and listening drills integrated with Text-to-Speech (TTS) audio playback.",
      "Live Virtual Classes: Real-time video/audio streaming and peer-to-peer classroom sessions powered by WebRTC and MediaMTX (RTMP-to-HLS).",
      "Gamification & Motivation: Daily streaks, daily goals, animated tutor reactions, and comprehensive progress dashboards.",
      "Dynamic Multilingual Localization: In-app UI translation supporting multiple languages including English, Hindi, Punjabi, and Gujarati.",
      "Community & Social Learning: Collaborative study groups, forums, and real-time chat channels.",
      "Administrative Portal: Web dashboard for course creation, student enrollment management, live session scheduling, and subscription/coupon administration.",
    ],
    whatIWorkedOn: [
      "Independently designed and developed the cross-platform mobile application (React Native / Expo 52) and administrative web portal (React 18 / Vite).",
      "Implemented conversational AI tutor persona ('Tanaka-sensei') using OpenAI API with context-aware dialogue feedback.",
      "Built custom live streaming media infrastructure using Dockerized MediaMTX (RTMP-to-HLS) and FFmpeg for live virtual classes.",
      "Integrated interactive multi-skill practice engines with Text-to-Speech (Expo Speech) and dynamic multi-language localization (Bing Translate / i18next).",
      "Engineered subscription billing, one-time payments, and coupon workflows using Stripe.",
      "Managed cloud configurations, Docker containerization, backend APIs, and app store publishing across Google Play and Apple App Store.",
    ],
    integrations: [
      "OpenAI API",
      "Stripe",
      "Twilio",
      "Nodemailer",
      "Firebase Analytics",
      "Sentry",
      "Bing Translate API / i18next",
      "MediaMTX / WebRTC",
    ],
    liveUrl: "https://learnese.ai/",
    githubRestricted: true,
    themeColor: {
      primary: "#DC2626",
      secondary: "#FEF2F2",
      accent: "#F87171",
    },
  },
  {
    slug: "mastan-india",
    title: "Mastant India",
    category: "On-Demand Tailoring & Artisan Marketplace",
    company: "Scintillate Alliance Private Limited",
    period: "November 2024 – May 2026",
    role: "Sole Developer — End-to-End Development",
    status: "Delivered",
    technologies: [
      "Next.js 16",
      "React Native 0.84",
      "React 19",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "MongoDB Atlas",
      "Tailwind CSS v4",
      "React Native Reanimated",
    ],
    summary:
      "An on-demand tailoring and artisan services platform (TanaBana) connecting customers with verified tailoring professionals. Supports itemized custom tailoring, alterations, and hourly/shift-based artisan bookings, coordinating real-time dispatch, route navigation, job lifecycle tracking, and digital payments across Customer and Partner mobile apps and an Admin operations dashboard.",
    problemStatement:
      "The custom tailoring and alterations market is traditionally fragmented and offline, leaving customers with unreliable turnaround times, lack of transparent pricing, and difficulty finding skilled artisans. Tailors and artisans simultaneously lack predictable job matching, digital scheduling tools, and guaranteed payment settlement. TanaBana solves this by modernizing artisan dispatch, providing end-to-end operational visibility, and streamlining payment flows for all stakeholders.",
    keyFeatures: [
      "Customer Mobile Application: Garment tailoring and alteration selection, hourly artisan shift bookings, Google Maps place autocomplete, live order and partner location tracking, in-app chat, and OTP/PIN arrival verification.",
      "Partner (Artisan) Mobile Application: Real-time job/shift dispatch offers with accept/reject controls, geolocation sharing, turn-by-turn route navigation, arrival PIN verification, photo proof of completion, and earnings management.",
      "Admin Web Dashboard: Live operational map displaying active partner locations and in-progress jobs, partner KYC document verification, service catalog and dynamic pricing management, and payment audit logs.",
      "Real-Time Event Pub/Sub: WebSocket-driven dispatch engine via Socket.IO with MongoDB adapter support for distributed scaling.",
      "Automated Background Schedulers: Automated redispatch loops, job expiration timers, appointment reminders, and webhook-driven payment status sync.",
      "Digital Invoicing & Payments: Razorpay payment gateway integration, automated server-side PDF receipt generation via PDFKit, and upfront/cash-on-service workflows.",
    ],
    whatIWorkedOn: [
      "Independently built the entire ecosystem: Customer mobile app, Partner mobile app, Admin web dashboard, and centralized backend API.",
      "Engineered real-time dispatch matching and live partner location tracking using Socket.IO and Google Maps Platform.",
      "Implemented dual mobile apps with React Native 0.84, React Navigation, and React Native Reanimated.",
      "Built admin operations dashboard with live partner location map and KYC verification workflows in Next.js 16 and Tailwind CSS v4.",
      "Integrated Razorpay payment flows with webhook synchronization and automated server-side PDF invoice generation using PDFKit.",
      "Handled Twilio OTP phone authentication, Firebase Cloud Messaging push alerts, and Cloudinary media uploads.",
    ],
    integrations: [
      "Razorpay",
      "Twilio Verify API",
      "Firebase Cloud Messaging (FCM)",
      "Google Maps Platform (Places Autocomplete, Maps API)",
      "Cloudinary",
      "PDFKit",
      "MongoDB Atlas",
      "Vercel",
    ],
    githubRestricted: true,
    themeColor: {
      primary: "#D97706",
      secondary: "#FFFBEB",
      accent: "#FBBF24",
    },
  },
  {
    slug: "hubomed",
    title: "HuboMed",
    category: "Hospital Management & Outpatient Operations",
    company: "Scintillate Alliance Private Limited",
    period: "November 2024 – May 2026",
    role: "Sole Developer — End-to-End Development",
    status: "Beta",
    technologies: [
      "React 18",
      "React Native",
      "Expo 54",
      "TypeScript",
      "Vite",
      "Node.js",
      "Express 4",
      "Socket.io",
      "MongoDB Atlas",
      "Material-UI (MUI v5)",
      "Emotion",
      "React Router v7",
      "Recharts",
    ],
    summary:
      "An integrated clinic and hospital management ecosystem designed to streamline outpatient operations and improve patient care journeys. Unifies six key healthcare roles—Admins, Receptionists, Doctors, Lab Technicians, Pharmacists, and Patients—across web portals and mobile applications, coordinating registration, real-time queue tokens, split-screen clinical consultations, diagnostic lab tracking, and pharmacy inventory.",
    problemStatement:
      "Traditional clinic management systems frequently operate in functional silos, relying on disconnected paper records, manual handovers, and static queues that create operational bottlenecks and patient anxiety. Hubomed bridges these gaps with an event-driven architecture that delivers real-time queue tracking, structured clinical handovers between departments, paperless prescription workflows, and direct, secure doctor-patient communication.",
    keyFeatures: [
      "Role-Based Operational Workspaces: Dedicated portals tailored for Administrators, Receptionists (Front Desk), Doctors, Lab Technicians, Pharmacists, and Patients.",
      "Real-Time Queue & Token Tracking: Live patient queue monitoring with instant token status updates across clinic display boards and patient mobile devices via WebSockets.",
      "Doctor Consultation Workspace: Split-screen clinical console featuring vitals tracking, structured clinical notes (complaints, examinations, medical history, care plans), and integrated diagnosis recording.",
      "Diagnostic & Lab Management: Specimen collection tracking, structured parameter data entry (avoiding unsearchable raw PDFs), and critical result alerts for physicians.",
      "Pharmacy & Inventory System: Real-time drug inventory tracking, low-stock threshold notifications, and direct dispensing based on doctor prescriptions.",
      "Reception & Multi-Mode Billing: Guided patient registration wizard, emergency check-ins, fee collections across Cash, Card, UPI, and Insurance, with automated receipt generation.",
      "Cross-Platform Patient Experience: Responsive web portal and mobile app supporting appointment booking, digital prescription downloads, and structured lab result access.",
      "Automated Prescription Sharing: Multi-channel distribution of secure, time-limited prescription links via WhatsApp, SMS, and Email.",
    ],
    whatIWorkedOn: [
      "Independently designed and built the complete platform: role-based web portals (React 18 / Material-UI) and patient mobile application (React Native / Expo 54).",
      "Engineered real-time queue management and token broadcasting using Socket.io and Node.js/Express backend.",
      "Built structured clinical consultation and diagnostic lab modules with parameter tracking and critical result notifications.",
      "Developed pharmacy inventory tracking system with low-stock alerts and prescription-linked dispensing workflows.",
      "Integrated multi-mode billing and Stripe payment processing alongside server-side PDF prescription generation via Puppeteer and PDFKit.",
      "Implemented multi-channel prescription distribution via WhatsApp, SMS, and Email webhook architectures.",
    ],
    integrations: [
      "MongoDB Atlas",
      "Stripe",
      "Puppeteer",
      "PDFKit",
      "Webhook-based SMS/Email/WhatsApp Messaging",
      "Vercel",
      "Render",
    ],
    githubRestricted: true,
    themeColor: {
      primary: "#0D9488",
      secondary: "#F0FDFA",
      accent: "#2DD4BF",
    },
  },
  {
    slug: "fg-academie",
    title: "FG Academie",
    category: "Learning Management System",
    company: "Scintillate Alliance Private Limited",
    period: "November 2024 – May 2026",
    role: "Full-Stack Developer — End-to-End Development",
    technologies: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mollie",
    ],
    summary:
      "An online LMS platform supporting course authoring, student enrollment, structured learning, and verified certification.",
    whatIWorkedOn: [
      "Architected and built the LMS web application and supporting backend.",
      "Implemented course publishing, video streaming, quizzes, and automated evaluations.",
      "Built digital certificate generation with cryptographic verification badges.",
      "Integrated Netherlands payment gateways including Mollie.",
      "Developed notifications, newsletters, coupon discounts, and student analytics.",
    ],
    githubRestricted: true,
    themeColor: {
      primary: "#EA580C",
      secondary: "#FFF7ED",
      accent: "#FB923C",
    },
  },
  {
    slug: "ground-zero",
    title: "Ground Zero",
    category: "Political Campaign Management ERP",
    company: "Scintillate Alliance Private Limited",
    period: "November 2023 – August 2024",
    role: "Backend Developer",
    technologies: ["Node.js", "Express.js", "MongoDB"],
    summary:
      "An ERP platform designed to support election campaign operations, candidate tracking, and field team resource allocation.",
    whatIWorkedOn: [
      "Engineered backend REST APIs for campaign milestones and field tracking.",
      "Built candidate data models, expenditure auditing, and analytics endpoints.",
      "Deployed and configured Linux VPS servers and database instances.",
      "Handled server security, IP bindings, reverse proxy rules, and vulnerability updates.",
    ],
    contributionNote:
      "The frontend was developed by another developer. The backend and server infrastructure were developed independently by Arjun.",
    githubRestricted: true,
    themeColor: {
      primary: "#475569",
      secondary: "#F8FAFC",
      accent: "#94A3B8",
    },
  },
  {
    slug: "emi-prime",
    title: "EMI Prime",
    category: "Website Development",
    company: "Scintillate Alliance Private Limited",
    period: "November 2024 – May 2026",
    role: "Sole Developer — End-to-End Development",
    status: "Delivered",
    technologies: ["Next.js"],
    summary: "A modern responsive website presenting consumer EMI financing options and services.",
    whatIWorkedOn: [
      "Independently developed the website using Next.js.",
      "Delivered a fast, accessible user experience with clean responsive layouts.",
    ],
    liveUrl: "https://equalmonthlyinstallments.com/",
    githubRestricted: true,
    themeColor: {
      primary: "#0284C7",
      secondary: "#F0F9FF",
      accent: "#38BDF8",
    },
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "June 2026 – September 2026",
    role: "Software Engineer / Technical Lead",
    companyOrContext: "3M Media Works",
    location: "Mumbai, India",
    description:
      "Led end-to-end technical development of TheraTalk, a real-time mental health platform across mobile applications, web portals, and backend infrastructure.",
    highlights: [
      "Led technical development across Android/iOS mobile apps, counsellor web portal, and admin portal.",
      "Integrated Agora for low-latency real-time chat, audio, and video sessions.",
      "Managed Docker configurations, cloud deployment, and app store release cycles.",
    ],
    technologies: [
      "React Native",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Agora",
      "Docker",
    ],
  },
  {
    period: "November 2024 – May 2026",
    role: "Software Engineer",
    companyOrContext: "Scintillate Alliance Private Limited",
    location: "Bengaluru, India",
    description:
      "Engineered web, mobile, and AI-powered products end-to-end, including Learnese, DingDong Digital, Mastant India, HuboMed, FG Academie, and EMI Prime.",
    highlights: [
      "Built full-stack web and mobile apps using Next.js, React Native, and Node.js.",
      "Integrated OpenAI, Gemini, and OpenRouter APIs for production business workflows.",
      "Delivered multi-role platforms, payment integrations (Mollie), and custom media services.",
    ],
    technologies: [
      "Next.js",
      "React Native",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Docker",
      "OpenAI",
      "Gemini",
    ],
  },
  {
    period: "November 2023 – August 2024",
    role: "Software Developer",
    companyOrContext: "Scintillate Alliance Private Limited",
    location: "Bengaluru, India",
    description:
      "Handled backend architecture, database modeling, and server infrastructure for the Ground Zero campaign management ERP platform.",
    highlights: [
      "Developed backend REST APIs for campaign planning, tracking, and resource allocation.",
      "Configured Linux VPS servers, IP bindings, database backups, and security hardening.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Linux VPS",
    ],
  },
  {
    period: "July 2022 – June 2023",
    role: "Full Stack Developer Intern",
    companyOrContext: "Brototype",
    location: "Kochi, India",
    description:
      "Built early full-stack projects while developing strong practical foundations in modern web development and software architecture.",
    highlights: [
      "Engineered end-to-end full-stack web applications with React, Node.js, and MongoDB.",
      "Built hands-on experience in REST API design, state management, and database schemas.",
    ],
    technologies: [
      "React",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
];

export const CURRENT_COLLABORATION = {
  context: "Digital work and project collaboration",
  company: "Brandsly",
  status: "Current Collaboration",
  description:
    "Collaborating on a range of digital products, web applications, and technical services.",
};

export const PRINCIPLES: PrincipleItem[] = [
  {
    number: "01",
    title: "Keep learning",
    description:
      "Exploring new tools and technologies to find practical ways to apply them.",
  },
  {
    number: "02",
    title: "Build things that work",
    description:
      "Making products useful, clear, and reliable rather than just visually complex.",
  },
  {
    number: "03",
    title: "Take responsibility",
    description:
      "Involved in the complete cycle—from understanding an idea to getting it into users' hands.",
  },
  {
    number: "04",
    title: "Work together",
    description:
      "Valuing clear communication and accountability across both independent and team settings.",
  },
];

export const EDUCATION: EducationItem = {
  qualification: "Bachelor's in Electronics",
  institution: "College of Applied Science, Nattika",
  location: "Kerala, India",
  period: "July 2019 – April 2022",
  cgpa: "6.5",
};

export const SKILL_GROUPS: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "HTML",
      "Vite",
      "Redux Toolkit",
      "React Router",
      "Bootstrap 5",
      "Framer Motion",
    ],
  },
  {
    category: "Mobile",
    skills: ["React Native", "Expo", "React Navigation", "Kotlin (basics)"],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Joi",
      "Express Validator",
      "Nodemailer",
    ],
  },
  {
    category: "Database",
    skills: ["MongoDB", "Firebase"],
  },
  {
    category: "AI Integrations",
    skills: ["OpenAI", "Gemini", "OpenRouter"],
  },
  {
    category: "Real-Time Communication",
    skills: ["Agora"],
  },
  {
    category: "Cloud & Infrastructure",
    skills: [
      "Docker",
      "VPS Management",
      "Google Cloud Platform",
      "AWS EC2",
      "Render",
      "Netlify",
    ],
  },
  {
    category: "UI & Visualization",
    skills: ["Figma", "Chart.js", "Recharts"],
  },
  {
    category: "Additional Capabilities",
    skills: [
      "Sentry",
      "Axios",
      "PDF/PPT Generation",
      "CSV/Excel Processing",
      "Git",
      "DSA",
    ],
  },
];
