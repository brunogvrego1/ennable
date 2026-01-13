import { SlideSection } from "../SlideSection";
import { Wine, Sparkles, MessageSquare, User } from "lucide-react";
import { motion } from "framer-motion";
import { itemVariants, cardVariants, gridContainerVariants } from "../motion-variants";
import { useLanguage } from "@/contexts/LanguageContext";

export const SlidePowerMove = () => {
  const { t } = useLanguage();

  return (
    <SlideSection id="slide-powermove">
      <motion.div className="mb-4 sm:mb-6 md:mb-8" variants={itemVariants}>
        <span className="tesla-label">{t('slidePowerMove.label') as string}</span>
        <h2 className="slide-title mt-2">
          {t('slidePowerMove.title') as string}
        </h2>
      </motion.div>
      
      <motion.div 
        className="slide-grid-2 items-center gap-6"
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Mock Order Interface */}
        <motion.div 
          className="tesla-card p-0 overflow-hidden"
          variants={cardVariants}
        >
          {/* Header */}
          <div className="bg-muted/50 px-4 py-2 border-b border-border flex items-center justify-between">
            <span className="text-sm font-medium">{t('slidePowerMove.orderNumber') as string}</span>
            <span className="text-xs text-muted-foreground">{t('slidePowerMove.table') as string}</span>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-5 space-y-4">
            {/* Order item */}
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <span className="text-sm">{t('slidePowerMove.dish') as string}</span>
              <span className="text-sm text-muted-foreground">{t('slidePowerMove.dishPrice') as string}</span>
            </div>

            {/* AI Suggestion */}
            <motion.div 
              className="tesla-card p-3 bg-accent/5 border-accent/30"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Wine className="w-4 h-4 text-accent" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-accent">{t('slidePowerMove.aiSuggestionLabel') as string}</span>
                    <Sparkles className="w-3 h-3 text-accent" />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {t('slidePowerMove.aiSuggestion') as string}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Description + Manager Callout */}
        <motion.div className="space-y-4" variants={itemVariants}>
          <p className="text-sm text-muted-foreground leading-relaxed font-light sm:text-base lg:text-lg">
            {t('slidePowerMove.description') as string}
          </p>

          {/* Manager creating app */}
          <div className="tesla-dark-card p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground mb-1">{t('slidePowerMove.managerTitle') as string}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MessageSquare className="w-3 h-3" />
                  <span className="italic">"{t('slidePowerMove.managerPrompt') as string}"</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-base font-medium text-foreground sm:text-lg">
            "{t('slidePowerMove.quote') as string}"
          </p>
        </motion.div>
      </motion.div>
    </SlideSection>
  );
};
