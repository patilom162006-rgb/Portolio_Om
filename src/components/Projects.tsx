import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS, TECH_MARQUEE } from "../data";
import { ExternalLink, Github, ChevronLeft, ChevronRight, CheckCircle2, MonitorPlay } from "lucide-react";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  const currentProject = PROJECTS[activeIndex];

  return (
    <section 
      id="projects" 
      className="relative py-24 md:py-32 bg-near-black/90 border-t border-white/5 overflow-hidden select-none"
    >
      {/* Background glow flares */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-neon-lime/5 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-deep-forest/20 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Large Header Section */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24">
          <div className="flex flex-col text-left">
            <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-2">06 // WORK SHOWCASE</span>
            <h2 className="headline-giant text-6xl md:text-8xl font-accent font-black tracking-tight text-white">
              FEATURED <span className="text-neon-lime">PROJECTS</span>
            </h2>
            <div className="h-1 w-20 bg-neon-lime mt-4 rounded-none" />
          </div>

          {/* Slider Controllers */}
          <div className="flex gap-4 mt-8 md:mt-0">
            <button 
              onClick={prevProject}
              className="w-14 h-14 rounded-sm border border-white/15 hover:border-neon-lime hover:text-neon-lime text-white flex items-center justify-center transition-all duration-300 bg-near-black/50 cursor-pointer"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextProject}
              className="w-14 h-14 rounded-sm border border-white/15 hover:border-neon-lime hover:text-neon-lime text-white flex items-center justify-center transition-all duration-300 bg-near-black/50 cursor-pointer"
              aria-label="Next Project"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Project Slide Component */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Side: Mockup Image */}
              <div className="lg:col-span-6 relative rounded-sm overflow-hidden glass-panel border border-white/10 p-3 group bg-near-black/50">
                {/* Visual corners */}
                <div className="absolute top-6 left-6 w-3 h-3 border-t-2 border-l-2 border-neon-lime opacity-50 z-10" />
                <div className="absolute bottom-6 right-6 w-3 h-3 border-b-2 border-r-2 border-neon-lime opacity-50 z-10" />

                <div className="aspect-[4/3] w-full rounded-sm overflow-hidden relative bg-near-black">
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-all duration-700 ease-out scale-100 group-hover:scale-105 group-hover:rotate-1"
                  />
                  {/* Subtle vignette and neon lime color grading overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-near-black via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-0 bg-neon-lime/5 mix-blend-overlay" />
                </div>
              </div>

              {/* Right Side: Information Content */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                {/* Tech Status stamp */}
                <div className="flex items-center gap-2 px-3 py-1 bg-neon-lime/10 border border-neon-lime/20 rounded-none mb-6">
                  <MonitorPlay className="w-3.5 h-3.5 text-neon-lime" />
                  <span className="text-xs font-mono font-bold tracking-wider text-neon-lime uppercase">
                    PROJECT {activeIndex + 1} OF {PROJECTS.length}
                  </span>
                </div>

                <h3 className="text-3xl md:text-5xl font-black text-white font-accent mb-4 tracking-tight uppercase group-hover:text-neon-lime">
                  {currentProject.title}
                </h3>

                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6 font-light">
                  {currentProject.description}
                </p>

                {/* Features checklist */}
                <div className="flex flex-col gap-3 mb-8 w-full">
                  <h4 className="text-xs font-mono font-bold tracking-wider text-zinc-500 uppercase mb-1">
                    Core Functionality:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    {currentProject.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-neon-lime shrink-0" />
                        <span className="text-xs font-mono text-zinc-300 truncate">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack list */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {currentProject.techStack.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-white/5 border border-white/10 text-xs font-mono text-zinc-400 rounded-none"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                  {currentProject.liveUrl && (
                    <a
                      href={currentProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 bg-neon-lime text-near-black font-bold uppercase tracking-wider text-xs rounded-sm hover:bg-neon-lime/90 transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-neon-lime/10"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}

                  {currentProject.githubUrl && (
                    <a
                      href={currentProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 bg-transparent text-white border border-white/20 hover:border-neon-lime hover:text-neon-lime font-bold uppercase tracking-wider text-xs rounded-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Github className="w-4 h-4" />
                      GitHub Repo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dynamic Project Index Indicators */}
        <div className="flex justify-center gap-3 mt-16">
          {PROJECTS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-none transition-all duration-500 cursor-pointer ${
                idx === activeIndex ? "w-10 bg-neon-lime" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Infinite sliding technologies marquee */}
      <div className="mt-28 py-8 bg-near-black border-y border-white/5 relative overflow-hidden select-none">
        {/* Blur gradients on edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-near-black to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-near-black to-transparent z-10 pointer-events-none" />

        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex animate-marquee gap-16 text-3xl md:text-5xl font-black uppercase tracking-tight text-white/10 font-accent">
            {/* First duplicate stream */}
            {TECH_MARQUEE.map((tech, idx) => (
              <div key={`stream1-${idx}`} className="flex items-center gap-4">
                <span className="hover:text-neon-lime transition-colors duration-300 cursor-default">
                  {tech}
                </span>
                <span className="text-neon-lime font-light">★</span>
              </div>
            ))}
            {/* Second duplicate stream for seamless loop */}
            {TECH_MARQUEE.map((tech, idx) => (
              <div key={`stream2-${idx}`} className="flex items-center gap-4">
                <span className="hover:text-neon-lime transition-colors duration-300 cursor-default">
                  {tech}
                </span>
                <span className="text-neon-lime font-light">★</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
