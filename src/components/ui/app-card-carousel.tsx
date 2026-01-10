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
  cyan: "bg-accent/10 text-accent",
  amber: "bg-amber-500/10 text-amber-600",
  green: "bg-emerald-500/10 text-emerald-600",
  blue: "bg-blue-500/10 text-blue-600",
  purple: "bg-purple-500/10 text-purple-600",
};

const AppCard = ({ app }: AppCardProps) => {
  const IconComponent = app.icon;
  const tagColor = tagColors[app.tagVariant || "cyan"];

  return (
    <div className="flex-shrink-0 w-[180px] md:w-[220px] p-3 md:p-4 tesla-card hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-start justify-between mb-2 md:mb-3">
        <div className="tesla-icon-container w-10 h-10 md:w-12 md:h-12">
          <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-accent" />
        </div>
        <span className={cn("text-[10px] md:text-xs px-2 py-0.5 rounded-full font-medium", tagColor)}>
          {app.tag}
        </span>
      </div>
      <h4 className="font-semibold text-sm mb-0.5">{app.name}</h4>
      <p className="text-xs text-muted-foreground line-clamp-2">{app.description}</p>
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
          className="flex gap-3 md:gap-4"
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
