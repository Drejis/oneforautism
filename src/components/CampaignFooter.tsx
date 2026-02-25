import { Heart, Shield, Lock } from "lucide-react";

interface FooterProps {
  onDonateClick: () => void;
}

const CampaignFooter = ({ onDonateClick }: FooterProps) => {
  return (
    <footer className="bg-faith text-faith-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Will You Give Your <span className="text-gold">$1</span> Today?
          </h2>
          <p className="font-body text-faith-foreground/70 max-w-lg mx-auto mb-6">
            One dollar. One act of faith. One child's life forever changed.
          </p>
          <button
            onClick={onDonateClick}
            className="bg-gradient-gold text-accent-foreground font-body font-bold text-lg px-10 py-4 rounded-full shadow-gold hover:scale-105 transition-all"
          >
            Donate $1 Now
          </button>
        </div>

        <div className="flex justify-center gap-8 mb-10">
          <div className="flex items-center gap-2 text-faith-foreground/50">
            <Shield className="h-4 w-4" />
            <span className="font-body text-xs">SSL Secured</span>
          </div>
          <div className="flex items-center gap-2 text-faith-foreground/50">
            <Lock className="h-4 w-4" />
            <span className="font-body text-xs">256-bit Encryption</span>
          </div>
          <div className="flex items-center gap-2 text-faith-foreground/50">
            <Heart className="h-4 w-4" />
            <span className="font-body text-xs">100% to Families</span>
          </div>
        </div>

        <div className="border-t border-faith-foreground/10 pt-6 text-center">
          <p className="font-body text-xs text-faith-foreground/40">
            © 2025 1forAutism.com — A campaign of Healing Streams Live Healing Services & The Healing School.
            <br />
            All donations are processed securely. Contact: hello@1forautism.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default CampaignFooter;
