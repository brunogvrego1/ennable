import { SlideSection } from "../SlideSection";
import { Cpu, Sparkles, ArrowRight, X, CheckCircle2 } from "lucide-react";

export const Slide05WhyNow = () => {
  return (
    <SlideSection id="slide-5">
      <div className="mb-4 md:mb-6">
        <span className="tesla-label">The "Why Now?"</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 tracking-tight">
          The Generative<br />Inflection Point
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-3 md:gap-6 mb-4 md:mb-8">
        <div className="tesla-card p-4 md:p-6">
          <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
            <div className="tesla-icon-container w-10 h-10 md:w-12 md:h-12">
              <Cpu className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Legacy Approach</p>
              <h3 className="font-semibold text-sm md:text-base">Fixed Logic</h3>
            </div>
          </div>
          <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-muted-foreground">
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
        
        <div className="tesla-dark-card p-4 md:p-6">
          <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
            <div className="tesla-icon-container w-10 h-10 md:w-12 md:h-12">
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-accent" />
            </div>
            <div>
              <p className="text-xs text-accent uppercase tracking-wider">Fluid Approach</p>
              <h3 className="font-semibold text-sm md:text-base text-white">Generative Logic</h3>
            </div>
          </div>
          <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-white/70">
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
      
      <div className="flex items-center justify-center gap-2 md:gap-4 text-xs md:text-sm text-muted-foreground tesla-card px-4 py-3 mx-auto w-fit">
        <span>Modular ERPs failed before</span>
        <ArrowRight className="w-4 h-4" />
        <span>LLMs now enable <span className="text-accent font-medium">specificity at scale</span></span>
      </div>
    </SlideSection>
  );
};
