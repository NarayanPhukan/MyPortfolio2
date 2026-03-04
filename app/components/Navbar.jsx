"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV = [
  { label: "Index",    id: "top" },
  { label: "Profile",  id: "about" },
  { label: "Services", id: "services" },
  { label: "Work",     id: "work" },
  { label: "Contact",  id: "contact" },
];

export default function Navbar({ isDark, setIsDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active,   setActive]   = useState("top");
  const [time,     setTime]     = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      for (let i = NAV.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV[i].id);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive(NAV[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled ? "bg-paper/95 dark:bg-darkPaper/95 backdrop-blur-lg border-b border-rule dark:border-darkRule" : "bg-transparent"}`}
      >
        {/* META BAR — hidden on very small screens */}
        <div className="hidden sm:flex border-b border-rule dark:border-darkRule px-4 sm:px-6 lg:px-12 py-1.5 items-center justify-between">
          <span className="font-mono text-[9px] tracking-widest text-muted uppercase">Vol.01 — Issue 2026</span>
          <span className="font-mono text-[9px] tracking-widest text-muted tabular-nums">{time}<span className="animate-blink">_</span></span>
          <span className="font-mono text-[9px] tracking-widest text-muted uppercase">Assam, India</span>
        </div>

        {/* MASTHEAD */}
        <div className="px-4 sm:px-6 lg:px-12 py-3 flex items-center justify-between gap-4">

          {/* Logo */}
          <a href="#top" className="flex flex-col leading-none flex-shrink-0">
            <span className="font-condensed font-900 text-xl sm:text-2xl tracking-[0.15em] uppercase text-ink dark:text-darkInk">
              N·PHUKAN
            </span>
            <span className="font-mono text-[8px] sm:text-[9px] tracking-[0.25em] text-red uppercase mt-0.5">
              MERN Stack Developer
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative font-condensed font-600 text-sm tracking-[0.12em] uppercase px-3 lg:px-4 py-2 transition-colors duration-200
                  ${active === item.id ? "text-red" : "text-muted hover:text-ink dark:hover:text-darkInk"}`}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-3 right-3 h-[2px] bg-red"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setIsDark(p => !p)}
              className="font-mono text-[9px] sm:text-[10px] tracking-widest uppercase border border-rule dark:border-darkRule px-2 sm:px-3 py-1.5 text-muted hover:text-red hover:border-red transition-colors duration-200"
            >
              {isDark ? "LIGHT" : "DARK"}
            </button>

            <a
              href="#contact"
              className="hidden lg:block font-condensed font-700 text-sm tracking-widest uppercase bg-red text-paper px-5 py-2 hover:bg-ink dark:hover:bg-darkInk dark:hover:text-darkPaper transition-colors duration-200"
            >
              Hire Me →
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Menu"
            >
              <span className="block w-5 h-[1.5px] bg-ink dark:bg-darkInk" />
              <span className="block w-3.5 h-[1.5px] bg-ink dark:bg-darkInk" />
              <span className="block w-5 h-[1.5px] bg-ink dark:bg-darkInk" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-ink/60 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
              className="fixed right-0 top-0 bottom-0 w-[280px] sm:w-72 z-50 bg-paper dark:bg-darkPaper border-l border-rule dark:border-darkRule flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-rule dark:border-darkRule">
                <span className="font-condensed font-700 tracking-widest uppercase text-ink dark:text-darkInk">Menu</span>
                <button onClick={() => setMenuOpen(false)} className="font-mono text-xs text-muted hover:text-red transition-colors">
                  [CLOSE]
                </button>
              </div>

              <nav className="flex flex-col px-6 pt-6 gap-0 overflow-y-auto flex-1">
                {NAV.map((item, i) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className={`font-condensed font-700 text-2xl sm:text-3xl tracking-wide uppercase py-3
                      border-b border-rule dark:border-darkRule transition-colors duration-200
                      ${active === item.id ? "text-red" : "text-ink dark:text-darkInk hover:text-red"}`}
                  >
                    <span className="font-mono text-xs text-muted mr-3">{String(i + 1).padStart(2, "0")}</span>
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              <div className="px-6 pb-8 pt-6">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-center font-condensed font-700 tracking-widest uppercase bg-red text-paper py-3.5 text-sm hover:bg-ink transition-colors"
                >
                  Hire Me →
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}