import FeatureCard from "./FeatureCard";
import { 
  UserPlus, 
  Wallet, 
  BarChart3, 
  Building2, 
  Eye, 
  ShieldAlert,
  Vote,
  FileCheck
} from "lucide-react";

const features = [
  {
    icon: UserPlus,
    title: "Registration & Identity",
    description: "Secure citizen and party registration with blockchain-verified identity verification flows.",
    color: "success" as const,
  },
  {
    icon: Wallet,
    title: "Donation Flow",
    description: "Seamless donation selection and confirmation with real-time blockchain transaction tracking.",
    color: "primary" as const,
  },
  {
    icon: BarChart3,
    title: "Donor Dashboard",
    description: "Verified donor profile with complete donation history and party listing preferences.",
    color: "info" as const,
  },
  {
    icon: Building2,
    title: "Party Dashboard",
    description: "Comprehensive view of party funds, spending transparency, and campaign finance reports.",
    color: "accent" as const,
  },
  {
    icon: Eye,
    title: "Public Transparency",
    description: "Aggregate donations and party comparisons accessible to all citizens for accountability.",
    color: "warning" as const,
  },
  {
    icon: ShieldAlert,
    title: "Whistleblower Protection",
    description: "ZKP-based anonymous complaint submission ensuring complete whistleblower privacy.",
    color: "accent" as const,
  },
  {
    icon: Vote,
    title: "Admin & Regulator View",
    description: "Election Commission and NITI Aayog dashboard for regulatory oversight and compliance.",
    color: "primary" as const,
  },
  {
    icon: FileCheck,
    title: "Audit Trail",
    description: "Immutable blockchain records providing complete audit trail for all transactions.",
    color: "success" as const,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.05),transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium mb-4 animate-slide-up">
            PLATFORM FEATURES
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Everything You Need for{" "}
            <span className="gradient-text">Transparent Donations</span>
          </h2>
          <p className="text-muted-foreground text-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Our comprehensive platform provides all the tools needed for secure, transparent, and privacy-preserving political donations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
