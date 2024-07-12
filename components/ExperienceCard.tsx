"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ExperiencesProps {
  img: string;
  position: string;
  business: string;
  tech: string[];
  date: string;
  functions: string[];
}

export const ExperienceCard: React.FC<ExperiencesProps> = ({
  img,
  position,
  business,
  tech,
  date,
  functions,
}) => {
  return (
    <article
      className="h-screen flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[800px] 
    snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        src={img}
        alt="Me"
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-contain object-center"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{position}</h4>
        <p className="font-bold text-2xl mt-1"> {business}</p>
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

        <p className="uppercase py-5 text-gray-300"> {date}</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {functions.map((func, index) => (
            <li key={index}>{func}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
