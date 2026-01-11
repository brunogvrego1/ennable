import { SlideSection } from "../SlideSection";
import { MessageSquare, GitBranch, Smartphone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { itemVariants, cardVariants, gridContainerVariants } from "../motion-variants";
import { useLanguage } from "@/contexts/LanguageContext";

const stepIcons = [MessageSquare, GitBranch, Smartphone];

export const Slide13CreatorJourney = () => {
  const { t } = useLanguage();
  const stepsData = t('slide13.steps') as { number: string; title: string; description: string; example?: string; flow?: string[] }[];
  
  const steps = stepsData.map((step, idx) => ({
    ...step,
    icon: stepIcons[idx]
  }));

  return (
    <SlideSection id="creator-journey">
      <motion.div className="mb-3 sm:mb-4 md:mb-6" variants={itemVariants}>
        <span className="tesla-label">{t('slide13.label') as string}</span>
        <h2 className="slide-title mt-2 whitespace-pre-line">
          {t('slide13.title') as string}
        </h2>
        <p className="slide-subtitle mt-2 max-w-2xl font-light">
          {t('slide13.subtitle') as string}
        </p>
      </motion.div>

      <motion.div 
        className="grid gap-2 sm:gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4"
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {steps.map((step) => (
          <motion.div 
            key={step.number}
            className="tesla-card p-2.5 sm:p-3 md:p-4"
            variants={cardVariants}
          >
            <div className="flex items-center gap-2 mb-1.5 sm:gap-2.5 sm:mb-2">
              <div className="tesla-icon-container w-8 h-8 flex-shrink-0 sm:w-9 sm:h-9 md:w-10 md:h-10">
                <step.icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-accent font-medium text-xs sm:text-sm">{step.number}</span>
                <h3 className="text-sm font-medium text-foreground sm:text-base">{step.title}</h3>
              </div>
            </div>
            
            <p className="text-xs text-muted-foreground leading-relaxed mb-1.5 font-light sm:text-sm sm:mb-2">
              {step.description}
            </p>
            
            {step.example && (
              <div className="hidden sm:block p-2 bg-muted/30 rounded-xl md:p-2.5">
                <p className="text-[10px] font-mono text-muted-foreground/80 italic md:text-xs">
                  {step.example}
                </p>
              </div>
            )}
            
            {step.flow && (
              <div className="flex items-center gap-1 flex-wrap sm:gap-1.5">
                {step.flow.map((item, idx) => (
                  <div key={item} className="flex items-center gap-1 sm:gap-1.5">
                    <span className="tesla-badge-filled text-[9px] px-1.5 py-0.5 sm:text-[10px] sm:px-2">
                      {item}
                    </span>
                    {idx < step.flow!.length - 1 && (
                      <ArrowRight className="w-2.5 h-2.5 text-muted-foreground/50" strokeWidth={1.5} />
                    )}
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </SlideSection>
  );
};
