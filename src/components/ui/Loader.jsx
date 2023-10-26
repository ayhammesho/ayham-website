import React, { useState, useEffect } from "react";

import anime from "animejs";
import styled from "styled-components";
import Logo from "@/components/svgs/Logo";
import { motion } from "framer-motion";

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 99;

  .logo-wrapper {
    width: max-content;

    transition: var(--transition);
    opacity: ${(props) => (props.isMounted ? 1 : 0)};
    svg {
      display: block;
      max-width: 200px;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;
    }
  }
`;

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader.add({
      targets: ".loader",
      delay: 1000,
      duration: 600,
      easing: "easeInOutQuart",
      opacity: 0,
      zIndex: -1,
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledLoader className="loader" isMounted={isMounted}>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{
          duration: 0.6,

          type: "Tween",

          ease: [0.17, 0.55, 0.55, 1],
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={
          isMounted ? "logo-wrapper flex items-center gap-4" : "hidden"
        }
      >
        <Logo />
        {/* <motion.h2 className="font-madeEvolveSansEVO text-6xl text-primary-500 mt-6">
          Ayham Mesho
        </motion.h2> */}
      </motion.div>
    </StyledLoader>
  );
};

export default Loader;
