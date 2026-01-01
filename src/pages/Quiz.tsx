import { useState } from "react";
import { X, BookOpen, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BottomNav } from "@/components/BottomNav";
import { QuizQuestion } from "@/components/QuizQuestion";
import { QuizResult } from "@/components/QuizResult";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

// Empty array to simulate no words - replace with actual data source
const quizQuestions: Array<{
  question: string;
  language: string;
  options: string[];
  correctAnswer: string;
}> = [];

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsComplete(false);
  };

  // Empty state - no words available
  if (quizQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-background pb-24">
        <div className="max-w-md mx-auto px-5 pt-8">
          <header className="flex items-center mb-6">
            <button
              onClick={() => navigate(-1)}
              className="h-10 w-10 flex items-center justify-center"
            >
              <ArrowLeft className="h-6 w-6 text-foreground" />
            </button>
            <span className="font-bold text-foreground ml-2">Quiz</span>
          </header>

          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center mb-6">
              <BookOpen className="h-10 w-10 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              No Words Yet
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xs">
              Add some words to your list first, then come back to test your knowledge!
            </p>
            <Button onClick={() => navigate("/list")} className="px-8">
              Add Words
            </Button>
          </div>
        </div>
        <BottomNav />
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  if (isComplete) {
    return (
      <div className="min-h-screen bg-background pb-24">
        <div className="max-w-md mx-auto px-5 pt-8">
          <QuizResult
            score={score}
            total={quizQuestions.length}
            onRetry={handleRetry}
          />
        </div>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-md mx-auto px-5 pt-8">
        <header className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate("/")}
            className="h-10 w-10 flex items-center justify-center"
          >
            <X className="h-6 w-6 text-foreground" />
          </button>
          <span className="font-bold text-foreground">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </span>
          <span className="font-bold text-foreground">Score: {score}</span>
        </header>

        <Progress value={progress} className="mb-6 h-2" />

        <QuizQuestion
          key={currentQuestion}
          question={quizQuestions[currentQuestion].question}
          language={quizQuestions[currentQuestion].language}
          options={quizQuestions[currentQuestion].options}
          correctAnswer={quizQuestions[currentQuestion].correctAnswer}
          onAnswer={handleAnswer}
          onNext={handleNext}
        />
      </div>
      <BottomNav />
    </div>
  );
};

export default Quiz;
