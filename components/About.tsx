"use client";

import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className=" flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-2 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

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
        src="/me.jpg"
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
          Computer Engineering, which has provided me with a solid foundation in
          various programming languages and software development methodologies.
          Over the years, I have gained extensive experience in developing
          high-quality software applications. One of my greatest strengths is my
          ability to approach challenges with a logical and analytical mindset.
          I enjoy breaking down intricate problems into manageable components
          and crafting efficient solutions. Whether it´s building robust web
          applications, optimizing performance, or enhancing user experiences, I
          am always eager to tackle new and exciting projects. Living in Ireland
          has been a wonderful experience, both personally and professionally.
          The vibrant tech community and the opportunity to collaborate with
          talented individuals have enriched my journey as a developer. I am
          continuously inspired by the innovative spirit and the drive to push
          the boundaries of what technology can achieve.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
