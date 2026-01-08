import { SlideSection } from "../SlideSection";
import { Users, AppWindow, Database, ArrowRight, RefreshCw } from "lucide-react";

const flywheel = [
  { icon: Users, label: "More Users" },
  { icon: AppWindow, label: "More Mini-Apps" },
  { icon: Database, label: "Richer Data" },
];

export const Slide08Moat = () => {
  return (
    <SlideSection id="slide-8">
      <div className="mb-12">
        <span className="text-accent font-medium text-sm uppercase tracking-wider">The Moat</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 tracking-tight">
          Defensibility &<br />Network Effects
        </h2>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          
          <div className="p-6 bg-gradient-to-br from-accent/5 to-coral/5 rounded-xl border border-accent/20">
            <h3 className="font-semibold text-lg mb-3">Two-Fold Moat</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">1.</span>
                Deep understanding of business operations enables Credit Services and insurance offerings
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">2.</span>
                Network effects from community-built app store
              </li>
            </ul>
          </div>
          
          <p className="text-muted-foreground italic">
            Once the mini apps are able to offer support for ultra specific needs, switching costs become insurmountable.
          </p>
        </div>
        
        {/* Flywheel diagram */}
        <div className="relative flex items-center justify-center py-12">
          <div className="relative w-72 h-72">
            {/* Central refresh icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <RefreshCw className="w-12 h-12 text-accent/30" />
            </div>
            
            {/* Flywheel nodes */}
            {flywheel.map((item, index) => {
              const angle = (index * 120 - 90) * (Math.PI / 180);
              const radius = 100;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div
                  key={index}
                  className="absolute flex flex-col items-center"
                  style={{
                    left: `calc(50% + ${x}px - 40px)`,
                    top: `calc(50% + ${y}px - 40px)`,
                  }}
                >
                  <div className="w-20 h-20 rounded-xl bg-card border border-border shadow-sm flex flex-col items-center justify-center">
                    <item.icon className="w-6 h-6 text-accent mb-1" />
                    <span className="text-xs font-medium text-center">{item.label}</span>
                  </div>
                </div>
              );
            })}
            
            {/* Connecting arrows */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 288 288">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--accent))" opacity="0.5" />
                </marker>
              </defs>
              {/* Arrow paths forming a circle */}
              <path
                d="M 144 44 A 100 100 0 0 1 230 194"
                fill="none"
                stroke="hsl(var(--accent))"
                strokeWidth="2"
                strokeOpacity="0.3"
                markerEnd="url(#arrowhead)"
              />
              <path
                d="M 230 194 A 100 100 0 0 1 58 194"
                fill="none"
                stroke="hsl(var(--accent))"
                strokeWidth="2"
                strokeOpacity="0.3"
                markerEnd="url(#arrowhead)"
              />
              <path
                d="M 58 194 A 100 100 0 0 1 144 44"
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
