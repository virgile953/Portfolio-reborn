"use client";

import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TechStack from "./TechStack";
import { motion } from "framer-motion";

interface ProjectProps {
	id: string;
	heading: string;
	subheading: string;
	description: string;
	imageUrl: string;
	techStack: string[];
	liveDemoUrl: string;
	sourceCodeUrl: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
	const { id, heading, imageUrl, techStack } = project;

	return (
		<motion.div
			initial={{ opacity: 0, y: 75 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: 0.25 }}
			className="bg-[#F3F4F3] dark:bg-dark-200 rounded-lg p-4 sm:p-8 space-y-8"
		>
			<div className="flex flex-col sm:flex-row items-center gap-6">
				<Link href={`/projects/${id}`} className="rounded-lg overflow-visible">
					<Image
						loading="lazy"
						src={imageUrl}
						width={150} // Adjust the width and height as needed
						height={150}
						alt={heading}
						className={`rounded-lg object-cover transition-transform duration-700 ${
							imageUrl.toLowerCase().includes("portfolio") ? "dark:invert" : ""
						} scale-100 hover:scale-110`}
					/>
				</Link>

				<div className="flex flex-col space-y-4 w-full">
					<h3 className="text-2xl sm:text-3xl font-semibold">{heading}</h3>

					<div className="flex flex-col sm:flex-row justify-between gap-5">
						<TechStack techStack={techStack} />
						<Link
							href={`/projects/${id}`}
							className="p-3 bg-primary hover:bg-primary/80 transition-colors duration-200 rounded-lg self-start sm:self-end"
						>
							<EyeIcon className="w-5 h-5 sm:w-8 sm:h-8 text-white dark:text-dark-200" />
						</Link>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default ProjectCard;
