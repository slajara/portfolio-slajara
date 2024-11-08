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
          <p className="text-sm md:text-base xl:text-lg">
            <span className="underline decoration-[#0AABF7]">
              Web3 Enthusiast & Code Magician
            </span>
            , creating a decentralized future with every line of code.
            <br />
            <br />
            With a deep passion for Web3 and a knack for turning complex ideas
            into seamless digital experiences, I thrive on building innovative,
            user-centric solutions. Let’s make your next big idea a reality in
            the blockchain universe, bringing creativity, security, and a touch
            of code magic to your project!
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
