"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/illustrations/Logo";
import { GITHUB_URL, nav, product } from "@/lib/content";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline/70 bg-white/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link href="#top" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Logo className="size-7" />
          <span className="text-sm font-semibold tracking-tight text-ink">
            {product.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="AI Compose Assistant on GitHub"
            className="hidden text-muted transition-colors hover:text-ink sm:block"
          >
            <FaGithub className="size-5" />
          </Link>
          <div className="hidden sm:block">
            <Button href={GITHUB_URL} target="_blank" rel="noreferrer" className="px-5 py-2.5">
              View on GitHub
            </Button>
          </div>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex size-9 items-center justify-center rounded-lg text-ink transition-colors hover:bg-ink/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      <div
        id="mobile-nav"
        className="grid overflow-hidden border-t border-hairline/70 bg-white transition-[grid-template-rows] duration-300 ease-out md:hidden"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="min-h-0">
          <nav className="flex flex-col px-6 py-4" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-hairline/70 py-3 text-base text-ink last:border-none"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 sm:hidden">
              <Button href={GITHUB_URL} target="_blank" rel="noreferrer" className="w-full justify-center">
                View on GitHub
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
