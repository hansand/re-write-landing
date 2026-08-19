import { StepIcon } from "@/components/illustrations/StepIcon";
import { Container } from "@/components/ui/Container";
import { steps } from "@/lib/content";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <h2 className="balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            From rough draft to inserted, in four steps.
          </h2>
          <p className="mt-4 text-lg text-muted">
            No tab-switching, no copy-paste — the whole loop happens in the field you&apos;re
            already typing in.
          </p>
        </div>

        <ol className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.id} className="relative">
              {i < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="absolute top-8 left-[calc(100%-1rem)] hidden h-px w-[calc(100%-2rem)] bg-hairline lg:block"
                />
              )}
              <div className="flex items-center gap-4">
                <StepIcon kind={step.id as "focus" | "dictate" | "pick" | "insert"} />
                <span className="text-sm font-medium text-muted">0{i + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
