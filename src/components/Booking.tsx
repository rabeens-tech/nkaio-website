import { useState } from "react";
import { Drawer } from "vaul";
import { Calendar, X } from "lucide-react";

interface IBooking {
    calendly_url: string | undefined | null;
}

const Booking = ({ calendly_url }: IBooking) => {
    const [open, setOpen] = useState(false);

    if (!calendly_url) return null;

    return (
        <Drawer.Root open={open} onOpenChange={setOpen}>
            <Drawer.Trigger asChild>
                <button
                    className="flex items-center gap-2 rounded-full border border-[#e0c88e] bg-[#c7a96b] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0b0b0b] transition hover:bg-[#e0c88e] active:scale-95"
                    aria-label="Open booking"
                >
                    <span className="cursor-pointer">BOOK</span>
                    <Calendar className="h-3.5 w-3.5" />
                </button>
            </Drawer.Trigger>

            <Drawer.Portal>
                <Drawer.Overlay
                    className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm"
                    onClick={() => setOpen(false)}
                />

                <Drawer.Content className="fixed bottom-0 left-0 right-0 z-[100] flex flex-col rounded-t-[20px] bg-[#111111] outline-none" style={{ height: "92dvh" }}>
                    {/* Drag handle */}
                    <div className="mx-auto mt-3 mb-0 h-1 w-10 flex-shrink-0 rounded-full bg-white/20" />

                    {/* Header */}
                    <div className="flex h-14 flex-shrink-0 items-center justify-between border-b border-white/10 px-5">
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.2em] text-[#e0c88e]">
                                Appointment
                            </p>
                            <Drawer.Title className="mt-0.5 font-serif text-xl font-medium text-[#f1ece2]">
                                Book Your Visit
                            </Drawer.Title>
                        </div>
                        <button
                            onClick={() => setOpen(false)}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10"
                            aria-label="Close booking"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Calendly iframe — the only reliable embed method in React */}
                    <iframe
                        src={calendly_url}
                        title="Book an appointment"
                        className="w-full flex-1 border-0"
                        loading="lazy"
                    />
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
};

export default Booking;