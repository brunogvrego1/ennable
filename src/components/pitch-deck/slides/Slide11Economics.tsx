import { SlideSection } from "../SlideSection";
import { Store } from "lucide-react";
import { motion } from "framer-motion";
import { itemVariants, cardVariants, gridContainerVariants } from "../motion-variants";
import { useLanguage } from "@/contexts/LanguageContext";

const revenuePercentages = [70, 20, 10];

export const Slide11Economics = () => {
  const { t } = useLanguage();
  const metrics = t('slide11.metrics') as { label: string; value: string; description: string }[];
  const revenueItems = t('slide11.revenue') as { source: string; range: string }[];
  
  const revenue = revenueItems.map((item, idx) => ({
    ...item,
    percentage: revenuePercentages[idx]
  }));

  return (
    <SlideSection id="slide-11">
      <motion.div className="mb-4 sm:mb-5 md:mb-6" variants={itemVariants}>
        <span className="tesla-label">{t('slide11.label') as string}</span>
        <h2 className="slide-title mt-2 whitespace-pre-line">
          {t('slide11.title') as string}
        </h2>
      </motion.div>
      
      <motion.div 
        className="slide-grid-2"
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Key metrics - number-focused, no icons */}
        <div>
          <motion.h3 className="text-sm font-medium mb-2 sm:mb-3 sm:text-base" variants={itemVariants}>
            {t('slide11.metricsTitle') as string}
          </motion.h3>
          <motion.div 
            className="grid gap-2 sm:gap-2.5"
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {metrics.map((metric, index) => (
              <motion.div 
                key={index}
                className="tesla-card p-2.5 flex items-center justify-between sm:p-3 md:p-4"
                variants={cardVariants}
              >
                <div>
                  <p className="text-[10px] text-muted-foreground font-light uppercase tracking-wider">{metric.description}</p>
                  <p className="text-xl font-semibold mt-0.5 sm:text-2xl">{metric.value}</p>
                </div>
                <span className="text-xs font-medium text-muted-foreground sm:text-sm">{metric.label}</span>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div className="mt-2 tesla-dark-card p-2.5 sm:mt-3 sm:p-3 md:p-4" variants={cardVariants}>
            <p className="text-xs text-foreground/80 font-light sm:text-sm">
              <span className="font-normal text-accent">{t('slide11.ltvCac') as string}</span> {t('slide11.ltvCacSuffix') as string}
            </p>
          </motion.div>
        </div>
        
        {/* Revenue breakdown - solid progress bars */}
        <div>
          <motion.h3 className="text-sm font-medium mb-2 sm:mb-3 sm:text-base" variants={itemVariants}>
            {t('slide11.revenueTitle') as string}
          </motion.h3>
          <motion.div 
            className="space-y-2 sm:space-y-2.5"
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {revenue.map((item, index) => (
              <motion.div 
                key={index}
                className="tesla-card p-2.5 sm:p-3 md:p-4"
                variants={cardVariants}
              >
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <span className="text-xs font-medium sm:text-sm">{item.source}</span>
                  <span className="text-[10px] text-muted-foreground font-light sm:text-xs">{item.range}</span>
                </div>
                <div className="tesla-progress">
                  <div 
                    className="tesla-progress-fill transition-all duration-500"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div className="mt-2 flex items-start gap-2 tesla-card p-2.5 sm:mt-3 sm:p-3" variants={cardVariants}>
            <Store className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
            <p className="text-xs text-muted-foreground font-light">
              {t('slide11.expansionRevenue') as string} <span className="text-foreground font-normal">{t('slide11.expansionHighlight') as string}</span>.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </SlideSection>
  );
};
