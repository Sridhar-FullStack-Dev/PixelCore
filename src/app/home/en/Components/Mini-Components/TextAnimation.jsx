import { motion } from "framer-motion";

export default function TextAnimation() {
  const text = "software solution";
  const characters = text.split();

  return (
    <motion.h1 className="sm:text-[1.2rem] md:text-3xl py-4 sm:w-full md:w-[29rem] font-body tracking-wide text-gray-400">
      Wondering how to leverage
      <div className="flex text-gray-400">
        {characters.map((char, index) => (
          <motion.div
            whileInView={{ color: "black" }}
            transition={{
              damping: 10,
              stiffness: 100,
              duration: 0.3,
              delay: 1,
              ease: "easeOut",
            }}
            key={index}
          >
            {char}
          </motion.div>
        ))}
      </div>
      for your business?
    </motion.h1>
  );
}
