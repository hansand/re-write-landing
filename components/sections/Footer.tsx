import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/illustrations/Logo";
import { GITHUB_URL, product } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-dark py-10 text-dark-muted">
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <Link href="#top" className="flex items-center gap-2">
          <Logo className="size-6" />
          <span className="text-sm font-medium text-dark-fg">{product.name}</span>
        </Link>

        <div className="flex items-center gap-6 text-sm">
          <span>&copy; {new Date().getFullYear()} {product.name}</span>
          <Link
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-dark-fg"
          >
            <FaGithub className="size-4" aria-hidden="true" />
            GitHub
          </Link>
        </div>
      </Container>
    </footer>
  );
}
