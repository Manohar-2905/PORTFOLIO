// ================================================================
// MANOHAR KUMAR — PORTFOLIO DATA REPOSITORY
// Single source of truth for projects, skills, career & hackathons
// ================================================================

export const NAV_LINKS = [
  "About",
  "Experience",
  "Skills",
  "Projects",
  "Hackathons",
  "Contact"
]

export const MARQUEE_TECH_1 = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React.js",
  "Redux Toolkit",
  "Node.js",
  "Express.js",
  "FastAPI",
  "Python",
  "MongoDB Atlas",
  "MySQL",
  "Tailwind CSS",
  "Three.js"
]

export const MARQUEE_TECH_2 = [
  "RESTful APIs",
  "JWT Authentication",
  "Gemini AI",
  "LLM Architectures",
  "RAG Systems",
  "Cloudinary",
  "Vercel",
  "Render",
  "Git & GitHub",
  "Postman",
  "VS Code",
  "Docker Basics"
]

export const HERO_ROLES = [
  "Full Stack Developer",
  "AI/ML Enthusiast",
  "Problem Solver",
  "Freelancer",
  "Open Source Contributor"
]

export const HERO_STATS = [
  { value: "250+", label: "DSA Solved", icon: "🧠" },
  { value: "5+", label: "Production Apps", icon: "🚀" },
  { value: "2", label: "Enterprise Clients", icon: "💼" },
  { value: "8.5", label: "CGPA @ GGSIPU", icon: "🎓" },
  { value: "3+", label: "Yrs Coding", icon: "⚡" }
]

export const SKILL_CATEGORIES = [
  {
    icon: "💛",
    title: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "C++", "Java", "Python", "SQL"]
  },
  {
    icon: "⚛️",
    title: "Frontend Engineering",
    items: ["React.js", "Redux Toolkit", "HTML5", "CSS3", "Tailwind CSS", "Three.js / R3F", "Framer Motion", "GSAP"]
  },
  {
    icon: "🟢",
    title: "Backend & Systems",
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "MVC Architecture", "Async Microservices", "WebSockets"]
  },
  {
    icon: "🗄️",
    title: "Databases & Storage",
    items: ["MongoDB", "MongoDB Atlas", "MySQL", "Indexing & Aggregations", "Cloudinary"]
  },
  {
    icon: "🤖",
    title: "AI & Machine Learning",
    items: ["Gemini AI", "LLM Integration", "RAG Pipelines", "Prompt Engineering", "Multi-Agent Systems", "API Orchestration"]
  },
  {
    icon: "🔐",
    title: "Security & DevOps",
    items: ["JWT Auth", "Bcrypt", "Role-Based Access Control (RBAC)", "Zoho Mail API", "Nodemailer", "Multer", "SSL / DNS Management"]
  },
  {
    icon: "🚀",
    title: "Cloud & Deployment",
    items: ["Vercel", "Render", "cPanel", "DNS Config (MX, SPF, DKIM)", "CI/CD Pipelines"]
  },
  {
    icon: "🛠️",
    title: "Developer Tooling",
    items: ["Git", "GitHub", "Postman", "VS Code", "GitHub Copilot", "Agile / Scrum", "Vite"]
  },
  {
    icon: "🧠",
    title: "Core Computer Science",
    items: ["Data Structures", "Algorithms", "Object-Oriented Programming (OOP)", "DBMS", "Time & Space Complexity Analysis"]
  }
]

export const TECH_PROFICIENCY = [
  { name: "JavaScript / React.js", val: 92, color: "#F7DF1E" },
  { name: "Node.js / Express.js", val: 86, color: "#339933" },
  { name: "Python / FastAPI", val: 78, color: "#3776AB" },
  { name: "C++ (Data Structures)", val: 72, color: "#00599C" },
  { name: "MongoDB / MySQL", val: 84, color: "#47A248" }
]

export const DSA_TOPICS = [
  "Arrays",
  "Trees",
  "Recursion",
  "Sliding Window",
  "Greedy Algorithms",
  "Dynamic Programming",
  "Linked Lists",
  "Graphs",
  "Heaps",
  "Binary Search"
]

export const CAREER_TIMELINE = [
  {
    year: "2023",
    role: "Started B.Tech in Information Technology",
    org: "Guru Gobind Singh Indraprastha University (GGSIPU), Delhi",
    highlight: "Maintained 8.5 CGPA with strong focus on Data Structures & Algorithms."
  },
  {
    year: "Jun 2025 – Jul 2025",
    role: "Frontend Developer Intern",
    org: "Coding Bits",
    highlight: "Engineered scalable, reusable React components and improved cross-browser performance in an Agile workflow."
  },
  {
    year: "Nov 2025 – Jan 2026",
    role: "Freelance Full-Stack Developer",
    org: "Self-Employed (2 Production Deployments)",
    highlight: "Built end-to-end MERN applications with RBAC, secure auth, Cloudinary, Zoho Mail, and full production SSL/DNS setup."
  },
  {
    year: "Jan 2026 – Present",
    role: "Software Developer Intern",
    org: "WinProFX",
    highlight: "Developing multi-step broker onboarding & KYC integration flows with React, TypeScript, and high-performance UI systems."
  }
]

export const EXPERIENCES = [
  {
    role: "Software Developer Intern",
    company: "WinProFX",
    period: "Jan 2026 – Present",
    badge: "Current · Enterprise",
    color: "#3B82F6",
    points: [
      "Architected multi-step broker onboarding and KYC integration flows utilizing React, TypeScript, and Tailwind CSS for major platforms (Exness & WinProFX).",
      "Engineered high-performance, accessible UI components (fluid slider controls, animated verification modals, custom dropdowns) improving user onboarding retention.",
      "Implemented complex asynchronous client verification, state hydration, and secure authenticated route guards."
    ]
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Independent Freelance",
    period: "Nov 2025 – Jan 2026",
    badge: "Production · 2 Clients",
    color: "#8B5CF6",
    points: [
      "Dasgupta Maiti & Associates (Kolkata): Built enterprise legal portal with MERN stack, JWT/RBAC security, Cloudinary file vault, Zoho Mail API, and full SSL/DNS launch.",
      "Yashoda Bhawan (Jharkhand): Developed hotel management dashboard with automated booking calendar, custom database indexing, and real-time revenue analytics."
    ]
  },
  {
    role: "Frontend Developer Intern",
    company: "Coding Bits",
    period: "Jun 2025 – Jul 2025",
    badge: "Internship",
    color: "#38BDF8",
    points: [
      "Engineered modular, reusable React component libraries and integrated third-party RESTful APIs.",
      "Conducted Lighthouse performance audits, slashing initial bundle load times by 25%.",
      "Participated in daily Agile standups, code review sessions, and sprint retro meetings."
    ]
  }
]

export const PROJECTS = [
  {
    num: "01",
    title: "Studify Hub",
    type: "Full Stack · Web App",
    tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "Code Editor API", "Tailwind CSS"],
    desc: "Student productivity platform with integrated lightweight browser IDE, code compiler, study timer, and workflow automation. Modular client-side architecture that slashed routine manual setup by 30%.",
    highlights: [
      "Integrated lightweight browser IDE with syntax highlighting and instant multi-language execution",
      "Built Pomodoro study timer, task tracker, and developer quick-reference utilities",
      "Modular client-side architecture that slashed routine manual setup by 30%"
    ],
    color: "#8B5CF6",
    imgs: ["/photos/studify-main.png", "/photos/studify-sub1.png", "/photos/studify-sub2.png"],
    live: "https://manohar-2905.github.io/StudifyHub/",
    github: "https://github.com/Manohar-2905/StudifyHub"
  },
  {
    num: "02",
    title: "Dasgupta Maiti Portal",
    type: "MERN · Enterprise Freelance",
    tech: ["React", "Node.js", "Express", "MongoDB Atlas", "JWT Auth", "Cloudinary", "Nodemailer", "Zoho Mail API"],
    desc: "Secure enterprise portal for a prominent Kolkata law firm — featuring Role-Based Access Control (RBAC), Cloudinary media vault, Zoho Mail transactional notifications, and full production SSL + DNS configuration.",
    highlights: [
      "Role-Based Access Control (RBAC) separating clients, associate lawyers, and administrators",
      "Secure document and case management with Cloudinary cloud storage and instant previews",
      "Transactional client notifications via Zoho Mail API & Nodemailer integration"
    ],
    color: "#EC4899",
    imgs: ["/photos/dasgupta-main.png", "/photos/dasgupta-sub1.png", "/photos/dasgupta-sub2.png"],
    live: "https://dasguptamaitiassociates.com/",
    github: "https://github.com/Manohar-2905/CAwebsite1"
  },
  {
    num: "03",
    title: "Yashoda Bhawan System",
    type: "Full Stack · Commercial Freelance",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "JWT"],
    desc: "Comprehensive hotel booking & property management system with real-time room availability matrix, guest billing invoice generator, and optimized MongoDB aggregation pipelines.",
    highlights: [
      "Real-time room availability matrix and reservation calendar management",
      "Optimized MongoDB indexing and aggregation pipelines for monthly reporting analytics",
      "Streamlined guest check-in/check-out workflow with instant automated invoice generation"
    ],
    color: "#3B82F6",
    imgs: ["/photos/yashoda-main.png", "/photos/yashoda-sub1.png", "/photos/yashoda-sub2.png"],
    live: "https://yashodabhawan.in/",
    github: "https://github.com/Manohar-2905/HMS"
  },
  {
    num: "04",
    title: "Bank Statement Processor",
    type: "Python · Automation Daemon",
    tech: ["Python", "Gmail API", "Hashlib (SHA-256)", "macOS launchd", "OAuth 2.0"],
    desc: "Autonomous background daemon that monitors Gmail inbox attachments, classifies bank statements, verifies SHA-256 cryptographic hashes to eliminate duplicates, and categorizes financial documents with 95% reduced manual effort.",
    highlights: [
      "Autonomous background daemon running via system launchd with OAuth 2.0 security",
      "SHA-256 cryptographic checksum hashing preventing duplicate statement uploads",
      "Automated extraction, classification, and organization cutting manual work by 95%"
    ],
    color: "#38BDF8",
    imgs: ["/photos/bankAutomate.png", "/photos/backAutomate1.png"],
    live: "https://drive.google.com/drive/folders/1FFbw6AWhhSe51KMzEjFmuqonHnsIlvnA?usp=drive_link",
    github: "https://github.com/Manohar-2905/EmailAutomate"
  },
  {
    num: "05",
    title: "AI Project Estimator",
    type: "AI/ML · Multi-Agent System",
    tech: ["FastAPI", "React", "Gemini AI 1.5", "MongoDB", "Tailwind CSS", "Async Engine"],
    desc: "Multi-agent AI architecture intelligence system that parses public GitHub repositories, analyzes dependency graphs & code complexity, and generates structured sprint timelines & cost estimation reports.",
    highlights: [
      "Repo Intelligence engine parsing dependencies, code complexity, and framework metrics",
      "Google Gemini 1.5 Pro integration for structured sprint planning & cost estimation",
      "Asynchronous FastAPI backend streaming real-time analysis steps to React frontend"
    ],
    color: "#2DD4BF",
    imgs: ["/photos/ai-estimator-main.png", "/photos/ai-estimator-sub1.png", "/photos/ai-estimator-sub2.png"],
    live: "https://software-cost-esstimator-frontend.vercel.app/",
    github: "https://github.com/Manohar-2905/SoftwareCost_esstimator_frontend"
  }
]

export const HACKATHONS = [
  {
    icon: "🚀",
    medal: "#C0C0C0",
    title: "HACKHAZARDS '25",
    event: "The NAMESPACE Community",
    date: "April 2025",
    role: "Team Lead · CODESYNC",
    built: "High-impact tech project tackling automated developer workflows",
    result: "Honorable Participant",
    img: "/photos/hackhazards-cert.png"
  },
  {
    icon: "🧠",
    medal: "#C0C0C0",
    title: "CreaTech 2026",
    event: "Larsen & Toubro Limited (L&T)",
    date: "2026",
    role: "Team visionx",
    built: "Aptitude & Technical Engineering Assessment",
    result: "Qualified Participant",
    img: "/photos/createch-cert.png"
  }
]

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/Manohar-2905",
    handle: "github/Manohar-2905"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/manohar-kumar-661981294/",
    handle: "linkedin/in/manohar-kumar"
  },
  {
    name: "Email",
    url: "mailto:manoharkumar6206@gmail.com",
    handle: "manoharkumar6206@gmail.com"
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/916206293136?text=Hi%20Manohar,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
    handle: "+91 6206293136"
  }
]
