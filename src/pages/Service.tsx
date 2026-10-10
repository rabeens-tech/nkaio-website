import { useLocation } from "react-router";
import { asset } from "../config";
import { SERVICE_CONTENT, SERVICE_STEPS } from "../content/services";
import { useLanguage } from "../i18n";
import { getRoute, siblingsOf } from "../routes";
import { ActionLink } from "../components/ActionLink";
import { BookingButton } from "../components/BookingButton";
import { Flourish } from "../components/Ornaments";
import { PageHero } from "../components/PageHero";

export default function Service() {
  const { pathname } = useLocation();
  const { t } = useLanguage();
  const copy = SERVICE_CONTENT[pathname] ?? SERVICE_CONTENT["/nails"];
  const route = getRoute(pathname);
  const siblings = siblingsOf(pathname);

  return (
    <>
      <PageHero
        eyebrow={t("serviceEyebrow")}
        title={t(copy.title)}
        icon={route ? asset(route.icon) : undefined}
        aside={
          <>
            <BookingButton />
            <ActionLink to="/contact" label={t("contact")} />
          </>
        }
      />

      <section className="bg-ink">
        <div className="shell py-16 sm:py-24">
          <p className="max-w-2xl text-lg leading-8 text-bone/75">{t(copy.intro)}</p>
          <p className="mt-7 text-[10px] font-medium uppercase tracking-[0.2em] text-gold-light/85">{t(copy.note)}</p>

          <Flourish className="my-12 max-w-sm" />

          <ol className="grid gap-10 border-t border-gold-hairline pt-10 sm:grid-cols-3 sm:gap-8">
            {SERVICE_STEPS.map(([number, title, description]) => (
              <li key={number} className="relative border-l border-gold/45 pl-6">
                <span
                  className="absolute -left-[3px] top-0 h-1.5 w-1.5 -translate-y-1/2 rotate-45 bg-gold"
                  aria-hidden="true"
                />
                <span className="text-[10px] tracking-[0.2em] text-gold/80">{number}</span>
                <h2 className="mt-4 font-gothic text-2xl text-gold-light">{t(title)}</h2>
                <p className="mt-2 max-w-xs text-sm leading-7 text-bone/60">{t(description)}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14 flex flex-wrap gap-3">
            <ActionLink to="/services" label={t("viewAllServices")} variant="solid" />
            <ActionLink to="/contact" label={t("askAboutService")} withArrow />
          </div>
        </div>
      </section>

      {siblings.length > 0 && (
        <section className="border-t border-gold-hairline bg-ink-soft">
          <div className="shell py-14 sm:py-20">
            <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-gold">{t("moreServices")}</p>

            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:gap-8">
              {siblings.map((path) => {
                const sibling = getRoute(path);
                const content = SERVICE_CONTENT[path];
                if (!sibling || !content) return null;

                return (
                  <li key={path}>
                    <ActionLink to={path} label={t(sibling.labelKey)} className="w-full justify-between" withArrow />
                    <p className="mt-3 text-sm leading-7 text-bone/60">{t(content.title)}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
