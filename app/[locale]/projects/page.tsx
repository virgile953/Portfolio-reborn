"use client";
import React from "react";
import { usePortfolioProjects } from "../../lib/constants";
import ProjectCard from "../components/ProjectCard";
import { Navbar } from "../components/ui/Navbar";
import Footer from "../components/Footer";
import { useTranslations } from "next-intl";

export default function ProjectsPage() {
	const t = useTranslations("Projects");
	const portfolioProjects = usePortfolioProjects();

	return (
		<div className="relative max-w-7xl px-5 sm:px-10 mx-auto w-full">
			<Navbar redirectionType="global" animate={false} />
			<div className="pt-40 pb-24">
				<h1 className="text-4xl font-bold text-center mb-4">
					{t("allProjects")}
				</h1>
				<h3 className="text-2xl text-center">{t("subtitle")}</h3>
				<div className="grid lg:grid-cols-2 gap-4 mt-8">
					{portfolioProjects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
}
