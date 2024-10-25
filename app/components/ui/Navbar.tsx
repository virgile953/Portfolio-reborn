"use client";
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

type navItem = {
	name: string;
	link: string;
	icon?: JSX.Element | undefined;
};

export const Navbar = ({
	navItems,
	className,
}: {
	navItems: {
		name: string;
		link: string;
		icon?: JSX.Element;
	}[];
	className?: string;
}) => {
	const { scrollYProgress } = useScroll();

	const [visible, setVisible] = useState(true);

	useMotionValueEvent(scrollYProgress, "change", (current) => {
		// Sanity check
		if (typeof current === "number") {
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

			// animate={{ opacity: 1, y: 0 }}
			animate={{
			y: visible ? 0 : -100,
			opacity: visible ? 1 : 0,
			}}

			transition={{
			duration: 0.2,
			}}
			className={cn(
			`flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-dark-700 rounded-lg bg-dark-200
			 z-[5000] px-8 py-4 items-center justify-center space-x-4`, className
			)}
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
			</motion.div>
			</AnimatePresence>
		);
	};
