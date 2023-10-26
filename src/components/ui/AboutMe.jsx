import React from "react";
import Image from "next/image";
import tick from "../../assets/images/charm_circle-tick.svg";
import Me from "../../assets/images/me.jpg";

import {
  Modal,
  ModalContent,
  useDisclosure,
  ScrollShadow,
} from "@nextui-org/react";

const AboutMe = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div className="group  md:shadow-xl bg-white/20 xl:backdrop-blur-[12px]  xl:max-w-3xl   xl:py-10 md:py-8  xl:px-8 md:px-6 px-5 rounded-[20px] overflow-hidden">
        <h2 className="text-primary-500 font-bold text-[38px] font-madeEvolveSans">
          About Me
        </h2>
        <h5 className="text-green-500 flex items-center gap-1.5 mb-5 font-azeretMono ">
          <span>
            <Image src={tick} alt="tick-ayhammesho.com" />
          </span>
          <span className="text-lg tracking-widest font-semibold">
            Open to work
          </span>
        </h5>
        <p className="text-slate-500">
          Experienced Front-End Developer with 2 years of practical expertise in
          HTML5, CSS3, JavaScript,React.js, and Vue.js. Demonstrated ability to
          adapt to emerging technologies while consistentlydelivering
          responsive, efficient, and user-friendly websites. Committed to
          enhancing web usability andoptimizing user interaction to drive
          customer satisfaction and business growth.
        </p>

        <p
          className="text-primary-500 font-azeretMono cursor-pointer mt-5 text-right xl:translate-y-52 group-hover:translate-y-0 transition-all"
          onClick={() => onOpen()}
        >
          show more
        </p>
      </div>

      <Modal
        data-lenis-prevent
        classNames={{
          body: "px-3 ",
          base: "rounded-none md:rounded-xl   !m-0",
          closeButton: "pr-3 text-2xl  text-primary-500",
        }}
        placement={"center"}
        size={"5xl"}
        isOpen={isOpen}
        onClose={onClose}
        shouldBlockScroll={true}
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <div className="flex   ">
              <div className="min-w-[450px]">
                <Image
                  lazyBoundary=""
                  className="max-w-md  object-contain opacity-0 transition-opacity  hidden md:block"
                  src={Me}
                  alt="Ayham Mesho - www.ayhammesho.com"
                  onLoadingComplete={(image) =>
                    image.classList.remove("opacity-0")
                  }
                />
              </div>
              <div className="py-10 px-8 ">
                <h3 className="text-primary-500 mt-4 mb-3 font-madeEvolveSans text-3xl">
                  My Story
                </h3>
                <ScrollShadow className=" h-[500px]">
                  <div className="pr-3">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Dolor esse sed dolorem rerum nulla consectetur, iure
                      reprehenderit quae voluptatibus enim consequatur
                      consequuntur, debitis, dignissimos possimus optio
                      quibusdam quaerat similique accusamus! Aliquam magni ab
                      cumque, quam doloremque ipsum voluptatem iste sunt
                      exercitationem consequatur minima blanditiis eveniet
                      provident non quidem consequuntur qui vel fugiat voluptate
                      neque aut quibusdam? Inventore reprehenderit voluptate
                      blanditiis! Corporis eligendi perspiciatis laboriosam aut
                      mollitia quis numquam quae quibusdam et obcaecati iure eos
                      inventore, hic veniam aliquid ratione doloremque
                      consequatur natus repellendus non nam, fuga atque
                      reprehenderit. Laudantium, sed! Enim eum magni sint
                      voluptatum soluta possimus mollitia tempore perspiciatis.
                      Corporis perspiciatis natus atque officia consequuntur
                      voluptates commodi obcaecati? Eum cum ipsa excepturi
                      aspernatur laudantium aperiam quo nobis iste quae. Animi,
                      doloremque quod nam beatae ullam magni sapiente?
                      Temporibus, soluta modi ut ipsum voluptatum similique
                      ipsam eligendi perspiciatis laboriosam aut mollitia quis
                      numquam quae quibusdam et obcaecati iure eos inventore,
                      hic veniam aliquid ratione doloremque consequatur natus
                      repellendus non nam, fuga atque reprehenderit. Laudantium,
                      sed! Enim eum magni sint voluptatum soluta possimus
                      mollitia tempore perspiciatis. Corporis perspiciatis natus
                      atque officia consequuntur voluptates commodi obcaecati?
                      Eum cum ipsa excepturi aspernatur laudantium aperiam quo
                      nobis iste quae. Animi, doloremque quod nam beatae ullam
                      magni sapiente? Temporibus, soluta modi ut ipsum
                      voluptatum similique ipsam
                    </p>
                  </div>
                </ScrollShadow>
              </div>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default AboutMe;
