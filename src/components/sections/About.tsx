"use client";

import ProfilePic from "../../../public/Images/pfp.png";

import nodejs from "../../assets/images/devicon_nodejs.svg";
import mongodb from "../../assets/images/logos_mongodb-icon.svg";
import react from "../../assets/images/logos_react.svg";
import express from "../../assets/images/logos_express.svg";
import Image from "next/image";
import Skills from "@/components/ui/Skills";
import AboutMe from "@/components/ui/AboutMe";
import { useRef } from "react";
import { motion } from "framer-motion";

import { Tooltip } from "@nextui-org/react";

const About = () => {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      id="aboutme"
      className="container max-w-[1440px]  mx-auto flex md:flex-row flex-col justify-center gap-12 xl:flex-nowrap flex-wrap py-36"
    >
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{
          duration: 1,
          delay: 0.2,
          type: "spring",
          ease: [0.17, 0.55, 0.55, 1],
          bounce: 0.3,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="md:shadow-xl overflow-hidden shadow-sm bg-white/50 backdrop-blur-[12px] rounded-[20px] md:mx-0 mx-8 mb-0 self-stretch"
      >
        <Image
          src={ProfilePic}
          className="  xl:mt-6 md:mt-5 object-cover h-full"
          alt="Ayham Mesho - Front-End Developer"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{
          duration: 1,
          delay: 1,
          type: "spring",
          bounce: 0.3,
          ease: [0.17, 0.55, 0.55, 1],
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col gap-5 "
      >
        <AboutMe />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{
            duration: 1,
            delay: 1.5,
            ease: [0.17, 0.55, 0.55, 1],
            type: "spring",
            bounce: 0.3,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden md:shadow-xl bg-white/50 xl:backdrop-blur-[12px] xl:max-w-3xl    xl:p-8 p-6 px-5 md:rounded-[20px]"
        >
          <h3 className="text-primary-500 mb-3 font-medium md:text-3xl text-2xl font-madeEvolveSans">
            Skills I Work With
          </h3>
          <Skills />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{
            duration: 1,
            delay: 2,
            ease: [0.17, 0.55, 0.55, 1],
            type: "spring",
            bounce: 0.3,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:shadow-xl bg-white/50 xl:backdrop-blur-[12px] xl:max-w-3xl    xl:p-8 md:p-6  md:rounded-[20px]"
        >
          <h3 className="text-primary-500 font-medium md:text-3xl text-2xl font-madeEvolveSans px-5">
            My Recent Stack
          </h3>
          <div className="mt-5 px-10 flex md:gap-12 gap-6 justify-center flex-wrap ">
            <Tooltip
              content="Node JS"
              className="capitalize bg-primary-500 text-white dark:text-secondary-500 dark:bg-navyBlue-500"
            >
              <Image
                className="!fill-primary-500 xl:w-auto sm:w-[80px] w-[50px]"
                src={nodejs}
                height={75}
                alt="node js"
              />
            </Tooltip>
            <Tooltip
              content="Mongo DB"
              className="capitalize bg-primary-500 text-white dark:text-secondary-500 dark:bg-navyBlue-500"
            >
              <Image
                className="!fill-primary-500 xl:w-auto sm:w-[45px] w-8"
                src={mongodb}
                height={75}
                alt="mongodb"
              />
            </Tooltip>
            <Tooltip
              content="React JS"
              className="capitalize bg-primary-500 text-white dark:text-secondary-500 dark:bg-navyBlue-500"
            >
              <Image
                className="!fill-primary-500 xl:w-auto sm:w-[80px] w-[50px]"
                src={react}
                height={75}
                alt="react js"
              />
            </Tooltip>
            <Tooltip
              content="Express JS"
              className="capitalize bg-primary-500 text-white dark:text-secondary-500 dark:bg-navyBlue-500"
            >
              <Image
                className="!fill-primary-500 xl:w-auto sm:w-[146px] w-20"
                src={express}
                height={50}
                alt="express js"
              />
            </Tooltip>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
