import { NextRequest, NextResponse } from "next/server";

const LOCALIZED_LOCALES = ["en", "cs", "fr"] as const;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locale = LOCALIZED_LOCALES.find(
    (candidate) => pathname === `/${candidate}` || pathname.startsWith(`/${candidate}/`),
  );
  const requestHeaders = new Headers(request.headers);
  // Each URL always serves the same language, also without cookies or browser preferences.
  // Overwrite client-supplied values so the unprefixed Spanish site stays Spanish.
  requestHeaders.set("x-web7-locale", locale || "es");
  if (locale) {
    const rewrittenUrl = request.nextUrl.clone();
    rewrittenUrl.pathname = pathname === `/${locale}` ? "/" : pathname.slice(locale.length + 1);
    return NextResponse.rewrite(rewrittenUrl, { request: { headers: requestHeaders } });
  }
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
