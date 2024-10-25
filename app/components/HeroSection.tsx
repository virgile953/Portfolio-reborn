import { ChevronRight, Download } from "lucide-react";
import ShinyButton from "./ui/Button";
import Link from "next/link";
import { TextGenerateEffect } from "./TextGenerate";
import React from "react";

const words = "Advanced Development & Data Engineering Solutions";

const HeroSection = () => {
  return (
    <>
      <div className="h-screen w-full dark:bg-dark-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.06] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-dark-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div
        className="pb-20 pt-36 sm:p-0 sm:min-h-screen flex flex-col items-center justify-center relative"
        id="#home"
      >
        <div className="flex flex-col justify-center items-center relative z-10 text-center">
          <p className="uppercase font-bold text-sm tracking-widest">
            Paris
          </p>
          {/* <h1 className="text-[40px] md:text-6xl lg:text-7xl font-bold text-center max-w-5xl leading-tight tracking-wide">
            {words.split(" ").slice(0, 1)}{" "}
            <span className="text-primary">
              {words.split(" ").slice(1, words.split(" ").length - 1).join(" ")}
              </span> {words.split(" ").at(-1)}
          </h1> */}
          <TextGenerateEffect
            words={words}
            className="text-[40px] md:text-6xl lg:text-7xl font-bold text-center max-w-5xl leading-snug tracking-wide"
          />
          <p className="pt-5 pb-8 text-sm sm:text-base md:text-lg text-dark-200 dark:text-stone-200/70">
            Hi, I&apos;m Virgile,  a developer focused on creating efficient,
            high-performance applications through low level development and data engineering.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <ShinyButton icon={<ChevronRight />}>
              <Link href="#work">See My Work</Link>
            </ShinyButton>
            <a
              href="/resume/CV_VBA-en.pdf"
              download
              className="flex items-center gap-2.5 group"
            >
              <Download className="text-primary" />
              <span className="group-hover:text-white/70 transition-colors duration-200 font-semibold">
                Download CV
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
