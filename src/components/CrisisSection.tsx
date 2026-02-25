import crisisImg from "@/assets/crisis-struggle.jpg";

const stats = [
  { number: "1 in 36", label: "children diagnosed with autism" },
  { number: "78M+", label: "people affected worldwide" },
  { number: "80%", label: "families have no access to therapy" },
  { number: "$60K+", label: "annual cost of care per child" },
];

const CrisisSection = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-warmth mb-3">
            The Urgent Crisis
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Millions Are Waiting for Hope
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-hope">
            <img src={crisisImg} alt="Parent comforting a struggling child" className="w-full h-80 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-faith/60 to-transparent" />
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-card rounded-xl p-5 border border-border text-center shadow-sm">
                  <div className="font-display text-2xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="font-body text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
            <p className="font-body text-muted-foreground leading-relaxed">
              Every day, parents face impossible choices — expensive therapies they can't afford, 
              waiting lists that never end, and a world that doesn't understand. But God's healing 
              power knows no boundaries, no waiting lists, and no price tag.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrisisSection;
