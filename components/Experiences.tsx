"use client";

import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { experiencesData } from "../data/experienceData";

function Experiences() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-start md:justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-16 md:top-24 mb-12 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experiences
      </h3>

      <div className="mt-32 md:mt-48 w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-thumb-[#0AABF7]/80">
        {experiencesData.map((project, index) => {
          return <ExperienceCard key={index} {...project} />;
        })}
      </div>
    </motion.div>
  );
}

export default Experiences;
