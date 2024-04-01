"use client";
import { PropsWithChildren } from "react";
import { useThemeContext } from "../ThemeContext";

export default function DesktopLayout({ children }: PropsWithChildren) {
  const { theme } = useThemeContext();

  return <div className={theme}>{children}</div>;
}
