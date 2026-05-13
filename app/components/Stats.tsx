const STATS = [
  { value: "+10 mil", label: "Entregas realizadas" },
  { value: "+30 anos", label: "De experiência na estrada" },
  { value: "100%", label: "Cargas entregues sem avarias" },
  { value: "24h", label: "Resposta para parceiros fixos" },
];

export default function Stats() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 px-6 py-10 sm:px-10 sm:py-12 shadow-card">
          <div className="absolute inset-0 bg-dots opacity-20" />
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-400/20 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-emerald-300/10 blur-3xl" />

          <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="border-l border-white/15 pl-5 first:border-l-0 first:pl-0 lg:border-l lg:pl-5 lg:first:pl-5">
                <div className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-brand-100/85 leading-relaxed">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
