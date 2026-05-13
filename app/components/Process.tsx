import { Check, MapPin, Phone, Truck } from "./Icons";

const STEPS = [
  {
    n: "01",
    Icon: Phone,
    title: "Solicite pelo WhatsApp",
    desc: "Conte para nós o que precisa ser entregue, origem, destino e prazo.",
  },
  {
    n: "02",
    Icon: MapPin,
    title: "Receba o orçamento",
    desc: "Enviamos um valor justo e transparente, com a melhor rota para sua carga.",
  },
  {
    n: "03",
    Icon: Truck,
    title: "Coleta e transporte",
    desc: "Coletamos no horário combinado.",
  },
  {
    n: "04",
    Icon: Check,
    title: "Entrega confirmada",
    desc: "Entrega segura no destino com comprovante e retorno ao solicitante.",
  },
];

export default function Process() {
  return (
    <section className="section relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-800">
            Como funciona
          </span>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-950">
            Da solicitação à entrega em{" "}
            <span className="text-gradient-brand">4 passos simples</span>
          </h2>
        </div>

        <ol className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <span className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent lg:block" />
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="relative rounded-3xl border border-border bg-white p-6 shadow-soft"
            >
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-soft">
                <s.Icon className="h-6 w-6" />
              </div>
              <div className="mt-5 flex items-baseline gap-3">
                <span className="font-display text-3xl font-bold text-brand-200">
                  {s.n}
                </span>
                <h3 className="font-display text-lg font-semibold text-brand-950">
                  {s.title}
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
