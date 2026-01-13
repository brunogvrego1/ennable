import { SlideSection } from "../SlideSection";
import { MessageSquare, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { itemVariants, cardVariants, gridContainerVariants } from "../motion-variants";
import { useLanguage } from "@/contexts/LanguageContext";

export const SlideSolutionCustom = () => {
  const { t } = useLanguage();

  const buttons = t('slideSolutionCustom.buttons') as string[];

  return (
    <SlideSection id="slide-custom" className="bg-secondary/20">
      <motion.div className="mb-4 sm:mb-6 md:mb-8" variants={itemVariants}>
        <span className="tesla-label">{t('slideSolutionCustom.label') as string}</span>
        <h2 className="slide-title mt-2">
          {t('slideSolutionCustom.title') as string}
        </h2>
      </motion.div>
      
      <motion.div 
        className="slide-grid-2 items-center gap-6"
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Mock POS Interface */}
        <motion.div 
          className="tesla-card p-0 overflow-hidden"
          variants={cardVariants}
        >
          {/* Header */}
          <div className="bg-accent/10 px-4 py-2 border-b border-accent/20">
            <span className="text-sm font-medium text-accent">{t('slideSolutionCustom.appName') as string}</span>
          </div>

          {/* Buttons Grid */}
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {buttons.map((btn, idx) => (
                <motion.button
                  key={idx}
                  className={`p-3 sm:p-4 rounded-lg text-sm font-medium transition-all ${
                    idx === 0 
                      ? 'bg-gradient-to-br from-amber-400/80 to-amber-500/80 text-amber-950 ring-2 ring-amber-400/50' 
                      : 'bg-muted/50 text-muted-foreground hover:bg-muted'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {btn}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Chat Input */}
          <div className="border-t border-border p-3">
            <div className="flex items-center gap-2 tesla-card p-2.5 bg-muted/30">
              <MessageSquare className="w-4 h-4 text-accent" strokeWidth={1.5} />
              <span className="text-xs text-muted-foreground italic flex-1">
                "{t('slideSolutionCustom.prompt') as string}"
              </span>
              <Sparkles className="w-4 h-4 text-accent animate-pulse" strokeWidth={1.5} />
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div className="space-y-4" variants={itemVariants}>
          <p className="text-sm text-muted-foreground leading-relaxed font-light sm:text-base lg:text-lg">
            {t('slideSolutionCustom.description') as string}
          </p>
          <div className="tesla-dark-card p-4">
            <p className="text-base font-medium text-foreground sm:text-lg">
              "{t('slideSolutionCustom.quote') as string}"
            </p>
          </div>
        </motion.div>
      </motion.div>
    </SlideSection>
  );
};
