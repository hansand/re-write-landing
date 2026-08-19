---
name: AI Compose Assistant — Landing Page
description: Restrained white canvas, one indigo accent, flat-vector illustration of the product mechanism itself.
colors:
  brand-400: "#818CF8"
  brand-500: "#6366F1"
  brand-600: "#4F46E5"
  brand-700: "#4338CA"
  ink: "#0B0B0F"
  muted: "#6B7280"
  surface: "#F8F8FB"
  hairline: "#E7E7EE"
  dark: "#0B0B0F"
  dark-surface: "#17171F"
  dark-hairline: "#2A2A35"
  dark-fg: "#F5F5F7"
  dark-muted: "#9A9AA8"
typography:
  display:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4vw, 3.25rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 2.5vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0"
rounded:
  md: "12px"
  lg: "16px"
  full: "9999px"
spacing:
  section-y-mobile: "48px"
  section-y-desktop: "80px"
  container-px-mobile: "24px"
  container-px-desktop: "32px"
components:
  button-primary:
    backgroundColor: "{colors.brand-600}"
    textColor: "#FFFFFF"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.brand-700}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  card-surface:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "28px"
---

# Design System: AI Compose Assistant — Landing Page

## Overview

**Creative North Star: "The Open Compose Panel"**

The one thing this page is allowed to be proud of is a UI mechanism most extensions never earn: a tool that opens *inside* the field you're already using, not a new destination. Every illustration on the page is a variation of the same idea — a real interface caught mid-use, one small indigo mark showing where the product inserted itself. There is no mascot, no abstract "AI energy" swirl, no beam-of-light hero art. The product's honesty (BYO API key, local-only storage, real insertion into rich editors) is matched by a visual honesty: flat, front-on, unglossed vector drawings of UI, not atmosphere.

The palette stays almost entirely neutral so that the single accent — one indigo — reads as a signal, not decoration: it marks the AI touchpoint (the compose bubble, a selected rewrite, a toggled-on profile, a pinned message) everywhere it appears, and nowhere else. The page is quiet by default and lets exactly three moments carry real color weight: the compose bubble in the hero, the Privacy section going fully dark as a trust-signal shift, and the final CTA going fully indigo as the one saturated close.

Rejected explicitly: isometric/axonometric illustration (the spec's original suggestion) — replaced with flat front-elevation vector to keep hand-authored SVG legible and consistent without the risk of an uneven isometric grid; gradient text; kickers/eyebrows above headings; hard-offset "neobrutalist" shadows; monospace used as a generic "technical" costume (mono is reserved for exactly one real keyboard-shortcut badge).

**Key Characteristics:**
- One indigo accent on a white-and-near-black neutral system; color marks meaning, not mood
- Flat, front-on vector illustration of the product's own UI, never abstract or photographic
- Flat-by-default surfaces; shadows appear only as a hover response or under a genuinely floating panel
- Three deliberate register shifts: white (default) → near-black (Privacy) → solid indigo (final CTA) → near-black (footer)

## Colors

Almost entirely neutral (white, near-black ink, one warm-gray muted, one cool-gray surface) with a single indigo family carrying every accent, CTA, and "this is the AI part" signal.

### Primary
- **Indigo 500** (`#6366F1`, `brand-500`): the compose-bubble fill, focus rings, selected-state highlights, and small accent marks (checkmarks, toggles, active icons). Never used as a large background field — it stays a mark, not a ground.
- **Indigo 600** (`#4F46E5`, `brand-600`): default background for every primary button and the Final CTA section's solid ground. Chosen over 500 specifically because white text at normal weight/size only reaches ~4.47:1 contrast on 500 — short of AA — while 600 clears it with margin (~6.3:1).
- **Indigo 700** (`#4338CA`, `brand-700`): primary-button hover state only.
- **Indigo 400** (`#818CF8`, `brand-400`): the lighter stop in the compose-bubble's gradient fill, and small icon accents on the dark Privacy section (needs to sit on near-black, so it's lifted a step lighter than 500).

### Neutral
- **Ink** (`#0B0B0F`): all body/heading text on light sections, and the background of the Privacy section and Footer.
- **Muted** (`#6B7280`): secondary text (subheadlines, card bodies, nav links) on light sections. Measures 4.83:1 on white — passes AA for normal text with real margin.
- **Surface** (`#F8F8FB`): the flat background for feature cards, illustration mounts, the Works-everywhere strip, and the Providers strip — the page's one "raised" neutral, always paired with Ink or Muted text, never accent color.
- **Hairline** (`#E7E7EE`): every 1px border — card outlines, dividers, the sticky nav's bottom edge.
- **Dark surface** (`#17171F`) / **Dark hairline** (`#2A2A35`): icon-badge fills and dividers inside the Privacy section, one step lighter than the section's pure-black ground so content has legible layering without introducing a second hue.
- **Dark fg** (`#F5F5F7`) / **Dark muted** (`#9A9AA8`): text roles on dark sections, mirroring Ink/Muted's job at the inverse end. Dark-muted measures 7.07:1 on the dark ground.

### Named Rules
**The Mark, Not Ground Rule.** Indigo covers small shapes (bubbles, buttons, toggles, checks, a single gradient blob) or a single fully-committed section (Final CTA). It never fills a large neutral region as a tint or wash — the accent's rarity is what makes it read as "this is where the AI is."

## Typography

**Display/Body Font:** Geist Sans (`next/font/google`, self-hosted), falling back to the system UI sans stack.
**Label/Mono Font:** Geist Mono, reserved for exactly one element: the `Cmd/Ctrl+Shift+K` shortcut badge in the hero. Nothing else on the page uses it — mono is a citation of a real keyboard shortcut, not a "technical" flourish.

**Character:** A single, humanist, screen-native grade sans doing all the work — no serif, no display face. The system leans on weight (semibold headings, regular body) and scale rather than a second typeface for hierarchy.

### Hierarchy
- **Display** (600, `text-4xl` → `text-[3.25rem]` responsive, 1.08 line-height, `-0.01em` tracking): the hero H1 only.
- **Headline** (600, `text-3xl` → `text-4xl`, 1.2 line-height): every section H2 ("Built for real writing...", "Nothing leaves your computer...", etc).
- **Title** (600, `text-2xl` → `text-3xl` for deep-dive H3s; 600 `text-lg` for feature-card and FAQ-question H3s): sub-section and card headings.
- **Body** (400, `text-lg`/18px for section sub-heads, default 16px for card and paragraph copy, 1.6 line-height, max ~65ch measure): all descriptive copy.
- **Label** (500, `text-xs`/12px, mono, no tracking change): the keyboard-shortcut badge exclusively.

### Named Rules
**The One Mono Rule.** Geist Mono appears in exactly one place on the page. Any second use of it is a defect, not a stylistic echo — see craft-floor's ban on monospace as a "technical" costume.

## Layout

Single static page, one column of stacked full-width sections, no sidebar or persistent chrome beyond the sticky nav. Container caps at **1200px**, with horizontal padding of **24px** on mobile and **32px** at `lg`+. Section rhythm is **80px** vertical padding on desktop (`py-20`/`py-28` depending on section weight), **48–64px** on mobile (`py-12`–`py-20`) — denser utility sections (Works-everywhere, Providers) use a tighter **40px** (`py-10`).

Responsive behavior follows Tailwind's default breakpoints with three functional thresholds: below **640px (`sm`)** everything is a single column and the nav collapses its GitHub button into the mobile menu; **640–1024px** is a 2-column intermediate for the features grid and step list; **1024px+ (`lg`)** unlocks the full multi-column layouts (hero split, 3-column features grid, 4-column how-it-works, 2-column deep-dive rows, 2-column privacy). The nav itself switches from a hamburger-driven slide-down panel to full inline links at **768px (`md`)**.

## Elevation & Depth

Flat by default; a hybrid of tonal layering (the `surface` neutral for resting cards) and soft, blurred shadows reserved for two cases: interactive hover response, and panels that are illustratively "floating" above other content (the hero's rewrite-panel SVG, illustration cards). No shadow is ever a hard, zero-blur offset — every shadow carries real blur and a soft, low-opacity spread, generated either via Tailwind's arbitrary `box-shadow` values or an SVG `feDropShadow` filter inside illustrations.

### Shadow Vocabulary
- **Card hover** (`box-shadow: 0 16px 36px -18px rgba(11,11,15,0.16)`, or `-16px rgba(99,102,241,0.35)` on the featured indigo-tinted card): feature-grid cards on hover only; flat at rest.
- **Button rest** (`box-shadow: 0 1px 2px rgba(11,11,15,0.06)`): the barest separation on primary/onBrand buttons.
- **Button hover** (`box-shadow: 0 8px 20px -6px rgba(99,102,241,0.55)`): primary button only, an indigo-tinted lift.
- **Illustration panel** (SVG `feDropShadow`, `dy 10–24, stdDeviation 14–28, floodOpacity 0.08–0.12`): the browser-frame and floating-card elements inside the hero and both deep-dive illustrations.

### Named Rules
**The Flat-By-Default Rule.** Every card and button is flat at rest. Depth is earned only by hover interaction or by an element's literal in-illustration "floating above the page" role — never applied as ambient decoration.

## Shapes

Two radius steps carry the whole system: **12px** (`rounded-xl`) for small icon badges and toggles, **16px** (`rounded-2xl`) for cards, panels, and illustration mounts. Buttons are the one exception — always **fully pill-shaped** (`rounded-full`), which visually separates "action" from "container" at a glance. Borders are a uniform 1px hairline (`#E7E7EE` on light, `#2A2A35` on dark), used for card and nav outlines; no double borders, no colored side-borders.

## Components

### Buttons
- **Shape:** fully rounded pill (`rounded-full`, 9999px), `px-6 py-3` (mobile menu's full-width variant keeps the same radius and padding).
- **Primary:** `brand-600` fill, white text, barely-there rest shadow, indigo-tinted lift on hover, background steps to `brand-700`.
- **Secondary:** transparent fill, `ink` text, a 1px inset hairline ring that darkens on hover with a faint ink wash background.
- **onDark:** translucent white fill (`white/10`) with a white/15 ring, for use on the near-black Privacy/Footer sections.
- **onBrand:** solid white fill, `brand-600` text — the one button variant meant to sit on the solid-indigo Final CTA section.

### Cards / Containers
- **Corner style:** `rounded-2xl` (16px) uniformly.
- **Background:** `surface` (#F8F8FB) at rest; the single "featured" feature-card (Multiple real variants) uses a diagonal `surface`-to-white-tinted-indigo gradient wash plus a `brand-500/15` ring instead, marking it as the headline feature without breaking the grid's shape language.
- **Shadow strategy:** flat at rest, soft blurred lift on hover only (see Elevation & Depth).
- **Border:** none on feature cards; a 1px hairline on illustration/browser-frame mounts and on the accordion's row dividers.
- **Internal padding:** 28px (`p-7`) for feature cards; 24–40px (`p-6 sm:p-10`) for illustration mounts.

### Inputs / Fields
No live form inputs exist on this page (BYO-key/settings live inside the extension, not the marketing site). The only field-like elements are illustrative: the SVG hero's "focused compose field" uses a 2px `brand-500` stroke to depict a real focus ring, which is the system's only reference for what an actual focus state should look like if one is ever added.

### Navigation
Sticky, translucent white with backdrop blur, 1px hairline bottom border, 64px height. Links are `muted` text that darkens to `ink` on hover, no underline, no active-state indicator (single-page anchor nav). Below `md` (768px), links and the GitHub button collapse into a hamburger-triggered slide-down panel with the same hairline-divided-row treatment as the FAQ accordion, plus a full-width primary button.

### Accordion (FAQ)
Hairline-divided rows, question in `ink` semibold, a `+` icon (Lucide `Plus`) that rotates 45° into an `×` and tints `brand-500` when open. Answer panel animates open via a `grid-template-rows` transition (0fr → 1fr) rather than height/opacity, so it never clips or jumps.

### Illustrations (signature component)
Every illustration on the page shares one grammar: a browser-chrome or panel frame (white fill, hairline stroke, soft drop shadow), muted-gray placeholder text rendered as rounded bars rather than real copy, and exactly one indigo touchpoint per scene (a bubble, a toggle, a checkmark, a pin) marking where the AI acts. Dashed indigo-tinted connector lines (`#A5A9F5`, `stroke-dasharray`) link cause and effect between panels (a toggled profile → the compose window; a saved chat → the compose window). The Privacy illustration is the one variant built for the dark register: near-black panel fills, `brand-400` (not 500) for its shield/lock accent since 500 sits closer to the dark ground's own hue family.

## Do's and Don'ts

### Do:
- **Do** keep indigo confined to marks and the one fully-committed Final CTA section — never a background wash on a light section.
- **Do** use `brand-600`, not `brand-500`, wherever white body-weight text sits directly on a solid indigo fill; 500 fails AA for normal text at any reasonable opacity.
- **Do** give every shadow real blur and a soft spread; a shadow without blur is a costume, not depth.
- **Do** carry the flat-front vector grammar (frame + hairline + one indigo touchpoint + dashed connector) into any new illustration rather than introducing photographic or isometric treatments.

### Don't:
- **Don't** add a kicker/eyebrow label above a heading — the heading carries its own weight; this page removed one deliberately during its finish review.
- **Don't** reach for `font-mono` outside the keyboard-shortcut badge. It is not a general "technical" signifier here.
- **Don't** use a hard-offset, zero-blur shadow anywhere; this is not a neobrutalist system.
- **Don't** introduce a second accent hue. Every "this is the AI" signal in the system is indigo; a second color would break the one legible signal the palette is built around.
