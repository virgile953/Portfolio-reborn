import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
	experimental: {
		optimizeCss: true,
	},
	compiler: {
		removeConsole: process.env.NODE_ENV === "production",
	},
	staticPageGenerationTimeout: 100,
	images: {
		minimumCacheTTL: 60,
	},
};

export default withNextIntl(nextConfig);
