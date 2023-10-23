"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import logo from "../../assets/images/logo.svg";
import Menu from "../../assets/images/menu";
// import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Link } from "react-scroll";
// import { useAnimate, stagger } from "framer-motion";

const navLinks = [
  {
    id: 0,
    name: "Home",
    link: "home",
  },
  {
    id: 1,
    name: "About Me",
    link: "aboutme",
  },
  {
    id: 2,
    name: "Experience",
    link: "experience",
  },
  {
    id: 3,
    name: "Work",
    link: "work",
  },
  {
    id: 4,
    name: "Recomendations",
    link: "recomendations",
  },
  {
    id: 5,
    name: "Contact",
    link: "contact",
  },
];

const Navbar = () => {
  const [selectedTab, setSelectedTap] = useState("Home");
  const [activeLink, setActiveLink] = useState("Home");
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  // const [scope, animate] = useAnimate();

  // const ref = useRef(null);

  // useEffect(() => {
  //   animate("li", isOpen ? { opacity: 1 } : { opacity: 0 }, {
  //     delay: stagger(0.1),
  //   });
  // }, [isOpen]);

  return (
    <>
      <nav className="container flex justify-between mx-auto  items-center  px-5 py-5  md:rounded-2xl backdrop-blur-[12px] bg-white fixed md:top-5 top-0 left-1/2 -translate-x-1/2 z-50">
        <div id="logo" className="flex gap-[15px] items-center z-50">
          <Image
            src={logo}
            alt="Ayham Mesho logo"
            className="lg:max-w-[75px]  sm:max-w-[65px] max-w-[55px]"
          />
          <h2 className="text-[36px] font-madeEvolveSansEVO font-medium text-primary-500 lg:block hidden">
            Ayham Mesho
          </h2>
        </div>
        <div>
          <ul
            onMouseLeave={() => setSelectedTap(activeLink)}
            className=" text-slate-800 gap-8 font-semibold lg:flex hidden"
          >
            {navLinks.map((item) => {
              return (
                <motion.li
                  className="cursor-pointer"
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3 * item.id,
                    ease: "easeOut",
                  }}
                  onClick={() => setActiveLink(item.name)}
                  key={item.id}
                  onMouseEnter={() => setSelectedTap(item.name)}
                >
                  <Link
                    onClick={() => {
                      setActiveLink(item.name);
                      setSelectedTap(item.name);
                    }}
                    onSetActive={() => {
                      setActiveLink(item.name);
                      setSelectedTap(item.name);
                    }}
                    to={item.link}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={0}
                    duration={500}
                    delay={300}
                    isDynamic={true}
                    spyThrottle={500}
                  >
                    <motion.p
                      className="font-semibold"
                      animate={{
                        color:
                          item.name === selectedTab ? "#0057A7" : "#1E293B",
                      }}
                    >
                      {item.name}
                    </motion.p>

                    {item.name === selectedTab && (
                      <motion.div
                        transition={{
                          duration: 0.3,
                          ease: [0.43, 0.13, 0.23, 0.96],
                          delay: 0.15,
                        }}
                        className="w-full h-1 bg-primary-500 mt-1 rounded-full"
                        layoutId="underline"
                      ></motion.div>
                    )}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>
        <div>
          {}
          <div>
            <button
              onClick={onOpen}
              className="main-btn  text-primary-500 rounded-lg lg:hidden block"
            >
              <Menu className="fill-primary-500 w-12 h-12" />
            </button>
          </div>

          <a
            href="/docs/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Resume"
            className="main-btn px-4 py-2 cursor-pointer  border-4  border-primary-500 text-primary-500 rounded-lg font-madeEvolveSansEVO text-xl font-medium lg:block hidden"
          >
            Resume
          </a>
        </div>
      </nav>

      <Modal
        classNames={{
          backdrop: "z-40",
          body: "py-6 justify-end",
          wrapper: "justify-end",
          base: "h-screen rounded-none justify-end !m-0",

          closeButton: "pr-6 text-2xl  text-primary-500",
        }}
        motionProps={{
          variants: {
            enter: {
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              x: 500,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop={"blur"}
        size="xs"
      >
        <ModalContent className=" justify-center  p-6">
          <motion.ul
            onMouseLeave={() => setSelectedTap(activeLink)}
            className="thismenu text-slate-800 gap-8 font-semibold flex  flex-col justify-center "
          >
            {navLinks.map((item) => {
              return (
                <motion.li
                  className="cursor-pointer"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3 * item.id,
                    ease: "easeOut",
                  }}
                  onClick={() => setActiveLink(item.name)}
                  key={item.id}
                  onMouseEnter={() => setSelectedTap(item.name)}
                >
                  <Link
                    onClick={() => {
                      setActiveLink(item.name);
                      setSelectedTap(item.name);
                      onClose();
                    }}
                    onSetActive={() => {
                      setActiveLink(item.name);
                      setSelectedTap(item.name);
                    }}
                    to={item.link}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={0}
                    duration={500}
                    delay={500}
                    isDynamic={true}
                  >
                    <motion.p
                      className="text-xl"
                      animate={{
                        y: item.name === selectedTab ? -3 : 0,
                        color:
                          item.name === selectedTab ? "#0057A7" : "#1E293B",
                      }}
                      transition={{
                        duration: 0.1,
                      }}
                    >
                      {item.name}
                    </motion.p>

                    {item.name === selectedTab && (
                      <motion.div
                        className="w-full h-1 bg-primary-500  rounded-full"
                        transition={{
                          duration: 0.3,
                          ease: [0.43, 0.13, 0.23, 0.96],
                          delay: 0.1,
                        }}
                        layoutId="underline-mobile"
                      ></motion.div>
                    )}
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Navbar;
