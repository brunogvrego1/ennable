import { SlideSection } from "../SlideSection";
import { Brain, ShoppingCart, Users, Package, Wallet, BarChart3, CheckCircle2 } from "lucide-react";

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
      <div className="mb-4 sm:mb-6 md:mb-8">
        <span className="tesla-label">The Solution</span>
        <h2 className="slide-title mt-2">
          Reimagine ERP from<br />First Principles
        </h2>
      </div>
      
      <div className="slide-grid-2 items-center">
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          <div className="tesla-card p-3 sm:p-4 md:p-5">
            <h3 className="font-semibold text-sm mb-2 sm:text-base sm:mb-3">Modular Architecture</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {features.map((feature, idx) => (
                <li key={idx} className="tesla-check-item">
                  <CheckCircle2 className="tesla-check-icon w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs text-muted-foreground sm:text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="tesla-dark-card p-3 sm:p-4 md:p-5">
            <h3 className="font-semibold text-sm mb-1 flex items-center gap-2 sm:text-base">
              The Intent-Engine
              <Brain className="w-4 h-4 text-accent sm:w-5 sm:h-5" />
            </h3>
            <p className="text-xs text-white/70 sm:text-sm">
              The system <span className="text-white font-medium">understands</span> your 
              specific business goals and suggests mini-apps accordingly.
            </p>
          </div>
        </div>
        
        {/* Mobile: Linear module list */}
        <div className="flex flex-wrap gap-2 justify-center sm:hidden">
          <div className="tesla-card w-16 h-16 flex flex-col items-center justify-center bg-gradient-to-br from-accent to-coral">
            <Brain className="w-6 h-6 text-white" />
          </div>
          {modules.map((module, index) => (
            <div 
              key={index} 
              className="tesla-card w-14 h-14 flex flex-col items-center justify-center"
            >
              <module.icon className="w-4 h-4 text-accent mb-0.5" />
              <span className="text-[8px] font-medium text-muted-foreground">{module.label}</span>
            </div>
          ))}
        </div>
        
        {/* Desktop: The Fluid Core orbit */}
        <div className="relative hidden sm:flex items-center justify-center h-48 md:h-64">
          <div className="relative">
            {/* Central hub */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-coral flex items-center justify-center shadow-lg shadow-accent/20 md:w-28 md:h-28">
              <Brain className="w-8 h-8 text-white md:w-10 md:h-10" />
            </div>
            
            {/* Surrounding modules */}
            {modules.map((module, index) => {
              const angle = (index * 72 - 90) * (Math.PI / 180);
              const radius = 80;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div 
                  key={index} 
                  className="absolute tesla-card w-12 h-12 flex flex-col items-center justify-center md:w-14 md:h-14"
                  style={{
                    left: `calc(50% + ${x}px - 24px)`,
                    top: `calc(50% + ${y}px - 24px)`
                  }}
                >
                  <module.icon className="w-4 h-4 text-accent mb-0.5 md:w-5 md:h-5" />
                  <span className="text-[8px] font-medium text-muted-foreground md:text-[10px]">{module.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SlideSection>
  );
};
