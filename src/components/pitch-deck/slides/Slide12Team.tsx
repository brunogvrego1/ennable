import { SlideSection } from "../SlideSection";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { itemVariants, cardVariants, gridContainerVariants } from "../motion-variants";

const team = [
  { 
    role: "CEO", 
    name: "2x Founder", 
    description: "Built and exited hospitality tech startup. 15 years in F&B.",
  },
  { 
    role: "CTO", 
    name: "Ex-Salesforce", 
    description: "Led platform engineering. ML/AI expertise.",
  },
  { 
    role: "VP Product", 
    name: "Ex-Toast", 
    description: "Scaled product from 100 to 10,000+ customers.",
  },
];


export const Slide12Team = () => {
  return (
    <SlideSection id="slide-12">
      <motion.div className="mb-4 sm:mb-5 md:mb-6" variants={itemVariants}>
        <span className="tesla-label">The Ask</span>
        <h2 className="slide-title mt-2">
          Team & Use of Funds
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
            Leadership
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
            150+ years combined experience in hospitality and SaaS
          </motion.p>
        </div>
        
      </motion.div>
      
      {/* CTA */}
      <motion.div className="mt-4 text-center sm:mt-5 md:mt-6" variants={itemVariants}>
        <p className="text-sm text-muted-foreground font-light mb-2 sm:mb-3 md:text-base">
          Ready to join the future of hospitality operations?
        </p>
        <a 
          href="mailto:invest@fluid.io"
          className="tesla-button-dark gap-2"
        >
          Let's Talk
          <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
        </a>
      </motion.div>
    </SlideSection>
  );
};
