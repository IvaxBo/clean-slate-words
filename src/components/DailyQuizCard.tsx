import { Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function DailyQuizCard() {
  const navigate = useNavigate();

  return (
    <div className="bg-background border-2 border-border rounded-2xl p-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-foreground">Daily Quiz</h3>
          <p className="text-muted-foreground text-sm font-medium mt-1">Test your knowledge</p>
        </div>
        <div className="h-12 w-12 rounded-full border-2 border-border flex items-center justify-center">
          <Brain className="h-6 w-6 text-foreground" />
        </div>
      </div>
      <Button 
        size="full" 
        onClick={() => navigate("/quiz")}
        className="mt-2"
      >
        Start Quiz
      </Button>
    </div>
  );
}
