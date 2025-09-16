const TechStack = ({ techStack }: { techStack: string[] }) => {
	return (
		<div className="flex flex-wrap items-center gap-2.5 ">
			{techStack.map((tech) => (
				<p
					key={tech}
					className="text-xs text-muted font-medium
			 								bg-accent-foreground hover:bg-accent-foreground/80 
											border border-border transition-colors duration-200 w-fit rounded-md py-2 px-4"
				>
					{tech}
				</p>
			))}
		</div>
	);
};

export default TechStack;
