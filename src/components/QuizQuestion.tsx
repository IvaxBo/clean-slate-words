import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
interface QuizQuestionProps {
  question: string;
  language: string;
  options: string[];
  correctAnswer: string;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
}
export function QuizQuestion({
  question,
  language,
  options,
  correctAnswer,
  onAnswer,
  onNext
}: QuizQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const handleSelectAnswer = (answer: string) => {
    if (hasAnswered) return;
    setSelectedAnswer(answer);
    setHasAnswered(true);
    onAnswer(answer === correctAnswer);
  };
  const getButtonVariant = (option: string) => {
    if (!hasAnswered) return "quiz";
    if (option === correctAnswer) return "quizCorrect";
    if (option === selectedAnswer && option !== correctAnswer) return "quizIncorrect";
    return "quiz";
  };
  return <div className="flex flex-col h-full">
      <div className="bg-secondary rounded-2xl p-6 mb-6 animate-fade-in">
        <p className="text-center text-muted-foreground text-sm font-medium mb-2">
          Translate this word:
        </p>
        <h2 className="text-3xl font-extrabold text-center text-foreground mb-3">
          {question}
        </h2>
        <div className="flex justify-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-primary-foreground text-primary">
            🇩🇪 {language}
          </span>
        </div>
      </div>

      <div className="flex-1 space-y-3">
        {options.map((option, index) => <Button key={option} variant={getButtonVariant(option)} size="full" onClick={() => handleSelectAnswer(option)} className={cn("justify-between animate-slide-up", hasAnswered && option === correctAnswer && "font-bold")} style={{
        animationDelay: `${index * 0.05}s`
      }}>
            <span className="pl-3">{option}</span>
            {hasAnswered && option === correctAnswer && <Check className="h-5 w-5" />}
            {hasAnswered && option === selectedAnswer && option !== correctAnswer && <X className="h-5 w-5" />}
          </Button>)}
      </div>

      {hasAnswered && <Button size="full" onClick={onNext} className="mt-6 animate-fade-in">
          Next Question
        </Button>}
    </div>;
}