import { motion } from "motion/react";
import { WHY_CHOOSE_ME } from "../data";
import { Rocket, Lightbulb, TrendingUp, Users2, BrainCircuit, PenTool, CheckCircle, ShieldAlert, Shield } from "lucide-react";

export default function WhyChooseMe() {
  
  // Icon picker helper
  const getQualityIcon = (title: string) => {
    switch (title) {
      case "Fast Learner":
        return <Rocket className="w-5 h-5 text-neon-lime" />;
      case "Innovative Thinker":
        return <Lightbulb className="w-5 h-5 text-neon-lime" />;
      case "Entrepreneurial Mindset":
        return <TrendingUp className="w-5 h-5 text-neon-lime" />;
      case "Team Player":
        return <Users2 className="w-5 h-5 text-neon-lime" />;
      case "AI Specialist":
        return <BrainCircuit className="w-5 h-5 text-neon-lime" />;
      case "Creative Designer":
        return <PenTool className="w-5 h-5 text-neon-lime" />;
      case "Reliable Developer":
        return <CheckCircle className="w-5 h-5 text-neon-lime" />;
      case "Strong Problem Solver":
        return <Shield className="w-5 h-5 text-neon-lime" />;
      default:
        return <CheckCircle className="w-5 h-5 text-neon-lime" />;
    }
  };

  return (
    <section 
      id="why-choose-me" 
      className="relative py-24 md:py-32 bg-near-black border-t border-white/5 overflow-hidden select-none"
    >
      {/* Blurred background orb */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-deep-forest/20 blur-[100px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Large Header Section */}
        <div className="flex flex-col mb-16 md:mb-24">
          <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-2">07 // CORE ADVANTAGES</span>
          <h2 className="headline-giant text-6xl md:text-8xl font-accent font-black tracking-tight text-white">
            WHY <span className="text-neon-lime">CHOOSE ME?</span>
          </h2>
          <div className="h-1 w-20 bg-neon-lime mt-4 rounded-none" />
        </div>

        {/* Bento-style qualities grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {WHY_CHOOSE_ME.map((quality, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-8 rounded-sm glass-panel bg-near-black/70 flex flex-col justify-between items-start text-left relative overflow-hidden group cursor-default"
            >
              {/* Corner accent indicator */}
              <span className="absolute top-4 right-6 text-[10px] font-mono text-zinc-700 font-bold">
                Q_0{idx + 1}
              </span>

              {/* Glowing Icon */}
              <div className="p-3 bg-neon-lime/10 border border-neon-lime/20 rounded-sm mb-6 shadow-md shadow-neon-lime/5 group-hover:border-neon-lime/40 transition-colors duration-300">
                {getQualityIcon(quality.title)}
              </div>

              {/* Text content block */}
              <div className="mt-auto">
                <h3 className="text-lg md:text-xl font-bold text-white font-display mb-3 group-hover:text-neon-lime transition-colors duration-300">
                  {quality.title}
                </h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light">
                  {quality.description}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
