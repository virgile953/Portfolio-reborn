"use client";

import { EyeIcon } from "lucide-react";
import Image from "next/image";
import { Link } from '@/i18n/routing';
import TechStack from "./TechStack";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

interface ProjectProps {
	id: string;
	heading: string;
	subheading: string;
	description: string;
	imageUrl: string;
	techStack: string[];
	liveDemoUrl?: string;
	sourceCodeUrl?: string;
	imageDemoUrl?: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
	const { id, heading, imageUrl, techStack } = project;
	const { theme } = useTheme();
	return (
		<motion.div
			initial={{ opacity: 0, y: 75 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: 0.25 }}
			className="bg-accent rounded-lg p-4 sm:p-8 space-y-8"
		>
			<div className="flex flex-1 flex-col sm:flex-row items-center gap-6 overflow-auto">
				<Link prefetch={true} href={`/projects/${id}`} className="rounded-lg">
					<Image
						loading="lazy"
						src={imageUrl}
						width={150}
						height={150}
						alt={heading}
						className={`rounded-lg object-cover transition-transform duration-500 ${imageUrl.toLowerCase().includes("portfolio") && theme === "dark" ? "invert" : ""
							} scale-90 hover:scale-100`}
						unoptimized
					/>
				</Link>

				<div className="flex flex-col space-y-4 w-full">
					<h3 className="text-2xl sm:text-3xl font-semibold">{heading}</h3>

					<div className="flex flex-col sm:flex-row justify-between gap-5 grow">
						<TechStack techStack={techStack} />
						<Link
							prefetch={true}
							href={`/projects/${id}`}
							className="mb-0 p-3 bg-primary hover:bg-primary/80 transition-colors duration-200 rounded-lg self-end sm:self-end"
						>
							<EyeIcon className=" w-5 h-5 sm:w-8 sm:h-8 text-white dark:text-dark-200" />
						</Link>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default ProjectCard;
