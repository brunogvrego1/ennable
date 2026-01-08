import { SlideSection } from "../SlideSection";
export const Slide01Title = () => {
  return <SlideSection id="slide-1" className="relative overflow-hidden">
      {/* Decorative organic shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-coral/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-8">
          <div className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-sm font-medium text-muted-foreground">Pitch Deck</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="text-gradient">Project Fluid</span>
        </h1>
        
        <p className="text-2xl md:text-3xl lg:text-4xl font-light text-muted-foreground mb-8">
          The world's first generative Operating System for commerce
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Not a static product—a living system that adapts to your business intent.
        </p>
      </div>
    </SlideSection>;
};