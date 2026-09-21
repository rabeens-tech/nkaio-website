import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router";
import SubPageTemplate from "../templates/SubPages";

const contactDetails = [
  {
    icon: Phone,
    label: "Call us",
    value: "+977-986-000-0000",
    href: "tel:+977-986-000-0000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@nkaio.com",
    href: "mailto:hello@nkaio.com",
  },
  {
    icon: MapPin,
    label: "Visit",
    value: "Your city, your ritual",
    href: "#location",
  },
];

const hours = [
  ["Monday – Friday", "9:00 AM – 7:00 PM"],
  ["Saturday", "10:00 AM – 6:00 PM"],
  ["Sunday", "By appointment only"],
];

const ContactPage = () => {
  return (
    <SubPageTemplate>
      <main className="bg-[#090909] px-5 py-10 text-[#f1ece2] sm:px-8 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center lg:mb-14">
            <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-[#c7a96b]">
              Contact us
            </p>
            <h1 className="mt-4 font-serif text-4xl text-[#f1ece2] sm:text-5xl lg:text-6xl">
              Book your moment of care
            </h1>
            <p className="text-sm leading-7 text-[#f1ece2]/70 sm:text-base">
              We create considered beauty experiences designed around your routine, your preferences, and your time.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <section className="rounded-[28px] border border-[#c7a96b]/25 bg-[#111111] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.25)] sm:p-7 lg:p-8">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#c7a96b]">
                    Get in touch
                  </p>
                  <h2 className="mt-2 font-serif text-3xl text-[#f1ece2]">Send an inquiry</h2>
                </div>
                <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-[#c7a96b]/35 bg-[#c7a96b]/[0.06] sm:flex">
                  <ArrowUpRight className="h-5 w-5 text-[#e0c88e]" />
                </div>
              </div>

              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm text-[#f1ece2]/75">
                    <span className="mb-2 block">First name</span>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-white/10 bg-[#090909] px-4 py-3 text-[#f1ece2] placeholder:text-[#f1ece2]/35 outline-none transition focus:border-[#c7a96b]/60"
                    />
                  </label>

                  <label className="block text-sm text-[#f1ece2]/75">
                    <span className="mb-2 block">Email</span>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-white/10 bg-[#090909] px-4 py-3 text-[#f1ece2] placeholder:text-[#f1ece2]/35 outline-none transition focus:border-[#c7a96b]/60"
                    />
                  </label>
                </div>

                <label className="block text-sm text-[#f1ece2]/75">
                  <span className="mb-2 block">Subject</span>
                  <input
                    type="text"
                    placeholder="Appointment, consultation, service inquiry"
                    className="w-full rounded-2xl border border-white/10 bg-[#090909] px-4 py-3 text-[#f1ece2] placeholder:text-[#f1ece2]/35 outline-none transition focus:border-[#c7a96b]/60"
                  />
                </label>

                <label className="block text-sm text-[#f1ece2]/75">
                  <span className="mb-2 block">Tell us about your request</span>
                  <textarea
                    rows={6}
                    placeholder="I would like to book a treatment for..."
                    className="w-full resize-none rounded-2xl border border-white/10 bg-[#090909] px-4 py-3 text-[#f1ece2] placeholder:text-[#f1ece2]/35 outline-none transition focus:border-[#c7a96b]/60"
                  />
                </label>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#f1ece2]/45">
                    We usually reply within 24 hours
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full border border-[#c7a96b]/35 bg-[#c7a96b]/[0.06] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e0c88e] transition hover:bg-[#c7a96b]/[0.12] active:scale-95"
                  >
                    Send request
                  </button>
                </div>
              </form>
            </section>

            <aside className="space-y-6">
              <div className="rounded-[28px] border border-[#c7a96b]/25 bg-[#0e0e0e] p-5 sm:p-6">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#c7a96b]">
                  Direct contact
                </p>
                <div className="mt-5 space-y-4">
                  {contactDetails.map(({ icon: Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="group flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.01] p-3 transition hover:border-[#c7a96b]/35 hover:bg-[#c7a96b]/[0.04]"
                    >
                      <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full border border-[#c7a96b]/35 bg-[#c7a96b]/[0.06]">
                        <Icon className="h-4 w-4 text-[#e0c88e]" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.22em] text-[#f1ece2]/50">{label}</p>
                        <p className="mt-1 text-sm text-[#f1ece2] transition group-hover:text-[#e0c88e]">
                          {value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-[#c7a96b]/25 bg-[#0e0e0e] p-5 sm:p-6" id="location">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#c7a96b]">
                  Opening hours
                </p>
                <div className="mt-5 space-y-3">
                  {hours.map(([day, time]) => (
                    <div key={day} className="flex items-center justify-between gap-4 border-b border-white/5 pb-2 last:border-b-0 last:pb-0">
                      <div className="flex items-center gap-2 text-[#f1ece2]/80">
                        <Clock3 className="h-4 w-4 text-[#e0c88e]" />
                        <span>{day}</span>
                      </div>
                      <span className="text-sm text-[#f1ece2]/60">{time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-[#c7a96b]/25 bg-[#0e0e0e] p-5 sm:p-6">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#c7a96b]">
                  Follow along
                </p>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#c7a96b]/35 bg-[#c7a96b]/[0.06] px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#e0c88e] transition hover:bg-[#c7a96b]/[0.12]"
                >
                  {/* <Instagram className="h-4 w-4" /> */}
                  Instagram
                </a>
                <p className="mt-4 text-sm leading-6 text-[#f1ece2]/60">
                  Discover beauty rituals, treatment highlights, and seasonal offers.
                </p>
              </div>
            </aside>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-3 rounded-[28px] border border-[#c7a96b]/25 bg-[#111111] px-5 py-5 text-center sm:flex-row sm:text-left">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#c7a96b]">Ready to begin?</p>
              <p className="mt-2 text-sm text-[#f1ece2]/60">We’ll help you find the right treatment for your routine.</p>
            </div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-[#c7a96b]/35 bg-[#c7a96b]/[0.06] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e0c88e] transition hover:bg-[#c7a96b]/[0.12]"
            >
              Explore services
            </Link>
          </div>
        </div>
      </main>
    </SubPageTemplate>
  );
};

export default ContactPage;