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
      name: "Tours Rest API",
      description:
        "I created a Tours REST API as part of my journey in learning backend strategies. This API, developed using Node.js, leverages MongoDB as the database and Mongoose as the Object Data Modeling (ODM) tool.",
      githubLink: "https://github.com/ayhammesho/Tours-API",
      liveLink: "",
      skills: ["Node.js", "MongoDB", "Mongoose", "Pug js", "Javascript"],
    },
    {
      name: "Realtime Thermo Tracker with ESP",
      description:
        "In collaboration with my friend, we developed a real-time thermo tracker for a client. The project involved retrieving temperature data from an ESP device connected to the backend. ",
      githubLink: "https://github.com/ayhammesho/ThermoTracker",
      liveLink: "",
      skills: ["Javascript", "Python", "Flask", "Chart.js", "Restful API"],
    },
    {
      name: "Wohlio - Woocommerce",
      description:
        "Wohlio is a purpose-driven Woocommerce store on WordPress As a freelancer, I developed the e-commerce platform, showcasing my expertise in WordPress and Woocommerce while emphasizing the social impact aspect of the business.",
      githubLink: "",
      liveLink: "https://wohlio.de/",
      skills: ["Wordpress", "Woocommerce"],
    },
    {
      name: "Dashboard - React",
      description:
        "This project aimed to showcase the power of React.js in building complex dashboards efficiently. I utilized the Syncfusion UI library, which provided a comprehensive set of components for creating intuitive and visually appealing dashboards.",
      githubLink: "https://github.com/ayhammesho/React-Dashborad",
      liveLink: "",
      skills: ["React", "React Context API", "syncfusion UI"],
    },

    {
      name: "Find A Coach",
      description:
        " The project aimed to showcase my proficiency in Vue.js and demonstrate my understanding of Vuex as a state management solution. Users can also register as coaches themselves, enhancing the platform's versatility.",
      githubLink: "https://github.com/ayhammesho/find-a-coach",
      liveLink: "https://ayhammesho.github.io/find-a-coach",
      skills: ["Vue.js", "Vuex", "Firebase"],
    },
    {
      name: "Web Scraping with node.js",
      description:
        "I developed a web scraping script using Node.js to extract data from a book store website. This script efficiently retrieves the desired information and transfers it from JSON format into a CSV file.",
      githubLink: "https://github.com/ayhammesho/web-scraping-node-Js-",
      liveLink: "",
      skills: ["Node.js", "Axios", "json2csv"],
    },
    {
      name: "Job Finder ",
      description:
        "As part of an assignment during my job application process, I built a job finding platform using vanilla JavaScript. This platform allows users to sign up either as job-seeking employees or as companies looking to post job vacancies.",
      githubLink: "https://github.com/ayhammesho/Job-Finder-web-app",
      liveLink:
        "https://ayhammesho.github.io/Job-Finder-web-app/main_company.html",
      skills: ["Javascript", "HTML", "CSS", "LocalStorage"],
    },
    {
      name: "Adidiet",
      description:
        "Adidiet was one of my earliest client projects, involving the creation of a landing page for selling diet plans. Built with HTML, CSS, and JavaScript, the landing page showcased the benefits of the diet plans and incorporated PayPal integration for secure and convenient payments",
      githubLink: "https://github.com/ayhammesho/adidiet",
      liveLink: "https://ayhammesho.github.io/coaches",
      skills: ["Html", "Css", "Javascript", "scroll Reveal"],
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
      <HeadingSection>Other Notable Contributions</HeadingSection>

      <div className="grid sm:grid-cols-12 lg:grid-rows-2 lg:gap-5 gap-6 mb-12 mx-5 lg:mx-0 ">
        {isFiltered
          ? filteredPorjects.map((project, i) => (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.05 * i + 1,
                  duration: 0.2,
                  ease: [0.17, 0.55, 0.55, 1],
                }}
                className="shadow-lg hover:shadow-xl rounded-xl xl:col-span-4 md:col-span-6 sm:col-span-6  col-span-9 hover:!-translate-y-2 transition-all group   p-8"
                key={project.name}
              >
                <div className="flex flex-col justify-between h-full ">
                  <div className=" ">
                    <div className="flex justify-between mb-6 ">
                      <Image
                        src={folder}
                        className="lg:max-w-[40px] max-w-[35px]"
                        alt="my-gihub-acount"
                      />
                      <div className="flex  gap-5">
                        <Link
                          target="_blank"
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
                          target="_blank"
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
                    <p className="mb-6 text-slate-500 ">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex text-primary-500 gap-3 flex-wrap justify-self-end ">
                    {getAllSkills(project.skills)}
                  </div>
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
                  delay: 0.05 * i,
                  duration: 0.2,
                  ease: [0.17, 0.55, 0.55, 1],
                }}
                className="shadow-lg hover:shadow-xl rounded-xl xl:col-span-4 md:col-span-6 sm:col-span-6  col-span-9 hover:!-translate-y-2 transition-all group   p-8"
              >
                <div className="flex flex-col justify-between h-full ">
                  <div className=" ">
                    <div className="flex justify-between mb-6 ">
                      <Image
                        src={folder}
                        className="lg:max-w-[40px] max-w-[35px]"
                        alt="my-gihub-acount"
                      />
                      <div className="flex  gap-5">
                        <Link
                          target="_blank"
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
                          target="_blank"
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
                    <p className="mb-6 text-slate-500 ">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex text-primary-500 gap-3 flex-wrap justify-self-end ">
                    {getAllSkills(project.skills)}
                  </div>
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
