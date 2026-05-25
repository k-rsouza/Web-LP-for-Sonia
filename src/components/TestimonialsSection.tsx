import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";

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
  {
    name: "AAAAAA",
    role: "AAAAAAA",
    text: "AAAAAAAAAAAAAAA",
    rating: 3,
  },
  {
    name: "BBBBB",
    role: "BBBB",
    text: "BBB",
    rating: 1,
  },
  {
    name: "CCCCCCC",
    role: "CCCCCC",
    text: "CCCCCC",
    rating: 2,
  },
  {
    name: "DDD.",
    role: "DDD",
    text: "DDD",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-wellness-pink">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 md:mb-16">
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

        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {testimonials.map((t) => (
              <CarouselItem
                key={t.name}
                className="pl-4 md:pl-6 basis-[85%] sm:basis-1/2 lg:basis-1/3"
              >
                <div className="bg-background rounded-xl p-6 shadow-card h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic flex-1">
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
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-2 bg-background/90 border-border hover:bg-background shadow-card" />
          <CarouselNext className="right-2 bg-background/90 border-border hover:bg-background shadow-card" />
        </Carousel>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-6 gradient-primary" : "w-2 bg-primary/30"
              }`}
              aria-label={`Ir para depoimento ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
