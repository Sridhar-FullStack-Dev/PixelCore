import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { scenariosDiv } from "@/app/Utils";
import { IoMdArrowForward } from "react-icons/io";
import { HiArrowSmallDown } from "react-icons/hi2";
import TextAnimation from "./Mini-Components/TextAnimation";

export default function Scenarios() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, zIndex: 10 }}
      transition={{ duration: 0.5, delay: 0.5, ease: "linear" }}
      className="rounded-[20px] sm:h-[150vh] lg:h-[120vh] xl:h-[150vh] p-8 w-full bg-white -z-10"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "anticipate", duration: 1, delay: 1 }}
        className="font-roboto text-gray-400 text-xl"
      >
        scenarios
      </motion.div>

      {/* Flex */}
      <div className="flex sm:flex-col lg:flex-row">
        {/* left */}
        <div>
          <div>
            <TextAnimation />
            <div className="flex items-center sm:pt-4 lg:pt-10">
              <div className="sm:h-12 lg:h-20 sm:w-12 lg:w-20 rounded-full bg-black flex justify-center items-center">
                <IoMdArrowForward className="text-white sm:text-2xl lg:text-4xl" />
              </div>
              <motion.div
                whileHover={{ color: "black" }}
                transition={{
                  ease: "easeIn",
                }}
                className="font-roboto text-gray-400 sm:text-xl lg:text-2xl pl-4"
              >
                <Link href={"/"}>Read more.</Link>
              </motion.div>
            </div>

            <div className="font-body sm:text-4xl lg:text-7xl xl:text-8xl sm:pt-8 lg:pt-28">
              Business growth
              <Image
                src="/3d-fire.png"
                height={300}
                width={300}
                alt=""
                className="sm:h-8 lg:h-16 sm:w-8 lg:w-16 rounded-full inline-flex justify-center items-center sm:mr-2 lg:mr-0 lg:ml-2"
              />
              scenarios.
            </div>
          </div>
        </div>
        {/* Rigth */}
        <div className="flex flex-col justify-end items-end w-full gap-8 sm:mt-4 lg:mt-0">
          {scenariosDiv.map((scene, key) => (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "linear" }}
              key={key}
              className="border border-gray-300 rounded-full sm:h-28 lg:h-36 bg-white sm:w-full lg:w-[30rem] xl:w-[42rem] flex md:justify-evenly lg:justify-between items-center sm:gap-4 lg:gap-0 sm:px-4 lg:px-8"
            >
              <Image
                src={scene.img}
                alt="image"
                height={1000}
                width={1000}
                className="sm:h-[3rem] sm:w-[3rem] lg:h-[5rem] lg:w-[5rem] rounded-full"
                style={{ objectFit: "cover" }}
              />
              <h1 className="font-roboto sm:text-[1.3rem] lg:text-2xl xl:text-3xl font-bold whitespace-nowrap">
                {scene.text} <sup>{scene.sup}</sup>
              </h1>
              <div className="sm:hidden lg:flex h-20 w-20 rounded-full bg-white flex items-center justify-center">
                <HiArrowSmallDown className="text-3xl" />
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "linear" }}
            className="border border-gray-300 rounded-full sm:h-28 lg:h-36 bg-white sm:w-full lg:w-[30rem] xl:w-[42rem] flex justify-between items-center sm:gap-4 lg:gap-0 sm:px-4 lg:px-8"
            style={{
              backgroundImage: `url("https://images.pexels.com/photos/963278/pexels-photo-963278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
            }}
          >
            <div className="h-[5rem] w-[5rem] rounded-full bg-transparent"></div>

            <h1 className="font-roboto sm:text-[1.3rem] lg:text-2xl xl:text-3xl font-bold text-white whitespace-nowrap">
              Culture & Events <sup>1</sup>
            </h1>
            <div className="sm:hidden lg:flex h-20 w-20 rounded-full bg-white flex items-center justify-center">
              <HiArrowSmallDown className="text-3xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "linear" }}
            className="border border-gray-300 rounded-full sm:h-28 lg:h-36 bg-white sm:w-full lg:w-[30rem] xl:w-[42rem] flex justify-between items-center sm:gap-4 lg:gap-0 sm:px-4 lg:px-8"
          >
            <Image
              src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              height={1000}
              width={1000}
              className="sm:h-[3rem] sm:w-[3rem] lg:h-[5rem] lg:w-[5rem] rounded-full"
              style={{ objectFit: "cover" }}
            />
            <h1 className="font-roboto sm:text-[1.3rem] lg:text-2xl xl:text-3xl font-bold whitespace-nowrap">
              Courses & Internships <sup>1</sup>
            </h1>
            <div className="sm:hidden lg:flex h-20 w-20 rounded-full bg-white flex items-center justify-center">
              <HiArrowSmallDown className="text-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
