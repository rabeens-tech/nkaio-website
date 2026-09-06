import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import SubPageTemplate from '../templates/SubPages';


const ErrorPage = () => {
    return (
        <SubPageTemplate>
            <main className="flex min-h-[calc(100svh-260px)] items-center justify-center bg-[#090909] px-6 py-24 text-center">
                <div className="relative w-full max-w-xl border-y border-[#c7a96b]/30 px-6 py-14 sm:px-12">
                    <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#c7a96b]" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-[#c7a96b]">
                        Page not found
                    </p>
                    <h1 className="mt-5 text-7xl text-[#f1ece2] sm:text-8xl">404</h1>
                    <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-white/60 sm:text-base">
                        This page has wandered beyond the studio. Let us take you
                        back to the beginning.
                    </p>
                    <Link
                        to="/"
                        className="mt-8 inline-flex items-center gap-2 border border-[#c7a96b] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e0c88e] transition hover:bg-[#c7a96b] hover:text-[#090909]"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Return home
                    </Link>
                </div>
            </main>
        </SubPageTemplate>
    );
}


export default ErrorPage;