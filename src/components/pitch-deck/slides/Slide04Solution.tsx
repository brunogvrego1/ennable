import { SlideSection } from "../SlideSection";
import { Brain, ShoppingCart, Users, Package, Wallet, BarChart3 } from "lucide-react";

const modules = [
  { icon: ShoppingCart, label: "POS" },
  { icon: Users, label: "CRM" },
  { icon: Package, label: "Inventory" },
  { icon: Wallet, label: "Finance" },
  { icon: BarChart3, label: "Analytics" }
];

export const Slide04Solution = () => {
  return (
    <SlideSection id="slide-4">
      <div className="mb-4 md:mb-8">
        <span className="text-accent font-medium text-xs md:text-sm uppercase tracking-wider">The Solution</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 tracking-tight">
          Reimagine ERP from<br />First Principles
        </h2>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-4 md:gap-8 items-center">
        <div className="space-y-3 md:space-y-4">
          <div className="p-3 md:p-4 bg-card rounded-xl border border-border">
            <h3 className="font-semibold text-sm md:text-base mb-1">Modular Architecture</h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              Start with the essentials. Expand through visual configuration. 
              No code required. No consultants needed.
            </p>
          </div>
          
          <div className="p-3 md:p-4 bg-gradient-to-br from-accent/5 to-coral/5 rounded-xl border border-accent/20">
            <h3 className="font-semibold text-sm md:text-base mb-1 flex items-center gap-2">
              The Intent-Engine
              <Brain className="w-4 h-4 md:w-5 md:h-5 text-accent" />
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              The system <span className="text-foreground font-medium">understands</span> your 
              specific business goals and suggests mini-apps accordingly.
            </p>
          </div>
        </div>
        
        {/* Visual: The Fluid Core */}
        <div className="relative flex items-center justify-center h-48 md:h-64">
          <div className="relative">
            {/* Central hub */}
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-accent to-coral flex items-center justify-center shadow-lg shadow-accent/20">
              <Brain className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            
            {/* Surrounding modules */}
            {modules.map((module, index) => {
              const angle = (index * 72 - 90) * (Math.PI / 180);
              const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 70 : 100;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div 
                  key={index} 
                  className="absolute w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-card border border-border flex flex-col items-center justify-center shadow-sm"
                  style={{
                    left: `calc(50% + ${x}px - 24px)`,
                    top: `calc(50% + ${y}px - 24px)`
                  }}
                >
                  <module.icon className="w-4 h-4 md:w-5 md:h-5 text-accent mb-0.5" />
                  <span className="text-[8px] md:text-[10px] font-medium text-muted-foreground">{module.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SlideSection>
  );
};
