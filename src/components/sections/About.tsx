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
import { useInView } from "framer-motion";

import { Tooltip } from "@nextui-org/react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <section
      ref={ref}
      id="aboutme"
      className="container 2xl:max-w-[1440px]  xl:max-w-5xl mx-auto flex md:flex-row flex-col justify-center gap-12 xl:flex-nowrap flex-wrap py-36"
    >
      <div
        style={{
          transform: isInView ? "none" : "translateX(-500px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="md:shadow-xl overflow-hidden shadow-sm bg-white/50 backdrop-blur-[12px] rounded-[20px] md:mx-0 mx-8 mb-0 self-start"
      >
        <Image
          src={ProfilePic}
          className="  xl:mt-6 md:mt-5"
          alt="Ayham Mesho - Front-End Developer"
        />
      </div>
      <div className="flex flex-col gap-5 ">
        <AboutMe
          style={{
            transform: isInView ? "none" : "translatey(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
          }}
        />
        <div
          style={{
            transform: isInView ? "none" : "translatey(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
          }}
          className="overflow-hidden md:shadow-xl bg-white/50 xl:backdrop-blur-[12px] xl:max-w-3xl    xl:p-8 p-6 px-5 md:rounded-[20px]"
        >
          <h3 className="text-primary-500 mb-3 font-medium md:text-3xl text-2xl font-madeEvolveSans">
            Skills I Know
          </h3>
          <Skills />
        </div>
        <div
          style={{
            transform: isInView ? "none" : "translatey(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 2s",
          }}
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
                className="!fill-primary-500 xl:w-auto md:w-[80px] w-[60px]"
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
                className="!fill-primary-500 xl:w-auto md:w-[45px] w-8"
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
                className="!fill-primary-500 xl:w-auto md:w-[80px] w-[60px]"
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
                className="!fill-primary-500 xl:w-auto md:w-[146px] w-24"
                src={express}
                height={50}
                alt="express js"
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
