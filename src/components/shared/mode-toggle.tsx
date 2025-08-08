import { useTheme } from "@/hooks/useTheme";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  return theme === "dark" ? (
    <Button onClick={() => setTheme("light")} variant="outline" size="icon">
      <Sun />
    </Button>
  ) : (
    <Button onClick={() => setTheme("dark")} variant="outline" size="icon">
      <Moon />
    </Button>
  );
};

export default ModeToggle;
