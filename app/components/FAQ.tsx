"use client";

import { useState } from "react";
import { Plus } from "./Icons";

const FAQS = [
  {
    q: "Quais regiões a Jef Entregas CWB atende?",
    a: "Atendemos toda Curitiba, região metropolitana (São José dos Pinhais, Pinhais, Colombo, Araucária, Campo Largo, entre outras) e o litoral paranaense, incluindo Pontal do Paraná, Matinhos, Guaratuba e Paranaguá.",
  },
  {
    q: "Vocês transportam joias e cargas delicadas?",
    a: "Sim. Temos experiência específica com joias, semi-joias e cosméticos — atendendo marcas como Camile Pilato e Cacau Brasil. Trabalhamos com discrição, sigilo e protocolos de segurança.",
  },
  {
    q: "Como funciona o orçamento?",
    a: "É simples: você nos chama no WhatsApp informando coleta, destino, tipo de carga e prazo. Respondemos em minutos com um valor justo e transparente.",
  },
  {
    q: "Qual a diferença entre carro e moto?",
    a: "A moto é ideal para entregas ágeis em Curitiba, com cargas menores e prazos curtos. O carro atende volumes maiores, cargas delicadas e trajetos para RMC e litoral.",
  },
  {
    q: "Vocês fazem entregas recorrentes para empresas?",
    a: "Sim. Atendemos marcas com cronogramas fixos — alinhamos coletas, horários e padrão de atendimento conforme a operação da sua empresa.",
  },
  {
    q: "É possível acompanhar a entrega?",
    a: "Sim. Você fala diretamente com o entregador e recebe atualizações de status durante todo o trajeto, incluindo confirmação da entrega final.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section relative">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-800">
            Perguntas frequentes
          </span>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-950">
            Tudo o que você precisa saber{" "}
            <span className="text-gradient-brand">antes da próxima entrega</span>
          </h2>
        </div>

        <div className="mt-12 divide-y divide-border rounded-3xl border border-border bg-white shadow-soft">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-brand-50/40"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-semibold text-brand-950">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-200 bg-white text-brand-700 transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-relaxed text-zinc-600">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
