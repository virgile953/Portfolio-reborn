"use client";
import { ChevronRight } from "lucide-react";
import Button from "./ui/Button";
import Link from "next/link";
import { TextGenerateEffect } from "./ui/TextGenerate";
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Tooltip } from "@nextui-org/tooltip";

const HeroSection = () => {
	const theme = useTheme();
	return (
		<>
			<div
				className="	flex items-center h-screen w-full dark:bg-dark-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.06]
							justify-center absolute top-0 left-0"
			>
				<div
					className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-dark-100 bg-white
								[mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"
				/>
			</div>

			<div
				className="pb-20 pt-40 sm:pt-20 sm:p-0 sm:min-h-screen flex flex-col items-center justify-center relative"
				id="#home"
			>
				<div className="flex flex-col justify-center items-center relative z-10 text-center">
					<div className="uppercase font-bold -mb-4 text-sm tracking-widest p-1 border rounded-md border-dark-200 dark:border-stone-200/70">
						Paris
					</div>
					<TextGenerateEffect
						words={"Advanced Development & Data Engineering Solutions"}
						className="text-[40px] md:text-6xl lg:text-7xl font-bold text-center max-w-5xl leading-snug tracking-wide"
					/>
					<p className="pt-5 pb-8 text-sm sm:text-base md:text-lg text-dark-200 dark:text-stone-200/70">
						Hi, I&apos;m Virgile, a developer focused on creating efficient,
						high-performance applications through low level development and data
						engineering.
					</p>
					<div className="flex flex-col sm:flex-row items-center gap-4">
						<Button icon={<ChevronRight />} href="#work">
							See My Work
						</Button>
						<div
							// download
							className="flex items-center gap-2.5 group"
						>
							<span className="ml-8 font-semibold flex flex-row">
								Download CV:
								{/* if theme is light theme then download light themed cv (duh) */}
								<a
	className="ml-4 w-7 h-7 -translate-y-1 transition-transform duration-200 transform hover:scale-125"
	download
	href={
		theme.theme == "light"
			? "/resume/CV_VBA-fr-light.pdf"
			: "/resume/CV_VBA-fr-dark.pdf"
	}
>
	{/* Apparently, some RH print PDFs but are, for ecological reasons, preferring PDFs that aren't all black */}
	{theme.theme === "dark" ? (
		<Tooltip
			content="for lighter-colored PDF, use light mode"
			showArrow={true}
			color="secondary"
			placement="bottom"
			offset={15}
		>
			<Image
				alt="FR flag"
				src="/imgs/fr.svg"
				width={24}
				height={24}
			/>
		</Tooltip>
	) : (
		<Image
			alt="FR flag"
			src="/imgs/fr.svg"
			width={24}
			height={24}
		/>
	)}
</a>
<a
	className="ml-4 w-7 h-7 -translate-y-1 transition-transform duration-200 transform hover:scale-125"
	download
	href={
		theme.theme == "light"
			? "/resume/CV_VBA-en-light.pdf"
			: "/resume/CV_VBA-en-dark.pdf"
	}
>
	{theme.theme === "dark" ? (
		<Tooltip
			content="for lighter-colored PDF, use light mode"
			showArrow={true}
			color="secondary"
			placement="bottom"
			offset={15}
		>
			<Image
				alt="UK flag"
				src="/imgs/uk.svg"
				width={24}
				height={24}
			/>
		</Tooltip>
	) : (
		<Image
			alt="UK flag"
			src="/imgs/uk.svg"
			width={24}
			height={24}
		/>
	)}
</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroSection;
