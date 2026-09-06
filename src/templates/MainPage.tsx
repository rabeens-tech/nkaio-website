import Header from "../components/Header";
import StarField from "../components/StarField";
import Overlay from "../components/Overlay";
import CookieConsent from "../components/CookieConsent";
import Footer from "../components/Footer";

const MainPageTemplate = () => {
    return (
        <div className="relative min-h-screen overflow-hidden bg-[#090909] text-[#f1ece2]">
            <StarField />
            <Overlay zindex={0} opacity={0.5} />

            <div className="relative z-10">
                <Header />

                <main id="services" className="mx-auto flex min-h-[calc(100svh-68px)] max-w-6xl flex-col items-center justify-center px-6 pb-20 pt-12 text-center sm:px-10">
                    <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.38em] text-[#c7a96b]">
                        Beauty · Wellness · Ritual
                    </p>
                    <div className="relative w-full max-w-[720px] border-y border-[#c7a96b]/30 py-10 sm:py-14">
                        <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#c7a96b]" />
                        <img
                            alt="NKAIO"
                            src="/Nkaio-website-logo.png"
                            className="mx-auto w-[min(78vw,520px)] object-contain"
                        />
                        {/* <p className="mx-auto mt-8 max-w-md text-sm leading-7 text-white/60 sm:text-base">
                            A quiet, considered space for beauty and wellbeing. Thoughtful
                            treatments, timeless results, and time set aside for you.
                        </p> */}
                    </div>
                    {/* <a
                        href="#services"
                        className="mt-9 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e0c88e] transition hover:text-white"
                    >
                        Discover your ritual <span className="ml-2">↓</span>
                    </a> */}
                </main>

                {/* <Footer /> */}
            </div>

            <CookieConsent />
        </div>
    );
};

export default MainPageTemplate;