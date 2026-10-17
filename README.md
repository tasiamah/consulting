# A & H Consulting Group website

Corporate website for A & H Consulting Group LLC, replacing the previous Shopify
site. Built with Next.js and deployed on Vercel.

> **Before going live, work through [`CONTENT-CHECKLIST.md`](./CONTENT-CHECKLIST.md).**
> Team members, case studies, and company statistics are currently placeholder
> data and must be replaced with verifiable facts.

## Stack

| Concern   | Choice                              |
| --------- | ----------------------------------- |
| Framework | Next.js 16 (App Router, React 19)   |
| Styling   | Tailwind CSS v4                     |
| Language  | TypeScript (strict)                 |
| Fonts     | Inter + Source Serif 4, self-hosted |
| Email     | Resend HTTP API (no SDK dependency) |
| Hosting   | Vercel                              |

There are no runtime dependencies beyond Next, React, and React DOM. Every page
except the contact API is statically prerendered.

## Local development

```bash
npm install
cp .env.example .env.local   # optional, only needed for the contact form
npm run dev                  # http://localhost:3000
```

```bash
npm run build   # production build + typecheck
npm run start   # serve the production build
npm run lint    # eslint
```

## Project structure

```
src/
  app/
    page.tsx                  Home
    about/                    Company story, leadership, offices, corporate info
    services/                 Practice area index
    services/[slug]/          Six service detail pages
    industries/               Six sectors served
    approach/                 Five-phase delivery methodology
    case-studies/             Engagement index
    case-studies/[slug]/      Engagement detail pages
    careers/                  Open roles and hiring process
    contact/                  Enquiry form and office details
    faq/                      Client and procurement FAQ
    legal/                    Privacy, terms, cookie policy
    api/contact/              Enquiry handler (validation, throttling, email)
    sitemap.ts robots.ts      SEO
    icon.tsx                  Favicon (generated)
    opengraph-image.tsx       Social share card (generated)
  components/                 Header, footer, hero, CTA, form, primitives
  content/                    All editable copy and company data
```

### Editing content

Everything a non-developer would want to change lives in `src/content/`. No JSX
edits are needed to update copy.

| File              | Contains                                               |
| ----------------- | ------------------------------------------------------ |
| `company.ts`      | Legal name, offices, email, registration, stats        |
| `team.ts`         | Leadership and staff                                   |
| `services.ts`     | Six practice areas, capabilities, deliverables         |
| `industries.ts`   | Sectors and the problems addressed in each             |
| `case-studies.ts` | Client engagements                                     |
| `approach.ts`     | Delivery phases and firm principles                    |
| `faqs.ts`         | FAQ, grouped by theme                                  |
| `careers.ts`      | Open roles and benefits                                |
| `navigation.ts`   | Header and footer menus (derived from the files above) |

Registration identifiers in `company.ts` are typed as optional and are hidden
sitewide when unset, so partial data never renders as a blank field.

## Contact form

`POST /api/contact` validates input, rejects honeypot submissions, throttles to
four enquiries per IP per ten minutes, and sends the message through Resend.

Without `RESEND_API_KEY` the endpoint returns `503` with a message directing the
visitor to email directly, so enquiries are never silently dropped.

Set these in Vercel → Settings → Environment Variables:

| Variable         | Example                                              |
| ---------------- | ---------------------------------------------------- |
| `RESEND_API_KEY` | `re_...`                                             |
| `CONTACT_INBOX`  | `info@aandhconsultinggroup.com`                      |
| `CONTACT_FROM`   | `Website Enquiry <website@aandhconsultinggroup.com>` |

`CONTACT_FROM` must use a domain verified in Resend.

## Deployment

Pushes to `main` deploy to production automatically once the repository is
connected to Vercel. Pull requests get preview deployments.

### Cutting over from Shopify

1. Deploy to Vercel and confirm the preview URL renders correctly.
2. Complete `CONTENT-CHECKLIST.md`.
3. Add `aandhconsultinggroup.com` and `www.aandhconsultinggroup.com` in
   Vercel → Settings → Domains.
4. Update the DNS records at the registrar to the values Vercel provides.
5. Remove the Shopify domain connection once DNS has propagated.
6. Submit `https://aandhconsultinggroup.com/sitemap.xml` in Google Search
   Console.

The old Shopify site exposed `/pages/about-us`, `/pages/contact`, and
`/pages/faqs`. If those URLs have inbound links worth preserving, add redirects
to `next.config.ts`:

```ts
async redirects() {
  return [
    { source: "/pages/about-us", destination: "/about", permanent: true },
    { source: "/pages/contact", destination: "/contact", permanent: true },
    { source: "/pages/faqs", destination: "/faq", permanent: true },
  ];
}
```

## Accessibility and SEO

- Skip-to-content link, semantic landmarks, and labelled form controls
- Keyboard-operable navigation with visible focus states and Escape handling
- `prefers-reduced-motion` honoured
- Per-page canonical URLs, titles, and descriptions
- JSON-LD: `ProfessionalService` sitewide, `Service` per practice area,
  `FAQPage` on the FAQ
- Generated sitemap, robots, favicon, and Open Graph image
