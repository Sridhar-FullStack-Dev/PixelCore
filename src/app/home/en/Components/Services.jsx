import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import { servicesSection } from "@/app/Utils";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowLeftSquareFill, BsArrowUpSquareFill } from "react-icons/bs";

export default function Services() {
  const [isClicked, setIsClicked] = useState(null);
  const buttonRef = useRef(null);

  const handleClick = (services) => {
    setIsClicked(services);
  };

  useEffect(() => {
    gsap.to(buttonRef.current, {
      x: 10,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="flex w-full justify-between sm:flex-col lg:flex-row h-auto font-body bg-gray-200">
      {/* Left */}
      <div className="flex sm:flex-col md:flex-row">
        <div className="flex flex-col justify-between h-[70vh] lg:w-[45%] xl:w-auto p-8">
          <div className="text-sm">
            Production and <br /> Technology
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "linear", delay: 0.3, duration: 0.5 }}
            className="sm:text-6xl lg:text-[4rem] xl:text-8xl font-bold"
          >
            Services
          </motion.div>
          <div className="text-base text-justify w-64">
            We work closely with our clients to understand their challenges and
            goals, and we tailor our services accordingly.
          </div>
        </div>

        {/* Middle */}
        <div className="grid sm:grid-cols-2 pt-8 pb-10 gap-6 transition-all sm:px-8">
          {servicesSection.map((services, key) => (
            <div
              key={key}
              className="h-32 w-36 cursor-pointer text-sm overflow-hidden bg-black bg-opacity-5 p-4"
              onClick={() => handleClick(services)}
              title={services.service}
            >
              <div className=" text-gray-400">{services.num}</div>
              <h1 className="mt-4 text-base text-left">{services.service}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* Rigth */}
      <div className="bg-transparent h-screen sm:w-full lg:w-[40%] overflow-hidden relative">
        {/* Initial content to display before click */}
        <div className="absolute py-8">
          <div className=" h-40 w-full font-body text-8xl">
            <span className="text-white font-bold">
              Click to view the services
              <br />
            </span>
            <div ref={buttonRef} className="mt-8">
              <BsArrowLeftSquareFill                
                title="click the services to view the details"
                className="hover:bg-[#CEF34A] rounded-full sm:hidden lg:block"
              />

              <BsArrowUpSquareFill
                title="click the services to view the details"
                className="hover:bg-[#CEF34A] rounded-full sm:block lg:hidden"
              />
            </div>
          </div>
        </div>

        {/* Content to be shown after click */}
        <AnimatePresence>
          {servicesSection.map(
            (service, key) =>
              isClicked === service && (
                <motion.div
                  initial={{ y: "-100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.5,
                  }}
                  key={key}
                  className={`w-full h-screen ${service.color} ${service.text} p-8 font-roboto `}
                >
                  <div className="relative h-full">
                    <Image
                      src={`/images/${service.img}`}
                      height={1000}
                      width={1000}
                      alt={service.service}
                      className="w-36"
                    />

                    <div className="sm:text-xl lg:text-xl font-bold uppercase whitespace-nowrap py-8 mt-4">
                      {service.heading}
                    </div>

                    <div className="text-xl text-justify py-4">
                      {service.content}
                    </div>

                    {/* Navigations */}
                    <div className="flex w-full justify-between items-center absolute bottom-4">
                      <Link href={"#contacts"}>Book your project now</Link>
                    </div>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
