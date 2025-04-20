"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiCornerRightDown } from "react-icons/fi";
import BackgroundAnimation from "./BackgroundAnimation";

type HeroProps = {
  handleClick?: () => void;
};

const Hero = ({ handleClick }: HeroProps) => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1040px] mx-auto px-6 pt-4 relative">
      {/* Left: Text Content */}
      <div className="w-full md:w-1/2 flex flex-col">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[65px] font-extrabold leading-[72px] bg-gradient-to-r from-cyan-400 via-white to-purple-500 bg-clip-text text-transparent mb-4 md:text-[56px] md:leading-[56px] sm:text-[28px] sm:leading-[32px] sm:pt-4"
        >
          <small className="text-base block mb-2">Hello there,</small>
          I’M a MERN Stack <br /> and PHP Developer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-[800px] text-[24px] font-light leading-[40px] text-white/70 pb-14 sm:text-[16px] sm:leading-[24px]"
        >
          I’M a full stack web developer with 5 years experience in PHP and 2
          years experience in the MERN stack. Below are some of my recent
          projects{" "}
          <FiCornerRightDown className="inline-block ml-2" />
        </motion.p>
        <button
  onClick={handleClick}
  className="relative w-[262px] h-[64px] rounded-full text-white text-[24px] font-semibold overflow-hidden group"
>
  {/* Back layer (visible on hover) */}
  <span className="absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-purple-600 group-hover:opacity-100 opacity-0 transition duration-300 z-0">
    Contact Me
  </span>

  {/* Front layer (fades out on hover) */}
  <span className="absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:opacity-0 opacity-100 transition duration-300 z-10">
    Contact Me
  </span>
</button>

      </div>

      {/* Right: Background Animation */}
      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5, duration: 1 }}
  className="w-full md:w-1/2 justify-center mt-10 md:mt-0 hidden md:flex"
>
  <div className="w-[400px] opacity-60">
    <BackgroundAnimation />
  </div>
</motion.div>


    </section>
  );
};

export default Hero;
