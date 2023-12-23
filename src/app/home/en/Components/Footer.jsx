import "../index.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import GotoTop from "@/Components/GotoTop";
import { footerMarquee, footerBottom1, footerBottom2 } from "@/app/Utils";

// ICONS
import { RiReactjsFill } from "react-icons/ri";
import { TbBrandNextjs, TbBrandFramerMotion } from "react-icons/tb";
import {
  SiMongodb,
  SiTailwindcss,
  SiThreedotjs,
  SiGmail,
} from "react-icons/si";
import {
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoLogoGithub,
} from "react-icons/io5";

export default function Footer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <div className="h-screen bg-black relative">
        <div className="p-2 text-white bg-white bg-opacity-5">
          <motion.div
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, duration: 40, ease: "easeOut" }}
            className="text-white flex font-body font-bold text-2xl gap-4 relative uppercase"
          >
            {footerMarquee.map((marquee, key) => (
              <div
                key={key}
                className="whitespace-nowrap flex gap-2 items-center justify-center"
              >
                <div className="h-3 w-3 bg-[#cef34a] rounded-full"></div>
                {marquee.content}
              </div>
            ))}
            {footerMarquee.map((marquee, key) => (
              <div
                key={key}
                className="whitespace-nowrap flex gap-2 items-center justify-center"
              >
                <div className="h-3 w-3 bg-[#cef34a] rounded-full"></div>
                {marquee.content}
              </div>
            ))}
            {footerMarquee.map((marquee, key) => (
              <div
                key={key}
                className="whitespace-nowrap flex gap-2 items-center justify-center"
              >
                <div className="h-3 w-3 bg-[#cef34a] rounded-full"></div>
                {marquee.content}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="p-4">
          <div className="flex md:px-4">
            <div className="font-lexico uppercase sm:text-[2rem] md:text-8xl text-[#f5f5f5] whitespace-nowrap">
              <h1>
                Let's unite for <span className="sm:hidden md:inline">an</span>
              </h1>
              <h1 className="flex sm:flex-col md:flex-row gap-4">
                innovation
                <div className="flex items-center sm:justify-start md:justify-center">
                  <div>
                    <Image
                      src={
                        "https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      }
                      alt=""
                      height={1000}
                      width={1000}
                      className="h-24 w-72 rounded-full object-cover"
                    />
                  </div>
                </div>
              </h1>
            </div>
            {/* <div>
              <motion.div
                drag
                dragConstraints={{
                  top: -50,
                  left: -50,
                  right: 50,
                  bottom: 50,
                }}
              >
                <label className="eye-label">
                  <input
                    value="on"
                    name="dummy"
                    type="checkbox"
                    className="bubble"
                  />
                </label>
              </motion.div>
            </div> */}
          </div>

          {/* Middle */}
          <div className="flex sm:flex-col md:flex-row w-full justify-between items-center px-4 mt-14">
            <div className="pt-4">
              <h1 className="font-body text-[#D3D3D3] text-lg flex justify-center items-center gap-4">
                we are working with these frameworks
              </h1>
              <div className="flex text-4xl gap-4 pt-4 text-white">
                <TbBrandNextjs
                  title="Next.js"
                  className="bg-black text-white"
                />
                <RiReactjsFill title="React.js" className=" text-[#4B9FBD]" />
                <SiMongodb title="MongoDB Atlas" className=" text-[#00ED64]" />
                <SiTailwindcss
                  title="Tailwind CSS"
                  className="text-[#38BDF8]"
                />
                <SiThreedotjs title="Three.js" />
                <TbBrandFramerMotion title="Framer Motion" className="" />
              </div>
            </div>

            {/* Socials */}
            <div className="pt-4 sm:w-full md:w-auto">
              <h1 className="font-body text-[#D3D3D3] text-lg mt-4 flex sm:justify-start md:justify-end items-center">
                Connect with us Via socials
              </h1>
              <div className="flex text-4xl gap-4 pt-4 text-white">
                <Link href={"/"} title="GitHub">
                  <IoLogoGithub className="hover:text-[#4183C4] hover:scale-105 transition duration-500" />
                </Link>
                <Link href={"/"} title="LinkedIn (Recommended)">
                  <IoLogoLinkedin className="hover:text-[#3390EC] hover:scale-105 transition duration-500" />
                </Link>
                <Link href={"/"} title="GMail (Recommended)">
                  <SiGmail className="hover:text-[#EA4335] hover:scale-105 transition duration-500" />
                </Link>
                <Link href={"/"} title="Whatsapp">
                  <IoLogoWhatsapp className="hover:text-[#50CA5D] hover:scale-105 transition duration-500" />
                </Link>
                <Link href="/" title="Instagram">
                  <IoLogoInstagram className="hover:text-[#EB00C2] hover:scale-105 transition duration-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-[#6e6d7a] px-6 py-4 font-body absolute bottom-0 w-full">
          <div className="w-full h-[1px] bg-white bg-opacity-5 mb-3"></div>

          <div className="flex sm:flex-col md:flex-row justify-between items-center">
            <div className="flex gap-4 items-center justify-center whitespace-nowrap sm:text-[12px] md:text-base">
              <Link href={"/"} className="">
                <motion.h1
                  whileHover={{ color: "#cef34a" }}
                  transition={{ ease: "linear" }}
                >
                  &copy; Pixel Core {time.getFullYear()}
                </motion.h1>
              </Link>
              {footerBottom1.map((bottom1, footerbottom1) => (
                <Link key={footerbottom1} href={bottom1.href}>
                  <motion.h1
                    whileHover={{ color: "#cef34a" }}
                    transition={{ ease: "linear" }}
                  >
                    {bottom1.content}
                  </motion.h1>
                </Link>
              ))}

              <motion.div
                whileHover={{ color: "#cef34a" }}
                className="cursor-default"
              >
                IST: {time.getHours()}:{time.getMinutes()}
              </motion.div>
            </div>

            <div className="flex sm:gap-2 md:gap-4 sm:text-[8px] md:text-base items-center justify-center sm:px-2 md:px-0">
              {footerBottom2.map((bottom2, footerbottom2) => (
                <div key={footerbottom2} className="whitespace-nowrap">
                  <Link href={bottom2.href}>
                    <motion.h1
                      whileHover={{ color: "#cef34a" }}
                      transition={{ ease: "linear" }}
                    >
                      {bottom2.name}
                    </motion.h1>
                  </Link>
                </div>
              ))}

              <div className="sm:hidden md:inline-flex">
                <GotoTop />
              </div>
            </div>
          </div>
        </div>

        <div
          data-scroll
          data-scroll-orientation="horizontal"
          data-scroll-speed="0.2"
          className="logo-bottom absolute bottom-20 right-0 text-[#fff] opacity-5 w-[104%] whitespace-nowrap text-[8rem] text-justify"
        >
          Pixel Core
        </div>
      </div>
    </>
  );
}
