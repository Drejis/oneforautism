import { useState } from "react";
import { X, Heart, Shield, CreditCard } from "lucide-react";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const amounts = [1, 5, 10, 25];

const DonationModal = ({ isOpen, onClose }: DonationModalProps) => {
  const [selected, setSelected] = useState(1);
  const [custom, setCustom] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [step, setStep] = useState<"amount" | "checkout" | "success">("amount");
  const [email, setEmail] = useState("");

  if (!isOpen) return null;

  const donationAmount = isCustom ? Number(custom) || 0 : selected;

  const handleProceed = () => {
    if (step === "amount" && donationAmount > 0) setStep("checkout");
    else if (step === "checkout") setStep("success");
  };

  const handleClose = () => {
    setStep("amount");
    setSelected(1);
    setCustom("");
    setIsCustom(false);
    setEmail("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-faith/70 backdrop-blur-sm" onClick={handleClose} />

      <div className="relative bg-card rounded-2xl shadow-hope border border-border max-w-md w-full max-h-[90vh] overflow-y-auto">
        <button onClick={handleClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
          <X className="h-5 w-5" />
        </button>

        <div className="p-6">
          {step === "amount" && (
            <>
              <div className="text-center mb-6">
                <Heart className="h-10 w-10 text-gold mx-auto mb-3" fill="currentColor" />
                <h3 className="font-display text-2xl font-bold text-foreground">Give Hope Today</h3>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  Every dollar reaches a family with the healing message
                </p>
              </div>

              <div className="grid grid-cols-4 gap-3 mb-4">
                {amounts.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => { setSelected(amt); setIsCustom(false); }}
                    className={`py-3 rounded-xl font-body font-semibold text-lg border-2 transition-all ${
                      !isCustom && selected === amt
                        ? "border-gold bg-gold/10 text-foreground shadow-gold"
                        : "border-border text-muted-foreground hover:border-gold/50"
                    }`}
                  >
                    ${amt}
                  </button>
                ))}
              </div>

              <div className="mb-6">
                <button
                  onClick={() => setIsCustom(true)}
                  className={`w-full py-3 rounded-xl border-2 font-body transition-all ${
                    isCustom ? "border-gold bg-gold/10" : "border-border"
                  }`}
                >
                  {isCustom ? (
                    <input
                      type="number"
                      placeholder="Enter amount"
                      value={custom}
                      onChange={(e) => setCustom(e.target.value)}
                      className="w-full text-center bg-transparent outline-none font-semibold text-lg text-foreground"
                      autoFocus
                      min="1"
                    />
                  ) : (
                    <span className="text-muted-foreground">Other Amount</span>
                  )}
                </button>
              </div>

              <button
                onClick={handleProceed}
                disabled={donationAmount <= 0}
                className="w-full py-4 bg-gradient-gold text-accent-foreground font-body font-bold text-lg rounded-xl shadow-gold hover:scale-[1.02] transition-all disabled:opacity-50"
              >
                Donate ${donationAmount} Now
              </button>

              <p className="text-center font-body text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1">
                <Shield className="h-3 w-3" /> Secure • Encrypted • Tax-deductible
              </p>
            </>
          )}

          {step === "checkout" && (
            <>
              <div className="text-center mb-6">
                <CreditCard className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-display text-xl font-bold text-foreground">Quick Checkout</h3>
                <p className="font-body text-sm text-muted-foreground">Donating ${donationAmount}</p>
              </div>

              <div className="space-y-4 mb-6">
                <input
                  type="email"
                  placeholder="Email (optional for receipt)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                />
                <div className="bg-secondary rounded-xl p-4">
                  <p className="font-body text-xs text-muted-foreground mb-2">Payment Method</p>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 rounded-lg bg-primary text-primary-foreground font-body text-sm font-medium">
                      Card
                    </button>
                    <button className="flex-1 py-2 rounded-lg border border-border text-muted-foreground font-body text-sm">
                      Bank Transfer
                    </button>
                    <button className="flex-1 py-2 rounded-lg border border-border text-muted-foreground font-body text-sm">
                      USSD
                    </button>
                  </div>
                </div>
                <p className="font-body text-xs text-muted-foreground">
                  🇳🇬 Dial *737*amount# for GTBank USSD or use Paystack/Flutterwave supported channels
                </p>
              </div>

              <button
                onClick={handleProceed}
                className="w-full py-4 bg-gradient-gold text-accent-foreground font-body font-bold text-lg rounded-xl shadow-gold hover:scale-[1.02] transition-all"
              >
                Complete Donation
              </button>

              <button onClick={() => setStep("amount")} className="w-full text-center font-body text-sm text-muted-foreground mt-3 hover:text-foreground">
                ← Back
              </button>
            </>
          )}

          {step === "success" && (
            <div className="text-center py-6">
              <div className="w-20 h-20 rounded-full bg-healing/10 mx-auto flex items-center justify-center mb-4">
                <Heart className="h-10 w-10 text-healing" fill="currentColor" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                God Bless You! 🙏
              </h3>
              <p className="font-body text-muted-foreground mb-6">
                Your ${donationAmount} donation is bringing healing to a family right now.
              </p>

              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: "I gave my $1 to Heal a Child!",
                      text: "I just donated $1 to help children receive healing through faith. Will you give yours?",
                      url: "https://healachild.com",
                    });
                  } else {
                    window.open(
                      `https://twitter.com/intent/tweet?text=${encodeURIComponent("I gave my $1 to Heal a Child! 🙏 Join the movement: https://healachild.com")}`,
                      "_blank"
                    );
                  }
                }}
                className="w-full py-4 bg-primary text-primary-foreground font-body font-bold rounded-xl hover:scale-[1.02] transition-all mb-3"
              >
                🔥 Donate $1 & Challenge 5 Friends
              </button>

              <button onClick={handleClose} className="font-body text-sm text-muted-foreground hover:text-foreground">
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DonationModal;
