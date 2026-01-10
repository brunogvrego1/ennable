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
      <div className="mb-4 md:mb-6">
        <span className="tesla-label">Real Results</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 tracking-tight">
          Real Operators,<br />Real Impact
        </h2>
      </div>
      
      <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6">
        {caseStudies.map((study, index) => (
          <div 
            key={index}
            className="tesla-card p-3 md:p-6 text-center"
          >
            <div className="tesla-icon-container w-12 h-12 md:w-14 md:h-14 mx-auto mb-2 md:mb-4">
              <study.icon className={`w-5 h-5 md:w-6 md:h-6 ${
                study.color === 'accent' ? 'text-accent' : 'text-coral'
              }`} />
            </div>
            <p className="text-xs text-muted-foreground mb-1">{study.segment}</p>
            <div className={`text-2xl md:text-4xl font-bold mb-0.5 ${
              study.color === 'accent' ? 'text-accent' : 'text-coral'
            }`}>
              {study.metric}
            </div>
            <p className="text-xs md:text-sm font-medium">{study.label}</p>
          </div>
        ))}
      </div>
      
      <div className="tesla-dark-card flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 p-4 md:p-6">
        <div className="text-center">
          <div className="text-2xl md:text-4xl font-bold text-white mb-1">40+</div>
          <p className="text-xs md:text-sm text-white/70">Active Operators</p>
        </div>
        
        <div className="hidden sm:block w-px h-10 md:h-12 bg-white/20" />
        
        <div className="text-center">
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-accent" />
            <span className="text-2xl md:text-4xl font-bold text-white">115%</span>
          </div>
          <p className="text-xs md:text-sm text-white/70">Net Retention</p>
        </div>
        
        <div className="hidden sm:block w-px h-10 md:h-12 bg-white/20" />
        
        <div className="text-center max-w-[200px]">
          <p className="text-xs text-white/60">
            Once a customer starts with one module, they organically expand.
          </p>
        </div>
      </div>
    </SlideSection>
  );
};
