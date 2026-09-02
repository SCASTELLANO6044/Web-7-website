import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";

export default getRequestConfig(async () => {
  const requestedLocale = (await headers()).get("x-web7-locale");
  const locale = requestedLocale === "en" || requestedLocale === "cs" ? requestedLocale : "es";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
