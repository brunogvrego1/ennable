import * as React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AppCardItem {
  id: string | number;
  icon: LucideIcon;
  name: string;
  description: string;
  tag: string;
  tagVariant?: "cyan" | "amber" | "green" | "blue" | "purple";
}

interface AppCardProps {
  app: AppCardItem;
}

const tagColors = {
  cyan: "text-accent border-accent/20",
  amber: "text-amber-600 border-amber-500/20",
  green: "text-emerald-600 border-emerald-500/20",
  blue: "text-blue-600 border-blue-500/20",
  purple: "text-purple-600 border-purple-500/20",
};

const AppCard = ({ app }: AppCardProps) => {
  const IconComponent = app.icon;
  const tagColor = tagColors[app.tagVariant || "cyan"];

  return (
    <div className="flex-shrink-0 w-[160px] md:w-[200px] p-3 md:p-4 tesla-card cursor-pointer transition-all duration-300 hover:translate-y-[-2px]">
      <div className="flex items-start justify-between mb-2 md:mb-3">
        <div className="tesla-icon-container w-9 h-9 md:w-10 md:h-10">
          <IconComponent className="w-4 h-4 md:w-5 md:h-5 text-accent" strokeWidth={1.5} />
        </div>
        <span className={cn("tesla-badge-outline", tagColor)}>
          {app.tag}
        </span>
      </div>
      <h4 className="font-medium text-sm mb-0.5">{app.name}</h4>
      <p className="text-xs text-muted-foreground line-clamp-2 font-light">{app.description}</p>
    </div>
  );
};

export interface AppCardCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  apps: AppCardItem[];
  speed?: number; // Duration in seconds for one complete scroll
}

const AppCardCarousel = React.forwardRef<HTMLDivElement, AppCardCarouselProps>(
  ({ apps, speed = 25, className, ...props }, ref) => {
    // Duplicate apps for seamless infinite scroll
    const duplicatedApps = [...apps, ...apps];

    return (
      <div
        ref={ref}
        className={cn("relative overflow-hidden", className)}
        {...props}
      >
        <motion.div
          className="flex gap-2.5 md:gap-3"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              duration: speed,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: "paused" }}
          style={{ width: "fit-content" }}
        >
          {duplicatedApps.map((app, index) => (
            <AppCard key={`${app.id}-${index}`} app={app} />
          ))}
        </motion.div>
      </div>
    );
  }
);

AppCardCarousel.displayName = "AppCardCarousel";

export { AppCardCarousel, AppCard };
