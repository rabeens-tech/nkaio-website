import React from "react";
import { Phone} from "lucide-react";
const Contact: React.FC = () => {
  return (
    <a
      href="tel:+977-986-000-0000"
      className="ml-4 rounded-md border border-[#c7a96b]/35 bg-[#c7a96b]/[0.06] px-3 py-1 text-sm font-medium text-white transition hover:border-[#e0c88e] active:scale-95"
    >
      <Phone className="mr-1 inline h-4 w-4 text-[#e0c88e]" />
    </a>
  );
};

export default Contact;