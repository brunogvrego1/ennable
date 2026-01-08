import { SlideSection } from "../SlideSection";
import { Cpu, Sparkles, ArrowRight } from "lucide-react";
export const Slide05WhyNow = () => {
  return <SlideSection id="slide-5">
      <div className="mb-12">
        <span className="text-accent font-medium text-sm uppercase tracking-wider">The "Why Now?"</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 tracking-tight">
          The Generative<br />Inflection Point
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="p-8 bg-muted/50 rounded-2xl border border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
              <Cpu className="w-6 h-6 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Legacy Approach</p>
              <h3 className="font-semibold text-lg">Fixed Logic</h3>
            </div>
          </div>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-coral mt-1">×</span>
              One-size-fits-all features
            </li>
            <li className="flex items-start gap-2">
              <span className="text-coral mt-1">×</span>
              Months of customization
            </li>
            <li className="flex items-start gap-2">
              <span className="text-coral mt-1">×</span>
              Expensive consultants
            </li>
          </ul>
        </div>
        
        <div className="p-8 bg-gradient-to-br from-accent/5 to-coral/5 rounded-2xl border border-accent/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-accent">Fluid Approach</p>
              <h3 className="font-semibold text-lg">Generative Logic</h3>
            </div>
          </div>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">✓
Crafts exactly what you need<span className="text-accent mt-1">✓</span>
              AI crafts exactly what you need
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">✓</span>
              Days, not months
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">✓</span>
              Self-service configuration
            </li>
          </ul>
        </div>
      </div>
      
      <div className="flex items-center justify-center gap-4 text-muted-foreground">
        <span>Modular ERPs failed before</span>
        <ArrowRight className="w-5 h-5" />
        <span>LLMs now enable <span className="text-accent font-medium">specificity at scale</span></span>
      </div>
    </SlideSection>;
};