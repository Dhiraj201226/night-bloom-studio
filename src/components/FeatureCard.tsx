import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: "primary" | "success" | "accent" | "info" | "warning";
  delay?: number;
}

const colorClasses = {
  primary: {
    bg: "bg-primary/10 group-hover:bg-primary/20",
    text: "text-primary",
    border: "group-hover:border-primary/30",
    glow: "group-hover:shadow-primary/20",
  },
  success: {
    bg: "bg-success/10 group-hover:bg-success/20",
    text: "text-success",
    border: "group-hover:border-success/30",
    glow: "group-hover:shadow-success/20",
  },
  accent: {
    bg: "bg-accent/10 group-hover:bg-accent/20",
    text: "text-accent",
    border: "group-hover:border-accent/30",
    glow: "group-hover:shadow-accent/20",
  },
  info: {
    bg: "bg-info/10 group-hover:bg-info/20",
    text: "text-info",
    border: "group-hover:border-info/30",
    glow: "group-hover:shadow-info/20",
  },
  warning: {
    bg: "bg-warning/10 group-hover:bg-warning/20",
    text: "text-warning",
    border: "group-hover:border-warning/30",
    glow: "group-hover:shadow-warning/20",
  },
};

const FeatureCard = ({ icon: Icon, title, description, color, delay = 0 }: FeatureCardProps) => {
  const colors = colorClasses[color];

  return (
    <div
      className={`glass group p-6 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-xl ${colors.border} ${colors.glow} cursor-pointer animate-slide-up`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110`}>
        <Icon className={`w-7 h-7 ${colors.text}`} />
      </div>
      <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-foreground transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
