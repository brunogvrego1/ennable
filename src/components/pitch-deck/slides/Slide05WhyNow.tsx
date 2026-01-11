import { SlideSection } from "../SlideSection";
import { Cpu, Sparkles, ArrowRight, X, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { itemVariants, cardVariants } from "../motion-variants";
import { useLanguage } from "@/contexts/LanguageContext";

export const Slide05WhyNow = () => {
  const { t } = useLanguage();
  const legacyPoints = t('slide05.legacyPoints') as string[];
  const ennablePoints = t('slide05.ennablePoints') as string[];

  return (
    <SlideSection id="slide-5">
      <motion.div className="mb-4 sm:mb-5 md:mb-6" variants={itemVariants}>
        <span className="tesla-label">{t('slide05.label') as string}</span>
        <h2 className="slide-title mt-2 whitespace-pre-line">
          {t('slide05.title') as string}
        </h2>
      </motion.div>
      
      <div className="grid gap-3 mb-4 sm:grid-cols-2 sm:gap-4 md:gap-6 md:mb-8">
        <motion.div className="tesla-card p-3 sm:p-4 md:p-6" variants={cardVariants}>
          <div className="flex items-center gap-2 mb-2 sm:gap-3 sm:mb-3 md:mb-4">
            <div className="tesla-icon-container w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12">
              <Cpu className="w-4 h-4 text-muted-foreground sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{t('slide05.legacyLabel') as string}</p>
              <h3 className="font-semibold text-sm sm:text-base">{t('slide05.legacyTitle') as string}</h3>
            </div>
          </div>
          <ul className="space-y-2 text-xs text-muted-foreground sm:space-y-2.5 sm:text-sm md:space-y-3">
            {legacyPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <X className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div className="tesla-dark-card p-3 sm:p-4 md:p-6" variants={cardVariants}>
          <div className="flex items-center gap-2 mb-2 sm:gap-3 sm:mb-3 md:mb-4">
            <div className="tesla-icon-container w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12">
              <Sparkles className="w-4 h-4 text-accent sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </div>
            <div>
              <p className="text-xs text-accent uppercase tracking-wider">{t('slide05.ennableLabel') as string}</p>
              <h3 className="font-semibold text-sm text-foreground sm:text-base">{t('slide05.ennableTitle') as string}</h3>
            </div>
          </div>
          <ul className="space-y-2 text-xs text-foreground/70 sm:space-y-2.5 sm:text-sm md:space-y-3">
            {ennablePoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[hsl(142,76%,36%)] flex-shrink-0 mt-0.5" />
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      
      <motion.div className="flex items-center justify-center gap-2 text-xs text-muted-foreground tesla-card px-3 py-2 mx-auto w-fit sm:gap-3 sm:px-4 sm:py-3 sm:text-sm md:gap-4" variants={itemVariants}>
        <span>{t('slide05.conclusion') as string}</span>
        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
        <span>{t('slide05.conclusionPrefix') as string} <span className="text-accent font-medium">{t('slide05.conclusionHighlight') as string}</span></span>
      </motion.div>
    </SlideSection>
  );
};
