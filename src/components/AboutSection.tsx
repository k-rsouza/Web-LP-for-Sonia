import { Shield, Heart, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Sobre a Terapeuta
            </p>
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-6">
              Dedicado à sua recuperação e bem-estar
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Com mais de uma década de experiência em massoterapia, sou especialista
              no tratamento de tensão muscular, contraturas e lesões relacionadas ao esporte.
              Minha prática é fundamentada em técnicas evidenciadas e em um profundo
              conhecimento da anatomia musculoesquelética.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Cada plano de tratamento é personalizado para atender às suas necessidades específicas —
              seja você um atleta se recuperando de um treinamento intenso ou alguém
              buscando alívio da dor crônica e do estresse diário. Meu objetivo é ajudar
              você se mover melhor e se sentir melhor.
            </p>

            <div className="space-y-4">
              {[
                { icon: Shield, text: "Profissional licenciada e certificada" },
                { icon: Heart, text: "Foco na promoção da saúde, bem-estar e qualidade de vida do paciente" },
                { icon: Award, text: "Certificado técnico em massoterapia" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto max-w-sm md:max-w-none">
            <div className="bg-wellness-lavender rounded-2xl aspect-[4/5] flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full gradient-primary mx-auto mb-5 md:mb-6 flex items-center justify-center">
                  <span className="text-primary-foreground text-3xl md:text-4xl font-heading">MT</span>
                </div>
                <h3 className="text-lg md:text-xl font-heading text-foreground mb-2">Profissional Massoterapeuta</h3>
                <p className="text-sm text-muted-foreground">BSc Kinesiology · RMT · CSMT</p>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-20 h-20 md:w-24 md:h-24 bg-wellness-pink rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
