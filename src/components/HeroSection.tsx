import heroImage from "@/assets/hero-massage5.jpeg";
import { WHATSAPP_URL } from "../lib/utils";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional therapeutic massage clinic interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20 md:pt-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-accent/80 backdrop-blur-sm text-accent-foreground px-3 py-1.5 rounded-full text-xs md:text-sm font-medium mb-5 md:mb-6">
            <span className="w-2 h-2 rounded-full gradient-primary flex-shrink-0" />
            Terapeuta Certificada & Licenciada
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-primary leading-tight mb-5 md:mb-6">
            Massoterapeuta Profissional{" "}
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl text-foreground">Sonia Rodrigues</span>
          </h1>

          <p className="text-base md:text-xl text-muted-foreground leading-relaxed mb-7 md:mb-8 max-w-sm md:max-w-lg">
            Especializada em recuperação muscular, alívio da dor, restauração da mobilidade e promoção do bem-estar,
            com atendimentos personalizados que incluem técnicas como liberação miofascial, drenagem linfática e massagem modeladora.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-primary text-primary-foreground px-7 py-3.5 md:px-8 md:py-4 rounded-lg text-sm md:text-base font-semibold hover:opacity-90 transition-opacity shadow-soft text-center"
            >
              Agendar atendimento
            </a>
            <a
              href="#services"
              className="bg-background/80 backdrop-blur-sm border border-border text-foreground px-7 py-3.5 md:px-8 md:py-4 rounded-lg text-sm md:text-base font-medium hover:bg-muted transition-colors text-center"
            >
              Ver serviços
            </a>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-3 gap-4 mt-10 md:mt-12 pt-7 md:pt-8 border-t border-border/50">
            <div>
              <p className="text-xl md:text-2xl font-heading text-foreground">15+</p>
              <p className="text-xs md:text-sm text-muted-foreground leading-tight mt-0.5">Anos de experiência</p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-heading text-foreground">2.500+</p>
              <p className="text-xs md:text-sm text-muted-foreground leading-tight mt-0.5">Clientes atendidos</p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-heading text-foreground">98%</p>
              <p className="text-xs md:text-sm text-muted-foreground leading-tight mt-0.5">Taxa de Satisfação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
