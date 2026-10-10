import { Languages } from "lucide-react";
import { LANGUAGES, LANGUAGE_LABELS, useLanguage, type Language } from "../i18n";
import { cn } from "../lib/cn";

export function LanguageSwitcher({ className, showIcon = true }: { className?: string; showIcon?: boolean }) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      {showIcon && <Languages className="hidden h-4 w-4 shrink-0 text-gold-light/80 sm:block" aria-hidden="true" />}
      <div className="flex items-center gap-0.5" role="group" aria-label={t("language")}>
        {LANGUAGES.map((code) => {
          const active = code === language;
          return (
            <button
              key={code}
              type="button"
              onClick={() => setLanguage(code as Language)}
              aria-pressed={active}
              className={cn(
                "min-h-8 min-w-9 rounded-full px-2 text-[10px] font-semibold uppercase tracking-[0.14em] transition",
                active
                  ? "bg-gold text-ink"
                  : "text-gold-light/70 hover:bg-gold-veil hover:text-gold-bright",
              )}
            >
              {LANGUAGE_LABELS[code]}
            </button>
          );
        })}
      </div>
    </div>
  );
}
