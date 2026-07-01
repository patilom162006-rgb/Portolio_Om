import { motion } from "motion/react";
import { EDUCATION, HACKATHONS } from "../data";
import { GraduationCap, Award, Calendar, Bookmark, Star, Sparkles } from "lucide-react";

export default function Education() {
  return (
    <section 
      id="education" 
      className="relative py-24 md:py-32 bg-near-black/90 border-t border-white/5 overflow-hidden select-none"
    >
      {/* Dynamic blurred glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 rounded-full bg-neon-lime/5 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col mb-16 md:mb-24">
          <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-2">02 // ACADEMIC RECORD</span>
          <h2 className="headline-giant text-6xl md:text-8xl font-accent font-black tracking-tight text-white">
            EDUCATION & <span className="text-neon-lime">ACCOMPLISHMENTS</span>
          </h2>
          <div className="h-1 w-20 bg-neon-lime mt-4 rounded-none" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Interactive Timeline */}
          <div className="lg:col-span-7 relative pl-8 border-l border-white/10 flex flex-col gap-12">
            
            {EDUCATION.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative group"
              >
                {/* Timeline node icon */}
                <div className="absolute -left-[53px] top-0 p-2.5 rounded-none bg-near-black border-2 border-white/10 group-hover:border-neon-lime text-zinc-500 group-hover:text-neon-lime transition-all duration-300 z-10">
                  <GraduationCap className="w-5 h-5" />
                </div>

                 {/* Main Card Content */}
                <div className="p-6 rounded-sm glass-panel relative overflow-hidden text-left bg-near-black/50 hover:bg-near-black/80 transition-colors duration-300">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-none text-xs font-mono text-zinc-400 mb-4 uppercase tracking-widest">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-display group-hover:text-neon-lime transition-colors duration-300">
                    {edu.institution}
                  </h3>
                  
                  <p className="text-sm font-mono text-neon-lime/80 font-semibold mb-4 uppercase tracking-wider">
                    {edu.boardOrUniversity} • {edu.degree}
                  </p>

                  {edu.field && (
                    <div className="flex items-center gap-2 mb-4 text-zinc-400 text-sm">
                      <Bookmark className="w-4 h-4 text-neon-lime/50" />
                      <span>Major: <strong className="text-zinc-200">{edu.field}</strong></span>
                    </div>
                  )}

                  <div className="inline-block px-4 py-2 bg-neon-lime/10 border border-neon-lime/20 rounded-sm text-xs font-mono font-bold text-neon-lime tracking-wider uppercase">
                    {edu.performance}
                  </div>

                  {/* Tech status stamp */}
                  {edu.status && (
                    <span className="absolute top-4 right-4 text-[10px] font-mono text-zinc-500 uppercase bg-white/5 px-2 py-0.5 rounded border border-white/10">
                      {edu.status}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}

          </div>

          {/* Right: Achievements / Hackathons badges */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <div className="p-8 rounded-sm glass-panel relative overflow-hidden bg-gradient-to-br from-near-black to-deep-forest/20">
              
              {/* Background accent badge */}
              <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-neon-lime/5 blur-[50px] pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-neon-lime/10 border border-neon-lime/15 rounded-sm">
                  <Award className="w-6 h-6 text-neon-lime animate-pulse" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white font-display uppercase tracking-wide">
                    HACKATHONS
                  </h3>
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                    PRACTICAL COMPETITIONS
                  </span>
                </div>
              </div>

              <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8">
                Om actively participates in offline and online developer hackathons to solve complex issues under tight constraints, proving swift concept prototyping and exceptional coordination.
              </p>

              {/* Hackathon Badge Listing */}
              <div className="flex flex-col gap-4">
                {HACKATHONS.map((hack, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-sm bg-white/5 border border-white/10 hover:border-neon-lime/30 transition-all duration-300"
                  >
                    <div className="p-2.5 rounded-sm bg-neon-lime/10 border border-neon-lime/20 text-neon-lime">
                      <Star className="w-4 h-4 fill-neon-lime/30" />
                    </div>
                    <div>
                      <h4 className="text-sm md:text-base font-bold text-white uppercase tracking-wide">
                        {hack.title}
                      </h4>
                      <p className="text-xs font-mono text-zinc-500">
                        {hack.result}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Summary Badge of Achievements */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2.5">
                <span className="flex items-center gap-1 text-xs font-mono px-3 py-1 bg-neon-lime/10 border border-neon-lime/20 rounded-none text-neon-lime">
                  <Sparkles className="w-3 h-3" />
                  3+ Hackathons
                </span>
                <span className="flex items-center gap-1 text-xs font-mono px-3 py-1 bg-white/5 border border-white/10 rounded-none text-zinc-400">
                  Mumbai & Pune
                </span>
                <span className="flex items-center gap-1 text-xs font-mono px-3 py-1 bg-white/5 border border-white/10 rounded-none text-zinc-400">
                  Concept Architect
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
