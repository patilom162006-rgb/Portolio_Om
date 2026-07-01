import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Education", id: "education" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Services", id: "services" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavItemClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 select-none ${
          isScrolled 
            ? "py-4 bg-near-black/75 backdrop-blur-md border-b border-white/5" 
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo signature */}
          <button 
            onClick={() => handleNavItemClick("home")}
            className="text-white hover:text-neon-lime transition-colors duration-200 cursor-pointer font-accent font-black tracking-widest text-lg"
          >
            OM PATIL
          </button>

          {/* Desktop Sitemap Navigation links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavItemClick(item.id)}
                className={`text-xs font-mono uppercase tracking-widest cursor-pointer transition-colors duration-300 relative py-1 ${
                  activeSection === item.id 
                    ? "text-neon-lime font-bold" 
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div 
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-neon-lime rounded-none"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Hire Me Action button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => handleNavItemClick("contact")}
              className="px-5 py-2 bg-neon-lime/10 border border-neon-lime/35 hover:bg-neon-lime hover:text-near-black text-neon-lime text-xs font-mono font-bold uppercase tracking-wider rounded-sm transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
            >
              Hire Me
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Overlay Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-near-black z-30 flex flex-col pt-32 px-8 pb-10 select-none overflow-y-auto"
          >
            <div className="flex flex-col gap-6 items-start text-left mt-10">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => handleNavItemClick(item.id)}
                  className={`text-4xl font-accent font-black tracking-tight uppercase cursor-pointer py-1 ${
                    activeSection === item.id 
                      ? "text-neon-lime" 
                      : "text-zinc-600 hover:text-white"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Bottom info inside drawer */}
            <div className="mt-auto pt-8 border-t border-white/5 text-left">
              <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">
                GET IN TOUCH
              </span>
              <a 
                href="mailto:patilom162006@gmail.com" 
                className="text-sm font-mono text-zinc-400 hover:text-neon-lime transition-colors"
              >
                patilom162006@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
