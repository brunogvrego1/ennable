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
    <div className="min-h-screen bg-background">
      <Navigation onDownload={handleDownload} />
      
      {/* Add top padding to account for fixed nav */}
      <main className="pt-16">
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
          main { padding-top: 0 !important; }
          section { 
            page-break-after: always;
            min-height: 100vh;
          }
          section:last-child {
            page-break-after: auto;
          }
        }
      `}</style>
    </div>
  );
};
