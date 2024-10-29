import { notFound } from "next/navigation";
import { portfolioProjects } from "../lib/constants";
import { Navbar } from "../components/ui/Navbar";
import Link from "next/link";
import { Code, Globe } from "lucide-react";
// import Image from "next/image";
import TechStack from "../components/TechStack";
import Button from "../components/ui/Button";


// Make generateMetadata asynchronous to handle dynamic route params
export async function generateMetadata({ params }: { params: { projectName: string } }) {
	const settings = await params;
	const projectId = settings.projectName;
	const project = portfolioProjects.find((project) => project.id === projectId);

	if (!project) return { title: "Not Found" };

	return {
		title: `Project ${project.heading}`,
	};
}

const ProjectOverview = async ({ params }: { params: { projectName: string } }) => {
	// Await `params` to ensure it’s ready
	const settings = await params;
	const projectId = settings.projectName;
	const project = portfolioProjects.find((project) => project.id === projectId);

	if (!project) return notFound();

	const {
		heading,
		subheading,
		description,
		// imageUrl,
		techStack,
		liveDemoUrl,
		sourceCodeUrl,
	  } = project;

	  return (
		<main className="flex flex-col px-5 sm:px-10 relative">
		  <div className="max-w-7xl mx-auto w-full">
			<Navbar redirectionType="global" animate={false} />

			<div className="pt-36">
			  <div className="h-screen w-full dark:bg-dark-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.06] absolute top-0 left-0 flex items-center justify-center">
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-dark-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
			  </div>

			  <div className="relative z-10">
				<h1 className="text-[40px] md:text-6xl lg:text-7xl text-center max-w-5xl leading-normal tracking-wide uppercase mx-auto">
				  <span className="font-black">{heading}</span>
				  <br />
				  {subheading}
				</h1>

				{/* <div className="flex items-center justify-center my-24">
				  <Link href="#image">
					<MoveDown className="size-16" strokeWidth={1} />
				  </Link>
				</div> */}

				{/* <div className="rounded-lg overflow-hidden" id="image">
				  <Image
					src={imageUrl}
					width={2000}
					height={1000}
					alt="portfolio"
				  />
				</div> */}

				<div className="mt-8 mb-32 flex flex-col md:flex-row gap-10 md:gap-5 justify-between">
				  <div className="flex-1">
					<h2 className="text-3xl min-[430px]:text-4xl md:text-5xl dark:text-stone-200 mb-5">
					  Project Overview
					</h2>

					<TechStack techStack={techStack} />

					<div className="flex items-center gap-4 mt-10">
					  <Button icon={<Globe />} iconPosition="left">
						<Link href={liveDemoUrl} target="_blank">
						  View Demo
						</Link>
					  </Button>

					  <Button icon={<Code />} iconPosition="left">
						<Link href={sourceCodeUrl} target="_blank">
						  Source Code
						</Link>
					  </Button>
					</div>
				  </div>

				  <p className="flex-1">{description}</p>
				</div>
			  </div>
			</div>

			{/* <Footer /> */}
		  </div>
		</main>
	  );
};

export default ProjectOverview;
