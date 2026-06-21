# La Flèche AI — Bilingual Website

**Automate today. Accelerate tomorrow.**

Production-quality bilingual (FR/EN) marketing website for **La Flèche AI**, an AI
automation company. Built with Next.js App Router, TypeScript, Tailwind CSS,
Framer Motion and Lucide icons. Dark mode by default with a light mode toggle.

🌐 Target domain: **la-fleche.ca**

---

## ✨ Features

- **Bilingual** — full French/English content with a `FR / EN` toggle (French is default). Language is remembered in `localStorage`.
- **Dark / light mode** — dark by default, toggle in the navbar (via `next-themes`).
- **9 pages** — Home, Services, Solutions, Projects (+ detail pages), Pricing, Blog, About, Contact, Book a Demo.
- **Custom branding** — hand-built SVG arrow logo (purple→blue→cyan gradient), used in navbar, footer, favicon and hero.
- **Animations** — animated hero "AI command center", scroll reveals, animated counters, gradient backgrounds, hover cards, glassmorphism panels.
- **Working forms** — Contact and Book a Demo forms submit to a Next.js API route and send email through Resend.
- **SEO** — per-page metadata, Open Graph, `sitemap.xml`, `robots.txt`, semantic HTML.
- **Responsive & accessible** — mobile menu, focus states, keyboard-friendly.

---

## 🧱 Project structure

```
La-Fleche-ai Web/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout: fonts, metadata, providers, navbar, footer
│   ├── page.tsx                  # Home page (composes the section components)
│   ├── globals.css               # Design system, CSS variables, animations
│   ├── icon.svg                  # Favicon (arrow logo)
│   ├── sitemap.ts                # Generated sitemap
│   ├── robots.ts                 # robots.txt
│   ├── not-found.tsx             # 404 page
│   ├── services/page.tsx
│   ├── solutions/page.tsx
│   ├── projects/page.tsx
│   ├── projects/[slug]/page.tsx  # Dynamic project detail pages
│   ├── pricing/page.tsx
│   ├── blog/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   └── book-demo/page.tsx
│
├── components/
│   ├── navbar.tsx, footer.tsx
│   ├── logo.tsx                  # SVG arrow logo (LogoMark + Logo)
│   ├── language-toggle.tsx, theme-toggle.tsx
│   ├── providers.tsx             # Theme + Language providers
│   ├── hero-section.tsx, hero-visual.tsx
│   ├── section-heading.tsx, page-header.tsx, reveal.tsx
│   ├── animated-counter.tsx, icon.tsx
│   ├── service-card.tsx, project-card.tsx, pricing-card.tsx, blog-card.tsx
│   ├── cta-section.tsx, contact-form.tsx
│   ├── sections/                 # Home page sections (problem, solution, pillars, results, process, featured)
│   ├── pages/                    # Per-page client content components
│   └── ui/                       # Reusable primitives (button, field)
│
├── data/                         # ✏️ EDIT CONTENT HERE
│   ├── translations.ts           # All UI strings (FR/EN)
│   ├── services.ts               # Service pillars + detailed categories
│   ├── projects.ts               # Project showcase
│   ├── solutions.ts              # Industry solutions
│   ├── pricing.ts                # Pricing tiers + one-time services
│   └── blog.ts                   # Blog article cards
│
├── lib/
│   ├── i18n.tsx                  # Language context + useLanguage() hook
│   └── utils.ts                  # cn() class helper
│
├── tailwind.config.ts            # Colors, gradients, animations
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## 🚀 Installation & run

Requires **Node.js 18.18+** (tested on Node 24).

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# → http://localhost:3000

# 3. Production build + start
npm run build
npm run start
```

---

## ✏️ How to edit content

All content lives in the **`/data`** folder — no need to touch components.

- **UI text, headlines, labels, CTAs** → `data/translations.ts`
  Every string exists twice: under `fr` and under `en`. Edit both to keep the
  site bilingual. The shape of `fr` and `en` must stay identical.

- **Services** → `data/services.ts` (`pillars` for the homepage 4-cards, `serviceCategories` for the Services page).

- **Projects** → `data/projects.ts`. Each project has a `slug` (used in the URL `/projects/<slug>`), an `icon` (any name from `components/icon.tsx`), and bilingual fields. Add a new object to the array and it appears everywhere automatically.

- **Solutions** → `data/solutions.ts` (industry blocks).

- **Pricing** → `data/pricing.ts` (`tiers` and `oneTimeServices`).

- **Blog** → `data/blog.ts` (sample article cards).

Bilingual fields use the shape `{ fr: "...", en: "..." }`. For lists:
`{ fr: ["...", "..."], en: ["...", "..."] }`.

### Adding an icon

Icons come from [lucide-react](https://lucide.dev). To use a new one, import it
in `components/icon.tsx` and add it to the `icons` map, then reference it by name
in the data files.

### Colors / theme

Brand colors, gradients and animations are defined in `tailwind.config.ts` and
`app/globals.css` (CSS variables under `:root` for light and `.dark` for dark).

---

## 🖼️ Adding real logo / brand files later

The logo is currently a **hand-built SVG** in `components/logo.tsx`
(`LogoMark`) and `app/icon.svg` (favicon). To swap in real brand assets:

1. **Favicon** — replace `app/icon.svg` (or add `app/icon.png`, `app/apple-icon.png`). Next.js picks these up automatically.
2. **Logo image** — drop your file in `public/` (e.g. `public/logo.svg`) and, in `components/logo.tsx`, replace the inline `<svg>` in `LogoMark` with `<Image src="/logo.svg" ... />` from `next/image`.
3. **Social / OG image** — add `app/opengraph-image.png` (1200×630) for link previews; Next.js wires it into metadata automatically.

---

## ☁️ Deploy to Vercel

1. Push this project to a GitHub repository:
   ```bash
   git add .
   git commit -m "La Flèche AI website"
   git branch -M main
   git remote add origin https://github.com/<you>/la-fleche-ai.git
   git push -u origin main
   ```
2. Go to **[vercel.com](https://vercel.com)** → **Add New… → Project** → import the repo.
3. Vercel auto-detects Next.js. Leave defaults (Build: `next build`, Output handled automatically). Click **Deploy**.
4. Add the required environment variables before using the contact forms:
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL`
   - `CONTACT_RECIPIENT_EMAIL`
   - Optional for durable production rate limiting: `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`

### Connect **la-fleche.ca** to Vercel

1. In your Vercel project → **Settings → Domains** → add `la-fleche.ca` (and `www.la-fleche.ca`).
2. Vercel shows the DNS records to set. At your domain registrar (where you bought la-fleche.ca), add either:
   - **A record** → `@` → `76.76.21.21`, **and** a **CNAME** → `www` → `cname.vercel-dns.com`, **or**
   - Change your domain's **nameservers** to Vercel's (shown in the dashboard) for the simplest setup.
3. Wait for DNS to propagate (minutes to a few hours). Vercel issues the SSL certificate automatically.
4. Set `la-fleche.ca` as the **primary domain** so `www` redirects to it (or vice-versa).

> The canonical URL `https://la-fleche.ca` is already set in `app/layout.tsx`,
> `app/sitemap.ts` and `app/robots.ts`. If you use a different domain, update it
> in those three files.

---

## 📇 Contact details used on the site

- **Email:** xxraphaelgirardxx@gmail.com
- **Location:** Québec, Canada
- **GitHub:** [@xxraphaelgirardxx](https://github.com/xxraphaelgirardxx)

These appear in the footer and Contact page — update them in
`components/footer.tsx` and `components/pages/contact-content.tsx` if they change.

---

## 📝 Notes

- Pricing figures are realistic starting points (CAD) and clearly marked as
  "starting at / depends on complexity".
- Result stats (80%, 24/7, 10x, 100%) are phrased as **potential** results, not
  guarantees.
- Blog articles are **sample cards** (clearly labeled) — wire them to real
  article pages or a CMS when ready.

Built with precision in Québec. 🏹
