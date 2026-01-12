import { SlideSection } from "../SlideSection";
import { Wine, Gift, MessageSquare, Sparkles, Clock, Globe, Users, TrendingUp, CreditCard, Utensils } from "lucide-react";
import { AppCardCarousel, type AppCardItem } from "@/components/ui/app-card-carousel";
import { motion } from "framer-motion";
import { itemVariants, cardVariants, gridContainerVariants } from "../motion-variants";
import { useLanguage } from "@/contexts/LanguageContext";

const appIcons = [Wine, Gift, MessageSquare, Sparkles, Clock, Globe, Users, TrendingUp, CreditCard, Utensils];
const appKeys = ['aiSommelier', 'loyaltyRewards', 'smsReengagement', 'sakePairing', 'shiftScheduler', 'multiLanguage', 'tableManagement', 'analyticsDashboard', 'splitPayments', 'menuBuilder'] as const;
const tagVariants: ('cyan' | 'amber' | 'green' | 'blue' | 'purple')[] = ['cyan', 'amber', 'green', 'cyan', 'blue', 'purple', 'amber', 'green', 'purple', 'blue'];

export const Slide07Ecosystem = () => {
  const { t } = useLanguage();
  
  const apps: AppCardItem[] = appKeys.map((key, idx) => {
    const appData = t(`slide07.apps.${key}`) as unknown as { name: string; description: string; tag: string };
    return {
      id: idx + 1,
      icon: appIcons[idx],
      name: appData.name,
      description: appData.description,
      tag: appData.tag,
      tagVariant: tagVariants[idx]
    };
  });

  const badges = t('slide07.badges') as unknown as { moreApps: string; buildOwn: string; buildFromExisting: string };

  return (
    <SlideSection id="slide-7">
      <motion.div className="mb-3 sm:mb-4 md:mb-6" variants={itemVariants}>
        <span className="tesla-label">{t('slide07.label') as string}</span>
        <h2 className="slide-title mt-2">
          {t('slide07.title') as string}
        </h2>
        <p className="slide-subtitle mt-2 max-w-3xl font-light">{t('slide07.subtitle') as string}</p>
      </motion.div>
      
      {/* App Store mockup - simplified chrome */}
      <motion.div className="tesla-card overflow-hidden" variants={cardVariants}>
        <div className="p-1.5 border-b border-border/30 flex items-center gap-1.5 bg-muted/20 sm:p-2 md:p-2.5">
          <div className="flex gap-1 sm:gap-1.5">
            <div className="w-2 h-2 rounded-full bg-foreground/20 sm:w-2.5 sm:h-2.5" />
            <div className="w-2 h-2 rounded-full bg-foreground/20 sm:w-2.5 sm:h-2.5" />
            <div className="w-2 h-2 rounded-full bg-foreground/20 sm:w-2.5 sm:h-2.5" />
          </div>
          <span className="ml-3 text-[10px] text-muted-foreground font-medium sm:ml-4 sm:text-xs">{t('slide07.appStore') as string}</span>
        </div>
        
        <div className="p-2 sm:p-3 md:p-5">
          {/* Animated App Carousel */}
          <AppCardCarousel apps={apps} speed={30} className="mb-3 sm:mb-4" />
          
          <motion.div className="flex flex-wrap gap-2 justify-center" variants={gridContainerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.2
        }}>
            <motion.span className="tesla-badge-outline text-muted-foreground border-border" variants={itemVariants}>
              {badges.moreApps}
            </motion.span>
            <motion.span className="tesla-badge-filled" variants={itemVariants}>
              {badges.buildOwn}
            </motion.span>
            <motion.span className="tesla-badge-filled" variants={itemVariants}>
              {badges.buildFromExisting}
            </motion.span>
          </motion.div>
        </div>
      </motion.div>
    </SlideSection>
  );
};
