import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { asset } from "../config";
import { SERVICE_CONTENT } from "../content/services";
import { useLanguage } from "../i18n";
import { cn } from "../lib/cn";
import { getRoute, SERVICE_GROUPS, SERVICES_INDEX } from "../routes";
import { ActionLink } from "../components/ActionLink";
import { BookingButton } from "../components/BookingButton";
import { Flourish } from "../components/Ornaments";
import { PageHero } from "../components/PageHero";

export default function Services() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t("serviceEyebrow")}
        title={t("navServices")}
        lead={t("servicesIntro")}
        aside={
          <>
            <BookingButton />
            <ActionLink to="/contact" label={t("contact")} />
          </>
        }
      />

      {SERVICE_GROUPS.map((group, index) => (
        <section
          key={group.id}
          className={cn(
            "border-b border-gold-hairline",
            index % 2 === 0 ? "bg-ink" : "bg-ink-soft",
          )}
        >
          <div className="shell py-14 sm:py-20">
            <div className="flex items-baseline gap-5 border-b border-gold-hairline pb-5">
              <span className="font-gothic text-3xl text-gold/35 sm:text-4xl">{String(index + 1).padStart(2, "0")}</span>
              <h2 className="font-gothic text-3xl text-gilded sm:text-4xl">{t(group.labelKey)}</h2>
              <span className="h-px flex-1 bg-gold-hairline" aria-hidden="true" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-bone/40">
                {group.paths.length} {t(group.paths.length === 1 ? "serviceOne" : "serviceCount")}
              </span>
            </div>

            <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:gap-8">
              {group.paths.map((path) => {
                
                const route = getRoute(path);
                const copy = SERVICE_CONTENT[path];
                console.log("route", route, "copy", copy);
                if (!route || !copy) return null;
                
                return (
                  <li key={path}>
                    <Link
                      to={path}
                      className="panel grain group relative flex h-full flex-col p-6 transition duration-300 hover:border-gold/55 sm:p-8"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-gold/80">{t(route.labelKey)}</span>
                        <img
                          src={asset(route.icon)}
                          alt=""
                          loading="lazy"
                          className="icon-gold h-14 w-14 shrink-0 object-contain opacity-55 transition duration-500 group-hover:scale-110 group-hover:opacity-95"
                        />
                      </div>

                      <h3 className="mt-7 font-gothic text-3xl text-gold-light transition-colors group-hover:text-gold-bright">
                        {t(copy.title)}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-bone/65">{t(copy.intro)}</p>

                      <div className="mt-auto flex items-end justify-between gap-4 pt-7">
                        <span className="text-[10px] uppercase tracking-[0.16em] text-gold/75">{t(copy.note)}</span>
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-gold-hairline text-gold transition duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      ))}

      <section className="bg-ink">
        <div className="shell flex flex-col items-center py-16 text-center sm:py-24">
          <Flourish className="max-w-sm" />
          <p className="mt-10 max-w-xl font-gothic text-[clamp(1.4rem,4.5vw,2.25rem)] leading-snug text-gold-light">
            {t("servicesHelp")}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <ActionLink to={SERVICES_INDEX} label={t("viewAllServices")} variant="solid" />
            <ActionLink to="/contact" label={t("askAboutService")} />
          </div>
        </div>
      </section>
    </>
  );
}
