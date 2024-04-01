"use client";
import { PropsWithChildren, createContext, useContext, useState } from "react";

type Theme = "dark" | "light";

export interface ThemeContext {
  theme: Theme;
  /** 设置主题 */
  setTheme: (theme: Theme) => void;
}

const themeContext = createContext<ThemeContext>({
  theme: "light",
  setTheme: () => {},
});

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>("light");
  return (
    <themeContext.Provider
      value={{
        theme,
        setTheme,
      }}>
      <div className={theme}>{children}</div>
    </themeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(themeContext);
}
