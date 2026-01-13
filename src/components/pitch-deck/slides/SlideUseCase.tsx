import { SlideSection } from "../SlideSection";
import { Wine, Pizza, Sparkles, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { itemVariants, cardVariants, gridContainerVariants } from "../motion-variants";
import { useLanguage } from "@/contexts/LanguageContext";

export const SlideUseCase = () => {
  const { t } = useLanguage();

  return (
    <SlideSection id="slide-usecase">
      <motion.div className="mb-4 sm:mb-6 md:mb-8" variants={itemVariants}>
        <span className="tesla-label">{t('slideUseCase.label') as string}</span>
        <h2 className="slide-title mt-2 flex flex-wrap items-center gap-2">
          <span>{t('slideUseCase.title') as string}</span>
          <Sparkles className="w-5 h-5 text-accent sm:w-6 sm:h-6" />
        </h2>
        <p className="text-sm text-muted-foreground mt-2 sm:text-base">
          {t('slideUseCase.characteristics') as string}
        </p>
      </motion.div>
      
      <motion.div 
        className="slide-grid-2 items-stretch gap-4 sm:gap-6"
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* A Experiência */}
        <motion.div className="tesla-card p-4 sm:p-6 border-t-2 border-accent" variants={cardVariants}>
          <div className="flex items-center gap-3 mb-4">
            <div className="tesla-icon-container w-10 h-10 sm:w-12 sm:h-12">
              <Wine className="w-5 h-5 text-accent sm:w-6 sm:h-6" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-medium text-sm sm:text-base">{t('slideUseCase.experienceTitle') as string}</h3>
              <p className="text-xs text-muted-foreground">{t('slideUseCase.experienceSubtitle') as string}</p>
            </div>
          </div>
          <ul className="space-y-2">
            {(t('slideUseCase.experiencePoints') as string[]).map((point, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {point}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* O Software */}
        <motion.div className="tesla-card p-4 sm:p-6 border-t-2 border-muted-foreground/30" variants={cardVariants}>
          <div className="flex items-center gap-3 mb-4">
            <div className="tesla-icon-container w-10 h-10 sm:w-12 sm:h-12 bg-muted">
              <Pizza className="w-5 h-5 text-muted-foreground sm:w-6 sm:h-6" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-medium text-sm sm:text-base">{t('slideUseCase.softwareTitle') as string}</h3>
              <p className="text-xs text-muted-foreground">{t('slideUseCase.softwareSubtitle') as string}</p>
            </div>
          </div>
          <ul className="space-y-2">
            {(t('slideUseCase.softwarePoints') as string[]).map((point, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* Callout */}
      <motion.div 
        className="mt-4 sm:mt-6 tesla-dark-card p-3 sm:p-4 flex items-center gap-3"
        variants={itemVariants}
      >
        <AlertCircle className="w-5 h-5 text-accent flex-shrink-0" strokeWidth={1.5} />
        <p className="text-xs text-foreground/80 sm:text-sm">
          <span className="font-medium text-foreground">{t('slideUseCase.gapTitle') as string}:</span> {t('slideUseCase.gapDescription') as string}
        </p>
      </motion.div>
    </SlideSection>
  );
};
