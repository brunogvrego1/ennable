import { SlideSection } from "../SlideSection";
import { MessageSquare, GitBranch, Smartphone, ArrowRight } from "lucide-react";

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
      <div className="mb-12">
        <span className="text-accent font-medium text-sm uppercase tracking-wider">The Creator Journey</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 tracking-tight">
          From Intent to<br />Infrastructure in Seconds
        </h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
          Building custom mini-apps via the Fluid Generative Engine.
        </p>
      </div>

      <div className="grid gap-6">
        {steps.map((step, index) => (
          <div 
            key={step.number}
            className="p-6 bg-muted/50 rounded-2xl border border-border"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-accent" />
                </div>
              </div>
              
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-accent font-bold">{step.number}</span>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                
                {step.example && (
                  <div className="p-4 bg-secondary/50 border border-border rounded-xl">
                    <p className="text-sm font-mono text-muted-foreground italic">
                      {step.example}
                    </p>
                  </div>
                )}
                
                {step.flow && (
                  <div className="flex items-center gap-3 flex-wrap">
                    {step.flow.map((item, idx) => (
                      <div key={item} className="flex items-center gap-3">
                        <span className="text-sm font-medium bg-accent/10 text-accent px-3 py-1.5 rounded-lg">
                          {item}
                        </span>
                        {idx < step.flow.length - 1 && (
                          <ArrowRight className="w-4 h-4 text-muted-foreground" />
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
    </SlideSection>
  );
};
