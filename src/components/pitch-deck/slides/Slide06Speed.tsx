import { SlideSection } from "../SlideSection";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { itemVariants, cardVariants, gridContainerVariants } from "../motion-variants";

const timeline = [
  { day: "Day 1", label: "Select Archetype", description: "Choose modules for your business" },
  { day: "Days 2-3", label: "Visual Config", description: "Customize with no-code builder" },
  { day: "Day 4", label: "Go Live", description: "Deploy and start processing" },
];

export const Slide06Speed = () => {
  return (
    <SlideSection id="slide-6">
      <motion.div className="mb-4 sm:mb-5 md:mb-6" variants={itemVariants}>
        <span className="tesla-label">Instant Relevance</span>
        <h2 className="slide-title mt-2">
          From Setup to Operations<br />in Days
        </h2>
      </motion.div>
      
      <motion.div 
        className="slide-grid-2 items-center"
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Timeline */}
        <motion.div
          className="space-y-2 sm:space-y-3"
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {timeline.map((step, index) => (
            <motion.div key={index} className="flex gap-2 sm:gap-3" variants={cardVariants}>
              <div className="flex flex-col items-center">
                <div className="tesla-icon-container w-8 h-8 text-accent font-medium text-xs sm:w-9 sm:h-9 sm:text-sm">
                  {index + 1}
                </div>
                {index < timeline.length - 1 && (
                  <div className="w-px h-full bg-border/60 mt-1" />
                )}
              </div>
              <div className="pb-2 sm:pb-3">
                <p className="text-[10px] tesla-label">{step.day}</p>
                <h3 className="text-sm font-medium mt-0.5 sm:text-base">{step.label}</h3>
                <p className="text-xs text-muted-foreground font-light mt-0.5 sm:text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Stats */}
        <div className="space-y-2 sm:space-y-3">
          <motion.div className="tesla-dark-card p-3 text-center sm:p-4 md:p-6" variants={cardVariants}>
            <div className="text-3xl font-semibold text-foreground mb-1 sm:text-4xl md:text-5xl lg:text-6xl">8</div>
            <p className="text-sm text-foreground/60 font-light sm:text-base">Day Average Deployment</p>
          </motion.div>
          
          <motion.div className="tesla-card p-3 flex items-center gap-2 border-l-2 border-accent sm:gap-3 sm:p-4" variants={cardVariants}>
            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 sm:w-6 sm:h-6" strokeWidth={1.5} />
            <div>
              <p className="font-medium text-sm sm:text-base">90% Reduction</p>
              <p className="text-xs text-muted-foreground font-light sm:text-sm">vs. industry standard of 3–6 months</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SlideSection>
  );
};
