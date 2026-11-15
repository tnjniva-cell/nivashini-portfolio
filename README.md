# Nivashini A — Portfolio

A responsive developer portfolio built with Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

## Requirements

- Node.js 18.17 or newer
- npm
- A [Resend](https://resend.com/) account/API key to deliver contact-form messages

## Run locally

```bash
npm install
Copy-Item .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Add your Resend API key and verified sender address to `.env.local` before testing contact-form delivery.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Secret API key from Resend. Keep it server-side; never add it to client code. |
| `RESEND_FROM_EMAIL` | Sender address accepted by Resend. Verify the sending domain in Resend for production. |
| `CONTACT_EMAIL` | Inbox that receives portfolio messages (defaults in `.env.example` to `tnjniva@gmail.com`). |

The contact API route validates submissions and reports a service-unavailable response when mail configuration is missing. Do not commit `.env.local`.

## Edit portfolio content

- `data/skills.ts` — skill names, descriptions, categories, and icons.
- `data/projects.ts` — project details, technologies, statuses, and optional verified source/demo links.
- `data/education.ts` — degree and currently learning items.
- `app/page.tsx` — about copy, social links, and page composition.

Project links are intentionally omitted until real repository or demo URLs are available.

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

The requested Next.js 14 line currently has npm audit advisories. npm's automatic remediation requires a major Next.js upgrade, so this project stays on Next.js 14 to match the requested stack; review and upgrade before public production deployment.

## Deploy to Vercel

1. Push this repository to GitHub and import `tnjniva-cell/nivashini-portfolio` in [Vercel](https://vercel.com/new).
2. Keep the framework preset set to **Next.js** and the default build command (`next build`).
3. In the Vercel project settings, add `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `CONTACT_EMAIL` for the production environment (and preview environments if desired).
4. Deploy. Verify the generated Vercel URL and test the contact form after configuring a Resend-verified sender domain.

No live deployment URL is configured or claimed by this repository.
