"use client";

import Image from "next/image";
import { useState } from "react";

type Partner = {
  name: string;
  location?: string;
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
    location: "Shopping Água Verde",
    description:
      "Apoio em entregas estratégicas de chocolates e produtos perecíveis, com atenção a prazo, apresentação da carga e períodos de alta demanda.",
    logo: "/brasilCacauLogo.png",
    tag: "Produto perecível",
    chips: ["Chocolates", "Entrega programada", "Carga sensível"],
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
  const [activePartner, setActivePartner] = useState<Partner | null>(null);

  return (
    <section
      id="parceiros"
      className="section relative isolate overflow-hidden"
      onMouseLeave={() => setActivePartner(null)}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-500"
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br from-white via-brand-50/45 to-white transition-opacity duration-500 ${
            activePartner ? "opacity-100" : "opacity-0"
          }`}
        />
        {activePartner ? (
          <>
            <Image
              key={`${activePartner.name}-glow`}
              src={activePartner.logo}
              alt=""
              width={760}
              height={760}
              className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.16] blur-3xl saturate-150 transition-all duration-700 md:h-[44rem] md:w-[44rem] md:opacity-[0.14]"
              sizes="(min-width: 768px) 42rem, 28rem"
              priority
            />
            <Image
              key={`${activePartner.name}-mark`}
              src={activePartner.logo}
              alt=""
              width={520}
              height={520}
              className="absolute right-[-4rem] top-24 hidden h-[24rem] w-[24rem] rotate-6 object-contain opacity-10 blur-xl saturate-125 transition-all duration-700 md:block lg:right-[8%] lg:top-20 lg:h-[32rem] lg:w-[32rem]"
              sizes="32rem"
              priority
            />
          </>
        ) : null}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
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
              tabIndex={0}
              onClick={() => setActivePartner(p)}
              onFocus={() => setActivePartner(p)}
              onBlur={() => setActivePartner(null)}
              onMouseEnter={() => setActivePartner(p)}
              onMouseMove={() => setActivePartner(p)}
              className="group relative overflow-hidden rounded-3xl border border-border bg-white/90 p-7 shadow-soft outline-none backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:bg-white/95 hover:shadow-card focus-visible:-translate-y-1 focus-visible:border-brand-300 focus-visible:ring-4 focus-visible:ring-brand-100"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-50 transition-transform duration-500 group-hover:scale-150 group-focus-visible:scale-150" />
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
                  {p.location ? (
                    <div className="mt-1 text-sm font-semibold text-brand-700">
                      {p.location}
                    </div>
                  ) : null}
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
