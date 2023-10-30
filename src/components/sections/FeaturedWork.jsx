"use client";

import HeadingSection from "../ui/HeadingSection";
import syrianUnviersity from "@/assets/images/Syrian University Showcase.jpg";
import khaledBzmawe from "@/assets/images/Khaled Bzmawe Showcase.jpg";
import marwaMetzler from "@/assets/images/Marwa Metzler Showcase.jpg";
import aiSummraizer from "@/assets/images/Ai Summuraizer Showcase.jpg";

import Link from "next/link";
import github from "@/assets/images/github.svg";
import open from "@/assets/images/open-outline.svg";
import Image from "next/image";
import { motion, animate } from "framer-motion";

const FeaturedWork = () => {
  const works = [
    {
      name: "The Syrian University",
      description:
        "Developed a website for the Syrian University of Technology as a freelance developer, utilizing the latest features of Next.js 13. Integrated the Starpi CMS API to fetch and display content, creating a seamless user experience. Designed a user-friendly interface to showcase news, events, courses, and other relevant information. Ensured responsiveness and accessibility across devices. Collaborated closely with the client to meet their specific requirements and preferences. Successfully delivered a Next.js-powered website with a seamless integration to the Starpi CMS, providing up-to-date content for website visitors.",
      githubLink: "",
      liveLink: "https://www.syrian-university.com/en",
      skills: [
        "Next.js 13",
        "Strapi CMS",
        "Rest API",
        "Postman",
        "Tailwind CSS",
      ],
    },
    {
      name: "Khaled Bzmawe",
      description:
        "Built and designed a custom personal website for the client, Khaled Bzmawe, without using pre-built WordPress themes. Utilized WordPress and Elementor to create a visually appealing and user-friendly website. Took a hands-on approach in designing intuitive layouts and optimizing navigation for a seamless user experience. Collaborated closely with the client to incorporate their feedback and personalize the website to reflect their professional brand. Successfully delivered a fully functional and visually stunning website that met the client's requirements and showcased their unique identity.",
      githubLink: "",
      liveLink: "https://khaledbzmawe.com/",
      skills: ["Wordpress", "Elemetor", "Astra Theme"],
    },
    {
      name: "Marwa Metzler",
      description:
        "I successfully developed a personal website for therapist Marwa Metzler as part of the RAZIER team. The website aimed to promote her services and enable online sales of digital products. By gathering client feedback and aligning with Marwa's brand, I achieved high client satisfaction, leading to her recommending RAZIER to her professional network. This project showcased my ability to deliver a client-centric website resulting in positive outcomes, including increased sales and brand recognition.",
      githubLink: "",
      liveLink: "https://marwametzler.com/",
      skills: ["Woocommerce", "Wordpress", "Elementor", "Astra Theme"],
    },
    {
      name: "AI Articles Summraizer",
      description:
        "I developed an Article Summarizer Web Application independently to learn about consuming the Rapid API and utilizing the OpenAI API. The web application allows users to input article links and generates concise summaries using the OpenAI API based on user-specified configurations. Built with React.js, Redux, and Tailwind CSS, the project highlights my expertise in API integration, React.js development, state management with Redux, and creating visually appealing user interfaces.",
      githubLink: "https://github.com/ayhammesho/Ai-Summuraizer",
      liveLink: "https://ai-summrazier.netlify.app/",
      skills: [
        "React.js",
        "Rapid API",
        "Redux",
        "Tailwind CSS",
        "LocalStorage",
      ],
    },
  ];

  const getAllSkills = (skillsArr) => {
    return skillsArr.map((skill) => {
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
    <section
      id="work"
      className=" 2xl:max-w-[1440px]  xl:max-w-5xl  mx-auto  container relative    py-36"
    >
      <HeadingSection>Some things I&apos;ve built</HeadingSection>

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
        className=" grid grid-cols-12 items-center lg:mb-24 mb-8 mx-5 relative"
      >
        <div className="lg:col-start-1 lg:col-end-9   col-span-full lg:mb-0 mb-5 relative    rounded-2xl ">
          <Link
            target="_blank"
            href={works[0].liveLink}
            className=" after:content-[''] after:w-full after:h-full after:bg-transparent after:absolute after:top-0 after:left-0   hover:after:bg-primary-500/50 after:transition-all  after:rounded-2xl"
          >
            <Image
              className="rounded-2xl w-full   "
              src={syrianUnviersity}
              alt=""
            />
          </Link>
        </div>
        <div className="lg:text-right lg:col-span-7 col-span-full lg:absolute right-0  p-5 ">
          <h5 className="text-primary-500  text-lg font-bold font-azeretMono mb-2 ">
            Featured Project
          </h5>
          <h3 className="text-3xl font-madeEvolveSans lg:mb-6 mb-3">
            {works[0].name}
          </h3>
          <div className="bg-white/80 backdrop-blur-lg lg:shadow-xl lg:rounded-2xl lg:p-5 lg:-mr-5 mb-6  lg:max-w-xl  z-50 ">
            <p className=" text-slate-600">{works[0].description}</p>
          </div>

          <div className="flex text-primary-500 flex-wrap gap-4 lg:justify-end lg:mb-6 mb-4 text-sm xl:max-w-lg   max-w-xs lg:ml-auto">
            {getAllSkills(works[0].skills)}
          </div>
          <div className="flex lg:justify-end gap-5">
            <Link
              target="_blank"
              href={works[0].githubLink}
              className={works[0].githubLink === "" ? "hidden" : ""}
            >
              <Image
                className="max-w-[35px] md:max-w-[40px]"
                src={github}
                alt="my-gihub-acount"
              />
            </Link>
            <Link
              target="_blank"
              href={works[0].liveLink}
              className={works[0].liveLink === "" ? "hidden" : ""}
            >
              <Image
                className="max-w-[35px] md:max-w-[40px]"
                src={open}
                alt="my-project"
              />
            </Link>
          </div>
        </div>
      </motion.div>
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
        className=" grid grid-cols-12 items-center lg:mb-24 mb-8 mx-5 relative"
      >
        <div className=" lg:col-start-5  lg:col-end-13   col-span-full lg:mb-0 mb-5 relative   rounded-2xl  ">
          <Link
            target="_blank"
            href={works[1].liveLink}
            className=" after:content-[''] after:w-full after:h-full after:bg-transparent after:absolute after:top-0 after:left-0   hover:after:bg-primary-500/50 after:transition-all  after:rounded-2xl"
          >
            <Image
              className="rounded-2xl w-full   "
              src={khaledBzmawe}
              alt=""
            />
          </Link>
        </div>
        <div className=" lg:col-span-7 col-span-full lg:absolute left-0  p-5  ">
          <h5 className="text-primary-500  text-lg font-bold font-azeretMono mb-2 ">
            Featured Project
          </h5>
          <h3 className="text-3xl font-madeEvolveSans lg:mb-6 mb-3">
            {works[1].name}
          </h3>

          <div className="bg-white/80 backdrop-blur-lg lg:shadow-xl lg:rounded-2xl lg:p-5 mb-6 lg:-ml-5  lg:max-w-xl  z-50 ">
            <p className=" text-slate-600">{works[1].description}</p>
          </div>

          <div className="flex text-primary-500 gap-4  lg:mb-6 mb-4 text-sm flex-wrap xl:max-w-lg   max-w-xs ">
            {getAllSkills(works[1].skills)}
          </div>
          <div className="flex  gap-5">
            <Link
              target="_blank"
              href={works[1].githubLink}
              className={works[1].githubLink === "" ? "hidden" : ""}
            >
              <Image
                className="max-w-[35px] md:max-w-[40px]"
                src={github}
                alt="my-gihub-acount"
              />
            </Link>
            <Link
              target="_blank"
              href={works[1].liveLink}
              className={works[1].liveLink === "" ? "hidden" : ""}
            >
              <Image
                className="max-w-[35px] md:max-w-[40px]"
                src={open}
                alt="my-project"
              />
            </Link>
          </div>
        </div>
      </motion.div>
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
        className=" grid grid-cols-12 items-center lg:mb-24 mb-8 mx-5 relative"
      >
        <div className="lg:col-start-1 lg:col-end-9   col-span-full lg:mb-0 mb-5 relative    rounded-2xl ">
          <Link
            target="_blank"
            href={works[2].liveLink}
            className=" after:content-[''] after:w-full after:h-full after:bg-transparent after:absolute after:top-0 after:left-0   hover:after:bg-primary-500/50 after:transition-all  after:rounded-2xl"
          >
            <Image
              className="rounded-2xl w-full   "
              src={marwaMetzler}
              alt=""
            />
          </Link>
        </div>
        <div className="lg:text-right lg:col-span-7 col-span-full lg:absolute right-0  p-5 ">
          <h5 className="text-primary-500  text-lg font-bold font-azeretMono mb-2 ">
            Featured Project
          </h5>
          <h3 className="text-3xl font-madeEvolveSans lg:mb-6 mb-3">
            {works[2].name}
          </h3>
          <div className="bg-white/80 backdrop-blur-lg lg:shadow-xl lg:rounded-2xl lg:p-5 lg:-mr-5 mb-6  lg:max-w-xl  z-50 ">
            <p className=" text-slate-600">{works[2].description}</p>
          </div>

          <div className="flex text-primary-500 flex-wrap gap-4 lg:justify-end lg:mb-6 mb-4 text-sm xl:max-w-lg   max-w-xs lg:ml-auto">
            {getAllSkills(works[2].skills)}
          </div>
          <div className="flex lg:justify-end gap-5">
            <Link
              target="_blank"
              href={works[2].githubLink}
              className={works[2].githubLink === "" ? "hidden" : ""}
            >
              <Image
                className="max-w-[35px] md:max-w-[40px]"
                src={github}
                alt="my-gihub-acount"
              />
            </Link>
            <Link
              target="_blank"
              href={works[2].liveLink}
              className={works[2].liveLink === "" ? "hidden" : ""}
            >
              <Image
                className="max-w-[35px] md:max-w-[40px]"
                src={open}
                alt="my-project"
              />
            </Link>
          </div>
        </div>
      </motion.div>
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
        className=" grid grid-cols-12 items-center lg:mb-24 mb-8 mx-5 relative"
      >
        <div className=" lg:col-start-5  lg:col-end-13   col-span-full lg:mb-0 mb-5 relative   rounded-2xl  ">
          <Link
            target="_blank"
            href={works[3].liveLink}
            className=" after:content-[''] after:w-full after:h-full after:bg-transparent after:absolute after:top-0 after:left-0   hover:after:bg-primary-500/50 after:transition-all  after:rounded-2xl"
          >
            <Image
              className="rounded-2xl w-full   "
              src={aiSummraizer}
              alt=""
            />
          </Link>
        </div>
        <div className=" lg:col-span-7 col-span-full lg:absolute left-0  p-5  ">
          <h5 className="text-primary-500  text-lg font-bold font-azeretMono mb-2 ">
            Featured Project
          </h5>
          <h3 className="text-3xl font-madeEvolveSans lg:mb-6 mb-3">
            {works[3].name}
          </h3>

          <div className="bg-white/80 backdrop-blur-lg lg:shadow-xl lg:rounded-2xl lg:p-5 mb-6 lg:-ml-5  lg:max-w-xl  z-50 ">
            <p className=" text-slate-600">{works[3].description}</p>
          </div>

          <div className="flex text-primary-500 gap-4  lg:mb-6 mb-4 text-sm flex-wrap xl:max-w-lg   max-w-xs ">
            {getAllSkills(works[3].skills)}
          </div>
          <div className="flex  gap-5">
            <Link
              target="_blank"
              href={works[3].githubLink}
              className={works[3].githubLink === "" ? "hidden" : ""}
            >
              <Image
                className="max-w-[35px] md:max-w-[40px]"
                src={github}
                alt="my-gihub-acount"
              />
            </Link>
            <Link
              target="_blank"
              href={works[3].liveLink}
              className={works[3].liveLink === "" ? "hidden" : ""}
            >
              <Image
                className="max-w-[35px] md:max-w-[40px]"
                src={open}
                alt="my-project"
              />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedWork;
