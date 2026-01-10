import { SlideSection } from "../SlideSection";
import { AlertTriangle, Layers, Box } from "lucide-react";

export const Slide02Problem = () => {
  return (
    <SlideSection id="slide-2" className="bg-secondary/30">
      <div className="mb-4 md:mb-8">
        <span className="tesla-label">The Problem</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 tracking-tight">
          One Size Fits None
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
        <div className="space-y-3 md:space-y-4">
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
            Mid-market businesses face the <span className="text-foreground font-medium">Hospitality Paradox</span>: 
            too complex for basic POS tools, but suffocated by the rigidity of legacy Enterprise ERPs.
          </p>
          
          <div className="tesla-card p-3 md:p-4 border-l-4 border-coral">
            <div className="flex items-start gap-3">
              <div className="tesla-icon-container w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-coral" />
              </div>
              <div>
                <p className="font-semibold text-sm md:text-base text-foreground mb-0.5">EBITDA Loss</p>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Fragmented stacks lead to operational leakage and missed revenue opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex gap-3 md:gap-6 justify-center">
          <div className="flex-1 max-w-[140px] md:max-w-[180px]">
            <div className="aspect-square tesla-card p-3 md:p-6 flex flex-col items-center justify-center">
              <div className="tesla-icon-container w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-4">
                <Layers className="w-6 h-6 md:w-8 md:h-8 text-muted-foreground" />
              </div>
              <p className="text-xs md:text-sm text-center text-muted-foreground">Fragmented<br />Legacy Apps</p>
            </div>
            <p className="text-xs text-center text-muted-foreground mt-2 hidden sm:block">Silos everywhere</p>
          </div>
          
          <div className="text-lg md:text-2xl text-muted-foreground self-center">vs</div>
          
          <div className="flex-1 max-w-[140px] md:max-w-[180px]">
            <div className="aspect-square tesla-card p-3 md:p-6 flex flex-col items-center justify-center">
              <div className="tesla-icon-container w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-4">
                <Box className="w-6 h-6 md:w-8 md:h-8 text-muted-foreground" />
              </div>
              <p className="text-xs md:text-sm text-center text-muted-foreground">Rigid<br />Enterprise ERP</p>
            </div>
            <p className="text-xs text-center text-muted-foreground mt-2 hidden sm:block">Grey box prison</p>
          </div>
        </div>
      </div>
    </SlideSection>
  );
};
