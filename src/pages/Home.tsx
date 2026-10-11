// import { ArrowDown, ArrowUpRight } from "lucide-react";
// import { Link } from "react-router";
import { asset, HERO } from "../config";
import { useLanguage } from "../i18n";
import {  SERVICES_INDEX } from "../routes";
import { ActionLink } from "../components/ActionLink";
// import { BookingButton } from "../components/BookingButton";
import { Flourish } from "../components/Ornaments";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden ">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={asset(HERO.poster)}
          className="animate-drift absolute inset-0 -z-20 h-full w-full object-fill max-h-[100.33cqw] m-auto"
          aria-hidden="true"
        >
          <source src={asset(HERO.video)} type="video/mp4" />
        </video>

        {/* <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(9,9,9,0.95) 0%, rgba(9,9,9,0.74) 44%, rgba(9,9,9,0.28) 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "linear-gradient(0deg, #090909 1%, rgba(9,9,9,0.35) 30%, transparent 55%)" }}
          aria-hidden="true"
        />
        <div className="grain absolute inset-0 -z-10 opacity-60" aria-hidden="true" />

        <div className="shell flex flex-1 flex-col justify-end pb-14 pt-28 sm:pb-20">
          <p className="eyebrow animate-rise-in">
            <span className="h-px w-9 bg-gold/70" />
            {t("heroEyebrow")}
          </p>

          <h1 className="animate-rise-in mt-6 max-w-[13ch] font-gothic text-[clamp(3.25rem,13.5vw,7.5rem)] leading-[0.92] text-gilded [animation-delay:90ms]">
            {t("heroTitle")} <em className="font-normal text-gold-light">{t("heroGlow")}.</em>
          </h1>

          <p className="animate-rise-in mt-7 max-w-md text-sm leading-7 text-bone/70 [animation-delay:180ms] sm:text-base sm:leading-8">
            {t("heroDescription")}
          </p>

          <div className="animate-rise-in mt-9 flex flex-wrap items-center gap-3 [animation-delay:260ms]">
            <BookingButton variant="solid" />
            <a
              href="#ritual"
              className="group inline-flex min-h-12 items-center gap-2.5 border border-bone/15 px-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-bone/75 transition hover:border-gold/50 hover:text-gold-bright"
            >
              {t("heroScroll")}
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </div> */}

        {/* <div className="shell hidden items-center justify-between gap-6 border-t border-gold-hairline py-5 text-[10px] uppercase tracking-[0.24em] text-bone-muted/60 lg:flex">
          <span>{t("studioLabel")}</span>
          <span className="h-px flex-1 bg-gold-hairline" aria-hidden="true" />
          <span>NKAIO</span>
        </div> */}
      </section>

      {/* <section id="ritual" className="rule-arch relative overflow-hidden border-b border-gold-hairline bg-ink">
        <div className="shell relative py-20 sm:py-28">
          <p className="eyebrow">{t("philosophyEyebrow")}</p>

          <h2 className="mt-6 max-w-3xl font-gothic text-[clamp(2.25rem,8vw,4.5rem)] leading-[1.02]">
            {t("philosophyTitle")}
            <br />
            <em className="font-normal text-gilded">{t("philosophyTitleAccent")}.</em>
          </h2>

          <Flourish className="mt-10 max-w-md" />

          <p className="mt-8 max-w-2xl text-base leading-8 text-bone/70">{t("philosophyBody")}</p>

          <ul className="mt-14 grid gap-px border border-gold-hairline bg-gold-hairline sm:grid-cols-3">
            {[t("philosophyPointOne"), t("philosophyPointTwo"), t("philosophyPointThree")].map((point, index) => (
              <li key={point} className="relative bg-ink px-6 py-8">
                <span className="text-[10px] tracking-[0.2em] text-gold/80">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-4 font-gothic text-xl leading-snug text-gold-light">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </section> */}

      <section id="services" className="border-b border-gold-hairline bg-ink-soft">
        <div className="shell py-20 sm:py-28">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between text-center">
            <div>
              <p className="eyebrow">{t("homeEyebrow")}</p>
              <h2 className="mt-5 max-w-xl font-gothic text-[clamp(2rem,7vw,3.75rem)] leading-tight text-gilded">{t("homeTitle")}</h2>
            </div>
            <div className="flex flex-col items-start gap-4">
              <p className="max-w-sm text-sm leading-7 text-bone/60">{t("homeServiceIntro")}</p>
              <ActionLink to={SERVICES_INDEX} label={t("viewAllServices")} variant="outline" withArrow  className="m-auto"/>
            </div>
          </div>

          {/* <div className="mt-12 grid gap-px bg-gold-hairline sm:grid-cols-2 lg:grid-cols-4">
            {HOME_SERVICES.map((service) => {
              const route = getRoute(service.path);
              return (
                <Link
                  key={service.path}
                  to={service.path}
                  className="group relative flex min-h-56 flex-col justify-between bg-ink-soft px-6 py-7 transition-colors hover:bg-gold-veil sm:min-h-64"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] tracking-[0.2em] text-gold/80">{service.number}</span>
                    {route && (
                      <img
                        src={asset(route.icon)}
                        alt=""
                        loading="lazy"
                        className="icon-gold h-12 w-12 object-contain opacity-45 transition duration-500 group-hover:scale-110 group-hover:opacity-90"
                      />
                    )}
                  </div>

                  <div>
                    <span className="flex items-center justify-between gap-2 font-gothic text-3xl text-gold-light transition-colors group-hover:text-gold-bright">
                      {t(service.name)}
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-gold opacity-0 transition duration-300 group-hover:opacity-100" />
                    </span>
                    <span className="mt-2 block text-xs text-bone/55">{t(service.detail)}</span>
                  </div>
                </Link>
              );
            })}
          </div> */}
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(70% 120% at 50% 0%, rgba(199,169,107,0.09), transparent 65%)" }}
          aria-hidden="true"
        />

        <div className="shell relative flex flex-col items-center py-20 text-center sm:py-28">
          <p className="max-w-3xl font-gothic text-[clamp(1.6rem,5.5vw,3rem)] leading-tight text-gold-light">
            &ldquo;{t("homeQuote")}&rdquo;
          </p>

          <Flourish className="mt-10 max-w-sm" />

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <ActionLink to="/about" label={t("discoverNkaio")} variant="solid" />
            <ActionLink to="/contact" label={t("contact")} />
          </div>
        </div>
      </section>
    </>
  );
}
