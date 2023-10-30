"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import { Tabs, Tab } from "@nextui-org/react";
import HeadingSection from "../ui/HeadingSection";
import Link from "next/link";

const Jobs = () => {
  return (
    <section id="experience" className="container mx-auto max-w-4xl py-36">
      <HeadingSection>Where I’ve Worked</HeadingSection>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          type: "Tween",
          ease: [0.17, 0.55, 0.55, 1],
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex md:flex-row flex-col xl:px-0 md:px-6  gap-10 "
      >
        <Tabs
          aria-label="Options"
          color="default"
          variant="underlined"
          classNames={{
            tabList:
              " w-full relative rounded-none p-0  md:flex-col md:justify-start items-start justify-center gap-0",
            cursor:
              "md:h-full md:-left-[3px] left-0 md:bottom-0 -bottom-[3px] md:w-[3px] w-full  h-[3px] bg-primary-500 z-50 rounded-xl",
            tab: "max-w-fit border-0 md:border-l-3 border-l-0 md:border-b-0 border-b-3  font-bold font-madeEvolveSansEvo text-sm tracking-widest border-slate-200 h-12 px-5 py-8 shadow-none  ",
            tabContent: "group-data-[selected=true]:text-primary-500",
          }}
        >
          <Tab
            key="Freelancer"
            title={
              <div className="flex items-center space-x-2">
                <span>Freelancer</span>
              </div>
            }
          >
            <motion.div
              className="max-w-xl md:px-8 px-5 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className=" mb-4 ">
                <h4 className="font-madeEvolveSans text-xl mb-1 ">
                  Web Developer
                  <span className="text-primary-500 ">
                    &nbsp;@&nbsp;<Link href="">Freelancer</Link>
                  </span>
                </h4>
                <h6 className="text-sm text-slate-400">sep 2021 - present</h6>
              </div>
              <ul className="text-slate-500 list-image-[url(../assets/images/arrow.png)] ml-4">
                <li>
                  <p className="text-lg">
                    Understanding client requirements, I work closely with
                    clients to understand their goals and requirements.
                  </p>
                </li>
                <li>
                  <p className="text-lg">
                    I create a plan for the website&apos;s structure and design.
                    This involves creating wireframes or mockups of the
                    website&apos;s layout and design elements to ensure
                    it&apos;s user-friendly.
                  </p>
                </li>
                <li>
                  <p className="text-lg">
                    Developing the website: Once the design is finalized, I
                    begin coding the website for what fits the project
                    requirements.
                  </p>
                </li>
                <li>
                  <p className="text-lg">
                    I ensure that the website is responsive and optimized for
                    search engines and that it meets web accessibility
                    standards.
                  </p>
                </li>
                <li>
                  <p className="text-lg">
                    manage my schedule and workload effectively, and be able to
                    work independently without direct supervision.
                  </p>
                </li>
              </ul>
            </motion.div>
          </Tab>
          <Tab
            key="Raizer"
            title={
              <div className="flex items-center space-x-2">
                {/* <MusicIcon /> */}
                <span>Razier</span>
              </div>
            }
          >
            <motion.div
              className="max-w-xl md:px-8 px-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className=" mb-4 ">
                <h4 className="font-madeEvolveSans text-xl mb-1 ">
                  Front-End Developer (React JS)
                  <span className="text-primary-500 ">
                    &nbsp;@&nbsp;<Link href="https://raizer.tech/">Razier</Link>
                  </span>
                </h4>
                <h6 className="text-sm text-slate-400">sep 2022 - june 2023</h6>
              </div>
              <ul className="text-slate-500 list-image-[url(../assets/images/arrow.png)] ml-4">
                <li>
                  <p className="text-lg">
                    Building responsive and interactive user interfaces using
                    React JS.
                  </p>
                </li>
                <li>
                  <p className="text-lg">
                    Collaborating with designers, developers, and other
                    stakeholders to ensure the best possible user experience.
                  </p>
                </li>
                <li>
                  <p className="text-lg">
                    Developing reusable and modular components for use across
                    multiple projects.
                  </p>
                </li>
                <li>
                  <p className="text-lg">
                    Conducting code reviews and providing constructive feedback
                    to other developers.
                  </p>
                </li>
                <li>
                  <p className="text-lg">
                    Staying up-to-date with emerging trends and best practices
                    in Front-End development and React JS in particular.
                  </p>
                </li>
                <li>
                  <p className="text-lg">
                    Participating in agile development processes, including
                    daily standups, sprint planning, and retrospectives.
                  </p>
                </li>
              </ul>
            </motion.div>
          </Tab>
          <Tab
            key="DragonFly"
            title={
              <div className="flex items-center space-x-2 ">
                {/* <VideoIcon /> */}
                <span>Dragon Fly</span>
              </div>
            }
          >
            <motion.div
              className="max-w-xl px-md:px-8 px-5 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className=" mb-4 ">
                <h4 className="font-madeEvolveSans text-xl mb-1 ">
                  Frontend Developer Intern
                  <span className="text-primary-500 ">
                    &nbsp;@&nbsp;
                    <Link href="">Dragonfly-soft</Link>
                  </span>
                </h4>
                <h6 className="text-sm text-slate-400">
                  april 2022 - july 2022
                </h6>
              </div>
              <ul className="text-slate-500 list-image-[url(../assets/images/arrow.png)] ml-4">
                <li>
                  <p className="text-lg">
                    Integrating the front-end with the back-end built on
                    Laravel.
                  </p>
                </li>
                <li>
                  <p className="text-lg">
                    Work with various third-party libraries and plugins to
                    implement features.
                  </p>
                </li>
                <li>
                  <p className="text-lg">
                    This project was an excellent opportunity for me to develop
                    my skills as a front-end developer using Vue.js Framework.
                  </p>
                </li>
                <li>
                  <p className="text-lg">
                    Communicating with the whole team and joining the daily
                    meetings using Slack.
                  </p>
                </li>
              </ul>
            </motion.div>
          </Tab>
        </Tabs>
      </motion.div>
      <div></div>
    </section>
  );
};

export default Jobs;
