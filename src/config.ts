export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const BRAND = {
  name: "NKAIO",
  wordmark: "images/NKAIO-logo.png",
  mark: "images/NKAIO-logo.png",
  domain: "https://nkaio.pt",
} as const;

export const CONTACT = {
  phone: "+351 900 000 000",
  phoneHref: "tel:+351900000000",
  email: "hello@nkaio.com",
  emailHref: "mailto:hello@nkaio.com",
  address: ["Rua da Beleza 18", "4000-294 Porto", "Portugal"],
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=NKAIO+Porto",
  hours: [
    { day: "mondayFriday", time: "10:00 \u2013 19:00" },
    { day: "saturday", time: "10:00 \u2013 18:00" },
    { day: "sunday", time: "byAppointment" },
  ],
} as const;

export const BOOKING = {
  calendlyUrl: "https://calendly.com/neupanerabeen/30min",
} as const;

export const SOCIALS = [
  { id: "instagram", label: "Instagram", href: "https://instagram.com/nkaio" },
  { id: "facebook", label: "Facebook", href: "https://facebook.com/nkaio" },
  { id: "tiktok", label: "TikTok", href: "https://tiktok.com/@nkaio" },
  { id: "whatsapp", label: "WhatsApp", href: "https://wa.me/351900000000" },
  { id: "youtube", label: "YouTube", href: "https://youtube.com/@nkaio" },
] as const;

export type SocialId = (typeof SOCIALS)[number]["id"];

export const HERO = {
  video: "videos/NKAIO-animate.mp4",
  poster: "images/NKAIO-logo.png",
} as const;

export const NAV_COLUMNS = [
  
  { id: "explore", labelKey: "explore", routes: ["/", "/about"] },
  {
    id: "services",
    labelKey: "navServices",
    routes: ["/services", "/hair", "/nails", "/body-and-makeup", "/esthetic-hair", "/esthetic-body"],
  },
  { id: "studio", labelKey: "visitUs", routes: ["/doctor", "/bar", "/contact"] },
] as const;
