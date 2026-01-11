import { SlideSection } from "../SlideSection";
import { motion } from "framer-motion";
import { itemVariants, cardVariants, scaleInVariants, gridContainerVariants } from "../motion-variants";
import { useLanguage } from "@/contexts/LanguageContext";

export const Slide10Market = () => {
  const { t } = useLanguage();

  return (
    <SlideSection id="slide-10">
      <motion.div className="mb-4 sm:mb-5 md:mb-6" variants={itemVariants}>
        <span className="tesla-label">{t('slide10.label') as string}</span>
        <h2 className="slide-title mt-2">
          {t('slide10.title') as string}
        </h2>
        <p className="slide-subtitle mt-2 max-w-3xl font-light">
          {t('slide10.subtitle') as string}
        </p>
      </motion.div>
      
      <motion.div 
        className="slide-grid-2 items-center"
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Market visualization - cleaner bubbles */}
        <motion.div className="relative h-32 sm:h-40 md:h-52" variants={scaleInVariants}>
          {/* Small Biz blob */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 tesla-card w-11 h-11 rounded-full flex items-center justify-center sm:w-12 sm:h-12 md:w-16 md:h-16">
            <span className="text-[8px] text-muted-foreground text-center font-light whitespace-pre-line sm:text-[9px] md:text-[10px]">{t('slide10.smallBiz') as string}</span>
          </div>
          
          {/* Mid-Market blob - highlighted with accent border only */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-24 h-24 rounded-full border-2 border-accent bg-accent/5 flex items-center justify-center relative sm:w-28 sm:h-28 md:w-36 md:h-36">
              <div className="text-center">
                <p className="text-[8px] text-accent font-medium uppercase tracking-wider sm:text-[9px] md:text-[10px]">{t('slide10.midMarket') as string}</p>
                <p className="text-lg font-semibold mt-0.5 sm:text-xl md:text-2xl">$50B</p>
                <p className="text-[8px] text-muted-foreground font-light sm:text-[9px] md:text-[10px]">{t('slide10.annualSpend') as string}</p>
              </div>
            </div>
          </div>
          
          {/* Enterprise blob */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 tesla-card w-12 h-12 rounded-full flex items-center justify-center sm:w-14 sm:h-14 md:w-20 md:h-20">
            <span className="text-[8px] text-muted-foreground text-center font-light sm:text-[9px] md:text-[10px]">{t('slide10.enterprise') as string}</span>
          </div>
        </motion.div>
        
        {/* TAM/SAM breakdown - cleaner progress bars */}
        <div className="space-y-2 sm:space-y-3">
          <motion.div className="tesla-card p-2.5 sm:p-3 md:p-4" variants={cardVariants}>
            <div className="flex items-center justify-between mb-1.5 sm:mb-2">
              <span className="text-xs text-muted-foreground font-light sm:text-sm">{t('slide10.tam') as string}</span>
              <span className="text-base font-semibold sm:text-lg md:text-xl">$8B</span>
            </div>
            <div className="tesla-progress">
              <div className="tesla-progress-fill w-full opacity-30" />
            </div>
          </motion.div>
          
          <motion.div className="tesla-card p-2.5 sm:p-3 md:p-4" variants={cardVariants}>
            <div className="flex items-center justify-between mb-1.5 sm:mb-2">
              <span className="text-xs text-muted-foreground font-light sm:text-sm">{t('slide10.sam') as string}</span>
              <span className="text-base font-semibold sm:text-lg md:text-xl">$2B</span>
            </div>
            <div className="tesla-progress">
              <div className="tesla-progress-fill w-1/4" />
            </div>
          </motion.div>
          
          <motion.div className="tesla-dark-card p-2.5 sm:p-3 md:p-4" variants={cardVariants}>
            <p className="text-xs text-foreground/70 font-light sm:text-sm">
              <span className="text-accent font-normal">{t('slide10.strategy') as string}</span> {t('slide10.strategyText') as string}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </SlideSection>
  );
};
