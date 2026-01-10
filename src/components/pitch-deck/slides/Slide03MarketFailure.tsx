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
      <div className="mb-4 sm:mb-6 md:mb-8">
        <span className="tesla-label">Market Failure</span>
        <h2 className="slide-title mt-2">
          Three Bad Options
        </h2>
        <p className="slide-subtitle mt-2 max-w-3xl">
          All three are built on rigid logic that can't adapt without expensive rewrites.
        </p>
      </div>
      
      <div className="slide-grid-3">
        {options.map((option, index) => (
          <div 
            key={index} 
            className="tesla-card p-3 transition-shadow hover:shadow-md sm:p-4 md:p-6"
          >
            <div className="tesla-icon-container w-10 h-10 mb-2 sm:w-12 sm:h-12 sm:mb-3 md:w-14 md:h-14 md:mb-4">
              <option.icon className="w-5 h-5 text-muted-foreground sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </div>
            <h3 className="text-sm font-semibold mb-1 sm:text-base md:text-lg md:mb-1.5">{option.title}</h3>
            <span className="inline-block px-2 py-0.5 bg-coral/10 text-coral text-xs font-medium rounded-full mb-2 sm:px-3 sm:py-1 sm:text-sm md:mb-3">
              {option.issue}
            </span>
            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 sm:text-sm">
              {option.description}
            </p>
          </div>
        ))}
      </div>
    </SlideSection>
  );
};
