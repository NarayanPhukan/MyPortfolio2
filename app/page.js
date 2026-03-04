"use client"

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar   from "./components/Navbar";
import Hero     from "./components/Hero";
import About    from "./components/About";
import Services from "./components/Services";
import Work     from "./components/Work";
import Contact  from "./components/Contact";
import Footer   from "./components/Footer";

export default function Home() {
  const [isDark, setIsDark]   = useState(false);
  const [loaded, setLoaded]   = useState(false);

  useEffect(() => {
    const saved  = localStorage.getItem("theme");
    const sysDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (saved === "dark" || (!saved && sysDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
    // short loader delay for dramatic entrance
    const t = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <AnimatePresence>
      {loaded && (
        <motion.div
          key="site"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Navbar isDark={isDark} setIsDark={setIsDark} />
          <main>
            <Hero />
            <About isDark={isDark} />
            <Services />
            <Work />
            <Contact isDark={isDark} />
          </main>
          <Footer isDark={isDark} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}