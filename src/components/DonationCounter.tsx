import { useState, useEffect, useRef } from "react";
import { Users, Heart, TrendingUp } from "lucide-react";

const DonationCounter = () => {
  const [count, setCount] = useState(124750);
  const [families, setFamilies] = useState(62375);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setCount((prev) => {
        const increment = Math.floor(Math.random() * 3) + 1;
        return Math.min(prev + increment, 1000000);
      });
      setFamilies((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [isVisible]);

  const progress = (count / 1000000) * 100;

  return (
    <section ref={ref} className="py-16 bg-gradient-faith">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Live Campaign Progress
          </p>

          <div className="animate-counter rounded-2xl bg-card p-8 shadow-hope border border-border">
            <div className="text-5xl md:text-6xl font-display font-bold text-gradient-gold mb-2">
              ${count.toLocaleString()}
            </div>
            <p className="font-body text-muted-foreground mb-6">
              raised toward <span className="font-semibold text-foreground">$1,000,000</span> goal
            </p>

            <div className="w-full h-4 bg-secondary rounded-full overflow-hidden mb-6">
              <div
                className="h-full bg-gradient-gold rounded-full transition-all duration-1000"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <Heart className="h-5 w-5 text-gold mb-1" />
                <span className="font-display text-xl font-bold text-foreground">
                  {count.toLocaleString()}
                </span>
                <span className="font-body text-xs text-muted-foreground">Donors</span>
              </div>
              <div className="flex flex-col items-center">
                <Users className="h-5 w-5 text-hope mb-1" />
                <span className="font-display text-xl font-bold text-foreground">
                  {families.toLocaleString()}
                </span>
                <span className="font-body text-xs text-muted-foreground">Families Reached</span>
              </div>
              <div className="flex flex-col items-center">
                <TrendingUp className="h-5 w-5 text-healing mb-1" />
                <span className="font-display text-xl font-bold text-foreground">
                  {Math.round(progress)}%
                </span>
                <span className="font-body text-xs text-muted-foreground">Complete</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationCounter;
