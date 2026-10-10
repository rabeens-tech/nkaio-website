import { ArrowUpRight, ChevronDown, Layers } from "lucide-react";
import { Link, useLocation } from "react-router";
import { asset } from "../config";
import { useLanguage } from "../i18n";
import { cn } from "../lib/cn";
import { getRoute, isServicePath, SERVICE_GROUPS, SERVICES_INDEX } from "../routes";

export function ServicesDropdown({ variant, onNavigate }: { variant: "menu" | "list"; onNavigate?: () => void }) {
  const { pathname } = useLocation();
  const { t } = useLanguage();
  const active = pathname === SERVICES_INDEX || isServicePath(pathname);

  if (variant === "list") {
    return (
      <div className="border-t border-gold-hairline/60 px-2 pt-4">
        <Link
          to={SERVICES_INDEX}
          onClick={onNavigate}
          className={cn(
            "mb-3 flex items-center gap-2.5 text-[9px] font-semibold uppercase tracking-[0.24em] transition",
            active ? "text-gold-bright" : "text-gold",
          )}
        >
          <Layers className="h-3.5 w-3.5" />
          {t("navServices")}
        </Link>

        <ul className="grid gap-4">
          {SERVICE_GROUPS.map((group) => (
            <li key={group.id}>
              <p className="mb-1.5 text-[9px] uppercase tracking-[0.22em] text-bone/40">{t(group.labelKey)}</p>
              <ul>
                {group.paths.map((path) => {
                  const route = getRoute(path);
                  if (!route) return null;
                  const isActive = pathname === path;
                  return (
                    <li key={path}>
                      <Link
                        to={path}
                        onClick={onNavigate}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "group flex items-center gap-2.5 py-1.5 text-sm transition",
                          isActive ? "text-gold-bright" : "text-bone/70 hover:text-gold-light",
                        )}
                      >
                        <img src={asset(route.icon)} alt="" loading="lazy" className="icon-gold h-4 w-4 shrink-0 object-contain opacity-70" />
                        {t(route.labelKey)}
                        <ArrowUpRight
                          className={cn(
                            "h-3.5 w-3.5 text-gold transition",
                            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                          )}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="group relative">
      <Link
        to={SERVICES_INDEX}
        aria-current={active ? "page" : undefined}
        className={cn(
          "relative flex items-center gap-1.5 py-2 text-[10px] font-medium uppercase tracking-[0.18em] transition-colors",
          active ? "text-gold-bright" : "text-bone/70 hover:text-gold-light",
        )}
      >
        {t("navServices")}
        <ChevronDown className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180" />
        <span
          className={cn(
            "absolute inset-x-0 -bottom-0.5 h-px origin-left bg-gold transition-transform duration-300",
            active ? "scale-x-100" : "scale-x-0",
          )}
          aria-hidden="true"
        />
      </Link>

      <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-4 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="panel grain p-2 shadow-veil">
          <ul>
            {SERVICE_GROUPS.map((group) => (
              <li key={group.id}>
                <p className="px-3 pb-1.5 pt-2.5 text-[9px] font-semibold uppercase tracking-[0.24em] text-gold">{t(group.labelKey)}</p>
                {group.paths.map((path) => {
                  const route = getRoute(path);
                  if (!route) return null;
                  const isActive = pathname === path;
                  return (
                    <Link
                      key={path}
                      to={path}
                      className={cn(
                        "group flex items-center gap-3 border-l-2 py-2.5 pl-3 pr-2 transition-colors",
                        isActive
                          ? "border-gold bg-gold-veil-strong text-gold-bright"
                          : "border-transparent text-bone/75 hover:border-gold/50 hover:bg-gold-veil hover:text-gold-light",
                      )}
                    >
                      <img src={asset(route.icon)} alt="" loading="lazy" className="icon-gold h-5 w-5 shrink-0 object-contain opacity-80" />
                      <span className="flex-1 text-sm">{t(route.labelKey)}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-gold opacity-0 transition group-hover:opacity-100" />
                    </Link>
                  );
                })}
              </li>
            ))}
          </ul>

          <Link
            to={SERVICES_INDEX}
            className="mt-2 flex items-center justify-center gap-2 border-t border-gold-hairline px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-light transition hover:bg-gold-veil hover:text-gold-bright"
          >
            {t("viewAllServices")}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
