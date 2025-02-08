"use client";
import React, { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import { usePortfolioProjects } from "../../../lib/constants";
import { Navbar } from "../../components/ui/Navbar";
import { Code, Globe } from "lucide-react";
import TechStack from "../../components/TechStack";
import Button from "../../components/ui/Button";
import { TextGenerateEffect } from "../../components/ui/TextGenerate";
import { Project } from "../../../types/project";
import { useTranslations } from "next-intl";

const ProjectOverview = ({
	params,
}: {
	params: Promise<{ projectName: string }>;
}) => {
	const items = usePortfolioProjects();
	const t = useTranslations("Projects");
	const [project, setProject] = useState<Project | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const resolvedParams = React.use(params);

	useEffect(() => {
		const foundProject = items.find(
			(p) => p.id.toLowerCase() === resolvedParams.projectName.toLowerCase()
		);

		if (!foundProject) {
			return notFound();
		}

		setProject(foundProject);
		setIsLoading(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [resolvedParams.projectName]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!project) {
		return notFound();
	}

	const {
		heading,
		subheading,
		description,
		techStack,
		liveDemoUrl,
		sourceCodeUrl,
	} = project;

	return (
		<main className="flex flex-col px-5 sm:px-10 relative">
			<div className="max-w-7xl mx-auto w-full">
				<Navbar redirectionType="global" animate={false} />

				<div className="pt-36 max-w-7xl">
					<div className="h-screen w-full dark:bg-dark-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.06] absolute top-0 left-0 flex items-center justify-center">
						<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-dark-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
					</div>

					<div className="relative z-10">
						<h1 className="text-[40px] md:text-6xl lg:text-7xl text-center max-w-5xl leading-normal tracking-wide uppercase mx-auto">
							<TextGenerateEffect
								words={heading}
								className="text-[40px] md:text-6xl lg:text-7xl font-bold text-center max-w-5xl leading-snug tracking-wide"
							/>
							<br />
							<p className="text-[32px] md:text-5xl lg:text-6xl font-light text-center max-w-5xl leading-snug tracking-wide">
								{subheading}
							</p>
						</h1>

						<div className="mt-8 mb-32 flex flex-col md:flex-row gap-10 md:gap-5 justify-between">
							<div className="flex-1 w-auto lg:min-w-96">
								<h2 className="text-3xl min-[430px]:text-4xl md:text-5xl dark:text-stone-200 mb-5">
									{t("overview")}
								</h2>

								<TechStack techStack={techStack} />

								<div className="flex items-center gap-4 mt-10">
									{liveDemoUrl && (
										<Button
											icon={<Globe />}
											iconPosition="left"
											href={liveDemoUrl}
										>
											{t("viewDemo")}
										</Button>
									)}
									{sourceCodeUrl && (
										<Button
											icon={<Code />}
											iconPosition="left"
											href={sourceCodeUrl}
										>
											{t("sourceCode")}
										</Button>
									)}
								</div>
							</div>
							<p
								className="flex-auto text-justify whitespace-pre-line"
								dangerouslySetInnerHTML={{ __html: description }}
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default ProjectOverview;
