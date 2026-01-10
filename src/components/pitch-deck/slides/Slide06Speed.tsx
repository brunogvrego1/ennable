import { SlideSection } from "../SlideSection";
import { Check, Rocket } from "lucide-react";

const timeline = [
  { day: "Day 1", label: "Select Archetype", description: "Choose modules for your business" },
  { day: "Days 2-3", label: "Visual Config", description: "Customize with no-code builder" },
  { day: "Day 4", label: "Go Live", description: "Deploy and start processing" },
];

export const Slide06Speed = () => {
  return (
    <SlideSection id="slide-6">
      <div className="mb-4 md:mb-6">
        <span className="text-accent font-medium text-xs md:text-sm uppercase tracking-wider">Instant Relevance</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 tracking-tight">
          From Setup to Operations<br />in Days
        </h2>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-4 md:gap-8 items-center">
        {/* Timeline */}
        <div className="space-y-3 md:space-y-4">
          {timeline.map((step, index) => (
            <div key={index} className="flex gap-3 md:gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent flex items-center justify-center text-white font-semibold text-sm md:text-base">
                  {index + 1}
                </div>
                {index < timeline.length - 1 && (
                  <div className="w-px h-full bg-border mt-1" />
                )}
              </div>
              <div className="pb-3 md:pb-4">
                <p className="text-xs text-accent font-medium">{step.day}</p>
                <h3 className="text-sm md:text-base font-semibold mt-0.5">{step.label}</h3>
                <p className="text-xs md:text-sm text-muted-foreground mt-0.5">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats */}
        <div className="space-y-3 md:space-y-4">
          <div className="p-4 md:p-6 bg-card rounded-xl md:rounded-2xl border border-border text-center">
            <Rocket className="w-7 h-7 md:w-10 md:h-10 text-accent mx-auto mb-2 md:mb-3" />
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-1">8</div>
            <p className="text-sm md:text-base text-muted-foreground">Day Average Deployment</p>
          </div>
          
          <div className="p-3 md:p-4 bg-accent/5 rounded-xl border border-accent/20 flex items-center gap-3">
            <Check className="w-6 h-6 md:w-8 md:h-8 text-accent flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm md:text-base">90% Reduction</p>
              <p className="text-xs md:text-sm text-muted-foreground">vs. industry standard of 3–6 months</p>
            </div>
          </div>
        </div>
      </div>
    </SlideSection>
  );
};
