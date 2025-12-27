import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Lock } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--accent)/0.08),transparent_50%)]" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-success/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '-1.5s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-slide-up">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-sm text-muted-foreground">Powered by Zero-Knowledge Proofs</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Decentralized{" "}
            <span className="gradient-text">Political Donations</span>
            {" "}Made Transparent
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            A blockchain-powered platform ensuring complete transparency in political funding while protecting donor privacy through advanced cryptography.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl">
              Start Donating
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="glass" size="xl">
              View Transparency Dashboard
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="glass-hover p-6 rounded-2xl group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-3xl font-bold mb-1">100%</h3>
              <p className="text-muted-foreground">Transparent Transactions</p>
            </div>

            <div className="glass-hover p-6 rounded-2xl group">
              <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-success" />
              </div>
              <h3 className="font-display text-3xl font-bold mb-1">50K+</h3>
              <p className="text-muted-foreground">Verified Donors</p>
            </div>

            <div className="glass-hover p-6 rounded-2xl group">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Lock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-3xl font-bold mb-1">ZKP</h3>
              <p className="text-muted-foreground">Privacy Protected</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
