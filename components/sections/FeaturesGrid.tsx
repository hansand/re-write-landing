import type { LucideIcon } from "lucide-react";
import { History, Layers, Mic, Sliders, Target, Wand2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { features } from "@/lib/content";

const icons: Record<string, LucideIcon> = {
  layers: Layers,
  sliders: Sliders,
  target: Target,
  mic: Mic,
  history: History,
  wand: Wand2,
};

export function FeaturesGrid() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Built for real writing, not synonym-swaps.
          </h2>
          <p className="mt-4 text-lg text-muted">
            Every mechanic here exists because pasting into ChatGPT and back has a real cost —
            here&apos;s what replaces it.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = icons[feature.icon];
            const featured = i === 0;
            return (
              <Reveal
                key={feature.id}
                variant="up-sm"
                delayMs={(i % 3) * 80}
                className={`group rounded-2xl p-7 ${
                  featured
                    ? "bg-[linear-gradient(155deg,#EEF0FF,white_65%)] ring-1 ring-brand-500/15 hover:shadow-[0_16px_36px_-16px_rgba(150,54,129,0.35)]"
                    : "bg-surface hover:shadow-[0_16px_36px_-18px_rgba(11,11,15,0.16)]"
                }`}
              >
                <div
                  className={`flex size-11 items-center justify-center rounded-xl ${
                    featured ? "bg-brand-500 text-white" : "bg-white text-brand-500 ring-1 ring-hairline"
                  }`}
                >
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{feature.title}</h3>
                <p className="mt-2 text-muted">{feature.body}</p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
