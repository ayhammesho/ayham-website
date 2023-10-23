"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import HeadingSection from "../ui/HeadingSection";

import Image from "next/image";

import khaledBzmawe from "@/assets/images/khaledLogo.png";
import ahmadMustafa from "@/assets/images/ahmadMustafaLogo.png";
import wohlio from "@/assets/images/wohlioLogo.png";

const Clients = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <section className="container mx-auto   max-w-[1200px]  my-24">
      <HeadingSection>Happy Clients I&apos;ve worked with</HeadingSection>
      <AnimatePresence>
        <div className=" flex items-center justify-evenly flex-wrap gap-12 flex-col sm:flex-row">
          <motion.div>
            <motion.img
              className=" max-w-[150px]"
              src={khaledBzmawe.src}
              alt="khaled bzmawe logo - ayhammesho.com"
            />
          </motion.div>
          <motion.div>
            <motion.img
              className=" max-w-[80px]"
              src={ahmadMustafa.src}
              alt="Ahmad Mustfa logo - ayhammesho.com"
            />
          </motion.div>
          <motion.div>
            <motion.img
              className=" max-w-[150px]"
              src={wohlio.src}
              alt="Wohlio logo - ayhammesho.com"
            />
          </motion.div>
        </div>
      </AnimatePresence>
    </section>
  );
};

export default Clients;
