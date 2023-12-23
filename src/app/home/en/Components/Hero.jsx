import "../index.css";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import SwiperJS from "./Swiper";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { RiLinksLine } from "react-icons/ri";

export default function Hero() {
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.to(buttonRef.current, {
      y: 10,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <>
      <SwiperJS />

      <div className="py-8 px-4 sm:h-[45rem] md:h-96 w-full flex sm:flex-col md:flex-row gap-6 justify-between">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            ease: "linear",
            delay: 0.5,
            duration: 1,
          }}
          className="md:w-[60%] sm:w-full"
        >
          <div>
            <div className="relative" data-scroll data-scroll-speed="0.1">
              <Image
                priority
                src="https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                height={1000}
                width={1000}
                className="sm:h-[17rem] md:h-[24rem] w-full rounded-[30px] object-cover"
              />

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.1 }}
                transition={{ stiffness: 300, damping: 10 }}
                className="absolute flex items-center justify-center top-5 left-5 bg-white h-8 w-40 py-1 rounded-[30px] font-body text-[10px]"
              >
                <Link href={"/"}>
                  <div className="flex items-center justify-center gap-2">
                    <div>www.google.com</div>
                    <div>
                      <RiLinksLine />
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            stiffness: 100,
            delay: 0.3,
            duration: 0.5,
          }}
          className="sm:w-full md:w-[40%]"
        >
          <div className="flex items-center justify-center" data-scroll data-scroll-speed="0.1">
            <Image
              src={
                "https://images.pexels.com/photos/904276/pexels-photo-904276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              height={1000}
              width={1000}
              alt=""
              className="rounded-[30px] h-60 w-full object-cover"
            />
          </div>

          <div className="font-body placeholder:px-16 py-4 text-center flex justify-center items-center flex-col">
            <div className=" text-lg px-4 py-2">
              Ready to turn your ideas into reality? &nbsp; Let's build
              something extraordinary together
            </div>
            <motion.button
              transition={{ damping: 10 }}
              ref={buttonRef}
              className="button-86 text-white"
              role="button"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </>
  );
}
