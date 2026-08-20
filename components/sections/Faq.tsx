import { Container } from "@/components/ui/Container";
import { AccordionItem } from "@/components/ui/AccordionItem";
import { Reveal } from "@/components/ui/Reveal";
import { faq } from "@/lib/content";

export function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Questions, answered.
          </h2>
        </Reveal>

        <div className="mt-10">
          {faq.map((item, i) => (
            <Reveal key={item.question} variant="up-sm" delayMs={Math.min(i, 4) * 60}>
              <AccordionItem question={item.question} answer={item.answer} defaultOpen={i === 0} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
