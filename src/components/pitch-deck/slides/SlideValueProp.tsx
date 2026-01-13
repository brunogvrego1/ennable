import { SlideSection } from "../SlideSection";
import { Layers, Blocks, DollarSign, Shield, Target, CheckCircle2, X } from "lucide-react";
import { motion } from "framer-motion";
import { itemVariants, cardVariants, gridContainerVariants } from "../motion-variants";
import { useLanguage } from "@/contexts/LanguageContext";

export const SlideValueProp = () => {
  const { t } = useLanguage();

  const benefits = [
    { icon: DollarSign, key: 'cost' },
    { icon: Shield, key: 'ownership' },
    { icon: Target, key: 'fit' },
  ];

  return (
    <SlideSection id="slide-valueprop" className="bg-secondary/20">
      <motion.div className="mb-4 sm:mb-6 md:mb-8" variants={itemVariants}>
        <span className="tesla-label">{t('slideValueProp.label') as string}</span>
        <h2 className="slide-title mt-2">
          {t('slideValueProp.title') as string}
        </h2>
      </motion.div>
      
      <motion.div 
        className="slide-grid-2 items-stretch gap-4 sm:gap-6 mb-6 sm:mb-8"
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* SaaS Stack */}
        <motion.div 
          className="tesla-card p-4 sm:p-6 border-t-2 border-muted-foreground/30"
          variants={cardVariants}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="tesla-icon-container w-10 h-10 bg-muted sm:w-12 sm:h-12">
              <Layers className="w-5 h-5 text-muted-foreground sm:w-6 sm:h-6" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-medium text-sm sm:text-base">{t('slideValueProp.saasTitle') as string}</h3>
              <p className="text-lg font-bold text-muted-foreground sm:text-xl">{t('slideValueProp.saasPrice') as string}</p>
            </div>
          </div>
          <ul className="space-y-2">
            {(t('slideValueProp.saasPoints') as string[]).map((point, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
                <X className="w-4 h-4 text-destructive/70 flex-shrink-0" strokeWidth={2} />
                {point}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Ennable */}
        <motion.div 
          className="tesla-card p-4 sm:p-6 border-t-2 border-accent ring-1 ring-accent/20"
          variants={cardVariants}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="tesla-icon-container w-10 h-10 bg-accent/10 sm:w-12 sm:h-12">
              <Blocks className="w-5 h-5 text-accent sm:w-6 sm:h-6" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-medium text-sm sm:text-base">{t('slideValueProp.ennableTitle') as string}</h3>
              <p className="text-lg font-bold text-accent sm:text-xl">{t('slideValueProp.ennablePrice') as string}</p>
            </div>
          </div>
          <ul className="space-y-2">
            {(t('slideValueProp.ennablePoints') as string[]).map((point, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" strokeWidth={2} />
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* Benefits */}
      <motion.div 
        className="grid grid-cols-3 gap-3 sm:gap-4 max-w-lg mx-auto"
        variants={gridContainerVariants}
      >
        {benefits.map((benefit, idx) => (
          <motion.div 
            key={idx}
            className="tesla-dark-card p-3 text-center"
            variants={cardVariants}
          >
            <benefit.icon className="w-5 h-5 mx-auto text-accent mb-1" strokeWidth={1.5} />
            <p className="text-xs font-medium text-foreground">{t(`slideValueProp.benefits.${benefit.key}.title`) as string}</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">{t(`slideValueProp.benefits.${benefit.key}.subtitle`) as string}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Quote */}
      <motion.div 
        className="mt-6 text-center"
        variants={itemVariants}
      >
        <p className="text-sm text-muted-foreground font-medium sm:text-base">
          "{t('slideValueProp.quote') as string}"
        </p>
      </motion.div>
    </SlideSection>
  );
};
