# LuxeVoyage Kenya

A premium luxury travel website showcasing high-end African destinations, hotels and curated experiences.

**Live Demo:** [https://luxe-voyage-pi.vercel.app](https://luxe-voyage-pi.vercel.app)

---

## Pages

| Page | File |
|------|------|
| Home | `index.html` |
| Destinations | `destinations.html` |
| Experiences | `experiences.html` |
| Hotels | `hotels.html` |
| Gallery | `gallery.html` |
| Testimonials | `testimonials.html` |
| Contact | `contact.html` |
| 404 Error | `404.html` |

## Features

- **7-page responsive website** with shared navbar, footer, and consistent design language
- **Hero slideshow** — full-bleed crossfade image carousel with manual controls and auto-play
- **Destination showcase** — 6 African destinations with descriptions and call-to-action links
- **Experience cards** — 4 curated luxury experience categories (Safari, Beach, Culture, City)
- **Hotel listings** — 4 luxury properties with Pexels imagery and `onerror` fallback placeholders
- **Gallery with category filter** — 9 images filterable by Wildlife, Beach, City, and Culture
- **Guest testimonials** — 6 authentic guest reviews with star ratings
- **Contact form** — validated form (name, email, phone, message) with inline error messages and success feedback
- **Dark/light mode toggle** — persists preference via `localStorage`
- **Scroll-reveal animations** — sections fade in using Intersection Observer
- **Back-to-top button** — appears after scrolling past 400px
- **Accessibility** — skip-to-content links, smooth scrolling, visible focus states, `aria-current` on active nav items
- **Print stylesheet** — clean print layout via `@media print`
- **Open Graph meta tags** — `og:title`, `og:description`, `og:image`, `og:type` on every page
- **Favicon** — custom branded icon on all pages
- **404 error page** — branded custom error page with site navigation
- **Footer social icons** — Facebook, Instagram, Twitter/X, and YouTube links
- **Parallax sections** — background parallax scrolling on the homepage
- **3D bubbly scroll effect** — subtle depth transform on scroll
- **Responsive design** — optimised for mobile, tablet, and desktop breakpoints

## Design System

- **Colors:** Navy (`#0A1628`), Gold (`#D4A24C`), Terracotta (`#A8553A`), Cream (`#F7F3EC`), Charcoal (`#3A3A38`)
- **Typography:** Fraunces (headings) + Inter (body) via Google Fonts
- **Framework:** Bootstrap 5.3 (CSS + JS Bundle)
- **Icons:** Custom inline SVGs for social links

## Tech Stack

- HTML5
- CSS3 (vanilla, no pre-processors)
- Bootstrap 5.3
- JavaScript ES6+ (vanilla, no frameworks)

## How to Run

Open `index.html` in any modern browser. No build step required.

Alternatively, visit the live deployment at [https://luxe-voyage-pi.vercel.app](https://luxe-voyage-pi.vercel.app).

## Project Structure

```
├── index.html
├── destinations.html
├── experiences.html
├── hotels.html
├── gallery.html
├── testimonials.html
├── contact.html
├── 404.html
├── css/
│   └── style.css
├── js/
│   └── app.js
├── assets/
│   └── images/
├── README.md
└── .gitignore
```

## Submission

- **Course:** Web Application Development
- **Institution:** University
- **Submission Date:** June 28, 2026
