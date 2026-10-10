import { Outlet } from "react-router";
import { useLanguage } from "../i18n";
import { CookieConsent } from "./CookieConsent";
import { ErrorBoundary } from "./ErrorBoundary";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SomethingWentWrong } from "./SomethingWentWrong";

export function SiteLayout() {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-[100svh] flex-col bg-ink">
      <a
        href="#main"
        className="sr-only z-100 focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:inline-flex focus:min-h-11 focus:items-center focus:border focus:border-gold/50 focus:bg-ink focus:px-4 focus:text-[11px] focus:font-semibold focus:uppercase focus:tracking-[0.18em] focus:text-gold-light"
      >
        {t("skipToContent")}
      </a>

      <Header />

      <main id="main" className="flex-1">
        <ErrorBoundary fallback={<SomethingWentWrong />}>
          <Outlet />
        </ErrorBoundary>
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
}
