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
      <div className="mb-3 md:mb-6">
        <span className="text-accent font-medium text-xs md:text-sm uppercase tracking-wider">The Creator Journey</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 tracking-tight">
          From Intent to<br />Infrastructure in Seconds
        </h2>
        <p className="text-sm md:text-base text-muted-foreground mt-2 max-w-2xl">
          Building custom mini-apps via the Fluid Generative Engine.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-3 md:gap-4">
        {steps.map((step) => (
          <div 
            key={step.number}
            className="p-3 md:p-4 bg-muted/50 rounded-xl border border-border"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <step.icon className="w-4 h-4 md:w-5 md:h-5 text-accent" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent font-bold text-sm">{step.number}</span>
                <h3 className="text-sm md:text-base font-semibold text-foreground">{step.title}</h3>
              </div>
            </div>
            
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-2">
              {step.description}
            </p>
            
            {step.example && (
              <div className="hidden sm:block p-2 md:p-3 bg-secondary/50 border border-border rounded-lg">
                <p className="text-xs font-mono text-muted-foreground italic truncate">
                  {step.example}
                </p>
              </div>
            )}
            
            {step.flow && (
              <div className="flex items-center gap-1.5 flex-wrap">
                {step.flow.map((item, idx) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <span className="text-xs font-medium bg-accent/10 text-accent px-2 py-1 rounded-md">
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
