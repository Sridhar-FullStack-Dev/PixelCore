"use client";
import "./index.css";
import Link from "next/link";
import { TbMenu2 } from "react-icons/tb";
import { CgClose } from "react-icons/cg";
import { useState, useEffect } from "react";
import { navMenuItems } from "@/app/Utils";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const variantsli = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 1, x: "100%" },
};

const transition = {
  type: "spring",
  stiffness: 500,
  damping: 30,
  duration: 0.5,
  ease: "easeInOut",
};

function MenuItems() {
  const [isClicked, setIsClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (index) => {
    setIsClicked(index);
  };

  return (
    <div>
      <ul className="flex items-center justify-center gap-4 sm:hidden md:hidden lg:flex">
        {navMenuItems.map((menuItems, index) => (
          <li
            className="font-body sm:text-sm md:text-xs lg:text-lg"
            key={index}
          >
            <Link
              className={
                "text-[1rem] flex items-center justify-center hover:text-[#CEF34A]"
              }
              href={menuItems.href}
            >
              {menuItems.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const CloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={
          scrolled
            ? "flex p-4 justify-between items-center fixed w-full text-black top-0 left-0 bg-white z-[999] shadow-sm"
            : "flex p-4 justify-between items-center fixed w-full text-white top-0 left-0 bg-black z-[999] shadow-sm transition-all"
        }
      >
        <div className="font-display flex flex-row items-center gap-8">
          <button className={scrolled ? "button bg-white" : "button bg-black"}>
            <Link href={"/"}>
              <div id="ui">Pixel</div> Core.
            </Link>
          </button>

          <MenuItems />
        </div>

        <div className=" sm:hidden md:flex lg:flex">
          <span className="flex gap-1">
            <div className="all-demos font-body flex mr-4">
              Try Out &nbsp;
              <Link className="text-[#cef34a] underline" href={"/"}>
                All Demos
              </Link>
              <MdOutlineArrowOutward className="all-demos-icon" />
            </div>
            <Link
              href={"/"}
              className="underline font-body hover:text-[#cef34a]"
            >
              Subscribe
            </Link>
          </span>
        </div>

        <div className="lg:hidden" onClick={ToggleMenu}>
          {isOpen ? <CgClose /> : <TbMenu2 />}
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            transition={transition}
            className="border border-black fixed top-0 right-0 bg-white bg-opacity-5 backdrop-blur z-[9999] py-4 pl-4 pr-8 font-body rounded-sm h-auto w-3/4 flex flex-col gap-2 font-medium"
          >
            <div
              onClick={CloseMenu}
              className="flex justify-between items-center"
            >
              <div className="mobile-menu text-white">MenuBar</div>
              <div className="text-white">
                <CgClose />
              </div>
            </div>

            {navMenuItems.map((menuItems, index) => (
              <motion.li
                variants={variantsli}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={transition}
                className=" flex"
                key={index}
              >
                <Link
                  href={menuItems.href}
                  onClick={CloseMenu}
                  className="text-lg mt-8 pl-4 text-purple-500 underline flex gap-1"
                >
                  {menuItems.name}
                  <MdOutlineArrowOutward className="all-demos-icon" />
                </Link>
              </motion.li>
            ))}

            <p className="sm:text-[8px] md:text-sm whitespace-nowrap mt-4">
              Note: Choose English Language for best UI/UX Experience
            </p>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}
