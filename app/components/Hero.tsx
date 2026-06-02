import {
  ArrowRight,
  Check,
  Clock,
  MapPin,
  Motorcycle,
  Shield,
  Star,
  Truck,
  Whatsapp,
} from "./Icons";
import { LogoFull, LogoPlane } from "./Logo";
import { WHATSAPP_LINK } from "./site-data";

/** Composição visual "Coleta confirmada" + badges flutuantes — `true` para voltar a exibir no hero. */
const HERO_USE_COLETA_CARD_COMPOSITION = false;

const HERO_BULLETS = [
  "Entregas no mesmo dia em Curitiba",
  "Carga delicada com cuidado certificado",
  "Atendimento direto com o entregador",
];

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-spotlight pointer-events-none" />
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)] pointer-events-none" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pt-14 pb-20 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pt-20 lg:pb-28">
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-800 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
            </span>
            Atendendo hoje em Curitiba e região
          </div>

          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-brand-950 sm:text-5xl lg:text-6xl animate-fade-up">
            Entregas <span className="text-gradient-brand">sérias</span>, no
            tempo que o seu negócio precisa.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 animate-fade-up">
            A <strong className="text-brand-800">Jef Entregas CWB</strong>{" "}
            transporta o que importa em Curitiba, região metropolitana e litoral
            do Paraná. Carro e moto, cargas delicadas, joias, chocolates e
            produtos perecíveis — com
            a profissionalidade que marcas como{" "}
            <span className="font-semibold text-zinc-800">Laboran</span>,{" "}
            <span className="font-semibold text-zinc-800">Camile Pilato</span> e{" "}
            <span className="font-semibold text-zinc-800">
              Brasil Cacau Shopping Água Verde
            </span>{" "}
            confiam.
          </p>

          <ul className="mt-7 space-y-2.5 animate-fade-up">
            {HERO_BULLETS.map((b) => (
              <li key={b} className="flex items-center gap-3 text-sm text-zinc-700">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-3 animate-fade-up">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-card transition-all hover:bg-brand-700 hover:shadow-glow"
            >
              <Whatsapp className="h-5 w-5" />
              Solicitar entrega agora
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-6 py-3.5 text-sm font-semibold text-brand-800 transition-all hover:border-brand-400 hover:bg-brand-50"
            >
              Conhecer serviços
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-zinc-500 animate-fade-up">
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 text-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-zinc-700">5.0</span>
              <span>· avaliação de parceiros</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-brand-700" />
              Sigilo e segurança garantidos
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-brand-700" />
              Resposta em minutos
            </div>
          </div>
        </div>

        {HERO_USE_COLETA_CARD_COMPOSITION ? (
          <div className="relative flex items-center justify-center">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-brand-100 via-white to-brand-50 blur-2xl opacity-70 pointer-events-none" />

            <div className="relative w-full max-w-md">
              <div className="relative rounded-3xl border border-brand-100 bg-white p-6 shadow-card animate-fade-up">
                <LogoPlane className="pointer-events-none absolute right-6 top-1/2 h-20 w-20 -translate-y-1/2 -scale-x-100 object-contain opacity-15" />
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                      Coleta confirmada
                    </div>
                    <div className="mt-1 font-display text-lg font-semibold text-zinc-900">
                      Pedido #JEF-2418
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-800">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                    Em rota
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                        Coleta
                      </div>
                      <div className="text-sm font-medium text-zinc-800">
                        Batel, Curitiba — PR
                      </div>
                    </div>
                  </div>

                  <div className="relative ml-[18px] h-6 border-l-2 border-dashed border-brand-200" />

                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                        Entrega
                      </div>
                      <div className="text-sm font-medium text-zinc-800">
                        Pontal do Sul — Litoral
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-zinc-100 pt-5">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                      Tipo
                    </div>
                    <div className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-brand-800">
                      <Truck className="h-4 w-4" /> Carro
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                      Carga
                    </div>
                    <div className="mt-1 text-sm font-semibold text-zinc-800">
                      Joias
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                      ETA
                    </div>
                    <div className="mt-1 text-sm font-semibold text-zinc-800">
                      1h 40m
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-6 -bottom-8 hidden sm:flex items-center gap-3 rounded-2xl border border-brand-100 bg-white p-3 pr-4 shadow-card animate-float-slow">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <Motorcycle className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                    Motoboy disponível
                  </div>
                  <div className="text-sm font-semibold text-zinc-800">
                    Centro de Curitiba
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 -top-6 hidden sm:flex flex-col items-center justify-center rounded-2xl border border-brand-100 bg-white px-4 py-3 shadow-card animate-float-slow">
                <div className="font-display text-2xl font-bold text-brand-700 leading-none">
                  +30 anos
                </div>
                <div className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                  de estrada
                </div>
              </div>I
            </div>
          </div>
        ) : (
          <div className="relative flex min-h-[200px] items-center justify-center lg:min-h-0">
            <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-brand-100/90 via-white to-brand-50/80 blur-2xl opacity-80 pointer-events-none" />
            <div className="relative w-full max-w-md px-2 sm:max-w-lg lg:max-w-none lg:px-0">
              <LogoFull
                priority
                className="mx-auto h-auto w-full max-w-[min(100%,420px)] rounded-3xl animate-fade-up sm:max-w-[480px] lg:mx-0 lg:max-w-full"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
