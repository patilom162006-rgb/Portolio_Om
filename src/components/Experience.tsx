import { motion } from "motion/react";
import { EXPERIENCE } from "../data";
import { Briefcase, Calendar, ChevronRight, Play, Shield, Terminal, Users, Youtube, Instagram, MessageSquare, ExternalLink } from "lucide-react";

export default function Experience() {
  return (
    <section 
      id="experience" 
      className="relative py-24 md:py-32 bg-near-black border-t border-white/5 overflow-hidden select-none"
    >
      {/* Blurred structural glow */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-deep-forest/30 blur-[150px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Large Header Section */}
        <div className="flex flex-col mb-16 md:mb-24">
          <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-2">03 // PROFESSIONAL CHRONICLE</span>
          <h2 className="headline-giant text-6xl md:text-8xl font-accent font-black tracking-tight text-white">
            EXPERIENCE
          </h2>
          <div className="h-1 w-20 bg-neon-lime mt-4 rounded-none" />
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 items-stretch">
          
          {EXPERIENCE.map((exp, idx) => {
            const isDev = exp.id === "exp1";
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="flex flex-col rounded-sm glass-panel bg-near-black/60 p-6 md:p-8 relative overflow-hidden group text-left"
              >
                {/* Visual badge top right representing sector */}
                <span className="absolute top-6 right-6 p-3 bg-white/5 border border-white/10 rounded-sm text-zinc-400 group-hover:text-neon-lime group-hover:border-neon-lime/30 transition-all duration-300">
                  {isDev ? <Terminal className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </span>

                {/* Date stamp */}
                <div className="flex items-center gap-2 mb-6 text-xs font-mono text-neon-lime/80 font-bold uppercase tracking-wider bg-neon-lime/10 border border-neon-lime/25 px-4 py-1.5 rounded-none w-fit">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.period}
                </div>

                {/* Role and Organization */}
                <h3 className="text-xl md:text-2xl font-bold text-white font-display mb-1 group-hover:text-neon-lime transition-colors duration-300">
                  {exp.role}
                </h3>
                
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <p className="text-sm font-mono text-zinc-400 uppercase tracking-widest">
                    {exp.company}
                  </p>
                  {exp.type && (
                    <span className="text-[9px] font-mono text-neon-lime border border-neon-lime/30 px-2 py-0.5 uppercase bg-neon-lime/5 tracking-wider font-bold">
                      {exp.type}
                    </span>
                  )}
                </div>

                {/* Reference links for content creation */}
                {exp.links && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.links.youtube && (
                      <a 
                        href={exp.links.youtube} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white/5 border border-white/10 hover:border-neon-lime/30 hover:bg-neon-lime/5 hover:text-white text-[11px] font-mono text-zinc-400 rounded-sm transition-all duration-200"
                      >
                        <Youtube className="w-3.5 h-3.5 text-red-500" />
                        YouTube
                      </a>
                    )}
                    {exp.links.instagram && (
                      <a 
                        href={exp.links.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white/5 border border-white/10 hover:border-neon-lime/30 hover:bg-neon-lime/5 hover:text-white text-[11px] font-mono text-zinc-400 rounded-sm transition-all duration-200"
                      >
                        <Instagram className="w-3.5 h-3.5 text-pink-500" />
                        Instagram
                      </a>
                    )}
                    {exp.links.discord && (
                      <a 
                        href={exp.links.discord} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white/5 border border-white/10 hover:border-neon-lime/30 hover:bg-neon-lime/5 hover:text-white text-[11px] font-mono text-zinc-400 rounded-sm transition-all duration-200"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
                        Discord
                      </a>
                    )}
                  </div>
                )}

                {/* Dividers */}
                <div className="w-full h-[1px] bg-white/10 mb-6" />

                {/* Responsibility list */}
                <div className="flex flex-col gap-3.5 mb-6">
                  {exp.description.map((bullet, bulletIdx) => (
                    <div key={bulletIdx} className="flex items-start gap-2.5">
                      <span className="mt-1">
                        <ChevronRight className="w-3.5 h-3.5 text-neon-lime shrink-0" />
                      </span>
                      <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-light">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Contributions / Highlights */}
                {exp.highlights && (
                  <div className="mt-auto pt-4 border-t border-white/5">
                    <span className="text-[10px] font-mono text-neon-lime/80 uppercase tracking-widest font-bold block mb-1">
                      Key Contribution:
                    </span>
                    <span className="text-xs text-zinc-300 font-mono italic">
                      "{exp.highlights}"
                    </span>
                  </div>
                )}

                {/* Dynamic micro decoration labels in background */}
                <span className="absolute bottom-4 right-6 text-[8px] font-mono text-zinc-800 tracking-wider">
                  {isDev ? "SYSTEM_ENG_CO_LIVE" : "MEDIA_FLOW_PROD_ONLINE"}
                </span>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
