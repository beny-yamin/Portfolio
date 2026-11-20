import { ProfileConfig, Project } from '../types/portfolio';

export const fallbackProfile: ProfileConfig = {
  fullName: "Binyam Kebru",
  portraitUrl: "/image.png",
  headline: "Computer Science Student & Software Systems Builder",
  subheadline: "Crafting resilient full-stack architectures, high-performance web applications, and intuitive digital tools from Addis Ababa to the world.",
  location: "Addis Ababa, Ethiopia",
  timezone: "Africa/Addis_Ababa",
  availabilityStatus: "Open for Software Engineering Internships & Collaborations",
  scrollManifestoLines: [
    "Software is more than syntax—it is a quiet discipline of clarity, patience, and deliberate purpose.",
    "I don't look for shortcuts; I seek to understand how systems behave from the raw foundation to the user's touch.",
    "True engineering isn't about complexity for its own sake—it's about removing friction and honoring human attention.",
    "Every line committed today is a foundation stone for what tomorrow can become."
  ],
  aboutStory: [
    "My journey into technology began not in an established tech hub, but in Addis Ababa, driven by pure curiosity and the wonder of how a blank screen could transform into an interactive tool through code.",
    "Without formal mentors early on, I learned to read source code, dissect documentation, and build every tool from scratch—learning full-stack engineering through direct experimentation and continuous debugging.",
    "After completing Grade 12 with distinction and earning certification in the 5 Million Ethiopian Coders initiative, I entered university to study Computer Science, aiming to combine rigorous mathematical principles with modern software craftsmanship.",
    "Today, I build web applications that emphasize real performance, clean architecture, and delightful tactile experiences. I am fascinated by distributed systems, intuitive interfaces, and the potential of software to solve everyday logistical challenges."
  ],
  innerValues: [
    {
      title: "First-Principles Curiosity",
      principle: "Understand Before Abstracting",
      description: "Dissecting how databases execute queries, how browsers paint frames, and how networks transmit packets to build without blind assumptions."
    },
    {
      title: "Quiet Stoic Discipline",
      principle: "Consistency Over Motivation",
      description: "Showing up every day with steady dedication, writing maintainable code, and maintaining composure through challenging bugs and complex constraints."
    },
    {
      title: "Empathetic Craftsmanship",
      principle: "Respect The User's Attention",
      description: "Prioritizing snappy response times, offline-resilience, and thoughtful ergonomics so technology feels like a natural extension of thought."
    }
  ],
  journeyMilestones: [
    {
      year: "2022",
      title: "The Spark & Self-Taught Foundations",
      story: "Wrote my very first lines of HTML, CSS, and JavaScript. Built dozens of small browser utilities, learning DOM mechanics and computational logic from first principles.",
      tags: ["HTML5", "CSS3", "JavaScript", "Algorithms"]
    },
    {
      year: "2023",
      title: "Full-Stack Architecture & Databases",
      story: "Transitioned to building complete backend APIs with Node.js and Express. Integrated relational and NoSQL databases, mastering state management, REST endpoints, and authentication.",
      tags: ["Node.js", "Express", "MongoDB", "REST APIs"]
    },
    {
      year: "2024",
      title: "National Recognition & 5M Coders Milestone",
      story: "Completed Grade 12 with high academic standing and graduated with honors from the 5 Million Ethiopian Coders initiative, consolidating full-stack programming proficiency.",
      tags: ["5M Coders", "Web Development", "Database Systems"]
    },
    {
      year: "2025 - Present",
      title: "University Computer Science & Scaled Engineering",
      story: "Enrolled in university Computer Science to master algorithms, data structures, and operating systems while designing real-world PWAs, distributed systems, and spatial interfaces.",
      tags: ["Computer Science", "React", "TypeScript", "Three.js"]
    }
  ],
  visionPillars: [
    {
      phase: "Current Horizon",
      title: "Mastering Core Computer Science Foundations",
      description: "Deepening knowledge of memory management, algorithmic complexity, distributed consensus, and clean software architecture.",
      horizon: "2025"
    },
    {
      phase: "Emerging Frontier",
      title: "Practical AI & Resilient Local Infrastructure",
      description: "Bridging software engineering with applied machine learning to solve agricultural logistics, local commerce bottlenecks, and digital access in emerging markets.",
      horizon: "2026 - 2027"
    },
    {
      phase: "Long-Term Mission",
      title: "Building Global High-Impact Technology",
      description: "Creating software products that empower creators, researchers, and communities worldwide with frictionless, beautiful digital infrastructure.",
      horizon: "2028 & Beyond"
    }
  ],
  opportunities: [
    {
      title: "Software Engineering Internships",
      description: "Eager to contribute high-quality frontend or full-stack code to ambitious engineering teams.",
      active: true,
      tag: "Internship"
    },
    {
      title: "Startup Co-Building & Full-Stack Projects",
      description: "Ready to pair up with innovative founders to build MVPs with speed, reliability, and polish.",
      active: true,
      tag: "Collab"
    },
    {
      title: "Applied AI & Civic Research",
      description: "Open to research collaborations exploring AI applications in agriculture, health, and education.",
      active: true,
      tag: "Research"
    },
    {
      title: "Open-Source Engineering",
      description: "Contributing to developer tooling, accessible component libraries, and web infrastructure.",
      active: true,
      tag: "Open Source"
    }
  ],
  socials: {
    github: "https://github.com/biniyamkibruheramo-boop",
    linkedin: "https://linkedin.com/in/biniyam-kibru-heramo",
    telegram: "https://t.me/biniyamkibru",
    email: "biniyamkibruheramo@gmail.com",
    phone: "+251 900 000 000"
  }
};

export const fallbackProjects: Project[] = [
  {
    _id: "proj-1",
    title: "CampusDine",
    tagline: "High-Concurrency Cafeteria Ordering & Live Queue Management",
    description: "An end-to-end digital ordering platform designed to eliminate physical queue congestion in university dining facilities with real-time order tracking and kitchen display feeds.",
    category: "Full-Stack Systems",
    accentColor: "cyan",
    orderIndex: 1,
    techStack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    highlights: [
      "Sub-80ms websocket queue updates across 500+ active student sessions",
      "Dynamic ticket dispatching algorithm balancing kitchen load",
      "Offline resilience with instant local caching"
    ],
    previewType: "cafeteria-demo",
    thumbnailUrl: "/Biniyam Kibru.jpg",
    liveUrl: "https://campusdine.onrender.com",
    githubUrl: "https://github.com/biniyamkibruheramo-boop/campus-dine",
    metrics: [
      { label: "Queue Reduction", value: "65%" },
      { label: "Avg Latency", value: "<80ms" },
      { label: "Peak Sessions", value: "1.2k+" }
    ],
    story: {
      problem: "University cafeteria lines often caused 40+ minute delays during lunch peaks, causing missed lectures and chaotic kitchen bottlenecks.",
      solution: "Engineered a lightweight mobile-first web app allowing students to order from anywhere on campus, paired with a real-time kitchen orchestration display.",
      architecture: "Node.js / Express microservice connected to MongoDB Atlas, with event-driven state updates to React clients over WebSockets."
    }
  },
  {
    _id: "proj-2",
    title: "PulseTrack",
    tagline: "Zero-Latency Offline-First Expense & Cashflow Intelligence PWA",
    description: "A progressive web application built for instant transaction recording with zero network dependency, auto-categorization, and intuitive visual spending velocity breakdowns.",
    category: "PWAs & Productivity",
    accentColor: "amber",
    orderIndex: 2,
    techStack: ["TypeScript", "React", "IndexedDB", "Tailwind CSS", "Service Workers"],
    highlights: [
      "100% functional without internet connectivity using client-side IndexedDB",
      "Instant background synchronization upon network reconnection",
      "Zero-dependency mathematical visualization engine"
    ],
    previewType: "expense-chart",
    thumbnailUrl: "/Biniyam Kibru.jpg",
    liveUrl: "https://pulsetrack.onrender.com",
    githubUrl: "https://github.com/biniyamkibruheramo-boop/pulse-track",
    metrics: [
      { label: "Offline Sync", value: "100%" },
      { label: "Bundle Size", value: "48 KB" },
      { label: "Time-to-Interactive", value: "0.2s" }
    ],
    story: {
      problem: "Most finance tracking apps require constant cellular connections and feel bloated, making daily logging slow and cumbersome on mobile.",
      solution: "Crafted a snappy PWA with an ultra-lightweight client bundle that stores data locally first and renders responsive financial analytics on any device.",
      architecture: "React + TypeScript frontend utilizing the browser's native IndexedDB API with custom synchronization reconciliation algorithms."
    }
  },
  {
    _id: "proj-3",
    title: "HabitOrbit",
    tagline: "Cognitive Habit Intelligence & Consistency Tracker",
    description: "A minimalist daily habit tracker applying spatial heatmaps and streak velocity metrics to help students and developers sustain rigorous daily routines.",
    category: "PWAs & Productivity",
    accentColor: "emerald",
    orderIndex: 3,
    techStack: ["React", "Framer Motion", "Tailwind CSS", "Local Storage API"],
    highlights: [
      "Interactive 52-week activity contribution matrix",
      "Haptic and visual micro-rewards engineered for positive feedback loops",
      "Privacy-first architecture with all telemetry stored locally"
    ],
    previewType: "habit-grid",
    thumbnailUrl: "/Biniyam Kibru.jpg",
    liveUrl: "https://habitorbit.onrender.com",
    githubUrl: "https://github.com/biniyamkibruheramo-boop/habit-orbit",
    metrics: [
      { label: "Daily Retention", value: "91%" },
      { label: "Interaction FPS", value: "60fps" },
      { label: "Data Leakage", value: "0 bytes" }
    ],
    story: {
      problem: "Habit tracking apps often overwhelm users with complex dashboards, notifications, and subscription paywalls, leading to abandonment within 14 days.",
      solution: "Developed an elegant, distraction-free spatial tracker focused purely on visual streak momentum and daily friction reduction.",
      architecture: "Framer Motion physics engine powering fluid micro-interactions with persistent local state."
    }
  },
  {
    _id: "proj-4",
    title: "AuraDoc",
    tagline: "Ambient Markdown Knowledge Studio & Code Canvas",
    description: "A focused writing and technical documentation workspace featuring real-time syntax highlighting, live KaTeX math rendering, and multi-format export.",
    category: "Full-Stack Systems",
    accentColor: "violet",
    orderIndex: 4,
    techStack: ["React", "TypeScript", "PrismJS", "Tailwind CSS", "Web Workers"],
    highlights: [
      "Offloaded markdown parsing to Web Workers for stutter-free 120Hz typing",
      "Seamless export to PDF, HTML, and formatted clean Markdown",
      "Custom obsidian dark theme tailored for prolonged late-night coding"
    ],
    previewType: "markdown-live",
    thumbnailUrl: "/Biniyam Kibru.jpg",
    liveUrl: "https://auradoc.onrender.com",
    githubUrl: "https://github.com/biniyamkibruheramo-boop/aura-doc",
    metrics: [
      { label: "Parse Latency", value: "14ms" },
      { label: "Max Document Size", value: "2MB+" },
      { label: "Typing Lag", value: "0ms" }
    ],
    story: {
      problem: "Online editors often lag when processing long documents with code snippets and LaTeX formulas, breaking flow during technical writing.",
      solution: "Separated rendering and syntax tokenization into dedicated background Web Workers so typing remains instantaneous regardless of document length.",
      architecture: "Worker-thread AST compilation delivering sanitized DOM updates back to the React UI."
    }
  }
];
