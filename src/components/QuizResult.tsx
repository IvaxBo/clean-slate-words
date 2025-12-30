import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface QuizResultProps {
  score: number;
  total: number;
  onRetry: () => void;
}

export function QuizResult({ score, total, onRetry }: QuizResultProps) {
  const navigate = useNavigate();
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] animate-fade-in">
      <div className="h-24 w-24 rounded-full bg-foreground flex items-center justify-center mb-6">
        <Check className="h-12 w-12 text-background" strokeWidth={3} />
      </div>
      
      <h1 className="text-3xl font-extrabold text-foreground mb-2">Quiz Complete!</h1>
      <p className="text-muted-foreground font-medium mb-2">Your Score</p>
      <p className="text-6xl font-extrabold text-foreground mb-2">{score}/{total}</p>
      <p className="text-muted-foreground font-medium mb-8">{percentage}% Correct</p>

      <p className="text-lg font-semibold text-foreground mb-4">
        💪 Keep practicing!
      </p>

      <div className="w-full max-w-xs space-y-3">
        <Button
          size="full"
          onClick={onRetry}
        >
          Try Again
        </Button>
        <Button
          variant="outline"
          size="full"
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
}
