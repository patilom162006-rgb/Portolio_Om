import { motion } from "motion/react";
import { SKILL_CATEGORIES } from "../data";
import { Code, Layout, BrainCircuit, Wrench, Video, Users, CheckCircle } from "lucide-react";

export default function Skills() {
  
  // Icon selector helper
  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case "dev":
        return <Code className="w-5 h-5 text-neon-lime" />;
      case "uiux":
        return <Layout className="w-5 h-5 text-neon-lime" />;
      case "ai":
        return <BrainCircuit className="w-5 h-5 text-neon-lime" />;
      case "tools":
        return <Wrench className="w-5 h-5 text-neon-lime" />;
      case "content":
        return <Video className="w-5 h-5 text-neon-lime" />;
      case "soft":
        return <Users className="w-5 h-5 text-neon-lime" />;
      default:
        return <CheckCircle className="w-5 h-5 text-neon-lime" />;
    }
  };

  return (
    <section 
      id="skills" 
      className="relative py-24 md:py-32 bg-near-black/95 border-t border-white/5 overflow-hidden select-none"
    >
      {/* Blurred structural light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-neon-lime/5 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Large Header Section */}
        <div className="flex flex-col mb-16 md:mb-24">
          <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-2">04 // CAPABILITY SPECTRUM</span>
          <h2 className="headline-giant text-6xl md:text-8xl font-accent font-black tracking-tight text-white">
            SKILLS & <span className="text-neon-lime">ABILITIES</span>
          </h2>
          <div className="h-1 w-20 bg-neon-lime mt-4 rounded-none" />
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-sm glass-panel bg-near-black/70 flex flex-col items-start text-left relative overflow-hidden group cursor-default"
            >
              {/* Glowing Background Radial */}
              <div className="absolute -right-20 -top-20 w-44 h-44 rounded-none bg-neon-lime/5 group-hover:bg-neon-lime/10 blur-[40px] transition-colors duration-500 pointer-events-none" />

              {/* Floating micro decoration indicator */}
              <span className="absolute top-4 right-6 text-[9px] font-mono text-zinc-700 uppercase tracking-widest">
                cat_0{catIdx + 1}
              </span>

              {/* Glowing Category Icon */}
              <div className="p-3.5 bg-neon-lime/10 border border-neon-lime/20 rounded-sm mb-6 shadow-sm shadow-neon-lime/5 group-hover:border-neon-lime/40 transition-colors duration-300">
                {getCategoryIcon(category.id)}
              </div>

              {/* Category Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 font-display uppercase tracking-wide">
                {category.title}
              </h3>

              {/* Skills list nested inside the card */}
              <div className="flex flex-wrap gap-2.5 w-full mt-auto">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    whileHover={{ scale: 1.05 }}
                    className="px-3.5 py-1.5 bg-white/5 border border-white/10 hover:border-neon-lime/30 text-xs font-mono text-zinc-300 hover:text-neon-lime rounded-none transition-all duration-200 tracking-wide select-none"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
