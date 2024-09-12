"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col relative h-screen text-center md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl w-full">
        About
      </h3>

      <div className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-0 flex-shrink-0 w-32 h-32 md:w-[350px] md:h-[450px] xl:w-[450px] xl:h-[550px] rounded-full overflow-hidden md:rounded-lg"
          >
            <Image
              src="/me/about.jpg"
              alt="Me"
              width={3000}
              height={3000}
              className="object-cover"
              priority={true}
            />
        </motion.div>

        <div className="space-y-10 px-0 md:px-10">
          <p className="text-sm md:text-base xl:text-lg
          ">
            <span className="underline decoration-[#0AABF7]">
              Engineer and developer with 2 years of experience
            </span>
            , originally from Spain, and currently living in Dublin, Ireland.
            <br />
            <br />
            With a solid background in computer science, I enjoy coding, solving
            complex problems, and creating innovative solutions. One of my greatest strengths is the ability to tackle
            challenges with a logical and analytical mindset. 
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
