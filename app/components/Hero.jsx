"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { assets } from "@/assets/assets";

const stagger = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const line = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const MARQUEE_ITEMS = [
  "MERN STACK", "REACT", "NODE.JS", "MONGODB", "NEXT.JS",
  "FULL STACK", "TYPESCRIPT", "REST APIs", "TAILWIND CSS",
  "MERN STACK", "REACT", "NODE.JS", "MONGODB", "NEXT.JS",
  "FULL STACK", "TYPESCRIPT", "REST APIs", "TAILWIND CSS",
];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col overflow-hidden pt-18 sm:pt-22.5">

      {/* Watermark number — scaled down on mobile */}
      <div className="absolute top-16 right-3 sm:right-6 lg:right-12 font-condensed font-900 text-[clamp(60px,18vw,200px)] leading-none text-rule dark:text-darkRule select-none pointer-events-none tracking-tighter opacity-60 sm:opacity-100">
        26
      </div>

      {/* MAIN LAYOUT */}
      <div className="flex-1 flex flex-col lg:grid lg:grid-cols-12 gap-0 px-4 sm:px-6 lg:px-12 pt-8 pb-0">

        {/* Vertical label — desktop only */}
        <div className="hidden lg:flex col-span-1 flex-col items-center pt-4 gap-4">
          <div className="w-px flex-1 bg-rule dark:bg-darkRule max-h-40" />
          <span
            className="font-mono text-[9px] tracking-[0.35em] text-muted uppercase"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed", transform: "rotate(180deg)" }}
          >
            Developer · Portfolio · 2026
          </span>
          <div className="w-px flex-1 bg-rule dark:bg-darkRule" />
        </div>

        {/* HERO COPY */}
        <div className="flex-1 lg:col-span-7 flex flex-col justify-center pb-8 lg:pb-0 lg:pr-12 lg:border-r border-rule dark:border-darkRule">
          <motion.div variants={stagger} initial="hidden" animate="visible">

            {/* Eyebrow */}
            <motion.div variants={line} className="flex items-center gap-3 mb-5 sm:mb-6">
              <span className="block w-6 sm:w-8 h-[1.5px] bg-red" />
              <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] text-red uppercase">
                Featured Developer
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={line}
              className="font-display font-900 italic leading-[0.92] tracking-tight text-ink dark:text-darkInk"
              style={{ fontSize: "clamp(38px, 9vw, 110px)" }}
            >
              Building<br />
              <span className="not-italic font-700 text-red">the Web,</span><br />
              One Stack<br />
              at a Time.
            </motion.h1>

            {/* Mobile profile image — shown only on mobile */}
            <motion.div
              variants={line}
              className="lg:hidden mt-8 flex items-center gap-5"
            >
              <div className="relative shrink-0">
                <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-red" />
                <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-red" />
                <Image
                  src={assets.profile_img}
                  alt="Narayan Phukan"
                  width={90}
                  height={110}
                  priority
                  className="object-cover grayscale"
                />
              </div>
              <div>
                <p className="font-condensed font-700 text-base text-ink dark:text-darkInk">Narayan Phukan</p>
                <p className="font-mono text-[9px] tracking-widest text-red uppercase mt-0.5">MERN Developer</p>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-mono text-[9px] tracking-wider text-muted uppercase">Available</span>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={line}
              className="mt-6 sm:mt-8 max-w-md font-condensed text-base sm:text-lg leading-relaxed text-muted tracking-wide"
            >
              Crafting scalable, production-ready full-stack applications —
              blending sharp React UIs with bulletproof Node.js backends since 2022.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={line} className="mt-7 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#work"
                className="group font-condensed font-700 tracking-widest uppercase text-xs sm:text-sm
                           bg-ink dark:bg-darkInk text-paper dark:text-darkPaper
                           px-6 sm:px-8 py-3 sm:py-3.5
                           flex items-center gap-2 sm:gap-3
                           hover:bg-red transition-colors duration-200"
              >
                View Work
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="/resume.pdf"
                download
                className="group font-condensed font-700 tracking-widest uppercase text-xs sm:text-sm
                           border border-ink dark:border-darkRule text-ink dark:text-darkInk
                           px-6 sm:px-8 py-3 sm:py-3.5
                           flex items-center gap-2 sm:gap-3
                           hover:border-red hover:text-red transition-colors duration-200"
              >
                Download CV
                <span className="transition-transform duration-200 group-hover:translate-y-0.5">↓</span>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={line}
              className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-rule dark:border-darkRule grid grid-cols-3 gap-4 sm:gap-6 max-w-xs sm:max-w-sm"
            >
              {[
                { num: "3+",  label: "Years Exp." },
                { num: "15+", label: "Projects" },
                { num: "5",   label: "Tech Stack" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p className="font-display font-900 text-2xl sm:text-3xl text-ink dark:text-darkInk leading-none">{num}</p>
                  <p className="font-mono text-[9px] sm:text-[10px] tracking-widest text-muted uppercase mt-1">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* PROFILE IMAGE — desktop only */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex col-span-4 flex-col items-center justify-end pl-10 relative"
        >
          {/* Rotating ring */}
          <div className="absolute top-8 right-0 w-24 h-24">
            <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
              <defs>
                <path id="circle" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
              </defs>
              <text fontSize="9.5" fill="#E8272A" letterSpacing="3.2">
                <textPath href="#circle">AVAILABLE FOR HIRE · 2026 · OPEN TO WORK ·</textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-red text-xl">✦</span>
            </div>
          </div>

          <div className="relative w-full max-w-70">
            <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-red" />
            <div className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-red" />
            <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-red" />
            <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-red" />
            <Image
              src={assets.profile_img}
              alt="Narayan Phukan"
              width={280}
              height={360}
              priority
              className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-red px-4 py-2 flex items-center justify-between">
              <span className="font-condensed font-700 text-xs tracking-widest uppercase text-paper">Narayan Phukan</span>
              <span className="font-mono text-[9px] text-paper/80">Fig. 01</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* MARQUEE */}
      <div className="mt-8 sm:mt-10 border-t border-b border-rule dark:border-darkRule py-2.5 sm:py-3 overflow-hidden bg-ink dark:bg-darkSurface">
        <div className="flex gap-0 animate-marquee whitespace-nowrap">
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={i} className="flex items-center gap-3 sm:gap-4">
              <span className="font-condensed font-700 text-xs sm:text-sm tracking-[0.2em] uppercase text-paper/70 px-4 sm:px-6">
                {item}
              </span>
              <span className="text-red text-xs">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}