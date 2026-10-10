import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Cookie, ShieldCheck, X } from "lucide-react";
import { useLanguage } from "../i18n";

const STORAGE_KEY = "nkaio_cookie_consent";

export function CookieConsent() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      return;
    }
    const timer = window.setTimeout(() => setVisible(true), 900);
    return () => window.clearTimeout(timer);
  }, []);

  const dismiss = (choice: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // Consent choice stays session-only when storage is unavailable.
    }
    setLeaving(true);
    window.setTimeout(() => setVisible(false), 400);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={t("cookieDialog")}
      className={`fixed bottom-4 left-1/2 z-200 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 transition-all duration-500 ease-out ${
        leaving ? "translate-y-6 opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="grain relative overflow-hidden border border-gold-hairline bg-ink-soft/92 px-5 py-4 shadow-veil backdrop-blur-xl">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" aria-hidden="true" />

        <button
          onClick={() => dismiss("declined")}
          className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full text-bone/35 transition hover:text-gold-light"
          aria-label={t("close")}
        >
          <X className="h-3.5 w-3.5" />
        </button>

        <div className="flex items-start gap-3.5">
          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-gold-veil">
            <Cookie className="h-4 w-4 text-gold-light" />
          </div>

          <div className="flex-1 pr-4">
            <p className="font-gothic text-base text-gold-light">{t("cookieTitle")}</p>
            <p className="mt-1 text-[11px] leading-relaxed text-bone/55">
              {t("cookieDescription")}{" "}
              <Link to="/privacy" className="text-gold-light underline-offset-2 hover:underline">
                {t("privacyPolicy")}
              </Link>
              .
            </p>

            <div className="mt-3.5 flex items-center gap-2">
              <button
                onClick={() => dismiss("accepted")}
                className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-1.5 text-[11px] font-semibold text-ink transition hover:bg-gold-bright active:scale-95"
              >
                <ShieldCheck className="h-3 w-3" />
                {t("acceptAll")}
              </button>
              <button
                onClick={() => dismiss("declined")}
                className="rounded-full border border-gold-hairline px-4 py-1.5 text-[11px] font-medium text-bone/65 transition hover:bg-gold-veil hover:text-gold-light active:scale-95"
              >
                {t("decline")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
