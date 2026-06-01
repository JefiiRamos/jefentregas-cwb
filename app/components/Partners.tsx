import Image from "next/image";
type Partner = {
  name: string;
  description: string;
  tag: string;
  chips: string[];
  logo: string;
};

const PARTNERS: Partner[] = [
  {
    name: "Camile Pilato",
    description:
      "Transporte com discrição, cuidado no manuseio e atenção redobrada para itens de maior valor agregado.",
    tag: "Joias & semi-joias",
    chips: ["Discrição", "Carga delicada", "Cuidado premium"],
    logo: "/camilePilatoLogo.png",
  },
  {
    name: "Laboran",
    description:
      "Apoio logístico contínuo para rotinas que precisam de previsibilidade, comunicação clara e cumprimento de cronogramas.",
    logo: "/laboran-logo.jpg",
    tag: "Operação recorrente",
    chips: ["Recorrência", "Pontualidade", "Controle de rota"],
  },
  {
    name: "Brasil Cacau",
    description:
      "Apoio em entregas estratégicas para produtos sensíveis, com atenção a prazo, apresentação da carga e períodos de alta demanda.",
    logo: "/brasilCacauLogo.png",
    tag: "Chocolates",
    chips: ["Entrega programada", "Produto sensível", "Alta demanda"],
  },
];

function PartnerMedia({ partner }: { partner: Partner }) {
  return (
    <Image
      src={partner.logo}
      alt={`Logo ${partner.name}`}
      width={64}
      height={64}
      className="h-16 w-16 shrink-0 rounded-2xl border border-brand-100 bg-white object-contain shadow-soft transition-transform duration-300 ease-out group-hover:scale-105"
      sizes="64px"
      priority
    />
  );
}

export default function Partners() {
  return (
    <section id="parceiros" className="section relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-800">
            Clientes e operações atendidas
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
            Parceiros que confiam na Jef para entregas{" "}
            <span className="text-gradient-brand">com responsabilidade</span>
          </h2>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            Atendemos empresas que precisam de pontualidade, discrição e
            cuidado real com cada entrega. De marcas locais a operações
            recorrentes, nosso compromisso é proteger o nome do cliente em cada
            rota.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PARTNERS.map((p) => (
            <article
              key={p.name}
              className="group relative overflow-hidden rounded-3xl border border-border bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-card"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-50 transition-transform duration-500 group-hover:scale-150" />
              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <PartnerMedia partner={p} />
                  <span className="mt-2 max-w-36 text-right text-[10px] font-semibold uppercase tracking-wider text-brand-700">
                    {p.tag}
                  </span>
                </div>

                <div className="mt-5">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-brand-950">
                    {p.name}
                  </h3>
                  <span className="mt-2 inline-flex text-[11px] font-semibold uppercase tracking-wider text-brand-700">
                    Como ajudamos
                  </span>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-[11px] font-semibold text-brand-800"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
