import { cn } from "../lib/cn";

export function Flourish({ className }: { className?: string }) {
  return (
    <div className={cn("flex w-full items-center justify-center gap-3", className)} aria-hidden="true">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/45" />
      <svg viewBox="0 0 56 18" className="h-[18px] w-14 shrink-0 text-gold/70" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M28 1.5 38 9l-10 7.5L18 9z" />
        <path d="M28 4.6 34.4 9 28 13.4 21.6 9z" opacity=".45" />
        <path d="M2 9h11M43 9h11" strokeLinecap="round" />
        <circle cx="7.5" cy="9" r="1.3" fill="currentColor" stroke="none" />
        <circle cx="48.5" cy="9" r="1.3" fill="currentColor" stroke="none" />
      </svg>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/45" />
    </div>
  );
}

export function DropCap({ children, className }: { children: string; className?: string }) {
  return (
    <p className={cn("first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-gothic first-letter:text-[3.4em] first-letter:leading-[0.72] first-letter:text-gilded", className)}>
      {children}
    </p>
  );
}

export function CornerFlourish({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("h-6 w-6 text-gold/55", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      aria-hidden="true"
    >
      <path d="M1 20V1h19" />
      <path d="M1 30V12h18" opacity=".4" />
      <path d="M6 12 12 6" strokeLinecap="round" />
      <circle cx="17" cy="6" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Frame({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("panel relative grain", className)}>
      <CornerFlourish className="absolute left-3 top-3 -rotate-x-0" />
      <CornerFlourish className="absolute right-3 top-3 rotate-90" />
      <CornerFlourish className="absolute bottom-3 right-3 rotate-180" />
      <CornerFlourish className="absolute bottom-3 left-3 -rotate-90" />
      {children}
    </div>
  );
}
