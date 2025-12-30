import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";

interface AddWordDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (word: { source: string; translation: string; note?: string }) => void;
}

const suggestions = ["Responsibility", "Accountability", "Duty"];

export function AddWordDrawer({ open, onOpenChange, onSave }: AddWordDrawerProps) {
  const [source, setSource] = useState("");
  const [translation, setTranslation] = useState("");
  const [note, setNote] = useState("");

  const handleSave = () => {
    if (source && translation) {
      onSave({ source, translation, note: note || undefined });
      setSource("");
      setTranslation("");
      setNote("");
      onOpenChange(false);
    }
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[90vh]">
        <DrawerHeader className="flex items-center justify-between border-b border-border pb-4">
          <DrawerTitle className="text-xl font-bold">New Word</DrawerTitle>
          <DrawerClose asChild>
            <button className="h-8 w-8 rounded-full border-2 border-border flex items-center justify-center hover:bg-secondary transition-colors">
              <X className="h-4 w-4" />
            </button>
          </DrawerClose>
        </DrawerHeader>

        <div className="p-6 space-y-6">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-3 py-1.5 bg-secondary rounded-full text-sm font-semibold">
              🇩🇪 German → English 🇬🇧
            </span>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Source
            </label>
            <Input
              value={source}
              onChange={(e) => setSource(e.target.value)}
              placeholder="Enter word..."
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Suggestions
            </label>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => setTranslation(suggestion)}
                  className={`px-4 py-2 rounded-full border-2 text-sm font-semibold transition-all duration-200 ${
                    translation === suggestion
                      ? "border-foreground bg-foreground text-background"
                      : "border-border hover:border-foreground"
                  }`}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Translation
            </label>
            <Input
              value={translation}
              onChange={(e) => setTranslation(e.target.value)}
              placeholder="Enter translation..."
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Note (optional)
            </label>
            <Input
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Add a note..."
            />
          </div>

          <Button size="full" onClick={handleSave} disabled={!source || !translation}>
            Save Word
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
