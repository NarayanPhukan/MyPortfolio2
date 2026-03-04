"use client"

import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22,1,0.36,1] } },
};

export default function Services() {
  return (
    <section id="services" className="scroll-mt-[90px] border-t border-rule dark:border-darkRule">

      {/* ── SECTION HEADER ── */}
      <div className="px-6 lg:px-12 py-4 border-b border-rule dark:border-darkRule flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] tracking-[0.3em] text-muted uppercase">§ 03</span>
          <span className="w-8 h-[1px] bg-rule dark:bg-darkRule" />
          <span className="font-condensed font-700 text-xl tracking-widest uppercase text-ink dark:text-darkInk">
            Services
          </span>
        </div>
        <span className="font-mono text-[10px] text-muted tracking-widest hidden sm:block">
          What I Offer
        </span>
      </div>

      {/* ── INTRO ROW ── */}
      <div className="px-6 lg:px-12 py-12 grid grid-cols-12 gap-8 border-b border-rule dark:border-darkRule">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="col-span-12 lg:col-span-5"
        >
          <h2 className="font-display font-900 italic text-[clamp(32px,5vw,64px)] leading-[0.95] text-ink dark:text-darkInk">
            What I<br />
            <span className="text-red not-italic">Build</span><br />
            for You.
          </h2>
        </motion.div>
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="col-span-12 lg:col-span-7 flex items-end"
        >
          <p className="font-condensed text-xl leading-relaxed text-muted max-w-xl">
            End-to-end web solutions using modern technologies.
            From pixel-perfect interfaces to robust server architectures —
            every project is built to perform and built to last.
          </p>
        </motion.div>
      </div>

      {/* ── SERVICES GRID ── */}
      <div className="px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-rule dark:divide-darkRule border-b border-rule dark:border-darkRule">
        {serviceData.map(({ icon, title, description, link }, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group py-10 px-8 first:pl-0 last:pr-0 hover:bg-ink dark:hover:bg-darkSurface transition-colors duration-300 cursor-pointer"
          >
            {/* Number */}
            <p className="font-mono text-[10px] tracking-widest text-muted group-hover:text-red transition-colors duration-200 mb-6">
              {String(i + 1).padStart(2, "0")}
            </p>

            {/* Icon */}
            <div className="w-10 h-10 border border-rule dark:border-darkRule group-hover:border-red flex items-center justify-center mb-8 transition-colors duration-200">
              <Image src={icon} alt={title} width={20} height={20} className="group-hover:invert transition-all duration-300" />
            </div>

            {/* Title */}
            <h3 className="font-condensed font-700 text-xl tracking-wide uppercase text-ink dark:text-darkInk group-hover:text-paper transition-colors duration-300 mb-3">
              {title}
            </h3>

            {/* Desc */}
            <p className="font-condensed text-sm leading-relaxed text-muted group-hover:text-paper/60 transition-colors duration-300 mb-6">
              {description}
            </p>

            {/* Link */}
            <a
              href={link || "#contact"}
              className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted group-hover:text-red transition-colors duration-200 flex items-center gap-2"
            >
              Enquire <span className="transition-transform duration-200 group-hover:translate-x-1 inline-block">→</span>
            </a>
          </motion.div>
        ))}
      </div>

      {/* ── BOTTOM CTA STRIP ── */}
      <motion.div
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="px-6 lg:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <p className="font-condensed text-xl text-muted">
          Have a project in mind? Let&apos;s talk.
        </p>
        <a
          href="#contact"
          className="font-condensed font-700 tracking-widest uppercase text-sm
                     border border-ink dark:border-darkRule text-ink dark:text-darkInk
                     px-8 py-3 hover:bg-red hover:text-paper hover:border-red transition-all duration-200"
        >
          Start a Project →
        </a>
      </motion.div>
    </section>
  );
}