"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import HeadingSection from "../ui/HeadingSection";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import quote from "@/assets/images/quote.svg";
import razek from "@/assets/images/Razek Daoud.png";
import khaled from "@/assets/images/Khaled Bzmawe.png";

import {
  Navigation,
  Pagination,
  Mousewheel,
  A11y,
  Autoplay,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Recommendation = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <section
      id="recomendations"
      className="container mx-auto   max-w-[1200px]  py-48"
    >
      <HeadingSection>What People Says About me</HeadingSection>
      <AnimatePresence>
        <Swiper
          style={{
            "--swiper-pagination-color": "#0057a7",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "0.5",
            "--swiper-pagination-bullet-size": "6px",
            "--swiper-pagination-bullet-horizontal-gap": "3px",
            "--swiper-pagination-bottom": "28px",
            "--swiper-navigation-size": "24px",
            "--swiper-navigation-top-offset": "50%",
            "--swiper-navigation-sides-offset": "40px",
            "--swiper-navigation-color": "#0057a7",
          }}
          className="text-center  !flex justify-center items-center  !px-5 !py-4"
          speed={900}
          spaceBetween={100}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000 }}
          // cssMode={true}
          modules={[Autoplay, Navigation, Pagination, Mousewheel, A11y]}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="!flex flex-col md:flex-row md:shadow-xl rounded-2xl overflow-hidden  gap-12   ">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.5,
                ease: [0.43, 0.13, 0.23, 0.96],
                type: "Tween",
              }}
              viewport={{ once: false }}
              className="md:basis-1/3  basis-1/6  relative after:bg-gradient-to-t  after:from-white after:to-transparent    after:w-full after:h-36 after:absolute after:-bottom-1 after:left-0 md:after:hidden"
            >
              <Image className="mx-auto" src={razek} alt="razek daoud" />
            </motion.div>
            <div className="basis-2/3 !flex flex-col justify-center gap-7">
              <Image
                className="absolute md:-top-4 top-96 right-8 max-w-[16rem] opacity-50"
                src={quote}
                alt="quote ico"
              />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 1.4,
                  type: "Tween",
                }}
                viewport={{ once: false }}
                className="md:max-w-[75%] text-left  px-0"
              >
                Ayham&apos;s artistic flair and innovative approach to web
                development made him an invaluable asset to our team. His
                eye-catching designs and user-friendly interfaces brought our
                projects to life and left a lasting impression on our clients. I
                was continually impressed by his ability to think outside the
                box and find elegant solutions to complex challenges.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 2.4,
                  type: "Tween",
                }}
                viewport={{ once: false }}
                className="text-left px-0 pb-3 md:pb-0"
              >
                <h4 className="text-primary-500 font-madeEvolveSans text-2xl font-bold md:mb-0 mb-1">
                  Razek Daoud
                </h4>
                <h5 className="text-sm">Ceo at Razier</h5>
              </motion.div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!flex flex-col md:flex-row md:shadow-xl rounded-2xl overflow-hidden  gap-12   ">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.5,
                ease: [0.43, 0.13, 0.23, 0.96],
                type: "Tween",
              }}
              viewport={{ once: false }}
              className="md:basis-1/3  basis-1/6  relative after:bg-gradient-to-t  after:from-white after:to-transparent    after:w-full after:h-36 after:absolute after:-bottom-1 after:left-0 md:after:hidden"
            >
              <Image className="mx-auto" src={khaled} alt="razek daoud" />
            </motion.div>
            <div className="basis-2/3 !flex flex-col justify-center gap-7">
              <Image
                className="absolute md:-top-4 top-96 right-8 max-w-[16rem] opacity-50"
                src={quote}
                alt="quote ico"
              />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 1.4,
                  type: "Tween",
                }}
                viewport={{ once: false }}
                className="md:max-w-[75%] text-left  px-0"
              >
                Ayham&apos;s artistic flair and innovative approach to web
                development made him an invaluable asset to our team. His
                eye-catching designs and user-friendly interfaces brought our
                projects to life and left a lasting impression on our clients. I
                was continually impressed by his ability to think outside the
                box and find elegant solutions to complex challenges.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 2.4,
                  type: "Tween",
                }}
                viewport={{ once: false }}
                className="text-left px-0 pb-3 md:pb-0"
              >
                <h4 className="text-primary-500 font-madeEvolveSans text-2xl font-bold md:mb-0 mb-1">
                  Khaked Bzmawe
                </h4>
                <h5 className="text-sm">Media Buyer</h5>
              </motion.div>
            </div>
          </SwiperSlide>
        </Swiper>
      </AnimatePresence>
    </section>
  );
};

export default Recommendation;
