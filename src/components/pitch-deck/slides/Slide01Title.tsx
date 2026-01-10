import { SlideSection } from "../SlideSection";

export const Slide01Title = () => {
  return (
    <SlideSection id="slide-1" className="relative overflow-hidden">
      {/* Decorative organic shapes */}
      <div className="absolute top-10 md:top-20 right-5 md:right-10 w-32 md:w-64 h-32 md:h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 md:bottom-20 left-5 md:left-10 w-24 md:w-48 h-24 md:h-48 bg-coral/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-secondary rounded-full mb-4 md:mb-8">
          <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-accent" />
          <span className="text-xs md:text-sm font-medium text-muted-foreground">Pitch Deck</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-3 md:mb-6">
          <span className="text-gradient">Project Fluid</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-muted-foreground mb-4 md:mb-8">
          The world's first generative Operating System for commerce
        </p>
        
        <p className="text-sm md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Not a static product—a living system that adapts to your business intent.
        </p>
      </div>
    </SlideSection>
  );
};
