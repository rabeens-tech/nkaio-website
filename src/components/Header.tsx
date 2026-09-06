import React, { useState } from "react";
import { Drawer } from "vaul";
import { Menu, ArrowUpRight } from "lucide-react";
import Booking from "./Booking";
import NAV_ITEMS from "../navs";
import Contact from "./Contact";


const MobileHeader: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
      <header className="sticky top-0 z-50 w-full border-b border-[#c7a96b]/20 bg-[#090909]/80 text-white backdrop-blur-md">
        <div className="relative mx-auto flex h-[76px] max-full items-center justify-between px-5 sm:px-8">
          {/* Menu Button — opens vaul Drawer */}
          <Drawer.Root open={menuOpen} onOpenChange={setMenuOpen} direction="left">
            <Drawer.Trigger asChild>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c7a96b]/35 bg-[#c7a96b]/[0.06] transition hover:border-[#e0c88e] active:scale-95"
                aria-label="Toggle menu"
              >
                <Menu className="h-5 w-5 cursor-pointer text-[#e0c88e]" />
              </button>
            </Drawer.Trigger>

            <Drawer.Portal>
              {/* Scrim */}
              <Drawer.Overlay
                className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm"
                onClick={() => setMenuOpen(false)}
              />

              {/* Panel */}
              <Drawer.Content className="fixed inset-y-0 left-0 z-[100] flex w-full max-w-[480px] flex-col border-r border-[#c7a96b]/20 bg-[#0d0c0a] outline-none">
                {/* Drag handle (horizontal, for left drawer drag-to-close) */}
                <div className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-1 rounded-full bg-white/20" />

                <Drawer.Title className="sr-only">Navigation</Drawer.Title>

                <nav className="px-4 pb-10 pt-2">
                  {NAV_ITEMS.filter((item) => item.header).map((item) => (
                    <a
                      key={item.name}
                      href={item.link}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center justify-between border-b border-white/[0.07] py-5"
                    >
                      <span className="text-[15px] font-medium tracking-wide text-white/90">
                        {item.name}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-white/30 transition group-hover:text-[#D6B77C]" />
                    </a>
                  ))}
                </nav>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>

          {/* Brand */}
          <a
            href="/"
            className="absolute left-1/2 -translate-x-1/2 font-serif text-xl tracking-[0.28em] text-[#f1ece2]"
          >
            NKAIO
          </a>

          {/* Book Now */}
          <div className="flex items-center gap-3">
            <Booking calendly_url="https://calendly.com/neupanerabeen/30min" />
            <Contact />
          </div>

        </div>
      </header>
  );
};

export default MobileHeader;