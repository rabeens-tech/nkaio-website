import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { useLanguage } from "../i18n";
import { ActionLink } from "../components/ActionLink";
import { PageHero } from "../components/PageHero";
import { SocialRow } from "../components/SocialRow";
import { StudioInfo } from "../components/StudioInfo";

const fieldClass =
  "w-full border border-bone/12 bg-ink-soft px-4 py-3.5 text-bone placeholder:text-bone/30 transition focus:border-gold/60 focus:outline-none";

export default function Contact() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow={t("contactEyebrow")}
        title={t("contactTitle")}
        lead={t("contactIntro")}
        aside={<SocialRow />}
      />

      <section className="bg-ink">
        <div className="shell grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="panel grain relative p-6 sm:p-9">
            <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-gold">{t("getInTouch")}</p>
            <h2 className="mt-3 font-gothic text-3xl text-gold-light sm:text-4xl">{t("sendInquiry")}</h2>

            {submitted ? (
              <div className="mt-8 border border-gold-hairline bg-gold-veil p-6">
                <p className="font-gothic text-xl text-gold-bright">{t("replyTime")}</p>
                <p className="mt-2 text-sm leading-7 text-bone/65">{t("contactHelp")}</p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-light underline-offset-4 hover:underline"
                >
                  {t("close")}
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-8 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-bone/55">{t("yourName")}</span>
                    <input required name="name" type="text" placeholder={t("yourName")} className={fieldClass} />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-bone/55">{t("email")}</span>
                    <input required name="email" type="email" placeholder="you@example.com" className={fieldClass} />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-bone/55">{t("subject")}</span>
                  <input required name="subject" type="text" placeholder={t("subjectPlaceholder")} className={fieldClass} />
                </label>

                <label className="block">
                  <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-bone/55">{t("requestDetails")}</span>
                  <textarea required name="message" rows={6} placeholder={t("requestPlaceholder")} className={`${fieldClass} resize-none`} />
                </label>

                <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-bone/45">{t("replyTime")}</p>
                  <button
                    type="submit"
                    className="inline-flex min-h-12 items-center justify-center gap-2.5 border border-gold bg-gold px-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-gold-bright active:scale-[0.98]"
                  >
                    <Send className="h-3.5 w-3.5" />
                    {t("sendRequest")}
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="grid gap-6">
            <StudioInfo />

            <div className="panel grain p-6 sm:p-8">
              <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-gold">{t("followAlong")}</p>
              <SocialRow className="mt-5" />
              <p className="mt-5 text-sm leading-7 text-bone/60">{t("instagramDescription")}</p>
            </div>
          </div>
        </div>

        <div className="shell pb-16 sm:pb-24">
          <div className="flex flex-col items-start gap-5 border-t border-gold-hairline pt-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-gold">{t("readyBegin")}</p>
              <p className="mt-2.5 max-w-md text-sm leading-7 text-bone/65">{t("contactHelp")}</p>
            </div>
            <ActionLink to="/" label={t("discoverNkaio")} withArrow />
          </div>
        </div>
      </section>
    </>
  );
}
