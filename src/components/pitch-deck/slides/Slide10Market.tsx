import { SlideSection } from "../SlideSection";

export const Slide10Market = () => {
  return (
    <SlideSection id="slide-10">
      <div className="mb-4 sm:mb-5 md:mb-6">
        <span className="tesla-label">Market Opportunity</span>
        <h2 className="slide-title mt-2">
          The $50B "Goldilocks" Zone
        </h2>
        <p className="slide-subtitle mt-2 max-w-3xl">
          The mid-market is underserved—too complex for SMB tools, too nimble for Enterprise bloat.
        </p>
      </div>
      
      <div className="slide-grid-2 items-center">
        {/* Market visualization */}
        <div className="relative h-32 sm:h-40 md:h-56">
          {/* Small Biz blob */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 tesla-card w-12 h-12 rounded-full flex items-center justify-center sm:w-14 sm:h-14 md:w-20 md:h-20">
            <span className="text-[9px] text-muted-foreground text-center sm:text-[10px] md:text-xs">Small<br/>Biz</span>
          </div>
          
          {/* Mid-Market blob - highlighted */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent/20 to-coral/20 border-2 border-accent flex items-center justify-center relative sm:w-28 sm:h-28 md:w-40 md:h-40">
              <div className="text-center">
                <p className="text-[9px] text-accent font-medium uppercase tracking-wider sm:text-[10px] md:text-xs">Mid-Market</p>
                <p className="text-lg font-bold mt-0.5 sm:text-xl md:text-2xl">$50B</p>
                <p className="text-[9px] text-muted-foreground sm:text-[10px] md:text-xs">Annual Spend</p>
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-accent/30 animate-ping" style={{ animationDuration: '3s' }} />
            </div>
          </div>
          
          {/* Enterprise blob */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 tesla-card w-14 h-14 rounded-full flex items-center justify-center sm:w-16 sm:h-16 md:w-24 md:h-24">
            <span className="text-[9px] text-muted-foreground text-center sm:text-[10px] md:text-xs">Enterprise</span>
          </div>
        </div>
        
        {/* TAM/SAM breakdown */}
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          <div className="tesla-card p-2 sm:p-3 md:p-4">
            <div className="flex items-center justify-between mb-1 sm:mb-2">
              <span className="text-xs text-muted-foreground sm:text-sm">Total Addressable Market</span>
              <span className="text-base font-bold sm:text-lg md:text-xl">$8B</span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden sm:h-2">
              <div className="h-full w-full bg-accent/30 rounded-full" />
            </div>
          </div>
          
          <div className="tesla-card p-2 sm:p-3 md:p-4">
            <div className="flex items-center justify-between mb-1 sm:mb-2">
              <span className="text-xs text-muted-foreground sm:text-sm">Serviceable Addressable Market</span>
              <span className="text-base font-bold sm:text-lg md:text-xl">$2B</span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden sm:h-2">
              <div className="h-full w-1/4 bg-accent rounded-full" />
            </div>
          </div>
          
          <div className="tesla-dark-card p-2 sm:p-3 md:p-4">
            <p className="text-xs text-white/80 sm:text-sm">
              <span className="text-accent font-medium">Strategy:</span> Land and Expand — 
              start with one venue, grow to the entire portfolio.
            </p>
          </div>
        </div>
      </div>
    </SlideSection>
  );
};
