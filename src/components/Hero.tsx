import { motion } from "motion/react";
import { Github, Linkedin, Instagram, Mail, ArrowUpRight, ShieldCheck, Download, Code, Sparkles, Smartphone, Award } from "lucide-react";
import { PERSONAL_DETAILS } from "../data";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const { fullName, subtitle, description, profileImage, socials } = PERSONAL_DETAILS;

  // Floating badge settings
  const badges = [
    { text: "AI", x: "12%", y: "15%", delay: 0.1 },
    { text: "UI/UX", x: "85%", y: "20%", delay: 0.3 },
    { text: "React", x: "5%", y: "60%", delay: 0.5 },
    { text: "Full Stack", x: "78%", y: "50%", delay: 0.2 },
    { text: "Developer", x: "80%", y: "80%", delay: 0.4 },
    { text: "Designer", x: "15%", y: "85%", delay: 0.6 },
    { text: "Entrepreneur", x: "45%", y: "90%", delay: 0.7 },
  ];

  const handleDownloadResume = () => {
    // Generate an in-memory mock text file representing a premium resume to provide a real download
    const resumeContent = `OM MANOJ PATIL (aka entity_jod)
Software Developer • UI/UX Designer • AI Engineer • Entrepreneur
Email: patilom162006@gmail.com | Phone: +91 9004440204
LinkedIn: https://www.linkedin.com/in/om-patil-8246163b6
GitHub: https://github.com/patilom162006-rgb

=============================
SUMMARY
=============================
Passionate IT Engineering student and Vibe Coder building intelligent web applications
with robust TypeScript architectures, AI automation integration, and award-winning UI/UX standards.

=============================
TECHNICAL SKILLS
=============================
- Front-End & Core: React, Next.js, TypeScript, Tailwind CSS, Framer Motion
- Back-End & Database: Node.js, Express, RESTful APIs, SQLite/Firestore
- AI & Automation: Gemini AI API, prompt optimization, workflow modeling
- Designer Tools: Figma, Adobe XD, Wireframing, Vector Asset Prototyping
- Systems: Git, VS Code, Unix terminal, Static deployment platforms

=============================
FEATURED PROJECTS
=============================
- EcoSort AI: waste recognition scanning portal and coupons engine.
- Sustain Assist AI: plastic recycling advisor chatbot.
- Laptop Comparison Platform: hardware decision helper tool.
- Zenchi Gaming: retro interactive arcade platform.

=============================
EXPERIENCE & POSITIONS
=============================
- Software Developer (2024 - Present): Building solutions for local businesses.
- Content Manager (2022 - Present): Streaming pipeline manager for 8bit streams.

=============================
EDUCATION
=============================
- Bachelor of Engineering (Information Technology), A. C. Patil College of Engineering, Mumbai University (2024 - 2028). CGPA: 8+ (current).
- HSC & SSC, Maharashtra State Board.
`;

    const blob = new Blob([resumeContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Om_Manoj_Patil_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 overflow-hidden grid-overlay"
    >
      {/* Blurred background glow elements */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full bg-neon-lime/10 blur-[100px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 md:w-[450px] md:h-[450px] rounded-full bg-deep-forest/50 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Side Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left select-none">
          {/* Subtle Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-3 py-1 bg-neon-lime/5 border border-neon-lime/30 rounded-none mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-neon-lime animate-spin-slow" />
            <span className="text-xs font-mono font-bold tracking-wider text-neon-lime uppercase">
              Vibe Coder // Entrepreneur
            </span>
          </motion.div>

          {/* Large Heading */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="headline-giant text-5xl sm:text-7xl md:text-8xl text-white font-accent font-black tracking-tighter"
            >
              OM MANOJ <span className="text-neon-lime block sm:inline">PATIL</span>
            </motion.h1>
          </div>

          {/* Aka indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-none mb-6 text-xs font-mono text-zinc-400 uppercase tracking-widest"
          >
            aka <span className="text-neon-lime font-bold">entity_jod</span>
          </motion.div>

          {/* Smaller subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base font-mono text-neon-lime/90 mb-6 font-semibold uppercase tracking-wider border-l-2 border-neon-lime pl-4"
          >
            {subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-zinc-400 text-base md:text-lg max-w-xl leading-relaxed mb-10"
          >
            {description}
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto"
          >
            <button
              onClick={() => onNavigate("projects")}
              className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider rounded-sm hover:bg-neon-lime transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-none group"
            >
              View Projects
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            <button
              onClick={() => onNavigate("contact")}
              className="px-8 py-4 bg-transparent text-white border border-white/20 font-bold uppercase tracking-wider rounded-sm hover:border-neon-lime hover:text-neon-lime transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              Contact Me
            </button>

            <button
              onClick={handleDownloadResume}
              className="px-8 py-4 bg-white/5 text-zinc-300 border border-white/10 hover:border-neon-lime hover:text-neon-lime font-bold uppercase tracking-wider rounded-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-5"
          >
            <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">Follow Me:</span>
            <div className="flex gap-4">
              <a 
                href={socials.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-zinc-400 hover:border-neon-lime hover:text-neon-lime hover:scale-105 transition-all duration-300"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-zinc-400 hover:border-neon-lime hover:text-neon-lime hover:scale-105 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-zinc-400 hover:border-neon-lime hover:text-neon-lime hover:scale-105 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={`mailto:${socials.email}`} 
                className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-zinc-400 hover:border-neon-lime hover:text-neon-lime hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side Visual Portrait */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px]">
            
            {/* Ambient Background Rotating Glow Ring - Sharp Square Grid Style */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-sm border-2 border-dashed border-neon-lime/20 pointer-events-none"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 rounded-sm border border-dotted border-white/5 pointer-events-none"
            />

            {/* Custom high-end frame overlay with abstract border shape */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full rounded-sm overflow-hidden glass-panel border border-white/10 p-2 shadow-2xl relative group"
            >
              {/* Corner tech lines */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-neon-lime z-20 opacity-100" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-neon-lime z-20 opacity-100" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-neon-lime z-20 opacity-100" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-neon-lime z-20 opacity-100" />

              <div className="w-full h-full rounded-sm overflow-hidden relative bg-near-black">
                {/* The beautiful portrait */}
                <img
                  src={profileImage}
                  alt={fullName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Grid Overlay inside portrait */}
                <div className="absolute inset-0 bg-gradient-to-t from-near-black via-transparent to-transparent opacity-80 pointer-events-none" />
                <div className="absolute inset-0 bg-neon-lime/5 mix-blend-overlay pointer-events-none" />
              </div>
            </motion.div>

            {/* Floating Skill Badges */}
            {badges.map((badge, idx) => (
              <motion.div
                key={idx}
                style={{ left: badge.x, top: badge.y }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: badge.delay, duration: 0.5 }}
                className="absolute"
              >
                <motion.div
                  animate={{ 
                    y: [0, idx % 2 === 0 ? -8 : 8, 0],
                    rotate: [0, idx % 2 === 0 ? 3 : -3, 0]
                  }}
                  transition={{ 
                    duration: 5 + idx, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="px-4 py-1.5 bg-near-black/95 text-white border border-neon-lime/30 text-xs font-mono rounded-none font-bold shadow-md shadow-neon-lime/5 tracking-wider hover:border-neon-lime hover:text-neon-lime hover:scale-105 transition-all duration-300 cursor-default select-none"
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-none bg-neon-lime mr-2 animate-ping" />
                  {badge.text}
                </motion.div>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
