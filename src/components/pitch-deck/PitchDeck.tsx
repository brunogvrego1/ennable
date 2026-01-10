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
import { Slide13CreatorJourney } from "./slides/Slide13CreatorJourney";
import { Slide14ArchitecturePillars } from "./slides/Slide14ArchitecturePillars";
import { ShaderBackground } from "../ui/shader-background";

export const PitchDeck = () => {
  return (
    <div className="h-screen overflow-hidden relative">
      {/* Fixed shader background */}
      <div className="fixed inset-0 z-0">
        <ShaderBackground effect="mesh" speed={0.3} className="w-full h-full" />
      </div>
      
      {/* Snap scroll container */}
      <main className="h-screen overflow-y-auto snap-y snap-mandatory relative z-10">
        <Slide01Title />
        <Slide02Problem />
        <Slide03MarketFailure />
        <Slide04Solution />
        <Slide13CreatorJourney />
        <Slide14ArchitecturePillars />
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
          .fixed { display: none !important; }
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
