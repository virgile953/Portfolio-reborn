import { useState, useRef, useEffect } from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Moon, SunDim } from "lucide-react";

type props = {
  className?: string;
};

export const AnimatedThemeToggler = ({ className }: props) => {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Ensure component is mounted before rendering (prevents hydration mismatch)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Sync local state with theme state
  useEffect(() => {
    console.log("Theme changed to:", theme);
  }, [theme]);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <button className={cn("flex items-center justify-center p-2 rounded-md transition-colors hover:bg-accent text-foreground", className)}>
        <Moon size={18} />
      </button>
    );
  }
  const changeTheme = async () => {
    if (!buttonRef.current) return;

    const newTheme = theme === "dark" ? "light" : "dark";
    // Check if startViewTransition is available
    if (typeof window !== 'undefined' && 'startViewTransition' in document) {
      await document.startViewTransition(() => {
        flushSync(() => {
          setTheme(newTheme);
          setIsDarkMode(newTheme === "dark");
        });
      }).ready;
      localStorage.setItem("theme", newTheme);

      const { top, left, width, height } =
        buttonRef.current.getBoundingClientRect();
      const y = top + height / 2;
      const x = left + width / 2;

      const right = window.innerWidth - left;
      const bottom = window.innerHeight - top;
      const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRad}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 700,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    } else {
      setTheme(newTheme);
      setIsDarkMode(newTheme === "dark");
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={changeTheme}
      className={cn(
        "flex items-center justify-center p-2 rounded-md transition-colors hover:bg-accent text-foreground",
        className
      )}
    >
      {isDarkMode ? <SunDim size={18} /> : <Moon size={18} />}
    </button>
  );
};
