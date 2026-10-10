import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router";
import { BRAND, CONTACT, NAV_COLUMNS } from "../config";
import { useLanguage } from "../i18n";
import { getRoute } from "../routes";
import { Flourish } from "./Ornaments";
import { SocialRow } from "./SocialRow";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative isolate overflow-hidden border-t border-gold-hairline bg-ink-soft">
      <div
        className="pointer-events-none absolute inset-x-0 -top-40 h-80 opacity-70"
        style={{ background: "radial-gradient(60% 100% at 50% 100%, rgba(199,169,107,0.10), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="shell relative pb-8 pt-16 sm:pt-20">
        <div className="flex flex-col items-center gap-4 text-center">
          <img src={`${import.meta.env.BASE_URL}${BRAND.wordmark}`} alt={BRAND.name} className="h-9 w-auto object-contain drop-gold sm:h-11" />
          <Flourish className="max-w-sm" />
          <p className="max-w-md font-gothic text-xl leading-snug text-gold-light/90 sm:text-2xl">{t("footerTagline")}</p>
        </div>

        <div className="mt-14 grid gap-12 border-t border-gold-hairline pt-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-gold">{t("socialLinks")}</p>
            <SocialRow className="mt-5" />
          </div>

          {NAV_COLUMNS.map((column) => (
            <nav key={column.id} aria-label={t("footerNavigation")}>
              <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-gold">{t(column.labelKey)}</p>
              <ul className="mt-5 grid gap-3">
                {column.routes.map((path) => {
                  const route = getRoute(path);
                  if (!route) return null;
                  return (
                    <li key={path}>
                      <Link
                        to={path}
                        className="group inline-flex items-center gap-1.5 text-sm text-bone/70 transition hover:text-gold-bright"
                      >
                        {t(route.labelKey)}
                        <ArrowUpRight className="h-3.5 w-3.5 text-gold/70 opacity-0 transition group-hover:opacity-100" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          ))}

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-gold">{t("address")}</p>
            <div className="mt-5 grid gap-4 text-sm">
              <a href={CONTACT.mapsUrl} target="_blank" rel="noreferrer noopener" className="group flex items-start gap-3 text-bone/70 transition hover:text-gold-bright">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold" />
                <span className="leading-6">
                  {CONTACT.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  <span className="mt-1 block text-[10px] uppercase tracking-[0.18em] text-gold/80">{t("openInMaps")}</span>
                </span>
              </a>
              <a href={CONTACT.phoneHref} className="flex items-center gap-3 text-bone/70 transition hover:text-gold-bright">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                {CONTACT.phone}
              </a>
              <a href={CONTACT.emailHref} className="flex items-center gap-3 text-bone/70 transition hover:text-gold-bright">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                {CONTACT.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-3 border-t border-gold-hairline pt-6 text-center text-[11px] text-bone-muted/70 sm:flex-row sm:justify-between sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {BRAND.name}. {t("allRightsReserved")}
          </p>
          <Link to="/privacy" className="uppercase tracking-[0.18em] transition hover:text-gold-bright">
            {t("privacyPolicy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
