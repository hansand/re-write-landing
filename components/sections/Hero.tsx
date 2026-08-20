import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroIllustration } from "@/components/illustrations/HeroIllustration";
import { GITHUB_URL } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-brand-500/10 blur-3xl"
      />
      <Container className="relative grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <div className="rise-in">
          <div className="relative max-w-xl">
            <h1 className="rewrite-reveal balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              An AI writing assistant inside every input field on the web.
            </h1>
            <span
              aria-hidden="true"
              className="rewrite-caret pointer-events-none absolute inset-y-[0.05em] left-0 w-[3px] rounded-full bg-brand-500 shadow-[0_0_12px_rgba(99,102,241,0.55)]"
            />
          </div>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            Stop switching to ChatGPT and pasting things back. Type or dictate a rough draft
            on any site, pick a real rewrite, and it&apos;s inserted — with your own API key,
            and nothing stored in the cloud.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href={GITHUB_URL} target="_blank" rel="noreferrer">
              View on GitHub
            </Button>
            <Button href="#how-it-works" variant="secondary">
              See how it works
            </Button>
          </div>

          <div className="mt-10 inline-flex items-center gap-2 text-sm text-muted">
            <span>Open it anywhere with</span>
            <kbd className="rounded-md border border-hairline bg-surface px-2 py-1 font-mono text-xs text-ink">
              Cmd/Ctrl+Shift+K
            </kbd>
          </div>
        </div>

        <div className="rise-in" style={{ animationDelay: "150ms" }}>
          <HeroIllustration className="mx-auto w-full max-w-[560px]" />
        </div>
      </Container>
    </section>
  );
}
