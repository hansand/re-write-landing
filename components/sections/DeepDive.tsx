import type { ComponentType } from "react";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ChatSessionsIllustration } from "@/components/illustrations/ChatSessionsIllustration";
import { ContextProfilesIllustration } from "@/components/illustrations/ContextProfilesIllustration";
import { deepDives, type DeepDive } from "@/lib/content";

const illustrations: Record<string, ComponentType<{ className?: string }>> = {
  "context-profiles": ContextProfilesIllustration,
  "chat-sessions": ChatSessionsIllustration,
};

function DeepDiveRow({ item }: { item: DeepDive }) {
  const Illustration = illustrations[item.id];
  const imageFirst = item.imageSide === "left";

  return (
    <div className="grid items-center gap-12 py-16 first:pt-0 last:pb-0 lg:grid-cols-2 lg:gap-16">
      <Reveal variant="scale" className={imageFirst ? "lg:order-1" : "lg:order-2"}>
        <div className="rounded-2xl bg-surface p-6 sm:p-10">
          <Illustration className="mx-auto w-full max-w-[440px]" />
        </div>
      </Reveal>
      <Reveal delayMs={120} className={imageFirst ? "lg:order-2" : "lg:order-1"}>
        <h3 className="balance text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          <span className="sr-only">{item.eyebrow}: </span>
          {item.title}
        </h3>
        <p className="mt-4 text-lg text-muted">{item.body}</p>
        <ul className="mt-6 space-y-3">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <Check className="mt-1 size-4 shrink-0 text-brand-500" aria-hidden="true" />
              <span className="text-ink/85">{bullet}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}

export function DeepDive() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="divide-y divide-hairline">
          {deepDives.map((item) => (
            <DeepDiveRow key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
