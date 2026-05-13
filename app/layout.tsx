import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jefentregas.com.br"),
  title: {
    default: "Jef Entregas CWB | Entregas de carro e moto em Curitiba",
    template: "%s · Jef Entregas CWB",
  },
  description:
    "Entregas rápidas, seguras e confiáveis em Curitiba, região metropolitana e litoral do Paraná. Atendimento especializado para joias, semi-joias, cosméticos e cargas delicadas. Parceiro oficial de marcas como Laboran, Camile Pilato e Cacau Brasil.",
  keywords: [
    "entregas Curitiba",
    "motoboy Curitiba",
    "entregas de carro Curitiba",
    "entrega expressa CWB",
    "transporte de joias",
    "Laboran",
    "Camile Pilato",
    "Cacau Brasil",
    "região metropolitana de Curitiba",
    "litoral do Paraná",
  ],
  authors: [{ name: "Jef Entregas CWB" }],
  openGraph: {
    title: "Jef Entregas CWB | Entregas profissionais em Curitiba",
    description:
      "Entregas de carro e moto em Curitiba, região metropolitana e litoral do Paraná. Pequenas viagens e cargas especiais com a confiança que sua marca precisa.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/logo.svg", width: 1185, height: 533, alt: "Jef Entregas rápidas" }],
  },
  icons: {
    icon: [{ url: "/iconPlane.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
