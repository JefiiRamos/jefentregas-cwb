import { Clock, Handshake, Phone, Shield, Sparkle, Star } from "./Icons";

const ITEMS = [
  {
    Icon: Shield,
    title: "Sigilo e segurança",
    desc: "Cargas delicadas, joias e semi-joias transportadas com discrição absoluta.",
  },
  {
    Icon: Clock,
    title: "Pontualidade real",
    desc: "Cronogramas combinados são cumpridos. Comunicamos antes se algo mudar.",
  },
  {
    Icon: Handshake,
    title: "Atendimento direto",
    desc: "Você fala com quem está dirigindo. Sem intermediários, sem ruído.",
  },
  {
    Icon: Sparkle,
    title: "Cuidado com a marca",
    desc: "Sabemos que toda entrega é a sua marca chegando até o cliente final.",
  },
  {
    Icon: Star,
    title: "Experiência comprovada",
    desc: "Anos atendendo marcas exigentes em Curitiba, RMC e litoral.",
  },
  {
    Icon: Phone,
    title: "Resposta rápida",
    desc: "Orçamento em minutos pelo WhatsApp, com transparência no valor.",
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="section relative bg-surface">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-800">
            Por que escolher a Jef
          </span>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-950">
            Logística com{" "}
            <span className="text-gradient-brand">postura profissional</span> do
            primeiro contato à entrega
          </h2>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            Mais do que transportar, entregamos confiança. Cada detalhe da nossa
            operação foi construído para sustentar a reputação dos negócios que
            atendemos.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it) => (
            <article
              key={it.title}
              className="group relative bg-white p-7 transition-colors hover:bg-brand-50/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 transition-all group-hover:bg-brand-600 group-hover:text-white">
                <it.Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-brand-950">
                {it.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {it.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
