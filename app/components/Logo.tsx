import Image from "next/image";
import { BRANDING } from "./site-data";

const DIM = {
  full: { width: 1185, height: 533 },
  plane: { width: 174, height: 191 },
  wordmark: { width: 854, height: 533 },
} as const;

type Base = {
  className?: string;
  priority?: boolean;
};

/** Logo completa (fundo #1E1E1E) — header, hero, fundos claros. */
export function LogoFull({ className, priority }: Base) {
  return (
    <Image
      src={BRANDING.logoFull}
      alt="Jef Entregas rápidas — logo"
      width={DIM.full.width}
      height={DIM.full.height}
      className={className}
      unoptimized
      priority={priority}
    />
  );
}

/** Só o avião — sempre sobre fundo escuro (traços brancos no SVG). */
export function LogoPlane({ className }: Base) {
  return (
    <Image
      src={BRANDING.logoPlane}
      alt=""
      width={DIM.plane.width}
      height={DIM.plane.height}
      className={className}
      unoptimized
      aria-hidden
    />
  );
}

/** “Jef” + “entregas rápidas” — fundos escuros (footer, depoimentos, CTA). */
export function LogoWordmark({ className, priority }: Base) {
  return (
    <Image
      src={BRANDING.logoWordmark}
      alt="Jef Entregas rápidas"
      width={DIM.wordmark.width}
      height={DIM.wordmark.height}
      className={className}
      unoptimized
      priority={priority}
    />
  );
}

/** Avião dentro de tile escuro (marca em listas, botões, marquee). */
export function LogoPlaneTile({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md";
}) {
  const box = size === "sm" ? "h-6 w-6" : "h-8 w-8";
  const img = size === "sm" ? "h-4 w-4" : "h-5 w-5";
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-lg bg-[#1E1E1E] shadow-sm ring-1 ring-black/10 ${box} ${className ?? ""}`}
    >
      <LogoPlane className={`${img} object-contain`} />
    </span>
  );
}
