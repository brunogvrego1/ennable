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
      <div className="mb-4 sm:mb-5 md:mb-6">
        <span className="tesla-label">Instant Relevance</span>
        <h2 className="slide-title mt-2">
          From Setup to Operations<br />in Days
        </h2>
      </div>
      
      <div className="slide-grid-2 items-center">
        {/* Timeline */}
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          {timeline.map((step, index) => (
            <div key={index} className="flex gap-2 sm:gap-3 md:gap-4">
              <div className="flex flex-col items-center">
                <div className="tesla-icon-container w-8 h-8 text-accent font-semibold text-xs sm:w-10 sm:h-10 sm:text-sm md:w-12 md:h-12 md:text-base">
                  {index + 1}
                </div>
                {index < timeline.length - 1 && (
                  <div className="w-px h-full bg-border mt-1" />
                )}
              </div>
              <div className="pb-2 sm:pb-3 md:pb-4">
                <p className="text-xs tesla-label">{step.day}</p>
                <h3 className="text-sm font-semibold mt-0.5 sm:text-base">{step.label}</h3>
                <p className="text-xs text-muted-foreground mt-0.5 sm:text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats */}
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          <div className="tesla-dark-card p-3 text-center sm:p-4 md:p-6">
            <div className="tesla-icon-container w-10 h-10 mx-auto mb-2 sm:w-12 sm:h-12 md:w-14 md:h-14 md:mb-3">
              <Rocket className="w-5 h-5 text-accent sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </div>
            <div className="text-3xl font-bold text-white mb-1 sm:text-4xl md:text-5xl lg:text-6xl">8</div>
            <p className="text-sm text-white/70 sm:text-base">Day Average Deployment</p>
          </div>
          
          <div className="tesla-card p-3 flex items-center gap-2 border-l-4 border-[hsl(142,76%,36%)] sm:gap-3 sm:p-4">
            <CheckCircle2 className="w-6 h-6 text-[hsl(142,76%,36%)] flex-shrink-0 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            <div>
              <p className="font-semibold text-sm sm:text-base">90% Reduction</p>
              <p className="text-xs text-muted-foreground sm:text-sm">vs. industry standard of 3–6 months</p>
            </div>
          </div>
        </div>
      </div>
    </SlideSection>
  );
};
