import Link from "next/link";
import { portfolioProjects } from "../lib/constants";
import ProjectCard from "./ProjectCard";
import Button from "./ui/Button";
import { ChevronRight } from "lucide-react";

const ProjectsSection = () => {
  return (
    <div className="py-32" id="work">
      <div className="flex gap-4 flex-col sm:flex-row sm:items-center justify-between">
        <h2 className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200">
          My portfolio
        </h2>

        <Button icon={<ChevronRight />}>
          <Link href="https://github.com/virgile953" target="_blank">
            All Projects
          </Link>
        </Button>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 mt-8">
        {portfolioProjects.slice(0, 4).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
