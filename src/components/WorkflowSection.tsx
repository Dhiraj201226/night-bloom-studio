import { 
  UserCheck, 
  CreditCard, 
  LayoutDashboard, 
  Shield,
  ArrowDown
} from "lucide-react";

const steps = [
  {
    icon: UserCheck,
    title: "Register & Verify",
    description: "Create your account and complete identity verification using secure blockchain technology.",
    color: "primary",
  },
  {
    icon: CreditCard,
    title: "Make a Donation",
    description: "Choose a political party and donate securely with full transaction transparency.",
    color: "success",
  },
  {
    icon: LayoutDashboard,
    title: "Track Your Impact",
    description: "Monitor your donations and see how funds are being utilized in real-time.",
    color: "info",
  },
  {
    icon: Shield,
    title: "Privacy Protected",
    description: "Your identity remains protected through zero-knowledge proof technology.",
    color: "accent",
  },
];

const colorClasses: Record<string, { bg: string; text: string; ring: string }> = {
  primary: {
    bg: "bg-primary/20",
    text: "text-primary",
    ring: "ring-primary/30",
  },
  success: {
    bg: "bg-success/20",
    text: "text-success",
    ring: "ring-success/30",
  },
  info: {
    bg: "bg-info/20",
    text: "text-info",
    ring: "ring-info/30",
  },
  accent: {
    bg: "bg-accent/20",
    text: "text-accent",
    ring: "ring-accent/30",
  },
};

const WorkflowSection = () => {
  return (
    <section id="workflow" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium mb-4">
            HOW IT WORKS
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Simple{" "}
            <span className="gradient-text-accent">4-Step Process</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Get started with transparent political donations in just a few simple steps.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-success via-info to-accent hidden md:block" />

            {steps.map((step, index) => {
              const colors = colorClasses[step.color];
              const isEven = index % 2 === 0;

              return (
                <div key={step.title} className="relative mb-12 last:mb-0">
                  <div className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`flex-1 glass-hover p-6 rounded-2xl ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                      <h3 className="font-display text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>

                    {/* Icon Circle */}
                    <div className={`relative z-10 w-20 h-20 rounded-full ${colors.bg} ring-4 ${colors.ring} flex items-center justify-center transition-transform hover:scale-110`}>
                      <step.icon className={`w-8 h-8 ${colors.text}`} />
                      <span className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-current ${colors.text} flex items-center justify-center font-bold text-sm`}>
                        {index + 1}
                      </span>
                    </div>

                    {/* Spacer for alignment */}
                    <div className="flex-1 hidden md:block" />
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center my-4 md:hidden">
                      <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
