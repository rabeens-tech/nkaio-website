import React from "react";
import { Phone } from "lucide-react";
import { THEME } from "../theme";

const Contact: React.FC = () => {
  return (
    <a
      href="tel:+977-986-000-0000"
      className="flex items-center justify-center gap-2 rounded-full p-2.5 transition active:scale-95"
      aria-label="Call us"
      style={{
        backgroundColor: THEME.colors.panel,
        color: THEME.colors.goldLight,
      }}
    >
      <Phone className="h-4 w-4" />
      <span className="hidden text-[11px] font-semibold uppercase tracking-[0.12em] sm:inline" style={{ color: THEME.colors.goldLight }}>Call</span>
    </a>
  );
};

export default Contact;