"use strict";

import "../globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { ThemeProvider } from "./components/ui/ThemeProvider";
import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Portfolio",
	description: "Rework of my portfolio website",
};

export async function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const resolvedParams = await params;

	if (!routing.locales.includes(resolvedParams.locale as "en" | "fr")) {
		notFound();
	}
	const messages = await getMessages();

	return (
		<html lang={resolvedParams.locale} suppressHydrationWarning>
			<body
				suppressHydrationWarning
				className={raleway.className}
			>
				<div className="min-h-screen bg-background text-foreground antialiased">
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						enableSystem
						disableTransitionOnChange
					>
						<NextIntlClientProvider messages={messages}>
							{children}
						</NextIntlClientProvider>
					</ThemeProvider>

				</div>
				<Analytics />
			</body>
		</html >
	);
}
