import { useState, useEffect } from 'react';
import { useTheme, useLanguage } from "./Context";
import NavBar from "./components/navbar";
import AboutMe from "./components/aboutme";
import CV from "./components/cv";
import Contact from "./components/contact";
import Divider from "./components/divider";

// Top Divider
import TopFish_Light from "./assets/topfish_light.png";
import TopFish_Dark from "./assets/topfish_dark.png";

// Bottom Divider
import BottomFish_Light from "./assets/placeholder2_light.png";
import BottomFish_Dark from "./assets/placeholder2.png";

export default function App() {
  const [activeSection, setActiveSection] = useState("aboutme");
  const { lang, t } = useLanguage();
  const { dark } = useTheme();

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
      <Divider image={dark ? TopFish_Dark : TopFish_Light} />
      <CV />
      <Divider image={dark ? BottomFish_Dark : BottomFish_Light} />
      <Contact />
    </main>
  </div>
);
}