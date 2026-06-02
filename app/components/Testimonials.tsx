import { Quote, Star } from "./Icons";
import { LogoWordmark } from "./Logo";

const ITEMS = [
  {
    quote:
      "Trabalho com peças delicadas e confio nas entregas da Jef como se fosse eu mesma levando. Pontualidade e cuidado impecáveis.",
    name: "Camile Pilato",
    role: "Joias & semi-joias",
  },
  {
    quote:
      "A operação flui sem dor de cabeça. Combinamos uma vez, e a Jef Entregas executa sempre no padrão.",
    name: "Equipe Laboran",
    role: "Operação recorrente",
  },
  {
    quote:
      "Atendimento humano e responsável para uma carga que precisa chegar bem apresentada e no prazo.",
    name: "Brasil Cacau",
    role: "Shopping Água Verde · Produto perecível · Chocolates",
  },
];

export default function Testimonials() {
  return (
    <section className="section relative overflow-hidden bg-brand-950 text-white">
      <div className="absolute inset-0 bg-dots opacity-[0.08]" />
      <div className="absolute -right-32 top-10 h-72 w-72 rounded-full bg-brand-500/15 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-6 flex max-w-[280px] justify-center opacity-95 drop-shadow-md sm:max-w-[320px]">
            <LogoWordmark className="h-8 w-auto sm:h-10" />
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-100">
            Quem confia
          </span>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl font-bold tracking-tight">
            O que dizem as marcas que entregam com a gente
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {ITEMS.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-transform hover:-translate-y-1"
            >
              <Quote className="h-8 w-8 text-brand-400/70" />
              <blockquote className="mt-4 text-sm leading-relaxed text-brand-50/95">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                <div>
                  <div className="font-display text-base font-semibold text-white">
                    {t.name}
                  </div>
                  <div className="text-xs text-brand-200/80">{t.role}</div>
                </div>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 text-amber-300" />
                  ))}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
