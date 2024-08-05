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
      className="flex flex-col rounded-lg items-center md:space-y-5 flex-shrink-0 w-[220px] md:w-[700px] xl:w-[900px] 
    snap-center bg-[#292929] p-2 md:p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        src={img}
        alt="Me"
        className="w-20 h-20 md:w-32 md:h-32 rounded-full xl:w-[200px] xl:h-[200px] object-contain object-center"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-xl md:text-3xl xl:text-4xl font-bold">{position}</h4>
        <p className="text-1xl md:text-2xl font-light mt-1"> {company}</p>
        <div className="flex space-x-2 my-2">
          {tech.map((tech, index) => (
            <Image
              key={index}
              priority={true}
              src={tech}
              alt={`Tech ${index + 1}`}
              width={100}
              height={100}
              className="h-8 w-8 md:w-12 md:h-12 rounded-full"
            />
          ))}
        </div>

        <p className="uppercase py-2 md:py-5 text-gray-300 text-xs md:text-base xl:text-lg"> {date} </p>
        <ul className="list-disc space-y-2 ml-5 text-xs md:text-base xl:text-lg">
          {functions.map((func, index) => (
            <li key={index}>{func}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
