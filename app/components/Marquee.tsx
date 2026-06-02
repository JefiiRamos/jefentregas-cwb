import { LogoPlaneTile } from "./Logo";

const ITEMS = [
  "Laboran",
  "Camile Pilato",
  "Brasil Cacau",
  "Shopping Água Verde",
  "Joias & semi-joias",
  "Produto perecível",
  "Chocolates",
  "Pequenas viagens",
  "Curitiba",
  "RMC",
  "Litoral do Paraná",
];

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <section
      aria-label="Marcas e segmentos atendidos"
      className="relative border-y border-border bg-white py-6"
    >
      <div className="mask-marquee mx-auto max-w-7xl overflow-hidden">
        <div className="flex w-max items-center gap-12 animate-marquee whitespace-nowrap">
          {loop.map((item, idx) => (
            <div
              key={`${item}-${idx}`}
              className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500"
            >
              <LogoPlaneTile size="sm" />
              {item}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .mask-marquee {
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }
      `}</style>
    </section>
  );
}
