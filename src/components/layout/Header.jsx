"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Wave from "@/assets/images/Wave.svg";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
// import wave from "../../assets/images/wave.svg";
// import { Wave } from "@/components/ui/mainWave";
console.log(Wave);

const Header = () => {
  return (
    <>
      {/* <Wave className=" absolute top-0 left-0 right-0 z-0 " /> */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 3 }}
      >
        <Image
          className="image-bg xl:w-full h-screen xl:h-auto absolute top-0 left-0 z-0 xl:object-fill object-cover"
          alt="bg-wave"
          src={Wave}
        />
      </motion.div>

      <Navbar />
      <header id="home" className="h-screen flex items-center justify-center">
        <div className="2xl:px-[30px] px-5 2xl:pr-[121px]  2xl:py-[50px] py-8 2xl:rounded-2xl bg-white/50  backdrop-blur-[12px] ">
          <h5 className="text-primary-500 text-lg font-bold font-azeretMono pl-1 sm:tracking-[2px]">
            Hi, My Name is
          </h5>
          <h1 className="2xl:text-8xl md:text-6xl min-[400px]:text-4xl text-3xl font-madeEvolveSansEVO font-bold">
            Ayham Mesho
            <br />
            <span className="text-primary-500 font-madeEvolveSans ">
              I&apos;m Front-End Developer
            </span>
          </h1>
          <p className="pt-4 md:max-w-[600px] mb-8 text-slate-600 min-[400px]:text-lg text-sm">
            I’m software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human cantered products as Freelancer
          </p>
          <div className="flex gap-[30px] rounded-xl items-center">
            <Link
              className="w-full sm:w-auto main-btn !px-4 !py-2  !border-4  border-primary-500 text-primary-500 !rounded-lg font-madeEvolveSansEVO font-medium xl:text-xl text-lg cursor-pointer"
              to={"work"}
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={0}
              duration={500}
              delay={500}
              isDynamic={true}
            >
              My Work
            </Link>

            <Link
              className="text-slate-600 hidden sm:block cursor-pointer"
              to={"aboutme"}
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={0}
              duration={500}
              delay={500}
              isDynamic={true}
            >
              About Me
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
