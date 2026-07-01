import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const intervalTime = 30;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return Math.floor(next);
      });
    }, intervalTime);

    const completionTimer = setTimeout(() => {
      onComplete();
    }, duration + 500);

    return () => {
      clearInterval(timer);
      clearTimeout(completionTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        id="loader-container"
        initial={{ opacity: 1, y: 0 }}
        exit={{ 
          y: "-100%", 
          transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
        }}
        className="fixed inset-0 bg-near-black z-50 flex flex-col justify-between p-10 md:p-16 select-none"
      >
        {/* Top tagline */}
        <div className="flex justify-between items-center text-xs tracking-widest text-zinc-500 font-mono">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            PORTFOLIO v2.0
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-neon-lime"
          >
            OM MANOJ PATIL
          </motion.span>
        </div>

        {/* Center Name Display with reveal */}
        <div className="w-full flex justify-center items-center overflow-hidden my-auto">
          <h1 className="headline-giant text-7xl md:text-9xl tracking-tighter text-white font-accent flex flex-wrap justify-center">
            {["O", "M", "\u00A0", "P", "A", "T", "I", "L"].map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: 200, rotate: 10 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1 + index * 0.08,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Bottom Percentage */}
        <div className="flex justify-between items-end">
          <div className="text-left">
            <span className="block text-xs font-mono text-zinc-500 tracking-wider">CREATING DIGITAL EXPERIENCE</span>
            <span className="block text-xs font-mono text-zinc-400">DEV // DESIGN // AI</span>
          </div>
          
          <div className="flex items-baseline font-accent text-neon-lime">
            <motion.span 
              className="text-6xl md:text-8xl font-black tabular-nums tracking-tighter"
            >
              {count}
            </motion.span>
            <span className="text-xl md:text-2xl font-bold ml-1">%</span>
          </div>
        </div>

        {/* Subtle loading bar at very bottom edge */}
        <div className="absolute bottom-0 left-0 h-1 bg-neon-lime/20 w-full">
          <motion.div 
            className="h-full bg-neon-lime"
            initial={{ width: "0%" }}
            animate={{ width: `${count}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
