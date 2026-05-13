import { Whatsapp } from "./Icons";
import { LogoPlaneTile } from "./Logo";
import { WHATSAPP_LINK } from "./site-data";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 rounded-full bg-brand-600 px-4 py-3 text-sm font-semibold text-white shadow-card transition-all hover:bg-brand-700 hover:shadow-glow sm:px-5 sm:py-3.5"
    >
      <LogoPlaneTile size="sm" className="ring-white/20" />
      <span className="relative inline-flex">
        <Whatsapp className="h-5 w-5 sm:h-6 sm:w-6" />
        <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-emerald-300 ring-2 ring-brand-600" />
      </span>
      <span className="hidden sm:inline">Falar com a Jef</span>
    </a>
  );
}
