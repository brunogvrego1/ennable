import { SlideSection } from "../SlideSection";
import { AlertTriangle, Layers, Box } from "lucide-react";
import { motion } from "framer-motion";
import { itemVariants, cardVariants, scaleInVariants } from "../motion-variants";

export const Slide02Problem = () => {
  return (
    <SlideSection id="slide-2" className="bg-secondary/20">
      <motion.div className="mb-4 sm:mb-6 md:mb-8" variants={itemVariants}>
        <span className="tesla-label">The Problem</span>
        <h2 className="slide-title mt-2">
          One Size Fits None
        </h2>
      </motion.div>
      
      <div className="slide-grid-2 items-center">
        <div className="space-y-3 sm:space-y-4">
          <motion.p 
            className="text-sm text-muted-foreground leading-relaxed font-light sm:text-base lg:text-lg"
            variants={itemVariants}
          >
            Mid-market businesses face the <span className="text-foreground font-medium">Hospitality Paradox</span>: 
            too complex for basic POS tools, but suffocated by the rigidity of legacy Enterprise ERPs.
          </motion.p>
          
          <motion.div className="tesla-card p-3 border-l-2 border-accent sm:p-4" variants={cardVariants}>
            <div className="flex items-start gap-3">
              <div className="tesla-icon-container w-9 h-9 flex-shrink-0 sm:w-10 sm:h-10">
                <AlertTriangle className="w-4 h-4 text-accent sm:w-5 sm:h-5" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-medium text-sm text-foreground mb-0.5 sm:text-base">EBITDA Loss</p>
                <p className="text-xs text-muted-foreground font-light sm:text-sm">
                  Fragmented stacks lead to operational leakage and missed revenue opportunities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="flex gap-4 justify-center sm:gap-6 md:gap-8"
          variants={scaleInVariants}
        >
          <div className="flex-1 max-w-[100px] sm:max-w-[120px] md:max-w-[140px]">
            <div className="aspect-square tesla-card p-3 flex flex-col items-center justify-center sm:p-4 md:p-5">
              <div className="tesla-icon-container w-10 h-10 mb-2 sm:w-12 sm:h-12 md:w-14 md:h-14 md:mb-3">
                <Layers className="w-5 h-5 text-muted-foreground sm:w-6 sm:h-6" strokeWidth={1.5} />
              </div>
              <p className="text-[10px] text-center text-muted-foreground font-medium sm:text-xs">Fragmented<br/>Legacy Apps</p>
            </div>
          </div>
          
          <div className="text-base text-muted-foreground/50 self-center font-light sm:text-lg md:text-xl">vs</div>
          
          <div className="flex-1 max-w-[100px] sm:max-w-[120px] md:max-w-[140px]">
            <div className="aspect-square tesla-card p-3 flex flex-col items-center justify-center sm:p-4 md:p-5">
              <div className="tesla-icon-container w-10 h-10 mb-2 sm:w-12 sm:h-12 md:w-14 md:h-14 md:mb-3">
                <Box className="w-5 h-5 text-muted-foreground sm:w-6 sm:h-6" strokeWidth={1.5} />
              </div>
              <p className="text-[10px] text-center text-muted-foreground font-medium sm:text-xs">Rigid<br/>Enterprise ERP</p>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideSection>
  );
};
