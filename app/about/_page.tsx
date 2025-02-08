"use client";
import React from "react";
import { Navbar } from "../[locale]/components/ui/Navbar";
import Footer from "../[locale]/components/Footer";
import Skills from "../[locale]/components/Skills";
import HeroSection from "../[locale]/components/HeroSection";
import { BackToTop } from "../[locale]/components/ui/BackToTop";


const AboutPage = () => {
	return (
		<div className="max-w-7xl px-5 sm:px-10 mx-auto w-full">
			<Navbar />
			<HeroSection />
			<Skills />
			<Footer />
			<BackToTop />
		</div>
	);
};

export default AboutPage;
