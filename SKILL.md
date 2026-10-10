---
name: arun-tomar-portfolio-design
description: Design and build system for Arun Tomar's single-page, frontend-only developer portfolio (aruntomar.in). Use whenever creating or editing any page, component, style or animation for this portfolio. Defines the "Midnight + Amber" theme, tokens, layout, motion, content and rules.
---

# Arun Tomar Portfolio: Design Skill

Follow this file exactly. Do not invent new colors, fonts or layouts. When something is not covered here, choose the simplest option that fits the principles below.

## 1. Project summary

- **Owner:** Arun Tomar, Junior Software Engineer at Zealous System (Prahladnagar, Ahmedabad). Started as a full-stack trainee. B.E. graduate of Gujarat Technological University (GTU).
- **Type:** one single scrolling page (no separate routes), with scroll-triggered animations.
- **Frontend only.** No backend, no API calls, no database, no environment variables. All content lives in static TypeScript data files.
- **Stack:** Next.js (App Router, static export friendly) + TypeScript + Tailwind CSS + Framer Motion. Deploy on Vercel at `aruntomar.in`.
- **Feeling:** modern, calm, professional. A *light touch* of developer flavor. It must NOT look like a terminal, VS Code or a cyberpunk site.

## 2. Design principles

1. **One accent color only: amber.** No rainbow gradients, no pink, violet, teal or coral. (An earlier multi-color version was rejected for looking like a pride flag.)
2. **Simple but polished.** Few elements, generous spacing, clear hierarchy, consistent cards.
3. **Developer touch = small only.** Allowed: the `// Software Engineer` mono eyebrow, mono tags on cards, a subtle boot-sequence intro, a small `⌘K` palette. Not allowed: fake terminal windows everywhere, scanlines, matrix effects, heavy code backgrounds.
4. **Dark only.** Near-black background with a soft amber glow.
5. **Motion is subtle.** Fade and rise on scroll. No bouncing, spinning or parallax overload.

## 3. Design tokens

```ts
// tailwind.config.ts → theme.extend
colors: {
  bg:        '#0A0D12', // page background
  panel:     '#0F141C', // cards, buttons
  elevated:  '#101620', // photo placeholder, inputs
  line:      '#1F2835', // default borders
  lineStrong:'#2A3342', // ghost button border
  text:      '#EEF1F6', // primary text
  muted:     '#8B95A5', // body / secondary text
  dim:       '#5B6678', // placeholders, captions
  accent:    '#E3B341', // THE accent (amber)
  onAccent:  '#171006', // text on amber fills
  success:   '#3FB950', // status dot ONLY
},
fontFamily: {
  sans: ['Outfit', 'sans-serif'],
  mono: ['"Space Grotesk"', 'monospace'],
},
borderRadius: { card: '18px', photo: '28px', btn: '9999px', chip: '8px', social: '12px' },
```

**Background:** `#0A0D12` with one radial glow: `radial-gradient(640px 460px at 78% 32%, rgba(227,179,65,.13), transparent 70%)`, positioned behind the hero photo. Never add a second hue.

**Fonts:** load Outfit (400, 500, 600, 800) and Space Grotesk (400, 500) via `next/font/google`.

## 4. Typography

| Use | Font | Size | Weight | Notes |
|---|---|---|---|---|
| Hero name | Outfit | 96px (clamp 52 to 96) | 800 | tracking -0.04em, line-height 1; "Tomar" in `accent` |
| Section heading | Outfit | 44px | 800 | tracking -0.03em |
| Eyebrow | Space Grotesk | 14px | 400 | `accent`, format `// Software Engineer · Ahmedabad` |
| Body | Outfit | 18px | 400 | `muted`, line-height 1.7, max-width 520 to 560px |
| Card title | Outfit | 20px | 600 | `text` |
| Card text | Outfit | 14px | 400 | `muted` |
| Tags / chips | Space Grotesk | 12 to 13px | 400 | |
| Nav links | Outfit | 15px | 400 | `muted`, active `text` |

## 5. Page structure (single page, in order)

Anchors: `#home`, `#about`, `#projects`, `#experience`, `#contact`. Sticky nav links scroll smoothly to each.

1. **Nav**: padding 28px 72px. Left: logo text `arun.tomar` (the dot is `accent`, weight 800, 20px). Right: Home, About, Projects, Experience, Contact, then a pill CTA "Download CV" (amber fill, `onAccent` text, 600, padding 10px 20px). On mobile collapse into a hamburger menu.
2. **Hero** (two columns, gap 64px, vertically centered):
   - **Left:** eyebrow, name (one line), paragraph, two pill buttons ("View projects" amber fill, 15px 28px; "Get in touch" ghost with 1px `lineStrong` border), then a row of 5 skill chips (HTML, CSS, JavaScript, Python, Git): outlined, 1px `line`, radius 8, padding 7px 13px, `muted`.
   - **Right (340px wide column):**
     1. Photo, 340x370, radius 28, 1px gradient border `linear-gradient(160deg, rgba(227,179,65,.55), rgba(227,179,65,.06) 60%)`, inner background `elevated`.
     2. **Below the photo, a row of 3 equal buttons: LinkedIn, GitHub, Email**, each `panel` background, 1px `line` border, radius 12, padding 12px, and 14px weight 500. Gap 10px. This row is required.
   - Under 900px wide, stack: text first, then photo, then links.
3. **About**: short paragraph (see content), then a compact grid of facts (Education, Current role, Location, Focus).
4. **Projects: exactly 2 cards**, side by side in a 2-column grid (stack on mobile). See section 7.
5. **Experience**: vertical timeline with a 1px `line` rail and small amber dots. See section 7.
6. **Contact**: heading, short line, the same 3 links (LinkedIn, GitHub, Email), and a simple form (name, email, message) with `elevated` inputs, 1px `line` border, focus border `accent`. Frontend only: on submit, open a `mailto:` link prefilled with the form values, and show an inline "Opening your email app…" confirmation line. No server endpoint.
7. **Footer**: one line, `dim` text: `© 2026 Arun Tomar`.

Container: max-width 1136px, horizontal padding 72px (24px on mobile). Section vertical spacing: 120px (80px on mobile).

## 6. Components

- **Primary button:** `bg accent`, `text onAccent`, weight 600, pill. Hover: translateY(-1px) and `box-shadow: 0 10px 28px -10px rgba(227,179,65,.5)`.
- **Ghost button:** transparent, 1px `lineStrong`, `text`. Hover: border `accent`.
- **Card:** `panel` background, 1px `line`, radius 18, padding 22px 24px. Hover: border `rgba(227,179,65,.4)` and translateY(-3px).
- **Project card layout:** top row = mono tag (e.g. `HTML · CSS · JS`, 12px, `accent`) and a distinct external-link icon on the right; title; description; then a small row of text links ("Live demo", "Code") in `muted`, hover `accent`.
- **Chip:** outlined, no fill (see Hero).
- **Status pill (optional, one use only):** `success` dot plus "Open to work" in `muted`.
- **Focus ring (all interactive elements):** `outline: 2px solid #E3B341; outline-offset: 2px`.

## 7. Projects and Experience (static data)

Keep content in `data/projects.ts` and `data/experience.ts`. No fetching.

### Projects (exactly 2)

```ts
export const projects = [
  {
    title: 'Weather App',
    tags: ['HTML', 'CSS', 'JavaScript'],
    description: 'An interactive weather app that uses a weather API to show real-time conditions and forecasts.',
    live: '[TO BE PROVIDED]',
    code: '[TO BE PROVIDED]', // GitHub repo URL
  },
  {
    title: 'Piano Tiles Game',
    tags: ['Python', 'Kivy'],
    description: 'A rhythm game where players tap the right tiles in time. One wrong press ends the game.',
    live: null,
    code: '[TO BE PROVIDED]',
  },
];
```

Arun can swap either for the Hiking Landing Page (HTML, CSS: a landing page for hikers with scenic trails, gear and adventure tips). Never show more than 2. If a link is `[TO BE PROVIDED]` or `null`, hide that link.

### Experience (timeline, newest first)

```ts
export const experience = [
  {
    role: 'Junior Software Engineer',
    org: 'Zealous System, Prahladnagar, Ahmedabad',
    period: '[START DATE] to Present',
    points: [
      'Started as a full-stack trainee and moved into a Junior Software Engineer role.',
      '[Add 1 to 2 points about what you build or learn here]',
    ],
  },
  {
    role: 'Full-Stack Trainee',
    org: 'Zealous System, Ahmedabad',
    period: '[DATES]',
    points: ['[Add 1 to 2 points about the training and what you worked on]'],
  },
  {
    role: 'B.E., Computer Engineering',
    org: 'Gujarat Technological University',
    period: '[YEARS]',
    points: [],
  },
];
```

Timeline item: amber dot on the rail, small mono period line in `dim`, role (20px, 600, `text`), org (14px, `muted`), then bullets in `muted` 14px. Hide any line that is still a `[...]` placeholder rather than showing it publicly.

## 8. Motion (Framer Motion)

```ts
export const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.6, 0.2, 1] } },
};
export const stagger = { show: { transition: { staggerChildren: 0.08 } } };
// usage: <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} />
```

- **Boot intro (cosmetic only, once per session, skippable by any key or click):** full-screen `#050607`, mono 13px lines appear one by one (about 0.45s apart), each prefixed by a green `✓` except the first (`>` in amber): `> Initializing Arun.Tomar...`, `✓ Loading profile`, `✓ Loading projects`, `✓ Loading experience`, `✓ Loading interface`, `System Ready`. (Do not claim to connect to real services, since there are none.) A 2px amber progress bar fills beneath. About 3s total, then fade out over 0.5s. Store `sessionStorage.booted = '1'` to skip on later visits. Show "press any key to skip" after about 1s.
- **Scroll reveal:** every section heading and block uses `fadeUp` with `once: true`. Experience timeline items and the 2 project cards stagger in.
- **Hero:** on load, stagger the eyebrow, name, paragraph, buttons, then photo.
- **Hover:** buttons and cards as in section 6, transitions 180 to 200ms.
- **Scroll progress:** 2px amber bar fixed at the top.
- **Nav:** highlight the active section link in `text` color with a small amber dot or underline.
- **Command palette (`⌘K` / `Ctrl+K`):** centered modal on `panel` with 1px `line`, backdrop `rgba(4,5,7,.72)` blur 4px. Items: jump to each section, open GitHub, open LinkedIn, download CV. Keyboard: arrows, Enter, Esc.
- Respect `prefers-reduced-motion`: disable transforms and typing, keep simple fades.

## 9. Content (use exactly; do not invent facts)

- **Name:** Arun Tomar
- **Eyebrow:** `// Software Engineer · Ahmedabad`
- **Hero paragraph:** "I turn complex problems into clean, working products. B.E. from Gujarat Technological University, now building across the stack at Zealous System."
- **Current role:** Junior Software Engineer, Zealous System, Prahladnagar, Ahmedabad. Started as a full-stack trainee.
- **Education:** B.E. (Computer Engineering), Gujarat Technological University.
- **Skills (from his existing portfolio):** Python, Java, C++; HTML, CSS, Tailwind CSS, JavaScript; Git and GitHub. Areas: Data Structures, Algorithms, OOP, AI/ML.
- **Links:**
  - GitHub: https://github.com/Arun-Tomar13
  - LinkedIn: https://www.linkedin.com/in/aruntomar-/
  - Email: **[TO BE PROVIDED]** (use `mailto:`; until then show the button but mark the link as a TODO in code)
  - CV: `/CV.pdf` (exists in the old repo `Arun-Tomar13/Portfolio`; copy it into `/public`)
- **Photo:** `/images/arun-img.jpeg` (from the old repo `images/` folder; `images/Arun.jpeg` is an alternative for About). Until added, show the `elevated` placeholder with the text `[ YOUR PHOTO ]`.

## 10. Rules: do and don't

**Do**
- Use only the tokens above. Keep amber as the single accent.
- Keep every card, chip and button consistent in radius and border.
- Make it fully responsive (mobile-first) with real `<button>` and `<a>` elements, visible focus rings and text contrast of at least 4.5:1.
- Use semantic HTML (`nav`, `main`, `section`, `footer`) and set metadata (title "Arun Tomar | Software Engineer", description, Open Graph image).

**Don't**
- Don't add any API calls, server code, database or env vars. Frontend only.
- Don't add gradients across hues, neon glows, emoji, stock illustrations or lorem ipsum.
- Don't use more than one accent color or a second glow hue.
- Don't turn the whole page into a terminal or IDE.
- Don't show more than 2 projects.
- Don't invent employers, dates, numbers or projects. Use placeholders in square brackets in the data files when information is missing, and hide them in the UI until filled.
- Don't use localStorage. Use `sessionStorage` only for the boot-skip flag.

## 11. Suggested file structure

```
app/
  layout.tsx          # fonts, metadata, background glow
  page.tsx            # composes all sections
components/
  Boot.tsx  Nav.tsx  Hero.tsx  About.tsx  Projects.tsx
  Experience.tsx  Contact.tsx  CommandPalette.tsx  ScrollProgress.tsx
data/
  projects.ts  experience.ts  links.ts
public/               # CV.pdf, images/
```

## 12. Definition of done

- Matches the Midnight + Amber look: dark base, single amber accent, big two-tone name, photo with LinkedIn / GitHub / Email buttons directly beneath it.
- Single scrolling page with Home, About, Projects (2), Experience and Contact, with reveal animations, working nav, boot intro and command palette.
- No network requests other than fonts. Everything renders from static data.
- Lighthouse: Performance 90+, Accessibility 95+. No console errors. Works from 360px to 1440px wide.
