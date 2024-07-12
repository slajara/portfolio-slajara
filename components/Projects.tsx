"use client";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/projectsData";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col overflow-hidden text-left md:text-row xl:flex-row max-w-full 
  justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-2 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thumb-[#0AABF7]/50">
        {projectsData.map((project, index) => {
          return <ProjectCard key={index} {...project} />;
        })}
      </div>
      <div className="w-full absolute top-[30%] bg-[#0AABF7]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
