import type { ReactNode } from "react";
import { cn } from "../lib/cn";
import { Flourish } from "./Ornaments";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  accent?: string;
  lead?: string;
  aside?: ReactNode;
  icon?: string;
  className?: string;
}

export function PageHero({ eyebrow, title, accent, lead, aside, icon, className }: PageHeroProps) {
  return (
    <section className={cn("relative isolate overflow-hidden border-b border-gold-hairline bg-ink", className)}>
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "radial-gradient(120% 90% at 15% 0%, rgba(199,169,107,0.10), transparent 58%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
        aria-hidden="true"
      />

      {icon && (
        <div className="pointer-events-none absolute -right-10 top-8 -z-10 opacity-[0.07] lg:right-8 lg:top-1/2 lg:-translate-y-1/2 lg:opacity-[0.09]">
          <img src={icon} alt="" className="h-40 w-40 object-contain lg:h-72 lg:w-72" loading="lazy" />
        </div>
      )}

      <div className="shell relative pb-14 pt-28 sm:pb-16 sm:pt-36">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}

        <h1 className="mt-5 max-w-3xl font-gothic text-[clamp(2.75rem,10vw,5.5rem)] leading-[0.98] text-gilded">
          {title}
          {accent && <span className="text-gold-light"> {accent}</span>}
          <span className="text-gold">.</span>
        </h1>

        <Flourish className="mt-8 max-w-lg" />

        {(lead || aside) && (
          <div className="mt-8 grid gap-8 border-t border-gold-hairline pt-8 lg:grid-cols-[1.1fr_auto] lg:items-end">
            {lead && <p className="max-w-2xl text-base leading-8 text-bone/70">{lead}</p>}
            {aside && <div className="flex flex-wrap gap-3">{aside}</div>}
          </div>
        )}
      </div>
    </section>
  );
}
