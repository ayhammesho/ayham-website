"use client";

import React, { useState } from "react";
import HeadingSection from "../ui/HeadingSection";
import github from "@/assets/images/github.svg";
import open from "@/assets/images/open-outline.svg";
import folder from "@/assets/images/folder.svg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ArchiveProjects = () => {
  const [isFiltered, setIsFiltered] = useState(true);

  const archiveProjects = [
    {
      name: "Other Simple Fun Project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum",
      githubLink: "this is github link",
      liveLink: "",
      skills: ["Next.js", "Axios", "Chart.js", "Vue.js", "React"],
    },
    {
      name: "Other Simple Fun Project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum",
      githubLink: "",
      liveLink: "Live Link",
      skills: ["Next.js", "Axios", "Chart.js", "Vue.js", "React"],
    },
    {
      name: "Other Simple Fun Project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum",
      githubLink: "this is github link",
      liveLink: "Live Link",
      skills: ["Next.js", "Axios", "Chart.js", "Vue.js", "React"],
    },
    {
      name: "Other Simple Fun Project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum",
      githubLink: "",
      liveLink: "",
      skills: ["Next.js", "Axios", "Chart.js", "Vue.js", "React"],
    },
    {
      name: "Other Simple Fun Project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum",
      githubLink: "this is github link",
      liveLink: "",
      skills: ["Next.js", "Axios", "Chart.js", "Vue.js", "React"],
    },
    {
      name: "Other Simple Fun Project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum",
      githubLink: "",
      liveLink: "",
      skills: ["Next.js", "Axios", "Chart.js", "Vue.js", "React"],
    },
    {
      name: "Other Simple Fun Project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum",
      githubLink: "",
      liveLink: "",
      skills: ["Next.js", "Axios", "Chart.js", "Vue.js", "React"],
    },
    {
      name: "Other Simple Fun Project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum",
      githubLink: "",
      liveLink: "",
      skills: ["Next.js", "Axios", "Chart.js", "Vue.js", "React"],
    },
    {
      name: "Other Simple Fun Project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum",
      githubLink: "",
      liveLink: "",
      skills: ["Next.js", "Axios", "Chart.js", "Vue.js", "React"],
    },
    {
      name: "Other Simple Fun Project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum",
      githubLink: "",
      liveLink: "",
      skills: ["Next.js", "Axios", "Chart.js", "Vue.js", "React"],
    },
    {
      name: "Other Simple Fun Project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum",
      githubLink: "",
      liveLink: "",
      skills: ["Next.js", "Axios", "Chart.js", "Vue.js", "React"],
    },
    {
      name: "Other Simple Fun Project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum",
      githubLink: "",
      liveLink: "",
      skills: ["Next.js", "Axios", "Chart.js", "Vue.js", "React"],
    },
  ];

  const filteredPorjects = archiveProjects.filter((project, i) => i <= 5);

  const getAllSkills = (skillsArr: any) => {
    return skillsArr.map((skill: any) => {
      return (
        <h5
          key={skill}
          className="lg:text-[16px] text-sm font-bold font-azeretMono"
        >
          {skill}
        </h5>
      );
    });
  };

  return (
    <section className="container mx-auto   xl:max-w-[1200px]  my-24">
      <HeadingSection>Other Simple Fun Projects</HeadingSection>

      <div className="grid sm:grid-cols-12 lg:grid-rows-2 lg:gap-5 gap-6 mb-12 mx-5 lg:mx-0 ">
        {isFiltered
          ? filteredPorjects.map((project, i) => (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 * i + 1,
                  duration: 0.2,
                  ease: [0.17, 0.55, 0.55, 1],
                }}
                className="shadow-lg hover:shadow-xl rounded-xl xl:col-span-4 md:col-span-6 sm:col-span-6  col-span-9 hover:!-translate-y-2 transition-all group   p-8"
                key={project.name}
              >
                <div className="flex justify-between mb-6 ">
                  <Image
                    src={folder}
                    className="lg:max-w-[40px] max-w-[35px]"
                    alt="my-gihub-acount"
                  />
                  <div className="flex  gap-5">
                    <Link
                      href={project.githubLink}
                      className={project.githubLink === "" ? "hidden" : ""}
                    >
                      <Image
                        src={github}
                        className="lg:max-w-[40px] max-w-[35px]"
                        alt="my-gihub-acount"
                      />
                    </Link>
                    <Link
                      href={project.liveLink}
                      className={project.liveLink === "" ? "hidden" : ""}
                    >
                      <Image
                        src={open}
                        className="lg:max-w-[40px] max-w-[35px]"
                        alt="my-project"
                      />
                    </Link>
                  </div>
                </div>
                <h4 className="font-madeEvolveSans font-medium text-2xl group-hover:text-primary-500 mb-3">
                  {project.name}
                </h4>
                <p className="mb-6 text-slate-500">{project.description}</p>
                <div className="flex text-primary-500 gap-3 flex-wrap ">
                  {getAllSkills(project.skills)}
                </div>
              </motion.div>
            ))
          : archiveProjects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 100 }}
                exit={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 * i,
                  duration: 0.2,
                  ease: [0.17, 0.55, 0.55, 1],
                }}
                className="shadow-lg hover:shadow-xl rounded-xl xl:col-span-4 md:col-span-6 sm:col-span-6  col-span-9 hover:!-translate-y-2 transition-all group   p-8"
              >
                <div className="flex justify-between mb-6 ">
                  <Image
                    src={folder}
                    className="lg:max-w-[40px] max-w-[35px]"
                    alt="my-gihub-acount"
                  />
                  <div className="flex  gap-5">
                    <Link
                      href={project.githubLink}
                      className={project.githubLink === "" ? "hidden" : ""}
                    >
                      <Image
                        src={github}
                        className="lg:max-w-[40px] max-w-[35px]"
                        alt="my-gihub-acount"
                      />
                    </Link>
                    <Link
                      href={project.liveLink}
                      className={project.liveLink === "" ? "hidden" : ""}
                    >
                      <Image
                        src={open}
                        className="lg:max-w-[40px] max-w-[35px]"
                        alt="my-project"
                      />
                    </Link>
                  </div>
                </div>
                <h4 className="font-madeEvolveSans font-medium text-2xl group-hover:text-primary-500 mb-3">
                  {project.name}
                </h4>
                <p className="mb-6 text-slate-500">{project.description}</p>
                <div className="flex text-primary-500 gap-3 flex-wrap ">
                  {getAllSkills(project.skills)}
                </div>
              </motion.div>
            ))}
      </div>

      <div className=" text-center">
        <button
          onClick={() => setIsFiltered(!isFiltered)}
          className="main-button px-4 py-2  border-4  border-primary-500 text-primary-500 rounded-lg font-madeEvolveSans font-medium text-xl"
        >
          {isFiltered ? "Show More" : "Show Less"}
        </button>
      </div>
    </section>
  );
};

export default ArchiveProjects;
