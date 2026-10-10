
import { Phone } from "lucide-react";
import { useLanguage, type TranslationKey } from "../i18n";
import { cn } from "../lib/cn";
import {Link} from "react-router";


interface ContactButtonProps {
  labelKey?: TranslationKey;
  variant?: "gold" | "solid";
  iconOnly?: boolean;
  className?: string;
}

const variants = {
  gold: "border-gold/45 bg-gold-veil text-gold-light hover:border-gold hover:bg-gold-veil-strong hover:text-gold-bright",
  solid: "border-gold bg-gold text-ink hover:border-gold-bright hover:bg-gold-bright",
} as const;


export function ContactButton({ labelKey = "contact", variant = "gold", iconOnly, className }: ContactButtonProps) {
  const { t } = useLanguage();

  return (

    <Link
        to="/contact"
        className={cn(
                "group relative inline-flex min-h-11 items-center justify-center gap-2 overflow-hidden border px-4 text-[10px] font-semibold uppercase tracking-[0.18em] transition duration-300 active:scale-[0.97]",
                variants[variant],
                className,
            )}
        >
            <span
                className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-gold/25 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]"
                aria-hidden="true"
            />
            <Phone className="relative h-4 w-4 shrink-0" />
            <span className={iconOnly ? "sr-only sm:not-sr-only" : "hidden sm:inline"}>{t(labelKey)}</span>
    </Link>

  );
}
