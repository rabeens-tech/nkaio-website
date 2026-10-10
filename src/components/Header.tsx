import { useEffect, useState } from "react";
import { Drawer } from "vaul";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { Link, useLocation } from "react-router";
import { asset, BRAND, CONTACT } from "../config";
import { PRIMARY_NAV, SERVICES_INDEX } from "../routes";
import { useLanguage } from "../i18n";
import { cn } from "../lib/cn";
import { BookingButton } from "./BookingButton";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Flourish } from "./Ornaments";
import { ServicesDropdown } from "./ServicesDropdown";
import { ContactButton } from "./ContactButton";

export function Header() {
  const { pathname } = useLocation();
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const blended = pathname === "/" && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-60 transition-colors duration-500",
        blended ? "bg-transparent" : "border-b border-gold-hairline bg-ink/88 backdrop-blur-xl",
      )}
    >
      {blended && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 via-black/35 to-transparent" aria-hidden="true" />
      )}

      <div className="shell relative flex h-16 items-center justify-between gap-3 lg:h-20">
        {/* <div className="flex items-center gap-2 lg:hidden"> */}
        <div className="flex items-center gap-2">
          <Drawer.Root open={menuOpen} onOpenChange={setMenuOpen}>
            <Drawer.Trigger asChild>
              <button
                className="flex h-10 w-10 items-center justify-center border border-gold-hairline bg-gold-veil text-gold-light transition active:scale-95"
                aria-label={t("toggleMenu")}
              >
                <Menu className="h-5 w-5" />
              </button>
            </Drawer.Trigger>

            <Drawer.Portal>
              <Drawer.Overlay className="fixed inset-0 z-90 bg-black/70 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
              <Drawer.Content className="fixed inset-y-0 left-0 z-100 flex w-full max-w-[88vw] flex-col border-r border-gold-hairline bg-ink-soft outline-none">
                <div className="flex items-start justify-between border-b border-gold-hairline px-6 py-5">
                  <div>
                    <img src={asset(BRAND.wordmark)} alt={BRAND.name} className="h-20 w-auto max-w-[130px] object-contain object-bottom" />
                    <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.24em] text-bone-muted/60">{t("sidebarTagline")}</p>
                  </div>
                  <Drawer.Close asChild>
                    <button
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-hairline text-gold-light transition hover:bg-gold-veil-strong"
                      aria-label={t("closeNavigation")}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </Drawer.Close>
                </div>

                <Drawer.Title className="sr-only">{t("menuTitle")}</Drawer.Title>

                <nav aria-label={t("mainNavigation")} className="flex-1 overflow-y-auto px-6 py-6">
                  <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.26em] text-gold">{t("explore")}</p>
                  <ul>
                    <li>
                      <Link
                        to="/"
                        onClick={() => setMenuOpen(false)}
                        aria-current={pathname === "/" ? "page" : undefined}
                        className={cn(
                          "group flex min-h-14 items-center gap-3 border-b border-gold-hairline/60 py-2.5 transition-colors",
                          pathname === "/" ? "text-gold-bright" : "text-bone hover:text-gold-light",
                        )}
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-gold-veil">
                          <img src={asset("icons/home.png")} alt="" className="h-4 w-4 object-contain brightness-125" loading="lazy" />
                        </span>
                        <span className="flex-1 font-gothic text-xl">{t("navHome")}</span>
                        <ArrowUpRight className={cn("h-4 w-4 transition", pathname === "/" ? "text-gold-light" : "text-gold/50 opacity-0 group-hover:opacity-100")} />
                      </Link>
                    </li>

                    {PRIMARY_NAV.map((item) => {
                      const active = pathname === item.path;
                      return (
                        <li key={item.path}>
                          <Link
                            to={item.path}
                            onClick={() => setMenuOpen(false)}
                            aria-current={active ? "page" : undefined}
                            className={cn(
                              "group flex min-h-14 items-center gap-3 border-b border-gold-hairline/60 py-2.5 transition-colors",
                              active ? "text-gold-bright" : "text-bone hover:text-gold-light",
                            )}
                          >
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-gold-veil">
                              <img src={asset(item.icon)} alt="" className="h-4 w-4 object-contain brightness-125" loading="lazy" />
                            </span>
                            <span className="flex-1 font-gothic text-xl">{t(item.labelKey)}</span>
                            <ArrowUpRight className={cn("h-4 w-4 transition", active ? "text-gold-light" : "text-gold/50 opacity-0 group-hover:opacity-100")} />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>

                  <ServicesDropdown variant="list" onNavigate={() => setMenuOpen(false)} />
                </nav>

                <div className="space-y-4 border-t border-gold-hairline px-6 py-5">
                  <Flourish className="mb-1" />
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-bone-muted/60">{t("appointmentsEnquiries")}</p>
                      <a href={CONTACT.phoneHref} className="mt-1.5 inline-flex items-center gap-2 text-sm text-gold-light transition hover:text-gold-bright">
                        <Phone className="h-3.5 w-3.5" /> {CONTACT.phone}
                      </a>
                    </div>
                  </div>
                  <LanguageSwitcher showIcon={false} />
                  <BookingButton labelKey="scheduleSession" iconOnly />
                </div>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
        </div>

        <Link to="/" className="flex shrink-0 items-center gap-3" aria-label={BRAND.name}>
          <img src={asset(BRAND.wordmark)} alt={BRAND.name} className="h-7 w-auto max-w-[88px] object-contain object-left sm:h-8 sm:max-w-[132px]" />
        </Link>

        <nav aria-label={t("mainNavigation")} className="hidden flex-1 items-center justify-center gap-7 lg:flex">
          {/* <Link
            to="/"
            aria-current={pathname === "/" ? "page" : undefined}
            className={cn(
              "relative py-2 text-[10px] font-medium uppercase tracking-[0.18em] transition-colors",
              pathname === "/" ? "text-gold-bright" : "text-bone/70 hover:text-gold-light",
            )}
          >
            {t("navHome")}
            <span
              className={cn(
                "absolute inset-x-0 -bottom-0.5 h-px origin-left bg-gold transition-transform duration-300",
                pathname === "/" ? "scale-x-100" : "scale-x-0",
              )}
              aria-hidden="true"
            />
          </Link> */}

          {PRIMARY_NAV.map((item) =>
            item.path === SERVICES_INDEX ? (
              null
              // <ServicesDropdown key={item.path} variant="menu" />
            ) : (
              <Link
                key={item.path}
                to={item.path}
                aria-current={pathname === item.path ? "page" : undefined}
                className={cn(
                  "relative py-2 text-[10px] font-medium uppercase tracking-[0.18em] transition-colors",
                  pathname === item.path ? "text-gold-bright" : "text-bone/70 hover:text-gold-light",
                )}
              >
                {t(item.labelKey)}
                <span
                  className={cn(
                    "absolute inset-x-0 -bottom-0.5 h-px origin-left bg-gold transition-transform duration-300",
                    pathname === item.path ? "scale-x-100" : "scale-x-0",
                  )}
                  aria-hidden="true"
                />
              </Link>
            ),
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-2 lg:gap-3">
          <LanguageSwitcher className="hidden sm:flex" showIcon={false} />
          <BookingButton />
          <ContactButton />
          {/* <Link
            to="/contact"
            className="inline-flex min-h-11 items-center justify-center gap-2 border border-gold-hairline px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-bone/80 transition duration-300 hover:border-gold/60 hover:text-gold-bright sm:px-4"
          >
            {t("contact")}
          </Link> */}
        </div>
      </div>
    </header>
  );
}
