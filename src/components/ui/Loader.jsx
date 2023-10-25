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
    max-width: 1000px;
    transition: var(--transition);
    opacity: ${(props) => (props.isMounted ? 1 : 0)};
    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;
      #B {
        opacity: 0;
      }
    }
  }
`;

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: "#logo path",
        delay: 2000,
        duration: 1500,
        easing: "easeInOutQuart",
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: "#logo #B",
        duration: 700,
        easing: "easeInOutQuart",
        opacity: 1,
      })
      .add({
        targets: "#logo",
        delay: 500,
        duration: 300,
        easing: "easeInOutQuart",
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: ".loader",
        duration: 1000,
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
          duration: 2,
          delay: 0.2,
          type: "Tween",

          ease: [0.17, 0.55, 0.55, 1],
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={isMounted ? "logo-wrapper" : "hidden"}
      >
        <Logo />
      </motion.div>
    </StyledLoader>
  );
};

export default Loader;