import { SlideSection } from "../SlideSection";
import { Wine, Gift, MessageSquare, Sparkles, Clock, Globe, Users, TrendingUp, CreditCard, Utensils } from "lucide-react";
import { AppCardCarousel, type AppCardItem } from "@/components/ui/app-card-carousel";

const apps: AppCardItem[] = [
  { id: 1, icon: Wine, name: "AI Sommelier", description: "Smart wine pairing recommendations for any dish", tag: "AI-Powered", tagVariant: "cyan" },
  { id: 2, icon: Gift, name: "Loyalty Rewards", description: "Points & tier-based loyalty program", tag: "Popular", tagVariant: "amber" },
  { id: 3, icon: MessageSquare, name: "SMS Re-engagement", description: "Automated guest re-engagement campaigns", tag: "Marketing", tagVariant: "green" },
  { id: 4, icon: Sparkles, name: "Sake Pairing", description: "Japanese sake matching for every palate", tag: "AI-Powered", tagVariant: "cyan" },
  { id: 5, icon: Clock, name: "Shift Scheduler", description: "Staff scheduling & availability management", tag: "Operations", tagVariant: "blue" },
  { id: 6, icon: Globe, name: "Multi-language", description: "Auto-translation for global guests", tag: "Essential", tagVariant: "purple" },
  { id: 7, icon: Users, name: "Table Management", description: "Reservations & intelligent seating", tag: "Popular", tagVariant: "amber" },
  { id: 8, icon: TrendingUp, name: "Analytics Dashboard", description: "Real-time business insights & trends", tag: "Business", tagVariant: "green" },
  { id: 9, icon: CreditCard, name: "Split Payments", description: "Easy bill splitting for groups", tag: "Essential", tagVariant: "purple" },
  { id: 10, icon: Utensils, name: "Menu Builder", description: "Dynamic menu creation & updates", tag: "Operations", tagVariant: "blue" },
];

export const Slide07Ecosystem = () => {
  return (
    <SlideSection id="slide-7">
      <div className="mb-3 sm:mb-4 md:mb-6">
        <span className="tesla-label">The Ecosystem</span>
        <h2 className="slide-title mt-2">
          Infinite Extensibility
        </h2>
        <p className="slide-subtitle mt-2 max-w-3xl">
          Fluid is a platform, not just a tool. Purpose-built mini-apps created by the community.
        </p>
      </div>
      
      {/* App Store mockup */}
      <div className="tesla-card overflow-hidden">
        <div className="p-1.5 border-b border-border/50 flex items-center gap-1.5 bg-muted/30 sm:p-2 md:p-3 md:gap-2">
          <div className="w-2 h-2 rounded-full bg-coral/60 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3" />
          <div className="w-2 h-2 rounded-full bg-yellow-400/60 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3" />
          <div className="w-2 h-2 rounded-full bg-[hsl(142,76%,36%)]/60 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3" />
          <span className="ml-2 text-xs text-muted-foreground font-medium sm:ml-3 md:ml-4 md:text-sm">Fluid App Store</span>
        </div>
        
        <div className="p-2 sm:p-3 md:p-6">
          {/* Animated App Carousel */}
          <AppCardCarousel apps={apps} speed={30} className="mb-3 sm:mb-4" />
          
          <div className="flex flex-wrap gap-2 justify-center">
            <div className="px-2 py-1 bg-muted/50 rounded-full text-xs text-muted-foreground font-medium sm:px-3 sm:py-1.5">
              +47 more apps
            </div>
            <div className="px-2 py-1 bg-accent/10 rounded-full text-xs text-accent font-medium sm:px-3 sm:py-1.5">
              Build your own
            </div>
          </div>
        </div>
      </div>
    </SlideSection>
  );
};
