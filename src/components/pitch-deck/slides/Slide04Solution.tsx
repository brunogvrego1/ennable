import { SlideSection } from "../SlideSection";
import { Brain, ShoppingCart, Users, Package, Wallet, BarChart3 } from "lucide-react";

const modules = [
  { icon: ShoppingCart, label: "POS" },
  { icon: Users, label: "CRM" },
  { icon: Package, label: "Inventory" },
  { icon: Wallet, label: "Finance" },
  { icon: BarChart3, label: "Analytics" },
];

export const Slide04Solution = () => {
  return (
    <SlideSection id="slide-4">
      <div className="mb-12">
        <span className="text-accent font-medium text-sm uppercase tracking-wider">The Solution</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 tracking-tight">
          Reimagine ERP from<br />First Principles
        </h2>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="p-6 bg-card rounded-xl border border-border">
            <h3 className="font-semibold text-lg mb-2">Modular Architecture</h3>
            <p className="text-muted-foreground">
              Start with the essentials. Expand through visual configuration. 
              No code required. No consultants needed.
            </p>
          </div>
          
          <div className="p-6 bg-gradient-to-br from-accent/5 to-coral/5 rounded-xl border border-accent/20">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <Brain className="w-5 h-5 text-accent" />
              The Intent-Engine
            </h3>
            <p className="text-muted-foreground">
              The system doesn't just have features—it <span className="text-foreground font-medium">understands</span> your 
              specific business goals and adapts its behavior accordingly.
            </p>
          </div>
        </div>
        
        {/* Visual: The Fluid Core */}
        <div className="relative flex items-center justify-center">
          <div className="relative">
            {/* Central hub */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent to-coral flex items-center justify-center shadow-lg shadow-accent/20">
              <Brain className="w-12 h-12 text-white" />
            </div>
            
            {/* Surrounding modules */}
            {modules.map((module, index) => {
              const angle = (index * 72 - 90) * (Math.PI / 180);
              const radius = 120;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div
                  key={index}
                  className="absolute w-16 h-16 rounded-xl bg-card border border-border flex flex-col items-center justify-center shadow-sm"
                  style={{
                    left: `calc(50% + ${x}px - 32px)`,
                    top: `calc(50% + ${y}px - 32px)`,
                  }}
                >
                  <module.icon className="w-5 h-5 text-accent mb-1" />
                  <span className="text-[10px] font-medium text-muted-foreground">{module.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SlideSection>
  );
};
