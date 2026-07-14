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
