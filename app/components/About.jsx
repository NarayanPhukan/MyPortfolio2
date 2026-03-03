"use client"

import { assets, infoList, toolsData } from "@/assets/assets"
import Image from "next/image"
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2
    }
  }
}

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export default function About({ isDark }) {
  return (
    <section
      id="about"
      className="relative w-full px-[12%] py-28 scroll-mt-24"
    >

      {/* Section Heading */}
      <motion.div
        className="text-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h4
          variants={fadeUp}
          className="text-lg font-ovo mb-3 text-gray-600 dark:text-white/70"
        >
          Introduction
        </motion.h4>

        <motion.h2
          variants={fadeUp}
          className="text-4xl sm:text-5xl font-ovo"
        >
          About Me
        </motion.h2>
      </motion.div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center gap-20 mt-24">

        {/* Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-72 sm:w-80 rounded-3xl overflow-hidden"
        >
          <Image
            src={assets.user_image}
            alt="Narayan Phukan"
            width={320}
            height={380}
            className="rounded-3xl transition duration-500 hover:scale-105"
          />

          {/* subtle glow */}
          <div className="absolute inset-0 rounded-3xl bg-purple-500 blur-3xl opacity-10 -z-10"></div>
        </motion.div>

        {/* Right Side */}
        <div className="flex-1">

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12 max-w-2xl text-gray-700 dark:text-white/80 leading-relaxed"
          >
            I design and develop scalable full-stack web applications using the MERN stack.
            From intuitive React frontends to robust Node.js backends, I build
            clean, production-ready solutions with modern best practices.
          </motion.p>

          {/* Info Cards */}
          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                key={index}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="border border-gray-300 dark:border-white/30 
                           rounded-2xl p-6 cursor-pointer
                           transition-all duration-500
                           hover:shadow-2xl
                           dark:hover:shadow-white/20
                           hover:bg-lightHover 
                           dark:hover:bg-darkHover/40"
              >
                <Image
                  src={isDark ? iconDark : icon}
                  alt={title}
                  width={28}
                  height={28}
                />

                <h3 className="my-4 font-semibold text-gray-800 dark:text-white">
                  {title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-white/70 leading-6">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools */}
          <motion.h4
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-14 mb-6 font-ovo text-gray-700 dark:text-white/80"
          >
            Tools I Use
          </motion.h4>

          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-6 flex-wrap"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.15, rotate: 6 }}
                className="flex items-center justify-center 
                           w-14 aspect-square 
                           border border-gray-300 dark:border-white/30 
                           rounded-full cursor-pointer
                           transition-all duration-500
                           hover:shadow-xl
                           dark:hover:shadow-white/20"
              >
                <Image
                  src={tool}
                  alt="Tool"
                  width={24}
                  height={24}
                />
              </motion.li>
            ))}
          </motion.ul>

        </div>
      </div>
    </section>
  )
}