import { SlideSection } from "../SlideSection";
import { motion } from "framer-motion";
import { itemVariants, cardVariants, gridContainerVariants } from "../motion-variants";
import { useLanguage } from "@/contexts/LanguageContext";

export const Slide06Speed = () => {
  const { t } = useLanguage();
  const timeline = t('slide06.timeline') as { day: string; label: string; description: string }[];

  return (
    <SlideSection id="slide-6">
      <motion.div className="mb-4 sm:mb-5 md:mb-6" variants={itemVariants}>
        <span className="tesla-label">{t('slide06.label') as string}</span>
        <h2 className="slide-title mt-2 whitespace-pre-line">
          {t('slide06.title') as string}
        </h2>
      </motion.div>
      
      {/* Timeline */}
      <motion.div
        className="space-y-2 sm:space-y-3 max-w-md"
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {timeline.map((step, index) => (
          <motion.div key={index} className="flex gap-2 sm:gap-3" variants={cardVariants}>
            <div className="flex flex-col items-center">
              <div className="tesla-icon-container w-8 h-8 text-accent font-medium text-xs sm:w-9 sm:h-9 sm:text-sm">
                {index + 1}
              </div>
              {index < timeline.length - 1 && (
                <div className="w-px h-full bg-border/60 mt-1" />
              )}
            </div>
            <div className="pb-2 sm:pb-3">
              <p className="text-[10px] tesla-label">{step.day}</p>
              <h3 className="text-sm font-medium mt-0.5 sm:text-base">{step.label}</h3>
              <p className="text-xs text-muted-foreground font-light mt-0.5 sm:text-sm">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SlideSection>
  );
};
