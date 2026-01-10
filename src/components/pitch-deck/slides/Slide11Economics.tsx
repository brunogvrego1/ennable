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
      <div className="mb-4 sm:mb-5 md:mb-6">
        <span className="tesla-label">Unit Economics</span>
        <h2 className="slide-title mt-2">
          Recurring Revenue<br />& Expansion
        </h2>
      </div>
      
      <div className="slide-grid-2">
        {/* Key metrics */}
        <div>
          <h3 className="text-sm font-semibold mb-2 sm:mb-3 sm:text-base">World-Class SaaS Metrics</h3>
          <div className="grid gap-2 sm:gap-3">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="tesla-card p-2 flex items-center gap-2 sm:p-3 sm:gap-3 md:p-4 md:gap-4"
              >
                <div className="tesla-icon-container w-10 h-10 flex-shrink-0 sm:w-12 sm:h-12 md:w-14 md:h-14">
                  <metric.icon className="w-4 h-4 text-accent sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground">{metric.description}</p>
                  <p className="text-lg font-bold sm:text-xl md:text-2xl">{metric.value}</p>
                </div>
                <div className="text-xs font-medium text-muted-foreground sm:text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-2 tesla-dark-card p-2 sm:mt-3 sm:p-3 md:p-4">
            <p className="text-xs text-white/90 sm:text-sm">
              <span className="font-semibold text-accent">15:1 LTV/CAC ratio</span> — 
              above the 3:1 benchmark for healthy SaaS.
            </p>
          </div>
        </div>
        
        {/* Revenue breakdown */}
        <div>
          <h3 className="text-sm font-semibold mb-2 sm:mb-3 sm:text-base">Revenue Streams</h3>
          <div className="space-y-2 sm:space-y-3">
            {revenue.map((item, index) => (
              <div 
                key={index}
                className="tesla-card p-2 sm:p-3 md:p-4"
              >
                <div className="flex items-center justify-between mb-1 sm:mb-2">
                  <span className="text-xs font-medium sm:text-sm">{item.source}</span>
                  <span className="text-xs text-muted-foreground">{item.range}</span>
                </div>
                <div className="h-1 bg-muted rounded-full overflow-hidden sm:h-1.5 md:h-2">
                  <div 
                    className="h-full bg-gradient-to-r from-accent to-coral rounded-full transition-all duration-500"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-2 flex items-start gap-2 tesla-card p-2 sm:mt-3 sm:p-3">
            <Store className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground">
              Expansion revenue from third-party apps <span className="text-foreground font-medium">we didn't build</span>.
            </p>
          </div>
        </div>
      </div>
    </SlideSection>
  );
};
