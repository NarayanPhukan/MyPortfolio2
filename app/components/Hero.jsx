"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { assets } from "@/assets/assets";

const stagger = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const line = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22,1,0.36,1] } },
};

const MARQUEE_ITEMS = [
  "MERN STACK", "REACT", "NODE.JS", "MONGODB", "NEXT.JS",
  "FULL STACK", "TYPESCRIPT", "REST APIs", "TAILWIND CSS",
  "MERN STACK", "REACT", "NODE.JS", "MONGODB", "NEXT.JS",
  "FULL STACK", "TYPESCRIPT", "REST APIs", "TAILWIND CSS",
];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col overflow-hidden pt-[100px]">

      {/* ── ISSUE NUMBER watermark ── */}
      <div className="absolute top-24 right-6 lg:right-12 font-condensed font-900 text-[clamp(80px,15vw,200px)] leading-none text-rule dark:text-darkRule select-none pointer-events-none tracking-tighter">
        26
      </div>

      {/* ── MAIN GRID ── */}
      <div className="flex-1 grid grid-cols-12 gap-0 px-6 lg:px-12 pt-8 pb-0">

        {/* LEFT — Category label (vertical) */}
        <div className="hidden lg:flex col-span-1 flex-col items-center pt-4 gap-4">
          <div className="w-[1px] flex-1 bg-rule dark:bg-darkRule max-h-40" />
          <span
            className="font-mono text-[9px] tracking-[0.35em] text-muted uppercase"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed", transform: "rotate(180deg)" }}
          >
            Developer · Portfolio · 2026
          </span>
          <div className="w-[1px] flex-1 bg-rule dark:bg-darkRule" />
        </div>

        {/* CENTER — Hero copy */}
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center pr-0 lg:pr-12 border-r-0 lg:border-r border-rule dark:border-darkRule">

          <motion.div variants={stagger} initial="hidden" animate="visible">

            {/* Eyebrow */}
            <motion.div variants={line} className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-[1.5px] bg-red" />
              <span className="font-mono text-[11px] tracking-[0.3em] text-red uppercase">
                Featured Developer
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={line}
              className="font-display font-900 italic leading-[0.92] tracking-tight
                         text-[clamp(42px,8vw,110px)]
                         text-ink dark:text-darkInk"
            >
              Building<br />
              <span className="not-italic font-700 text-red">the Web,</span><br />
              One Stack<br />
              at a Time.
            </motion.h1>

            {/* Deck text */}
            <motion.p
              variants={line}
              className="mt-8 max-w-md font-condensed font-400 text-lg leading-relaxed text-muted tracking-wide"
            >
              Narayan Phukan crafts scalable, production-ready full-stack
              applications — blending sharp React UIs with bulletproof
              Node.js backends since 2022.
            </motion.p>

            {/* CTA row */}
            <motion.div variants={line} className="mt-10 flex flex-wrap gap-4">
              <a
                href="#work"
                className="group font-condensed font-700 tracking-widest uppercase text-sm
                           bg-ink dark:bg-darkInk text-paper dark:text-darkPaper
                           px-8 py-3.5
                           flex items-center gap-3
                           hover:bg-red transition-colors duration-200"
              >
                View Work
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="/resume.pdf"
                download
                className="group font-condensed font-700 tracking-widest uppercase text-sm
                           border border-ink dark:border-darkRule
                           text-ink dark:text-darkInk
                           px-8 py-3.5
                           flex items-center gap-3
                           hover:border-red hover:text-red transition-colors duration-200"
              >
                Download CV
                <span className="transition-transform duration-200 group-hover:translate-y-0.5">↓</span>
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={line}
              className="mt-12 pt-8 border-t border-rule dark:border-darkRule
                         grid grid-cols-3 gap-6 max-w-sm"
            >
              {[
                { num: "3+",  label: "Years Exp." },
                { num: "15+", label: "Projects" },
                { num: "5",   label: "Tech Stack" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p className="font-display font-900 text-3xl text-ink dark:text-darkInk leading-none">{num}</p>
                  <p className="font-mono text-[10px] tracking-widest text-muted uppercase mt-1">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT — Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22,1,0.36,1] }}
          className="hidden lg:flex col-span-4 flex-col items-center justify-end pl-10 relative"
        >
          {/* Rotating label ring */}
          <div className="absolute top-8 right-0 w-24 h-24">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full animate-spin-slow"
            >
              <defs>
                <path id="circle" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
              </defs>
              <text className="font-mono" fontSize="9.5" fill="#E8272A" letterSpacing="3.2">
                <textPath href="#circle">AVAILABLE FOR HIRE · 2026 · OPEN TO WORK ·</textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-red text-xl">✦</span>
            </div>
          </div>

          {/* Photo frame */}
          <div className="relative w-full max-w-[280px]">
            {/* Corner marks */}
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

            {/* Caption strip */}
            <div className="absolute bottom-0 left-0 right-0 bg-red px-4 py-2 flex items-center justify-between">
              <span className="font-condensed font-700 text-xs tracking-widest uppercase text-paper">
                Narayan Phukan
              </span>
              <span className="font-mono text-[9px] text-paper/80">Fig. 01</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── MARQUEE TICKER ── */}
      <div className="mt-10 border-t border-b border-rule dark:border-darkRule py-3 overflow-hidden bg-ink dark:bg-darkSurface">
        <div className="flex gap-0 animate-marquee whitespace-nowrap">
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={i} className="flex items-center gap-4">
              <span className="font-condensed font-700 text-sm tracking-[0.2em] uppercase text-paper/70 px-6">
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