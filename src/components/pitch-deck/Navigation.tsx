import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  onDownload: () => void;
}

export const Navigation = ({ onDownload }: NavigationProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-coral flex items-center justify-center">
            <span className="text-white font-bold text-sm">F</span>
          </div>
          <span className="font-semibold text-xl tracking-tight">Fluid</span>
        </div>
        
        <Button 
          onClick={onDownload}
          variant="outline"
          className="gap-2 border-primary/20 hover:bg-secondary"
        >
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">Download PDF</span>
        </Button>
      </div>
    </nav>
  );
};
