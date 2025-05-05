"use client";

import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Qualifications from "@/components/Qualifications";
import IndustryVisit from "@/components/IndustryVisit";
import Footer from "@/components/Footer";
import {
  Navbar,
  NavbarLogo,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizableNavbar";
import { navLinks } from "@/data";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Navbar>
          <NavBody visible>
            <NavbarLogo />
            <NavItems items={navLinks} />
          </NavBody>

          <MobileNav visible>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle isOpen={isOpen} onClick={toggleOpen} />
            </MobileNavHeader>

            <MobileNavMenu isOpen={isOpen} onClose={toggleOpen}>
              <NavItems items={navLinks} onItemClick={toggleOpen} />
            </MobileNavMenu>
          </MobileNav>
        </Navbar>

        <Hero />
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] mx-auto py-20">
          <Skills />
          <Projects />
          <Qualifications />
          <IndustryVisit />
          <Footer />
        </div>
      </div>
    </div>
  );
}
