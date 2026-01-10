import { SlideSection } from "../SlideSection";
import { AlertTriangle, Layers, Box } from "lucide-react";

export const Slide02Problem = () => {
  return (
    <SlideSection id="slide-2" className="bg-secondary/30">
      <div className="mb-4 md:mb-8">
        <span className="text-accent font-medium text-xs md:text-sm uppercase tracking-wider">The Problem</span>
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
          
          <div className="p-3 md:p-4 bg-coral/5 border border-coral/20 rounded-xl">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
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
            <div className="aspect-square bg-muted/50 rounded-xl md:rounded-2xl p-3 md:p-6 flex flex-col items-center justify-center border border-border">
              <Layers className="w-8 h-8 md:w-12 md:h-12 text-muted-foreground mb-2 md:mb-4" />
              <p className="text-xs md:text-sm text-center text-muted-foreground">Fragmented<br />Legacy Apps</p>
            </div>
            <p className="text-xs text-center text-muted-foreground mt-2 hidden sm:block">Silos everywhere</p>
          </div>
          
          <div className="text-lg md:text-2xl text-muted-foreground self-center">vs</div>
          
          <div className="flex-1 max-w-[140px] md:max-w-[180px]">
            <div className="aspect-square bg-muted/50 rounded-xl md:rounded-2xl p-3 md:p-6 flex flex-col items-center justify-center border border-border">
              <Box className="w-8 h-8 md:w-12 md:h-12 text-muted-foreground mb-2 md:mb-4" />
              <p className="text-xs md:text-sm text-center text-muted-foreground">Rigid<br />Enterprise ERP</p>
            </div>
            <p className="text-xs text-center text-muted-foreground mt-2 hidden sm:block">Grey box prison</p>
          </div>
        </div>
      </div>
    </SlideSection>
  );
};
