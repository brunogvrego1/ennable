import { SlideSection } from "../SlideSection";
import { User, Briefcase, Target, ArrowRight } from "lucide-react";

const team = [
  { 
    role: "CEO", 
    name: "2x Founder", 
    description: "Built and exited hospitality tech startup. 15 years in F&B operations.",
    icon: User 
  },
  { 
    role: "CTO", 
    name: "Ex-Salesforce", 
    description: "Led platform engineering for enterprise products. ML/AI expertise.",
    icon: Briefcase 
  },
  { 
    role: "VP Product", 
    name: "Ex-Toast", 
    description: "Scaled product from 100 to 10,000+ restaurant customers.",
    icon: Target 
  },
];

const useOfFunds = [
  { category: "Go-to-Market", percentage: 45, amount: "$2.7M" },
  { category: "AI Feature Development", percentage: 35, amount: "$2.1M" },
  { category: "Team Growth", percentage: 20, amount: "$1.2M" },
];

export const Slide12Team = () => {
  return (
    <SlideSection id="slide-12" className="bg-secondary/30">
      <div className="mb-12">
        <span className="text-accent font-medium text-sm uppercase tracking-wider">The Ask</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 tracking-tight">
          Team & Use of Funds
        </h2>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Team */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Leadership</h3>
          <div className="space-y-4">
            {team.map((member, index) => (
              <div 
                key={index}
                className="p-5 bg-card rounded-xl border border-border flex gap-5"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/20 to-coral/20 flex items-center justify-center flex-shrink-0">
                  <member.icon className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold">{member.role}</span>
                    <span className="text-sm text-muted-foreground">• {member.name}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-sm text-muted-foreground mt-4 italic">
            150+ years combined experience in hospitality and SaaS
          </p>
        </div>
        
        {/* Use of Funds */}
        <div>
          <div className="p-8 bg-gradient-to-br from-accent/10 to-coral/10 rounded-2xl border border-accent/30 mb-6">
            <p className="text-sm text-muted-foreground mb-2">Series A Raise</p>
            <div className="text-5xl font-bold text-gradient mb-2">$6M</div>
            <p className="text-muted-foreground">To scale to 500 customers</p>
          </div>
          
          <h3 className="text-lg font-semibold mb-4">Allocation</h3>
          <div className="space-y-4">
            {useOfFunds.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">{item.category}</span>
                  <span className="text-sm text-muted-foreground">{item.amount}</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
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
      <div className="mt-16 text-center">
        <p className="text-xl text-muted-foreground mb-6">
          Ready to join the future of hospitality operations?
        </p>
        <a 
          href="mailto:invest@fluid.io"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-coral text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
        >
          Let's Talk
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </SlideSection>
  );
};
