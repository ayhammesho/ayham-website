"use client";

import React from "react";
import Link from "next/link";
import {
  Twitter,
  Instagram,
  Github,
  Linkedin,
} from "@/components/svgs/SocialMedia/export";
import { motion, Variants } from "framer-motion";

const SocialMedia = () => {
  return (
    <div className="hidden lg:flex gap-1 flex-col justify-center items-center fixed left-5 bottom-0 z-50">
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
            className="transition-all group hover:-translate-y-1 "
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
            className="transition-all group hover:-translate-y-1 "
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
            className="transition-all group hover:-translate-y-1 "
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
        <Link href="https://www.linkedin.com/in/ayhammesho/" target="_blank">
          <Linkedin
            className="transition-all group hover:-translate-y-1 "
            polygonClass="fill-white/80 transition-all stroke-primary-500  group-hover:fill-primary-500"
            iconClass="transition-all fill-primary-500 group-hover:fill-white"
          />
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3 * 0,
          ease: "easeOut",
        }}
        className="w-1 h-32 bg-primary-500 rounded-full"
      ></motion.div>
    </div>
  );
};

export default SocialMedia;
