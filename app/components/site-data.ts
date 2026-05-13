/** Logos exportadas do Figma (`public/`). */
export const BRANDING = {
  logoFull: "/logo.svg",
  logoPlane: "/iconPlane.svg",
  logoWordmark: "/LogoText.svg",
} as const;

export const SITE = {
  name: "Jef Entregas CWB",
  tagline: "Entregas profissionais em Curitiba, RMC e litoral",
  whatsappNumber: "5541999999999",
  whatsappDisplay: "(41) 99999-9999",
  email: "contato@jefentregascwb.com.br",
  instagram: "@jefentregascwb",
  address: "Curitiba — Paraná",
};

export const WHATSAPP_LINK = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
  "Olá, gostaria de solicitar uma entrega com a Jef Entregas CWB."
)}`;

export const NAV_LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#parceiros", label: "Parceiros" },
  { href: "#cobertura", label: "Cobertura" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
];
