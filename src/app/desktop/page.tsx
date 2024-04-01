"use client";

import { useThemeContext } from "../ThemeContext";

export default function Desktop() {
  const { theme, setTheme } = useThemeContext();

  return (
    <div className="h-100vh bg-base">
      <div className="i-lucide:a-arrow-up w-2em h-2em"></div>
      desktop
      <button
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}>
        切换主题
      </button>
    </div>
  );
}
