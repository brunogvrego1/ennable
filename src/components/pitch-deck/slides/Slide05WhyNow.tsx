import { SlideSection } from "../SlideSection";
import { Cpu, Sparkles, ArrowRight, X, CheckCircle2 } from "lucide-react";

export const Slide05WhyNow = () => {
  return (
    <SlideSection id="slide-5">
      <div className="mb-4 sm:mb-5 md:mb-6">
        <span className="tesla-label">The "Why Now?"</span>
        <h2 className="slide-title mt-2">
          The Generative<br />Inflection Point
        </h2>
      </div>
      
      <div className="grid gap-3 mb-4 sm:grid-cols-2 sm:gap-4 md:gap-6 md:mb-8">
        <div className="tesla-card p-3 sm:p-4 md:p-6">
          <div className="flex items-center gap-2 mb-2 sm:gap-3 sm:mb-3 md:mb-4">
            <div className="tesla-icon-container w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12">
              <Cpu className="w-4 h-4 text-muted-foreground sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Legacy Approach</p>
              <h3 className="font-semibold text-sm sm:text-base">Fixed Logic</h3>
            </div>
          </div>
          <ul className="space-y-2 text-xs text-muted-foreground sm:space-y-2.5 sm:text-sm md:space-y-3">
            <li className="flex items-start gap-2">
              <X className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
              One-size-fits-all features
            </li>
            <li className="flex items-start gap-2">
              <X className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
              Months of customization
            </li>
            <li className="flex items-start gap-2">
              <X className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
              Expensive consultants
            </li>
          </ul>
        </div>
        
        <div className="tesla-dark-card p-3 sm:p-4 md:p-6">
          <div className="flex items-center gap-2 mb-2 sm:gap-3 sm:mb-3 md:mb-4">
            <div className="tesla-icon-container w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12">
              <Sparkles className="w-4 h-4 text-accent sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </div>
            <div>
              <p className="text-xs text-accent uppercase tracking-wider">Fluid Approach</p>
              <h3 className="font-semibold text-sm text-foreground sm:text-base">Generative Logic</h3>
            </div>
          </div>
          <ul className="space-y-2 text-xs text-foreground/70 sm:space-y-2.5 sm:text-sm md:space-y-3">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[hsl(142,76%,36%)] flex-shrink-0 mt-0.5" />
              AI crafts exactly what you need
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[hsl(142,76%,36%)] flex-shrink-0 mt-0.5" />
              Days, not months
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[hsl(142,76%,36%)] flex-shrink-0 mt-0.5" />
              Self-service configuration
            </li>
          </ul>
        </div>
      </div>
      
      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground tesla-card px-3 py-2 mx-auto w-fit sm:gap-3 sm:px-4 sm:py-3 sm:text-sm md:gap-4">
        <span>Modular ERPs failed before</span>
        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
        <span>LLMs now enable <span className="text-accent font-medium">specificity at scale</span></span>
      </div>
    </SlideSection>
  );
};
