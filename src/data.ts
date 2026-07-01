import { Project, EducationItem, ExperienceItem, ServiceItem, SkillCategory } from "./types";

export const PERSONAL_DETAILS = {
  fullName: "OM MANOJ PATIL",
  subtitle: "Software Developer • UI/UX Designer • AI Engineer • Entrepreneur",
  description: "Building intelligent digital experiences using AI, modern web technologies, and exceptional user experience design. Passionate about turning innovative ideas into scalable software products.",
  profileImage: "https://i.ibb.co/mWwMsCp/entity-PP.jpg",
  bio: "My name is Om Manoj Patil. I am a UI/UX Designer, Vibe Coder, Software Developer, and a third-year Bachelor of Engineering (Information Technology) student. I also work as a scriptwriter, creating engaging scripts for content creators, and have over two years of experience in content management for streamers. My career goal is to become a successful entrepreneur by building and leading my own software company while continuing to grow as a developer. What sets me apart is my ability to learn quickly, my strong work ethic, and my never-give-up attitude.",
  stats: [
    { label: "Hackathons Participated", value: "3+" },
    { label: "Completed Projects", value: "5+" },
    { label: "Years Experience", value: "2+" },
    { label: "Academic CGPA", value: "8+" },
    { label: "Focus Areas", value: "AI Developer" },
    { label: "Design Expertise", value: "UI/UX Designer" }
  ],
  socials: {
    github: "https://github.com/patilom162006-rgb",
    linkedin: "https://www.linkedin.com/in/om-patil-8246163b6",
    instagram: "https://www.instagram.com/_its_just.om",
    email: "patilom162006@gmail.com",
    phone: "+91 9004440204",
    discord: "entity_jod"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "ecosort-ai",
    title: "EcoSort AI",
    description: "An AI-powered waste management platform designed to automate and enhance eco-friendly waste recycling.",
    features: [
      "AI waste scanning & recognition",
      "Interactive user dashboard for metrics",
      "Collector interface for efficient routing",
      "Dynamic reward calculations",
      "Partner coupons and redemption system",
      "On-demand pickup scheduling system"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Gemini API", "Framer Motion"],
    liveUrl: "https://eco-sort-ai-ochre.vercel.app",
    image: "/images/ecosort_ai_showcase_1782909271116.jpg"
  },
  {
    id: "laptop-comparison",
    title: "Laptop Comparison Platform",
    description: "An interactive, smart recommendation engine and comparison platform to help users pick the perfect laptop.",
    features: [
      "Multi-spec side-by-side comparison",
      "Smart recommendation system based on needs",
      "Performance and value scoring algorithm",
      "Interactive filtering and sorting metrics"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/patilom162006-rgb/Laptop_Om",
    image: "/images/laptop_comparison_showcase_1782909287807.jpg"
  },
  {
    id: "zenchi-gaming",
    title: "Zenchi Gaming",
    description: "A premium gaming portal that aggregates multiple interactive games in one beautifully crafted modern workspace.",
    features: [
      "Sleek arcade game lobby UI",
      "Interactive modern mini-games",
      "In-browser score tracking",
      "Immersive cyberpunk lighting and visuals"
    ],
    techStack: ["React", "CSS Variables", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://zenchi-nu.vercel.app",
    image: "/images/zenchi_gaming_showcase_1782909306171.jpg"
  },
  {
    id: "sustain-assist-ai",
    title: "Sustain Assist AI",
    description: "An intelligent environmental chatbot assistant for plastic recycling and general environmental awareness.",
    features: [
      "AI recycling advisor bot",
      "Interactive environmental checklist",
      "Plastic footprint calculation modules",
      "Resource directories and guide maps"
    ],
    techStack: ["React", "TypeScript", "Gemini API", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://sustain-assist-pro.lovable.app",
    image: "/images/sustain_assist_ai_showcase_1782909329405.jpg"
  },
  {
    id: "event-management",
    title: "Event Management Platform",
    description: "A comprehensive event planning, ticket reservation, and scheduling solution.",
    features: [
      "Dynamic event creation and management dashboards",
      "Secure scheduling & RSVP capabilities",
      "Interactive calendar views",
      "Detailed event analytics reporting"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/patilom162006-rgb/Event_portfolio",
    image: "/images/event_management_showcase_1782909361232.jpg"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "engg",
    institution: "A. C. Patil College of Engineering",
    boardOrUniversity: "Mumbai University",
    degree: "Bachelor of Engineering",
    field: "Information Technology",
    period: "2024 – 2028",
    status: "Third Year (Current)",
    performance: "CGPA: 8+"
  },
  {
    id: "hsc",
    institution: "Maharashtra Board",
    boardOrUniversity: "State Board",
    degree: "12th Standard (HSC)",
    period: "2022 – 2024",
    performance: "Percentage: 74%"
  },
  {
    id: "ssc",
    institution: "Maharashtra Board",
    boardOrUniversity: "State Board",
    degree: "10th Standard (SSC)",
    period: "2020 – 2022",
    performance: "Percentage: 77%"
  }
];

export const HACKATHONS = [
  { title: "Pune Offline Hackathon", result: "Participant & Exhibitor" },
  { title: "Mumbai Online Hackathon (First)", result: "Finalist & Developer" },
  { title: "Mumbai Online Hackathon (Second)", result: "Innovative Idea Presentation" }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp1",
    role: "Software Developer",
    company: "Freelance & Local Business Solutions",
    period: "2024 – Present",
    description: [
      "Build websites and applications for local businesses to drive digital engagement.",
      "Create high-fidelity, responsive and intuitive user experiences using modern frameworks.",
      "Develop customizable software architectures that easily scale as business grows.",
      "Deploy fully functional, secure, and production-ready applications with zero downtime.",
      "Work within cross-functional teams to brainstorm and build scalable modern products."
    ]
  },
  {
    id: "exp2",
    role: "Content Management",
    company: "8bitHeadFlicker",
    period: "Jan 2025 – Present",
    type: "Volunteer",
    description: [
      "Formulate custom script writing, generating engaging scripts tailored to diverse target audiences.",
      "Direct creative video strategy, idea research, community engagement, and brand outreach.",
      "Lead operations and schedules across YouTube, Instagram, and Discord channels.",
      "Given 60+ shorts ideas and clipps cutting for optimized viral performance.",
      "Contributed production and creative coordination in 5+ premium content videos/vlogs."
    ],
    links: {
      youtube: "https://www.youtube.com/@8bitHeadFlickerr",
      instagram: "https://instagram.com/8bit_headflicker",
      discord: "https://discord.gg/nGGn5vDPz"
    },
    highlights: "60+ shorts ideas | 5+ content videos/vlogs"
  },
  {
    id: "exp3",
    role: "Content Member in Staff",
    company: "8btrusherwow",
    period: "Jan 2025 – Present",
    type: "Volunteer",
    description: [
      "Contribute key creative inputs and planning within the core streamer staff team.",
      "Given active creative contributions and video inputs in 3+ major shorts videos.",
      "Coordinate staff, editors, and community moderators to optimize content pipeline and output.",
      "Foster highly engaging communication inside Discord networks and streamer hubs."
    ],
    links: {
      youtube: "https://www.youtube.com/@8bitRusherwOw",
      instagram: "https://instagram.com/8bit_rusherwow",
      discord: "https://discord.gg/EbC9FnPnr"
    },
    highlights: "Inputs in 3+ shorts videos"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "dev",
    title: "Development",
    skills: ["Full Stack Development", "Website Development", "Mobile Apps", "SaaS Development", "API Integration", "Responsive Design"]
  },
  {
    id: "uiux",
    title: "UI/UX",
    skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "User Experience"]
  },
  {
    id: "ai",
    title: "AI & Automation",
    skills: ["AI Prompt Engineering", "AI Automation", "AI Integration", "AI Training", "AI Workflow Design"]
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    skills: ["VS Code", "Git", "GitHub"]
  },
  {
    id: "content",
    title: "Content & Media",
    skills: ["Content Strategy", "Video Analysis", "Clip Editing", "Social Media", "Staff Management"]
  },
  {
    id: "soft",
    title: "Soft Skills",
    skills: ["Leadership", "Fast Learner", "Communication", "Problem Solving", "Entrepreneur Mindset"]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "srv1",
    title: "UI/UX Design",
    description: "Crafting wireframes, prototypes, and user interfaces that maximize readability, visual appeal, and conversion rate.",
    tags: ["Figma", "Wireframes", "Brand Guidelines"]
  },
  {
    id: "srv2",
    title: "Website Design",
    description: "Designing modern, high-contrast grid layouts and layouts inspired by global award winning editorial designs.",
    tags: ["Visual rhythm", "Aesthetic layout", "Web templates"]
  },
  {
    id: "srv3",
    title: "Website Development",
    description: "Developing blazing fast, production-ready web applications using modern, interactive technologies.",
    tags: ["React", "TypeScript", "Performance"]
  },
  {
    id: "srv4",
    title: "Mobile App Development",
    description: "Creating highly integrated and optimized responsive web apps tailored for smooth native feel on mobile screens.",
    tags: ["React Native", "Tailwind", "Responsive Design"]
  },
  {
    id: "srv5",
    title: "AI Integration & Automation",
    description: "Connecting state-of-the-art Large Language Models and automated API pipelines with web apps to streamline user actions.",
    tags: ["Gemini API", "Automation", "Workflows"]
  },
  {
    id: "srv6",
    title: "SaaS Development",
    description: "Structuring full software-as-a-service structures from database handling, authentication to elegant billing and telemetry dashboards.",
    tags: ["Dashboard", "API scaling", "Robustness"]
  },
  {
    id: "srv7",
    title: "Content & Social Strategy",
    description: "Optimizing video strategy, content pipeline planning, streaming coordination, and community administration.",
    tags: ["YouTube", "Kick", "Instagram", "Discord"]
  },
  {
    id: "srv8",
    title: "Technical Consultation",
    description: "Providing insights on state selection, cloud integrations, and system architecture planning for optimal performance.",
    tags: ["System design", "Agile", "Entrepreneurship"]
  }
];

export const WHY_CHOOSE_ME = [
  { title: "Fast Learner", description: "Quickly adapt to new codebases, architectures, and emerging technologies with natural ease." },
  { title: "Innovative Thinker", description: "Approaching standard coding challenges with highly creative and out-of-the-box user experience paradigms." },
  { title: "Entrepreneurial Mindset", description: "Weighing product features, monetization, and UX parameters with a strategic business perspective." },
  { title: "Team Player", description: "Highly collaborative, open to feedback, and driven to help team members succeed during crunch hackathons." },
  { title: "AI Specialist", description: "Proficient in AI prompt engineering, prompt optimization, workflow automations, and LLM integrations." },
  { title: "Creative Designer", description: "Bridging the typical gap between engineering limitations and gorgeous, bold, brand-driven graphic guidelines." },
  { title: "Reliable Developer", description: "Committed to robust code quality, responsive layouts, thorough types, and secure live deployments." },
  { title: "Strong Problem Solver", description: "Possessing an unyielding, resilient work ethic and a direct 'never give up' methodology." }
];

export const TECH_MARQUEE = [
  "React", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Next.js", "AI Automation", "Figma", "UI/UX", "Vibe Coding", "Gemini API", "SaaS Development", "Git", "Node.js"
];
