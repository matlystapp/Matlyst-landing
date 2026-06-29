# Matlyst — Design System

> _Come bien. Siempre._
> The visual + voice toolkit for Matlyst — a social network of restaurant
> recommendations curated by people who actually know how to eat.

---

## What Matlyst is

Matlyst is a **B2C mobile app** for the Spanish market: a gastronomic
social network where people share, save, and discover restaurants
recommended by friends and tastemakers they trust — _not_ algorithms,
_not_ anonymous reviews. The product is pre-launch; the immediate
deliverable is a **landing page** that captures emails for a waiting
list.

- **Audience:** foodies, gourmets, travelers, professionals who care
  about eating well in Spain (Madrid, Barcelona, San Sebastián,
  Valencia, Sevilla).
- **Owner:** Christian Mateo Martínez Sáchica (sole proprietor).
- **Language:** Spanish (Spain), tú-form.
- **Brand voice:** confident, opinionated, warmly direct. Not corporate.
- **Domain:** matlyst.app
- **Tagline:** _Come bien. Siempre._

## Sources used to build this system

| Source | Provenance | Where it ended up |
|---|---|---|
| Figma file `Brand manual Matlyst.fig` | User-attached | `_fig/Brand-manual-Matlyst/` (tokens + inventory) |
| Logo wordmark | `uploads/Matlyst_principal.png` | `assets/matlyst-wordmark.png` |
| Logo mark (smiley coin) | `uploads/Brown and Light Brown… (1).png` | `assets/matlyst-mark.png` (white background stripped to alpha) |
| Switzer typeface (20 woff files) | `uploads/drive-download-…zip` | `fonts/Switzer-*.woff` |
| Landing-page briefing | Project task | Distilled into UI kit + tone notes |
| Brand colors (live feedback) | User-provided in review | See palette below |

---

## Index of this folder

```
README.md                ← you are here
SKILL.md                 ← Agent-Skills compatible entry point
colors_and_type.css      ← single source of truth for tokens
fonts/                   ← Switzer woffs (all 9 weights + italics)
assets/                  ← logos + brand assets
  matlyst-mark.png         ↳ amber smiley coin, transparent
  matlyst-wordmark.png     ↳ "Matlyst" lockup, transparent
  ICONOGRAPHY.md
preview/                 ← Design System tab cards (one concept each)
ui_kits/
  landing/               ← the matlyst.app landing page
    index.html             • interactive recreation
    components/*.jsx       • Hero, Sections, FAQ, Footer, Icons…
    styles.css
    README.md
_fig/                    ← raw Figma extract (tokens, inventory)
```

When you import this skill, **always** start with `colors_and_type.css`
and the relevant `ui_kits/<surface>/README.md`.

---

## CONTENT FUNDAMENTALS

Matlyst writes like a friend with strong opinions about dinner. The
voice is the brand — get this wrong and the design doesn't matter.

### Voice in one line
> **Confident, warm, slightly cheeky. Knows what's good. Won't waste
> your time.**

### Rules

1. **Spanish (Spain), tú-form, always.** No "usted". Castilian
   spelling and idioms — "móvil" not "celular", "lista de espera"
   not "waitlist".

2. **Short, declarative, punchy headlines.** Two periods are better
   than a comma. The brand's defining headline is two-word stacked:
   > Come bien.
   > Siempre.

   Other openers from the briefing:
   - "Matlyst es tu círculo gastronómico de confianza"
   - "Así de fácil es comer bien con Matlyst"
   - "Los que comen bien ya están dentro"

3. **Talk to the reader directly.** "Tú", "tu comunidad", "tu feed",
   "tu perfil gastronómico". The product is yours, not _ours_.

4. **Punch down on the competition.** Naming names is on-brand:
   > "Google Maps tiene miles de reseñas. TripAdvisor también. Pero
   > la mayoría son de gente que no tiene ni idea de lo que le gusta
   > — o directamente te están colocando su primo."
   Competitors are mediocre. We are not. Say it.

5. **Pain-points in first person, with attitude.** Quote the user's
   inner monologue:
   > "Llevo 20 minutos mirando reseñas y sigo sin decidirme."

6. **Em-dashes are the brand's favorite punctuation.** Used to drop
   in a verdict or aside. Use `—` (em dash) not `--`.

7. **No emoji. Anywhere.** The brand initially leaned on emoji as
   illustration; the final direction is **emoji-free**. Use proper
   line iconography (Lucide / hand-crafted inline SVG) or, even
   better, no icon at all — let typography and composition carry the
   meaning. Emoji reads as "made by an AI"; Matlyst is the opposite
   of that.

8. **Microcopy is staccato and bullet-shaped.**
   > Gratis · Sin spam · Acceso prioritario
   > ✓ Acceso antes que nadie  ✓ Sin compromiso  ✓ Cero spam

   The dot-separated list (`·`) and the check `✓` (Lucide check
   icon, not Unicode) are the brand's micro-rhythm.

9. **Numbers and lists earn their place — don't pad.** When the
   briefing says "Más de [X] personas", leave the placeholder
   honest. Don't invent stats.

10. **Tagline is sacred:** _Come bien. Siempre._ Use it under the
    logo, in the footer, and as the email signoff. Never reword.

### Casing
- **Headlines** sentence case ("Come bien. Siempre.") — never title case.
- **Eyebrows** ALL CAPS, with 0.08em letter-spacing, in `--persimmon`.
- **Buttons** sentence case, with the action front-loaded ("Únete a
  la lista de espera"). Trailing icon (arrow-right) when the action
  leads somewhere.
- **Step labels** ALL CAPS + tabular numerals ("PASO 01").

### Don't
- ❌ "We", "nosotros" as a corporate voice — speak to _you_, not from _we_.
- ❌ "Empower", "revolutionize", "platform", "ecosystem", anglicisms.
- ❌ Exclamation marks. The brand is confident; it doesn't shout.
- ❌ Title Case Headlines.
- ❌ **Any emoji at all.** No 🍽️, no ✨, no 📍.

---

## VISUAL FOUNDATIONS

### Colors — four-color Mediterranean palette + warm ink

| Token | Hex | Role |
|---|---|---|
| `--cream` | `#FBF8F2` | Default canvas. Warm off-white. Never `#FFF` for full sections. |
| `--persimmon` | `#E35336` | Primary CTA, headline accent, the "siempre" word. |
| `--sage` | `#98A869` | Community / success / quiet UI accent. |
| `--sky` | `#4AABE8` | Discovery / info / map accent. |
| `--ink` | `#261712` | Primary text. Warm near-black with brown undertone. |
| `--cream-deep` | `#F2EDE0` | Section dividers; the "second" canvas. |
| `--paper` | `#FFFFFF` | Pure white for raised cards on top of cream. |

Supporting tints (`--persimmon-soft`, `--sage-soft`, `--sky-soft`,
`--persimmon-deep`, etc.) are defined in `colors_and_type.css`.

> **Rules of thumb**
> - Use **one** accent per section. Don't mix persimmon + sage + sky
>   in the same surface — it gets noisy.
> - Persimmon is the loudest. Use it on CTAs and one "anchor" element
>   per screen. Don't paint whole pages persimmon.
> - Sage and sky are equally weighted supporting characters. Reach for
>   sage when the context is "people / community / confirmation";
>   reach for sky when the context is "discovery / map / info".
> - Cards default to pure white (`--paper`) on the cream canvas. Use
>   colored-fill cards (persimmon / sage / sky / ink) as the
>   _exception_, to anchor a key moment in a grid.

### Typography

- **Switzer** is the only typeface. It runs from 100 to 900, with
  italics. Provided as woff in `fonts/`.
- The wordmark **"Matlyst"** uses a heavier, narrower display face
  bundled as a PNG (`assets/matlyst-wordmark.png`). _The actual
  display face is not provided._ Substitute **Switzer Black 900**
  at tight tracking when an SVG/PNG isn't appropriate, and **flag
  this substitution** to the user.
- Display headlines: **Switzer 800/900**, `-0.028em` to `-0.035em`
  tracking, line-height ~0.95. Two-word stacked headlines are the
  brand signature.
- Body: **Switzer 400/500**, 17px, 1.5–1.6 line-height.
- Eyebrows: **Switzer 600**, 13px, ALL CAPS, +0.08em tracking,
  always in `--persimmon`.

### Backgrounds & sections

- **Cream `#FBF8F2`** is the default. Warm, paper-like.
- **`--cream-deep` `#F2EDE0`** alternates with cream to give sections
  a quiet rhythm — never a hard color block.
- **`--ink` `#261712`** is the inverse mode for the waiting-list CTA
  and the footer. Soft radial halos (persimmon + sky) glow inside the
  ink to keep it from feeling pure black.
- **Full-bleed warm photography** — restaurant interiors with warm
  tungsten light, plated food shot from above or 3/4, real diners.
  Photos crop into `--r-lg` (24px) corners. Placeholders are warm
  gradient blocks labelled `FOTO` until real imagery exists.
- **No emoji. No invented illustrations. No hand-rolled SVG art.**

### Shape & corners

- **Cards**: `border-radius: 24–28px`. White fill on cream, with a
  soft outer warm shadow. No inner shadows. No 1px borders by
  default — the shadow does the work.
- **Pills / chips**: `--r-pill` (999px).
- **Buttons (primary)**: `--r-pill`, **persimmon fill**, **white
  text**, with a soft persimmon-tinted shadow (`0 8px 24px -8px
  rgba(227,83,54,0.5)`).
- **Buttons (secondary)**: `--r-pill`, ink fill, cream text.
- **Buttons (ghost)**: `--r-pill`, transparent, 1.5px hairline
  border (`rgba(38,23,18,0.22)`), darkens on hover.

### Shadows & elevation

- **Outer shadows only.** No inset shadows except on the input focus
  ring.
- The card shadow is layered:
  `0 2px 4px rgba(38,23,18,0.04), 0 16px 40px -20px rgba(38,23,18,0.14)`
  — a tight contact shadow + a long soft warm halo. Always warm
  alpha (`rgba(38,23,18,…)`), never cool gray.
- Hover: `translateY(-3px)` + a slightly deeper version of the same.

### Borders

- 1px, `rgba(38, 23, 18, 0.10)` (`--rule`). Warm, never gray.
- Used sparingly — most surfaces are separated by the cream/cream-deep
  rhythm and by shadow, not by lines.

### Animation & motion

- **Restrained.** Apple-clean — motion supports, never performs.
- **Easing:** `cubic-bezier(0.2, 0.8, 0.2, 1)` (soft out-cubic).
- **Durations:** 120–180ms (state changes), 280ms (card hover),
  480ms (section reveals — keep these subtle).
- **Hover:** persimmon buttons deepen by ~8% lightness + shadow
  grows; cards lift by `translateY(-3px)`.
- **Press:** `scale(0.985)` for 80ms, no color shift.
- **No bounces, no scroll-jacking, no parallax.**

### Transparency & blur

- The nav bar uses `backdrop-filter: blur(20px) saturate(180%)` over
  a 78%-opaque cream — the Apple "frosted bar" look.
- Map / dark-card chips inside accent tiles use a 22%-white +
  `blur(8px)` for a glass effect.

### Layout rules

- **Container:** max 1180px, centered, with `--gutter` 20–48px
  fluid.
- **Section padding:** 120px top/bottom desktop, 80px tablet.
- **Single column** for marketing copy with generous rhythm.
- **2- and 3-column grids** for cards; 6-column bento for the
  features section.
- **No floating CTAs** — the page is honest about its single goal
  (waiting list) and ends at the form.

---

## ICONOGRAPHY

> Full notes in [`assets/ICONOGRAPHY.md`](./assets/ICONOGRAPHY.md). Short version below.

**No emoji. Anywhere.** That's the headline rule.

Use **Lucide line icons** for every functional and decorative need:
arrow-right, plus, check, x, map-pin, users, utensils, compass,
user-circle, bookmark, sparkles, heart, etc. 1.75px stroke, 24px box,
in `--ink` by default.

For marketing surfaces:
- **Filled icon-tiles** (56px square, 16px radius, white icon at
  28px) when an icon needs to anchor a card. Tile color follows the
  section's accent: persimmon / sage / sky / ink.
- **Abstract mini-visuals** built from the brand's own UI patterns
  (avatar constellations, recommendation chip stacks, list grids,
  map-with-pins) — see the `feature-card__visual` patterns in
  `ui_kits/landing/components/Sections.jsx` for reference.

The **Matlyst mark** (amber smiley coin) is a brand asset, not an
icon — use it only at logo scale (≥28px) with clear-space, never
inline in body copy. The white background has been stripped, so it
drops cleanly onto cream or ink.

---

## Open questions / things to flag to the user

1. **Wordmark display face is missing.** The "Matlyst" PNG uses a
   custom heavy condensed sans we don't have a font file for.
   Switzer Black is the fallback for non-logo display type. The
   wordmark itself is always the PNG.
2. **Photography is missing.** Real warm-light restaurant photos and
   real diner portraits are needed for hero, social proof, and
   waiting-list visuals. Placeholders are warm gradient blocks.
3. **City list, testimonial portraits, "[X] in waiting list" stat**
   are placeholders in the landing UI kit.
4. **Legal blocks** in the footer have `[CIUDAD]` and `[CÓDIGO
   POSTAL]` placeholders straight from the briefing.

---

_Last updated: 2026-05-27._
