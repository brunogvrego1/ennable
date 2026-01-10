import { SlideSection } from "../SlideSection";
import { Zap, BarChart3, Monitor, Globe, Database, Cpu, Shield, CheckCircle2 } from "lucide-react";

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
      <div className="mb-3 md:mb-6">
        <span className="tesla-label">Architecture</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 tracking-tight">
          The 4 Pillars
        </h2>
        <p className="text-sm md:text-base text-muted-foreground mt-2">
          Modular Flexibility by Design
        </p>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 mb-4 md:mb-6">
        {pillars.map((pillar) => (
          <div 
            key={pillar.type}
            className="tesla-card p-3 md:p-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="tesla-icon-container w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                <pillar.icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-sm md:text-base text-foreground">{pillar.type}</h3>
                <p className="text-xs text-accent hidden sm:block">{pillar.tagline}</p>
              </div>
            </div>
            
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>

      {/* Technical Breakdown */}
      <div className="tesla-dark-card p-3 md:p-4">
        <h3 className="font-semibold text-sm md:text-base mb-3 text-white">The "Fluid" Difference</h3>
        <div className="grid sm:grid-cols-3 gap-3 md:gap-4">
          {technicalPoints.map((point) => (
            <div key={point.title} className="flex items-start gap-2">
              <div className="tesla-icon-container w-8 h-8 md:w-10 md:h-10 flex-shrink-0">
                <point.icon className="w-4 h-4 md:w-5 md:h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-medium text-xs md:text-sm text-white">{point.title}</h4>
                <p className="text-xs text-white/60 leading-relaxed hidden sm:block">
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
