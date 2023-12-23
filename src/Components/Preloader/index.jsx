"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 },
  },
};

const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

const words = [
  "வணக்கம்",
  "नमस्ते",
  "হ্যালো",
  "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
  "హలో",
  "હેલો ",
  "ಹಲೋ",
  "ഹലോ ",
  "Hello",
];

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          variants={slideUp}
          initial="initial"
          exit="exit"
          className=" h-screen w-screen flex items-center justify-center fixed z-[999] bg-black"
        >
          {dimension.width > 0 && (
            <>
              <motion.p
                className="flex text-white text-[42px] items-center absolute z-[1]"
                variants={opacity}
                initial="initial"
                animate="enter"
              >
                <span className="block w-[10px] h-[10px] bg-white rounded-[50%] mr-3"></span>
                {words[index]}
              </motion.p>
              <svg className="absolute top-0 w-full h-full mt-24">
                <motion.path
                  variants={curve}
                  initial="initial"
                  exit="exit"
                  fill={"#000"}
                ></motion.path>
              </svg>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
