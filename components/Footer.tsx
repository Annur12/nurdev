import { navLinks, socialLinks } from "@/data";
import Link from "next/link";

import * as Icons from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full pt-24 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-100">
            Crafting <span className="text-blue-400">Code</span> with Purpose
          </h2>

          <p className="text-neutral-300 max-w-2xl mb-6">
            Building web experiences that are fast, accessible, and meaningful —
            one line of code at a time.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-neutral-800 pt-6">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-neutral-400">
              © {new Date().getFullYear()} Nur Manggona. All rights reserved
            </p>
          </div>

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
    </footer>
  );
};

export default Footer;
