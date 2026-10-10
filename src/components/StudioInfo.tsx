import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT } from "../config";
import { useLanguage, type TranslationKey } from "../i18n";
import { cn } from "../lib/cn";
import { CornerFlourish } from "./Ornaments";

export function StudioInfo({ className }: { className?: string }) {
  const { t } = useLanguage();

  const details = [
    { icon: Phone, label: t("callUs"), value: CONTACT.phone, href: CONTACT.phoneHref },
    { icon: Mail, label: t("email"), value: CONTACT.email, href: CONTACT.emailHref },
    { icon: MapPin, label: t("address"), value: CONTACT.address.join(", "), href: CONTACT.mapsUrl, external: true },
  ];

  return (
    <div className={cn("panel relative grain p-6 sm:p-8", className)}>
      <CornerFlourish className="absolute left-3 top-3" />
      <CornerFlourish className="absolute right-3 top-3 rotate-90" />
      <CornerFlourish className="absolute bottom-3 right-3 rotate-180" />
      <CornerFlourish className="absolute bottom-3 left-3 -rotate-90" />

      <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-gold">{t("directContact")}</p>

      <ul className="mt-6 grid gap-3">
        {details.map(({ icon: Icon, label, value, href, external }) => (
          <li key={label}>
            <a
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer noopener" : undefined}
              className="group flex items-start gap-3.5 border border-gold-hairline/70 px-4 py-3.5 transition hover:border-gold/50 hover:bg-gold-veil"
            >
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold-veil">
                <Icon className="h-3.5 w-3.5 text-gold-light" />
              </span>
              <span>
                <span className="block text-[9px] uppercase tracking-[0.22em] text-bone/45">{label}</span>
                <span className="mt-1 block text-sm text-bone transition group-hover:text-gold-bright">{value}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-[9px] font-semibold uppercase tracking-[0.26em] text-gold">{t("openingHours")}</p>

      <dl className="mt-5 grid gap-2.5">
        {CONTACT.hours.map(({ day, time }) => (
          <div key={day} className="flex items-center justify-between gap-4 border-b border-gold-hairline/60 pb-2.5 last:border-b-0 last:pb-0">
            <dt className="flex items-center gap-2.5 text-sm text-bone/75">
              <Clock3 className="h-3.5 w-3.5 shrink-0 text-gold/80" />
              {t(day as TranslationKey)}
            </dt>
            <dd className="text-right text-sm text-bone/55">{time === "byAppointment" ? t("byAppointment") : time}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
