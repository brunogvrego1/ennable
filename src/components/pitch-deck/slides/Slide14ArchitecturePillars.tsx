import { SlideSection } from "../SlideSection";
import { Zap, BarChart3, Monitor, Globe, Database, Cpu, Shield } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    type: "Automation",
    tagline: "The Invisible Worker",
    description: "Background logic that triggers actions across the Semantic Graph without human input.",
    example: "\"The Re-engagement Trigger\": If a VIP customer hasn't visited in 60 days, auto-generate a personalized WhatsApp offer for their favorite wine."
  },
  {
    icon: BarChart3,
    type: "Widget",
    tagline: "The Pulse",
    description: "High-density data components pinned to your dashboard for instant operational awareness.",
    example: "\"Real-Time Occupancy\": A live heat-map showing table turnover, average check size per table, and server efficiency."
  },
  {
    icon: Monitor,
    type: "Interface",
    tagline: "The Specialist Tool",
    description: "Custom-built internal screens designed to guide staff through expert workflows.",
    example: "\"The AI Sommelier\": A dedicated iPad screen that suggests pairings based on the current food order and cellar inventory levels."
  },
  {
    icon: Globe,
    type: "Portal",
    tagline: "The Customer Bridge",
    description: "Full-screen, branded external experiences for direct client interaction.",
    example: "\"The Digital Concierge\": A mobile-first reservation and pre-order portal where guests can select their table and wine vintage in advance."
  }
];

const technicalPoints = [
  {
    icon: Database,
    title: "Semantic Consistency",
    description: "Every component reads from the same source of truth—CRM, Inventory, and POS data are never out of sync."
  },
  {
    icon: Cpu,
    title: "Generative Assembly",
    description: "Describe the outcome in the Creator, and the AI selects the correct architecture automatically."
  },
  {
    icon: Shield,
    title: "Role-Based Security",
    description: "Portals are public and sandboxed; Interfaces are strictly for staff with specific permissions."
  }
];

export const Slide14ArchitecturePillars = () => {
  return (
    <SlideSection id="architecture-pillars">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
            The 4 Architecture Pillars
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Modular Flexibility by Design
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pillars.map((pillar) => (
            <div 
              key={pillar.type}
              className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-4 hover:bg-card/50 transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <pillar.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-foreground">{pillar.type}</h3>
                    <p className="text-xs text-primary/70">{pillar.tagline}</p>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
                
                <div className="bg-muted/20 border border-border/30 rounded px-2 py-1.5">
                  <p className="text-[10px] font-mono text-muted-foreground/80 leading-relaxed">
                    {pillar.example}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Breakdown */}
        <div className="border-t border-border/30 pt-4">
          <p className="text-xs text-muted-foreground/60 uppercase tracking-wider mb-3">
            The "Fluid" Difference
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {technicalPoints.map((point) => (
              <div 
                key={point.title}
                className="flex items-start gap-2"
              >
                <point.icon className="w-3.5 h-3.5 text-primary/60 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-medium text-foreground">{point.title}</h4>
                  <p className="text-[10px] text-muted-foreground/70 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideSection>
  );
};
