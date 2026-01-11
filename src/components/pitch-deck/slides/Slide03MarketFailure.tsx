import { SlideSection } from "../SlideSection";
import { motion } from "framer-motion";
import { itemVariants, cardVariants, gridContainerVariants } from "../motion-variants";
import { LogoRolodex } from "@/components/ui/logo-rolodex";

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

const options = [
  {
    logos: [salesforce, sap, oracleErp],
    title: "Enterprise Systems",
    issue: "Bloated",
    description: "Massive feature sets you'll never use. 18-month implementations. $500K+ annual costs."
  },
  {
    logos: [oracleHospitality, cloudbeds, totvs],
    title: "Hospitality-Specific",
    issue: "Rigid",
    description: "Built for one use case. Can't adapt as your business model evolves."
  },
  {
    logos: [trello, mailchimp, opentable],
    title: "Point Solutions",
    issue: "Siloed",
    description: "10+ apps that don't talk to each other. Data chaos and manual reconciliation."
  }
];

export const Slide03MarketFailure = () => {
  return (
    <SlideSection id="slide-3">
      <motion.div className="mb-4 sm:mb-6 md:mb-8" variants={itemVariants}>
        <span className="tesla-label">Market Failure</span>
        <h2 className="slide-title mt-2">
          Three Bad Options
        </h2>
        <p className="slide-subtitle mt-2 max-w-3xl font-light">
          All three are built on rigid logic that can't adapt without expensive rewrites.
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
            <div className="mb-3 sm:mb-4 flex justify-center" style={{ perspective: "1000px" }}>
              <LogoRolodex logos={option.logos} />
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
