import type { ComponentType } from "react";
import { TbBrandOpenai } from "react-icons/tb";
import { SiAnthropic, SiDeepseek, SiGooglegemini } from "react-icons/si";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { providers } from "@/lib/content";

const providerIcons: Record<string, ComponentType<{ className?: string }>> = {
  openai: TbBrandOpenai,
  gemini: SiGooglegemini,
  claude: SiAnthropic,
  deepseek: SiDeepseek,
};

export function Providers() {
  return (
    <section className="border-y border-hairline/70 bg-surface py-20 sm:py-24">
      <Container className="text-center">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Bring your own key.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-muted">
            No subscription, no markup — you pay your chosen provider directly, at their normal
            rates.
          </p>
        </Reveal>

        <ul className="mx-auto mt-12 flex max-w-2xl flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {providers.map((provider, i) => {
            const Icon = providerIcons[provider.id];
            return (
              <Reveal
                key={provider.id}
                as="li"
                variant="up-sm"
                delayMs={i * 80}
                className="flex items-center gap-2.5 text-ink"
              >
                <Icon aria-hidden="true" className="size-6" />
                <span className="text-base font-medium">{provider.name}</span>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
