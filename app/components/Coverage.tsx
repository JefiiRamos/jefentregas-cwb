import { MapPin } from "./Icons";

const REGIONS = [
  {
    title: "Curitiba",
    desc: "Atendimento em toda a capital, do Centro aos bairros mais afastados.",
    items: ["Centro", "Batel", "Água Verde", "Boqueirão", "Cabral", "Boa Vista"],
  },
  {
    title: "Região Metropolitana",
    desc: "Roteiros diários entre Curitiba e cidades vizinhas.",
    items: [
      "São José dos Pinhais",
      "Pinhais",
      "Colombo",
      "Araucária",
      "Campo Largo",
      "Fazenda Rio Grande",
    ],
  },
  {
    title: "Litoral do Paraná",
    desc: "Entregas e pequenas viagens para o litoral, todo o ano.",
    items: [
      "Pontal do Paraná",
      "Matinhos",
      "Guaratuba",
      "Paranaguá",
      "Praia de Leste",
      "Ipanema",
    ],
  },
];

export default function Coverage() {
  return (
    <section id="cobertura" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-spotlight opacity-60 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-800">
              Onde atuamos
            </span>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-950">
              Cobertura sólida do{" "}
              <span className="text-gradient-brand">centro ao litoral</span>
            </h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Conhecemos as ruas de Curitiba, as rotas da região metropolitana e
              cada acesso para o litoral paranaense. Isso significa rotas mais
              curtas, prazos cumpridos e menos custo para o seu negócio.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-white p-5">
                <div className="font-display text-3xl font-bold text-brand-700">
                  +30
                </div>
                <div className="mt-1 text-xs text-zinc-600 leading-relaxed">
                  Cidades atendidas entre RMC e litoral
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-white p-5">
                <div className="font-display text-3xl font-bold text-brand-700">
                  365
                </div>
                <div className="mt-1 text-xs text-zinc-600 leading-relaxed">
                  Dias por ano com a frota disponível
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {REGIONS.map((r) => (
              <article
                key={r.title}
                className="group rounded-3xl border border-border bg-white p-6 transition-all hover:border-brand-200 hover:shadow-soft"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-soft">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-brand-950">
                        {r.title}
                      </h3>
                      <p className="text-sm text-zinc-600">{r.desc}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {r.items.map((i) => (
                    <span
                      key={i}
                      className="rounded-full border border-brand-100 bg-brand-50/60 px-3 py-1 text-xs font-medium text-brand-800"
                    >
                      {i}
                    </span>
                  ))}
                  <span className="rounded-full bg-brand-900 px-3 py-1 text-xs font-medium text-white">
                    + outros
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
