"use client";
import React from "react";
import { portfolioProjects } from "../lib/constants";
import ProjectCard from "../components/ProjectCard";
import {
	BriefcaseBusiness,
	ChevronLeft,
	House,
	UserRound,
	Contact as ContactIco,
} from "lucide-react";
import { Navbar } from "../components/ui/Navbar";
import { useRouter } from "next/navigation";
import { TextGenerateEffect } from "../components/ui/TextGenerate";
import Footer from "../components/Footer";

const navItems = [
	{ name: "Home", link: "#home", icon: <House /> },
	{ name: "Work", link: "#work", icon: <BriefcaseBusiness /> },
	{ name: "About", link: "#about", icon: <UserRound /> },
	{ name: "Contact", link: "#contact", icon: <ContactIco /> },
];

const ProjectsPage = () => {
	const router = useRouter();
	return (
		<div className="max-w-7xl px-5 sm:px-10 mx-auto w-full">
			<Navbar items={navItems} redirectionType="global" animate={false} />
			<div className="pt-40 pb-24">
				<h1 className="text-4xl font-bold text-center mb-10">All Projects</h1>
				<div className="grid lg:grid-cols-2 gap-4 mt-8">
				{portfolioProjects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
			</div>
			<Footer/>
		</div>
	);
};

export default ProjectsPage;
