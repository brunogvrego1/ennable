import { SlideSection } from "../SlideSection";
import { motion } from "framer-motion";
import { itemVariants, cardVariants, gridContainerVariants } from "../motion-variants";
import { LogoRolodex } from "@/components/ui/logo-rolodex";
import { useLanguage } from "@/contexts/LanguageContext";

// Import logos
import salesforce from "@/assets/logos/salesforce.png";
import sap from "@/assets/logos/sap.png";
import oracleErp from "@/assets/logos/oracle-erp.png";
import oracleHospitality from "@/assets/logos/oracle-hospitality.png";
import cloudbeds from "@/assets/logos/cloudbeds.png";
import totvs from "@/assets/logos/totvs.png";
import trello from "@/assets/logos/trello.png";
import mailchimp from "@/assets/logos/mailchimp.png";
import opentable from "@/assets/logos/opentable.png";

const logoSets = [
  [salesforce, sap, oracleErp],
  [oracleHospitality, cloudbeds, totvs],
  [trello, mailchimp, opentable]
];

export const Slide03MarketFailure = () => {
  const { t } = useLanguage();
  const options = t('slide03.options') as { title: string; issue: string; description: string }[];

  return (
    <SlideSection id="slide-3">
      <motion.div className="mb-4 sm:mb-6 md:mb-8" variants={itemVariants}>
        <span className="tesla-label">{t('slide03.label') as string}</span>
        <h2 className="slide-title mt-2">
          {t('slide03.title') as string}
        </h2>
        <p className="slide-subtitle mt-2 max-w-3xl font-light">
          {t('slide03.subtitle') as string}
        </p>
      </motion.div>
      
      <motion.div 
        className="slide-grid-3"
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {options.map((option, index) => (
          <motion.div 
            key={index} 
            className="tesla-card p-3 sm:p-4 md:p-5"
            variants={cardVariants}
          >
            <div className="mb-2 sm:mb-3 flex justify-start" style={{ perspective: "1000px" }}>
              <LogoRolodex logos={logoSets[index]} />
            </div>
            <h3 className="text-sm font-medium mb-1 sm:text-base md:mb-1.5">{option.title}</h3>
            <span className="tesla-badge-outline text-accent border-accent/20 mb-2 md:mb-3">
              {option.issue}
            </span>
            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 font-light sm:text-sm">
              {option.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SlideSection>
  );
};
