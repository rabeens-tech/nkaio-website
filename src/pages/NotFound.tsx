import { useLanguage } from "../i18n";
import { ActionLink } from "../components/ActionLink";
import { Flourish } from "../components/Ornaments";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-[80svh] items-center justify-center overflow-hidden px-6 py-28 text-center">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(60% 60% at 50% 40%, rgba(199,169,107,0.10), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-xl">
        <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-gold">{t("pageNotFound")}</p>

        <h1 className="mt-6 font-gothic text-[clamp(5rem,22vw,11rem)] leading-[0.85] text-gilded">404</h1>

        <Flourish className="mt-8" />

        <p className="mx-auto mt-7 max-w-sm text-sm leading-7 text-bone/65">{t("notFoundDescription")}</p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <ActionLink to="/" label={t("returnHome")} variant="solid" />
          <ActionLink to="/contact" label={t("contact")} />
        </div>
      </div>
    </section>
  );
}
