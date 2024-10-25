import {
  BriefcaseBusiness,
  Contact as ContactIco,
  House,
  UserRound,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { Navbar } from "./components/ui/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";

const navItems = [
  { name: "Home", link: "#home", icon: <House /> },
  { name: "Work", link: "#work", icon: <BriefcaseBusiness /> },
  { name: "About", link: "#about", icon: <UserRound /> },
  { name: "Contact", link: "#contact", icon: <ContactIco /> },
];

export default function Home() {
  return (
    <main className="flex flex-col px-5 sm:px-10 relative">
      <div className="max-w-7xl mx-auto w-full">
        <Navbar navItems={navItems} />
        <HeroSection />
        <Skills />
        {/* <Skills />
        <ProjectsSection />
        <Footer /> */}
      </div>
    </main>
  );
}
