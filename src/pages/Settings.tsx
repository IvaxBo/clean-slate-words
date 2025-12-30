import { LogOut, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/BottomNav";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
const languages = [{
  value: "ru",
  label: "Русский (Russian)"
}, {
  value: "en",
  label: "English"
}, {
  value: "de",
  label: "Deutsch (German)"
}, {
  value: "es",
  label: "Español (Spanish)"
}, {
  value: "fr",
  label: "Français (French)"
}];
const Settings = () => {
  const navigate = useNavigate();
  return <div className="min-h-screen bg-background pb-24">
      <div className="max-w-md mx-auto px-5 pt-8">
        <header className="flex items-center gap-4 mb-8">
          <button onClick={() => navigate(-1)} className="h-10 w-10 flex items-center justify-center -ml-2">
            <ChevronLeft className="h-6 w-6 text-foreground" />
          </button>
          <h1 className="text-3xl font-extrabold text-foreground">Settings</h1>
        </header>

        <div className="space-y-8">
          <section>
            <h2 className="text-lg font-bold text-foreground mb-4">I want to learn</h2>
            <div className="space-y-2">
              
              <Select defaultValue="ru">
                <SelectTrigger className="h-14 rounded-2xl border-2 text-base font-medium">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {languages.map(lang => <SelectItem key={lang.value} value={lang.value}>
                      {lang.label}
                    </SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </section>

          <section>
            
            <Button 
              variant="outline" 
              size="full" 
              className="text-destructive border-destructive hover:bg-destructive/10"
              onClick={() => navigate('/login')}
            >
              <LogOut className="h-5 w-5" />
              Sign Out
            </Button>
          </section>
        </div>
      </div>
      <BottomNav />
    </div>;
};
export default Settings;