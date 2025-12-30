import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-sm space-y-8 animate-fade-in">
        <div className="flex flex-col items-center text-center">
          <div className="h-20 w-20 bg-foreground rounded-2xl flex items-center justify-center mb-4">
            <MessageSquare className="h-10 w-10 text-background" />
          </div>
          <h1 className="text-3xl font-extrabold text-foreground">Palabrita</h1>
          <p className="text-muted-foreground font-medium mt-1">Build your vocabulary</p>
        </div>

        <form onSubmit={handleSignIn} className="space-y-4">
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" size="full">
            Sign In
          </Button>
        </form>

        <p className="text-center text-muted-foreground font-medium">
          Don't have an account?{" "}
          <button className="text-foreground font-bold hover:underline">
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
