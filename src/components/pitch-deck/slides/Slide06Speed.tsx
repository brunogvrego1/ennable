import { SlideSection } from "../SlideSection";
import { Check, Rocket } from "lucide-react";

const timeline = [
  { day: "Day 1", label: "Select Archetype", description: "Choose your business type and core workflows" },
  { day: "Days 2-3", label: "Visual Config", description: "Customize modules through our no-code builder" },
  { day: "Day 4", label: "Go Live", description: "Deploy and start processing transactions" },
];

export const Slide06Speed = () => {
  return (
    <SlideSection id="slide-6" className="bg-secondary/30">
      <div className="mb-12">
        <span className="text-accent font-medium text-sm uppercase tracking-wider">Instant Relevance</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 tracking-tight">
          From Setup to Operations<br />in Days
        </h2>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Timeline */}
        <div className="space-y-6">
          {timeline.map((step, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-semibold">
                  {index + 1}
                </div>
                {index < timeline.length - 1 && (
                  <div className="w-px h-full bg-border mt-2" />
                )}
              </div>
              <div className="pb-8">
                <p className="text-sm text-accent font-medium">{step.day}</p>
                <h3 className="text-xl font-semibold mt-1">{step.label}</h3>
                <p className="text-muted-foreground mt-1">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats */}
        <div className="space-y-6">
          <div className="p-8 bg-card rounded-2xl border border-border text-center">
            <Rocket className="w-10 h-10 text-accent mx-auto mb-4" />
            <div className="text-6xl md:text-7xl font-bold text-gradient mb-2">8</div>
            <p className="text-xl text-muted-foreground">Day Average Deployment</p>
          </div>
          
          <div className="p-6 bg-accent/5 rounded-xl border border-accent/20 flex items-center gap-4">
            <Check className="w-8 h-8 text-accent flex-shrink-0" />
            <div>
              <p className="font-semibold text-lg">90% Reduction</p>
              <p className="text-muted-foreground">vs. industry standard of 3–6 months</p>
            </div>
          </div>
        </div>
      </div>
    </SlideSection>
  );
};
