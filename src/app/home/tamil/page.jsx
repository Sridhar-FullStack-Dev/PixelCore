"use client";
import "./index.css";
import gsap from "gsap";
import Hero from "./Components/Hero";
import React, { useRef, useEffect } from "react";

// Components
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Scenarios from "./Components/Scenarios";
import WeareHiring from "./Components/WeareHiring";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Projects2 from "./Components/Projects2";

export default function page() {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;

    const tl = gsap.timeline();
    tl.to(textElement, { xPercent: -100, duration: 20, ease: "ease-out" });
    tl.repeat(-1);

    return () => {
      tl.kill();
    };
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

      setTimeout(() => {
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
    <>
      <main data-scroll-container className="mt-14">
        <div className="overflow-hidden bg-black text-white p-10 z-10">
          <div
            ref={textRef}
            className="text-on flex justify-between items-center lg:text-9xl md:text-8xl sm:text-6xl w-auto whitespace-nowrap font-geordina"
          >
            உங்கள் எதிர்காலம் வலைத்தளம் 3.0+ உங்கள் எதிர்காலம் வலைத்தளம் 3.0+
            உங்கள் எதிர்காலம் வலைத்தளம் 3.0+
          </div>
        </div>

        <section data-scroll-section className="py-8" id="hero">
          <Hero />
        </section>
        <section
          data-scroll-section
          className="py-8 overflow-hidden"
          id="about"
        >
          <AboutUs />
        </section>
        <section
          data-scroll-section
          className="overflow-hidden sm:py-2 md:py-8"
          id="services"
        >
          <Services />
        </section>
        <section data-scroll-section className="py-8" id="projects">
          <Projects />
          <Projects2 />
        </section>
        <section data-scroll-section className="overflow-hidden" id="projects">
          <Scenarios />
        </section>
        <section data-scroll-section className="overflow-hidden" id="careers">
          <WeareHiring />
        </section>
        <section data-scroll-section className="overflow-hidden" id="contacts">
          <ContactUs />
        </section>

        <footer data-scroll-section className="overflow-hidden">
          <Footer />
        </footer>
      </main>
    </>
  );
}
