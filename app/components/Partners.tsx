import { Diamond, Heart, Sparkle } from "./Icons";

const PARTNERS = [
  {
    name: "Laboran",
    description:
      "Apoio logístico recorrente, mantendo cronogramas com pontualidade e zero perdas.",
    Icon: Heart,
    tag: "Parceiro fixo",
  },
  {
    name: "Camile Pilato",
    description:
      "Transporte especializado em joias e semi-joias, com discrição, sigilo e cuidado redobrado.",
    Icon: Diamond,
    tag: "Joias & semi-joias",
  },
  {
    name: "Cacau Brasil",
    description:
      "Distribuição estratégica de cosméticos, sempre alinhada ao calendário comercial da marca.",
    Icon: Sparkle,
    tag: "Cosméticos",
  },
];

export default function Partners() {
  return (
    <section id="parceiros" className="section relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-800">
            Confiam na Jef Entregas
          </span>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-950">
            Marcas que escolheram um parceiro logístico{" "}
            <span className="text-gradient-brand">de verdade</span>
          </h2>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            Trabalhamos com marcas exigentes que precisam de pontualidade,
            cuidado com a carga e atendimento humano. Cada entrega carrega o
            nome do seu negócio — e nós levamos isso a sério.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PARTNERS.map((p) => (
            <article
              key={p.name}
              className="group relative overflow-hidden rounded-3xl border border-border bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-card"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-50 transition-transform duration-500 group-hover:scale-150" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-soft">
                  <p.Icon className="h-6 w-6" />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl font-bold text-brand-950 tracking-tight">
                    {p.name}
                  </h3>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-700">
                    {p.tag}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {p.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
