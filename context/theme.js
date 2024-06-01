import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {
  const [isLargeText, setIsLargeText] = useState(false);
  const [isDark, setIsDark] = useState(false)

  return (
    <ThemeContext.Provider value={{ isLargeText, setIsLargeText, isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
}