import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["ru", "en", "kk"];
const defaultLocale = "ru";

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if pathname starts with a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Redirect if there is no locale
  request.nextUrl.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next) and static files
    "/((?!_next|favicon.ico|.*\\..*).*)",
  ],
};
