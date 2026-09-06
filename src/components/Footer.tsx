import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import NAV_ITEMS from "../navs";


const Footer = () => {
	return (
		<footer className="relative z-10 border-t border-white/10 bg-[#08080c] text-white">
			<div className="mx-auto max-w-6xl px-5 pb-7 pt-14 sm:px-8 sm:pt-16">
				<div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr] md:gap-8">
					<div>
						<a
							href="/"
							className="inline-block text-2xl font-semibold tracking-[0.3em] text-white"
						>
							NKAIO
						</a>
						<p className="mt-5 max-w-xs text-sm leading-6 text-white/55">
							A considered space for beauty, wellness, and feeling more like
							yourself.
						</p>
					</div>

					<div>
						<p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D6B77C]">
							Explore
						</p>
						<nav aria-label="Footer navigation" className="mt-5 grid gap-3">
							{NAV_ITEMS.filter((item) => item.footer).map((item) => (
								<a
									key={item.name}
									href={item.link}
									className="group flex w-fit items-center gap-1.5 text-sm text-white/65 transition hover:text-white"
								>
									{item.name}
									<ArrowUpRight className="h-3.5 w-3.5 text-[#D6B77C] opacity-0 transition group-hover:opacity-100" />
								</a>
							))}
						</nav>
					</div>

					<div>
						<p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D6B77C]">
							Visit us
						</p>
						<div className="mt-5 grid gap-4 text-sm leading-6 text-white/65">
							<a
								href="#contact"
								className="flex items-start gap-3 transition hover:text-white"
							>
								<MapPin className="mt-1 h-4 w-4 flex-none text-[#D6B77C]" />
								<span>Find your way to NKAIO<br />Your city, your ritual</span>
							</a>
							<a
								href="mailto:hello@nkaio.com"
								className="flex items-center gap-3 transition hover:text-white"
							>
								<Mail className="h-4 w-4 flex-none text-[#D6B77C]" />
								hello@nkaio.com
							</a>
						</div>
					</div>
				</div>

				<div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-5 text-[11px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
					<p>© {new Date().getFullYear()} NKAIO. All rights reserved.</p>
					<a href="/privacy" className="transition hover:text-white">
						Privacy Policy
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
