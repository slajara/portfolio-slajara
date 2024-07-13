"use client";

import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <div className="mt-32 mb-12 flex flex-col md:flex-row items-center space-y-10 md:space-y-0">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          src="others/me.jpg"
          alt="Me"
          className="mb-0 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />

        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-4xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#0AABF7]">little</span>{" "}
            background
          </h4>
          <p className="text-base">
            Hello! My name is Samuel Lajara, and I´m a passionate software
            engineer and developer based in Ireland. With a strong background in
            computer science and a love for coding, I thrive on solving complex
            problems and creating innovative solutions. I hold a degree in
            Computer Engineering, which has provided me with a solid foundation
            in various programming languages and software development
            methodologies. Over the years, I have gained extensive experience in
            developing high-quality software applications. One of my greatest
            strengths is my ability to approach challenges with a logical and
            analytical mindset.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
