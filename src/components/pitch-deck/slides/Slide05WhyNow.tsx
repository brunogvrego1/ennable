import { SlideSection } from "../SlideSection";
import { Cpu, Sparkles, ArrowRight } from "lucide-react";

export const Slide05WhyNow = () => {
  return (
    <SlideSection id="slide-5">
      <div className="mb-4 md:mb-6">
        <span className="text-accent font-medium text-xs md:text-sm uppercase tracking-wider">The "Why Now?"</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 tracking-tight">
          The Generative<br />Inflection Point
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-3 md:gap-6 mb-4 md:mb-8">
        <div className="p-4 md:p-6 bg-muted/50 rounded-xl md:rounded-2xl border border-border">
          <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-muted flex items-center justify-center">
              <Cpu className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Legacy Approach</p>
              <h3 className="font-semibold text-sm md:text-base">Fixed Logic</h3>
            </div>
          </div>
          <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-coral mt-0.5">×</span>
              One-size-fits-all features
            </li>
            <li className="flex items-start gap-2">
              <span className="text-coral mt-0.5">×</span>
              Months of customization
            </li>
            <li className="flex items-start gap-2">
              <span className="text-coral mt-0.5">×</span>
              Expensive consultants
            </li>
          </ul>
        </div>
        
        <div className="p-4 md:p-6 bg-gradient-to-br from-accent/5 to-coral/5 rounded-xl md:rounded-2xl border border-accent/30">
          <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-accent/20 flex items-center justify-center">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-accent" />
            </div>
            <div>
              <p className="text-xs text-accent">Fluid Approach</p>
              <h3 className="font-semibold text-sm md:text-base">Generative Logic</h3>
            </div>
          </div>
          <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">✓</span>
              AI crafts exactly what you need
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">✓</span>
              Days, not months
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">✓</span>
              Self-service configuration
            </li>
          </ul>
        </div>
      </div>
      
      <div className="flex items-center justify-center gap-2 md:gap-4 text-xs md:text-sm text-muted-foreground">
        <span>Modular ERPs failed before</span>
        <ArrowRight className="w-4 h-4" />
        <span>LLMs now enable <span className="text-accent font-medium">specificity at scale</span></span>
      </div>
    </SlideSection>
  );
};
