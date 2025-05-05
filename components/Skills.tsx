import { technologies } from "@/data";
import * as Icons from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <h1 className="text-xl md:text-2xl lg:text-[28px]">
        Technologies I work with
      </h1>

      <p className="mt-6 text-gray-400 text-[16px] max-w-xl">
        I enjoy building web apps that are fast, responsive, and user-friendly.
        I&apos;m always exploring ways to write better code, improve user
        experience, and grow as a developer.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-4">
        {technologies.map(({ name, description, icon, color }) => {
          const Icon = Icons[icon as keyof typeof Icons];
          if (!Icon) return null;
          return (
            <div
              key={name}
              className="flex flex-col gap-3 p-3 rounded-md border border-neutral-700 hover:border-neutral-400 transition-colors duration-200 ease-in-out"
            >
              <div className="flex items-center gap-3">
                <div className="p-4 rounded-md bg-neutral-800">
                  <Icon className="text-2xl" style={{ color }} />
                </div>

                <div className="flex flex-col">
                  <h2>{name}</h2>
                  <p className="text-gray-300 text-sm">{description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
