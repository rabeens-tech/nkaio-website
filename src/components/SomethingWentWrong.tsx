import { useLanguage } from "../i18n";
import { ActionLink } from "./ActionLink";

export function SomethingWentWrong() {
  const { t } = useLanguage();

  return (
    <section className="flex min-h-[70svh] items-center justify-center px-6 py-28 text-center">
      <div className="max-w-md border-y border-gold-hairline px-6 py-14">
        <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-gold">NKAIO</p>
        <h1 className="mt-5 font-gothic text-4xl text-gilded sm:text-5xl">{t("somethingWentWrong")}</h1>
        <p className="mt-4 text-sm leading-7 text-bone/60">{t("notFoundDescription")}</p>
        <div className="mt-8 flex justify-center">
          <ActionLink to="/" label={t("returnHome")} variant="gold" />
        </div>
      </div>
    </section>
  );
}
