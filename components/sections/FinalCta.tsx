import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GITHUB_URL } from "@/lib/content";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-brand-600 py-20 text-center sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(255,255,255,0.18),transparent)]"
      />
      <Container className="relative">
        <h2 className="balance mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Write faster, everywhere you already work.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-lg text-white/80">
          Free, open, and yours — bring your own API key and go.
        </p>
        <div className="mt-9">
          <Button href={GITHUB_URL} target="_blank" rel="noreferrer" variant="onBrand">
            View on GitHub
          </Button>
        </div>
      </Container>
    </section>
  );
}
