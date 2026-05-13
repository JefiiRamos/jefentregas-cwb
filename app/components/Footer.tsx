import { Instagram, Mail, MapPin, Whatsapp } from "./Icons";
import { LogoWordmark } from "./Logo";
import { SITE, WHATSAPP_LINK } from "./site-data";

export default function Footer() {
  return (
    <footer className="relative bg-brand-950 text-brand-50/85">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#topo" className="inline-block max-w-[min(100%,280px)]">
              <LogoWordmark className="h-10 w-auto sm:h-12" />
            </a>
            <p className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-brand-300/90">
              {SITE.name}
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-brand-100/75">
              Entregas de carro e moto em Curitiba, região metropolitana e
              litoral paranaense. Cargas delicadas tratadas com a seriedade que
              o seu negócio merece.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-brand-950 transition-colors hover:bg-brand-400"
            >
              <Whatsapp className="h-4 w-4" />
              Solicitar entrega
            </a>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Serviços
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#servicos" className="hover:text-white">Entregas de carro</a></li>
              <li><a href="#servicos" className="hover:text-white">Entregas de moto</a></li>
              <li><a href="#servicos" className="hover:text-white">Joias e semi-joias</a></li>
              <li><a href="#servicos" className="hover:text-white">Cosméticos</a></li>
              <li><a href="#servicos" className="hover:text-white">Pequenas viagens</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Cobertura
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#cobertura" className="hover:text-white">Curitiba</a></li>
              <li><a href="#cobertura" className="hover:text-white">Região Metropolitana</a></li>
              <li><a href="#cobertura" className="hover:text-white">Litoral do Paraná</a></li>
              <li><a href="#cobertura" className="hover:text-white">Pequenas viagens</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Contato
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Whatsapp className="mt-0.5 h-4 w-4 text-brand-300" />
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {SITE.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 text-brand-300" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white break-all">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Instagram className="mt-0.5 h-4 w-4 text-brand-300" />
                <span>{SITE.instagram}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 text-brand-300" />
                <span>{SITE.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-brand-200/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
          </p>
          <p>
            Atendimento em Curitiba, Região Metropolitana e Litoral do Paraná.
          </p>
        </div>
      </div>
    </footer>
  );
}
