"use client"

import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Services() {
  return (
    <section id="services" className="scroll-mt-18 sm:scroll-mt-22.5 border-t border-rule dark:border-darkRule">

      {/* SECTION HEADER */}
      <div className="px-4 sm:px-6 lg:px-12 py-4 border-b border-rule dark:border-darkRule flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] text-muted uppercase">§ 03</span>
          <span className="w-6 sm:w-8 h-px bg-rule dark:bg-darkRule" />
          <span className="font-condensed font-700 text-lg sm:text-xl tracking-widest uppercase text-ink dark:text-darkInk">Services</span>
        </div>
        <span className="font-mono text-[9px] text-muted tracking-widest hidden sm:block">What I Offer</span>
      </div>

      {/* INTRO */}
      <div className="px-4 sm:px-6 lg:px-12 py-10 sm:py-12 border-b border-rule dark:border-darkRule flex flex-col sm:flex-row gap-6 sm:gap-12 items-start sm:items-end">
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-display font-900 italic leading-[0.95] text-ink dark:text-darkInk shrink-0"
          style={{ fontSize: "clamp(28px, 5vw, 64px)" }}
        >
          What I<br />
          <span className="text-red not-italic">Build</span><br />
          for You.
        </motion.h2>
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-condensed text-base sm:text-xl leading-relaxed text-muted max-w-xl"
        >
          End-to-end web solutions using modern technologies.
          From pixel-perfect interfaces to robust server architectures —
          every project is built to perform and built to last.
        </motion.p>
      </div>

      {/* SERVICES GRID — 1 col mobile, 2 col tablet, 4 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-rule dark:divide-darkRule border-b border-rule dark:border-darkRule">
        {serviceData.map(({ icon, title, description, link }, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`group px-5 sm:px-6 lg:px-8 py-8 sm:py-10
              hover:bg-ink dark:hover:bg-darkSurface transition-colors duration-300 cursor-pointer
              ${i % 2 === 1 ? "sm:border-l border-rule dark:border-darkRule" : ""}
              ${i >= 2 ? "sm:border-t lg:border-t-0 border-rule dark:border-darkRule" : ""}
              ${i > 0 ? "lg:border-l border-rule dark:border-darkRule" : ""}`}
          >
            <p className="font-mono text-[10px] tracking-widest text-muted group-hover:text-red transition-colors duration-200 mb-5 sm:mb-6">
              {String(i + 1).padStart(2, "0")}
            </p>
            <div className="w-9 h-9 sm:w-10 sm:h-10 border border-rule dark:border-darkRule group-hover:border-red flex items-center justify-center mb-6 sm:mb-8 transition-colors duration-200">
              <Image src={icon} alt={title} width={18} height={18} className="group-hover:invert transition-all duration-300" />
            </div>
            <h3 className="font-condensed font-700 text-base sm:text-xl tracking-wide uppercase text-ink dark:text-darkInk group-hover:text-paper transition-colors duration-300 mb-2 sm:mb-3">
              {title}
            </h3>
            <p className="font-condensed text-sm leading-relaxed text-muted group-hover:text-paper/60 transition-colors duration-300 mb-5 sm:mb-6">
              {description}
            </p>
            <a href={link || "#contact"} className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted group-hover:text-red transition-colors duration-200 flex items-center gap-2">
              Enquire <span className="transition-transform duration-200 group-hover:translate-x-1 inline-block">→</span>
            </a>
          </motion.div>
        ))}
      </div>

      {/* CTA STRIP */}
      <motion.div
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="px-4 sm:px-6 lg:px-12 py-6 sm:py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <p className="font-condensed text-base sm:text-xl text-muted">Have a project in mind? Let&apos;s talk.</p>
        <a href="#contact" className="font-condensed font-700 tracking-widest uppercase text-xs sm:text-sm border border-ink dark:border-darkRule text-ink dark:text-darkInk px-6 sm:px-8 py-2.5 sm:py-3 hover:bg-red hover:text-paper hover:border-red transition-all duration-200 whitespace-nowrap">
          Start a Project →
        </a>
      </motion.div>
    </section>
  );
}