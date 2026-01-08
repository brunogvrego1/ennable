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
      <div className="mb-12">
        <span className="text-accent font-medium text-sm uppercase tracking-wider">Real Results</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 tracking-tight">
          Real Operators,<br />Real Impact
        </h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {caseStudies.map((study, index) => (
          <div 
            key={index}
            className="p-8 bg-card rounded-2xl border border-border text-center"
          >
            <div className={`w-14 h-14 rounded-xl mx-auto mb-6 flex items-center justify-center ${
              study.color === 'accent' ? 'bg-accent/10' : 'bg-coral/10'
            }`}>
              <study.icon className={`w-7 h-7 ${
                study.color === 'accent' ? 'text-accent' : 'text-coral'
              }`} />
            </div>
            <p className="text-sm text-muted-foreground mb-2">{study.segment}</p>
            <div className={`text-5xl font-bold mb-2 ${
              study.color === 'accent' ? 'text-accent' : 'text-coral'
            }`}>
              {study.metric}
            </div>
            <p className="text-lg font-medium">{study.label}</p>
          </div>
        ))}
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 p-8 bg-secondary/50 rounded-2xl">
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">40+</div>
          <p className="text-muted-foreground">Active Operators</p>
        </div>
        
        <div className="hidden md:block w-px h-16 bg-border" />
        
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <TrendingUp className="w-6 h-6 text-accent" />
            <span className="text-4xl md:text-5xl font-bold text-gradient">115%</span>
          </div>
          <p className="text-muted-foreground">Net Retention</p>
        </div>
        
        <div className="hidden md:block w-px h-16 bg-border" />
        
        <div className="text-center max-w-xs">
          <p className="text-sm text-muted-foreground">
            Once a customer starts with one module, they organically expand into the full OS.
          </p>
        </div>
      </div>
    </SlideSection>
  );
};
