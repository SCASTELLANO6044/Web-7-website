import { NextRequest, NextResponse } from "next/server";

const LOCALE_COOKIE = "web7_locale";
const LOCALIZED_LOCALES = ["en", "cs"] as const;

function preferredLocale(request: NextRequest) {
  const preference = request.cookies.get(LOCALE_COOKIE)?.value;
  if (preference === "es" || preference === "en" || preference === "cs") return preference;

  const language = request.headers.get("accept-language")?.toLowerCase() ?? "";
  if (language.startsWith("es") || language.includes(",es")) return "es";
  if (language.startsWith("cs") || language.includes(",cs")) return "cs";
  return "en";
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const locale = LOCALIZED_LOCALES.find(
    (candidate) => pathname === `/${candidate}` || pathname.startsWith(`/${candidate}/`),
  );

  if (locale) {
    const rewrittenUrl = request.nextUrl.clone();
    rewrittenUrl.pathname = pathname === `/${locale}` ? "/" : pathname.slice(locale.length + 1);
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-web7-locale", locale);
    return NextResponse.rewrite(rewrittenUrl, { request: { headers: requestHeaders } });
  }

  const preferred = preferredLocale(request);
  if (preferred !== "es") {
    const localizedUrl = request.nextUrl.clone();
    localizedUrl.pathname = pathname === "/" ? `/${preferred}` : `/${preferred}${pathname}`;
    return NextResponse.redirect(localizedUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
