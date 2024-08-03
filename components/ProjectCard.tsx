import { motion } from "framer-motion";

interface ProjectProps {
  img: string;
  project: string;
  tech: string;
  description: string;
  github: string;
  url: string;
}

interface ProjectCardProps extends ProjectProps {
  index: number;
  totalProjects: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  totalProjects,
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
        className="relative mx-auto object-cover w-72 md:w-[500px] xl:w-[750px]"
      />
      <div className="space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className="text-2xl font-semibold text-center">
          Project {index + 1} of {totalProjects} <br/>
          <span className="text-4xl underline decoration-[#0AABF7]/50">
            {project}
          </span>{" "}
        </h4>

        <p className="text-lg text-center md:text-left">{description}</p>
      </div>
    </div>
  );
};
export default ProjectCard;
