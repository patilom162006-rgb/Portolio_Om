import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(true);
  const [hovered, setHovered] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches || "ontouchstart" in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHoverStart = () => setHovered(true);
    const handleHoverEnd = () => setHovered(false);

    if (!isMobile) {
      window.addEventListener("mousemove", moveMouse);
      
      const hoverables = document.querySelectorAll("a, button, [role='button'], .hover-magnetic");
      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", handleHoverStart);
        el.addEventListener("mouseleave", handleHoverEnd);
      });
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", moveMouse);
    };
  }, [isMobile, mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <>
      {/* Outer follow glow halo */}
      <motion.div
        ref={cursorRef}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hovered ? 1.8 : 1,
          rotate: hovered ? 45 : 0,
          backgroundColor: hovered ? "rgba(223, 255, 106, 0.15)" : "rgba(223, 255, 106, 0.03)",
          borderColor: hovered ? "rgba(223, 255, 106, 0.6)" : "rgba(223, 255, 106, 0.25)",
        }}
        className="fixed top-0 left-0 w-8 h-8 rounded-none border border-neon-lime/30 pointer-events-none z-50 mix-blend-difference"
        transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
      />
      {/* Tiny inner center pointer */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hovered ? 0.5 : 1,
          rotate: hovered ? 45 : 0,
        }}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-neon-lime rounded-none pointer-events-none z-50"
      />
    </>
  );
}
