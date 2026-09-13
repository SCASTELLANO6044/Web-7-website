# Performance verification — 13 September 2026

The supplied Vercel screenshot reports desktop P75 FCP of 2.09 s and LCP of
3.82 s over seven days. These are production field measurements; the local
Lighthouse results below are separate lab measurements, not updated Vercel data.

## Changes

- Removed the full-page loading screen and delayed homepage headline/CTA reveals.
  Initial content is visible in server HTML, including with JavaScript disabled.
- Preloaded the existing hero poster. Video/WebGL progressively replaces it
  after page load and idle time, and only after a video frame is available.
- Restored the original 1280×720, 24 fps, 120-second H.264 video byte-for-byte
  (41,476,730 bytes) at the user's request. The canvas also uses its original
  pixel-density cap of 2; video quality reductions have been reverted.
- Paused hero rendering/playback outside the viewport and in background tabs,
  while preserving rendering quality. Reduced-motion and data-saving users
  retain the poster; missing WebGL or blocked playback leaves a usable hero.
- Split decorative WebGL modules out of initial bundles. Button shine starts
  only near a mouse pointer; touch devices use the existing button styling
  with a CSS border. Desktop smooth-scroll plugins load only on eligible devices.
- Initialize the below-the-fold grid animations near the viewport. Scroll
  reveals no longer hide server-rendered content while JavaScript is loading.
- Fetch Services hover images only on interaction, using Next image resizing.
- Fixed the ESLint configuration's CommonJS compatibility bridge so the full
  project lint command can run with the installed legacy Next ESLint config.

## Desktop Lighthouse results before restoring video quality

These measurements used the compressed video and lower canvas pixel-density
cap. They have not been rerun since restoring the original video quality and
must not be treated as measurements of the current homepage.

Local production build (`next build`, `next start`), headless Microsoft Edge,
Lighthouse desktop preset with default simulated throttling, fresh page audits:

| Route | Performance | FCP | LCP | Total blocking time | CLS |
| --- | ---: | ---: | ---: | ---: | ---: |
| `/en` | 99 | 0.3 s | 0.8 s | 10 ms | 0 |
| `/en/contact` | 100 | 0.3 s | 0.5 s | 0 ms | 0 |
| `/en/services` | 100 | 0.3 s | 0.5 s | 0 ms | 0 |

All listed desktop loading metrics pass the good thresholds. Lighthouse's
blocking-time metric is a lab diagnostic; it does not establish production INP.

## Mobile and production limits

The work also improves mobile, but **all-green mobile performance is not yet
established**. Before restoring video quality, Lighthouse with actual DevTools mobile
throttling measured `/en` at performance 82, FCP/LCP approximately 2.5 s,
460 ms total blocking time, and CLS 0. Default simulated mobile audits also
identified remaining homepage LCP delay. Mobile results vary substantially with
the throttle model and should not be substituted for desktop or field results.

No deployment was performed. The Vercel dashboard can confirm improvements only
after deploying and collecting new visits. Its selected seven-day P75 view will
continue to include older visits. Keep both Analytics and Speed Insights enabled.
Local audits do not exercise Vercel's injected analytics scripts or its CDN.

## Validation

- Production build and TypeScript checks passed.
- Full-project ESLint passed with two pre-existing warnings: RippleDistortion
  effect dependencies and the anonymous export in `postcss.config.mjs`.
- Desktop/mobile browser checks passed for menu open/close, Escape, navigation,
  service hover images, contact layout, video playback and offscreen pause/resume.
- Checked server-rendered homepages in Spanish, English, Czech, and French.
- Checked visible headline/poster fallbacks with JavaScript disabled, reduced
  motion, data saving, and unavailable WebGL; no uncaught browser errors.

The implementation follows [web.dev's LCP guidance](https://web.dev/articles/optimize-lcp)
on removing render delays and [Next's Image documentation](https://nextjs.org/docs/app/api-reference/components/image)
on prioritizing the initial image and resizing secondary images.
