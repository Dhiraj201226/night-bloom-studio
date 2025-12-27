import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Activity,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

const stats = [
  {
    label: "Total Donations",
    value: "₹2.4Cr",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
  },
  {
    label: "Active Donors",
    value: "12,847",
    change: "+8.2%",
    trend: "up",
    icon: Users,
  },
  {
    label: "Registered Parties",
    value: "24",
    change: "+2",
    trend: "up",
    icon: Activity,
  },
  {
    label: "Transparency Score",
    value: "98.5%",
    change: "+0.5%",
    trend: "up",
    icon: TrendingUp,
  },
];

const recentTransactions = [
  { party: "Democratic Alliance", amount: "₹50,000", time: "2 min ago", status: "verified" },
  { party: "People's Party", amount: "₹25,000", time: "5 min ago", status: "verified" },
  { party: "National Front", amount: "₹1,00,000", time: "12 min ago", status: "pending" },
  { party: "Progressive Union", amount: "₹15,000", time: "18 min ago", status: "verified" },
];

const DashboardPreview = () => {
  return (
    <section id="dashboard" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--accent)/0.05),transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium mb-4">
            LIVE DASHBOARD
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Real-Time{" "}
            <span className="gradient-text">Transparency</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Track all political donations in real-time with complete transparency and accountability.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="max-w-6xl mx-auto">
          <div className="glass rounded-3xl p-6 md:p-8 border border-border/50">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-hover p-5 rounded-xl group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className={`flex items-center gap-1 text-sm ${stat.trend === 'up' ? 'text-success' : 'text-destructive'}`}>
                      {stat.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                      {stat.change}
                    </div>
                  </div>
                  <p className="text-2xl font-display font-bold mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Recent Transactions */}
            <div className="glass rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-semibold text-lg">Recent Transactions</h3>
                <Button variant="ghost" size="sm" className="text-primary">
                  View All
                </Button>
              </div>

              <div className="space-y-3">
                {recentTransactions.map((tx, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                        {tx.party[0]}
                      </div>
                      <div>
                        <p className="font-medium group-hover:text-primary transition-colors">{tx.party}</p>
                        <p className="text-sm text-muted-foreground">{tx.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{tx.amount}</p>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs ${
                        tx.status === 'verified' 
                          ? 'bg-success/20 text-success' 
                          : 'bg-warning/20 text-warning'
                      }`}>
                        {tx.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
