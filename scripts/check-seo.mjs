import assert from "node:assert/strict";

// Run against next start for deployment-like checks, or next dev while editing.
const base = process.env.SEO_TEST_URL || "http://localhost:3000";
const origin = process.env.SITE_URL || "https://web7devs.com";
const locales = ["es", "en", "cs", "fr"];
const decode = (value) => value.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;/g, "'");
const attributes = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, name, value]) => [name.toLowerCase(), decode(value)]));
async function get(path, headers = {}) {
  const response = await fetch(new URL(path, base), { redirect: "manual", headers, signal: AbortSignal.timeout(30000) });
  return { response, body: await response.text() };
}
const { response: sitemapResponse, body: xml } = await get("/sitemap.xml");
assert.equal(sitemapResponse.status, 200);
const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((match) => match[1]);
assert.ok(entries.length >= 56, "Sitemap must cover core pages, projects and markets in four languages");
const urls = entries.map((entry) => decode(entry.match(/<loc>(.*?)<\/loc>/)[1]));
assert.equal(new Set(urls).size, urls.length, "Duplicate sitemap URLs");

for (const entry of entries) {
  const url = decode(entry.match(/<loc>(.*?)<\/loc>/)[1]);
  assert.equal(new URL(url).origin, new URL(origin).origin, "Unexpected canonical domain");
  const path = new URL(url).pathname;
  const locale = path.match(/^\/(en|cs|fr)(?:\/|$)/)?.[1] || "es";
  const { response, body } = await get(path, { "user-agent": "Googlebot" });
  assert.equal(response.status, 200, `${path}: status/redirect`);
  assert.ok(body.includes(`<html lang="${locale}"`), `${path}: incorrect language`);
  const links = [...body.matchAll(/<link\b[^>]*>/g)].map(([tag]) => attributes(tag));
  const metas = [...body.matchAll(/<meta\b[^>]*>/g)].map(([tag]) => attributes(tag));
  assert.equal(new URL(links.find((link) => link.rel === "canonical")?.href).href, new URL(url).href, `${path}: canonical`);
  const alternates = links.filter((link) => link.rel === "alternate" && link.hreflang);
  assert.equal(alternates.length, 5, `${path}: language alternatives`);
  const basePath = path.replace(/^\/(en|cs|fr)(?=\/|$)/, "") || "/";
  for (const language of [...locales, "x-default"]) {
    const expectedPath = ["es", "x-default"].includes(language) ? basePath : `/${language}${basePath === "/" ? "" : basePath}`;
    const expected = `${origin}${expectedPath}`;
    assert.equal(new URL(alternates.find((link) => link.hreflang === language)?.href).href, new URL(expected).href, `${path}: ${language} alternate`);
    assert.ok(entry.includes(`hreflang="${language}" href="${expected}"`), `${path}: sitemap alternate`);
    assert.ok(urls.includes(expected), `${path}: alternate missing from sitemap`);
  }
  assert.ok(body.match(/<title>[^<]*Web7<\/title>/), `${path}: branded title`);
  assert.equal((body.match(/<h1\b/g) || []).length, 1, `${path}: primary heading`);
  assert.ok(metas.find((meta) => meta.name === "description")?.content.length > 40, `${path}: description`);
  assert.ok(!metas.some((meta) => meta.name === "robots" && meta.content.includes("noindex")), `${path}: noindex`);
  assert.equal(new URL(metas.find((meta) => meta.property === "og:url")?.content).href, new URL(url).href, `${path}: social URL`);
  assert.equal(metas.find((meta) => meta.name === "twitter:card")?.content, "summary_large_image");
  const graphs = [...body.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(([, json]) => JSON.parse(json));
  assert.ok(graphs.some((graph) => graph["@graph"].some((node) => node["@type"] === "Organization")), `${path}: business schema`);
  if (path.includes("/web-design/")) {
    assert.ok(graphs.some((graph) => graph["@graph"].some((node) => node["@type"] === "BreadcrumbList")), `${path}: breadcrumbs`);
  }
}

// Browser preferences, old language cookies and client headers cannot change a URL's language.
for (const path of ["/", "/services", "/cs/web-design/prague", "/en", "/fr/contact"]) {
  const locale = path.match(/^\/(en|cs|fr)(?:\/|$)/)?.[1] || "es";
  const { response, body } = await get(path, { "accept-language": "en-US", cookie: "web7_locale=en", "x-web7-locale": "fr" });
  assert.equal(response.status, 200, `${path}: preference redirect`);
  assert.ok(body.includes(`<html lang="${locale}"`), `${path}: unstable language`);
}
const { body: tracked } = await get("/cs/web-design/prague?utm_source=test");
assert.ok(tracked.includes(`rel="canonical" href="${origin}/cs/web-design/prague"`), "Tracking query in canonical");
for (const path of ["/web-design/unknown", "/cs/web-design/unknown", "/portfolio/unknown"]) {
  const { response, body } = await get(path, { "user-agent": "Googlebot" });
  assert.equal(response.status, 404, `${path}: missing page status`);
  assert.ok(body.includes('content="noindex"'), `${path}: missing page index control`);
}
const { response: robotsResponse, body: robots } = await get("/robots.txt");
assert.equal(robotsResponse.status, 200);
assert.ok(robots.includes("User-Agent: *") && robots.includes("Allow: /"));
assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
const image = await fetch(new URL("/opengraph-image", base));
assert.equal(image.status, 200);
assert.ok(image.headers.get("content-type").includes("image/png"));
console.log(`SEO checks passed: ${urls.length} pages, language stability, canonical/hreflang links, structured data, robots, social image and 404s.`);
