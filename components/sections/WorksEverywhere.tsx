import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaSlack, FaXTwitter } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const marks = [
  { name: "LinkedIn", Icon: FaLinkedin },
  { name: "Gmail", Icon: SiGmail },
  { name: "X", Icon: FaXTwitter },
  { name: "Slack", Icon: FaSlack },
];

export function WorksEverywhere() {
  return (
    <section className="border-y border-hairline/70 bg-surface py-10">
      <Container>
        <Reveal variant="up-sm" className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <p className="text-sm font-medium text-muted">Works wherever you already write</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-9 gap-y-4">
            {marks.map(({ name, Icon }) => (
              <li key={name} className="flex items-center gap-2 text-ink/70">
                <Icon aria-hidden="true" className="size-5" />
                <span className="text-sm font-medium">{name}</span>
              </li>
            ))}
            <li className="text-sm font-medium text-brand-600">+ any input field</li>
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
