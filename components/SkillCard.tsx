import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

interface SkillsProps {
  tech: string;
  img: string;
  level: string;
}

type CombinedProps = Props & SkillsProps;

const SkillCard: React.FC<CombinedProps> = ({
  directionLeft,
  tech,
  img,
  level,
}) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        animate={{ opacity: 1, x: 0 }}
        src={img}
        className="rounded-full border border-gray-500 object-cover object-center w-16 h-16 md:h-28 md:w-28 xl:w-32 xl:h-32 
        filter  group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white h-16 w-16 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full z-0"
      >
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-1xl md:text-3xl font-bold text-black opacity-100">{level}</p>
          <p className="text-xs md:text-1xl font-bold text-black opacity-100">{tech}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
