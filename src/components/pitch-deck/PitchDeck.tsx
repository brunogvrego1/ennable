import { Navigation } from "./Navigation";
import { Slide01Title } from "./slides/Slide01Title";
import { Slide02Problem } from "./slides/Slide02Problem";
import { Slide03MarketFailure } from "./slides/Slide03MarketFailure";
import { Slide04Solution } from "./slides/Slide04Solution";
import { Slide05WhyNow } from "./slides/Slide05WhyNow";
import { Slide06Speed } from "./slides/Slide06Speed";
import { Slide07Ecosystem } from "./slides/Slide07Ecosystem";
import { Slide08Moat } from "./slides/Slide08Moat";
import { Slide09Results } from "./slides/Slide09Results";
import { Slide10Market } from "./slides/Slide10Market";
import { Slide11Economics } from "./slides/Slide11Economics";
import { Slide12Team } from "./slides/Slide12Team";

export const PitchDeck = () => {
  const handleDownload = () => {
    // Create a printable version by triggering print dialog
    window.print();
  };

  return (
    <div className="h-screen bg-background overflow-hidden">
      <Navigation onDownload={handleDownload} />
      
      {/* Snap scroll container */}
      <main className="h-screen pt-16 overflow-y-auto snap-y snap-mandatory">
        <Slide01Title />
        <Slide02Problem />
        <Slide03MarketFailure />
        <Slide04Solution />
        <Slide05WhyNow />
        <Slide06Speed />
        <Slide07Ecosystem />
        <Slide08Moat />
        <Slide09Results />
        <Slide10Market />
        <Slide11Economics />
        <Slide12Team />
      </main>
      
      {/* Print styles */}
      <style>{`
        @media print {
          nav { display: none !important; }
          main { 
            padding-top: 0 !important;
            overflow: visible !important;
            height: auto !important;
            scroll-snap-type: none !important;
          }
          section { 
            page-break-after: always;
            height: 100vh !important;
            scroll-snap-align: none !important;
          }
          section:last-child {
            page-break-after: auto;
          }
        }
      `}</style>
    </div>
  );
};
