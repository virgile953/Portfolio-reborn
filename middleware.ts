import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware({
  // Force default locale for all users
  defaultLocale: "en",
  locales: ["en", "fr"],
  // Disable locale detection
  localeDetection: false,
  // Don't add locale prefix for default locale
  localePrefix: "as-needed"
});

export const config = {
  matcher: [
    // Match all pathnames except for
    // - /api/*,
    // - /_next/*
    // - /*.png, /*.jpg, etc.
    '/((?!api|_next|.*\\..*).*)',
    // Match all paths that might have a locale prefix (only /fr/* in this case)
    '/(fr)/:path*'
  ]
};
