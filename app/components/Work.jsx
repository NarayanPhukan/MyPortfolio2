"use client"

import { workData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22,1,0.36,1] } },
};

export default function Work() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="work" className="scroll-mt-[90px] border-t border-rule dark:border-darkRule">

      {/* ── SECTION HEADER ── */}
      <div className="px-6 lg:px-12 py-4 border-b border-rule dark:border-darkRule flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] tracking-[0.3em] text-muted uppercase">§ 04</span>
          <span className="w-8 h-[1px] bg-rule dark:bg-darkRule" />
          <span className="font-condensed font-700 text-xl tracking-widest uppercase text-ink dark:text-darkInk">
            Selected Work
          </span>
        </div>
        <span className="font-mono text-[10px] text-muted tracking-widest hidden sm:block">
          {workData.length} Projects
        </span>
      </div>

      {/* ── FEATURED PROJECT (first) ── */}
      <motion.div
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="grid grid-cols-12 border-b border-rule dark:border-darkRule"
      >
        {/* Image */}
        <div className="col-span-12 lg:col-span-7 relative overflow-hidden aspect-[16/9] lg:aspect-auto lg:min-h-[420px]">
          <Image
            src={workData[0].bgImage}
            alt={workData[0].title}
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-105"
          />
          <div className="absolute inset-0 bg-ink/20" />
          <div className="absolute top-6 left-6">
            <span className="font-mono text-[9px] tracking-widest uppercase bg-red text-paper px-3 py-1">
              Featured
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="col-span-12 lg:col-span-5 px-8 lg:px-12 py-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-rule dark:border-darkRule">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-red uppercase mb-4">
              Project 01
            </p>
            <h3 className="font-display font-900 italic text-[clamp(28px,3.5vw,48px)] leading-tight text-ink dark:text-darkInk mb-4">
              {workData[0].title}
            </h3>
            <p className="font-condensed font-300 text-sm tracking-widest uppercase text-muted mb-6">
              {workData[0].description}
            </p>
            <p className="font-condensed text-lg text-muted leading-relaxed">
              A fully responsive, production-grade application built with
              React, Node.js, and MongoDB. Focused on performance and
              clean user experience.
            </p>
          </div>
          <div className="flex gap-4 mt-8">
            <a href="#" className="font-condensed font-700 tracking-widest uppercase text-sm bg-ink dark:bg-darkInk text-paper dark:text-darkPaper px-6 py-3 hover:bg-red transition-colors duration-200 flex items-center gap-2">
              Live Demo →
            </a>
            <a href="#" className="font-condensed font-700 tracking-widest uppercase text-sm border border-rule dark:border-darkRule text-ink dark:text-darkInk px-6 py-3 hover:border-red hover:text-red transition-colors duration-200">
              GitHub
            </a>
          </div>
        </div>
      </motion.div>

      {/* ── LIST VIEW (remaining projects) ── */}
      <div className="px-6 lg:px-12">
        {workData.slice(1).map((project, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="group grid grid-cols-12 items-center py-8 border-b border-rule dark:border-darkRule cursor-pointer gap-4"
          >
            {/* Index */}
            <div className="col-span-1">
              <span className="font-mono text-[11px] tracking-widest text-muted group-hover:text-red transition-colors duration-200">
                0{i + 2}
              </span>
            </div>

            {/* Title */}
            <div className="col-span-5 lg:col-span-4">
              <h3 className="font-display italic font-700 text-xl lg:text-2xl text-ink dark:text-darkInk group-hover:text-red transition-colors duration-200">
                {project.title}
              </h3>
            </div>

            {/* Tag */}
            <div className="col-span-3 hidden lg:block">
              <span className="font-mono text-[10px] tracking-widest uppercase text-muted border border-rule dark:border-darkRule px-3 py-1">
                {project.description}
              </span>
            </div>

            {/* Year */}
            <div className="col-span-2 hidden lg:block">
              <span className="font-mono text-[10px] tracking-widest text-muted">2024</span>
            </div>

            {/* Arrow */}
            <div className="col-span-6 lg:col-span-2 flex justify-end">
              <span className="font-condensed font-700 text-sm text-muted group-hover:text-red transition-all duration-200 flex items-center gap-2">
                View
                <span className="transition-transform duration-200 group-hover:translate-x-1 inline-block">→</span>
              </span>
            </div>

            {/* Hover thumbnail */}
            <motion.div
              animate={{ opacity: hovered === i ? 1 : 0, scale: hovered === i ? 1 : 0.9 }}
              transition={{ duration: 0.25 }}
              className="absolute right-24 hidden lg:block w-40 h-28 overflow-hidden pointer-events-none z-20 shadow-2xl"
            >
              <Image src={project.bgImage} alt={project.title} fill className="object-cover" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* ── FOOTER CTA ── */}
      <div className="px-6 lg:px-12 py-8 flex justify-end">
        <a
          href="#"
          className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted hover:text-red transition-colors duration-200 flex items-center gap-3"
        >
          View Full Archive <span>→</span>
        </a>
      </div>
    </section>
  );
}