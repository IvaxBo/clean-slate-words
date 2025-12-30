import { Flame } from "lucide-react";
interface StatsCardProps {
  wordsSaved: number;
  dayStreak: number;
}
export function StatsCard({
  wordsSaved,
  dayStreak
}: StatsCardProps) {
  return <div className="bg-background border-2 rounded-2xl p-6 animate-fade-in border-primary">
      <div className="flex items-center justify-around">
        <div className="text-center">
          <p className="text-4xl font-extrabold text-foreground">{wordsSaved}</p>
          <p className="text-sm text-muted-foreground font-medium mt-1">Words Saved</p>
        </div>
        <div className="h-12 w-px bg-border" />
        <div className="text-center flex flex-col items-center">
          <div className="flex items-center gap-1">
            <Flame className="h-6 w-6 text-foreground" />
            <span className="text-4xl font-extrabold text-foreground">{dayStreak}</span>
          </div>
          <p className="text-sm text-muted-foreground font-medium mt-1">Day Streak</p>
        </div>
      </div>
    </div>;
}