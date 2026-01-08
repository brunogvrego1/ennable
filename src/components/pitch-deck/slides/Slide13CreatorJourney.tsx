import { SlideSection } from "../SlideSection";
import { MessageSquare, GitBranch, Smartphone } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Define Intent",
    description: "Click the \"+ Create Mini App\" button to open the Custom Solutions Creator. Simply type what you need into the Chat Bar.",
    example: "\"Create a digital portal for table reservations for The Sushi Den\""
  },
  {
    number: "02",
    icon: GitBranch,
    title: "Generative Logic Assembly",
    description: "The Intent-Engine automatically maps out the business logic, creating a visual flow:",
    flow: ["Trigger (Form)", "Logic (Verify Vacancy)", "Module (Save to CRM)"]
  },
  {
    number: "03",
    icon: Smartphone,
    title: "Instant UI Deployment",
    description: "The system generates a high-fidelity, mobile-responsive interface. Save Draft or Publish to Dashboard immediately."
  }
];

export const Slide13CreatorJourney = () => {
  return (
    <SlideSection id="creator-journey">
      <div className="space-y-8">
        <div className="space-y-3">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">
            The Creator Journey
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            From Intent to Infrastructure in Seconds
          </p>
          <p className="text-sm text-muted-foreground/70 max-w-2xl">
            Building custom mini-apps via the Fluid Generative Engine.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8">
          {steps.map((step) => (
            <div 
              key={step.number}
              className="group relative bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:bg-card/50 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-primary/60">{step.number}</span>
                    <h3 className="text-lg font-medium text-foreground">{step.title}</h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  
                  {step.example && (
                    <div className="bg-muted/30 border border-border/30 rounded px-3 py-2">
                      <p className="text-xs font-mono text-muted-foreground italic">
                        {step.example}
                      </p>
                    </div>
                  )}
                  
                  {step.flow && (
                    <div className="flex items-center gap-2 flex-wrap">
                      {step.flow.map((item, idx) => (
                        <div key={item} className="flex items-center gap-2">
                          <span className="text-xs font-mono bg-primary/10 text-primary px-2 py-1 rounded">
                            {item}
                          </span>
                          {idx < step.flow.length - 1 && (
                            <span className="text-muted-foreground/50">→</span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideSection>
  );
};
