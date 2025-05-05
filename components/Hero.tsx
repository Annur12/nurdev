import { socialLinks } from "@/data";
import { BackgroundBeams } from "./ui/background-beams";
import { TextGenerateEffect } from "./ui/textGenerateEffect";
import Link from "next/link";

import * as Icons from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pt-48 pb-20" id="about">
      <div>
        <BackgroundBeams className="h-screen" />
      </div>

      <div className="flex justify-center">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex-col items-center justify-center">
          <TextGenerateEffect
            className="text-center lg:text-[42px] md:text-[36px] text-[24px] font-bold"
            words="Crafting Clean Web Experiences with Clarity and Purpose."
          />

          <p className="text-center italic md:tracking-wider text-sm md:text-lg lg:text-xl">
            Hi!{" "}
            <span className="text-neutral-400">
              I&apos;m Nur Manggona - a Full Stack Developer.
            </span>{" "}
            I create <br /> modern and responsive web applications.
          </p>

          <div className="flex gap-4 justify-center mt-8">
            {socialLinks.map(({ name, href, icon }) => {
              const Icon = Icons[icon as keyof typeof Icons];
              if (!Icon) return null;
              return (
                <div key={name} className="group relative">
                  <Link className="cursor-pointer" href={href} target="_blank">
                    <Icon className="text-xl md:text-2xl lg:text-3xl text-blue-100 hover:text-gray-400 transition-colors duration-200 ease-in-out" />
                  </Link>
                  <span
                    className="
              absolute -top-8 left-1/2 -translate-x-1/2
              bg-black text-white text-xs px-2 py-1 rounded
              opacity-0 group-hover:opacity-100 transition-opacity
              whitespace-nowrap
            "
                  >
                    {name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
