import { cn } from "@/lib/utils";
import { ReactNode } from "react";

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
      <div className="max-w-6xl mx-auto w-full overflow-hidden">
        {children}
      </div>
    </section>
  );
};
