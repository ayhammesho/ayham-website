"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  Twitter,
  Instagram,
  Github,
  Linkedin,
  Whatsapp,
  Discord,
  Facebook,
  Telegram,
  Spotify,
} from "@/components/svgs/SocialMedia/export";

const Contact = () => {
  return (
    <footer id="contact">
      <div className="container mx-auto max-w-[800px] py-64 flex flex-col items-center justify-center px-12 ">
        <h5 className="font-bold text-primary-500 font-azeretMono text-lg mb-3">
          What&apos;s Next ?
        </h5>
        <h2 className="font-bold text-primary-500 md:text-7xl sm:text-6xl text-5xl font-madeEvolveSans mb-5">
          Get in Touch
        </h2>
        <p className="text-center mb-10 max-w-[600px] text-slate-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis
          pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nullam mollis pretium Lorem ipsum{" "}
        </p>
        <Link
          href="mailto:ayhammesho@gmail.com"
          className="main-btn !px-4 !py-2  !border-4  border-primary-500 text-primary-500 !rounded-lg font-madeEvolveSans font-medium xl:text-xl "
        >
          Say Hello
        </Link>
      </div>
      <div className="text-center mb-8">
        <div className="lg:hidden flex flex-wrap gap-0 justify-center mb-3 sm:max-w-md max-w-xs mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3 * 4,
              ease: "easeOut",
            }}
          >
            <Link href="https://twitter.com/Ayhammesho2" target="_blank">
              <Twitter
                className="transition-all group hover:-translate-y-1 w-12 h-12"
                polygonClass="fill-white/80 transition-all stroke-primary-500  group-hover:fill-primary-500"
                iconClass="transition-all fill-primary-500 group-hover:fill-white"
              />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3 * 3,
              ease: "easeOut",
            }}
          >
            <Link href="https://www.instagram.com/ayhammesho/" target="_blank">
              <Instagram
                className="transition-all group hover:-translate-y-1 w-12 h-12"
                polygonClass="fill-white/80 transition-all stroke-primary-500  group-hover:fill-primary-500"
                iconClass="transition-all fill-primary-500 group-hover:fill-white"
              />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3 * 2,
              ease: "easeOut",
            }}
          >
            <Link href="https://github.com/ayhammesho" target="_blank">
              <Github
                className="transition-all group hover:-translate-y-1  w-12 h-12"
                polygonClass="fill-white/80 transition-all stroke-primary-500  group-hover:fill-primary-500"
                iconClass="transition-all fill-primary-500 group-hover:fill-white"
              />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3 * 1,
              ease: "easeOut",
            }}
          >
            <Link
              href="https://www.linkedin.com/in/ayhammesho/"
              target="_blank"
            >
              <Linkedin
                className="transition-all group hover:-translate-y-1  w-12 h-12 "
                polygonClass="fill-white/80 transition-all stroke-primary-500  group-hover:fill-primary-500 "
                iconClass="transition-all fill-primary-500 group-hover:fill-white"
              />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3 * 1,
              ease: "easeOut",
            }}
          >
            <Link
              href="https://discordapp.com/users/743344422481166376"
              target="_blank"
            >
              <Discord
                className="transition-all group hover:-translate-y-1  w-12 h-12 "
                polygonClass="fill-white/80 transition-all stroke-primary-500  group-hover:fill-primary-500 "
                iconClass="transition-all fill-primary-500 group-hover:fill-white"
              />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3 * 1,
              ease: "easeOut",
            }}
          >
            <Link href="https://wa.me/963994694822" target="_blank">
              <Whatsapp
                className="transition-all group hover:-translate-y-1  w-12 h-12 "
                polygonClass="fill-white/80 transition-all stroke-primary-500  group-hover:fill-primary-500 "
                iconClass="transition-all fill-primary-500 group-hover:fill-white"
              />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3 * 1,
              ease: "easeOut",
            }}
          >
            <Link href="https://t.me/ayham_mesho" target="_blank">
              <Telegram
                className="transition-all group hover:-translate-y-1  w-12 h-12 "
                polygonClass="fill-white/80 transition-all stroke-primary-500  group-hover:fill-primary-500 "
                iconClass="transition-all fill-primary-500 group-hover:fill-white"
              />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3 * 1,
              ease: "easeOut",
            }}
          >
            <Link href="https://www.facebook.com/ayham.mesho/" target="_blank">
              <Facebook
                className="transition-all group hover:-translate-y-1  w-12 h-12 "
                polygonClass="fill-white/80 transition-all stroke-primary-500  group-hover:fill-primary-500 "
                iconClass="transition-all fill-primary-500 group-hover:fill-white"
              />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3 * 1,
              ease: "easeOut",
            }}
          >
            <Link
              href="https://open.spotify.com/user/nmi23vl81d1li6nmm82grpd1t"
              target="_blank"
            >
              <Spotify
                className="transition-all group hover:-translate-y-1  w-12 h-12 "
                polygonClass="fill-white/80 transition-all stroke-primary-500  group-hover:fill-primary-500 "
                iconClass="transition-all fill-primary-500 group-hover:fill-white"
              />
            </Link>
          </motion.div>
        </div>
        <h6 className="  text-sm md:px-64  px-16 font-azeretMono">
          Made with 💙 by me designed in figma and developed with next.js
        </h6>
      </div>
    </footer>
  );
};

export default Contact;
