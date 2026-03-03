"use client"

import { assets } from "@/assets/assets"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { label: "Home", id: "top" },
  { label: "About Me", id: "about" },
  { label: "Services", id: "services" },
  { label: "My Work", id: "work" },
  { label: "Contact Me", id: "contact" },
]

const Navbar = ({ isDark, setIsDark }) => {
  const [isScroll, setIsScroll] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Background Decoration */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 -translate-y-4/5 dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300
        ${
          isScroll
            ? "bg-white/70 backdrop-blur-xl shadow-sm dark:bg-darkTheme/80"
            : ""
        }`}
      >
        {/* Logo */}
        <a href="#top">
          <Image
            src={isDark ? assets.logo_dark : assets.logo}
            alt="Logo"
            className="w-28 cursor-pointer transition hover:scale-105"
          />
        </a>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-8 rounded-full px-12 py-3 transition-all duration-300
          ${
            !isScroll
              ? "bg-white/70 shadow-sm dark:border dark:border-white/40 dark:bg-transparent"
              : ""
          }`}
        >
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.id}`}
                className="font-ovo relative group"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDark(prev => !prev)}
            className="transition hover:rotate-12"
          >
            <Image
              src={isDark ? assets.sun_icon : assets.moon_icon}
              alt="Theme"
              className="w-6"
            />
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-8 py-2.5 border border-gray-500 rounded-full font-ovo dark:border-white/50 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300"
          >
            Contact
            <Image
              src={isDark ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
              alt=""
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <Image
              src={isDark ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Overlay + Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />

            {/* Slide Menu */}
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ duration: 0.4 }}
              className="fixed right-0 top-0 bottom-0 w-64 h-screen bg-rose-50 dark:bg-darkHover dark:text-white z-50 flex flex-col gap-6 py-20 px-10"
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute right-6 top-6"
              >
                <Image
                  src={isDark ? assets.close_white : assets.close_black}
                  alt=""
                  className="w-5"
                />
              </button>

              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="font-ovo text-lg hover:translate-x-2 transition duration-300"
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar