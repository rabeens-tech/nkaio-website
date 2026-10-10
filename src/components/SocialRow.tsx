import { SOCIALS } from "../config";
import { useLanguage } from "../i18n";
import { cn } from "../lib/cn";
import { SocialIcon } from "./SocialIcon";

export function SocialRow({ className, iconClass }: { className?: string; iconClass?: string }) {
  const { t } = useLanguage();

  return (
    <ul className={cn("flex flex-wrap items-center gap-2.5", className)} aria-label={t("socialLinks")}>
      {SOCIALS.map((social) => (
        <li key={social.id}>
          <a
            href={social.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={social.label}
            className={cn(
              "flex h-10 w-10 items-center justify-center border border-gold-hairline bg-gold-veil text-gold-light transition duration-300 hover:-translate-y-0.5 hover:border-gold/60 hover:bg-gold-veil-strong hover:text-gold-bright",
              iconClass,
            )}
          >
            <SocialIcon id={social.id} className="h-[15px] w-[15px]" />
          </a>
        </li>
      ))}
    </ul>
  );
}
