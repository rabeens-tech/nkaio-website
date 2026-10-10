import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { cn } from "../lib/cn";

interface Props {
  to: string;
  label: string;
  className?: string;
  variant?: "solid" | "gold" | "outline";
  withArrow?: boolean;
}

const variants = {
  solid: "border-gold bg-gold text-ink hover:border-gold-bright hover:bg-gold-bright",
  gold: "border-gold/45 bg-gold-veil text-gold-light hover:border-gold hover:bg-gold-veil-strong hover:text-gold-bright",
  outline: "border-bone/15 bg-transparent text-bone/80 hover:border-gold/50 hover:text-gold-bright",
} as const;

export function ActionLink({ to, label, className, variant = "gold", withArrow }: Props) {
  return (
    <Link
      to={to}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-2.5 border px-6 text-[11px] font-semibold uppercase tracking-[0.18em] transition duration-300",
        variants[variant],
        className,
      )}
    >
      {label}
      {withArrow && <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </Link>
  );
}
