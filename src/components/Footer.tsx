import { motion } from "motion/react";
import { Github, Linkedin, Instagram, Mail, ArrowUp } from "lucide-react";
import { PERSONAL_DETAILS } from "../data";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const { socials } = PERSONAL_DETAILS;

  const links = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Services", id: "services" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-near-black border-t border-white/5 pt-20 pb-10 overflow-hidden select-none">
      {/* Visual background lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-lime/25 to-transparent" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col">
        
        {/* Main top bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-16 border-b border-white/5">
          
          {/* Brand/Signature */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <h3 className="text-2xl font-black font-accent text-white tracking-widest uppercase mb-4 flex items-center gap-2">
              OM PATIL
            </h3>
            <p className="text-xs font-mono text-neon-lime font-bold uppercase tracking-widest mb-6">
              Software Developer • UI/UX Designer • AI Engineer
            </p>
            <p className="text-zinc-500 text-xs leading-relaxed max-w-xs font-light">
              Crafting state-of-the-art interactive websites, deep neural integrations, and pristine digital products.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <h4 className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase mb-6">
              Sitemap Navigation
            </h4>
            <div className="grid grid-cols-3 gap-y-3 gap-x-4 w-full">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="text-sm text-zinc-400 hover:text-neon-lime transition-colors duration-200 cursor-pointer text-left font-sans"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social connections */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase mb-6">
              Connect Channels
            </h4>
            <div className="flex gap-3">
              <a 
                href={socials.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 text-zinc-400 hover:text-neon-lime hover:border-neon-lime flex items-center justify-center transition-all duration-300"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 text-zinc-400 hover:text-neon-lime hover:border-neon-lime flex items-center justify-center transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 text-zinc-400 hover:text-neon-lime hover:border-neon-lime flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={`mailto:${socials.email}`} 
                className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 text-zinc-400 hover:text-neon-lime hover:border-neon-lime flex items-center justify-center transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Giant Typography & Copyright */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col items-center md:items-start select-none">
            {/* Giant signature backdrop text inspired by reference screen bottom "SNAP MASTER" */}
            <h1 className="headline-giant text-7xl sm:text-9xl md:text-[140px] tracking-tighter text-white/5 font-accent font-black leading-none uppercase">
              OM PATIL
            </h1>
            <p className="text-[10px] font-mono text-zinc-600 tracking-wider mt-4">
              © {new Date().getFullYear()} OM MANOJ PATIL. ALL INTELLECTUAL ASSETS RESERVED.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-4 rounded-sm bg-white/5 border border-white/10 hover:border-neon-lime text-zinc-400 hover:text-neon-lime transition-all duration-300 flex items-center gap-2 font-mono text-xs cursor-pointer group uppercase tracking-widest"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1" />
          </button>

        </div>

      </div>
    </footer>
  );
}
