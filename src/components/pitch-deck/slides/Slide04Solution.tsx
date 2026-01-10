import { SlideSection } from "../SlideSection";
import { Brain, ShoppingCart, Users, Package, Wallet, BarChart3, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { itemVariants, cardVariants, scaleInVariants, gridContainerVariants } from "../motion-variants";

const modules = [
  { icon: ShoppingCart, label: "POS" },
  { icon: Users, label: "CRM" },
  { icon: Package, label: "Inventory" },
  { icon: Wallet, label: "Finance" },
  { icon: BarChart3, label: "Analytics" }
];

const features = [
  "Start with the essentials",
  "Expand through visual configuration",
  "No code required"
];

export const Slide04Solution = () => {
  return (
    <SlideSection id="slide-4">
      <motion.div className="mb-4 sm:mb-6 md:mb-8" variants={itemVariants}>
        <span className="tesla-label">The Solution</span>
        <h2 className="slide-title mt-2">
          Reimagine ERP from<br />First Principles
        </h2>
      </motion.div>
      
      <motion.div 
        className="slide-grid-2 items-center"
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          <motion.div className="tesla-card p-3 sm:p-4 md:p-5" variants={cardVariants}>
            <h3 className="font-medium text-sm mb-2 sm:text-base sm:mb-3">Modular Architecture</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {features.map((feature, idx) => (
                <li key={idx} className="tesla-check-item">
                  <CheckCircle2 className="tesla-check-icon" strokeWidth={1.5} />
                  <span className="text-xs text-muted-foreground font-light sm:text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div className="tesla-dark-card p-3 sm:p-4 md:p-5" variants={cardVariants}>
            <h3 className="font-medium text-sm mb-1 flex items-center gap-2 sm:text-base">
              The Intent-Engine
              <Brain className="w-4 h-4 text-accent sm:w-5 sm:h-5" strokeWidth={1.5} />
            </h3>
            <p className="text-xs text-foreground/70 font-light sm:text-sm">
              The system <span className="text-foreground font-normal">understands</span> your 
              specific business goals and suggests mini-apps accordingly.
            </p>
          </motion.div>
        </div>
        
        {/* Mobile: Linear module list */}
        <motion.div 
          className="flex flex-wrap gap-2 justify-center sm:hidden"
          variants={scaleInVariants}
        >
          <div className="tesla-card w-14 h-14 flex flex-col items-center justify-center bg-gradient-to-br from-accent to-accent/80">
            <Brain className="w-6 h-6 text-white" strokeWidth={1.5} />
          </div>
          {modules.map((module, index) => (
            <div 
              key={index} 
              className="tesla-card w-12 h-12 flex flex-col items-center justify-center"
            >
              <module.icon className="w-4 h-4 text-accent mb-0.5" strokeWidth={1.5} />
              <span className="text-[7px] font-medium text-muted-foreground">{module.label}</span>
            </div>
          ))}
        </motion.div>
        
        {/* Desktop: The Fluid Core orbit - cleaner lines */}
        <motion.div 
          className="relative hidden sm:flex items-center justify-center h-48 md:h-64"
          variants={scaleInVariants}
        >
          <div className="relative">
            {/* Central hub - reduced gradient intensity */}
            <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center md:w-28 md:h-28">
              <Brain className="w-8 h-8 text-white md:w-10 md:h-10" strokeWidth={1.5} />
            </div>
            
            {/* Thin connecting ring */}
            <div className="absolute inset-0 w-20 h-20 md:w-28 md:h-28 -m-[30px] md:-m-[40px] border border-accent/20 rounded-full" style={{ width: 'calc(100% + 60px)', height: 'calc(100% + 60px)', margin: '-30px' }} />
            
            {/* Surrounding modules */}
            {modules.map((module, index) => {
              const angle = (index * 72 - 90) * (Math.PI / 180);
              const radius = 75;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div 
                  key={index} 
                  className="absolute tesla-card w-11 h-11 flex flex-col items-center justify-center md:w-13 md:h-13"
                  style={{
                    left: `calc(50% + ${x}px - 22px)`,
                    top: `calc(50% + ${y}px - 22px)`
                  }}
                >
                  <module.icon className="w-4 h-4 text-accent mb-0.5" strokeWidth={1.5} />
                  <span className="text-[8px] font-medium text-muted-foreground">{module.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </SlideSection>
  );
};
