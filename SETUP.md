# Yaara Shvadron — Personal Website

A modern personal brand site built with Next.js 15, TypeScript, TailwindCSS, and Framer Motion.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open http://localhost:3000

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata, providers
│   ├── page.tsx          # Main page (composes all sections)
│   └── globals.css       # Design tokens, base styles, utilities
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx    # Sticky nav with mobile menu + theme toggle
│   │   ├── Footer.tsx        # Minimal footer
│   │   └── Providers.tsx     # next-themes ThemeProvider wrapper
│   ├── sections/
│   │   ├── Hero.tsx          # Full-screen landing with portrait placeholder
│   │   ├── About.tsx         # Bio + editorial timeline
│   │   ├── Experience.tsx    # Accordion-style experience list
│   │   ├── Projects.tsx      # Project cards with expand/collapse
│   │   ├── Writing.tsx       # Thought leadership articles
│   │   ├── Personal.tsx      # Human/personal elements
│   │   └── Contact.tsx       # Contact form + LinkedIn/email links
│   └── ui/
│       ├── ThemeToggle.tsx   # Dark/light mode button
│       ├── SectionHeader.tsx # Reusable section heading
│       └── ProjectCard.tsx   # Expandable project card
├── content/
│   ├── experience.ts     # Work history data
│   ├── projects.ts       # Strategic work / project data
│   ├── writing.ts        # Articles / thought leadership
│   └── personal.ts       # Personal items + leadership philosophy
└── lib/
    ├── types.ts           # TypeScript interfaces
    └── utils.ts           # Utility functions
```

## Customizing Content

All content lives in `src/content/`. Edit the TypeScript files directly — no CMS required.

### Adding a project

In `src/content/projects.ts`, add a new object:

```ts
{
  id: 'my-project',
  title: 'Project Title',
  category: 'Category',
  tags: ['Tag1', 'Tag2'],
  summary: 'One-paragraph summary shown on the card.',
  description: 'Full description shown when expanded.',
  impact: 'Quantified impact line.',
  date: '2026-06',
  featured: false,   // true = shown in the top grid
}
```

### Adding a project asset (PDF, image, slides)

1. Drop the file in `public/projects/your-project-name/`
2. Add to the project's `assets` array:

```ts
assets: [
  { type: 'pdf', url: '/projects/my-project/case-study.pdf', caption: 'Full case study' },
  { type: 'image', url: '/projects/my-project/slide-01.png', caption: 'Executive summary slide' },
]
```

### Adding a writing piece

In `src/content/writing.ts`, add a new entry. Set `external` to the URL if it's published elsewhere.

### Updating the bio

Edit `src/components/sections/About.tsx` for the narrative text. The timeline is defined inline in that component.

### Replacing the portrait

1. Add your photo to `public/portrait.jpg` (or any format)
2. In `src/components/sections/Hero.tsx`, replace the placeholder div with:

```tsx
import Image from 'next/image'
// ...
<Image src="/portrait.jpg" alt="Yaara Shvadron" fill className="object-cover object-top" />
```

## Contact Form

The form UI is ready. To make it actually send emails, wire up the `handleSubmit` function in `src/components/sections/Contact.tsx` to one of:

- **Resend** (recommended) — create `src/app/api/contact/route.ts`
- **FormSpree** — replace `handleSubmit` with a FormSpree endpoint fetch
- **EmailJS** — client-side, no backend needed

## Design Tokens

Colors and theme variables are in `src/app/globals.css` (CSS custom properties) and `tailwind.config.ts`.

To change the accent color, update `accent.DEFAULT` in `tailwind.config.ts` and `--accent` in `globals.css`.

## Deploying

The site works as a standard Next.js app. Deploy to:
- **Vercel** (zero-config, recommended)
- **Netlify** with `npm run build && npm run export` (add `output: 'export'` to `next.config.ts`)
