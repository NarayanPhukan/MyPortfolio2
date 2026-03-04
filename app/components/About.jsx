"use client"

import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22,1,0.36,1] } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function About({ isDark }) {
  return (
    <section id="about" className="scroll-mt-[90px] border-t border-rule dark:border-darkRule">

      {/* ── SECTION HEADER ── */}
      <div className="px-6 lg:px-12 py-4 border-b border-rule dark:border-darkRule flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] tracking-[0.3em] text-muted uppercase">§ 02</span>
          <span className="w-8 h-[1px] bg-rule dark:bg-darkRule" />
          <span className="font-condensed font-700 text-xl tracking-widest uppercase text-ink dark:text-darkInk">
            Profile
          </span>
        </div>
        <span className="font-mono text-[10px] text-muted tracking-widest hidden sm:block">
          About the Developer
        </span>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="px-6 lg:px-12 py-16 grid grid-cols-12 gap-8 lg:gap-12">

        {/* Photo col */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="col-span-12 md:col-span-4 lg:col-span-3"
        >
          <div className="relative">
            <Image
              src={assets.user_image}
              alt="Narayan Phukan"
              width={320} height={400}
              className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Pull quote overlay */}
            <div className="mt-0 bg-ink dark:bg-darkSurface px-5 py-4">
              <p className="font-display italic text-base text-paper/90 leading-snug">
                "I write code the way editors write copy — with precision and intent."
              </p>
              <p className="font-mono text-[9px] tracking-widest text-red uppercase mt-2">
                — Narayan Phukan
              </p>
            </div>
          </div>
        </motion.div>

        {/* Text col */}
        <div className="col-span-12 md:col-span-8 lg:col-span-9">
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 lg:divide-x divide-rule dark:divide-darkRule"
          >
            {/* Bio */}
            <motion.div variants={fadeUp} className="lg:pr-10">
              <p className="font-mono text-[10px] tracking-[0.3em] text-red uppercase mb-4">Biography</p>
              <p className="font-condensed text-lg leading-relaxed text-ink dark:text-darkInk">
                Narayan Phukan is a full-stack developer from Assam, India. He studied
                Computer Science and has spent the last 3+ years building production web
                applications with the MERN stack.
              </p>
              <p className="font-condensed text-lg leading-relaxed text-muted mt-4">
                He obsesses over clean architecture, intuitive interfaces, and the
                details that separate good software from great software.
              </p>
            </motion.div>

            {/* Info cards */}
            <motion.div variants={fadeUp} className="lg:px-10 space-y-4">
              <p className="font-mono text-[10px] tracking-[0.3em] text-red uppercase mb-4">At a Glance</p>
              {infoList.map(({ icon, iconDark, title, description }, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 pb-4 border-b border-rule dark:border-darkRule last:border-0 last:pb-0 group"
                >
                  <div className="w-8 h-8 flex items-center justify-center border border-rule dark:border-darkRule group-hover:border-red transition-colors duration-200 flex-shrink-0 mt-0.5">
                    <Image src={isDark ? iconDark : icon} alt={title} width={16} height={16} />
                  </div>
                  <div>
                    <p className="font-condensed font-700 text-sm tracking-wide uppercase text-ink dark:text-darkInk">
                      {title}
                    </p>
                    <p className="font-condensed text-sm text-muted leading-snug mt-0.5">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Tools */}
            <motion.div variants={fadeUp} className="lg:pl-10">
              <p className="font-mono text-[10px] tracking-[0.3em] text-red uppercase mb-4">Tools Used</p>
              <div className="flex flex-wrap gap-3">
                {toolsData.map((tool, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1, rotate: 4 }}
                    className="w-11 h-11 border border-rule dark:border-darkRule flex items-center justify-center
                               hover:border-red transition-colors duration-200 cursor-pointer"
                  >
                    <Image src={tool} alt="Tool" width={20} height={20} />
                  </motion.div>
                ))}
              </div>

              {/* Education badge */}
              <div className="mt-8 border border-rule dark:border-darkRule p-4">
                <p className="font-mono text-[9px] tracking-widest text-muted uppercase mb-2">Education</p>
                <p className="font-condensed font-700 text-base text-ink dark:text-darkInk leading-snug">
                  B.Tech in Computer Science
                </p>
                <p className="font-mono text-[10px] text-red mt-1">2020 — 2024</p>
              </div>

              {/* Status */}
              <div className="mt-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-mono text-[10px] tracking-widest text-muted uppercase">
                  Available for new projects
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}