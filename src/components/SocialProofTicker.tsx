import { useEffect, useState } from "react";

const donors = [
  { name: "Sarah", location: "Lagos", amount: 1 },
  { name: "David", location: "Houston", amount: 5 },
  { name: "Mercy", location: "Abuja", amount: 1 },
  { name: "James", location: "London", amount: 10 },
  { name: "Grace", location: "Nairobi", amount: 1 },
  { name: "Emmanuel", location: "Accra", amount: 1 },
  { name: "Rebecca", location: "Toronto", amount: 25 },
  { name: "Peter", location: "Johannesburg", amount: 1 },
  { name: "Ruth", location: "Dallas", amount: 5 },
  { name: "Joy", location: "Port Harcourt", amount: 1 },
];

const SocialProofTicker = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % donors.length);
        setVisible(true);
      }, 500);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const donor = donors[current];

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <div
        className={`bg-card border border-border rounded-xl px-4 py-3 shadow-hope flex items-center gap-3 transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center text-accent-foreground font-body font-bold text-sm">
          ${donor.amount}
        </div>
        <div>
          <p className="font-body text-sm font-medium text-foreground">
            {donor.name} from {donor.location}
          </p>
          <p className="font-body text-xs text-muted-foreground">just donated • moments ago</p>
        </div>
      </div>
    </div>
  );
};

export default SocialProofTicker;
