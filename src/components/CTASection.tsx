import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icons */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="p-3 rounded-xl bg-primary/10 animate-float">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div className="p-3 rounded-xl bg-accent/10 animate-float" style={{ animationDelay: '-2s' }}>
              <Zap className="w-8 h-8 text-accent" />
            </div>
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Ready to Make a{" "}
            <span className="gradient-text">Difference?</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Join thousands of citizens who are already contributing to transparent democracy. 
            Your donation matters, and with our platform, every rupee is accounted for.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl">
              Register as Donor
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="glass" size="xl">
              Register as Party
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success" />
              Blockchain Secured
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              ZKP Privacy
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              Govt. Compliant
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
