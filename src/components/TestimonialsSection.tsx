import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos M.",
    role: "Marathon Runner",
    text: "After months of recurring calf tightness, the therapeutic treatment here completely transformed my recovery. I'm running pain-free and faster than ever.",
    rating: 5,
  },
  {
    name: "Ana L.",
    role: "Office Professional",
    text: "Years of desk work left me with chronic neck and shoulder tension. The targeted muscle contracture treatment gave me relief I didn't think was possible.",
    rating: 5,
  },
  {
    name: "Ricardo S.",
    role: "CrossFit Athlete",
    text: "I book regular sports recovery sessions. The therapist truly understands athlete needs — my mobility has improved significantly and recovery time is cut in half.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-wellness-pink">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Feedbacks
          </p>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
            O que os clientes dizem
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Feedback real de clientes e atletas que experimentaram os benefícios
            da massagem terapêutica.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-background rounded-xl p-6 shadow-card"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">
                    {t.name[0]}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
