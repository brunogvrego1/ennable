import { SlideSection } from "../SlideSection";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { itemVariants, cardVariants, gridContainerVariants } from "../motion-variants";
import { useLanguage } from "@/contexts/LanguageContext";

export const Slide12Team = () => {
  const { t } = useLanguage();
  const team = t('slide12.team') as { role: string; name: string; description: string }[];

  return (
    <SlideSection id="slide-12">
      <motion.div className="mb-4 sm:mb-5 md:mb-6" variants={itemVariants}>
        <span className="tesla-label">{t('slide12.label') as string}</span>
        <h2 className="slide-title mt-2">
          {t('slide12.title') as string}
        </h2>
      </motion.div>
      
      <motion.div 
        className="slide-grid-2"
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Team - simpler cards without icons */}
        <div>
          <motion.h3 className="text-sm font-medium mb-2 sm:mb-3 sm:text-base" variants={itemVariants}>
            {t('slide12.leadershipTitle') as string}
          </motion.h3>
          <motion.div 
            className="space-y-2 sm:space-y-2.5"
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className="tesla-card p-2.5 sm:p-3 md:p-4"
                variants={cardVariants}
              >
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="font-medium text-sm sm:text-base">{member.role}</span>
                  <span className="text-xs text-muted-foreground font-light">• {member.name}</span>
                </div>
                <p className="text-xs text-muted-foreground font-light line-clamp-1">{member.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.p 
            className="text-[10px] text-muted-foreground mt-2 font-light hidden sm:block sm:text-xs"
            variants={itemVariants}
          >
            {t('slide12.experience') as string}
          </motion.p>
        </div>
        
      </motion.div>
      
      {/* CTA */}
      <motion.div className="mt-4 text-center sm:mt-5 md:mt-6" variants={itemVariants}>
        <p className="text-sm text-muted-foreground font-light mb-2 sm:mb-3 md:text-base">
          {t('slide12.cta') as string}
        </p>
        <a 
          href="mailto:invest@fluid.io"
          className="tesla-button-dark gap-2"
        >
          {t('slide12.ctaButton') as string}
          <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
        </a>
      </motion.div>
    </SlideSection>
  );
};
