import prayerImg from "@/assets/prayer-scene.jpg";
import transformImg from "@/assets/transformation.jpg";

const MiracleSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-gold mb-3">
            The Miracle
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            From Silence to Speech. From Struggle to Joy.
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Through The Man of God and Healing Streams, children who were non-verbal 
            are speaking. Families shattered by despair are restored.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="relative group">
            <div className="absolute -top-3 -left-3 bg-destructive text-destructive-foreground font-body text-xs font-bold px-3 py-1 rounded-full z-10">
              BEFORE
            </div>
            <img
              src={prayerImg}
              alt="Prayer scene with hands laid over a child"
              className="w-full h-72 object-cover rounded-2xl border-2 border-border shadow-sm"
            />
            <p className="font-body text-sm text-muted-foreground mt-3 text-center">
              A family in prayer, seeking healing through faith
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -top-3 -left-3 bg-healing text-healing-foreground font-body text-xs font-bold px-3 py-1 rounded-full z-10">
              AFTER
            </div>
            <img
              src={transformImg}
              alt="Joyful child speaking and laughing after healing"
              className="w-full h-72 object-cover rounded-2xl border-2 border-gold/30 shadow-gold"
            />
            <p className="font-body text-sm text-muted-foreground mt-3 text-center">
              A child healed, speaking, laughing — miracle of faith
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiracleSection;
