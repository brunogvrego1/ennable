import { SlideSection } from "../SlideSection";
import { AlertTriangle, Layers, Box } from "lucide-react";

export const Slide02Problem = () => {
  return (
    <SlideSection id="slide-2">
      <div className="mb-12">
        <span className="text-accent font-medium text-sm uppercase tracking-wider">The Problem</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 tracking-tight">
          One Size Fits None
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Mid-market businesses face the <span className="text-foreground font-medium">Hospitality Paradox</span>: 
            too complex for basic POS tools, but suffocated by the rigidity of legacy Enterprise ERPs.
          </p>
          
          <div className="p-6 bg-coral/5 border border-coral/20 rounded-xl">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-coral flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground mb-1">15% EBITDA Loss</p>
                <p className="text-muted-foreground">
                  Fragmented stacks lead to operational leakage and missed revenue opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex gap-6 justify-center">
          <div className="flex-1 max-w-[200px]">
            <div className="aspect-square bg-muted/50 rounded-2xl p-6 flex flex-col items-center justify-center border border-border">
              <Layers className="w-12 h-12 text-muted-foreground mb-4" />
              <p className="text-sm text-center text-muted-foreground">Fragmented<br/>Legacy Apps</p>
            </div>
            <p className="text-xs text-center text-muted-foreground mt-3">Silos everywhere</p>
          </div>
          
          <div className="text-2xl text-muted-foreground self-center">vs</div>
          
          <div className="flex-1 max-w-[200px]">
            <div className="aspect-square bg-muted/50 rounded-2xl p-6 flex flex-col items-center justify-center border border-border">
              <Box className="w-12 h-12 text-muted-foreground mb-4" />
              <p className="text-sm text-center text-muted-foreground">Rigid<br/>Enterprise ERP</p>
            </div>
            <p className="text-xs text-center text-muted-foreground mt-3">Grey box prison</p>
          </div>
        </div>
      </div>
    </SlideSection>
  );
};
