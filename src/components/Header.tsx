import React, { useState } from "react";
import { Drawer } from "vaul";
import { Menu } from "lucide-react";
import Booking from "./Booking";
import NAV_ITEMS from "../navs";
import Contact from "./Contact";
import { Link } from "react-router";
import { THEME } from "../theme";


const MobileHeader: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
      <header className="sticky top-0 z-50 w-full border-b border-[rgba(199,169,107,0.2)] bg-[#090909]/80 text-white backdrop-blur-md">
        <div className="relative mx-auto flex h-[76px] max-full items-center justify-between px-5 sm:px-8">
          {/* Menu Button — opens vaul Drawer */}
          <div className="gap-2">
            <Drawer.Root open={menuOpen} onOpenChange={setMenuOpen} direction="left">
              <Drawer.Trigger asChild>
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-full border transition active:scale-95"
                  style={{
                    borderColor: THEME.colors.borderSoft,
                    backgroundColor: THEME.colors.panel,
                  }}
                  aria-label="Toggle menu"
                >
                  <Menu className="h-5 w-5 cursor-pointer" style={{ color: THEME.colors.goldLight }} />
                </button>
              </Drawer.Trigger>

              <Drawer.Portal>
                {/* Scrim */}
                <Drawer.Overlay
                  className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm"
                  onClick={() => setMenuOpen(false)}
                />

                {/* Panel */}
                <Drawer.Content className="fixed inset-y-0 left-0 z-[100] flex w-full max-w-[480px] flex-col border-r bg-[#0d0c0a] outline-none" style={{ borderColor: THEME.colors.line }}>
                  {/* Drag handle (horizontal, for left drawer drag-to-close) */}
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-1 rounded-full bg-white/20" />

                  <Drawer.Title className="sr-only">Navigation</Drawer.Title>

                  <nav className="px-4 pb-10 pt-2 overflow-y-scroll scrollbar-none">
                    {NAV_ITEMS.filter((item) => item.header).map((item) => (
                      <Link
                        key={item.name}
                        to={item.link}
                        onClick={() => setMenuOpen(false)}
                        className="group flex items-center gap-3 border-b border-white/[0.07] py-1.5 transition hover:bg-white/[0.02]"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-md">
                          <img
                            src={(import.meta.env.BASE_URL || "/")  + item.icon }
                            alt={item.name}
                            className="h-[90%] w-[90%] object-cover"
                            style={{ filter: "brightness(1.08)" }}
                          />
                        </div>
                        <span
                          className="text-[1.3em] font-medium tracking-wide transition"
                          style={{ color: THEME.colors.goldLight }}
                        >
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </Drawer.Content>
              </Drawer.Portal>
            </Drawer.Root>
          </div>

          {/* Brand */}
          <div className="pointer-events-none absolute left-1/2 -translate-x-1/2">
            <Link to="/" className="pointer-events-auto flex items-center justify-center">
              <img
                alt="NKAIO"
                src={`${import.meta.env.BASE_URL}nkaio-text-logo.png`}
                // src={`nkaio-text-logo.png`}
                className="h-7 w-auto max-w-[110px] object-contain sm:h-8 sm:max-w-[140px]"
              />
            </Link>
          </div>

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