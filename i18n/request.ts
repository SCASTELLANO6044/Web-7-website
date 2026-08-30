import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";

export default getRequestConfig(async () => {
  const locale = (await headers()).get("x-web7-locale") === "en" ? "en" : "es";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
