import { SlideSection } from "../SlideSection";
import { Wine, Gift, MessageSquare, Sparkles, Clock, Globe } from "lucide-react";

const apps = [
  { icon: Wine, name: "AI Sommelier", description: "Smart wine pairing recommendations", tag: "AI-Powered" },
  { icon: Gift, name: "Loyalty Rewards", description: "Points & tier-based loyalty program", tag: "Popular" },
  { icon: MessageSquare, name: "SMS Re-engagement", description: "Automated guest re-engagement", tag: "Marketing" },
];

const moreApps = [
  { icon: Sparkles, name: "Sake Pairing" },
  { icon: Clock, name: "Shift Scheduler" },
  { icon: Globe, name: "Multi-language" },
];

export const Slide07Ecosystem = () => {
  return (
    <SlideSection id="slide-7">
      <div className="mb-4 md:mb-6">
        <span className="tesla-label">The Ecosystem</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 tracking-tight">
          Infinite Extensibility
        </h2>
        <p className="text-sm md:text-base text-muted-foreground mt-2 max-w-3xl">
          Fluid is a platform, not just a tool. Purpose-built mini-apps created by the community.
        </p>
      </div>
      
      {/* App Store mockup */}
      <div className="tesla-card overflow-hidden">
        <div className="p-2 md:p-3 border-b border-border/50 flex items-center gap-1.5 md:gap-2 bg-muted/30">
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-coral/60" />
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-400/60" />
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[hsl(142,76%,36%)]/60" />
          <span className="ml-2 md:ml-4 text-xs md:text-sm text-muted-foreground font-medium">Fluid App Store</span>
        </div>
        
        <div className="p-3 md:p-6">
          <div className="grid md:grid-cols-3 gap-2 md:gap-3 mb-3 md:mb-4">
            {apps.map((app, index) => (
              <div 
                key={index}
                className="p-3 md:p-4 bg-muted/30 rounded-2xl hover:bg-muted/50 transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2 md:mb-3">
                  <div className="tesla-icon-container w-10 h-10 md:w-12 md:h-12">
                    <app.icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <span className="text-[10px] md:text-xs px-2 py-0.5 bg-accent/10 text-accent rounded-full font-medium">
                    {app.tag}
                  </span>
                </div>
                <h4 className="font-semibold text-sm mb-0.5">{app.name}</h4>
                <p className="text-xs text-muted-foreground line-clamp-1">{app.description}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-2">
            {moreApps.map((app, index) => (
              <div 
                key={index}
                className="flex items-center gap-1.5 px-3 py-1.5 tesla-card"
              >
                <app.icon className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground" />
                <span className="text-xs font-medium">{app.name}</span>
              </div>
            ))}
            <div className="px-3 py-1.5 bg-muted/50 rounded-full text-xs text-muted-foreground font-medium">
              +47 more
            </div>
          </div>
        </div>
      </div>
    </SlideSection>
  );
};
