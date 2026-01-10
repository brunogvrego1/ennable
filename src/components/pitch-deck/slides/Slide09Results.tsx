import { SlideSection } from "../SlideSection";
import { TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { itemVariants, cardVariants, gridContainerVariants } from "../motion-variants";

const caseStudies = [
  {
    segment: "Fine Dining",
    metric: "-40%",
    label: "Order Time",
  },
  {
    segment: "Boutique Hotel",
    metric: "-60%",
    label: "IT Overhead",
  },
  {
    segment: "Nightclubs",
    metric: "+28%",
    label: "Revenue",
  },
];

export const Slide09Results = () => {
  return (
    <SlideSection id="slide-9">
      <motion.div className="mb-4 sm:mb-5 md:mb-6" variants={itemVariants}>
        <span className="tesla-label">Real Results</span>
        <h2 className="slide-title mt-2">
          Real Operators,<br />Real Impact
        </h2>
      </motion.div>
      
      {/* Metrics - clean, number-focused layout */}
      <motion.div 
        className="grid grid-cols-3 gap-2 mb-3 sm:gap-3 sm:mb-4 md:gap-4 md:mb-6"
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {caseStudies.map((study, index) => (
          <motion.div 
            key={index}
            className="tesla-card p-2.5 text-center sm:p-4 md:p-5"
            variants={cardVariants}
          >
            <p className="text-[10px] text-muted-foreground mb-1 font-light uppercase tracking-wider sm:text-xs sm:mb-2">{study.segment}</p>
            <div className="text-2xl font-semibold text-accent mb-0.5 sm:text-3xl md:text-4xl lg:text-5xl">
              {study.metric}
            </div>
            <p className="text-xs font-medium text-foreground sm:text-sm">{study.label}</p>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div 
        className="tesla-dark-card flex flex-col items-center justify-center gap-3 p-3 sm:flex-row sm:gap-8 sm:p-4 md:gap-12 md:p-5"
        variants={cardVariants}
      >
        <div className="text-center">
          <div className="text-2xl font-semibold text-foreground mb-0.5 sm:text-3xl sm:mb-1 md:text-4xl">40+</div>
          <p className="text-xs text-foreground/50 font-light sm:text-sm">Active Operators</p>
        </div>
        
        <div className="hidden sm:block w-px h-8 bg-foreground/10 md:h-10" />
        
        <div className="text-center">
          <div className="flex items-center justify-center gap-1.5 mb-0.5 sm:mb-1">
            <TrendingUp className="w-4 h-4 text-accent sm:w-5 sm:h-5" strokeWidth={1.5} />
            <span className="text-2xl font-semibold text-foreground sm:text-3xl md:text-4xl">115%</span>
          </div>
          <p className="text-xs text-foreground/50 font-light sm:text-sm">Net Retention</p>
        </div>
        
        <div className="hidden sm:block w-px h-8 bg-foreground/10 md:h-10" />
        
        <div className="text-center max-w-[180px] hidden sm:block">
          <p className="text-xs text-foreground/40 font-light">
            Once a customer starts with one module, they organically expand.
          </p>
        </div>
      </motion.div>
    </SlideSection>
  );
};
