"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ExperiencesProps {
  img: string;
  position: string;
  company: string;
  tech: string[];
  date: string;
  functions: string[];
}

export const ExperienceCard: React.FC<ExperiencesProps> = ({
  img,
  position,
  company,
  tech,
  date,
  functions,
}) => {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[300px] md:w-[700px] xl:w-[900px] 
    snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{ y: -100, opacity: 0, }}
        transition={{ duration: 1.2, }}
        whileInView={{ opacity: 1, y: 0, }}
        viewport={{ once: true }}
        src={img}
        alt="Me"
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-contain object-center"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl md:text-3xl xl:text-4xl font-light">{position}</h4>
        <p className="text-1xl md:text-2xl font-bold mt-1"> {company}</p>
        <div className="flex space-x-2 my-2">
          {tech.map((tech, index) => (
            <Image
              key={index}
              priority={true}
              src={tech}
              alt={`Tech ${index + 1}`}
              width={100}
              height={100}
              className="h-10 w-10 rounded-full"
            />
          ))}
        </div>

        <p className="uppercase py-5 text-gray-300 text-sm md:text-base xl:text-lg"> {date} </p>
        <ul className="list-disc space-y-4 ml-5 text-sm md:text-base xl:text-lg">
          {functions.map((func, index) => (
            <li key={index}>{func}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
