"use client";

import React from "react";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  Bootstrap,
  ChackraUi,
  Css,
  Expressjs,
  figma,
  Firebase,
  FramerMotion,
  Git,
  Gsap,
  Javascript,
  Html,
  MeterialUi,
  MongoDB,
  NextUi,
  NextJs,
  NodeJs,
  Prisma,
  Reactjs,
  Redux,
  Sass,
  SocketIo,
  TailwindCSS,
  Typescript,
  Vite,
  VueJs,
  Wordpress,
} from "../../assets/svgs/skills/export";

import dots from "../../assets/svgs/dots.svg";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Tooltip,
} from "@nextui-org/react";

const Skills = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const skills = [
    {
      name: "Bootstrap",
      icon: Bootstrap,
    },
    {
      name: "Chackra Ui",
      icon: ChackraUi,
    },
    {
      name: "CSS",
      icon: Css,
    },
    {
      name: "Express JS",
      icon: Expressjs,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "Firebase",
      icon: Firebase,
    },
    {
      name: "Framer Motion",
      icon: FramerMotion,
    },
    {
      name: "Git",
      icon: Git,
    },
    {
      name: "Gsap",
      icon: Gsap,
    },
    {
      name: "Javascript",
      icon: Javascript,
    },
    {
      name: "HTML",
      icon: Html,
    },
    {
      name: "Meterial Ui",
      icon: MeterialUi,
    },
    {
      name: "Mongo DB",
      icon: MongoDB,
    },
    {
      name: "Next Ui",
      icon: NextUi,
    },
    {
      name: "Next JS",
      icon: NextJs,
    },
    {
      name: "Node JS",
      icon: NodeJs,
    },
    {
      name: "Prisma",
      icon: Prisma,
    },
    {
      name: "React JS",
      icon: Reactjs,
    },
    {
      name: "Redux",
      icon: Redux,
    },
    {
      name: "Sass",
      icon: Sass,
    },
    {
      name: "Socket Io",
      icon: SocketIo,
    },
    {
      name: "Tailwind CSS",
      icon: TailwindCSS,
    },
    {
      name: "Typescript",
      icon: Typescript,
    },
    {
      name: "Vue JS",
      icon: VueJs,
    },
    {
      name: "Vite",
      icon: Vite,
    },
    {
      name: "Wordpress",
      icon: Wordpress,
    },
  ];
  return (
    <>
      <div className="flex gap-5 justify-center flex-wrap">
        <Tooltip
          content="Next JS"
          className="capitalize bg-primary-500 text-white dark:text-secondary-500 dark:bg-navyBlue-500"
        >
          <Image src={NextJs} alt="Next JS" />
        </Tooltip>
        <Tooltip
          content="Typescript"
          className="capitalize bg-primary-500 text-white dark:text-secondary-500 dark:bg-navyBlue-500"
        >
          <Image src={Typescript} alt="Typescript" />
        </Tooltip>
        <Tooltip
          content="Tailwind CSS"
          className="capitalize bg-primary-500 text-white dark:text-secondary-500 dark:bg-navyBlue-500"
        >
          <Image src={TailwindCSS} alt="Tailwind CSS" />
        </Tooltip>
        <Tooltip
          content="Node JS"
          className="capitalize bg-primary-500 text-white dark:text-secondary-500 dark:bg-navyBlue-500"
        >
          <Image src={NodeJs} alt="Node JS" />
        </Tooltip>
        <Tooltip
          content="Figma"
          className="capitalize bg-primary-500 text-white dark:text-secondary-500 dark:bg-navyBlue-500"
        >
          <Image src={figma} alt="Figma" />
        </Tooltip>
        <Tooltip
          content="Gsap"
          className="capitalize bg-primary-500 text-white dark:text-secondary-500 dark:bg-navyBlue-500 "
        >
          <Image className="hidden sm:block" src={Gsap} alt="Gsap" />
        </Tooltip>
        <Tooltip
          content="Redux"
          className="capitalize bg-primary-500 text-white dark:text-secondary-500 dark:bg-navyBlue-500 "
        >
          <Image className="hidden sm:block" src={Redux} alt="Redux" />
        </Tooltip>
        <Tooltip
          content="Framer Motion"
          className="capitalize bg-primary-500 text-white dark:text-secondary-500 dark:bg-navyBlue-500 "
        >
          <Image
            className="hidden sm:block"
            src={FramerMotion}
            alt="Framer Motion"
          />
        </Tooltip>
        <Tooltip
          content="Much More"
          className="capitalize bg-primary-500 text-white dark:text-secondary-500 dark:bg-navyBlue-500"
        >
          <Image
            className="cursor-pointer"
            onClick={() => onOpen()}
            src={dots}
            alt="skills- www.ayhammesho.com"
          />
        </Tooltip>
      </div>
      <Modal
        classNames={{
          body: "px-3 ",

          base: "rounded-none md:rounded-xl  !m-0",

          closeButton: "pr-3 text-2xl  text-primary-500",
        }}
        placement={"center"}
        size={"5xl"}
        isOpen={isOpen}
        onClose={onClose}
        backdrop="blur"
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                My Skills
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-3 md:grid-cols-6 md:grid-rows-5 gap-5 justify-items-center overflow-x-hidden">
                  {skills.map((skill, i) => (
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.15 * i,
                        ease: "easeOut",
                      }}
                      className="grid justify-items-center"
                      key={skill.name}
                    >
                      <Image src={skill.icon} alt={skill.name} />

                      <p className="text-primary-500 capitalize font-bold  mt-1 text-[14px] sm:text-lg">
                        {skill.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Skills;
