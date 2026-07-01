import { motion } from "motion/react";
import { SERVICES } from "../data";
import { Check, Sparkles, Code, AppWindow, Bot, Layers, Share2, HelpCircle } from "lucide-react";

export default function Services() {
  
  // Icon picker helper
  const getServiceIcon = (serviceId: string) => {
    switch (serviceId) {
      case "srv1": // UI/UX
        return <Layers className="w-5 h-5 text-neon-lime" />;
      case "srv2": // Website Design
        return <Sparkles className="w-5 h-5 text-neon-lime" />;
      case "srv3": // Website Development
        return <Code className="w-5 h-5 text-neon-lime" />;
      case "srv4": // Mobile App Development
        return <AppWindow className="w-5 h-5 text-neon-lime" />;
      case "srv5": // AI Integration
        return <Bot className="w-5 h-5 text-neon-lime" />;
      case "srv6": // SaaS Development
        return <Layers className="w-5 h-5 text-neon-lime" />;
      case "srv7": // Content Management
        return <Share2 className="w-5 h-5 text-neon-lime" />;
      case "srv8": // Technical Consultation
        return <HelpCircle className="w-5 h-5 text-neon-lime" />;
      default:
        return <Sparkles className="w-5 h-5 text-neon-lime" />;
    }
  };

  // Additional micro bullets to satisfy the absolute complete list in the prompt:
  // "Business Websites, E-commerce Websites, Portfolio Websites, Landing Pages, Brand Identity Design, Social Media Management, AI Automation"
  const allOfferings = [
    "UI/UX Design",
    "Website Design",
    "Website Development",
    "Mobile App Development",
    "AI Integration",
    "AI Automation",
    "SaaS Development",
    "Business Websites",
    "E-commerce Websites",
    "Portfolio Websites",
    "Landing Pages",
    "Brand Identity Design",
    "Content Management",
    "Social Media Management",
    "Technical Consultation"
  ];

  return (
    <section 
      id="services" 
      className="relative py-24 md:py-32 bg-near-black border-t border-white/5 overflow-hidden select-none"
    >
      {/* Blurred background radial */}
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-neon-lime/5 blur-[100px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Large Header Section */}
        <div className="flex flex-col mb-16 md:mb-24">
          <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-2">05 // WORK OPPORTUNITIES</span>
          <h2 className="headline-giant text-6xl md:text-8xl font-accent font-black tracking-tight text-white">
            SERVICES <span className="text-neon-lime">OFFERED</span>
          </h2>
          <div className="h-1 w-20 bg-neon-lime mt-4 rounded-none" />
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 items-stretch">
          
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-sm glass-panel bg-near-black/70 flex flex-col items-start text-left relative overflow-hidden group cursor-default"
            >
              {/* Top visual tech label */}
              <span className="absolute top-4 right-6 text-[9px] font-mono text-zinc-700">
                SERV_0{idx + 1}
              </span>

              {/* Service Icon */}
              <div className="p-3.5 bg-neon-lime/10 border border-neon-lime/15 rounded-sm mb-6 shadow-md shadow-neon-lime/5 group-hover:border-neon-lime/40 transition-colors duration-300">
                {getServiceIcon(service.id)}
              </div>

              {/* Service Title */}
              <h3 className="text-xl font-bold text-white mb-4 font-display uppercase tracking-wide group-hover:text-neon-lime transition-colors duration-300">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
                {service.description}
              </p>

              {/* Service Sub-Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {service.tags.map((tag, tagIdx) => (
                  <span 
                    key={tagIdx}
                    className="px-2.5 py-1 bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400 rounded-none uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}

        </div>

        {/* Universal scope list checklist of all offerings */}
        <div className="p-8 md:p-12 rounded-sm glass-panel bg-gradient-to-r from-near-black to-deep-forest/10 border border-neon-lime/10 relative overflow-hidden text-left mt-12">
          
          <div className="absolute top-0 right-0 w-36 h-36 bg-neon-lime/5 blur-3xl pointer-events-none" />

          <h3 className="text-lg md:text-xl font-bold text-white mb-8 font-display uppercase tracking-wider flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-none bg-neon-lime animate-ping" />
            FULL SERVICE SCOPE SPECTRUM
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-6">
            {allOfferings.map((offering, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-zinc-300 group hover:text-white transition-colors duration-200">
                <div className="p-1 rounded-none bg-neon-lime/10 border border-neon-lime/30 text-neon-lime">
                  <Check className="w-3 h-3" />
                </div>
                <span className="text-xs md:text-sm font-mono tracking-wide text-zinc-400 group-hover:text-neon-lime transition-colors duration-200">
                  {offering}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
