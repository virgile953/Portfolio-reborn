"use client";

import {
	AnimatePresence,
	motion,
	useMotionValueEvent,
	useScroll,
} from "framer-motion";
import React, { useState } from "react";
import { CircleArrowUp } from "lucide-react";
let useAnimation = true;

export const BackToTop = ({ animate }: { animate?: boolean }) => {
	const { scrollYProgress } = useScroll();
	useAnimation = animate !== false;

	const [visible, setVisible] = useState(false);

	useMotionValueEvent(scrollYProgress, "change", (current) => {
		if (typeof current === "number" && useAnimation) {
			const direction = current - scrollYProgress.getPrevious()!;
			if (scrollYProgress.get() < 0.7) {
				setVisible(false);
			} else {
				setVisible(direction > 0);
			}
		}
	});

	return (
		<AnimatePresence mode="wait">
			{visible && (
			<motion.button
				initial={{
					y: 100,
					opacity: 0,
				}}
				animate={{
					y: visible ? 0 : 100,
					opacity: visible ? 1 : 0,
				}}
				exit={{
					y: 100,
					opacity: 0, // Exit animation for smooth disappearing
				}}
				transition={{
					duration: 0.2,
				}}
				className="fixed bottom-10 right-10 z-5000 rounded-md justify-center gap-2.5  px-2 py-2 border-2 transition-colors
						border-dark-200 	 bg-white		hover:bg-gray-100
						dark:border-gray-100 dark:bg-black	dark:hover:bg-slate-800"
				onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				>
					<CircleArrowUp className="h-8 w-8 text-dark-200 dark:text-white"/>
				</motion.button>
			)}
		</AnimatePresence>
	);
};
