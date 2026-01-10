import { SlideSection } from "../SlideSection";
import { Utensils, Building, Music, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    icon: Utensils,
    segment: "Fine Dining",
    metric: "-40%",
    label: "Order Time",
    color: "accent",
  },
  {
    icon: Building,
    segment: "Boutique Hotel",
    metric: "-60%",
    label: "IT Overhead",
    color: "coral",
  },
  {
    icon: Music,
    segment: "Nightclubs",
    metric: "+28%",
    label: "Revenue",
    color: "accent",
  },
];

export const Slide09Results = () => {
  return (
    <SlideSection id="slide-9">
      <div className="mb-4 sm:mb-5 md:mb-6">
        <span className="tesla-label">Real Results</span>
        <h2 className="slide-title mt-2">
          Real Operators,<br />Real Impact
        </h2>
      </div>
      
      <div className="grid grid-cols-3 gap-2 mb-3 sm:gap-3 sm:mb-4 md:gap-4 md:mb-6">
        {caseStudies.map((study, index) => (
          <div 
            key={index}
            className="tesla-card p-2 text-center sm:p-3 md:p-6"
          >
            <div className="tesla-icon-container w-10 h-10 mx-auto mb-2 sm:w-12 sm:h-12 md:w-14 md:h-14 md:mb-4">
              <study.icon className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${
                study.color === 'accent' ? 'text-accent' : 'text-coral'
              }`} />
            </div>
            <p className="text-xs text-muted-foreground mb-0.5 sm:mb-1">{study.segment}</p>
            <div className={`text-xl font-bold mb-0.5 sm:text-2xl md:text-4xl ${
              study.color === 'accent' ? 'text-accent' : 'text-coral'
            }`}>
              {study.metric}
            </div>
            <p className="text-xs font-medium sm:text-sm">{study.label}</p>
          </div>
        ))}
      </div>
      
      <div className="tesla-dark-card flex flex-col items-center justify-center gap-3 p-3 sm:flex-row sm:gap-6 sm:p-4 md:gap-8 md:p-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-white mb-0.5 sm:text-3xl sm:mb-1 md:text-4xl">40+</div>
          <p className="text-xs text-white/70 sm:text-sm">Active Operators</p>
        </div>
        
        <div className="hidden sm:block w-px h-10 bg-white/20 md:h-12" />
        
        <div className="text-center">
          <div className="flex items-center justify-center gap-1.5 mb-0.5 sm:mb-1">
            <TrendingUp className="w-4 h-4 text-accent sm:w-5 sm:h-5" />
            <span className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">115%</span>
          </div>
          <p className="text-xs text-white/70 sm:text-sm">Net Retention</p>
        </div>
        
        <div className="hidden sm:block w-px h-10 bg-white/20 md:h-12" />
        
        <div className="text-center max-w-[200px] hidden sm:block">
          <p className="text-xs text-white/60">
            Once a customer starts with one module, they organically expand.
          </p>
        </div>
      </div>
    </SlideSection>
  );
};
