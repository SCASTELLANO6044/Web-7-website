# Web7 Studio

A polished marketing website for Web7, a digital studio based in the Canary Islands. The project is built with Next.js and showcases the studio’s services, portfolio, story, and contact experience.

## Overview

This site includes:
- A home page with animated sections and strong visual storytelling
- Dedicated pages for About, Services, Portfolio, and Contact
- Dynamic portfolio detail pages
- A contact form API that sends submissions through Resend when configured

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion, GSAP, and Lucide React

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create your environment file:
   ```bash
   cp .env.example .env.local
   ```
3. Fill in the required environment variables.
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open http://localhost:3000 in your browser.

## Environment Variables

The app uses the following variables:

- `RESEND_API_KEY` — API key for sending contact form emails via Resend
- `CONTACT_TO_EMAIL` — the email address that receives project inquiries

A sample file is available at [.env.example](.env.example).

## Available Scripts

- `npm run dev` — start the development server
- `npm run build` — create a production build
- `npm run start` — run the production build locally
- `npm run lint` — run ESLint across the project

## Project Structure

- `app/` — route pages, layouts, and API handlers
- `components/` — reusable UI and animation components
- `lib/` — shared data such as portfolio and service content
- `public/` — static assets and reference files

## Contact Form

The contact form endpoint lives in [app/api/contact/route.ts](app/api/contact/route.ts). It validates submissions and sends them through Resend when a valid API key is configured.

## Deploying the contact form on Vercel

Vercel automatically deploys the contact API with this Next.js application; no extra server or Vercel configuration file is required. Before the first production deployment:

1. In Resend, add and verify the domain you purchased for this website. Add the DNS records Resend gives you at the domain's DNS provider and wait until its status is **Verified**.
2. Create a Resend API key with **Sending access**. Copy it once; Resend will not show it again.
3. In **Vercel → Project → Settings → Environment Variables**, add `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` for the **Production** environment. Use the verified-domain sender for `CONTACT_FROM_EMAIL`, for example `Web7 <contact@yourdomain.com>`.
4. Redeploy the production site after saving the variables. Then submit a real test message and use Reply in the received email to confirm it goes to the visitor's address.

`RESEND_API_KEY` is deliberately server-only and must never be named with the `NEXT_PUBLIC_` prefix or added to Git. If delivery fails after deployment, check the Vercel function logs for the `/api/contact` request and the Resend activity log for the provider response.
