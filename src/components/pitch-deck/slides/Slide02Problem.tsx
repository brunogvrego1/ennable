import { SlideSection } from "../SlideSection";
import { AlertTriangle, Layers, Box } from "lucide-react";

export const Slide02Problem = () => {
  return (
    <SlideSection id="slide-2" className="bg-secondary/30">
      <div className="mb-4 sm:mb-6 md:mb-8">
        <span className="tesla-label">The Problem</span>
        <h2 className="slide-title mt-2">
          One Size Fits None
        </h2>
      </div>
      
      <div className="slide-grid-2 items-center">
        <div className="space-y-3 sm:space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed sm:text-base lg:text-lg">
            Mid-market businesses face the <span className="text-foreground font-medium">Hospitality Paradox</span>: 
            too complex for basic POS tools, but suffocated by the rigidity of legacy Enterprise ERPs.
          </p>
          
          <div className="tesla-card p-3 border-l-4 border-coral sm:p-4">
            <div className="flex items-start gap-3">
              <div className="tesla-icon-container w-10 h-10 flex-shrink-0 sm:w-12 sm:h-12">
                <AlertTriangle className="w-5 h-5 text-coral sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="font-semibold text-sm text-foreground mb-0.5 sm:text-base">EBITDA Loss</p>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  Fragmented stacks lead to operational leakage and missed revenue opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex gap-3 justify-center sm:gap-4 md:gap-6">
          <div className="flex-1 max-w-[120px] sm:max-w-[140px] md:max-w-[180px]">
            <div className="aspect-square tesla-card p-3 flex flex-col items-center justify-center sm:p-4 md:p-6">
              <div className="tesla-icon-container w-10 h-10 mb-2 sm:w-12 sm:h-12 md:w-16 md:h-16 md:mb-4">
                <Layers className="w-5 h-5 text-muted-foreground sm:w-6 sm:h-6 md:w-8 md:h-8" />
              </div>
              <p className="text-xs text-center text-muted-foreground sm:text-sm">Fragmented<br />Legacy Apps</p>
            </div>
            <p className="text-xs text-center text-muted-foreground mt-2 hidden sm:block">Silos everywhere</p>
          </div>
          
          <div className="text-lg text-muted-foreground self-center sm:text-xl md:text-2xl">vs</div>
          
          <div className="flex-1 max-w-[120px] sm:max-w-[140px] md:max-w-[180px]">
            <div className="aspect-square tesla-card p-3 flex flex-col items-center justify-center sm:p-4 md:p-6">
              <div className="tesla-icon-container w-10 h-10 mb-2 sm:w-12 sm:h-12 md:w-16 md:h-16 md:mb-4">
                <Box className="w-5 h-5 text-muted-foreground sm:w-6 sm:h-6 md:w-8 md:h-8" />
              </div>
              <p className="text-xs text-center text-muted-foreground sm:text-sm">Rigid<br />Enterprise ERP</p>
            </div>
            <p className="text-xs text-center text-muted-foreground mt-2 hidden sm:block">Grey box prison</p>
          </div>
        </div>
      </div>
    </SlideSection>
  );
};
