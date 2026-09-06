import { useState, useEffect } from "react";
import { Cookie, X, ShieldCheck } from "lucide-react";

const STORAGE_KEY = "nkaio_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // small delay so it doesn't flash on first paint
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = (choice: "accepted" | "declined") => {
    localStorage.setItem(STORAGE_KEY, choice);
    setLeaving(true);
    setTimeout(() => setVisible(false), 400);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-4 left-1/2 z-[200] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 transition-all duration-400 ease-out ${
        leaving
          ? "translate-y-6 opacity-0"
          : "translate-y-0 opacity-100"
      }`}
      role="dialog"
      aria-label="Cookie consent"
    >
      {/* Glass card */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d10]/90 px-5 py-4 shadow-[0_8px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl">
        {/* Subtle gold gradient strip at top */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D6B77C]/60 to-transparent" />

        {/* Dismiss X */}
        <button
          onClick={() => dismiss("declined")}
          className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full text-white/30 transition hover:text-white/70"
          aria-label="Close"
        >
          <X className="h-3.5 w-3.5" />
        </button>

        <div className="flex items-start gap-3.5">
          {/* Icon */}
          <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#D6B77C]/10 border border-[#D6B77C]/20">
            <Cookie className="h-4 w-4 text-[#D6B77C]" />
          </div>

          <div className="flex-1 pr-4">
            <p className="text-[13px] font-semibold tracking-wide text-white">
              We use cookies
            </p>
            <p className="mt-0.5 text-[11px] leading-relaxed text-white/50">
              We use cookies to enhance your experience and analyse site traffic.
              By accepting, you agree to our{" "}
              <a
                href="/privacy"
                className="text-[#D6B77C] underline-offset-2 hover:underline"
              >
                Privacy Policy
              </a>
              .
            </p>

            {/* Actions */}
            <div className="mt-3 flex items-center gap-2">
              <button
                onClick={() => dismiss("accepted")}
                className="flex items-center gap-1.5 rounded-full bg-[#D6B77C] px-4 py-1.5 text-[11px] font-semibold text-[#0B0B0B] transition hover:bg-[#E2C990] active:scale-95"
              >
                <ShieldCheck className="h-3 w-3" />
                Accept all
              </button>
              <button
                onClick={() => dismiss("declined")}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[11px] font-medium text-white/60 transition hover:bg-white/10 hover:text-white active:scale-95"
              >
                Decline
              </button>
            </div>
          </div>
        </div>

        {/* Subtle gold gradient strip at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D6B77C]/20 to-transparent" />
      </div>
    </div>
  );
}
