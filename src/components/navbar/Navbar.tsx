import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const USERNAME = "john_doe";

export const Navbar: React.FC = () => {
  const [dark, setDark] = useState(() =>
    typeof window !== 'undefined'
      ? (localStorage.getItem("theme") ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")) === "dark"
      : false
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <nav className="w-full px-6 h-16 flex items-center justify-between border-b border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-800 transition-colors">
      {/* Left: Logo */}
      <div className="flex items-center">
        <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">Wealth Manager</span>
      </div>
      {/* Right: Avatar, username, dark mode toggle */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-blue-600 dark:bg-blue-400 w-8 h-8 flex items-center justify-center text-white text-lg font-medium">
            {USERNAME[0].toUpperCase()}
          </span>
          <span className="text-gray-700 dark:text-gray-100 text-sm">{USERNAME}</span>
        </div>
        <button
          onClick={() => setDark((d) => !d)}
          className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-xl cursor-pointer"
          aria-label="Toggle dark mode"
        >
          {dark ? (
            // Sun: white in dark mode, yellow in light
            <Sun className="w-6 h-6 text-yellow-400 dark:text-white" />
          ) : (
            // Moon: default color
            <Moon className="w-6 h-6 text-gray-600" />
          )}
        </button>
      </div>
    </nav>
  );
};
