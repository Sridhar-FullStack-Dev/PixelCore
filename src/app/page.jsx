"use client";
import { useState, useEffect } from "react";
import Languages from "@/Components/Language";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/Components/Preloader";

export default function page() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        smoothMobile: true,
        resetNativeScroll: true,
      });
    })();
  }, []);

  return (
    <main className="mt-14">
      <Languages />

      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
    </main>
  );
}