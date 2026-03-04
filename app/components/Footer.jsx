"use client"

import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule dark:border-darkRule">

      {/* BIG WORDMARK */}
      <div className="px-4 sm:px-6 lg:px-12 py-8 sm:py-12 border-b border-rule dark:border-darkRule overflow-hidden">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display font-900 italic leading-none text-ink dark:text-darkInk"
          style={{ fontSize: "clamp(28px, 8vw, 100px)" }}
        >
          N·Phukan<span className="text-red">.</span>
        </motion.p>
        <p className="font-condensed text-base sm:text-xl text-muted mt-2 sm:mt-3 max-w-xs sm:max-w-sm leading-relaxed">
          MERN Stack Developer — Assam, India.<br className="hidden sm:block" />
          Building the web with purpose.
        </p>
      </div>

      {/* LINKS GRID — stack on mobile */}
      <div className="px-4 sm:px-6 lg:px-12 py-8 grid grid-cols-2 sm:grid-cols-3 gap-8 border-b border-rule dark:border-darkRule">
        {/* Navigation */}
        <div>
          <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted mb-4">Navigation</p>
          <ul className="space-y-2">
            {["Home","About","Services","Work","Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item === "Home" ? "top" : item.toLowerCase()}`}
                   className="font-condensed font-600 text-sm sm:text-base tracking-wide text-ink dark:text-darkInk hover:text-red transition-colors duration-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted mb-4">Social</p>
          <ul className="space-y-2">
            {[
              { label: "GitHub",    href: "https://github.com/NarayanPhukan" },
              { label: "Instagram", href: "https://www.instagram.com/narayn.phukan/" },
              { label: "Email",     href: "mailto:narayanphukan30@gmail.com" },
            ].map(({ label, href }) => (
              <li key={label}>
                <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                   className="font-condensed font-600 text-sm sm:text-base tracking-wide text-ink dark:text-darkInk hover:text-red transition-colors duration-200 flex items-center gap-1 group">
                  {label}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Status */}
        <div className="col-span-2 sm:col-span-1">
          <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted mb-4">Status</p>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-condensed text-sm sm:text-base text-ink dark:text-darkInk">Available for hire</span>
          </div>
          <p className="font-mono text-[10px] tracking-wider text-muted leading-relaxed mb-4">
            Open to freelance projects,<br />full-time roles & collaborations.
          </p>
          <a href="#contact"
             className="inline-block font-condensed font-700 tracking-widest uppercase text-xs
                        border border-rule dark:border-darkRule text-ink dark:text-darkInk
                        px-4 sm:px-5 py-2 hover:bg-red hover:text-paper hover:border-red transition-all duration-200">
            Contact →
          </a>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="px-4 sm:px-6 lg:px-12 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
        <p className="font-mono text-[9px] sm:text-[10px] tracking-widest text-muted uppercase text-center sm:text-left">
          © {year} Narayan Phukan — All rights reserved
        </p>
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="w-1.5 h-1.5 bg-red rounded-full" />
          <p className="font-mono text-[9px] sm:text-[10px] tracking-widest text-muted uppercase">
            Built with Next.js & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}