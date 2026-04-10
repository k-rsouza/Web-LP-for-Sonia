import { Check } from "lucide-react";

const benefits = [
  {
    title: "Alívio da Dor",
    description: "Reduz a dor muscular crônica e aguda por meio de técnicas terapêuticas direcionadas.",
  },
  {
    title: "Relaxamento Muscular",
    description: "Libera a tensão e a rigidez muscular para restaurar a função natural.",
  },
  {
    title: "Recuperação Rápida",
    description: "Acelera a recuperação após atividade física, cirurgia ou lesão.",
  },
  {
    title: "Redução do Estresse",
    description: "Reduz os níveis de cortisol e promove um sistema nervoso calmo e equilibrado.",
  },
  {
    title: "Melhora da Mobilidade",
    description: "Aumenta a qualidade da movimentação e a flexibilidade, para uma melhor mobilidade diária.",
  },
  {
    title: "Melhora na Qualidade do Sono",
    description: "A massagem terapêutica promove padrões de sono mais profundos e restauradores.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Por que massoterapia?
            </p>
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
              Benefícios da Massagem Terapêutica
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A massagem terapêutica regular é clinicamente comprovada para apoiar a
              recuperação física, reduzir a dor e melhorar a qualidade de vida.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-wellness-lavender rounded-xl p-5 hover:shadow-card transition-shadow"
              >
                <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center mb-3">
                  <Check size={14} className="text-primary-foreground" />
                </div>
                <h3 className="text-base font-semibold font-heading text-foreground mb-1">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
