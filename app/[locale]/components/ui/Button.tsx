"use client";
import React from "react";
import {Link} from '@/i18n/routing';

const Button = ({
	children,
	icon,
	iconPosition = "right",
	className = "",
	href = "#",
}: {
	children: React.ReactNode;
	icon?: React.ReactNode;
	iconPosition?: "left" | "right";
	className?: string;
	href: string;
}) => {
	return (
		<Link
			target={href.startsWith("http") ? "_blank": ""}
			href={href}
			passHref
			className={
				`self-start relative z-10 inline-flex gap-2.5 h-12 animate-shimmer items-center justify-center
			rounded-md border border-dark-700 bg-[linear-gradient(110deg,#1A1A1A,45%,#262626,55%,#1A1A1A)]
			hover:bg-[linear-gradient(110deg,#262626,45%,#404040,55%,#262626)] bg-size-[200%_100%] px-6 font-medium text-sm sm:text-base
			text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ` +
				className
			}
			prefetch={true}
		>
			{iconPosition === "left" && icon}
			{children}
			{iconPosition === "right" && icon}
		</Link>
	);
};

export default Button;
