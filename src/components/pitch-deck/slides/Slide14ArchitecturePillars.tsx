import { SlideSection } from "../SlideSection";
import { Zap, BarChart3, Monitor, Globe, Database, Cpu, Shield } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    type: "Automation",
    tagline: "The Invisible Worker",
    description: "Background logic triggering actions without human input."
  },
  {
    icon: BarChart3,
    type: "Widget",
    tagline: "The Pulse",
    description: "High-density data components for instant awareness."
  },
  {
    icon: Monitor,
    type: "Interface",
    tagline: "The Specialist Tool",
    description: "Custom internal screens for expert workflows."
  },
  {
    icon: Globe,
    type: "Portal",
    tagline: "The Customer Bridge",
    description: "Branded external experiences for client interaction."
  }
];

const technicalPoints = [
  {
    icon: Database,
    title: "Semantic Consistency",
    description: "Single source of truth—CRM, Inventory, POS always in sync."
  },
  {
    icon: Cpu,
    title: "Generative Assembly",
    description: "Describe outcomes; AI selects the correct architecture."
  },
  {
    icon: Shield,
    title: "Role-Based Security",
    description: "Portals are sandboxed; Interfaces require permissions."
  }
];

export const Slide14ArchitecturePillars = () => {
  return (
    <SlideSection id="architecture-pillars">
      <div className="mb-3 sm:mb-4 md:mb-6">
        <span className="tesla-label">Architecture</span>
        <h2 className="slide-title mt-2">
          The 4 Pillars
        </h2>
        <p className="slide-subtitle mt-2 font-light">
          Modular Flexibility by Design
        </p>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-2 gap-2 mb-3 sm:gap-2.5 md:grid-cols-4 md:gap-3 md:mb-5">
        {pillars.map((pillar) => (
          <div 
            key={pillar.type}
            className="tesla-card p-2.5 sm:p-3 md:p-4"
          >
            <div className="flex items-center gap-1.5 mb-1.5 sm:gap-2 sm:mb-2">
              <div className="tesla-icon-container w-8 h-8 flex-shrink-0 sm:w-9 sm:h-9 md:w-10 md:h-10">
                <pillar.icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-medium text-xs text-foreground sm:text-sm">{pillar.type}</h3>
                <p className="text-[9px] text-accent hidden sm:block">{pillar.tagline}</p>
              </div>
            </div>
            
            <p className="text-[10px] text-muted-foreground leading-relaxed line-clamp-2 font-light sm:text-xs">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>

      {/* Technical Breakdown */}
      <div className="tesla-dark-card p-2.5 sm:p-3 md:p-4">
        <h3 className="font-medium text-sm mb-2 text-foreground sm:text-base sm:mb-3">The "Fluid" Difference</h3>
        <div className="grid gap-2 sm:grid-cols-3 sm:gap-3">
          {technicalPoints.map((point) => (
            <div key={point.title} className="flex items-start gap-2">
              <div className="tesla-icon-container w-7 h-7 flex-shrink-0 sm:w-8 sm:h-8">
                <point.icon className="w-3.5 h-3.5 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-medium text-xs text-foreground sm:text-sm">{point.title}</h4>
                <p className="text-[10px] text-foreground/60 leading-relaxed hidden font-light sm:block sm:text-xs">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideSection>
  );
};
