"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

type ProgressBarProps = {
	progress: number;
	color: string;
	startAnimation: boolean;
};

function checkColor(color: string, theme: string): string {
	if (theme == "light") {
		if (color == "#FFFFFF") return "#999999";
		if (color == "#000000") return "#999999";
	}
	if (theme == "dark") {
		if (color == "#000000") return "#DFDFDF";
		if (color == "#FFFFFF") return "#DFDFDF";
	}
	return color;
}

const ProgressBar = ({ progress, color, startAnimation }: ProgressBarProps) => {
	const theme = useTheme().theme;
	const [animatedProgress, setAnimatedProgress] = useState(0);
	const hexMatch = color.match(/#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/);
	const cleanColor = checkColor(hexMatch ? hexMatch[0] : "#000000", theme || "dark");

	useEffect(() => {
		if (startAnimation) {
			const timer = setTimeout(() => setAnimatedProgress(progress * 10), 500);
			return () => clearTimeout(timer);
		}
	}, [startAnimation, progress]);

	return (
		<div className="mt-2">
			<div className="h-4 bg-gray-200 dark:bg-dark-300 rounded-md overflow-hidden">
				<div
					className="h-full border-3 border-l-0 border-t-0 border-b-0 transition-all rounded-lg"
					style={{
						width: `${animatedProgress}%`,
						borderColor: "#FFFFFF",
						borderRightWidth: "3px",
						backgroundColor: cleanColor,
						transition: "width 1s ease",
					}}
				/>
			</div>
		</div>
	);
};

export default ProgressBar;
