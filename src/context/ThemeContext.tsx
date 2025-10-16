import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
const ThemeContext = createContext({ theme: "light" as Theme, toggle: () => {} });

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    return (saved as Theme) || "light";
  });

 useEffect(() => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  if (typeof window !== "undefined") {
    localStorage.setItem("theme", theme);
  }
}, [theme]);
  return <ThemeContext.Provider value={{ theme, toggle: () => setTheme(t => (t === "light" ? "dark" : "light")) }}>{children}</ThemeContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);