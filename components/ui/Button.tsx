import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "onDark" | "onBrand";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 focus-visible:outline-brand-600 shadow-[0_1px_2px_rgba(11,11,15,0.06)] hover:shadow-[0_8px_20px_-6px_rgba(150,54,129,0.55)]",
  secondary:
    "bg-transparent text-ink ring-1 ring-inset ring-hairline hover:ring-ink/30 hover:bg-ink/[0.03] focus-visible:outline-ink",
  onDark:
    "bg-white/10 text-dark-fg ring-1 ring-inset ring-white/15 hover:bg-white/15 hover:ring-white/25 focus-visible:outline-white",
  onBrand:
    "bg-white text-brand-600 hover:bg-white/90 shadow-[0_1px_2px_rgba(11,11,15,0.08)] focus-visible:outline-white",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-[background-color,box-shadow,ring-color] duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2";

type Props = ComponentPropsWithoutRef<typeof Link> & {
  variant?: Variant;
};

export function Button({ variant = "primary", className = "", ...props }: Props) {
  return <Link className={`${base} ${variantClasses[variant]} ${className}`} {...props} />;
}
