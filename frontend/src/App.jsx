import { useState, useEffect } from 'react';
import { useLanguage } from "./Context";
import NavBar from "./components/navbar";
import AboutMe from "./components/aboutme";
import CV from "./components/cv";
import Contact from "./components/contact";

export default function App() {
  const [activeSection, setActiveSection] = useState("aboutme");
  const { lang, t } = useLanguage();

  // page title according to language selected
  useEffect(() => {
    document.title = t.title.title;
  }, [lang, t]);

  // smooth scroll on navigation click
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  // update activeSection while scrolling
  useEffect(() => {
    const ids = ["aboutme", "cv", "contact"];
    const nav = document.querySelector("nav");
    const navH = nav?.offsetHeight ?? 80;

    let ticking = false;

    const updateActive = () => {
      const y = window.scrollY + navH + 1; // line just below navbar
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        // choose the last section whose top has passed our line
        if (el.offsetTop <= y) current = id;
      }
      setActiveSection(current);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateActive();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    // run once on mount
    updateActive();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
  <div className="scrollbar">
    <NavBar activeSection={activeSection} scrollToSection={scrollToSection} />
    <main className="bg-seagreen-300 text-black-700 dark:bg-seablue-800 dark:text-seagreen-200">
      <AboutMe />
      <CV />
      <Contact />
    </main>
  </div>
);
}