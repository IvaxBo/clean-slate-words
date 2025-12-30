import { useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BottomNav } from "@/components/BottomNav";
import { QuizQuestion } from "@/components/QuizQuestion";
import { QuizResult } from "@/components/QuizResult";
import { Progress } from "@/components/ui/progress";

const quizQuestions = [
  {
    question: "Verantwortung",
    language: "German",
    options: ["Responsibility", "Freedom", "Happiness", "Adventure"],
    correctAnswer: "Responsibility",
  },
  {
    question: "Nachhaltigkeit",
    language: "German",
    options: ["Speed", "Sustainability", "Creativity", "Patience"],
    correctAnswer: "Sustainability",
  },
  {
    question: "Gemütlichkeit",
    language: "German",
    options: ["Sadness", "Anger", "Coziness", "Excitement"],
    correctAnswer: "Coziness",
  },
];

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
