"use client";
import {
	BriefcaseBusiness,
	House,
	UserRound,
	Contact as ContactIco,
	Wrench,
	Moon,
	Sun,
} from "lucide-react";
import {
	AnimatePresence,
	motion,
	useMotionValueEvent,
	useScroll,
} from "framer-motion";
import { Link, routing } from "@/i18n/routing";
import React from "react";
import { useState } from "react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

type navItem = {
	name: string;
	link: string;
	icon?: JSX.Element | undefined;
};
let useAnimation: boolean = true;

export const Navbar = ({
	redirectionType,
	animate,
}: {
	redirectionType?: "local" | "global";
	animate?: boolean;
}) => {
	const t = useTranslations("Navbar");
	const navItems = [
		{ name: t("Home"), link: "#home", icon: <House /> },
		{ name: t("Work"), link: "#work", icon: <BriefcaseBusiness /> },
		{ name: t("About"), link: "#about", icon: <UserRound /> },
		{ name: t("WorkingOn"), link: "#now", icon: <Wrench /> },
		{ name: t("Contact"), link: "#contact", icon: <ContactIco /> },
	];

	const { scrollYProgress } = useScroll();
	const theme = useTheme();
	const pathname = usePathname();
	const router = useRouter();
	const params = useParams();
	const currentLocale = params.locale as string;

	const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const newLocale = e.target.value;
		// Use next-intl router which preserves the current path
		router.replace(pathname, { locale: newLocale });
	};

	if (animate == false) useAnimation = false;
	else useAnimation = true;

	if (redirectionType && redirectionType === "global") {
		navItems.forEach((item) => {
			if (!item.link.startsWith("/")) item.link = "/" + item.link;
		});
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
				className="flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-dark-700 rounded-lg 
			 z-[5000] px-8 py-4 items-center justify-center space-x-4 bg-background"
			>
				{navItems.map((navItem: navItem, idx: number) => (
					<Link
						key={`link=${idx}`}
						href={navItem.link}
						className="relative text-foreground items-center flex space-x-4 hover:text-foreground/80"
					>
						<div className="block sm:hidden">{navItem.icon}</div>
						<div className="hidden sm:block font-medium">{navItem.name}</div>
					</Link>
				))}
				<AnimatedThemeToggler className="relative z-10 h-10 border border-dark-700 px-4" />

				<select
					value={currentLocale}
					onChange={handleLanguageChange}
					className="relative z-10 h-10 items-center justify-center
								rounded-md border border-dark-700
								px-2 py-0
								font-medium text-sm sm:text-base
								bg-transparent
								text-foreground transition-colors
								hover:bg-accent focus:outline-none"
				>
					{routing.locales.map((locale) => (
						<option
							key={locale}
							value={locale}
							className="bg-background text-foreground"
						>
							{locale === 'en' ? 'EN' : 'FR'}
						</option>
					))}
				</select>
			</motion.div>
		</AnimatePresence>
	);
};
