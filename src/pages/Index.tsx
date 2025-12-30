import { Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { BottomNav } from "@/components/BottomNav";
import { StatsCard } from "@/components/StatsCard";
import { DailyQuizCard } from "@/components/DailyQuizCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-md mx-auto px-5 pt-8">
        <header className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-foreground">Palabrita</h1>
            <p className="text-muted-foreground font-medium">Build your vocabulary</p>
          </div>
          <Link
            to="/settings"
            className="h-10 w-10 rounded-full border-2 border-border flex items-center justify-center hover:bg-secondary transition-colors"
          >
            <Settings className="h-5 w-5 text-foreground" />
          </Link>
        </header>

        <div className="space-y-4">
          <StatsCard wordsSaved={124} dayStreak={12} />
          <DailyQuizCard />
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Index;
