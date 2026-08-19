# AI Compose Assistant — Landing Page Spec

This is a self-contained brief for building the marketing landing page as a **separate
repo/project** from the extension itself. Everything needed to scaffold and fill in a
Next.js site lives in this one file — copy, feature order, page architecture, design
system, and image list — so a brand-new empty repo can be built from this alone.

All product facts below (name, features, privacy model, provider list) are pulled from the
extension's own `README.md`, `package.json`, `wxt.config.ts`, its built `manifest.json`,
and `lib/`/`components/content/` source.

## Open items to resolve before/while building

- No logo/wordmark exists yet anywhere in the extension repo — this spec proposes a simple
  bubble/spark monogram, but an actual mark still needs to be made.
- Chrome Web Store isn't live yet, so the CTA points at the GitHub repo for now — swap it
  once published.
- License isn't declared in `package.json` — needed before the FAQ can truthfully answer
  "is this open source?"
- Real domain name for the landing page isn't decided.

## Decisions already made

- **CTA target:** links to the GitHub repo (no Chrome Web Store listing yet).
- **Visuals:** AI-generated hero/section art (no real product screenshots or logo exist
  yet).
- **Stack:** Next.js + Tailwind (App Router, static single page, deploys well to Vercel).

---

## 1. Product summary

- **Name:** AI Compose Assistant
- **One-liner:** *An AI writing assistant inside every input field on the web.*
- **Elevator pitch:** Instead of switching tabs to ChatGPT, writing a draft, and pasting it
  back, you focus a field on any site, type or dictate a rough version, pick from several
  real rewrites, and it's inserted for you — with your own API key, and nothing ever
  stored in the cloud.
- **Target user:** anyone who writes a lot of short-to-medium messages across many sites —
  sales/recruiting outreach on LinkedIn, support replies, Slack messages, email — and wants
  Grammarly-style help without a subscription or a new tab.
- **Key differentiators to lean on in copy:** works on *any* site (not just one), BYO key
  across 4 providers (no subscription, no markup), fully local storage (privacy pitch), and
  real insertion that doesn't break rich editors.

## 2. Feature inventory & conversion order

Ordered for the funnel: breadth/hook first, then the mechanics that build credibility, then
the trust-closer (privacy) right before the final CTA.

| # | Feature | One-line hook | Section it lives in |
|---|---|---|---|
| 1 | Works everywhere | LinkedIn, Gmail, X, Slack, and any form — one tool, not a per-site plugin | Hero + "Works everywhere" strip |
| 2 | Bubble on focus + shortcut | No copy-paste to ChatGPT; `Cmd/Ctrl+Shift+K` opens it without touching the mouse | How it works, step 1 |
| 3 | Type or dictate | Built-in mic dictation, filler words cleaned up automatically | How it works, step 2 / Features grid |
| 4 | Multiple real variants | Not synonym-swaps — genuinely different takes, plus editable tone presets and one-off instructions | Features grid (headline feature) |
| 5 | Insert that actually works | Works in rich editors (Quill/Draft.js/Lexical) without breaking Enter-to-send | Features grid |
| 6 | Context profiles | Save reusable reference text once (bio, product facts) and toggle it into any rewrite | Deep-dive section |
| 7 | Chat sessions | Have a longer back-and-forth with the AI, save it, reuse it as context later | Deep-dive section |
| 8 | Local history | Every draft searchable, pinnable, reusable — never leaves the device | Features grid |
| 9 | Bring your own key | Choice of OpenAI, Gemini, Claude, DeepSeek; free-text model field | Providers strip |
| 10 | Privacy by design | No backend server; only the provider you chose ever sees a draft | Dedicated Privacy section (trust-closer, just before final CTA) |

## 3. Page architecture (single page, top to bottom)

1. **Nav** (sticky) — wordmark, links to `#features` `#how-it-works` `#privacy` `#faq`,
   GitHub icon link, primary button "View on GitHub"
2. **Hero** — headline + subheadline (copy below), two CTAs (`View on GitHub` primary,
   `See how it works` secondary → scrolls to step 2), hero illustration (browser mockup
   with the compose bubble open)
3. **Works-everywhere strip** — small logo/wordmark row: LinkedIn, Gmail, X, Slack, "+ any
   input field" — establishes breadth immediately after the hero
4. **How it works** — 4-step horizontal (stacks to vertical on mobile): Focus a field →
   Type or dictate → Pick a rewrite → It's inserted
5. **Features grid** — 6 cards (variants, tone presets, real insertion, dictation, history,
   custom instructions), 3 columns desktop / 2 tablet / 1 mobile, icon + title + 1-sentence
   body each
6. **Deep-dive: Context profiles & Chat sessions** — two alternating image/text rows (image
   left/text right, then flipped), each with its own illustration
7. **Providers strip** — "Bring your own key" headline, 4 provider marks (OpenAI, Gemini,
   Claude, DeepSeek), one line about no subscription/no markup
8. **Privacy section** — visually distinct (dark background), 3 trust bullets pulled from
   the README's "decisions" (network calls never leave the background worker / real
   insertion never touches page JS trust boundary / mic is a single-origin grant), closing
   line: "Nothing is stored anywhere but this computer."
9. **FAQ** — accordion, 6 questions (content below)
10. **Final CTA banner** — restates the one-liner, single "View on GitHub" button
11. **Footer** — wordmark, GitHub link, lightweight — no fake social links

## 4. Next.js project structure

```
/app
  layout.tsx        # metadata, fonts, <html>
  page.tsx           # composes all sections in order
  globals.css
/components
  /sections
    Nav.tsx
    Hero.tsx
    WorksEverywhere.tsx
    HowItWorks.tsx
    FeaturesGrid.tsx
    DeepDive.tsx           # reusable, takes props for the 2 alternating rows
    Providers.tsx
    Privacy.tsx
    Faq.tsx
    FinalCta.tsx
    Footer.tsx
  /ui
    Button.tsx
    Card.tsx
    AccordionItem.tsx
    IconBadge.tsx
/lib
  content.ts         # single source of truth: features[], faq[], steps[] arrays
/public
  /images             # see asset list below
  favicon.ico
  og-image.png
```

Content lives in `lib/content.ts` as typed arrays so copy edits never touch JSX.

## 5. Design system

- **Type:** Geist Sans (next/font, pairs naturally with a Next.js/Vercel deploy) for
  headings and body; Geist Mono only for any code-like snippet (e.g. the keyboard shortcut
  badge `Cmd+Shift+K`).
- **Color tokens** (Tailwind theme extension):
  - `background`: `#0B0B0F` (privacy section, footer) / `#FFFFFF` (default sections)
  - `foreground`: `#0B0B0F` on light, `#F5F5F7` on dark
  - `brand-500` (primary accent): `#6366F1` (indigo) — buttons, links, icon badges
  - `brand-400`/`brand-600`: hover/active states
  - `muted`: `#6B7280` for subheadlines/body text on light sections
  - `surface`: `#F8F8FB` for card backgrounds on light sections
- **Container:** max-width `1200px`, horizontal padding `1.5rem` mobile / `2rem` desktop
- **Section spacing:** `py-20` desktop / `py-12` mobile between major sections
- **Breakpoints:** Tailwind defaults — stack to 1 column below `sm` (640px), 2 columns
  `sm`–`lg`, full layout at `lg` (1024px)+
- **Radius/shadow:** `rounded-2xl` cards, soft shadow only on hover (keep flat/static by
  default — avoids a dated "SaaS template" look)

## 6. Image asset list (AI-generated art)

Each needs to be generated once branding is picked and dropped into `/public/images`.
Suggested prompt direction for each (consistent style: flat vector illustration, indigo/
violet accent on white or dark, soft gradients, no photorealism):

1. **hero.png** — Browser window mockup, a message compose box mid-focus with a small
   round "AI" bubble beside it and a compose panel showing 2-3 rewrite options; indigo
   accent, white background, isometric-flat style.
2. **step-focus.png / step-dictate.png / step-pick.png / step-insert.png** — 4 small
   matching icon-illustrations for the How-it-works row (a text field with cursor; a
   waveform/mic; a stack of 3 draft cards; an arrow inserting text into a field).
3. **context-profiles.png** — a small stack of labeled "chip" cards (e.g. "My bio",
   "Product facts") toggling onto a compose window.
4. **chat-sessions.png** — a chat bubble thread with a "saved" pin icon, feeding into a
   compose window with a dotted arrow.
5. **privacy.png** — a shield or lock icon over a single laptop, explicitly *no* cloud icon
   present (a crossed-out cloud is an option) — reinforces "stays on this device."
6. **og-image.png** (1200×630) — hero illustration + product name, used for social share
   meta only.
7. **favicon** — simple monogram/mark derived from the hero bubble motif (e.g. a rounded
   chat-bubble with a small spark/cursor) — needed since no logo currently exists anywhere
   in the extension repo either.

Small feature-grid icons (page section 5) should NOT be full illustrations — use an icon
library (`lucide-react`) for those 6 cards to keep the page fast and consistent; reserve
generated art for hero, how-it-works, the 2 deep-dive rows, and privacy.

## 7. Copy blocks (ready to paste into `lib/content.ts`)

**Hero**
- Headline: "An AI writing assistant inside every input field on the web."
- Subheadline: "Stop switching to ChatGPT and pasting things back. Type or dictate a rough
  draft on any site, pick a real rewrite, and it's inserted — with your own API key, and
  nothing stored in the cloud."
- Primary CTA: "View on GitHub" — Secondary CTA: "See how it works"

**Privacy section**
- Headline: "Nothing leaves your computer but the draft."
- Body: "There's no backend server. Your API key, settings, and history live in your
  browser's local storage. The only outbound request is to the AI provider you chose —
  and it only happens when you ask for a rewrite."

**Final CTA**
- Headline: "Write faster, everywhere you already work."
- Body: "Free, open, and yours — bring your own API key and go."
- Button: "View on GitHub"

## 8. FAQ content

1. **Is my data sent anywhere?** — Only to the AI provider you configure, and only when you
   request a rewrite. Everything else (settings, history, key) stays in local browser
   storage on your device.
2. **Which AI providers are supported?** — OpenAI, Google Gemini, Anthropic Claude, and
   DeepSeek. You bring your own API key for whichever you prefer.
3. **Does it cost anything beyond my API key?** — No subscription or markup — you pay your
   provider directly, at their normal rates. Default models are each provider's cheap/fast
   tier.
4. **Does it work on every website?** — Yes, any editable text field on any site, including
   rich editors like Gmail, Slack, and LinkedIn's message composer. A few restricted
   surfaces (`chrome://` pages, the Web Store, PDF viewers) are blocked by Chrome itself.
5. **Can I use my voice instead of typing?** — Yes — dictation runs in an isolated
   extension frame, so you grant microphone access once, not per site.
6. **Is this open source?** *(confirm license before publishing — not yet declared in the
   extension repo)*

## 9. SEO / deployment notes

- `app/layout.tsx`: title, meta description (reuse the one-liner), OG image
  (`/public/og-image.png`), theme-color matching `brand-500`.
- Deploy target: Vercel (zero-config for Next.js). Static export is a fallback if a
  non-Vercel host is preferred.
- No analytics wired up by default; Vercel Analytics or Plausible are reasonable later
  add-ons, not needed for launch.