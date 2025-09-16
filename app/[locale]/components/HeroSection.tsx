"use client";
import { ChevronRight } from "lucide-react";
import Button from "./ui/Button";
import { TextGenerateEffect } from "./ui/TextGenerate";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Tooltip } from "@nextui-org/tooltip";
import { useTranslations } from "next-intl";

const HeroSection = () => {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const t = useTranslations("Hero");

	// Ensure component is mounted before rendering theme-dependent content
	useEffect(() => {
		setMounted(true);
	}, []);

	// Don't render theme-dependent content until mounted
	if (!mounted) {
		return (
			<>
				<div
					className="flex items-center h-screen w-full bg-background bg-grid-primary-foreground
								justify-center absolute top-0 left-0"
				>
					<div
						className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background
									mask-[radial-gradient(ellipse_at_center,transparent_30%,black)]"
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
						<p className="pt-5 pb-8 text-sm sm:text-base md:text-lg text-muted-foreground">
							{t("subtitle")}
						</p>
						<div className="flex flex-col sm:flex-row items-center gap-4">
							<Button icon={<ChevronRight />} href="#work">
								{t("seeWork")}
							</Button>
							<div className="flex items-center gap-2.5 group">
								<span className="ml-8 font-semibold flex flex-row">
									{t("downloadCV")}
									<a
										className="ml-4 w-7 h-7 -translate-y-1 transition-transform duration-200 transform hover:scale-125"
										download
										href="/resume/CV_VBA-fr-dark.pdf"
									>
										<Image
											alt="FR flag"
											src="/imgs/fr.svg"
											width={24}
											height={24}
											unoptimized
										/>
									</a>
									<a
										className="ml-4 w-7 h-7 -translate-y-1 transition-transform duration-200 transform hover:scale-125"
										download
										href="/resume/CV_VBA-en-dark.pdf"
									>
										<Image
											alt="UK flag"
											src="/imgs/uk.svg"
											width={24}
											height={24}
											unoptimized
										/>
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
	return (
		<>
			<div
				className="flex items-center h-screen w-full bg-background bg-grid-primary-foreground
							justify-center absolute top-0 left-0"
			>
				<div
					className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background
								mask-[radial-gradient(ellipse_at_center,transparent_30%,black)]"
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
					<p className="pt-5 pb-8 text-sm sm:text-base md:text-lg text-muted-foreground">
						{t("subtitle")}
					</p>
					<div className="flex flex-col sm:flex-row items-center gap-4">
						<Button icon={<ChevronRight />} href="#work">
							{t("seeWork")}
						</Button>
						<div className="flex items-center gap-2.5 group">
							<span className="ml-8 font-semibold flex flex-row">
								{t("downloadCV")}
								<Tooltip
									content={t("lighterPDF")}
									showArrow={true}
									color="secondary"
									placement="bottom"
									offset={15}
								>
									<a
										className="ml-4 w-7 h-7 -translate-y-1 transition-transform duration-200 transform hover:scale-125"
										download
										href={
											theme === "light"
												? "/resume/CV_VBA-fr-light.pdf"
												: "/resume/CV_VBA-fr-dark.pdf"
										}
									>
										<Image
											alt="FR flag"
											src="/imgs/fr.svg"
											width={24}
											height={24}
											unoptimized
										/>
									</a>
								</Tooltip>
								<Tooltip
									content={t("lighterPDF")}
									showArrow={true}
									color="secondary"
									placement="bottom"
									offset={15}
								>
									<a
										className="ml-4 w-7 h-7 -translate-y-1 transition-transform duration-200 transform hover:scale-125"
										download
										href={
											theme === "light"
												? "/resume/CV_VBA-en-light.pdf"
												: "/resume/CV_VBA-en-dark.pdf"
										}
									>
										<Image
											alt="UK flag"
											src="/imgs/uk.svg"
											width={24}
											height={24}
											unoptimized
										/>
									</a>
								</Tooltip>
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroSection;
