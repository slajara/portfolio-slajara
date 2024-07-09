"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";

function Hero() {
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Samuel Lajara", "Software Engineer", "Web Developer"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        priority={true}
        src="/me.jpg"
        alt="Me"
        width={300}
        height={300}
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />

      <div>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#0AABF7" />
        </h1>
        <div className="heroButtom">About</div>
        <div className="heroButtom">Experience</div>
        <div className="heroButtom">Skills</div>
        <div className="heroButtom">Projects</div>
      </div>
    </div>
  );
}

export default Hero;
