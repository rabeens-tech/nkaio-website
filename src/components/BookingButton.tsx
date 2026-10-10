import { useState } from "react";
import { Drawer } from "vaul";
import { Calendar, X } from "lucide-react";
import { BOOKING } from "../config";
import { useLanguage, type TranslationKey } from "../i18n";
import { cn } from "../lib/cn";

interface BookingButtonProps {
  labelKey?: TranslationKey;
  variant?: "gold" | "solid";
  iconOnly?: boolean;
  className?: string;
}

const variants = {
  gold: "border-gold/45 bg-gold-veil text-gold-light hover:border-gold hover:bg-gold-veil-strong hover:text-gold-bright",
  solid: "border-gold bg-gold text-ink hover:border-gold-bright hover:bg-gold-bright",
} as const;

export function BookingButton({ labelKey = "scheduleSession", variant = "gold", iconOnly, className }: BookingButtonProps) {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <Drawer.Root open={open} onOpenChange={setOpen}>
      <Drawer.Trigger asChild>
        <button
          className={cn(
            "group relative inline-flex min-h-11 items-center justify-center gap-2 overflow-hidden border px-4 text-[10px] font-semibold uppercase tracking-[0.18em] transition duration-300 active:scale-[0.97]",
            variants[variant],
            className,
          )}
          aria-label={t(labelKey)}
        >
          <span
            className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-gold/25 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]"
            aria-hidden="true"
          />
          <Calendar className="relative h-4 w-4 shrink-0" />
          <span className={iconOnly ? "sr-only sm:not-sr-only" : "hidden sm:inline"}>{t(labelKey)}</span>
        </button>
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-90 bg-black/80 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <Drawer.Content className="fixed inset-x-0 bottom-0 z-100 flex h-[92dvh] flex-col border-t border-gold-hairline bg-ink-soft outline-none">
          <div className="mx-auto mt-3 h-1 w-10 shrink-0 rounded-full bg-gold/40" />

          <div className="flex h-16 shrink-0 items-center justify-between border-b border-gold-hairline px-5">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-gold">{t("appointment")}</p>
              <Drawer.Title className="mt-0.5 font-gothic text-xl text-gold-light">{t("bookYourVisit")}</Drawer.Title>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-hairline text-gold-light transition hover:bg-gold-veil-strong"
              aria-label={t("closeBooking")}
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <iframe
            src={BOOKING.calendlyUrl}
            title={t("bookingFrameTitle")}
            className="w-full flex-1 border-0"
            loading="lazy"
          />
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
