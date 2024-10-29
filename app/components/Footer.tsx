import {Tooltip} from "@nextui-org/tooltip";
import Link from "next/link";
import React from "react";
import { portfolioProjects } from "../lib/constants";
import Image from "next/image";


const words = "Advanced Development & Data Engineering Solutions";

const Footer = () => {
	return (
		<>
	<div
	className="flex flex-col justify-center antialiased relative border border-dark-200 rounded-lg mb-5"
	id="contact">

		<div className="flex justify-between gap-0 sm:gap-16">
			<ul className="space-y-2.5 relative z-10 text-sm sm:text-base p-6">
			  <li className="text-base sm:text-lg font-semibold">Navigate</li>
			  <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
				<Link href="#Home">Home</Link>
			  </li>
			  <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
				<Link href="#work">Work</Link>
			  </li>
			  <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
				<Link href="#about">About</Link>
			  </li>
			  <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
				<Link href="#contact">Contact</Link>
			  </li>
			</ul>


			<ul className="space-y-2.5 relative z-10 text-sm sm:text-base p-6">
			  <li className="text-lg font-semibold">Projects</li>
				{portfolioProjects.slice(0, 4).map((project) => (
		  	 <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
				<Link
					href={"/projects/" + project.id}
					target="_blank"
				>
					{project.heading}
				</Link>
				</li>
				))}

			</ul>

			<ul className="space-y-2.5 relative z-10 text-sm sm:text-base p-6 flex flex-col">
			  <li className="text-lg font-semibold">Socials</li>
			  <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
				<Link
				  href="https://www.linkedin.com/in/virgile-barbera/"
				  target="_blank"
				>
					<Tooltip content="LinkedIn" showArrow={true} color="secondary" placement="left">
				  <Image width={40} height={40} src={"/imgs/footer/linkedin.svg"} alt="github" className="dark:invert" ></Image>
					</Tooltip>
				</Link>
			  </li>
			<li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
				<Link href="https://github.com/virgile953" target="_blank">
				<Tooltip content="GitHub" showArrow={true} color="secondary" placement="left">
						<Image width={40} height={40} src={"/imgs/footer/github.svg"} alt="github" className="dark:invert" ></Image>
					</Tooltip>
				</Link>
			</li>
			<li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
				<Link href="https://www.instagram.com/virgilebarbera/" target="_blank">
					<Tooltip content="Instagram" showArrow={true} color="secondary" placement="left">
						<Image width={40} height={40} src={"/imgs/footer/instagram.svg"} alt="github" className="dark:invert" about="coucou" ></Image>
					</Tooltip>
				</Link>
			  </li>
			</ul>
			</div>
			<footer className="py-6 text-center text-dark-200 dark:text-stone-200">
				&copy; {new Date().getFullYear()} Virgile Barbera
					<br/> All rights reserved.
    </footer>
		</div>
		</>
	);
};

export default Footer;
