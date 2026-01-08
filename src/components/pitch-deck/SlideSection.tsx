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
        "min-h-screen flex flex-col justify-center section-padding",
        className
      )}
    >
      <div className="max-w-6xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
};
