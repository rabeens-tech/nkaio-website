import { useLocation } from "react-router";
import { asset } from "../config";
import { SERVICE_STEPS } from "../content/services";
import { useLanguage } from "../i18n";
import { getRoute } from "../routes";
import { ActionLink } from "../components/ActionLink";
import { BookingButton } from "../components/BookingButton";
import { Flourish } from "../components/Ornaments";
import { PageHero } from "../components/PageHero";
import { StudioInfo } from "../components/StudioInfo";

export default function Studio() {
  const { pathname } = useLocation();
  const { t } = useLanguage();
  const isBar = pathname === "/bar";
  const route = getRoute(pathname);

  return (
    <>
      <PageHero
        eyebrow={t("studioEyebrow")}
        title={isBar ? t("barTitle") : t("doctorTitle")}
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
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="max-w-2xl text-lg leading-8 text-bone/75">{t("doctorDescription")}</p>

              <Flourish className="my-10 max-w-xs" />

              <ol className="grid gap-8">
                {SERVICE_STEPS.map(([number, title, description]) => (
                  <li key={number} className="border-l border-gold/45 pl-6">
                    <span className="text-[10px] tracking-[0.2em] text-gold/80">{number}</span>
                    <h2 className="mt-3 font-gothic text-2xl text-gold-light">{t(title)}</h2>
                    <p className="mt-2 max-w-md text-sm leading-7 text-bone/60">{t(description)}</p>
                  </li>
                ))}
              </ol>

              <div className="mt-12">
                <ActionLink to="/contact" label={t("contact")} withArrow />
              </div>
            </div>

            <StudioInfo className="h-fit lg:sticky lg:top-28" />
          </div>
        </div>
      </section>
    </>
  );
}
