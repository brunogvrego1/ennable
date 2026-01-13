import { SlideSection } from "../SlideSection";
import { Search, Check, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { itemVariants, cardVariants, gridContainerVariants } from "../motion-variants";
import { useLanguage } from "@/contexts/LanguageContext";

export const SlideSolutionMarketplace = () => {
  const { t } = useLanguage();

  const apps = t('slideSolutionMarketplace.apps') as Array<{
    name: string;
    installed?: boolean;
  }>;

  return (
    <SlideSection id="slide-marketplace">
      <motion.div className="mb-4 sm:mb-6 md:mb-8" variants={itemVariants}>
        <span className="tesla-label">{t('slideSolutionMarketplace.label') as string}</span>
        <h2 className="slide-title mt-2">
          {t('slideSolutionMarketplace.title') as string}
        </h2>
      </motion.div>
      
      <motion.div 
        className="slide-grid-2 items-center gap-6"
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Description */}
        <motion.div className="space-y-4" variants={itemVariants}>
          <p className="text-sm text-muted-foreground leading-relaxed font-light sm:text-base lg:text-lg">
            {t('slideSolutionMarketplace.description') as string}
          </p>
          <div className="tesla-dark-card p-4">
            <p className="text-base font-medium text-foreground sm:text-lg">
              "{t('slideSolutionMarketplace.quote') as string}"
            </p>
          </div>
        </motion.div>

        {/* Mock Marketplace Interface */}
        <motion.div 
          className="tesla-card p-0 overflow-hidden"
          variants={cardVariants}
        >
          {/* Search bar */}
          <div className="p-3 border-b border-border">
            <div className="flex items-center gap-2 tesla-card p-2 bg-muted/30">
              <Search className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
              <span className="text-sm text-muted-foreground">{t('slideSolutionMarketplace.searchPlaceholder') as string}</span>
            </div>
          </div>

          {/* App list */}
          <div className="divide-y divide-border">
            {apps.map((app, idx) => (
              <div 
                key={idx} 
                className={`p-3 flex items-center justify-between ${app.installed ? 'bg-accent/5' : 'hover:bg-muted/20'}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${app.installed ? 'bg-accent/20' : 'bg-muted'}`}>
                    <span className="text-xs font-medium">{app.name.charAt(0)}</span>
                  </div>
                  <span className="text-sm font-medium">{app.name}</span>
                </div>
                {app.installed ? (
                  <div className="flex items-center gap-1.5 text-accent">
                    <Check className="w-4 h-4" strokeWidth={2} />
                    <span className="text-xs font-medium">{t('slideSolutionMarketplace.installed') as string}</span>
                  </div>
                ) : (
                  <ChevronRight className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SlideSection>
  );
};
