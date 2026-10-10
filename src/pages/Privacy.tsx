import { useLanguage, type TranslationKey } from "../i18n";
import { PageHero } from "../components/PageHero";
import { ActionLink } from "../components/ActionLink";

const SECTIONS = Array.from({ length: 12 }, (_, index) => index + 1);

export default function Privacy() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero eyebrow={t("privacyPolicy")} title={t("privacyTitle")} />

      <section className="bg-ink">
        <div className="shell py-16 sm:py-24">
          <p className="max-w-3xl text-lg leading-8 text-bone/75">{t("privacyIntro")}</p>

          <div className="mt-14 grid gap-12 border-t border-gold-hairline pt-10 lg:grid-cols-[14rem_1fr] lg:gap-16">
            <nav aria-label={t("privacyPolicy")} className="lg:sticky lg:top-28 lg:h-fit">
              <ol className="grid gap-2">
                {SECTIONS.map((number) => (
                  <li key={number}>
                    <a
                      href={`#privacy-${number}`}
                      className="flex gap-3 text-xs text-bone/55 transition hover:text-gold-bright"
                    >
                      <span className="text-gold/70">{String(number).padStart(2, "0")}</span>
                      {t(`privacySection${number}Title` as TranslationKey).replace(/^\d+\.\s*/, "")}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="grid gap-10">
              {SECTIONS.map((number) => (
                <section key={number} id={`privacy-${number}`} className="scroll-mt-28 border-b border-bone/8 pb-8 last:border-b-0">
                  <h2 className="font-gothic text-2xl text-gold-light">{t(`privacySection${number}Title` as TranslationKey)}</h2>
                  <p className="mt-3 text-base leading-8 text-bone/70">{t(`privacySection${number}` as TranslationKey)}</p>
                </section>
              ))}

              <div className="panel grain p-6 sm:p-8">
                <h2 className="font-gothic text-2xl text-gold-light">{t("navContact")}</h2>
                <p className="mt-3 text-base leading-8 text-bone/70">{t("privacyContact")}</p>
                <div className="mt-7">
                  <ActionLink to="/contact" label={t("contact")} withArrow />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
