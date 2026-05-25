import { Activity, Dumbbell, Flower2, Cross } from "lucide-react";
import { WHATSAPP_URL } from "../lib/utils";

const services = [
  {
    icon: Activity,
    title: "Massagem terapêutica",
    description:
      "Massagem terapêutica direcionada a tratar dores, restaurar a funções e promover a cura nos grupos musculares afetados.",
    duration: "60 min",
  },
  {
    icon: Dumbbell,
    title: "Massagem para recuperação esportiva",
    description:
      "Técnicas especializadas para atletas focando aceleração da recuperação muscular, melhora da flexibilidade e prevensão de lesões.",
    duration: "60–90 min",
  },
  {
    icon: Cross,
    title: "Tratamento de contratura musculares",
    description:
      "Trabalho focado nos tecidos profundos e terapia pontos-gatilho para liberar contraturas e nós musculares crônicos.",
    duration: "60 min",
  },
  {
    icon: Flower2,
    title: "Massagem relaxante",
    description:
      "Técnicas terapêuticas suaves para reduzir o estresse, acalmar o sistema nervoso e promover o relaxamento muscular.",
    duration: "60 min",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-wellness-lavender">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Nossos serviços
          </p>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
            Tratamentos Terapêuticos
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Serviços de massoterapia fundamentados na ciência e na anatomia, 
            desenvolvidos para atender às necessidades musculoesqueléticas de forma individualizada.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-background rounded-xl p-6 shadow-card hover:shadow-soft transition-shadow duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:gradient-primary transition-all duration-300">
                <service.icon
                  size={22}
                  className="text-primary group-hover:text-primary-foreground transition-colors duration-300"
                />
              </div>
              <h3 className="text-lg font-heading text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-xs font-medium text-muted-foreground">
                  {service.duration}
                </span>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-primary hover:underline"
                >
                  Agendar agora →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
