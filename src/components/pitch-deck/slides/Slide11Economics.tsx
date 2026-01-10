import { SlideSection } from "../SlideSection";
import { Store } from "lucide-react";

const metrics = [
  { label: "LTV", value: "$45K", description: "Lifetime Value" },
  { label: "CAC", value: "$3K", description: "Customer Acquisition Cost" },
  { label: "Payback", value: "8 mo", description: "Payback Period" },
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
        {/* Key metrics - number-focused, no icons */}
        <div>
          <h3 className="text-sm font-medium mb-2 sm:mb-3 sm:text-base">World-Class SaaS Metrics</h3>
          <div className="grid gap-2 sm:gap-2.5">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="tesla-card p-2.5 flex items-center justify-between sm:p-3 md:p-4"
              >
                <div>
                  <p className="text-[10px] text-muted-foreground font-light uppercase tracking-wider">{metric.description}</p>
                  <p className="text-xl font-semibold mt-0.5 sm:text-2xl">{metric.value}</p>
                </div>
                <span className="text-xs font-medium text-muted-foreground sm:text-sm">{metric.label}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-2 tesla-dark-card p-2.5 sm:mt-3 sm:p-3 md:p-4">
            <p className="text-xs text-white/80 font-light sm:text-sm">
              <span className="font-normal text-accent">15:1 LTV/CAC ratio</span> — 
              above the 3:1 benchmark for healthy SaaS.
            </p>
          </div>
        </div>
        
        {/* Revenue breakdown - solid progress bars */}
        <div>
          <h3 className="text-sm font-medium mb-2 sm:mb-3 sm:text-base">Revenue Streams</h3>
          <div className="space-y-2 sm:space-y-2.5">
            {revenue.map((item, index) => (
              <div 
                key={index}
                className="tesla-card p-2.5 sm:p-3 md:p-4"
              >
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <span className="text-xs font-medium sm:text-sm">{item.source}</span>
                  <span className="text-[10px] text-muted-foreground font-light sm:text-xs">{item.range}</span>
                </div>
                <div className="tesla-progress">
                  <div 
                    className="tesla-progress-fill transition-all duration-500"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-2 flex items-start gap-2 tesla-card p-2.5 sm:mt-3 sm:p-3">
            <Store className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
            <p className="text-xs text-muted-foreground font-light">
              Expansion revenue from third-party apps <span className="text-foreground font-normal">we didn't build</span>.
            </p>
          </div>
        </div>
      </div>
    </SlideSection>
  );
};
