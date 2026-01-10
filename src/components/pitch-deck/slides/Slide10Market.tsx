import { SlideSection } from "../SlideSection";

export const Slide10Market = () => {
  return (
    <SlideSection id="slide-10">
      <div className="mb-4 md:mb-6">
        <span className="text-accent font-medium text-xs md:text-sm uppercase tracking-wider">Market Opportunity</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 tracking-tight">
          The $50B "Goldilocks" Zone
        </h2>
        <p className="text-sm md:text-base text-muted-foreground mt-2 max-w-3xl">
          The mid-market is underserved—too complex for SMB tools, too nimble for Enterprise bloat.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-4 md:gap-8 items-center">
        {/* Market visualization */}
        <div className="relative h-40 md:h-56">
          {/* Small Biz blob */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 md:w-20 md:h-20 rounded-full bg-muted/50 border border-border flex items-center justify-center">
            <span className="text-[10px] md:text-xs text-muted-foreground text-center">Small<br/>Biz</span>
          </div>
          
          {/* Mid-Market blob - highlighted */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-28 h-28 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-accent/20 to-coral/20 border-2 border-accent flex items-center justify-center relative">
              <div className="text-center">
                <p className="text-[10px] md:text-xs text-accent font-medium">Mid-Market</p>
                <p className="text-xl md:text-2xl font-bold mt-0.5">$50B</p>
                <p className="text-[10px] md:text-xs text-muted-foreground">Annual Spend</p>
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-accent/30 animate-ping" style={{ animationDuration: '3s' }} />
            </div>
          </div>
          
          {/* Enterprise blob */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 rounded-full bg-muted/30 border border-border flex items-center justify-center">
            <span className="text-[10px] md:text-xs text-muted-foreground text-center">Enterprise</span>
          </div>
        </div>
        
        {/* TAM/SAM breakdown */}
        <div className="space-y-3 md:space-y-4">
          <div className="p-3 md:p-4 bg-card rounded-xl border border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs md:text-sm text-muted-foreground">Total Addressable Market</span>
              <span className="text-lg md:text-xl font-bold">$8B</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-full bg-accent/30 rounded-full" />
            </div>
          </div>
          
          <div className="p-3 md:p-4 bg-card rounded-xl border border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs md:text-sm text-muted-foreground">Serviceable Addressable Market</span>
              <span className="text-lg md:text-xl font-bold">$2B</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-1/4 bg-accent rounded-full" />
            </div>
          </div>
          
          <div className="p-2 md:p-3 bg-accent/5 rounded-lg border border-accent/20">
            <p className="text-xs md:text-sm text-muted-foreground">
              <span className="text-accent font-medium">Strategy:</span> Land and Expand — 
              start with one venue, grow to the entire portfolio.
            </p>
          </div>
        </div>
      </div>
    </SlideSection>
  );
};
