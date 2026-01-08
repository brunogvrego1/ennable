import { SlideSection } from "../SlideSection";
import { Building2, Hotel, Puzzle } from "lucide-react";

const options = [
  {
    icon: Building2,
    title: "Enterprise Systems",
    issue: "Bloated",
    description: "Massive feature sets you'll never use. 18-month implementations. $500K+ annual costs.",
  },
  {
    icon: Hotel,
    title: "Hospitality-Specific",
    issue: "Rigid",
    description: "Built for one use case. Can't adapt as your business model evolves.",
  },
  {
    icon: Puzzle,
    title: "Point Solutions",
    issue: "Siloed",
    description: "10+ apps that don't talk to each other. Data chaos and manual reconciliation.",
  },
];

export const Slide03MarketFailure = () => {
  return (
    <SlideSection id="slide-3">
      <div className="mb-12">
        <span className="text-accent font-medium text-sm uppercase tracking-wider">The Semantic Gap</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 tracking-tight">
          Three Bad Options
        </h2>
        <p className="text-xl text-muted-foreground mt-4 max-w-3xl">
          All three are built on <span className="text-foreground font-medium">static code</span>—rigid logic 
          that can't adapt without expensive rewrites. The gap between what you need and what you get is the Semantic Gap.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {options.map((option, index) => (
          <div 
            key={index}
            className="p-8 bg-card rounded-2xl border border-border hover:border-accent/30 transition-colors"
          >
            <option.icon className="w-10 h-10 text-muted-foreground mb-6" />
            <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
            <span className="inline-block px-3 py-1 bg-coral/10 text-coral text-sm font-medium rounded-full mb-4">
              {option.issue}
            </span>
            <p className="text-muted-foreground leading-relaxed">
              {option.description}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-10 pt-8 border-t border-border">
        <p className="text-lg text-muted-foreground">
          <span className="text-foreground font-semibold">Fluid is different.</span> Built on composable 
          <span className="text-accent font-medium"> modules</span> and 
          <span className="text-accent font-medium"> mini apps</span>—not static code. 
          The system adapts to you, not the other way around.
        </p>
      </div>
    </SlideSection>
  );
};
