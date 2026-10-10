import type { ReactNode } from "react";
import type { TranslationKey } from "./i18n";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Service from "./pages/Service";
import Services from "./pages/Services";
import Studio from "./pages/Studio";

export interface RouteEntry {
  path: string;
  labelKey: TranslationKey;
  icon: string;
  element: ReactNode;
  inHeader: boolean;
  inFooter: boolean;
}

export const ROUTES: RouteEntry[] = [
  { path: "/", labelKey: "navHome", icon: "icons/home.png", element: <Home />, inHeader: false, inFooter: true },
  { path: "/about", labelKey: "navAbout", icon: "icons/about.png", element: <About />, inHeader: false, inFooter: true },
  {
    path: "/services",
    labelKey: "navServices",
    icon: "icons/bar.png",
    element: <Services />,
    inHeader: true,
    inFooter: true,
  },
  { path: "/nails", labelKey: "navNails", icon: "icons/nails.png", element: <Service />, inHeader: true, inFooter: true },
  { path: "/hair", labelKey: "navHair", icon: "icons/hair.jpeg", element: <Service />, inHeader: true, inFooter: true },
  {
    path: "/body-and-makeup",
    labelKey: "navBodyMakeup",
    icon: "icons/body-and-makeup.png",
    element: <Service />,
    inHeader: false,
    inFooter: true,
  },
  {
    path: "/esthetic-hair",
    labelKey: "navEstheticHair",
    icon: "icons/esthetic-hair.jpeg",
    element: <Service />,
    inHeader: true,
    inFooter: true,
  },
  {
    path: "/esthetic-body",
    labelKey: "navEstheticBody",
    icon: "icons/esthetic-body.png",
    element: <Service />,
    inHeader: true,
    inFooter: true,
  },
  // { path: "/doctor", labelKey: "navDoctor", icon: "icons/doctor.png", element: <Studio />, inHeader: false, inFooter: true },
  { path: "/psychology", labelKey: "servicePsychology", icon: "icons/doctor.png", element: <Studio />, inHeader: true, inFooter: true },
  { path: "/physiotherapy", labelKey: "servicePhysiotherapy", icon: "icons/doctor.png", element: <Studio />, inHeader: true, inFooter: true },
  { path: "/nutritionist", labelKey: "serviceNutritionist", icon: "icons/doctor.png", element: <Studio />, inHeader: true, inFooter: true },
  // { path: "/bar", labelKey: "navBar", icon: "icons/bar.png", element: <Studio />, inHeader: true, inFooter: true },

  { path: "/contact", labelKey: "navContact", icon: "icons/contact.png", element: <Contact />, inHeader: false, inFooter: true },
  {
    path: "/privacy",
    labelKey: "navPrivacy",
    icon: "icons/privacy.png",
    element: <Privacy />,
    inHeader: false,
    inFooter: false,
  },
];

const byPath = new Map(ROUTES.map((route) => [route.path, route]));

export const getRoute = (path: string) => byPath.get(path);

export interface ServiceGroup {
  id: string;
  labelKey: TranslationKey;
  paths: readonly string[];
}

export const SERVICE_GROUPS: readonly ServiceGroup[] = [
  { id: "hair", labelKey: "serviceGeneral", paths: ["/nails", "/hair", "/body-and-makeup"] },
  { id: "esthetic", labelKey: "serviceEsthetic", paths: ["/esthetic-body", "/esthetic-hair"] },
  { id: "doctor", labelKey: "serviceDoctor", paths: ["/psychology", "/physiotherapy", "/nutritionist"] },
];


const SERVICE_PATHS = new Set(SERVICE_GROUPS.flatMap((group) => [...group.paths]));

export const isServicePath = (path: string) => SERVICE_PATHS.has(path);

export const SERVICE_ROUTES = ROUTES.filter((route) => isServicePath(route.path));

export const PRIMARY_NAV = ROUTES.filter((route) => route.inHeader && route.path !== "/" && !isServicePath(route.path));

export const SERVICES_INDEX = "/services";

export function siblingsOf(path: string) {
  const group = SERVICE_GROUPS.find((entry) => entry.paths.includes(path));
  if (!group) return [];
  return group.paths.filter((entry) => entry !== path);
}

export const HOME_SERVICES = [
  { path: "/hair", number: "01", name: "serviceHair", detail: "serviceHairDetail" },
  { path: "/nails", number: "02", name: "serviceNails", detail: "serviceNailsDetail" },
  { path: "/esthetic-body", number: "03", name: "serviceSkin", detail: "serviceSkinDetail" },
  { path: "/body-and-makeup", number: "04", name: "serviceMakeup", detail: "serviceMakeupDetail" },
] as const;
