import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {
  const [isLargeText, setIsLargeText] = useState(false);
  const [isDark, setIsDark] = useState(false)
  useEffect(()=> {
    const getText = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem("isLargeText");
        const parsedTheme = storedTheme? JSON.parse(storedTheme): false;
        setIsLargeText(parsedTheme);
      }catch (error) {
        console.error("Error loading theme:", error);
      }
    }
    getText();
  }, [])

  useEffect(()=> {
    const getTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem("isDark");
        const parsedTheme = storedTheme? JSON.parse(storedTheme): false;
        setIsLargeText(parsedTheme);
      }catch (error) {
        console.error("Error loading theme:", error);
      }
    }
    getTheme();
  }, [])
  return (
    <ThemeContext.Provider value={{ isLargeText, setIsLargeText, isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
}