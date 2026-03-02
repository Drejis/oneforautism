import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

interface StickyHeaderProps {
  onDonateClick: () => void;
}

const StickyHeader = ({ onDonateClick }: StickyHeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-hope"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <Heart className="h-7 w-7 text-gold" fill="currentColor" />
          <span className="font-display text-xl font-bold tracking-tight">
            <span className={scrolled ? "text-foreground" : "text-primary-foreground"}>Heal a</span>
            {" "}
            <span className="text-gold">Child</span>
          </span>
        </div>
        <button
          onClick={onDonateClick}
          className="bg-gradient-gold text-accent-foreground font-body font-semibold px-6 py-2.5 rounded-full shadow-gold hover:scale-105 transition-transform text-sm"
        >
          Donate $1 Now
        </button>
      </div>
    </header>
  );
};

export default StickyHeader;
