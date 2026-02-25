import { DollarSign, Send, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: DollarSign,
    title: "You Give $1",
    description: "A single dollar — the price of a prayer — becomes a seed of faith that multiplies.",
  },
  {
    icon: Send,
    title: "We Reach a Family",
    description:
      "Your $1 sends Healing Streams videos, prayer resources, and The Healing School teachings to a family in need.",
  },
  {
    icon: HeartHandshake,
    title: "Lives Are Transformed",
    description:
      "Families receive the gospel of healing. Children are prayed for. Miracles happen. Hope is restored.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-faith">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-hope mb-3">
            Simple & Powerful
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            How Your <span className="text-gradient-gold">$1</span> Works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="bg-card rounded-2xl p-8 text-center border border-border shadow-sm hover:shadow-hope transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-gold mx-auto flex items-center justify-center mb-5">
                <step.icon className="h-7 w-7 text-accent-foreground" />
              </div>
              <div className="font-body text-xs text-gold font-semibold mb-2">STEP {i + 1}</div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
