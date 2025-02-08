"use client";
// import { portfolioProjects } from "../../lib/constants";
import { usePortfolioProjects } from "../../lib/constants";
import ProjectCard from "./ProjectCard";
import { ChevronRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const ProjectsSection = () => {
	const t = useTranslations("Projects");
	const projects = usePortfolioProjects();
	return (
		<div className="py-32" id="work">
			<div className="flex gap-4 flex-col sm:flex-row sm:items-center justify-between">
				<h2 className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200">
					{t("title")}
				</h2>
				<div className="gap-4">
					<Link
						prefetch={true}
						href="/projects"
						className={`
						self-start relative z-10 inline-flex gap-2.5 h-12 animate-shimmer items-center justify-center
						rounded-md border border-dark-700 bg-[linear-gradient(110deg,#1A1A1A,45%,#262626,55%,#1A1A1A)]
						hover:bg-[linear-gradient(110deg,#262626,45%,#404040,55%,#262626)] bg-[length:200%_100%] px-6 font-medium text-sm sm:text-base
						text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
					`}
					>
						{t("allProjects")}
						<ChevronRight className="w-5 h-5" />
					</Link>
				</div>
			</div>
			<div className="grid lg:grid-cols-2 gap-4 mt-8">
				{projects.slice(0, 4).map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</div>
	);
};

export default ProjectsSection;
