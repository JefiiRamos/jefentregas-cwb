import {
  ArrowRight,
  Building,
  Check,
  Diamond,
  Globe,
  MapPin,
  Motorcycle,
  Sparkle,
  Truck,
} from "./Icons";
import { WHATSAPP_LINK } from "./site-data";

const VEHICLES = [
  {
    Icon: Truck,
    name: "Entregas de carro",
    description:
      "Ideais para cargas maiores, volumes frágeis, joias, cosméticos e pequenas viagens entre cidades.",
    features: [
      "Espaço para volumes maiores",
      "Transporte com climatização",
      "Indicado para cargas delicadas",
      "Pequenas viagens e RMC",
    ],
    badge: "Mais procurado",
  },
  {
    Icon: Motorcycle,
    name: "Entregas de moto",
    description:
      "Agilidade para documentos, encomendas urgentes e roteiros dentro de Curitiba e bairros vizinhos.",
    features: [
      "Trânsito ágil em Curitiba",
      "Custo otimizado",
      "Ideal para urgências",
      "Documentos e pequenos volumes",
    ],
    badge: "Express",
  },
];

const SERVICES = [
  {
    Icon: MapPin,
    title: "Entregas em Curitiba",
    desc: "Toda a capital atendida com rotas otimizadas e prazos cumpridos.",
  },
  {
    Icon: Building,
    title: "Região Metropolitana",
    desc: "São José dos Pinhais, Pinhais, Colombo, Araucária e demais cidades da RMC.",
  },
  {
    Icon: Globe,
    title: "Litoral paranaense",
    desc: "Matinhos, Guaratuba, Pontal do Paraná, Paranaguá e cidades vizinhas.",
  },
  {
    Icon: Truck,
    title: "Pequenas viagens",
    desc: "Trechos rodoviários planejados para cargas que exigem cuidado e pontualidade.",
  },
  {
    Icon: Diamond,
    title: "Joias e semi-joias",
    desc: "Transporte discreto, com sigilo e protocolos de segurança específicos.",
  },
  {
    Icon: Sparkle,
    title: "Cosméticos e marcas",
    desc: "Distribuição alinhada ao calendário comercial da sua marca.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="section relative bg-surface">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-end gap-6 md:grid-cols-[1fr_auto] mb-12">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-800">
              Nossos serviços
            </span>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-950">
              Carro, moto e a logística certa para{" "}
              <span className="text-gradient-brand">cada tipo de entrega</span>
            </h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Estruturamos a operação de acordo com a sua carga, o seu cliente e
              o seu prazo. Sem terceirização: você fala diretamente com quem
              dirige.
            </p>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden md:inline-flex items-center gap-2 self-end rounded-full bg-brand-900 px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-brand-800"
          >
            Pedir orçamento
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Vehicle cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {VEHICLES.map((v) => (
            <article
              key={v.name}
              className="group relative overflow-hidden rounded-3xl border border-border bg-white p-7 shadow-soft transition-all hover:border-brand-300 hover:shadow-card"
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-[6rem] bg-gradient-to-br from-brand-50 to-transparent" />
              <div className="relative flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-soft transition-transform group-hover:scale-105">
                  <v.Icon className="h-7 w-7" />
                </div>
                <span className="rounded-full bg-brand-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                  {v.badge}
                </span>
              </div>
              <h3 className="relative mt-5 font-display text-2xl font-bold tracking-tight text-brand-950">
                {v.name}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-zinc-600">
                {v.description}
              </p>
              <ul className="relative mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {v.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-zinc-700">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                      <Check className="h-3 w-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Specializations */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="group rounded-2xl border border-border bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-soft"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <s.Icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-base font-semibold text-brand-950">
                    {s.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                    {s.desc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
