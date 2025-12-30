import { BookMarked, List, Brain } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: BookMarked, label: "Home", path: "/" },
  { icon: List, label: "List", path: "/list" },
  { icon: Brain, label: "Quiz", path: "/quiz" },
];

export function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border">
      <div className="max-w-md mx-auto flex items-center justify-around h-20">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center gap-1 py-2 px-6 transition-colors duration-200",
                isActive ? "text-foreground" : "text-muted-foreground"
              )}
            >
              <item.icon
                className={cn(
                  "h-6 w-6 transition-all duration-200",
                  isActive && "stroke-[2.5px]"
                )}
              />
              <span className={cn(
                "text-xs font-semibold",
                isActive && "font-bold"
              )}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
