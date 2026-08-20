import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "AI Compose Assistant";
const description =
  "An AI writing assistant inside every input field on the web. Type or dictate a rough draft on any site, pick a real rewrite, and it's inserted — with your own API key, and nothing stored in the cloud.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s — ${title}`,
  },
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#6366f1",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {/*
          THESIS: One tool that lives inside every field you already use — proven by showing
          the compose bubble open mid-sentence in a real browser, not an abstract "AI beam".
          OWN-WORLD: Flat-front vector illustration (no axonometric tilt), indigo/violet
          (#6366F1) accent on white, soft gradients, no photorealism; Geist Sans throughout,
          Geist Mono only for the shortcut badge; rounded-2xl cards, flat by default, soft
          shadow only on hover.
          STORY: See the mechanism instantly -> scan the breadth of sites it works on -> walk
          the 4-step flow -> scan concrete differentiators -> trust the privacy model -> act.
          FIRST VIEWPORT: split hero, headline/subhead/CTAs left, flat-vector browser-window
          illustration right showing a focused field, the round AI bubble, and an open
          rewrite panel with variant cards.
          FORM: brief-pinned direction (LANDING_PAGE_SPEC.md §5) — restrained palette, one
          indigo accent, flat-vector illustration world. Concept-seed roll skipped: a
          brief-pinned direction beats the roll.
          FINISH: unreviewed and undocumented is unfinished; this build ends with the finish
          review, the verdict, and DESIGN.md.
        */}
        <noscript>
          <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
