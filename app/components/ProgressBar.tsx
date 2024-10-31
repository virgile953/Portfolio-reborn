"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

type ProgressBarProps = {
	progress: number;
	color: string;
};



function checkColor(color: string, theme: string): string {
	if (theme == "light")
	{
		if (color == "#FFFFFF")
			return "#999999";
		if (color == "#000000")
			return "#999999";
	}
	if (theme == "dark")
	{
		if (color == "#000000")
			return "#DFDFDF";
		if (color == "#FFFFFF")
			return "#DFDFDF";
	}
	return color;
}

const ProgressBar = ({ progress, color }: ProgressBarProps) => {
	const theme = useTheme().theme;
	const [animatedProgress, AnimateProgress] = useState(0);
	const hexMatch = color.match(/#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/);
	const cleanColor = checkColor(hexMatch ? hexMatch[0] : "#000000", theme ? theme : "dark"); // Default to black if no match is found

	useEffect(() => {
		// Start animation on mount
		const timer = setTimeout(() => AnimateProgress(progress * 10), 100);
		return () => clearTimeout(timer);
	}, [progress]);

	return (
		<div className="mt-2">
		<div className="h-4 dark:bg-dark-300 rounded-md overflow-hidden">
		<div
		className="h-full border-3 border-l-0 border-t-0 border-b-0 transition-all rounded-lg"
		style={{
			width: `${animatedProgress}%`,
			borderColor: "#FFFFFF",
			borderRightWidth: "3px",
			backgroundColor: cleanColor,
			transition: "width 1s ease", // Smooth transition effect
		}}
		/>
		{progress}
		</div>
		</div>
	);
};

export default ProgressBar;
