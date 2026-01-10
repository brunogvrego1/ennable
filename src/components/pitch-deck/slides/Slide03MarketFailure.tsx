import { SlideSection } from "../SlideSection";
import { Building2, Hotel, Puzzle } from "lucide-react";

const options = [
  {
    icon: Building2,
    title: "Enterprise Systems",
    issue: "Bloated",
    description: "Massive feature sets you'll never use. 18-month implementations. $500K+ annual costs."
  },
  {
    icon: Hotel,
    title: "Hospitality-Specific",
    issue: "Rigid",
    description: "Built for one use case. Can't adapt as your business model evolves."
  },
  {
    icon: Puzzle,
    title: "Point Solutions",
    issue: "Siloed",
    description: "10+ apps that don't talk to each other. Data chaos and manual reconciliation."
  }
];

export const Slide03MarketFailure = () => {
  return (
    <SlideSection id="slide-3">
      <div className="mb-4 md:mb-8">
        <span className="text-accent font-medium text-xs md:text-sm uppercase tracking-wider">Market Failure</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 tracking-tight">
          Three Bad Options
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-muted-foreground mt-2 max-w-3xl">
          All three are built on rigid logic that can't adapt without expensive rewrites.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-3 md:gap-4">
        {options.map((option, index) => (
          <div 
            key={index} 
            className="p-4 md:p-6 bg-card rounded-xl md:rounded-2xl border border-border hover:border-accent/30 transition-colors"
          >
            <option.icon className="w-7 h-7 md:w-10 md:h-10 text-muted-foreground mb-3 md:mb-4" />
            <h3 className="text-base md:text-lg font-semibold mb-1.5">{option.title}</h3>
            <span className="inline-block px-2 md:px-3 py-0.5 md:py-1 bg-coral/10 text-coral text-xs md:text-sm font-medium rounded-full mb-2 md:mb-3">
              {option.issue}
            </span>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-3">
              {option.description}
            </p>
          </div>
        ))}
      </div>
    </SlideSection>
  );
};
