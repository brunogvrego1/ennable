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
  { icon: Globe, name: "Multi-language Menus" },
];

export const Slide07Ecosystem = () => {
  return (
    <SlideSection id="slide-7">
      <div className="mb-12">
        <span className="text-accent font-medium text-sm uppercase tracking-wider">The Ecosystem</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 tracking-tight">
          Infinite Extensibility
        </h2>
        <p className="text-xl text-muted-foreground mt-4 max-w-3xl">
          Fluid is a platform, not just a tool. Purpose-built mini-apps created by the community 
          can be installed in minutes.
        </p>
      </div>
      
      {/* App Store mockup */}
      <div className="bg-card rounded-2xl border border-border overflow-hidden">
        <div className="p-4 border-b border-border flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-coral/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
          <div className="w-3 h-3 rounded-full bg-accent/60" />
          <span className="ml-4 text-sm text-muted-foreground">Fluid App Store</span>
        </div>
        
        <div className="p-6 md:p-8">
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {apps.map((app, index) => (
              <div 
                key={index}
                className="p-5 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <app.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">
                    {app.tag}
                  </span>
                </div>
                <h4 className="font-semibold mb-1">{app.name}</h4>
                <p className="text-sm text-muted-foreground">{app.description}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-3">
            {moreApps.map((app, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full"
              >
                <app.icon className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">{app.name}</span>
              </div>
            ))}
            <div className="px-4 py-2 bg-muted/50 rounded-full text-sm text-muted-foreground">
              +47 more
            </div>
          </div>
        </div>
      </div>
    </SlideSection>
  );
};
