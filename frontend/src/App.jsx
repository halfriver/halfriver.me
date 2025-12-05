import { useState, useEffect } from 'react';
import { useTheme, useLanguage } from "./Context";

// Website Components
import NavBar from "./components/navbar";
import AboutMe from "./components/aboutme";
import CV from "./components/cv";
import Divider from "./components/divider";
import Top from "./components/top";
import Bottom from "./components/bottom";

// Top Divider
import Divider_Top_Fish_Light from "./assets/divider_fish_1_light.png";
import Divider_Top_Wave_Light from "./assets/divider_wave_1_light.png";
import Divider_Top_Fish_Dark from "./assets/divider_fish_1_dark.png";
import Divider_Top_Wave_Dark from "./assets/divider_wave_1_dark.png";

// Bottom Divider
import Divider_Bottom_Fish_Light from "./assets/divider_fish_2_light.png";
import Divider_Bottom_Wave_Light from "./assets/divider_wave_2_light.png";
import Divider_Bottom_Fish_Dark from "./assets/divider_fish_2_dark.png";
import Divider_Bottom_Wave_Dark from "./assets/divider_wave_2_dark.png";

export default function App() {
  const [activeSection, setActiveSection] = useState("aboutme");
  const { lang, t } = useLanguage();
  const { dark } = useTheme();
  const [scrollY, setScrollY] = useState(0);

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

    const updateOnScroll = () => {
      const yScroll = window.scrollY;
      setScrollY(yScroll); // drives parallax

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
        updateOnScroll();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    // run once on mount
    updateOnScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
  <div className="scrollbar overflow-hidden">
    <NavBar activeSection={activeSection} scrollToSection={scrollToSection} />
    <main className="bg-seagreen-300 text-black-700 dark:bg-seablue-800 dark:text-seagreen-200">
      <Top />
      <AboutMe />
      <Divider 
        image_fish={dark ? Divider_Top_Fish_Dark : Divider_Top_Fish_Light} 
        image_wave={dark ? Divider_Top_Wave_Dark : Divider_Top_Wave_Light} 
        scroll={scrollY} 
        posit="top"
      />
      <CV />
      <Divider 
        image_fish={dark ? Divider_Bottom_Fish_Dark : Divider_Bottom_Fish_Light} 
        image_wave={dark ? Divider_Bottom_Wave_Dark : Divider_Bottom_Wave_Light} 
        scroll={scrollY} 
        posit="bot"
      />
      <Bottom />
    </main>
  </div>
);
}