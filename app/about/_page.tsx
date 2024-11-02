"use client";
import React from "react";
import { Navbar } from "../components/ui/Navbar";
import Footer from "../components/Footer";
import { House, UserRound, Contact as ContactIco, BriefcaseBusiness } from "lucide-react";
import Skills from "../components/Skills";
import HeroSection from "../components/HeroSection";
import { BackToTop } from "../components/ui/BackToTop";

const navItems = [
	{ name: "Home", link: "/", icon: <House /> },
	{ name: "Work", link: "/projects", icon: <BriefcaseBusiness /> },
	{ name: "About", link: "#about", icon: <UserRound /> },
	{ name: "Contact", link: "#contact", icon: <ContactIco /> },
];

const AboutPage = () => {
	return (
		<div className="max-w-7xl px-5 sm:px-10 mx-auto w-full">
			<Navbar items={navItems} />
			<HeroSection />
			<Skills />
			<Footer />
			<BackToTop />
		</div>
	);
};

export default AboutPage;
