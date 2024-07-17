"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Samuel", "{ Love Code }", "Web Developer"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        priority={true}
        src="/others/me_hero.jpg"
        alt="My Profile"
        width={300}
        height={300}
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[13px]">
          Software Engineer
        </h2>
        <h1 className="text-3xl lg:text-6xl font-semibold px-10">
          <span className="">{text}</span>
          <Cursor cursorColor="#0AABF7" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButtom">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButtom">Experience</button>
          </Link>

          <Link href="#skills">
            <button className="heroButtom">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButtom">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
