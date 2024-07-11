"use client";

import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

function Header() {
  return (
    <div className="top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.linkedin.com/in/samuel-lajara-agullo/"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
        <SocialIcon
          url="https://github.com/slajara"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          href="#contact"
        />
        <Link href="#contact">
          <p className="uppercase hiden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </Link>
      </motion.div>
    </div>
  );
}

export default Header;
