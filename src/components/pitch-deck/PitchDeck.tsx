import { Slide01Title } from "./slides/Slide01Title";
import { SlideNewProblem } from "./slides/SlideNewProblem";
import { SlideUseCase } from "./slides/SlideUseCase";
import { SlideFriction } from "./slides/SlideFriction";
import { SlideSolutionMarketplace } from "./slides/SlideSolutionMarketplace";
import { SlideSolutionCustom } from "./slides/SlideSolutionCustom";
import { SlidePowerMove } from "./slides/SlidePowerMove";
import { SlideArchitecture } from "./slides/SlideArchitecture";
import { Slide07Ecosystem } from "./slides/Slide07Ecosystem";
import { SlideValueProp } from "./slides/SlideValueProp";
import { Slide05WhyNow } from "./slides/Slide05WhyNow";
import { Slide08Moat } from "./slides/Slide08Moat";
import { Slide10Market } from "./slides/Slide10Market";
import { SlideContact } from "./slides/SlideContact";
import { ShaderBackground } from "../ui/shader-background";
import { LanguageSwitcher } from "@/components/ui/language-switcher";

export const PitchDeck = () => {
  return (
    <div className="h-screen w-full overflow-hidden relative">
      {/* Language Switcher */}
      <LanguageSwitcher />
        
        {/* Fixed shader background */}
        <div className="fixed inset-0 z-0">
          <ShaderBackground effect="mesh" speed={0.3} className="w-full h-full" />
        </div>
        
        {/* Snap scroll container */}
        <main className="h-screen overflow-y-auto snap-y snap-mandatory relative z-10">
          <Slide01Title />
          <SlideNewProblem />
          <SlideUseCase />
          <SlideFriction />
          <SlideSolutionMarketplace />
          <SlideSolutionCustom />
          <SlidePowerMove />
          <SlideArchitecture />
          <Slide07Ecosystem />
          <SlideValueProp />
          <Slide05WhyNow />
          <Slide08Moat />
          <Slide10Market />
          <SlideContact />
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
