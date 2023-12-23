"use client";
import "./index.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { LanguageModels } from "@/app/Utils";

export default function Languages() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
  };

  return (
    <>
      <div className="h-[100vh] p-10">
        <div className="flex justify-center items-center sm:flex sm:flex-col">
          <div data-scroll data-scroll-speed="2">
            <div className=" lg:text-5xl font-playfair font-medium text-center text-4xl flex items-center justify-center p-4">
              {"Select your language."}
            </div>
          </div>

          <div className="flex justify-center item-center p-4">
            <div className="languages grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {LanguageModels.map((language, index) => (
                <div
                  key={index}
                  className={`lg:h-40 lg:w-40 sm:h-32 sm:w-32 font-bold ${language.fontFamily}`}
                >
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link href={`${language.href}`} onClick={handleClick}>
                      <Image
                        src={language.img}
                        height={700}
                        width={700}
                        alt={language.alt}
                        className="lg:h-40 lg:w-40 sm:h-32 sm:w-32 object-cover absolute bg-no-repeat rounded-md"
                      />
                      <div className="names text-xl relative top-6 flex justify-center text-white font-bold">
                        {language.name}
                      </div>
                    </Link>
                  </motion.div>
                </div>
              ))}
              <AnimatePresence mode="wait">
                {isLoading && (
                  <div className=" fixed h-[100vh] w-full bg-white left-0 top-0 flex justify-center items-center font-bold text-[20rem] text-black">
                    <div className="loader"></div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
        <p className="sm:text-[11px] md:text-sm whitespace-nowrap mt-4 pb-8 text-center">
          Note: Choose English Language for best UI/UX Experience
        </p>
      </div>
    </>
  );
}