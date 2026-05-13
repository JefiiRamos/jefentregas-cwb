import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

export const Truck = (props: Props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 7h11v9H3z" />
    <path d="M14 10h4l3 3v3h-7" />
    <circle cx="7" cy="18" r="2" />
    <circle cx="17" cy="18" r="2" />
  </svg>
);

export const Motorcycle = (props: Props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="5.5" cy="17.5" r="3.5" />
    <circle cx="18.5" cy="17.5" r="3.5" />
    <path d="M14 17.5 9.5 8H6" />
    <path d="m14 17.5 4.5-7" />
    <path d="M9.5 8 12 6h4" />
  </svg>
);

export const Shield = (props: Props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3 4 6v6c0 5 3.6 8.2 8 9 4.4-.8 8-4 8-9V6l-8-3Z" />
    <path d="m9 12 2.2 2.2L15 10.5" />
  </svg>
);

export const Clock = (props: Props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const MapPin = (props: Props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const Sparkle = (props: Props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3v4" />
    <path d="M12 17v4" />
    <path d="M3 12h4" />
    <path d="M17 12h4" />
    <path d="m5.5 5.5 2.5 2.5" />
    <path d="m16 16 2.5 2.5" />
    <path d="m5.5 18.5 2.5-2.5" />
    <path d="m16 8 2.5-2.5" />
  </svg>
);

export const Handshake = (props: Props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m3 11 4-4 4 1 3 3-3 3-2-1" />
    <path d="m21 11-4-4-4 1" />
    <path d="m13 14 2 2 2-1 2 2" />
    <path d="M3 11v4l3 3 3-2" />
    <path d="M21 11v4l-3 3" />
  </svg>
);

export const Whatsapp = (props: Props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19.05 4.91A10 10 0 0 0 4.07 17.7L3 22l4.4-1.15a10 10 0 0 0 4.65 1.18h.01A10 10 0 0 0 19.05 4.91Zm-7 15.3a8.3 8.3 0 0 1-4.23-1.16l-.3-.18-2.61.69.7-2.55-.2-.32a8.3 8.3 0 1 1 6.64 3.52Zm4.55-6.21c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.56.13-.16.25-.65.81-.8.98-.15.16-.3.18-.55.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.39-1.73-.15-.25-.02-.39.11-.51.11-.11.25-.3.38-.45.13-.15.16-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.04 0 1.2.88 2.36 1 2.52.13.16 1.74 2.66 4.21 3.73.59.25 1.05.4 1.41.51.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.18-.48-.31Z" />
  </svg>
);

export const Phone = (props: Props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5L14 12.5l4 1.5v3a2 2 0 0 1-2 2A14 14 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);

export const Mail = (props: Props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const Instagram = (props: Props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
);

export const ArrowRight = (props: Props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export const Check = (props: Props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m5 12 4.5 4.5L19 7" />
  </svg>
);

export const Diamond = (props: Props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 3h12l3 5-9 13L3 8l3-5Z" />
    <path d="M3 8h18" />
    <path d="m9 3-2 5 5 13" />
    <path d="m15 3 2 5-5 13" />
  </svg>
);

export const Heart = (props: Props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 21s-7-4.5-9.3-9.2A5 5 0 0 1 12 6a5 5 0 0 1 9.3 5.8C19 16.5 12 21 12 21Z" />
  </svg>
);

export const Building = (props: Props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M9 8h.01M15 8h.01M9 12h.01M15 12h.01M9 16h6" />
  </svg>
);

export const Globe = (props: Props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a14 14 0 0 1 0 18" />
    <path d="M12 3a14 14 0 0 0 0 18" />
  </svg>
);

export const Plus = (props: Props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </svg>
);

export const Star = (props: Props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="m12 2 2.95 6.2 6.8.7-5.05 4.6 1.4 6.7L12 16.9 5.9 20.2l1.4-6.7L2.25 8.9l6.8-.7L12 2Z" />
  </svg>
);

export const Quote = (props: Props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M7 7h4v4H7c0 2.2 1.5 3.5 4 4v3c-4 0-7-2-7-7V7Zm9 0h4v4h-4c0 2.2 1.5 3.5 4 4v3c-4 0-7-2-7-7V7Z" />
  </svg>
);
