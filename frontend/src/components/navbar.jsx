import '../styles/navbar.css';
import takanoha from '../assets/takanoha.png';
import { useState, useEffect, useRef } from "react";
import { useLanguage, useTheme } from "../Context";
import { Languages, Menu, Mail, Github } from "lucide-react";

export default function NavBar({ activeSection, scrollToSection }) {
  const { lang, setLang, t } = useLanguage();
  const { dark, setDark, toggleDark } = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "aboutme", default: "about me", hover: t.nav.about },
    { id: "cv", default: "curriculum vitae", hover: t.nav.cv },
    { id: "contact", default: "contact", hover: t.nav.contact },
  ];

  // Closing the details dropdown
  const handleChoose = (value) => (e) => {
    e.preventDefault();
    setLang(value);
    const details = e.currentTarget.closest("details");
    if (details?.open) details.open = false;
  };

  useEffect(() => {
    const hasDark = document.documentElement.classList.contains("dark");
    setDark(hasDark);
  }, [setDark]);

  // Viewport-relative scroll threshold for consistent shrink behavior
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.25);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on scroll
  useEffect(() => {
    const onScroll = () => setIsOpen(false);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav id="navbar" className={`fixed top-0 left-0 w-full overflow-x-clip shadow-md z-50 transition-all duration-500 ease-in-out ${
      scrolled ? "bg-seagreen-400 dark:bg-seablue-900 h-15" : "bg-seagreen-400/65 dark:bg-seablue-900/65 h-20"
      }`}
    > 
      <div className="max-w-6xl mx-auto flex justify-between items-center h-full px-4 sm:px-6">
        {/* left items */}
        <div className="flex items-center">

          {/* logo */}
          <a href="#" className="mr-2 sm:mr-4 shrink-0">
            <img id="takanoha" src={takanoha} title='halfriver.me' alt="takanoha logo" className={`${
              scrolled ? "mx-1 h-8 w-8 sm:h-10 sm:w-10" : "h-10 w-10 sm:h-12 sm:w-12"
            }`} />
          </a>

          {/* Mobile Nav */}
          <details id='mobile-nav' className="lg:hidden sm:mx-2 dropdown mr-2" title='Section Select'>
            <summary className="block navbar-icon cursor-pointer px-2 py-1">
              <Menu width={30} height={30} />
            </summary>
            <ul
              className="menu dropdown-content rounded-box z-[1] mt-2 shadow bg-seagreen-200 dark:bg-seablue-700 w-45"
              role="menu"
              aria-label="Choose language"
            >
              {navItems.map(({ id, default: text, hover }) => (
                <li key={id}>
                  <button
                    onClick={() => {
                      scrollToSection(id);
                      setIsOpen(false);
                    }}
                    aria-current={activeSection === id ? "page" : undefined}
                    className={`group text-left text-md hover:bg-seagreen-100 dark:hover:bg-seablue-600 ${
                      activeSection === id
                        ? "text-seagreen-500 dark:text-seagreen-200 font-semibold"
                        : "text-seagreen-500 dark:text-seagreen-200/80 font-light"
                    }`}
                  >
                    {/* default text */}
                    <span className="absolute inset-0 flex items-center justify-center group-hover:opacity-0">
                      {text}
                    </span>
                    {/* hover text */}
                    <span className="cursor-pointer absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      {hover}
                    </span>
                    {/* layout placeholder */}
                    <span className="invisible font-semibold px-2">{text}</span>
                  </button>
                </li>
              ))}
            </ul>
          </details>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center space-x-4 ml-2">
            {navItems.map(({ id, default: text, hover }) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  aria-current={activeSection === id ? "page" : undefined}
                  className={`group relative text-base text-lg py-3 ${
                    activeSection === id
                      ? "text-offwhite dark:text-seagreen-200 font-normal"
                      : "text-offwhite/90 dark:text-seagreen-200/80 font-thin"
                  }`}
                >
                  {/* default text */}
                  <span className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 text-offwhite/80 dark:text-seagreen-200/90">
                    {text}
                  </span>
                  {/* hover text */}
                  <span className="cursor-pointer absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-offwhite dark:text-seagreen-200">
                    {hover}
                  </span>
                  {/* layout placeholder */}
                  <span className="invisible font-semibold px-2">{text}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* right items */}
        <div className="flex items-center text-lg space-x-2">

          {/* box icons */}
          <div className={`flex items-center p-2 rounded-sm transition-colors duration-500 border-2 
            ${scrolled 
              ? "border-offwhite/15 dark:border-seagreen-200/15 border-r-2 border-t-0 border-l-0 border-b-0" 
              : "border-offwhite/15 dark:border-seagreen-200/15" 
            }`}
          >
            <a className="px-2 sm:px-3 py-1 navbar-icon fill-offwhite" href="https://github.com/halfriver" title='GitHub' target="_blank" rel="noreferrer">
              <Github width={25} height={25} strokeWidth={2.5} />
            </a>
            <a className="px-2 sm:px-3 py-1 navbar-icon" href="https://www.linkedin.com/in/ohkawak/" title='LinkedIn' target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
              </svg>
            </a>
            <a className="px-2 sm:px-3 py-1 navbar-icon" href="mailto:you@example.com">
              <Mail width={25} height={25} strokeWidth={2} />
            </a>
          </div>

          {/* language dropdown */}
          <details className="dropdown mr-2" title='Language Select'>
            <summary className="block navbar-icon cursor-pointer px-2 sm:px-4 py-1">
              <Languages />
            </summary>
            <ul
              className="menu dropdown-content rounded-box z-[1] mt-2 shadow bg-seagreen-200 dark:bg-seablue-700"
              role="menu"
              aria-label="Choose language"
            >
              <li>
                <button
                  role="menuitemradio"
                  aria-checked={lang === "en"}
                  onClick={handleChoose("en")}
                  className={`text-left hover:bg-seagreen-100 dark:hover:bg-seablue-600 ${
                    lang === "en"
                      ? "text-seagreen-500 dark:text-seagreen-200 font-semibold"
                      : "text-seagreen-500 dark:text-seagreen-200/80 font-light"
                  }`}
                >
                  English
                </button>
              </li>
              <li>
                <button
                  role="menuitemradio"
                  aria-checked={lang === "ja"}
                  onClick={handleChoose("ja")}
                  className={`text-left hover:bg-seagreen-100 dark:hover:bg-seablue-600 ${
                    lang === "ja"
                      ? "text-seagreen-500 dark:text-seagreen-200 font-semibold"
                      : "text-seagreen-500 dark:text-seagreen-200/80 font-light"
                  }`}
                >
                  日本語
                </button>
              </li>
            </ul>
          </details>

          {/* darkmode toggle */}
          <label className="grid cursor-pointer place-items-center" title='Dark Mode Toggle'>
            <input id="darkmode-toggle" type="checkbox" className="toggle toggle-lg col-span-2 col-start-1 row-start-1" checked={dark} onChange={toggleDark} />

            {/* sun icon */}
            <svg
              className="stroke-black-700 fill-offwhite/0 dark:stroke-black-700/0 dark:fill-black-800/0 col-start-1 row-start-1 z-[1] ml-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>

            {/* moon icon */}
            <svg
              className="stroke-black-800/0 fill-black-800/0 dark:stroke-black-800 dark:fill-black-800 col-start-2 row-start-1 z-[1] mr-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </label>
        </div>
      </div>
    </nav>
  );
}