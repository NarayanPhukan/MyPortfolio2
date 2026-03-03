"use client"

import Navbar from "./components/Navbar";
import Header from "./components/header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export default function Home() {

  const [isDark, setIsDark] = useState(false)

  // Initialize theme once
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")

    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && systemDark)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  // Update theme on toggle
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [isDark])

  return (
    <>
      <Navbar isDark={isDark} setIsDark={setIsDark}/>
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}