import { SlideSection } from "../SlideSection";
import { MessageSquare, GitBranch, Smartphone, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Define Intent",
    description: "Type what you need into the Chat Bar.",
    example: "\"Create a reservation portal for The Sushi Den\""
  },
  {
    number: "02",
    icon: GitBranch,
    title: "Logic Assembly",
    description: "The Intent-Engine maps out the business logic:",
    flow: ["Trigger", "Logic", "Module"]
  },
  {
    number: "03",
    icon: Smartphone,
    title: "Instant Deploy",
    description: "Mobile-responsive interface generated. Publish immediately."
  }
];

export const Slide13CreatorJourney = () => {
  return (
    <SlideSection id="creator-journey">
      <div className="mb-3 sm:mb-4 md:mb-6">
        <span className="tesla-label">The Creator Journey</span>
        <h2 className="slide-title mt-2">
          From Intent to<br />Infrastructure in Seconds
        </h2>
        <p className="slide-subtitle mt-2 max-w-2xl">
          Building custom mini-apps via the Fluid Generative Engine.
        </p>
      </div>

      <div className="grid gap-2 sm:gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
        {steps.map((step) => (
          <div 
            key={step.number}
            className="tesla-card p-2 sm:p-3 md:p-4"
          >
            <div className="flex items-center gap-2 mb-1.5 sm:gap-3 sm:mb-2">
              <div className="tesla-icon-container w-9 h-9 flex-shrink-0 sm:w-10 sm:h-10 md:w-12 md:h-12">
                <step.icon className="w-4 h-4 text-accent sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-accent font-bold text-xs sm:text-sm">{step.number}</span>
                <h3 className="text-sm font-semibold text-foreground sm:text-base">{step.title}</h3>
              </div>
            </div>
            
            <p className="text-xs text-muted-foreground leading-relaxed mb-1.5 sm:text-sm sm:mb-2">
              {step.description}
            </p>
            
            {step.example && (
              <div className="hidden sm:block p-2 bg-muted/50 rounded-xl md:p-3">
                <p className="text-xs font-mono text-muted-foreground italic truncate">
                  {step.example}
                </p>
              </div>
            )}
            
            {step.flow && (
              <div className="flex items-center gap-1 flex-wrap sm:gap-1.5">
                {step.flow.map((item, idx) => (
                  <div key={item} className="flex items-center gap-1 sm:gap-1.5">
                    <span className="text-xs font-medium bg-accent/10 text-accent px-1.5 py-0.5 rounded-lg sm:px-2 sm:py-1">
                      {item}
                    </span>
                    {idx < step.flow.length - 1 && (
                      <ArrowRight className="w-3 h-3 text-muted-foreground" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </SlideSection>
  );
};
