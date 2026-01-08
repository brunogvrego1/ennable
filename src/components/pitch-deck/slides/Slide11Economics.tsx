import { SlideSection } from "../SlideSection";
import { DollarSign, TrendingUp, Clock, Store } from "lucide-react";

const metrics = [
  { label: "LTV", value: "$45K", icon: TrendingUp, description: "Lifetime Value" },
  { label: "CAC", value: "$3K", icon: DollarSign, description: "Customer Acquisition Cost" },
  { label: "Payback", value: "8 mo", icon: Clock, description: "Payback Period" },
];

const revenue = [
  { source: "SaaS Subscription", range: "$300 - $2,000/mo", percentage: 70 },
  { source: "App Store Fees", range: "30% of transactions", percentage: 20 },
  { source: "Data Insights", range: "Premium tier", percentage: 10 },
];

export const Slide11Economics = () => {
  return (
    <SlideSection id="slide-11">
      <div className="mb-12">
        <span className="text-accent font-medium text-sm uppercase tracking-wider">Unit Economics</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 tracking-tight">
          Recurring Revenue<br />& Expansion
        </h2>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Key metrics */}
        <div>
          <h3 className="text-lg font-semibold mb-6">World-Class SaaS Metrics</h3>
          <div className="grid gap-4">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="p-6 bg-card rounded-xl border border-border flex items-center gap-6"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <metric.icon className="w-7 h-7 text-accent" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                  <p className="text-3xl font-bold">{metric.value}</p>
                </div>
                <div className="text-sm font-medium text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-accent/10 to-coral/10 rounded-xl border border-accent/20">
            <p className="text-sm">
              <span className="font-semibold">15:1 LTV/CAC ratio</span> — 
              significantly above the 3:1 benchmark for healthy SaaS.
            </p>
          </div>
        </div>
        
        {/* Revenue breakdown */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Revenue Streams</h3>
          <div className="space-y-4">
            {revenue.map((item, index) => (
              <div 
                key={index}
                className="p-5 bg-secondary/50 rounded-xl"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium">{item.source}</span>
                  <span className="text-sm text-muted-foreground">{item.range}</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-accent to-coral rounded-full transition-all duration-500"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 flex items-start gap-3 p-4 bg-card rounded-xl border border-border">
            <Store className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              Expansion revenue comes from third-party apps <span className="text-foreground">we didn't have to build</span>.
            </p>
          </div>
        </div>
      </div>
    </SlideSection>
  );
};
