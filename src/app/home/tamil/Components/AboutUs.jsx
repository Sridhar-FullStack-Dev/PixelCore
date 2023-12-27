import "../index.css";
import gsap from "gsap";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa6";

export default function AboutUs() {
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
      <div className="p-8 w-full">
        <div className="flex justify-between sm:flex-col md:flex-row">
          <div className="">
            <h1 className="font-roboto text-gray-400 text-lg">குறித்து</h1>
            <div className="font-body font-bold tracking-wide md:text-7xl sm:text-6xl lg:text-7xl xl:text-8xl text-justify px-2 py-8 2xl:text-[10rem]">
              <motion.div
                initial={{ opacity: 0, x: "-10px" }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  stiffness: 100,
                  damping: 10,
                  duration: 0.3,
                  delay: 0.2,
                }}
              >
                வணிக
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "-10px" }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  stiffness: 100,
                  damping: 10,
                  duration: 0.3,
                  delay: 0.8,
                }}
              >
                தீர்வுக்
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "-10px" }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  stiffness: 100,
                  damping: 10,
                  duration: 0.3,
                  delay: 1,
                }}
              >
                குழு
              </motion.div>

              <h1 className="font-roboto text-gray-400 text-base mt-4">
                தீர்க்கவும், எளிமைப்படுத்தவும், வெற்றி பெறவும்.
              </h1>
            </div>

            <div className="flex gap-4 items-center">
              <Link
                href={"#services"}
                className="underline font-roboto text-lg font-bold"
              >
                சேவைகள்
              </Link>
              <div
                ref={buttonRef}
                className="flex justify-center items-center h-8 w-8 rounded-full bg-[#cef34a] -mt-4"
              >
                <FaArrowDown />
              </div>
            </div>
          </div>

          {/* right */}
          <div className="w-1/2">
            <div className="font-body sm:text-[1.3rem] lg:text-3xl xl:text-4xl tracking-wide w-96 whitespace-nowrap py-16">
              நாங்கள் மிகவும் சிறந்த <br />
              உயர்த்துவதற்கான வணிக <br /> தீர்வுகள்
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  damping: 10,
                  delay: 2,
                  duration: 0.5,
                }}
                className="text-blue-600 font-bold"
              >
                வழங்குகிறோம்
              </motion.span>
            </div>

            {/* Explore btn */}
            <Link href={"/home/en/about"}>
              <button className="button-86 flex justify-center items-center px-4">
                <div className="font-body mr-3">மேலும்</div>
                <div className="h-4 w-4 bg-[#cef34a] rounded-full"></div>
              </button>
            </Link>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                type: "spring",
                damping: 10,
                delay: 0.5,
                duration: 1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            ></motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
