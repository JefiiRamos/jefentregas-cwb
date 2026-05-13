import { ArrowRight, Whatsapp } from "./Icons";
import { LogoWordmark } from "./Logo";
import { SITE, WHATSAPP_LINK } from "./site-data";

export default function CallToAction() {
  return (
    <section id="contato" className="section relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-brand-200 bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 px-6 py-12 sm:px-12 sm:py-16 shadow-card">
          <div className="absolute inset-0 bg-dots opacity-20" />
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-300/25 blur-3xl" />
          <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-brand-300/20 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <div className="mb-6 max-w-[min(100%,320px)] drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
                <LogoWordmark className="h-9 w-auto sm:h-11" />
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-50 backdrop-blur-sm">
                Pronto para enviar?
              </span>
              <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Fale com a Jef Entregas e tire sua entrega do papel{" "}
                <span className="text-brand-100">ainda hoje</span>.
              </h2>
              <p className="mt-5 max-w-xl text-brand-50/90 leading-relaxed">
                Atendimento direto, orçamento rápido pelo WhatsApp e a
                tranquilidade de saber que sua carga está em boas mãos.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-800 shadow-soft transition-all hover:shadow-glow"
                >
                  <Whatsapp className="h-5 w-5" />
                  Chamar no WhatsApp
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={`tel:+${SITE.whatsappNumber}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
                >
                  Ligar agora · {SITE.whatsappDisplay}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-md shadow-card">
                <div className="text-xs font-semibold uppercase tracking-wider text-brand-100/80">
                  Horário de atendimento
                </div>
                <div className="mt-4 space-y-3 text-sm text-white">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-brand-100/85">Segunda a sexta</span>
                    <span className="font-semibold">08h — 19h</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-brand-100/85">Sábado</span>
                    <span className="font-semibold">08h — 14h</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-brand-100/85">Domingo</span>
                    <span className="font-semibold">Sob agendamento</span>
                  </div>
                </div>
                <div className="mt-6 rounded-2xl bg-white/95 px-4 py-3 text-xs text-brand-900">
                  <strong className="font-semibold">Dica:</strong> entregas
                  recorrentes podem ter agenda fixa e condições especiais.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
