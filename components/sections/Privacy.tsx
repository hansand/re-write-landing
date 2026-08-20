import { Lock, ServerOff, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PrivacyIllustration } from "@/components/illustrations/PrivacyIllustration";
import { privacyPoints } from "@/lib/content";

const icons = [ServerOff, ShieldCheck, Lock];

export function Privacy() {
  return (
    <section id="privacy" className="bg-dark py-20 text-dark-fg sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <Reveal variant="scale" className="order-2 lg:order-1">
          <PrivacyIllustration className="mx-auto w-full max-w-[380px]" />
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <h2 className="balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Nothing leaves your computer but the draft.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-dark-muted">
              There&apos;s no backend server. Your API key, settings, and history live in your
              browser&apos;s local storage. The only outbound request is to the AI provider you
              chose — and it only happens when you ask for a rewrite.
            </p>
          </Reveal>

          <ul className="mt-10 space-y-6">
            {privacyPoints.map((point, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={point.title} as="li" variant="up-sm" delayMs={i * 100} className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/8 ring-1 ring-white/10">
                    <Icon className="size-5 text-brand-400" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium text-dark-fg">{point.title}</p>
                    <p className="mt-1 text-sm text-dark-muted">{point.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </ul>

          <Reveal delayMs={100}>
            <p className="mt-10 border-t border-dark-hairline pt-8 text-lg font-medium text-dark-fg">
              Nothing is stored anywhere but this computer.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
