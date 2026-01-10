import { SlideSection } from "../SlideSection";
import { User, Briefcase, Target, ArrowRight } from "lucide-react";

const team = [
  { 
    role: "CEO", 
    name: "2x Founder", 
    description: "Built and exited hospitality tech startup. 15 years in F&B.",
    icon: User 
  },
  { 
    role: "CTO", 
    name: "Ex-Salesforce", 
    description: "Led platform engineering. ML/AI expertise.",
    icon: Briefcase 
  },
  { 
    role: "VP Product", 
    name: "Ex-Toast", 
    description: "Scaled product from 100 to 10,000+ customers.",
    icon: Target 
  },
];

const useOfFunds = [
  { category: "Go-to-Market", percentage: 45, amount: "$2.7M" },
  { category: "AI Development", percentage: 35, amount: "$2.1M" },
  { category: "Team Growth", percentage: 20, amount: "$1.2M" },
];

export const Slide12Team = () => {
  return (
    <SlideSection id="slide-12">
      <div className="mb-4 sm:mb-5 md:mb-6">
        <span className="tesla-label">The Ask</span>
        <h2 className="slide-title mt-2">
          Team & Use of Funds
        </h2>
      </div>
      
      <div className="slide-grid-2">
        {/* Team */}
        <div>
          <h3 className="text-sm font-semibold mb-2 sm:mb-3 sm:text-base">Leadership</h3>
          <div className="space-y-2 sm:space-y-3">
            {team.map((member, index) => (
              <div 
                key={index}
                className="tesla-card p-2 flex gap-2 sm:p-3 sm:gap-3 md:p-4"
              >
                <div className="tesla-icon-container w-10 h-10 rounded-full flex-shrink-0 sm:w-12 sm:h-12 md:w-14 md:h-14">
                  <member.icon className="w-4 h-4 text-muted-foreground sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="font-semibold text-xs sm:text-sm">{member.role}</span>
                    <span className="text-xs text-muted-foreground">• {member.name}</span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-1">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-xs text-muted-foreground mt-2 italic hidden sm:block">
            150+ years combined experience in hospitality and SaaS
          </p>
        </div>
        
        {/* Use of Funds */}
        <div>
          <div className="tesla-dark-card p-3 mb-2 sm:p-4 sm:mb-3 md:p-6 md:mb-4">
            <p className="text-xs text-white/60 uppercase tracking-wider mb-0.5 sm:mb-1">Series A Raise</p>
            <div className="text-2xl font-bold text-white mb-0.5 sm:text-3xl sm:mb-1 md:text-4xl">$6M</div>
            <p className="text-xs text-white/70 sm:text-sm">To scale to 500 customers</p>
          </div>
          
          <h3 className="text-sm font-semibold mb-2 sm:text-base">Allocation</h3>
          <div className="space-y-2 sm:space-y-3">
            {useOfFunds.map((item, index) => (
              <div key={index} className="tesla-card p-2 sm:p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium sm:text-sm">{item.category}</span>
                  <span className="text-xs text-muted-foreground">{item.amount}</span>
                </div>
                <div className="h-1 bg-muted rounded-full overflow-hidden sm:h-1.5 md:h-2">
                  <div 
                    className="h-full bg-gradient-to-r from-accent to-coral rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="mt-4 text-center sm:mt-6 md:mt-8">
        <p className="text-sm text-muted-foreground mb-2 sm:mb-3 md:mb-4 md:text-base">
          Ready to join the future of hospitality operations?
        </p>
        <a 
          href="mailto:invest@fluid.io"
          className="tesla-button-dark gap-2"
        >
          Let's Talk
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </SlideSection>
  );
};
