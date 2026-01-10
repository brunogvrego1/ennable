import { SlideSection } from "../SlideSection";
import { Users, AppWindow, Database, RefreshCw, CheckCircle2, ArrowRight } from "lucide-react";

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
      <div className="mb-4 sm:mb-5 md:mb-6">
        <span className="tesla-label">The Moat</span>
        <h2 className="slide-title mt-2">
          Defensibility &<br />Network Effects
        </h2>
      </div>
      
      <div className="slide-grid-2 items-center">
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          <div className="tesla-dark-card p-3 sm:p-4 md:p-5">
            <h3 className="font-semibold text-sm mb-2 text-white sm:text-base sm:mb-3">Two-Fold Moat</h3>
            <ul className="space-y-2 sm:space-y-3">
              {moatPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5 sm:w-5 sm:h-5" />
                  <span className="text-xs text-white/80 sm:text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <p className="text-xs text-muted-foreground italic tesla-card p-2 sm:p-3 sm:text-sm">
            Once mini apps support ultra-specific needs, switching costs become insurmountable.
          </p>
        </div>
        
        {/* Mobile: Linear flywheel */}
        <div className="flex items-center justify-center gap-1 py-2 sm:hidden">
          {flywheel.map((item, index) => (
            <div key={index} className="flex items-center gap-1">
              <div className="tesla-card w-16 h-16 flex flex-col items-center justify-center">
                <item.icon className="w-5 h-5 text-accent mb-1" />
                <span className="text-[9px] font-medium text-center leading-tight">{item.label}</span>
              </div>
              {index < flywheel.length - 1 && (
                <ArrowRight className="w-4 h-4 text-accent/50" />
              )}
            </div>
          ))}
        </div>
        
        {/* Desktop: Flywheel diagram */}
        <div className="relative hidden sm:flex items-center justify-center py-4 md:py-8">
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            {/* Central refresh icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <RefreshCw className="w-8 h-8 text-accent/30 md:w-12 md:h-12" />
            </div>
            
            {/* Flywheel nodes */}
            {flywheel.map((item, index) => {
              const angle = (index * 120 - 90) * (Math.PI / 180);
              const radius = 70;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div
                  key={index}
                  className="absolute flex flex-col items-center"
                  style={{
                    left: `calc(50% + ${x}px - 32px)`,
                    top: `calc(50% + ${y}px - 32px)`,
                  }}
                >
                  <div className="tesla-card w-16 h-16 flex flex-col items-center justify-center md:w-18 md:h-18">
                    <item.icon className="w-5 h-5 text-accent mb-1" />
                    <span className="text-[10px] font-medium text-center md:text-xs">{item.label}</span>
                  </div>
                </div>
              );
            })}
            
            {/* Connecting arrows */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 192 192">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--accent))" opacity="0.5" />
                </marker>
              </defs>
              <path
                d="M 96 26 A 70 70 0 0 1 156 131"
                fill="none"
                stroke="hsl(var(--accent))"
                strokeWidth="2"
                strokeOpacity="0.3"
                markerEnd="url(#arrowhead)"
              />
              <path
                d="M 156 131 A 70 70 0 0 1 36 131"
                fill="none"
                stroke="hsl(var(--accent))"
                strokeWidth="2"
                strokeOpacity="0.3"
                markerEnd="url(#arrowhead)"
              />
              <path
                d="M 36 131 A 70 70 0 0 1 96 26"
                fill="none"
                stroke="hsl(var(--accent))"
                strokeWidth="2"
                strokeOpacity="0.3"
                markerEnd="url(#arrowhead)"
              />
            </svg>
          </div>
        </div>
      </div>
    </SlideSection>
  );
};
