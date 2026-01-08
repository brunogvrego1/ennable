import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  onDownload: () => void;
}

export const Navigation = ({ onDownload }: NavigationProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        onClick={onDownload}
        variant="outline"
        className="gap-2 bg-background/80 backdrop-blur-md border-primary/20 hover:bg-secondary shadow-lg"
      >
        <Download className="w-4 h-4" />
        <span className="hidden sm:inline">Download PDF</span>
      </Button>
    </div>
  );
};
