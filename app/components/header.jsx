import { assets } from "@/assets/assets";
import { motion } from "motion/react"
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
      
      initial={{scale: 0}}
      whileInView={{scale:1}}
      transition={{duration : 0.8, type: 'spring', stiffness:100}}

      >
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </motion.div>
      <motion.h3 
      initial={{y:-20, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration : 0.6, delay:0.3}}
       className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">
        Hi! I'm Narayan Phukan{" "}
        <Image src={assets.hand_icon} alt="" className=" w-6" />
      </motion.h3>
      <motion.h1
      initial={{y: -30, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration : 0.8, delay:0.5}}
      className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">
        Mernstack Web Developer based in India.
      </motion.h1>
      <motion.p className="max-w-2xl mx-auto font-ovo" initial={{ opacity:0}}
      whileInView={{ opacity:1}}
      transition={{duration : 0.6, delay:0.7}}>
        I design and develop complete full-stack web applications using the MERN
        stack. From intuitive React frontends to robust Node.js backends, I
        build solutions that are scalable, clean, and production-ready.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
        initial={{y:30, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration : 0.6, delay:1}}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          Contact me{" "}
          <Image src={assets.right_arrow_white} className="w-4" alt="" />
        </motion.a>
        <motion.a

        initial={{y:30, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration : 0.6, delay:1.2
        
      }}

          href="/sample"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:text-black dark:bg-white" 
        >
          My Resume <Image src={assets.download_icon} className="w-4" alt="" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
