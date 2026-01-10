import { SlideSection } from "../SlideSection";
import { Users, AppWindow, Database, RefreshCw, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { itemVariants, cardVariants, scaleInVariants } from "../motion-variants";

const flywheel = [
  { icon: Users, label: "More Users" },
  { icon: AppWindow, label: "More Mini-Apps" },
  { icon: Database, label: "Richer Data" },
];

const moatPoints = [
  "Deep understanding enables Credit Services and insurance offerings",
  "Network effects from community-built app store"
];

export const Slide08Moat = () => {
  return (
    <SlideSection id="slide-8">
      <motion.div className="mb-4 sm:mb-5 md:mb-6" variants={itemVariants}>
        <span className="tesla-label">The Moat</span>
        <h2 className="slide-title mt-2">
          Defensibility &<br />Network Effects
        </h2>
      </motion.div>
      
      <div className="slide-grid-2 items-center">
        <div className="space-y-2 sm:space-y-3">
          <motion.div className="tesla-dark-card p-3 sm:p-4 md:p-5" variants={cardVariants}>
            <h3 className="font-medium text-sm mb-2 text-foreground sm:text-base sm:mb-3">Two-Fold Moat</h3>
            <ul className="space-y-2 sm:space-y-2.5">
              {moatPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-xs text-foreground/70 font-light sm:text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.p 
            className="text-xs text-muted-foreground font-light italic tesla-card p-2.5 sm:p-3 sm:text-sm"
            variants={itemVariants}
          >
            Once mini apps support ultra-specific needs, switching costs become insurmountable.
          </motion.p>
        </div>
        
        {/* Mobile: Linear flywheel */}
        <motion.div 
          className="flex items-center justify-center gap-1 py-2 sm:hidden"
          variants={scaleInVariants}
        >
          {flywheel.map((item, index) => (
            <div key={index} className="flex items-center gap-1">
              <div className="tesla-card w-14 h-14 flex flex-col items-center justify-center">
                <item.icon className="w-4 h-4 text-accent mb-1" strokeWidth={1.5} />
                <span className="text-[8px] font-medium text-center leading-tight">{item.label}</span>
              </div>
              {index < flywheel.length - 1 && (
                <ArrowRight className="w-3 h-3 text-accent/40" strokeWidth={1.5} />
              )}
            </div>
          ))}
        </motion.div>
        
        {/* Desktop: Flywheel diagram - thinner lines */}
        <motion.div 
          className="relative hidden sm:flex items-center justify-center py-4 md:py-6"
          variants={scaleInVariants}
        >
          <div className="relative w-44 h-44 md:w-56 md:h-56">
            {/* Central refresh icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <RefreshCw className="w-6 h-6 text-accent/20 md:w-8 md:h-8" strokeWidth={1.5} />
            </div>
            
            {/* Flywheel nodes */}
            {flywheel.map((item, index) => {
              const angle = (index * 120 - 90) * (Math.PI / 180);
              const radius = 65;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div
                  key={index}
                  className="absolute flex flex-col items-center"
                  style={{
                    left: `calc(50% + ${x}px - 28px)`,
                    top: `calc(50% + ${y}px - 28px)`,
                  }}
                >
                  <div className="tesla-card w-14 h-14 flex flex-col items-center justify-center md:w-16 md:h-16">
                    <item.icon className="w-4 h-4 text-accent mb-1" strokeWidth={1.5} />
                    <span className="text-[9px] font-medium text-center md:text-[10px]">{item.label}</span>
                  </div>
                </div>
              );
            })}
            
            {/* Connecting arrows - thinner strokes */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 176 176">
              <defs>
                <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                  <polygon points="0 0, 8 3, 0 6" fill="hsl(var(--accent))" opacity="0.3" />
                </marker>
              </defs>
              <path
                d="M 88 24 A 64 64 0 0 1 144 120"
                fill="none"
                stroke="hsl(var(--accent))"
                strokeWidth="1"
                strokeOpacity="0.2"
                markerEnd="url(#arrowhead)"
              />
              <path
                d="M 144 120 A 64 64 0 0 1 32 120"
                fill="none"
                stroke="hsl(var(--accent))"
                strokeWidth="1"
                strokeOpacity="0.2"
                markerEnd="url(#arrowhead)"
              />
              <path
                d="M 32 120 A 64 64 0 0 1 88 24"
                fill="none"
                stroke="hsl(var(--accent))"
                strokeWidth="1"
                strokeOpacity="0.2"
                markerEnd="url(#arrowhead)"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </SlideSection>
  );
};
