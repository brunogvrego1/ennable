import { SlideSection } from "../SlideSection";
import { DollarSign, TrendingUp, Clock, Store } from "lucide-react";

const metrics = [
  { label: "LTV", value: "$45K", icon: TrendingUp, description: "Lifetime Value" },
  { label: "CAC", value: "$3K", icon: DollarSign, description: "Customer Acquisition Cost" },
  { label: "Payback", value: "8 mo", icon: Clock, description: "Payback Period" },
];

const revenue = [
  { source: "SaaS Subscription", range: "$300 - $2K/mo", percentage: 70 },
  { source: "App Store Fees", range: "30% of txns", percentage: 20 },
  { source: "Data Insights", range: "Premium tier", percentage: 10 },
];

export const Slide11Economics = () => {
  return (
    <SlideSection id="slide-11">
      <div className="mb-4 md:mb-6">
        <span className="text-accent font-medium text-xs md:text-sm uppercase tracking-wider">Unit Economics</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 tracking-tight">
          Recurring Revenue<br />& Expansion
        </h2>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-4 md:gap-8">
        {/* Key metrics */}
        <div>
          <h3 className="text-sm md:text-base font-semibold mb-3">World-Class SaaS Metrics</h3>
          <div className="grid gap-2 md:gap-3">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="p-3 md:p-4 bg-card rounded-xl border border-border flex items-center gap-3 md:gap-4"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <metric.icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground">{metric.description}</p>
                  <p className="text-xl md:text-2xl font-bold">{metric.value}</p>
                </div>
                <div className="text-xs md:text-sm font-medium text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-3 p-2 md:p-3 bg-gradient-to-r from-accent/10 to-coral/10 rounded-lg border border-accent/20">
            <p className="text-xs md:text-sm">
              <span className="font-semibold">15:1 LTV/CAC ratio</span> — 
              above the 3:1 benchmark for healthy SaaS.
            </p>
          </div>
        </div>
        
        {/* Revenue breakdown */}
        <div>
          <h3 className="text-sm md:text-base font-semibold mb-3">Revenue Streams</h3>
          <div className="space-y-2 md:space-y-3">
            {revenue.map((item, index) => (
              <div 
                key={index}
                className="p-3 md:p-4 bg-secondary/50 rounded-xl"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">{item.source}</span>
                  <span className="text-xs text-muted-foreground">{item.range}</span>
                </div>
                <div className="h-1.5 md:h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-accent to-coral rounded-full transition-all duration-500"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-3 flex items-start gap-2 p-2 md:p-3 bg-card rounded-lg border border-border">
            <Store className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground">
              Expansion revenue from third-party apps <span className="text-foreground">we didn't build</span>.
            </p>
          </div>
        </div>
      </div>
    </SlideSection>
  );
};
