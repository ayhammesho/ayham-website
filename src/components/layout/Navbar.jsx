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
import { motion } from "framer-motion";
import { Link } from "react-scroll";

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
const navLinksMobile = [
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
    name: "Resume",
    link: "/docs/Resume.pdf",
  },
  {
    id: 6,
    name: "Contact",
    link: "contact",
  },
];

const Navbar = () => {
  const [selectedTab, setSelectedTap] = useState("Home");
  const [activeLink, setActiveLink] = useState("Home");
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [show, setShow] = useState(true);
  const [scaleDown, setScaleDown] = useState(false);

  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (lastScrollY < 150) {
        setScaleDown(false);
        setShow(true);
      } else if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setScaleDown(true);
        setShow(false);
      } else {
        // if scroll up show the navbar
        setScaleDown(true);
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`container flex justify-between mx-auto  items-center  px-5 py-3  md:rounded-2xl backdrop-blur-[12px] bg-white/80 fixed md:top-5 top-0 left-1/2 -translate-x-1/2 z-50 transition-all ${
          scaleDown ? "shadow-md" : ""
        } ${!show && "-translate-y-48"} `}
      >
        <motion.a
          initial={{ opacity: 0, y: -200 }}
          transition={{
            duration: 0.3,
            delay: 0.2,
            type: "Tween",

            ease: [0.17, 0.55, 0.55, 1],
          }}
          animate={{ opacity: 1, y: 0 }}
          href="/"
          id="logo"
          className={`flex gap-[15px] items-center z-50 transition-all cursor-pointer ${
            scaleDown ? "scale-90" : ""
          } `}
        >
          <Image
            src={logo}
            alt="Ayham Mesho logo"
            className="md:max-w-[60px]   max-w-[50px]"
          />
          <h2 className="text-3xl font-madeEvolveSansEVO font-medium text-primary-500 lg:block hidden">
            Ayham Mesho
          </h2>
        </motion.a>
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
                    ease: [0.17, 0.55, 0.55, 1],
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
                        layoutId="underLined"
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
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.8,
                ease: [0.17, 0.55, 0.55, 1],
              }}
              onClick={onOpen}
              className="main-button !border-0  text-primary-500 rounded-lg  lg:hidden block"
            >
              <Menu className="fill-primary-500 w-12 h-12" />
            </motion.button>
          </div>

          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.8,
              ease: "easeOut",
            }}
            href="/docs/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Resume"
            className="main-button px-4 py-2 cursor-pointer  border-3  border-primary-500 text-primary-500 rounded-lg font-madeEvolveSans !text-sm font-medium lg:block hidden"
          >
            Resume
          </motion.a>
        </div>
      </nav>

      <Modal
        data-lenis-prevent
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
            {navLinksMobile.map((item) => {
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
                  {item.name === "Resume" ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      download="Resume"
                      onClick={() => {
                        setActiveLink(item.name);
                        setSelectedTap(item.name);
                        onClose();
                      }}
                      onSetActive={() => {
                        setActiveLink(item.name);
                        setSelectedTap(item.name);
                      }}
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
                    </a>
                  ) : (
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
                  )}
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
