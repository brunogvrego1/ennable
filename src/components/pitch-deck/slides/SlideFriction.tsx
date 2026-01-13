import { SlideSection } from "../SlideSection";
import { X, Minus } from "lucide-react";
import { motion } from "framer-motion";
import { itemVariants, cardVariants } from "../motion-variants";
import { useLanguage } from "@/contexts/LanguageContext";

export const SlideFriction = () => {
  const { t } = useLanguage();

  return (
    <SlideSection id="slide-friction" className="bg-secondary/20">
      <motion.div className="mb-4 sm:mb-6 md:mb-8" variants={itemVariants}>
        <span className="tesla-label">{t('slideFriction.label') as string}</span>
        <h2 className="slide-title mt-2">
          {t('slideFriction.title') as string}
        </h2>
      </motion.div>
      
      {/* Mock POS Interface */}
      <motion.div 
        className="tesla-card p-0 overflow-hidden max-w-2xl mx-auto"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <div className="bg-muted/50 px-4 py-2 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-destructive/60" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <span className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <span className="text-xs text-muted-foreground ml-2 font-mono">{t('slideFriction.appName') as string}</span>
          </div>
          <Minus className="w-4 h-4 text-muted-foreground" />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-4">
          {/* Form fields */}
          <div className="grid gap-3">
            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground font-medium">{t('slideFriction.field1Label') as string}</label>
              <div className="tesla-card p-2.5 text-sm bg-muted/30">{t('slideFriction.field1Value') as string}</div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground font-medium">{t('slideFriction.field2Label') as string}</label>
              <div className="tesla-card p-2.5 text-sm bg-muted/30">{t('slideFriction.field2Value') as string}</div>
            </div>
          </div>

          {/* Error field */}
          <div className="space-y-1.5">
            <label className="text-xs text-muted-foreground font-medium">{t('slideFriction.field3Label') as string}</label>
            <div className="tesla-card p-2.5 text-sm bg-muted/30 border-destructive/50 flex items-center justify-between">
              <span className="text-muted-foreground">{t('slideFriction.field3Value') as string}</span>
              <div className="flex items-center gap-1.5 text-destructive">
                <X className="w-4 h-4" strokeWidth={2} />
                <span className="text-xs font-medium">{t('slideFriction.errorMessage') as string}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quote */}
      <motion.div 
        className="mt-6 sm:mt-8 text-center"
        variants={itemVariants}
      >
        <p className="text-sm text-muted-foreground italic sm:text-base">
          "{t('slideFriction.quote') as string}"
        </p>
      </motion.div>
    </SlideSection>
  );
};
