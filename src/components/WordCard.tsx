import { ChevronRight } from "lucide-react";

interface WordCardProps {
  sourceWord: string;
  translation: string;
  sourceLanguage: string;
  targetLanguage: string;
  onClick?: () => void;
}

export function WordCard({ sourceWord, translation, sourceLanguage, targetLanguage, onClick }: WordCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-background border-2 border-border rounded-2xl p-4 flex items-center justify-between hover:border-foreground transition-all duration-200 active:scale-[0.99]"
    >
      <div className="text-left">
        <div className="inline-flex items-center gap-1 px-2 py-1 bg-secondary rounded-full text-xs font-semibold text-foreground mb-2">
          <span>{sourceLanguage}</span>
          <span>→</span>
          <span>{targetLanguage}</span>
        </div>
        <h4 className="text-lg font-bold text-foreground">{sourceWord}</h4>
        <p className="text-sm text-muted-foreground font-medium">{translation}</p>
      </div>
      <ChevronRight className="h-5 w-5 text-muted-foreground" />
    </button>
  );
}
