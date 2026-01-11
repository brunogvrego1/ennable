import { SlideSection } from "../SlideSection";
import { AlertTriangle, Layers, Box } from "lucide-react";
import { motion } from "framer-motion";
import { itemVariants, cardVariants, scaleInVariants, gridContainerVariants } from "../motion-variants";
import { useLanguage } from "@/contexts/LanguageContext";

export const Slide02Problem = () => {
  const { t } = useLanguage();

  return (
    <SlideSection id="slide-2" className="bg-secondary/20">
      <motion.div className="mb-4 sm:mb-6 md:mb-8" variants={itemVariants}>
        <span className="tesla-label">{t('slide02.label') as string}</span>
        <h2 className="slide-title mt-2">
          {t('slide02.title') as string}
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
            {t('slide02.paragraph') as string} <span className="text-foreground font-medium">{t('slide02.paradox') as string}</span>{t('slide02.paradoxContinue') as string}
          </motion.p>
          
          <motion.div className="tesla-card p-3 border-l-2 border-accent sm:p-4" variants={cardVariants}>
            <div className="flex items-start gap-3">
              <div className="tesla-icon-container w-9 h-9 flex-shrink-0 sm:w-10 sm:h-10">
                <AlertTriangle className="w-4 h-4 text-accent sm:w-5 sm:h-5" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-medium text-sm text-foreground mb-0.5 sm:text-base">{t('slide02.ebitdaTitle') as string}</p>
                <p className="text-xs text-muted-foreground font-light sm:text-sm">
                  {t('slide02.ebitdaDescription') as string}
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
              <p className="text-[10px] text-center text-muted-foreground font-medium whitespace-pre-line sm:text-xs">{t('slide02.fragmentedApps') as string}</p>
            </div>
          </div>
          
          <div className="text-base text-muted-foreground/50 self-center font-light sm:text-lg md:text-xl">vs</div>
          
          <div className="flex-1 max-w-[100px] sm:max-w-[120px] md:max-w-[140px]">
            <div className="aspect-square tesla-card p-3 flex flex-col items-center justify-center sm:p-4 md:p-5">
              <div className="tesla-icon-container w-10 h-10 mb-2 sm:w-12 sm:h-12 md:w-14 md:h-14 md:mb-3">
                <Box className="w-5 h-5 text-muted-foreground sm:w-6 sm:h-6" strokeWidth={1.5} />
              </div>
              <p className="text-[10px] text-center text-muted-foreground font-medium whitespace-pre-line sm:text-xs">{t('slide02.rigidErp') as string}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </SlideSection>
  );
};
