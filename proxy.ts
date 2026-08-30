import { NextRequest, NextResponse } from "next/server";

const LOCALE_COOKIE = "web7_locale";

function prefersEnglish(request: NextRequest) {
  const preference = request.cookies.get(LOCALE_COOKIE)?.value;
  if (preference) return preference === "en";

  const language = request.headers.get("accept-language")?.toLowerCase() ?? "";
  return language.startsWith("en") || language.includes(",en");
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const rewrittenUrl = request.nextUrl.clone();
    rewrittenUrl.pathname = pathname === "/en" ? "/" : pathname.slice(3);
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-web7-locale", "en");
    return NextResponse.rewrite(rewrittenUrl, { request: { headers: requestHeaders } });
  }

  if (prefersEnglish(request)) {
    const englishUrl = request.nextUrl.clone();
    englishUrl.pathname = pathname === "/" ? "/en" : `/en${pathname}`;
    return NextResponse.redirect(englishUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
