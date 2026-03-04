"use client"

import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function About({ isDark }) {
  return (
    <section id="about" className="scroll-mt-18 sm:scroll-mt-22.5 border-t border-rule dark:border-darkRule">

      {/* SECTION HEADER */}
      <div className="px-4 sm:px-6 lg:px-12 py-4 border-b border-rule dark:border-darkRule flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] text-muted uppercase">§ 02</span>
          <span className="w-6 sm:w-8 h-px bg-rule dark:bg-darkRule" />
          <span className="font-condensed font-700 text-lg sm:text-xl tracking-widest uppercase text-ink dark:text-darkInk">
            Profile
          </span>
        </div>
        <span className="font-mono text-[9px] text-muted tracking-widest hidden sm:block">About the Developer</span>
      </div>

      {/* CONTENT */}
      <div className="px-4 sm:px-6 lg:px-12 py-10 sm:py-16">

        {/* Photo + quote — stacks on mobile */}
        <div className="flex flex-col sm:flex-row gap-8 lg:gap-12 mb-10 sm:mb-14">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="w-full sm:w-56 lg:w-72 shrink-0"
          >
            <div className="relative">
              <Image
                src={assets.user_image}
                alt="Narayan Phukan"
                width={320} height={380}
                className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="bg-ink dark:bg-darkSurface px-4 sm:px-5 py-3 sm:py-4">
                <p className="font-display italic text-sm sm:text-base text-paper/90 leading-snug">
                  "I write code the way editors write copy — with precision and intent."
                </p>
                <p className="font-mono text-[9px] tracking-widest text-red uppercase mt-2">— Narayan Phukan</p>
              </div>
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex-1"
          >
            <p className="font-mono text-[10px] tracking-[0.3em] text-red uppercase mb-3 sm:mb-4">Biography</p>
            <p className="font-condensed text-base sm:text-lg leading-relaxed text-ink dark:text-darkInk mb-4">
              Narayan Phukan is a full-stack developer from Assam, India. He studied
              Computer Science and has spent the last 3+ years building production web
              applications with the MERN stack.
            </p>
            <p className="font-condensed text-base sm:text-lg leading-relaxed text-muted">
              He obsesses over clean architecture, intuitive interfaces, and the
              details that separate good software from great software.
            </p>

            {/* Status */}
            <div className="flex items-center gap-2 mt-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-mono text-[10px] tracking-widest text-muted uppercase">Available for new projects</span>
            </div>

            {/* Education badge */}
            <div className="mt-6 border border-rule dark:border-darkRule p-4 inline-block">
              <p className="font-mono text-[9px] tracking-widest text-muted uppercase mb-1">Education</p>
              <p className="font-condensed font-700 text-base text-ink dark:text-darkInk">Bachelors in Computer Science</p>
              <p className="font-mono text-[10px] text-red mt-0.5">2024 -Onwards</p>
            </div>
          </motion.div>
        </div>

        {/* Info cards — 1 col mobile, 3 col desktop */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <p className="font-mono text-[10px] tracking-[0.3em] text-red uppercase mb-5">At a Glance</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 sm:divide-x divide-rule dark:divide-darkRule border border-rule dark:border-darkRule">
            {infoList.map(({ icon, iconDark, title, description }, i) => (
              <div key={i} className="flex items-start gap-4 p-5 sm:p-6 border-b sm:border-b-0 border-rule dark:border-darkRule last:border-0 group">
                <div className="w-8 h-8 flex items-center justify-center border border-rule dark:border-darkRule group-hover:border-red transition-colors duration-200 shrink-0 mt-0.5">
                  <Image src={isDark ? iconDark : icon} alt={title} width={16} height={16} />
                </div>
                <div>
                  <p className="font-condensed font-700 text-sm tracking-wide uppercase text-ink dark:text-darkInk">{title}</p>
                  <p className="font-condensed text-sm text-muted leading-snug mt-0.5">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="mt-8 sm:mt-10"
        >
          <p className="font-mono text-[10px] tracking-[0.3em] text-red uppercase mb-5">Tools Used</p>
          <div className="flex flex-wrap gap-3">
            {toolsData.map((tool, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, rotate: 4 }}
                className="w-10 h-10 sm:w-11 sm:h-11 border border-rule dark:border-darkRule flex items-center justify-center hover:border-red transition-colors duration-200 cursor-pointer"
              >
                <Image src={tool} alt="Tool" width={20} height={20} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}