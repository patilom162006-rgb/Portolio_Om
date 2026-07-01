import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import WhyChooseMe from "./components/WhyChooseMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  // Dynamic intersection observer to set the current scrolling section active in header navigation
  useEffect(() => {
    if (isLoading) return;

    const sections = ["home", "about", "education", "experience", "skills", "services", "projects", "why-choose-me", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -60% 0px", // triggers when section is dominant on screen
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [isLoading]);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="relative bg-near-black text-white min-h-screen overflow-x-hidden selection:bg-neon-lime selection:text-near-black">
          {/* Real digital noise overlay for a highly polished award-winning look */}
          <div className="noise-bg pointer-events-none" />

          {/* Immersive cursor follower */}
          <CustomCursor />

          {/* Floating Navigation Header */}
          <Header activeSection={activeSection} onNavigate={handleNavigate} />

          {/* Main content body */}
          <main>
            <Hero onNavigate={handleNavigate} />
            <About />
            <Education />
            <Experience />
            <Skills />
            <Services />
            <Projects />
            <WhyChooseMe />
            <Contact />
          </main>

          {/* Footer typography showcase */}
          <Footer onNavigate={handleNavigate} />
        </div>
      )}
    </>
  );
}
