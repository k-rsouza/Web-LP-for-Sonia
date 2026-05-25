import { ShieldCheck, MapPin, Phone, Mail } from "lucide-react";
import { WHATSAPP_URL } from "../lib/utils";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background">
      {/* CTA */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading mb-4">
            Pronto(a) para iniciar sua recuperação?
          </h2>
          <p className="text-background/70 mb-8">
            Agende uma consula e dê o primeiro passo para uma vida sem dores.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block gradient-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:opacity-90 transition-opacity shadow-soft"
          >
            Agendar um atendimento
          </a>
        </div>

        {/* Professional Policy */}
        <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6 mb-16 max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <ShieldCheck size={20} className="text-background/80" />
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-1">Política Profissional</h3>
              <p className="text-xs text-background/60 leading-relaxed">
                Todos os serviços prestados são estritamente terapêuticos e profissionais. Nossa prática segue os mais altos padrões éticos da
                profissão e da massoterapia. Estamos empenhados em fornecer um ambiente seguro,
                respeitoso e clínico para todos os clientes. Qualquer forma de
                solicitação inadequada não será tolerada.
              </p>
            </div>
          </div>
        </div>

        {/* Contact & Footer links */}
        <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-background/10">
          <div>
            <h3 className="font-heading text-xl mb-4">
              Massoterapia<span className="text-primary">.</span>
            </h3>
            <p className="text-sm text-background/50">
              Serviços profissionais de massagem terapêutica para recuperação,
              alívio da dor e bem-estar.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Links Rápidos</h4>
            <div className="space-y-2">
              {[
                { label: "Sobre", href: "#about" },
                { label: "Serviços", href: "#services" },
                { label: "Benefícios", href: "#benefits" },
                { label: "Depoimentos", href: "#testimonials" },
              ].map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="block text-sm text-background/50 hover:text-background transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              {[
                { icon: MapPin, text: "Rua 14 de julho, 40 - Porto Alegre, RS" },
                { icon: Phone, text: "(51) 99867-3066" },
                { icon: Mail, text: "srmassoterapeuta@gmail.com" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon size={14} className="text-background/40" />
                  <span className="text-sm text-background/50">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center pt-8 mt-8 border-t border-background/10">
          <p className="text-xs text-background/30">
            © {new Date().getFullYear()} Massotherapy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
