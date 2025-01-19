import type { NextConfig } from "next";

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

export default nextConfig;
