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
      <div className="mb-12">
        <span className="text-accent font-medium text-sm uppercase tracking-wider">Architecture</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 tracking-tight">
          The 4 Pillars
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          Modular Flexibility by Design
        </p>
      </div>

      {/* Pillars Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {pillars.map((pillar) => (
          <div 
            key={pillar.type}
            className="p-6 bg-muted/50 rounded-2xl border border-border"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <pillar.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground">{pillar.type}</h3>
                <p className="text-sm text-accent">{pillar.tagline}</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {pillar.description}
            </p>
            
            <div className="p-4 bg-secondary/50 border border-border rounded-xl">
              <p className="text-sm font-mono text-muted-foreground leading-relaxed">
                {pillar.example}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Technical Breakdown */}
      <div className="p-6 bg-gradient-to-br from-accent/5 to-coral/5 rounded-2xl border border-accent/20">
        <h3 className="font-semibold text-lg mb-4">The "Fluid" Difference</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {technicalPoints.map((point) => (
            <div key={point.title} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <point.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">{point.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
