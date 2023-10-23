"use client";

import HeadingSection from "../ui/HeadingSection";
import work from "@/assets/images/work.jpg";
import Link from "next/link";
import github from "@/assets/images/github.svg";
import open from "@/assets/images/open-outline.svg";
import Image from "next/image";
import { motion, animate } from "framer-motion";

const FeaturedWork = () => {
  const works = [
    {
      id: "0",
      title: "My Awsome new Project",
      smallDescreption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum",
      fullDescreption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum",
    },
    {
      id: "1",
      title: "My Awsome new Project",
      smallDescreption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum",
      fullDescreption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis pretium Lorem ipsum",
    },
  ];

  return (
    <section
      id="work"
      className=" 2xl:max-w-[1440px]  xl:max-w-5xl  mx-auto  container relative    py-36"
    >
      <HeadingSection>Some things I&apos;ve built</HeadingSection>

      <motion.div
        initial={{ opacity: 0, y: 200 }}
        transition={{ duration: 2, delay: 0.2, type: "spring", bounce: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=" grid grid-cols-12 items-center lg:mb-24 mb-8 mx-5"
      >
        <div className="lg:col-start-1 lg:col-end-9   col-span-full lg:mb-0 mb-5 relative   rounded-2xl ">
          <Link
            href="#"
            className=" after:content-[''] after:w-full after:h-full after:bg-transparent after:absolute after:top-0 after:left-0   hover:after:bg-primary-500/50 after:transition-all  after:rounded-2xl"
          >
            <Image
              className="rounded-2xl w-full relative  "
              src={work}
              alt=""
            />
          </Link>
        </div>
        <div className="lg:text-right lg:col-span-7 col-span-full lg:absolute right-0  p-5 ">
          <h5 className="text-primary-500  text-lg font-bold font-azeretMono mb-2 ">
            Featured Project
          </h5>
          <h3 className="text-3xl font-madeEvolveSans lg:mb-6 mb-3">
            {works[0].title}
          </h3>
          <div className="bg-white/60 backdrop-blur-lg lg:shadow-xl lg:rounded-2xl lg:p-5 lg:-mr-5 mb-6  lg:max-w-xl  z-50 ">
            <p className=" text-slate-500">{works[0].smallDescreption}</p>
          </div>

          <div className="flex text-primary-500 flex-wrap gap-4 lg:justify-end lg:mb-6 mb-4 text-sm xl:max-w-lg   max-w-xs lg:ml-auto">
            <h5 className="lg:text-lg font-bold font-azeretMono text-[16px]">
              Next.js
            </h5>
            <h5 className="lg:text-lg font-bold font-azeretMono text-[16px]">
              Axios
            </h5>
            <h5 className="lg:text-lg font-bold font-azeretMono text-[16px]">
              Chart.js
            </h5>
            <h5 className="lg:text-lg font-bold font-azeretMono text-[16px]">
              Vue.js
            </h5>
            <h5 className="lg:text-lg font-bold font-azeretMono text-[16px]">
              React
            </h5>
          </div>
          <div className="flex lg:justify-end gap-5">
            <Link href="#">
              <Image
                className="max-w-[35px] md:max-w-[40px]"
                src={github}
                alt="my-gihub-acount"
              />
            </Link>
            <Link href="#">
              <Image
                className="max-w-[35px] md:max-w-[40px]"
                src={open}
                alt="my-project"
              />
            </Link>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        transition={{ duration: 2, delay: 0.2, type: "spring", bounce: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=" grid grid-cols-12 items-center lg:mb-24 mb-8 mx-5"
      >
        <div className=" lg:col-start-5  lg:col-end-13   col-span-full lg:mb-0 mb-5 relative   rounded-2xl ">
          <Link
            href="#"
            className=" after:content-[''] after:w-full after:h-full after:bg-transparent after:absolute after:top-0 after:left-0   hover:after:bg-primary-500/50 after:transition-all  after:rounded-2xl"
          >
            <Image
              className="rounded-2xl w-full relative  "
              src={work}
              alt=""
            />
          </Link>
        </div>
        <div className=" lg:col-span-7 col-span-full lg:absolute left-0  p-5 ">
          <h5 className="text-primary-500  text-lg font-bold font-azeretMono mb-2 ">
            Featured Project
          </h5>
          <h3 className="text-3xl font-madeEvolveSans lg:mb-6 mb-3">
            {works[0].title}
          </h3>

          <div className="bg-white/60 backdrop-blur-lg lg:shadow-xl lg:rounded-2xl lg:p-5 mb-6 lg:-ml-5  lg:max-w-xl  z-50 ">
            <p className=" text-slate-500">{works[0].smallDescreption}</p>
          </div>

          <div className="flex text-primary-500 gap-4  lg:mb-6 mb-4 text-sm flex-wrap xl:max-w-lg   max-w-xs ">
            <h5 className="lg:text-lg font-bold font-azeretMono text-[16px]">
              Next.js
            </h5>
            <h5 className="lg:text-lg font-bold font-azeretMono text-[16px]">
              Axios
            </h5>
            <h5 className="lg:text-lg font-bold font-azeretMono text-[16px]">
              Chart.js
            </h5>
            <h5 className="lg:text-lg font-bold font-azeretMono text-[16px]">
              Vue.js
            </h5>
            <h5 className="lg:text-lg font-bold font-azeretMono text-[16px]">
              React
            </h5>
          </div>
          <div className="flex  gap-5">
            <Link href="#">
              <Image
                className="max-w-[35px] md:max-w-[40px]"
                src={github}
                alt="my-gihub-acount"
              />
            </Link>
            <Link href="#">
              <Image
                className="max-w-[35px] md:max-w-[40px]"
                src={open}
                alt="my-project"
              />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedWork;
