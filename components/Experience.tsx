"use client";

import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

interface ExperienceCardProps {
  position: string;
  business: string;
  tech: string;
  functions: string;
}

function Experience() {
  const experienceWorks: ExperienceCardProps[] = [
    {
      position: "Software Engineer",
      business: "Indra",
      tech: "Ada, C++",
      functions: "Developed software using Ada and C++ for various projects.",
    },
    {
      position: "Co-founder",
      business: "Shisha",
      tech: "Web, Excel",
      functions: "Managed web development and business operations.",
    },
    {
      position: "Supermarket Staff",
      business: "Dialprix",
      tech: "Excel, C++",
      functions: "Handled inventory management and customer service.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="mt-32 w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-thumb-[#0AABF7]/80">
        {experienceWorks.map((project, index) => {
          return <ExperienceCard key={index} {...project} />;
        })}
      </div>
    </motion.div>
  );
}

export default Experience;
