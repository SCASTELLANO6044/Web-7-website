# Search visibility for Web7

Production origin: https://web7devs.com. The team has two developers, one based in Prague and one in the Canary Islands. Spain is also a service area. No street address, public office, opening hours, rating or additional customer result has been inferred.

## Implemented

- Stable Spanish URLs without a language prefix, plus `/en`, `/cs` and `/fr`. The URL determines the language, regardless of browser preferences or previous language cookies. The header language link preserves the current page.
- Page-specific titles, descriptions, canonical URLs, social previews and reciprocal language alternatives, including a Spanish `x-default`.
- `/sitemap.xml` includes all core pages, portfolio projects and regional pages in every supported language. It deliberately omits invented modification dates.
- `/robots.txt` allows public pages and assets to be crawled and points to the sitemap. Contact API URLs are excluded. Hosting access controls must also allow search crawlers.
- Organization, Website and Service structured data describe the business and its actual service areas. Regional pages also include breadcrumbs. FAQs remain visible page content; no FAQ rich-result eligibility is claimed.
- Three regional pages, translated into all four existing languages, explain audience needs, scope, collaboration, pricing factors and the project process. Homepage, services and footer links make them discoverable.

Primary regional entry points:

| Audience | Page |
| --- | --- |
| Canary Islands, Spanish | `/web-design/canarias` |
| Prague, Czech | `/cs/web-design/prague` |
| Spain, Spanish | `/web-design/spain` |
| International clients in Prague | `/en/web-design/prague` |

The canonical origin defaults to the confirmed public domain. Set `SITE_URL` only if the production origin changes; use an origin without a path or query. Do not set it to a preview deployment. Optional `GOOGLE_SITE_VERIFICATION` accepts only the content value of a Google Search Console verification tag.

## Release and verification

1. Run `npm run build` and `npm run lint`.
2. Start the production build with `npm run start -- --hostname localhost` and run `npm run test:seo`. The check fetches rendered HTML for all sitemap entries, checks language stability with conflicting cookies/headers, validates canonical and alternate links, parses structured data, and checks social previews, robots and missing-page responses.
3. For a different preview port, set `SEO_TEST_URL`, for example `http://localhost:3001`. Bind the server to `localhost` too: this Next.js version normalizes loopback rewrite URLs to localhost, so binding to `127.0.0.1` can cause a second request and reset the locale.
4. Deploy through the normal hosting workflow. Keep preview deployments out of search using the host's preview indexing protection.
5. Verify ownership of `web7devs.com` in Google Search Console. Domain verification requires the owner’s DNS access; URL-prefix verification can use the optional environment variable and a redeployment.
6. Submit `https://web7devs.com/sitemap.xml`. Inspect the three primary regional URLs and request indexing. Check the rendered HTML, language and selected canonical after Google recrawls them.
7. Validate the public pages with Google's Rich Results Test and Schema.org Validator. Check mobile performance with PageSpeed Insights. Record the results against the deployed commit.

## Work outside this repository

- Review eligibility for Google Business Profile before creating or updating a listing. Use accurate business details and locations; a developer living in a city does not automatically establish an eligible public office. See [Google's eligibility guidance](https://support.google.com/business/answer/3038177).
- Keep the same business name, website and contact details across genuine business profiles. Ask real clients for honest reviews, without incentives or invented ratings.
- Expand published case studies with client-approved context, scope and measured results when available. Keep concept projects clearly labelled. Good Meals is currently linked as published work; the regional pages do not invent Prague clients or quantitative outcomes.
- Pursue relevant local relationships and editorial mentions through actual work. Avoid purchased links and mass-produced city pages.
- Record a Search Console baseline at deployment. Review indexing, impressions, clicks and enquiries by page and country after four weeks and again after eight to twelve weeks. Useful query groups include “diseño web Canarias”, “desarrollo web Canarias”, “tvorba webových stránek Praha”, “webdesign Praha” and “diseño web España”. These are targeting ideas, not measured search-volume or ranking claims.

## AI search approach

Google says its AI search features use the same foundational SEO requirements: crawlable, indexable pages, helpful visible text, internal links and structured data that matches the content. It does not require special AI files or special AI schema. These changes make the business easier to discover and understand; they do not guarantee rankings or AI citations. See [Google's AI features guidance](https://developers.google.com/search/docs/appearance/ai-features) and [multilingual site guidance](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites).

Maintain new translations in `lib/market-content.ts` and page metadata in `messages/*.json`. Keep the market list in `lib/site.ts`, links and sitemap in agreement. Rerun the SEO check after adding or removing public routes.
