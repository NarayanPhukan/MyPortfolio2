"use client"

import { assets, workData } from "@/assets/assets"
import Image from "next/image"
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function Work({ isDark }) {
  return (
    <section
      id="work"
      className="w-full px-[12%] py-28 scroll-mt-24"
    >

      {/* Heading */}
      <motion.div
        className="text-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h4
          variants={fadeUp}
          className="mb-3 text-lg font-ovo text-gray-600 dark:text-white/70"
        >
          My Portfolio
        </motion.h4>

        <motion.h2
          variants={fadeUp}
          className="text-4xl sm:text-5xl font-ovo"
        >
          My Latest Work
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="max-w-2xl mx-auto mt-6 mb-16 text-gray-700 dark:text-white/80 leading-relaxed"
        >
          Explore a collection of projects showcasing my expertise in modern
          full-stack MERN development.
        </motion.p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-10"
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{ y: -10 }}
            className="relative rounded-3xl overflow-hidden group cursor-pointer"
          >

            {/* Project Image */}
            <Image
              src={project.bgImage}
              alt={project.title}
              width={600}
              height={600}
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* Content Card */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%]
                            bg-white dark:bg-darkTheme
                            rounded-2xl px-5 py-4
                            flex items-center justify-between
                            shadow-xl
                            transition-all duration-500
                            group-hover:bottom-8"
            >
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-white/70">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center justify-center
                              w-10 h-10
                              border border-black dark:border-white
                              rounded-full
                              transition-all duration-300
                              group-hover:bg-black
                              dark:group-hover:bg-white"
              >
                <Image
                  src={assets.send_icon}
                  alt="View Project"
                  width={18}
                  height={18}
                  className="group-hover:invert dark:group-hover:invert-0"
                />
              </div>
            </div>

          </motion.div>
        ))}
      </motion.div>

      {/* Show More Button */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex justify-center mt-20"
      >
        <a
          href="#"
          className="flex items-center gap-2
                     border border-gray-700 dark:border-white
                     text-gray-700 dark:text-white
                     rounded-full py-3 px-10
                     hover:bg-lightHover
                     dark:hover:bg-darkHover
                     transition duration-500"
        >
          Show more
          <Image
            src={isDark ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
            alt=""
            width={16}
            height={16}
          />
        </a>
      </motion.div>

    </section>
  )
}