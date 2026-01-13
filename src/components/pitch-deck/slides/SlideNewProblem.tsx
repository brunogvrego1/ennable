import { SlideSection } from "../SlideSection";
import { Square, Circle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { itemVariants, cardVariants, gridContainerVariants } from "../motion-variants";
import { useLanguage } from "@/contexts/LanguageContext";

export const SlideNewProblem = () => {
  const { t } = useLanguage();

  return (
    <SlideSection id="slide-problem" className="bg-secondary/20">
      <motion.div className="mb-4 sm:mb-6 md:mb-8" variants={itemVariants}>
        <span className="tesla-label">{t('slideNewProblem.label') as string}</span>
        <h2 className="slide-title mt-2">
          {t('slideNewProblem.title') as string}
        </h2>
      </motion.div>
      
      <motion.div 
        className="slide-grid-2 items-center"
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="space-y-3 sm:space-y-4">
          <motion.p 
            className="text-sm text-muted-foreground leading-relaxed font-light sm:text-base lg:text-lg"
            variants={itemVariants}
          >
            {t('slideNewProblem.description') as string}
          </motion.p>
          
          <motion.div className="tesla-card p-4 border-l-2 border-accent sm:p-5" variants={cardVariants}>
            <p className="text-base font-medium text-foreground sm:text-lg">
              "{t('slideNewProblem.quote') as string}"
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          className="flex gap-4 items-center justify-center sm:gap-6 md:gap-8"
          variants={cardVariants}
        >
          {/* SaaS Tradicional - Square */}
          <div className="flex flex-col items-center gap-2">
            <div className="tesla-card p-4 sm:p-6">
              <Square className="w-12 h-12 text-muted-foreground sm:w-16 sm:h-16" strokeWidth={1.5} />
            </div>
            <p className="text-xs text-center text-muted-foreground font-medium sm:text-sm">
              {t('slideNewProblem.saasLabel') as string}
            </p>
          </div>
          
          <ArrowRight className="w-5 h-5 text-muted-foreground/50 sm:w-6 sm:h-6" />
          
          {/* Seu Negócio - Circle */}
          <div className="flex flex-col items-center gap-2">
            <div className="tesla-card p-4 sm:p-6">
              <Circle className="w-12 h-12 text-accent sm:w-16 sm:h-16" strokeWidth={1.5} />
            </div>
            <p className="text-xs text-center text-muted-foreground font-medium sm:text-sm">
              {t('slideNewProblem.businessLabel') as string}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </SlideSection>
  );
};
