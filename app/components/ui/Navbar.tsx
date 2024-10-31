"use client";
import { BriefcaseBusiness,
	House,
	UserRound,
	Contact as ContactIco,
	Moon,
	Sun
	} from "lucide-react";
import { cn } from "../../lib/utils"
import {
	AnimatePresence,
	motion,
	useMotionValueEvent,
	useScroll,
} from "framer-motion";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useTheme } from "next-themes";

type navItem = {
	name: string;
	link: string;
	icon?: JSX.Element | undefined;
};

const navItems = [
	{ name: "Home", link: "#home", icon: <House /> },
	{ name: "Work", link: "#work", icon: <BriefcaseBusiness /> },
	{ name: "About", link: "#about", icon: <UserRound /> },
	{ name: "Contact", link: "#contact", icon: <ContactIco /> },
  ];

let useAnimation: boolean = true;

export const Navbar = ({redirectionType, animate} : {redirectionType?: "local" | "global", animate?: boolean}) => {
	const { scrollYProgress } = useScroll();
	const theme = useTheme();
	if (animate == false)
		useAnimation = false;
	else
		useAnimation = true;

	if (redirectionType && redirectionType === "global")
	{
		navItems.forEach(item => {
			if (!item.link.startsWith("/"))
				item.link = "/" + item.link;
		})
	}

	const [visible, setVisible] = useState(true);

	useMotionValueEvent(scrollYProgress, "change", (current) => {
		// Sanity check
		if (typeof current === "number" && useAnimation) {
			const direction = current! - scrollYProgress.getPrevious()!;

			if (scrollYProgress.get() < 0.05) {
				setVisible(true);
			} else {
				if (direction < 0) {
					setVisible(true);
				} else {
					setVisible(false);
				}
			}
		}
	});

	return (
		<AnimatePresence mode="wait">
		<motion.div
			// initial={{ opacity: 1, y: 0 }}
			initial={{
				opacity: 1,
				y: -100,
			}}
			animate={{
				y: visible ? 0 : -100,
				opacity: visible ? 1 : 0,
			}}
			transition={{
				duration: 0.2,
			}}
			className="flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-dark-700 rounded-lg bg-dark-200
			 z-[5000] px-8 py-4 items-center justify-center space-x-4"
			>
			{navItems.map((navItem: navItem, idx: number) => (
				<Link
				key={`link=${idx}`}
				href={navItem.link}
				className={cn(
					"relative text-neutral-50 items-center flex space-x-4 hover:text-neutral-300"
				)}
				>
				<span className="block sm:hidden">{navItem.icon}</span>
				<span className="hidden sm:block font-medium">{navItem.name}</span>
				</Link>

			))}
			<button className="relative z-10 inline-flex gap-2.5 h-10 items-center justify-center
								rounded-md border border-dark-700
								px-4 ml-auto
								font-medium text-sm sm:text-base
								text-slate-200 transition-colors
								hover:bg-slate-800"
				onClick={() => {
					if (theme.theme == "light")
						theme.setTheme("dark")
					else
						theme.setTheme("light")

				}}
				>
				<span className="block font-medium">{theme.theme == "light" ? <Moon /> : <Sun />}</span>
			</button>
			</motion.div>
			</AnimatePresence>
		);
	};
