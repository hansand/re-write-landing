# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router) + Tailwind CSS, static single page. Deploy target: Vercel (static export as fallback for non-Vercel hosts).

## Users

Anyone who writes a lot of short-to-medium messages across many sites — sales/recruiting outreach on LinkedIn, support replies, Slack messages, email — and wants Grammarly-style writing help without a subscription or a new tab.

## Product Purpose

AI Compose Assistant is a browser extension that puts an AI writing assistant inside every input field on the web. Instead of switching tabs to ChatGPT, drafting there, and pasting the result back, the user focuses a field on any site, types or dictates a rough version, picks from several real rewrites, and it's inserted directly.

## Positioning

Works on *any* site (not a per-site plugin), bring-your-own API key across 4 providers (no subscription, no markup), fully local storage (nothing stored in the cloud), and real insertion that works even inside rich editors (Quill/Draft.js/Lexical) without breaking Enter-to-send behavior.

## Operating Context

- Bubble appears on focusing an editable field; `Cmd/Ctrl+Shift+K` opens it via keyboard.
- User can type or dictate (built-in mic dictation with filler-word cleanup, isolated extension frame so mic permission is granted once, not per site).
- User picks from multiple genuinely different rewrite variants, with editable tone presets and one-off instructions.
- Context profiles: reusable reference text (bio, product facts) saved once and toggled into any rewrite.
- Chat sessions: longer back-and-forth with the AI, savable and reusable as later context.
- Local history: every draft searchable, pinnable, reusable, device-only.
- A few restricted Chrome surfaces (`chrome://` pages, the Web Store, PDF viewers) are blocked by Chrome itself, not by the extension.

## Capabilities and Constraints

- Supported providers: OpenAI, Google Gemini, Anthropic Claude, DeepSeek — user supplies their own API key and a free-text model field; default models are each provider's cheap/fast tier.
- No backend server: API key, settings, and history live in the browser's local storage. The only outbound network call goes to the provider the user configured, and only when a rewrite is requested.
- No subscription or markup — user pays their chosen provider directly.
- Chrome Web Store listing is not live yet — CTAs point at the GitHub repo instead: https://github.com/sacsand/re-write.
- License is undecided — the FAQ's "is this open source?" answer ships as an explicit TBD placeholder.
- Real domain name for the landing page is not yet decided.
- No product screenshots or logo exist yet. Illustration is hand-built inline SVG (flat vector, plum accent, no photorealism) in place of AI-generated art, since no image-generation tool is available for this build.

## Brand Commitments

- Name: AI Compose Assistant.
- One-liner: "An AI writing assistant inside every input field on the web."
- No wordmark/logo exists yet; a bubble/spark monogram concept has been proposed but not finalized.

## Evidence on Hand

None — no real product screenshots, testimonials, press, or case studies exist yet. Do not fabricate any of these; illustrations stand in for real screenshots.

## Product Principles

- Breadth first: establish "works everywhere" before any mechanic, since that's the core hook.
- Privacy is the trust-closer: place it right before the final CTA, not buried mid-page.
- Show real mechanism, not generic SaaS claims — insertion into rich editors and BYO-key are differentiators competitors can't casually copy.
- Keep the page static and fast; no backend, no auth, no accounts.
- Never invent product facts, screenshots, or proof beyond what's confirmed here.
