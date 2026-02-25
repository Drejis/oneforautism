import heroBg from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
  onDonateClick: () => void;
}

const HeroSection = ({ onDonateClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-75" />
      <div className="absolute inset-0 bg-gradient-to-b from-faith/60 via-transparent to-faith/80" />

      <div className="relative z-10 container mx-auto px-4 text-center py-32">
        <p className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-4 animate-float">
          A Faith-Powered Movement
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
          Your <span className="text-gradient-gold">$1</span> Can Bring
          <br />
          <span className="text-gold-light">Healing & Hope</span>
          <br />
          to a Child with Autism
        </h1>
        <p className="font-body text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Join 1 million people of faith giving just $1 each to reach families worldwide
          with the message of healing through Healing Streams Live Healing Services.
        </p>

        <button
          onClick={onDonateClick}
          className="bg-gradient-gold text-accent-foreground font-body font-bold text-lg px-10 py-5 rounded-full shadow-gold hover:scale-105 transition-all animate-pulse-slow"
        >
          Donate $1 Now — Change a Life
        </button>

        <p className="text-primary-foreground/50 font-body text-sm mt-6">
          100% goes to reaching families with healing resources
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary-foreground/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
