import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware({
	locales: routing.locales,
	defaultLocale: routing.defaultLocale,
	localePrefix: routing.localePrefix,
	localeDetection: false,
});

export const config = {
	matcher: [
		// Match all pathnames except for
		// - /api/*,
		// - /_next/*
		// - Static files
		"/((?!api|_next|_vercel|.*\\..*).*)",
	],
};
