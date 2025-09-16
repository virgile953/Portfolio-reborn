"use client";

import Image from "next/image";
import ProgressBar from "./ui/ProgressBar";
import { EyeIcon } from "lucide-react";
import { motion, useInView } from "framer-motion";
import {Link} from '@/i18n/routing';
import { useRef, useState, useEffect } from "react";
import { useTheme } from "next-themes";

const TechCard = ({
	cardInfo,
}: {
	cardInfo: {
		name: string;
		description: string;
		imageUrl: string;
		bgColor: string;
		progress: number;
		link?: string;
	};
}) => {
	const { name, description, imageUrl, bgColor, progress, link } = cardInfo;
	const ref = useRef(null);
	const isVisible = useInView(ref, { once: true });
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);
	
	const [isRotating, setIsRotating] = useState(false);
	
	const handleImageClick = () => {
		setIsRotating((prev) => !prev);
	};

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: 0.25 }}
			className="flex flex-row items-center gap-6 p-4 rounded-lg border-2
				bg-background border-border hover:bg-accent hover:border-accent-foreground
				transition-colors duration-200"
		>
			<div
				className={`p-3 ${bgColor} rounded-lg flex items-center justify-center w-[80px] h-[80px]`}
			>
				<motion.div
					onClick={handleImageClick}
					animate={{
						rotate: isRotating ? 360 : 0,
					}}
					transition={{
						duration: 1,
						ease: "backInOut",
					}}
				>
					<Image
						src={imageUrl}
						width={40}
						height={40}
						alt={`${name} logo`}
						className={`object-contain ${
							mounted && imageUrl.toLowerCase().includes("nextjs") && theme === "dark" ? "invert" : ""
						} hover:scale-110 transition-transform duration-200`}
					/>
				</motion.div>
			</div>

			{/* Text and Progress Bar container */}
			<div className="space-y-2 grow">
				<h4 className="text-lg font-medium">{name}</h4>
				<p className="text-foreground text-sm">
					{description}
				</p>
				<ProgressBar
					progress={progress}
					color={bgColor}
					startAnimation={isVisible}
				/>
			</div>

			{/* link icon, if link does exist */}
			{link && (
				<Link href={link} target="_blank" rel="noopener noreferrer">
					<EyeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary hover:text-primary/80 transition-colors duration-200" />
				</Link>
			)}
		</motion.div>
	);
};

export default TechCard;
