import { motion } from "motion/react";
import { PERSONAL_DETAILS } from "../data";
import { Sparkles, Heart, Brain, GraduationCap, Flame, Code } from "lucide-react";

export default function About() {
  const { bio, stats } = PERSONAL_DETAILS;

  // Let's pair each stat with an icon for high design fidelity
  const statIcons = [
    <Flame className="w-5 h-5 text-neon-lime" />,
    <Code className="w-5 h-5 text-neon-lime" />,
    <Brain className="w-5 h-5 text-neon-lime" />,
    <GraduationCap className="w-5 h-5 text-neon-lime" />,
    <Sparkles className="w-5 h-5 text-neon-lime" />,
    <Heart className="w-5 h-5 text-neon-lime" />
  ];

  return (
    <section 
      id="about" 
      className="relative py-24 md:py-32 bg-near-black border-t border-white/5 overflow-hidden select-none"
    >
      {/* Absolute Thin Spinning Squares in background */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 pointer-events-none opacity-25">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="w-full h-full rounded-sm border border-neon-lime/20 border-dashed"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-10 rounded-sm border border-white/5"
        />
        <motion.div
          animate={{ rotate: 180 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-20 rounded-sm border border-neon-lime/10 border-dotted"
        />
      </div>

      <div className="absolute bottom-10 left-10 w-64 h-64 pointer-events-none opacity-20">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-full h-full rounded-sm border border-neon-lime/10"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-8 rounded-sm border border-dashed border-white/10"
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Large Header Section */}
        <div className="flex flex-col mb-16 md:mb-24">
          <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-2">01 // WHO IS OM?</span>
          <h2 className="headline-giant text-6xl md:text-8xl font-accent font-black tracking-tight text-white">
            ABOUT <span className="text-neon-lime">ME</span>
          </h2>
          <div className="h-1 w-20 bg-neon-lime mt-4 rounded-none" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Bio text */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 font-display uppercase tracking-wide leading-tight">
              Bridging Elegant Design, Swift Coding, and Content Strategy.
            </h3>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8 font-light">
              {bio}
            </p>
            <div className="grid grid-cols-2 gap-4 w-full border-t border-white/10 pt-8 mt-4">
              <div>
                <span className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1">Based in</span>
                <span className="text-white text-sm font-semibold">Mumbai, India</span>
              </div>
              <div>
                <span className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1">Currently Studying</span>
                <span className="text-white text-sm font-semibold">IT Engineering, 3rd Year</span>
              </div>
            </div>
          </div>

          {/* Right Statistics Grid (Bento Box structure) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
            
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-sm glass-panel relative overflow-hidden flex flex-col justify-between items-start text-left min-h-[160px] cursor-default"
              >
                {/* Micro tech label overlay */}
                <span className="absolute top-3 right-3 text-[10px] font-mono text-zinc-600">
                  STAT_0{idx + 1}
                </span>

                {/* Top Icon */}
                <div className="p-3 bg-neon-lime/10 border border-neon-lime/15 rounded-sm mb-4">
                  {statIcons[idx] || <Code className="w-5 h-5 text-neon-lime" />}
                </div>

                {/* Bottom Stats display */}
                <div className="mt-auto">
                  <h4 className="text-3xl md:text-4xl font-extrabold text-white font-accent tracking-tighter mb-1">
                    <span className="text-neon-lime">{stat.value}</span>
                  </h4>
                  <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest leading-normal">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
