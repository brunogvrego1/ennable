import { SlideSection } from "../SlideSection";
import { CheckCircle2, Rocket } from "lucide-react";

const timeline = [
  { day: "Day 1", label: "Select Archetype", description: "Choose modules for your business" },
  { day: "Days 2-3", label: "Visual Config", description: "Customize with no-code builder" },
  { day: "Day 4", label: "Go Live", description: "Deploy and start processing" },
];

export const Slide06Speed = () => {
  return (
    <SlideSection id="slide-6">
      <div className="mb-4 md:mb-6">
        <span className="tesla-label">Instant Relevance</span>
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
                <div className="tesla-icon-container w-10 h-10 md:w-12 md:h-12 text-accent font-semibold text-sm md:text-base">
                  {index + 1}
                </div>
                {index < timeline.length - 1 && (
                  <div className="w-px h-full bg-border mt-1" />
                )}
              </div>
              <div className="pb-3 md:pb-4">
                <p className="text-xs tesla-label">{step.day}</p>
                <h3 className="text-sm md:text-base font-semibold mt-0.5">{step.label}</h3>
                <p className="text-xs md:text-sm text-muted-foreground mt-0.5">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats */}
        <div className="space-y-3 md:space-y-4">
          <div className="tesla-dark-card p-4 md:p-6 text-center">
            <div className="tesla-icon-container w-12 h-12 md:w-14 md:h-14 mx-auto mb-2 md:mb-3">
              <Rocket className="w-6 h-6 md:w-7 md:h-7 text-accent" />
            </div>
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1">8</div>
            <p className="text-sm md:text-base text-white/70">Day Average Deployment</p>
          </div>
          
          <div className="tesla-card p-3 md:p-4 flex items-center gap-3 border-l-4 border-[hsl(142,76%,36%)]">
            <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-[hsl(142,76%,36%)] flex-shrink-0" />
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
