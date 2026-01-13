import { SlideSection } from "../SlideSection";
import { Blocks, Clock, Coins, Heart, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { itemVariants, cardVariants, scaleInVariants, gridContainerVariants } from "../motion-variants";
import { useLanguage } from "@/contexts/LanguageContext";

export const SlideResult = () => {
  const { t } = useLanguage();

  const metrics = [
    { icon: Clock, key: 'time' },
    { icon: Coins, key: 'cost' },
    { icon: Heart, key: 'satisfaction' },
  ];

  return (
    <SlideSection id="slide-result" className="bg-secondary/20">
      <motion.div className="mb-4 sm:mb-6 md:mb-8 text-center" variants={itemVariants}>
        <span className="tesla-label">{t('slideResult.label') as string}</span>
        <h2 className="slide-title mt-2">
          {t('slideResult.title') as string}
        </h2>
      </motion.div>
      
      <motion.div 
        className="flex flex-col items-center gap-6 sm:gap-8"
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Central Mini App Icon */}
        <motion.div 
          className="relative"
          variants={scaleInVariants}
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center shadow-lg shadow-accent/20">
            <Blocks className="w-10 h-10 sm:w-12 sm:h-12 text-white" strokeWidth={1.5} />
          </div>
          <motion.div 
            className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
          >
            <Zap className="w-3 h-3 text-white" />
          </motion.div>
        </motion.div>

        {/* Metrics */}
        <motion.div 
          className="grid grid-cols-3 gap-4 sm:gap-8 w-full max-w-lg"
          variants={gridContainerVariants}
        >
          {metrics.map((metric, idx) => (
            <motion.div 
              key={idx}
              className="text-center"
              variants={cardVariants}
            >
              <div className="tesla-card p-3 sm:p-4 mb-2">
                <metric.icon className="w-5 h-5 mx-auto text-accent mb-2" strokeWidth={1.5} />
                <p className="text-lg sm:text-2xl font-bold text-foreground">
                  {t(`slideResult.metrics.${metric.key}.value`) as string}
                </p>
              </div>
              <p className="text-xs text-muted-foreground sm:text-sm">
                {t(`slideResult.metrics.${metric.key}.label`) as string}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Callout */}
        <motion.div 
          className="tesla-dark-card p-4 sm:p-5 max-w-md text-center"
          variants={cardVariants}
        >
          <p className="text-xs text-accent font-medium mb-1">{t('slideResult.calloutLabel') as string}</p>
          <p className="text-base font-medium text-foreground sm:text-lg">
            "{t('slideResult.quote') as string}"
          </p>
        </motion.div>
      </motion.div>
    </SlideSection>
  );
};
