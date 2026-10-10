import { PageHero } from "../components/PageHero";
import { ActionLink } from "../components/ActionLink";
import { BookingButton } from "../components/BookingButton";
import { DropCap, Flourish } from "../components/Ornaments";
import { asset } from "../config";
import { useLanguage } from "../i18n";
import { getRoute } from "../routes";

export default function About() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t("aboutEyebrow")}
        title={t("aboutTitle")}
        accent={t("aboutYou") || undefined}
        icon={asset(getRoute("/about")?.icon ?? "")}
        aside={
          <>
            <BookingButton />
            <ActionLink to="/contact" label={t("contact")} />
          </>
        }
      />

      <section className="bg-ink">
        <div className="shell py-16 sm:py-24">
          <p className="max-w-2xl font-gothic text-2xl leading-relaxed text-gold-light sm:text-3xl">{t("aboutLead")}</p>

          <Flourish className="my-12 max-w-md" />

          <div className="grid gap-10 border-t border-gold-hairline pt-10 md:grid-cols-2 md:gap-16">
            <DropCap className="text-base leading-8 text-bone/70">{t("aboutParagraphOne")}</DropCap>
            <div className="space-y-6">
              <p className="text-base leading-8 text-bone/70">{t("aboutParagraphTwo")}</p>
              <ActionLink to="/contact" label={t("aboutCta")} withArrow />
            </div>
          </div>
        </div>
      </section>

      <section className="rule-arch border-t border-gold-hairline bg-ink-soft">
        <div className="shell grid gap-px bg-gold-hairline py-0 sm:grid-cols-3">
          {[t("philosophyPointOne"), t("philosophyPointTwo"), t("philosophyPointThree")].map((point, index) => (
            <div key={point} className="bg-ink-soft px-6 py-10 text-center sm:px-8">
              <span className="font-gothic text-3xl text-gold/50">{String(index + 1).padStart(2, "0")}</span>
              <p className="mt-4 font-gothic text-lg leading-snug text-gold-light">{point}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
