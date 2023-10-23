"use client";

import React, { useEffect } from "react";
import Header from "@/components/layout/Header";
import About from "@/components/sections/About";
import Jobs from "@/components/sections/Jobs";
import FeaturedWork from "@/components/sections/FeaturedWork";
import ArchiveProjects from "@/components/sections/ArchiveProjects";
import Recommendation from "@/components/sections/Recommendation";
import Clients from "@/components/sections/Clients";
import Contact from "@/components/sections/Contact";
import SocialMedia from "@/components/ui/SocialMedia";
import Email from "@/components/ui/Email";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);

      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Email />
      <SocialMedia />
      <Header />
      <About />
      <Jobs />
      <FeaturedWork />
      <ArchiveProjects />
      <Recommendation />
      <Clients />
      <Contact />
    </>
  );
}
