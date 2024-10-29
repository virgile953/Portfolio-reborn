import React from "react";
import { Navbar } from "./components/ui/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col px-5 sm:px-10 relative">
      <div className="max-w-7xl mx-auto w-full">
        <Navbar />
        <HeroSection />
        <Skills />
        <Projects />
        {/* <Skills />
        <ProjectsSection />
        <Footer /> */}
      </div>
    </main>
  );
}
