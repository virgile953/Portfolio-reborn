"use client";
import { Tooltip } from "@nextui-org/tooltip";
import Link from "next/link";
import React from "react";
import { portfolioProjects } from "../lib/constants";
import Image from "next/image";
import { AtSign, CornerDownRight, MapPin, Phone } from "lucide-react";

const handleClick = () => {
	const body = document.body;
	body.classList.add("rotate-animation");
	setTimeout(() => {
		body.classList.remove("rotate-animation");
	}, 4000);
};

const Footer = () => {
	return (
		<>
			<div
				className="flex flex-col justify-center antialiased relative border border-dark-200 rounded-lg mb-5"
				id="contact"
			>
				<div className="flex justify-between">
					<ul className="space-y-2.5 relative z-10 text-sm sm:text-base p-6 ">
						<li className="text-base sm:text-lg font-semibold">Concact</li>
						<li className="text-dark-200/75 hover:text-dark-200 dark:text-white/50 dark:hover:text-white flex items-center gap-1">
							<AtSign />
							<a href="mailto:Virgile.barbera@gmail.com" target="_blank">
								<span>virgile.barbera@gmail.com</span>
							</a>
						</li>
						<li className="text-dark-200/75 hover:text-dark-200 dark:text-white/50 dark:hover:text-white flex items-center gap-1">
							<Phone />{" "}
							<a href="tel:+33695239433" target="_blank">
								{"(+33 ) 6 95 23 94 33"}
							</a>
						</li>{" "}
						<li className="text-dark-200/75 hover:text-dark-200 dark:text-white/50 dark:hover:text-white flex items-center gap-1">
							<MapPin />
							<span>
								15 rue d&apos;Ermont, <br />
								95320 St-Leu-La-For&ecirc;t,
								<br />
								Val d&apos;Oise{" "}
							</span>
						</li>
					</ul>

					<ul className="hidden sm:block space-y-2.5 relative z-10 text-sm sm:text-base p-6">
						<li className="text-lg font-semibold">Projects</li>
						{portfolioProjects.slice(0, 4).map((project, key) => (
							<li
								key={key}
								className="text-dark-200/75 hover:text-dark-200 dark:text-white/50 dark:hover:text-white flex items-center gap-1"
							>
								<Link
									key={key}
									href={"/projects/" + project.id}
									target="_blank"
								>
									{project.heading}
								</Link>
							</li>
						))}
						<li className="text-dark-200/75 hover:text-dark-200 dark:text-white/50 dark:hover:text-white flex items-center gap-1">
							<Link href="/projects" className="flex items-center gap-1">
								<CornerDownRight />
								See all
							</Link>
						</li>
					</ul>

					<ul className="space-y-2.5 relative z-10 text-sm sm:text-base p-6 flex flex-col">
						<li className="text-lg font-semibold">Socials</li>
						<li className="text-dark-200/75 hover:text-dark-200 dark:text-white/50 dark:hover:text-white flex items-center gap-1">
							<Link
								href="https://www.linkedin.com/in/virgile-barbera/"
								target="_blank"
							>
								<Tooltip
									content="LinkedIn"
									showArrow={true}
									color="secondary"
									placement="left"
								>
									<Image
										width={40}
										height={40}
										src={"/imgs/footer/linkedin.svg"}
										alt="github"
										className="dark:invert"
									></Image>
								</Tooltip>
							</Link>
						</li>
						<li className="text-dark-200/75 hover:text-dark-200 dark:text-white/50 dark:hover:text-white flex items-center gap-1">
							<Link href="https://github.com/virgile953" target="_blank">
								<Tooltip
									content="GitHub"
									showArrow={true}
									color="secondary"
									placement="left"
								>
									<Image
										width={40}
										height={40}
										src={"/imgs/footer/github.svg"}
										alt="github"
										className="dark:invert"
									></Image>
								</Tooltip>
							</Link>
						</li>
						<li className="text-dark-200/75 hover:text-dark-200 dark:text-white/50 dark:hover:text-white flex items-center gap-1">
							<Link
								href="https://www.instagram.com/virgilebarbera/"
								target="_blank"
							>
								<Tooltip
									content="Instagram"
									showArrow={true}
									color="secondary"
									placement="left"
								>
									<Image
										width={40}
										height={40}
										src={"/imgs/footer/instagram.svg"}
										alt="github"
										className="dark:invert"
										about="coucou"
									></Image>
								</Tooltip>
							</Link>
						</li>
					</ul>
				</div>
				<footer className="py-6 text-center text-dark-200 dark:text-stone-200">
					&copy; {new Date().getFullYear()} Virgile Barbera
					<br /> All rights{" "}
					<button onClick={handleClick} className="cursor-default">
						reserved
					</button>
					.
				</footer>
			</div>
		</>
	);
};

export default Footer;
