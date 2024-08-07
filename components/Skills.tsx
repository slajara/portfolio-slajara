"use client";

import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { skillsData } from "../data/skillsData";

const Skills: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center xl:flex-row max-w-[2000px] 
    xl:px-8 h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-40 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>
 
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {skillsData.map((skill, index) => (
          <SkillCard key={index} directionLeft={index % 2 === 0} {...skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
