"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const Email = () => {
  return (
    <div className="hidden lg:flex gap-1 flex-col justify-center items-center fixed right-5 bottom-0 z-50">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3 * 4,
          ease: "easeOut",
        }}
      >
        <a
          href="mailto:ayhammesho@gmail.com"
          className="transition-all text-slate-600 hover:text-primary-500 font-madeEvolveSans font-bold tracking-[0.2em] hover:-translate-y-1 "
          style={{ writingMode: "vertical-lr" }}
        >
          ayhammesho@gmail.com
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3 * 3,
          ease: "easeOut",
        }}
        className="w-1 h-32 bg-primary-500 rounded-full"
      ></motion.div>
    </div>
  );
};

export default Email;
