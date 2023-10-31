"use client";

import React, { useState, useEffect } from "react";
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

import { usePathname } from "next/navigation";
import Loader from "@/components/ui/Loader";

export default function Home() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, [isLoading]);

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
      {isLoading ? (
        <Loader finishLoading={() => setIsLoading(false)} />
      ) : (
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
          <Contact />{" "}
        </>
      )}
    </>
  );
}
