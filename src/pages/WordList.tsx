import { useState } from "react";
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/BottomNav";
import { WordCard } from "@/components/WordCard";
import { AddWordDrawer } from "@/components/AddWordDrawer";

const mockWords = [
  { id: 1, source: "Verantwortung", translation: "Responsibility", sourceLanguage: "DE", targetLanguage: "EN" },
  { id: 2, source: "Nachhaltigkeit", translation: "Sustainability", sourceLanguage: "DE", targetLanguage: "EN" },
  { id: 3, source: "Gemütlichkeit", translation: "Coziness", sourceLanguage: "DE", targetLanguage: "EN" },
  { id: 4, source: "Schadenfreude", translation: "Glee at misfortune", sourceLanguage: "DE", targetLanguage: "EN" },
  { id: 5, source: "Zeitgeist", translation: "Spirit of the times", sourceLanguage: "DE", targetLanguage: "EN" },
];

const WordList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [words, setWords] = useState(mockWords);

  const filteredWords = words.filter(
    (word) =>
      word.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
      word.translation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSaveWord = (newWord: { source: string; translation: string; note?: string }) => {
    setWords([
      ...words,
      {
        id: words.length + 1,
        source: newWord.source,
        translation: newWord.translation,
        sourceLanguage: "DE",
        targetLanguage: "EN",
      },
    ]);
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-md mx-auto px-5 pt-8">
        <header className="mb-6">
          <h1 className="text-3xl font-extrabold text-foreground">Word List</h1>
          <p className="text-muted-foreground font-medium">All your saved words</p>
        </header>

        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search words..."
            className="pl-12"
          />
        </div>

        <div className="space-y-3">
          {filteredWords.map((word, index) => (
            <div
              key={word.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <WordCard
                sourceWord={word.source}
                translation={word.translation}
                sourceLanguage={word.sourceLanguage}
                targetLanguage={word.targetLanguage}
              />
            </div>
          ))}
        </div>

        <Button
          size="icon"
          className="fixed bottom-28 right-6 h-14 w-14 rounded-full shadow-lg"
          onClick={() => setIsDrawerOpen(true)}
        >
          <Plus className="h-6 w-6" />
        </Button>
      </div>

      <AddWordDrawer
        open={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        onSave={handleSaveWord}
      />
      <BottomNav />
    </div>
  );
};

export default WordList;
