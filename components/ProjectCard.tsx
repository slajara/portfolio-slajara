import { motion } from "framer-motion";

interface ProjectProps {
  img: string;
  project: string;
  tech: string;
  description: string;
  github: string;
  url: string;
}

export const ProjectCard: React.FC<ProjectProps> = ({
  img,
  project,
  description,
  tech,
}) => {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
      <motion.img
        initial={{ y: -300, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={img}
        alt="Me"
        className="relative mx-auto object-cover"
      />
      <div className="space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className="text-4xl font-semibold text-center">
          {" "}
          <span className="underline decoration-[#0AABF7]/50">
            Case Study
          </span>{" "}
          {project}
        </h4>

        <p className="text-lg text-center md:text-left">{description}</p>
      </div>
    </div>
  );
};
export default ProjectCard;
