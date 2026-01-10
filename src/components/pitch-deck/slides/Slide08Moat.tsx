import { SlideSection } from "../SlideSection";
import { Users, AppWindow, Database, RefreshCw } from "lucide-react";

const flywheel = [
  { icon: Users, label: "More Users" },
  { icon: AppWindow, label: "More Mini-Apps" },
  { icon: Database, label: "Richer Data" },
];

export const Slide08Moat = () => {
  return (
    <SlideSection id="slide-8">
      <div className="mb-4 md:mb-6">
        <span className="text-accent font-medium text-xs md:text-sm uppercase tracking-wider">The Moat</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 tracking-tight">
          Defensibility &<br />Network Effects
        </h2>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-4 md:gap-8 items-center">
        <div className="space-y-3 md:space-y-4">
          <div className="p-3 md:p-4 bg-gradient-to-br from-accent/5 to-coral/5 rounded-xl border border-accent/20">
            <h3 className="font-semibold text-sm md:text-base mb-2">Two-Fold Moat</h3>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">1.</span>
                Deep understanding enables Credit Services and insurance offerings
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">2.</span>
                Network effects from community-built app store
              </li>
            </ul>
          </div>
          
          <p className="text-xs md:text-sm text-muted-foreground italic">
            Once mini apps support ultra-specific needs, switching costs become insurmountable.
          </p>
        </div>
        
        {/* Flywheel diagram */}
        <div className="relative flex items-center justify-center py-4 md:py-8">
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            {/* Central refresh icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <RefreshCw className="w-8 h-8 md:w-12 md:h-12 text-accent/30" />
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
                  <div className="w-16 h-16 md:w-18 md:h-18 rounded-lg bg-card border border-border shadow-sm flex flex-col items-center justify-center">
                    <item.icon className="w-5 h-5 text-accent mb-1" />
                    <span className="text-[10px] md:text-xs font-medium text-center">{item.label}</span>
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
