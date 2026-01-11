import { SlideSection } from "../SlideSection";
import { Zap, BarChart3, Monitor, Globe, Database, Cpu, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { itemVariants, cardVariants, gridContainerVariants } from "../motion-variants";
import { useLanguage } from "@/contexts/LanguageContext";

const pillarIcons = [Zap, BarChart3, Monitor, Globe];
const technicalIcons = [Database, Cpu, Shield];

export const Slide14ArchitecturePillars = () => {
  const { t } = useLanguage();
  const pillarsData = t('slide14.pillars') as { type: string; tagline: string; description: string }[];
  const technicalPointsData = t('slide14.technicalPoints') as { title: string; description: string }[];
  
  const pillars = pillarsData.map((pillar, idx) => ({
    ...pillar,
    icon: pillarIcons[idx]
  }));
  
  const technicalPoints = technicalPointsData.map((point, idx) => ({
    ...point,
    icon: technicalIcons[idx]
  }));

  return (
    <SlideSection id="architecture-pillars">
      <motion.div className="mb-3 sm:mb-4 md:mb-6" variants={itemVariants}>
        <span className="tesla-label">{t('slide14.label') as string}</span>
        <h2 className="slide-title mt-2">
          {t('slide14.title') as string}
        </h2>
        <p className="slide-subtitle mt-2 font-light">
          {t('slide14.subtitle') as string}
        </p>
      </motion.div>

      {/* Pillars Grid */}
      <motion.div className="grid grid-cols-2 gap-2 mb-3 sm:gap-2.5 md:grid-cols-4 md:gap-3 md:mb-5" variants={gridContainerVariants} initial="hidden" whileInView="visible" viewport={{
      once: true,
      amount: 0.2
    }}>
        {pillars.map(pillar => <motion.div key={pillar.type} className="tesla-card p-2.5 sm:p-3 md:p-4" variants={cardVariants}>
            <div className="flex items-center gap-1.5 mb-1.5 sm:gap-2 sm:mb-2">
              <div className="tesla-icon-container w-8 h-8 flex-shrink-0 sm:w-9 sm:h-9 md:w-10 md:h-10">
                <pillar.icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-medium text-xs text-foreground sm:text-sm">{pillar.type}</h3>
                <p className="text-[9px] text-accent hidden sm:block">{pillar.tagline}</p>
              </div>
            </div>
            
            <p className="text-[10px] text-muted-foreground leading-relaxed line-clamp-2 font-light sm:text-xs">
              {pillar.description}
            </p>
          </motion.div>)}
      </motion.div>

      {/* Technical Breakdown */}
      <motion.div className="tesla-dark-card p-2.5 sm:p-3 md:p-4" variants={cardVariants}>
        <h3 className="font-medium text-sm mb-2 text-foreground sm:text-base sm:mb-3">{t('slide14.technicalTitle') as string}</h3>
        <div className="grid gap-2 sm:grid-cols-3 sm:gap-3">
          {technicalPoints.map(point => <div key={point.title} className="flex items-start gap-2">
              <div className="tesla-icon-container w-7 h-7 flex-shrink-0 sm:w-8 sm:h-8">
                <point.icon className="w-3.5 h-3.5 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-medium text-xs text-foreground sm:text-sm">{point.title}</h4>
                <p className="text-[10px] text-foreground/60 leading-relaxed hidden font-light sm:block sm:text-xs">
                  {point.description}
                </p>
              </div>
            </div>)}
        </div>
      </motion.div>
    </SlideSection>
  );
};
