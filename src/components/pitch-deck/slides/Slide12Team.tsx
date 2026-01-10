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
      <div className="mb-4 md:mb-6">
        <span className="text-accent font-medium text-xs md:text-sm uppercase tracking-wider">The Ask</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 tracking-tight">
          Team & Use of Funds
        </h2>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-4 md:gap-8">
        {/* Team */}
        <div>
          <h3 className="text-sm md:text-base font-semibold mb-3">Leadership</h3>
          <div className="space-y-2 md:space-y-3">
            {team.map((member, index) => (
              <div 
                key={index}
                className="p-3 md:p-4 bg-card rounded-xl border border-border flex gap-3"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-accent/20 to-coral/20 flex items-center justify-center flex-shrink-0">
                  <member.icon className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="font-semibold text-sm">{member.role}</span>
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
          <div className="p-4 md:p-6 bg-gradient-to-br from-accent/10 to-coral/10 rounded-xl border border-accent/30 mb-3 md:mb-4">
            <p className="text-xs text-muted-foreground mb-1">Series A Raise</p>
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">$6M</div>
            <p className="text-xs md:text-sm text-muted-foreground">To scale to 500 customers</p>
          </div>
          
          <h3 className="text-sm md:text-base font-semibold mb-2">Allocation</h3>
          <div className="space-y-2 md:space-y-3">
            {useOfFunds.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs md:text-sm font-medium">{item.category}</span>
                  <span className="text-xs text-muted-foreground">{item.amount}</span>
                </div>
                <div className="h-1.5 md:h-2 bg-muted rounded-full overflow-hidden">
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
      <div className="mt-4 md:mt-8 text-center">
        <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
          Ready to join the future of hospitality operations?
        </p>
        <a 
          href="mailto:invest@fluid.io"
          className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-accent to-coral text-white font-semibold text-sm md:text-base rounded-lg md:rounded-xl hover:opacity-90 transition-opacity"
        >
          Let's Talk
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </SlideSection>
  );
};
