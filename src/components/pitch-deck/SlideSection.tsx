import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { containerVariants, viewportSettings } from "./motion-variants";

interface SlideSectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export const SlideSection = ({ id, className, children }: SlideSectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "h-screen w-full flex flex-col justify-center px-4 py-4 sm:px-6 sm:py-6 md:px-12 md:py-8 lg:px-24 snap-start snap-always shrink-0 overflow-hidden",
        className
      )}
    >
      <motion.div 
        className="max-w-6xl mx-auto w-full overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
      >
        {children}
      </motion.div>
    </section>
  );
};
