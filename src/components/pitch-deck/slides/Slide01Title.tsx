import { SlideSection } from "../SlideSection";

export const Slide01Title = () => {
  return (
    <SlideSection id="slide-1" className="relative overflow-hidden">
      {/* Subtle decorative shapes - reduced opacity for Nordic minimalism */}
      <div className="absolute top-10 right-5 w-32 h-32 bg-accent/5 rounded-full blur-3xl sm:top-16 sm:right-8 sm:w-48 sm:h-48 md:top-20 md:right-10 md:w-64 md:h-64" />
      <div className="absolute bottom-10 left-5 w-24 h-24 bg-coral/5 rounded-full blur-3xl sm:bottom-16 sm:left-8 sm:w-36 sm:h-36 md:bottom-20 md:left-10 md:w-48 md:h-48" />
      
      <div className="relative z-10 text-center">
        <h1 className="text-3xl font-semibold tracking-tight mb-3 sm:text-4xl md:text-6xl md:mb-6 lg:text-7xl xl:text-8xl" style={{ letterSpacing: '-0.03em' }}>
          <span className="text-gradient">Project Fluid</span>
        </h1>
        
        <p className="text-lg font-light text-muted-foreground mb-4 sm:text-xl md:text-2xl md:mb-8 lg:text-3xl">
          The world's first generative Operating System for commerce
        </p>
        
        <p className="text-sm text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed font-light md:text-base lg:text-lg">
          Not a static product—a living system that adapts to your business intent.
        </p>
      </div>
    </SlideSection>
  );
};
