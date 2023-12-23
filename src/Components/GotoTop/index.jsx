import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

export default function GotoTop() {
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
      <Link href={"#hero"} ref={buttonRef} title="Go to top">
        <FaArrowUpLong className="font-bold sm:text-base md:text-xl text-white" />
      </Link>
    </>
  );
}